import { defineStorage } from '@aws-amplify/backend';

/**
 * S3 Storage for Sales Portal
 * Access controlled via Lambda functions (presigned URLs)
 */
export const storage = defineStorage({
  name: 'salesPortalContent',
});
