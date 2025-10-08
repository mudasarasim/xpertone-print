// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('userToken'));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('userToken'));
    };

    // Listen to storage changes (other tabs) or manual triggers
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const login = (token) => {
    localStorage.setItem('userToken', token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('userToken');
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
};
