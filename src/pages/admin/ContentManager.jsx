import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { api } from '../../services/api';
import { CONTENT_CATEGORIES, getFileIcon, formatFileSize } from '../../utils/constants';

function ConfirmModal({ title, message, onConfirm, onCancel, loading }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gray-900 border border-white/[0.1] rounded-xl p-6 w-full max-w-md"
      >
        <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-6">{message}</p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            disabled={loading}
            className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="px-4 py-2 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors flex items-center gap-2"
          >
            {loading && (
              <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
            )}
            Delete
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function ContentManager() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const fetchContent = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      if (activeCategory === 'all') {
        // Fetch all categories
        const allContent = [];
        for (const category of CONTENT_CATEGORIES) {
          try {
            const data = await api.getContent(category.id);
            if (data.items) {
              allContent.push(...data.items);
            }
          } catch {
            // Continue with other categories
          }
        }
        // Sort by createdAt descending
        allContent.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setContent(allContent);
      } else {
        const data = await api.getContent(activeCategory);
        setContent(data.items || []);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [activeCategory]);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  async function handleDelete() {
    if (!deleteItem) return;

    setDeleting(true);
    try {
      await api.deleteContent(deleteItem.id);
      setContent((prev) => prev.filter((item) => item.id !== deleteItem.id));
      setDeleteItem(null);
    } catch (err) {
      alert('Failed to delete: ' + err.message);
    } finally {
      setDeleting(false);
    }
  }

  const getCategoryLabel = (categoryId) => {
    return CONTENT_CATEGORIES.find((c) => c.id === categoryId)?.label || categoryId;
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-semibold text-white">Content Manager</h2>
        <Link
          to="/admin/content/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-sm font-medium rounded-lg hover:from-cyan-400 hover:to-violet-400 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add Content
        </Link>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            activeCategory === 'all'
              ? 'bg-white/[0.1] text-white'
              : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
          }`}
        >
          All
        </button>
        {CONTENT_CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
              activeCategory === category.id
                ? 'bg-white/[0.1] text-white'
                : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            <span>{category.icon}</span>
            {category.label}
          </button>
        ))}
      </div>

      {/* Content Table */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden">
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
        ) : content.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">📭</div>
            <p className="text-gray-400 mb-4">No content found.</p>
            <Link
              to="/admin/content/new"
              className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
            >
              Add your first content
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.06] text-left">
                  <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                    Category
                  </th>
                  <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                    Size
                  </th>
                  <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Date
                  </th>
                  <th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.03]">
                {content.map((item) => (
                  <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{getFileIcon(item.fileType)}</span>
                        <div className="min-w-0">
                          <p className="text-white font-medium truncate">{item.title}</p>
                          <p className="text-gray-500 text-xs truncate">{item.fileName}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <span className="text-gray-400 text-sm">
                        {getCategoryLabel(item.category)}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="text-gray-400 text-sm">
                        {formatFileSize(item.fileSize)}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className="text-gray-400 text-sm">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          to={`/admin/content/${item.id}/edit`}
                          className="p-2 text-gray-400 hover:text-white transition-colors"
                          title="Edit"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </Link>
                        <button
                          onClick={() => setDeleteItem(item)}
                          className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                          title="Delete"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteItem && (
        <ConfirmModal
          title="Delete Content"
          message={`Are you sure you want to delete "${deleteItem.title}"? This action cannot be undone.`}
          onConfirm={handleDelete}
          onCancel={() => setDeleteItem(null)}
          loading={deleting}
        />
      )}
    </div>
  );
}
