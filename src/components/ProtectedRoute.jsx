import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function ProtectedRoute({ children, roles = [] }) {
  const { isAuthenticated, role, loading } = useAuth();
  const location = useLocation();

  // Show loading state while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  // Not authenticated - redirect to appropriate login
  if (!isAuthenticated) {
    const isAdminRoute = location.pathname.startsWith('/admin');
    const loginPath = isAdminRoute ? '/admin/login' : '/portal/login';
    return <Navigate to={loginPath} state={{ from: location }} replace />;
  }

  // Check role access
  if (roles.length > 0 && !roles.includes(role)) {
    // User is authenticated but doesn't have required role
    if (role === 'contractor' && roles.includes('admin')) {
      // Contractor trying to access admin - redirect to portal
      return <Navigate to="/portal" replace />;
    }
    // Otherwise redirect to home
    return <Navigate to="/" replace />;
  }

  return children;
}
