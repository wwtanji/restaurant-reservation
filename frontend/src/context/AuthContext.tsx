import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User } from '../interfaces/user';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  isLoading: true,
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

const API_URL = 'http://localhost:8000/api';

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem('token');
      const refreshToken = localStorage.getItem('refresh_token');

      if (!token || !refreshToken) {
        setIsLoading(false);
        return;
      }

      try {
        // Try to get user profile with stored token
        const response = await fetch(`${API_URL}/authentication/me`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else if (response.status === 401 && refreshToken) {
          // Token expired, try to refresh
          const refreshResponse = await fetch(`${API_URL}/authentication/refresh`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refresh_token: refreshToken }),
          });

          if (refreshResponse.ok) {
            const { access_token, refresh_token } = await refreshResponse.json();
            localStorage.setItem('token', access_token);
            localStorage.setItem('refresh_token', refresh_token);

            // Try again with new token
            const newResponse = await fetch(`${API_URL}/authentication/me`, {
              headers: {
                'Authorization': `Bearer ${access_token}`,
              },
            });

            if (newResponse.ok) {
              const userData = await newResponse.json();
              setUser(userData);
            } else {
              throw new Error('Failed to get user data with refreshed token');
            }
          } else {
            throw new Error('Failed to refresh token');
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        // Clear invalid tokens
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      logout,
      isLoading,
    }}>
      {children}
    </AuthContext.Provider>
  );
}; 