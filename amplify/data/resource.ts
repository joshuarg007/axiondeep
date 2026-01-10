import { defineData } from '@aws-amplify/backend';

/**
 * DynamoDB Schema for Sales Portal
 *
 * Tables:
 * - ContentMetadata: Stores content information (title, description, file info)
 * - AppConfig: Stores application configuration (password hashes)
 */

const schema = /* GraphQL */ `
  type ContentMetadata @model @auth(rules: [{ allow: custom }]) {
    id: ID!
    category: String!
    title: String!
    description: String
    fileKey: String!
    fileName: String!
    fileType: String!
    fileSize: Int!
    tags: [String]
    createdAt: AWSDateTime!
    updatedAt: AWSDateTime!
  }

  type AppConfig @model @auth(rules: [{ allow: custom }]) {
    configKey: ID!
    value: String!
  }
`;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'lambda',
  },
});
