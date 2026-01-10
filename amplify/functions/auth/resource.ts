import { defineFunction } from '@aws-amplify/backend';

export const auth = defineFunction({
  name: 'auth',
  entry: './handler.ts',
  environment: {
    JWT_SECRET: process.env.JWT_SECRET || 'change-this-in-production',
  },
  timeoutSeconds: 30,
});
