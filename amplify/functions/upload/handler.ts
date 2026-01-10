import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import * as jwt from 'jsonwebtoken';

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
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
};

export const handler: APIGatewayProxyHandler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
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

  // Only admins can upload
  if (payload.role !== 'admin') {
    return {
      statusCode: 403,
      headers,
      body: JSON.stringify({ message: 'Admin access required' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { contentId, fileName, fileType, fileSize } = body;

    if (!contentId || !fileName || !fileType || !fileSize) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Missing required fields' }),
      };
    }

    // Validate file size (500MB max)
    const maxSize = 500 * 1024 * 1024;
    if (fileSize > maxSize) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'File too large. Maximum size is 500MB.' }),
      };
    }

    // Get content item to verify it exists and get category
    const getResult = await docClient.send(
      new GetCommand({
        TableName: CONTENT_TABLE,
        Key: { id: contentId },
      })
    );

    if (!getResult.Item) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ message: 'Content not found' }),
      };
    }

    const category = getResult.Item.category;
    const fileKey = `content/${category}/${contentId}/${fileName}`;

    // Generate presigned upload URL
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: fileKey,
      ContentType: fileType,
    });

    const uploadUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

    // Update content item with new file info
    const now = new Date().toISOString();
    await docClient.send(
      new UpdateCommand({
        TableName: CONTENT_TABLE,
        Key: { id: contentId },
        UpdateExpression: 'SET fileKey = :fileKey, fileName = :fileName, fileType = :fileType, fileSize = :fileSize, updatedAt = :updatedAt',
        ExpressionAttributeValues: {
          ':fileKey': fileKey,
          ':fileName': fileName,
          ':fileType': fileType,
          ':fileSize': fileSize,
          ':updatedAt': now,
        },
      })
    );

    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 1);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        uploadUrl,
        expiresAt: expiresAt.toISOString(),
      }),
    };
  } catch (error) {
    console.error('Upload error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};
