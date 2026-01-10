import { defineFunction } from '@aws-amplify/backend';

export const content = defineFunction({
  name: 'content',
  entry: './handler.ts',
  environment: {
    JWT_SECRET: process.env.JWT_SECRET || 'change-this-in-production',
  },
  timeoutSeconds: 30,
});
