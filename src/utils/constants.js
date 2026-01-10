export const CONTENT_CATEGORIES = [
  { id: 'training-videos', label: 'Training', icon: '🎬' },
  { id: 'pricing', label: 'Pricing', icon: '💰' },
  { id: 'collateral', label: 'Collateral', icon: '📁' },
  { id: 'faq', label: 'FAQ & Scripts', icon: '📋' },
  { id: 'commission', label: 'Commission', icon: '📊' },
];

export const FILE_TYPE_ICONS = {
  'video/mp4': '🎬',
  'video/webm': '🎬',
  'video/quicktime': '🎬',
  'application/pdf': '📄',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': '📊',
  'application/vnd.ms-powerpoint': '📊',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '📈',
  'application/vnd.ms-excel': '📈',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '📝',
  'application/msword': '📝',
  'image/png': '🖼️',
  'image/jpeg': '🖼️',
  'image/gif': '🖼️',
  'text/plain': '📋',
};

export const ALLOWED_FILE_TYPES = [
  'video/mp4',
  'video/webm',
  'video/quicktime',
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/msword',
  'image/png',
  'image/jpeg',
  'image/gif',
  'text/plain',
];

export const MAX_FILE_SIZE = 500 * 1024 * 1024; // 500MB

export function getFileIcon(fileType) {
  return FILE_TYPE_ICONS[fileType] || '📎';
}

export function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export function isVideoFile(fileType) {
  return fileType?.startsWith('video/');
}
