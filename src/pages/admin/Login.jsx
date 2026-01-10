import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import { loginAsAdmin } from '../../services/auth';
import SEO from '../../components/SEO';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from = location.state?.from?.pathname || '/admin';

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { token } = await loginAsAdmin(password);
      login(token, 'admin');
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || 'Invalid password. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SEO
        title="Admin Login | Axion Deep Labs"
        description="Admin access for Axion Deep Labs content management."
      />

      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-xl mb-4">
              <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Access</h1>
            <p className="text-gray-400">
              Enter admin credentials to manage content
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Admin Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent transition-all"
                  placeholder="Enter admin password"
                  required
                  autoFocus
                />
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm"
                >
                  {error}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={loading || !password}
                className="w-full py-3 px-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-medium rounded-lg hover:from-violet-400 hover:to-pink-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                    Verifying...
                  </>
                ) : (
                  <>
                    Access Admin
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-white/[0.06] text-center">
              <Link
                to="/portal/login"
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                Back to Sales Portal
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
