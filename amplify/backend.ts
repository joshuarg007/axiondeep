import { defineBackend } from '@aws-amplify/backend';
import { auth } from './functions/auth/resource';
import { content } from './functions/content/resource';
import { upload } from './functions/upload/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';

/**
 * Axion Deep Labs Sales Portal Backend
 *
 * This backend powers the sales portal with:
 * - Simple password authentication (contractor + admin)
 * - Content management (CRUD operations)
 * - File storage with presigned URLs
 */
export const backend = defineBackend({
  auth,
  content,
  upload,
  data,
  storage,
});
