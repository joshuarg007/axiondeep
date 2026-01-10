import React, { createContext, useState, useEffect, useCallback } from 'react';

export const AuthContext = createContext(null);

const TOKEN_KEY = 'axiondeep_portal_token';
const ROLE_KEY = 'axiondeep_portal_role';

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const storedToken = sessionStorage.getItem(TOKEN_KEY);
    const storedRole = sessionStorage.getItem(ROLE_KEY);

    if (storedToken && storedRole) {
      // Verify token hasn't expired
      try {
        const payload = JSON.parse(atob(storedToken.split('.')[1]));
        if (payload.exp * 1000 > Date.now()) {
          setToken(storedToken);
          setRole(storedRole);
        } else {
          // Token expired, clear storage
          sessionStorage.removeItem(TOKEN_KEY);
          sessionStorage.removeItem(ROLE_KEY);
        }
      } catch {
        // Invalid token format, clear storage
        sessionStorage.removeItem(TOKEN_KEY);
        sessionStorage.removeItem(ROLE_KEY);
      }
    }
    setLoading(false);
  }, []);

  const login = useCallback((newToken, newRole) => {
    setToken(newToken);
    setRole(newRole);
    sessionStorage.setItem(TOKEN_KEY, newToken);
    sessionStorage.setItem(ROLE_KEY, newRole);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setRole(null);
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(ROLE_KEY);
  }, []);

  const isAuthenticated = !!token;
  const isAdmin = role === 'admin';
  const isContractor = role === 'contractor' || role === 'admin';

  const value = {
    token,
    role,
    loading,
    isAuthenticated,
    isAdmin,
    isContractor,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
