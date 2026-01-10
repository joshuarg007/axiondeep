import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import { CONTENT_CATEGORIES } from '../../utils/constants';
import SEO from '../../components/SEO';

function SidebarLink({ to, icon, children, active }) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
        active
          ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-white'
          : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
      }`}
    >
      <span className="text-lg">{icon}</span>
      {children}
    </Link>
  );
}

function StatCard({ label, value, icon }) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{label}</p>
          <p className="text-2xl font-bold text-white mt-1">{value}</p>
        </div>
        <div className="text-3xl">{icon}</div>
      </div>
    </div>
  );
}

function AdminOverview() {
  const [stats, setStats] = useState({
    total: 0,
    byCategory: {},
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const categoryStats = {};
        let total = 0;

        for (const category of CONTENT_CATEGORIES) {
          try {
            const data = await api.getContent(category.id);
            const count = data.items?.length || 0;
            categoryStats[category.id] = count;
            total += count;
          } catch {
            categoryStats[category.id] = 0;
          }
        }

        setStats({ total, byCategory: categoryStats });
      } catch (err) {
        console.error('Failed to fetch stats:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <StatCard label="Total Resources" value={stats.total} icon="📁" />
        <StatCard
          label="Training Videos"
          value={stats.byCategory['training-videos'] || 0}
          icon="🎬"
        />
        <StatCard
          label="Documents"
          value={
            (stats.byCategory['pricing'] || 0) +
            (stats.byCategory['collateral'] || 0) +
            (stats.byCategory['faq'] || 0)
          }
          icon="📄"
        />
      </div>

      <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6">
        <h3 className="text-lg font-medium text-white mb-4">Content by Category</h3>
        <div className="space-y-3">
          {CONTENT_CATEGORIES.map((category) => (
            <div key={category.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xl">{category.icon}</span>
                <span className="text-gray-300">{category.label}</span>
              </div>
              <span className="text-white font-medium">
                {stats.byCategory[category.id] || 0}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-white/[0.06]">
          <Link
            to="/admin/content"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
          >
            Manage Content
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const { logout } = useAuth();
  const location = useLocation();

  const isOverview = location.pathname === '/admin';

  return (
    <>
      <SEO
        title="Admin Dashboard | Axion Deep Labs"
        description="Manage sales portal content and resources."
      />

      <div className="flex flex-col lg:flex-row gap-8 pb-12">
        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-64 flex-shrink-0"
        >
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
              <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                A
              </div>
              <div>
                <p className="text-white font-medium">Admin Panel</p>
                <p className="text-gray-500 text-xs">Content Management</p>
              </div>
            </div>

            <nav className="space-y-1">
              <SidebarLink
                to="/admin"
                icon="📊"
                active={location.pathname === '/admin'}
              >
                Overview
              </SidebarLink>
              <SidebarLink
                to="/admin/content"
                icon="📁"
                active={location.pathname.startsWith('/admin/content')}
              >
                Content
              </SidebarLink>
              <SidebarLink
                to="/portal"
                icon="👁️"
                active={false}
              >
                View Portal
              </SidebarLink>
            </nav>

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <button
                onClick={logout}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-400 hover:text-white hover:bg-white/[0.05] rounded-lg text-sm font-medium transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1">
          {isOverview ? <AdminOverview /> : <Outlet />}
        </main>
      </div>
    </>
  );
}
