import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  QueryCommand,
  GetCommand,
  PutCommand,
  UpdateCommand,
  DeleteCommand,
} from '@aws-sdk/lib-dynamodb';
import { S3Client, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import * as jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

const dynamoClient = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(dynamoClient);
const s3Client = new S3Client({});

const JWT_SECRET = process.env.JWT_SECRET || 'change-this-in-production';
const CONTENT_TABLE = process.env.CONTENT_TABLE || 'ContentMetadata';
const BUCKET_NAME = process.env.BUCKET_NAME || 'sales-portal-content';

interface JwtPayload {
  role: 'contractor' | 'admin';
}

function verifyToken(authHeader: string | undefined): JwtPayload | null {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.substring(7);

  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch {
    return null;
  }
}

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type,Authorization',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
};

export const handler: APIGatewayProxyHandler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  // Verify authentication
  const payload = verifyToken(event.headers.Authorization || event.headers.authorization);

  if (!payload) {
    return {
      statusCode: 401,
      headers,
      body: JSON.stringify({ message: 'Unauthorized' }),
    };
  }

  const isAdmin = payload.role === 'admin';
  const path = event.path;
  const method = event.httpMethod;

  try {
    // GET /api/content - List content
    if (method === 'GET' && path === '/api/content') {
      const category = event.queryStringParameters?.category;
      const limit = parseInt(event.queryStringParameters?.limit || '50', 10);

      let items: any[] = [];

      if (category) {
        const result = await docClient.send(
          new QueryCommand({
            TableName: CONTENT_TABLE,
            KeyConditionExpression: 'category = :category',
            ExpressionAttributeValues: {
              ':category': category,
            },
            Limit: limit,
            ScanIndexForward: false, // Descending order (newest first)
          })
        );
        items = result.Items || [];
      } else {
        // For all content, we'd need to scan or query each category
        // This is simplified - in production, consider a GSI
        const result = await docClient.send(
          new QueryCommand({
            TableName: CONTENT_TABLE,
            KeyConditionExpression: 'category = :category',
            ExpressionAttributeValues: {
              ':category': 'training-videos',
            },
            Limit: limit,
          })
        );
        items = result.Items || [];
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ items }),
      };
    }

    // GET /api/content/:id - Get single content with download URL
    if (method === 'GET' && path.match(/^\/api\/content\/[\w-]+$/)) {
      const id = path.split('/').pop();

      // First, we need to find the item (this is simplified - in production use GSI)
      // For now, assuming id format includes category info or using scan
      const result = await docClient.send(
        new GetCommand({
          TableName: CONTENT_TABLE,
          Key: { id },
        })
      );

      if (!result.Item) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ message: 'Content not found' }),
        };
      }

      const item = result.Item;

      // Generate presigned download URL
      const command = new GetObjectCommand({
        Bucket: BUCKET_NAME,
        Key: item.fileKey,
      });

      const downloadUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ item, downloadUrl }),
      };
    }

    // POST /api/content - Create content (admin only)
    if (method === 'POST' && path === '/api/content') {
      if (!isAdmin) {
        return {
          statusCode: 403,
          headers,
          body: JSON.stringify({ message: 'Admin access required' }),
        };
      }

      const body = JSON.parse(event.body || '{}');
      const { category, title, description, tags, fileName, fileType, fileSize } = body;

      if (!category || !title || !fileName || !fileType || !fileSize) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ message: 'Missing required fields' }),
        };
      }

      const id = uuidv4();
      const now = new Date().toISOString();
      const fileKey = `content/${category}/${id}/${fileName}`;

      const item = {
        id,
        category,
        title,
        description: description || '',
        fileKey,
        fileName,
        fileType,
        fileSize,
        tags: tags || [],
        createdAt: now,
        updatedAt: now,
      };

      await docClient.send(
        new PutCommand({
          TableName: CONTENT_TABLE,
          Item: item,
        })
      );

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ item }),
      };
    }

    // PUT /api/content/:id - Update content (admin only)
    if (method === 'PUT' && path.match(/^\/api\/content\/[\w-]+$/)) {
      if (!isAdmin) {
        return {
          statusCode: 403,
          headers,
          body: JSON.stringify({ message: 'Admin access required' }),
        };
      }

      const id = path.split('/').pop();
      const body = JSON.parse(event.body || '{}');
      const { title, description, tags } = body;

      const now = new Date().toISOString();

      const result = await docClient.send(
        new UpdateCommand({
          TableName: CONTENT_TABLE,
          Key: { id },
          UpdateExpression: 'SET title = :title, description = :description, tags = :tags, updatedAt = :updatedAt',
          ExpressionAttributeValues: {
            ':title': title,
            ':description': description || '',
            ':tags': tags || [],
            ':updatedAt': now,
          },
          ReturnValues: 'ALL_NEW',
        })
      );

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ item: result.Attributes }),
      };
    }

    // DELETE /api/content/:id - Delete content (admin only)
    if (method === 'DELETE' && path.match(/^\/api\/content\/[\w-]+$/)) {
      if (!isAdmin) {
        return {
          statusCode: 403,
          headers,
          body: JSON.stringify({ message: 'Admin access required' }),
        };
      }

      const id = path.split('/').pop();

      // Get item first to get file key
      const getResult = await docClient.send(
        new GetCommand({
          TableName: CONTENT_TABLE,
          Key: { id },
        })
      );

      if (getResult.Item) {
        // Delete from S3
        await s3Client.send(
          new DeleteObjectCommand({
            Bucket: BUCKET_NAME,
            Key: getResult.Item.fileKey,
          })
        );

        // Delete from DynamoDB
        await docClient.send(
          new DeleteCommand({
            TableName: CONTENT_TABLE,
            Key: { id },
          })
        );
      }

      return {
        statusCode: 204,
        headers,
        body: '',
      };
    }

    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ message: 'Not found' }),
    };
  } catch (error) {
    console.error('Content error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};
