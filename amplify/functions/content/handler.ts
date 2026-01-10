import { Handler } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  ScanCommand,
  GetCommand,
  PutCommand,
  UpdateCommand,
  DeleteCommand,
} from '@aws-sdk/lib-dynamodb';
import { S3Client, GetObjectCommand, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import * as jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

const dynamoClient = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(dynamoClient);
const s3Client = new S3Client({});

const JWT_SECRET = process.env.JWT_SECRET || 'change-this-in-production';
const CONTENT_TABLE = process.env.CONTENT_TABLE || 'axiondeep-content';
const BUCKET_NAME = process.env.BUCKET_NAME || '';

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

export const handler: Handler = async (event) => {
  const method = event.requestContext?.http?.method || event.httpMethod || 'GET';

  // Verify authentication
  const authHeader = event.headers?.Authorization || event.headers?.authorization;
  const payload = verifyToken(authHeader);

  if (!payload) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Unauthorized' }),
    };
  }

  const isAdmin = payload.role === 'admin';

  try {
    // Handle GET requests (list, get)
    if (method === 'GET') {
      const params = event.queryStringParameters || {};
      const action = params.action || 'list';

      if (action === 'list') {
        const category = params.category;
        const limit = parseInt(params.limit || '50', 10);

        const result = await docClient.send(
          new ScanCommand({
            TableName: CONTENT_TABLE,
            Limit: limit,
            ...(category && {
              FilterExpression: 'category = :category',
              ExpressionAttributeValues: { ':category': category },
            }),
          })
        );

        return {
          statusCode: 200,
          body: JSON.stringify({ items: result.Items || [] }),
        };
      }

      if (action === 'get' && params.id) {
        const result = await docClient.send(
          new GetCommand({
            TableName: CONTENT_TABLE,
            Key: { id: params.id },
          })
        );

        if (!result.Item) {
          return {
            statusCode: 404,
            body: JSON.stringify({ message: 'Content not found' }),
          };
        }

        const item = result.Item;
        let downloadUrl = null;

        if (item.fileKey) {
          const command = new GetObjectCommand({
            Bucket: BUCKET_NAME,
            Key: item.fileKey,
          });
          downloadUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
        }

        return {
          statusCode: 200,
          body: JSON.stringify({ item, downloadUrl }),
        };
      }
    }

    // Handle POST requests (create, update, delete, getUploadUrl)
    if (method === 'POST') {
      const body = JSON.parse(event.body || '{}');
      const action = body.action;

      if (action === 'create') {
        if (!isAdmin) {
          return {
            statusCode: 403,
            body: JSON.stringify({ message: 'Admin access required' }),
          };
        }

        const { category, title, description, tags, fileName, fileType, fileSize } = body;

        if (!category || !title) {
          return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Category and title are required' }),
          };
        }

        const id = uuidv4();
        const now = new Date().toISOString();
        const fileKey = fileName ? `content/${category}/${id}/${fileName}` : null;

        const item = {
          id,
          category,
          title,
          description: description || '',
          fileKey,
          fileName: fileName || null,
          fileType: fileType || null,
          fileSize: fileSize || null,
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

        // If there's a file, generate upload URL
        let uploadUrl = null;
        if (fileKey && fileName && fileType) {
          const command = new PutObjectCommand({
            Bucket: BUCKET_NAME,
            Key: fileKey,
            ContentType: fileType,
          });
          uploadUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
        }

        return {
          statusCode: 200,
          body: JSON.stringify({ item, uploadUrl }),
        };
      }

      if (action === 'update') {
        if (!isAdmin) {
          return {
            statusCode: 403,
            body: JSON.stringify({ message: 'Admin access required' }),
          };
        }

        const { id, title, description, tags } = body;
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
          body: JSON.stringify({ item: result.Attributes }),
        };
      }

      if (action === 'delete') {
        if (!isAdmin) {
          return {
            statusCode: 403,
            body: JSON.stringify({ message: 'Admin access required' }),
          };
        }

        const { id } = body;

        const getResult = await docClient.send(
          new GetCommand({
            TableName: CONTENT_TABLE,
            Key: { id },
          })
        );

        if (getResult.Item?.fileKey) {
          await s3Client.send(
            new DeleteObjectCommand({
              Bucket: BUCKET_NAME,
              Key: getResult.Item.fileKey,
            })
          );
        }

        await docClient.send(
          new DeleteCommand({
            TableName: CONTENT_TABLE,
            Key: { id },
          })
        );

        return {
          statusCode: 200,
          body: JSON.stringify({ success: true }),
        };
      }

      if (action === 'getUploadUrl') {
        if (!isAdmin) {
          return {
            statusCode: 403,
            body: JSON.stringify({ message: 'Admin access required' }),
          };
        }

        const { contentId, fileName, fileType } = body;

        const getResult = await docClient.send(
          new GetCommand({
            TableName: CONTENT_TABLE,
            Key: { id: contentId },
          })
        );

        if (!getResult.Item) {
          return {
            statusCode: 404,
            body: JSON.stringify({ message: 'Content not found' }),
          };
        }

        const fileKey = `content/${getResult.Item.category}/${contentId}/${fileName}`;

        // Update the content item with file info
        await docClient.send(
          new UpdateCommand({
            TableName: CONTENT_TABLE,
            Key: { id: contentId },
            UpdateExpression: 'SET fileKey = :fileKey, fileName = :fileName, fileType = :fileType',
            ExpressionAttributeValues: {
              ':fileKey': fileKey,
              ':fileName': fileName,
              ':fileType': fileType,
            },
          })
        );

        const command = new PutObjectCommand({
          Bucket: BUCKET_NAME,
          Key: fileKey,
          ContentType: fileType,
        });
        const uploadUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

        return {
          statusCode: 200,
          body: JSON.stringify({ uploadUrl, fileKey }),
        };
      }
    }

    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid action' }),
    };
  } catch (error) {
    console.error('Content error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};
