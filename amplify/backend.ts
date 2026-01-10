import { defineBackend } from '@aws-amplify/backend';
import { auth } from './functions/auth/resource';
import { content } from './functions/content/resource';
import { upload } from './functions/upload/resource';
import { storage } from './storage/resource';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

/**
 * Axion Deep Labs Sales Portal Backend
 *
 * Simple password auth with Lambda functions for:
 * - Auth verification
 * - Content CRUD
 * - File upload presigned URLs
 */
const backend = defineBackend({
  auth,
  content,
  upload,
  storage,
});

// Create DynamoDB tables
const contentTable = new dynamodb.Table(
  backend.createStack('ContentStack'),
  'ContentMetadata',
  {
    partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
    billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    tableName: 'axiondeep-content',
  }
);

// Add GSI for category queries
contentTable.addGlobalSecondaryIndex({
  indexName: 'by-category',
  partitionKey: { name: 'category', type: dynamodb.AttributeType.STRING },
  sortKey: { name: 'createdAt', type: dynamodb.AttributeType.STRING },
});

const configTable = new dynamodb.Table(
  backend.createStack('ConfigStack'),
  'AppConfig',
  {
    partitionKey: { name: 'configKey', type: dynamodb.AttributeType.STRING },
    billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    tableName: 'axiondeep-config',
  }
);

// Grant Lambda functions access to tables
contentTable.grantReadWriteData(backend.auth.resources.lambda);
contentTable.grantReadWriteData(backend.content.resources.lambda);
contentTable.grantReadWriteData(backend.upload.resources.lambda);

configTable.grantReadData(backend.auth.resources.lambda);

// Export table names as environment variables for Lambda functions
backend.auth.addEnvironment('CONTENT_TABLE', contentTable.tableName);
backend.auth.addEnvironment('APP_CONFIG_TABLE', configTable.tableName);

backend.content.addEnvironment('CONTENT_TABLE', contentTable.tableName);
backend.content.addEnvironment('BUCKET_NAME', backend.storage.resources.bucket.bucketName);

backend.upload.addEnvironment('CONTENT_TABLE', contentTable.tableName);
backend.upload.addEnvironment('BUCKET_NAME', backend.storage.resources.bucket.bucketName);

// Grant S3 access to content and upload functions
backend.storage.resources.bucket.grantReadWrite(backend.content.resources.lambda);
backend.storage.resources.bucket.grantReadWrite(backend.upload.resources.lambda);

export { backend };
