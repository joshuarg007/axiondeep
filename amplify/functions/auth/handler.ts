import { Handler } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const JWT_SECRET = process.env.JWT_SECRET || 'change-this-in-production';
const APP_CONFIG_TABLE = process.env.APP_CONFIG_TABLE || 'axiondeep-config';

const CONTRACTOR_TOKEN_EXPIRY = '8h';
const ADMIN_TOKEN_EXPIRY = '2h';

interface VerifyRequest {
  password: string;
  role: 'contractor' | 'admin';
}

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type,Authorization',
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
};

export const handler: Handler = async (event) => {
  // Lambda Function URLs use requestContext.http.method
  const method = event.requestContext?.http?.method || event.httpMethod || 'GET';

  if (method === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (method !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    const body: VerifyRequest = JSON.parse(event.body || '{}');
    const { password, role } = body;

    if (!password || !role) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Password and role are required' }),
      };
    }

    if (role !== 'contractor' && role !== 'admin') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Invalid role' }),
      };
    }

    const configKey = role === 'admin' ? 'ADMIN_PASSWORD_HASH' : 'CONTRACTOR_PASSWORD_HASH';

    const result = await docClient.send(
      new GetCommand({
        TableName: APP_CONFIG_TABLE,
        Key: { configKey },
      })
    );

    if (!result.Item) {
      console.error(`No password hash found for ${role}`);
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ message: 'Invalid password' }),
      };
    }

    const storedHash = result.Item.value;
    const isValid = await bcrypt.compare(password, storedHash);

    if (!isValid) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ message: 'Invalid password' }),
      };
    }

    const expiresIn = role === 'admin' ? ADMIN_TOKEN_EXPIRY : CONTRACTOR_TOKEN_EXPIRY;
    const token = jwt.sign({ role }, JWT_SECRET, { expiresIn });

    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + (role === 'admin' ? 2 : 8));

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        token,
        expiresAt: expiresAt.toISOString(),
      }),
    };
  } catch (error) {
    console.error('Auth error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};
