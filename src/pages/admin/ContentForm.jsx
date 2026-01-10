import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { api } from '../../services/api';
import { CONTENT_CATEGORIES, ALLOWED_FILE_TYPES, MAX_FILE_SIZE, formatFileSize, getFileIcon } from '../../utils/constants';

function FileUploader({ onFileSelect, currentFile, disabled }) {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState(null);

  const validateFile = (file) => {
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return 'File type not supported. Please upload a video, PDF, or document.';
    }
    if (file.size > MAX_FILE_SIZE) {
      return `File too large. Maximum size is ${formatFileSize(MAX_FILE_SIZE)}.`;
    }
    return null;
  };

  const handleFile = (file) => {
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    onFileSelect(file);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (disabled) return;

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    if (disabled) return;

    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        File Upload
      </label>

      {currentFile ? (
        <div className="bg-white/[0.03] border border-white/[0.1] rounded-lg p-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{getFileIcon(currentFile.type)}</span>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium truncate">{currentFile.name}</p>
              <p className="text-gray-500 text-sm">{formatFileSize(currentFile.size)}</p>
            </div>
            {!disabled && (
              <button
                type="button"
                onClick={() => onFileSelect(null)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      ) : (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all ${
            dragActive
              ? 'border-cyan-500 bg-cyan-500/10'
              : 'border-white/[0.1] hover:border-white/[0.2] bg-white/[0.02]'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <input
            type="file"
            accept={ALLOWED_FILE_TYPES.join(',')}
            onChange={handleChange}
            disabled={disabled}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          />
          <div className="text-4xl mb-3">📁</div>
          <p className="text-white font-medium mb-1">
            {dragActive ? 'Drop file here' : 'Drag & drop or click to upload'}
          </p>
          <p className="text-gray-500 text-sm">
            MP4, PDF, PPTX, DOCX, XLSX (max {formatFileSize(MAX_FILE_SIZE)})
          </p>
        </div>
      )}

      {error && (
        <p className="mt-2 text-red-400 text-sm">{error}</p>
      )}
    </div>
  );
}

function UploadProgress({ progress }) {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="text-gray-400">Uploading...</span>
        <span className="text-white font-medium">{progress}%</span>
      </div>
      <div className="h-2 bg-white/[0.1] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-violet-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}

export default function ContentForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    category: 'training-videos',
    title: '',
    description: '',
    tags: '',
  });
  const [file, setFile] = useState(null);
  const [existingFile, setExistingFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);
  const [fetchingItem, setFetchingItem] = useState(isEditing);

  // Fetch existing content if editing
  useEffect(() => {
    if (!isEditing) return;

    async function fetchContent() {
      try {
        const data = await api.getContentItem(id);
        setFormData({
          category: data.item.category,
          title: data.item.title,
          description: data.item.description || '',
          tags: data.item.tags?.join(', ') || '',
        });
        setExistingFile({
          name: data.item.fileName,
          size: data.item.fileSize,
          type: data.item.fileType,
        });
      } catch (err) {
        setError('Failed to load content: ' + err.message);
      } finally {
        setFetchingItem(false);
      }
    }

    fetchContent();
  }, [id, isEditing]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const uploadToS3 = useCallback(async (uploadUrl, file) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const progress = Math.round((e.loaded / e.total) * 100);
          setUploadProgress(progress);
        }
      });

      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve();
        } else {
          reject(new Error('Upload failed'));
        }
      });

      xhr.addEventListener('error', () => {
        reject(new Error('Upload failed'));
      });

      xhr.open('PUT', uploadUrl);
      xhr.setRequestHeader('Content-Type', file.type);
      xhr.send(file);
    });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    setUploadProgress(0);

    try {
      const tags = formData.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);

      if (isEditing) {
        // Update existing content
        await api.updateContent(id, {
          title: formData.title,
          description: formData.description,
          tags,
        });

        // If new file, upload it
        if (file) {
          const { uploadUrl } = await api.getUploadUrl(
            id,
            file.name,
            file.type,
            file.size
          );
          await uploadToS3(uploadUrl, file);
        }
      } else {
        // Create new content
        if (!file) {
          throw new Error('Please select a file to upload.');
        }

        const { item, uploadUrl } = await api.createContent({
          category: formData.category,
          title: formData.title,
          description: formData.description,
          tags,
          fileName: file.name,
          fileType: file.type,
          fileSize: file.size,
        });

        // Upload file to S3
        await uploadToS3(uploadUrl, file);
      }

      navigate('/admin/content');
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  if (fetchingItem) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate('/admin/content')}
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="text-xl font-semibold text-white">
          {isEditing ? 'Edit Content' : 'Add New Content'}
        </h2>
      </div>

      <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              disabled={isEditing || loading}
              className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all disabled:opacity-50"
            >
              {CONTENT_CATEGORIES.map((category) => (
                <option key={category.id} value={category.id} className="bg-gray-900">
                  {category.icon} {category.label}
                </option>
              ))}
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              disabled={loading}
              required
              placeholder="Enter content title"
              className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all disabled:opacity-50"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description <span className="text-gray-500">(optional)</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              disabled={loading}
              rows={3}
              placeholder="Brief description of the content"
              className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all resize-none disabled:opacity-50"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tags <span className="text-gray-500">(comma-separated)</span>
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              disabled={loading}
              placeholder="onboarding, training, sales"
              className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all disabled:opacity-50"
            />
          </div>

          {/* File Upload */}
          <FileUploader
            onFileSelect={setFile}
            currentFile={file || existingFile}
            disabled={loading}
          />

          {/* Upload Progress */}
          {loading && uploadProgress > 0 && (
            <UploadProgress progress={uploadProgress} />
          )}

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm"
            >
              {error}
            </motion.div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/[0.06]">
            <button
              type="button"
              onClick={() => navigate('/admin/content')}
              disabled={loading}
              className="px-4 py-2.5 text-sm text-gray-400 hover:text-white transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || (!file && !existingFile) || !formData.title}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-sm font-medium rounded-lg hover:from-cyan-400 hover:to-violet-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                  {uploadProgress > 0 ? 'Uploading...' : 'Saving...'}
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {isEditing ? 'Save Changes' : 'Create Content'}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
