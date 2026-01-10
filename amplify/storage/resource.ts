import { defineStorage } from '@aws-amplify/backend';

/**
 * S3 Storage Configuration for Sales Portal
 *
 * Bucket structure:
 * - content/training-videos/
 * - content/pricing/
 * - content/collateral/
 * - content/faq/
 * - content/commission/
 */
export const storage = defineStorage({
  name: 'salesPortalContent',
  access: (allow) => ({
    'content/*': [
      allow.guest.to(['read']),    // Authenticated users can read
      allow.authenticated.to(['read', 'write', 'delete']),  // Admin can write/delete
    ],
  }),
});
