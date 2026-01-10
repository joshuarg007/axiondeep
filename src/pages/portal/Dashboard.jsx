import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import { CONTENT_CATEGORIES, getFileIcon, formatFileSize, isVideoFile } from '../../utils/constants';
import SEO from '../../components/SEO';

function ContentCard({ item, onView }) {
  const icon = getFileIcon(item.fileType);
  const isVideo = isVideoFile(item.fileType);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all group"
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl flex-shrink-0">{icon}</div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-medium truncate group-hover:text-cyan-400 transition-colors">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-gray-500 text-sm mt-1 line-clamp-2">
              {item.description}
            </p>
          )}
          <div className="flex items-center gap-3 mt-3 text-xs text-gray-600">
            <span>{formatFileSize(item.fileSize)}</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <span>{new Date(item.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => onView(item)}
        className="mt-4 w-full py-2.5 px-4 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-lg text-sm text-white font-medium transition-all flex items-center justify-center gap-2"
      >
        {isVideo ? (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download
          </>
        )}
      </button>
    </motion.div>
  );
}

function ContentViewer({ item, onClose }) {
  const [loading, setLoading] = useState(true);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [error, setError] = useState(null);
  const isVideo = isVideoFile(item?.fileType);

  useEffect(() => {
    if (!item) return;

    async function fetchUrl() {
      try {
        const data = await api.getContentItem(item.id);
        setDownloadUrl(data.downloadUrl);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUrl();
  }, [item]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gray-900 border border-white/[0.1] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
      >
        <div className="flex items-center justify-between p-4 border-b border-white/[0.06]">
          <h3 className="text-white font-medium truncate">{item.title}</h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-500"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-400 py-12">
              <p>Failed to load content: {error}</p>
            </div>
          ) : isVideo ? (
            <video
              src={downloadUrl}
              controls
              autoPlay
              className="w-full rounded-lg max-h-[60vh]"
            >
              Your browser does not support video playback.
            </video>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">{getFileIcon(item.fileType)}</div>
              <p className="text-gray-400 mb-6">{item.fileName}</p>
              <a
                href={downloadUrl}
                download={item.fileName}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-medium rounded-lg hover:from-cyan-400 hover:to-violet-400 transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download File
              </a>
            </div>
          )}

          {item.description && (
            <p className="mt-4 text-gray-400 text-sm">{item.description}</p>
          )}

          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-white/[0.05] text-gray-400 text-xs rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function PortalDashboard() {
  const { logout, isAdmin } = useAuth();
  const [activeCategory, setActiveCategory] = useState('training-videos');
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewingItem, setViewingItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchContent = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await api.getContent(activeCategory);
      setContent(data.items || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [activeCategory]);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  const filteredContent = content.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <SEO
        title="Sales Portal | Axion Deep Labs"
        description="Access training materials, pricing sheets, and sales resources."
      />

      <div className="pb-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Sales Portal</h1>
            <p className="text-gray-400 text-sm mt-1">
              Training materials and resources
            </p>
          </div>

          <div className="flex items-center gap-3">
            {isAdmin && (
              <a
                href="/admin"
                className="px-4 py-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Admin Panel
              </a>
            )}
            <button
              onClick={logout}
              className="px-4 py-2 text-sm text-gray-400 hover:text-white border border-white/[0.1] rounded-lg hover:bg-white/[0.05] transition-all"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-2.5 bg-white/[0.03] border border-white/[0.06] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CONTENT_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-white border border-cyan-500/30'
                  : 'bg-white/[0.03] text-gray-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]'
              }`}
            >
              <span>{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-400 mb-4">{error}</p>
            <button
              onClick={fetchContent}
              className="px-4 py-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Try again
            </button>
          </div>
        ) : filteredContent.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">📭</div>
            <p className="text-gray-400">
              {searchQuery
                ? 'No resources match your search.'
                : 'No resources available in this category yet.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredContent.map((item) => (
              <ContentCard
                key={item.id}
                item={item}
                onView={setViewingItem}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content Viewer Modal */}
      {viewingItem && (
        <ContentViewer
          item={viewingItem}
          onClose={() => setViewingItem(null)}
        />
      )}
    </>
  );
}
