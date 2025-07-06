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

  const fetchUserProfile = async (token: string): Promise<User | null> => {
    const response = await fetch(`${API_URL}/authentication/me`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
    }

    return response.json();
  };

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
        const userData = await fetchUserProfile(token);
        if (userData) {
          setUser(userData);
        }
      } catch (error) {
        if (refreshToken) {
          try {
            // Token expired, try to refresh
            const refreshResponse = await fetch(`${API_URL}/authentication/refresh`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ refresh_token: refreshToken }),
              mode: 'cors',
            });

            if (refreshResponse.ok) {
              const { access_token, refresh_token } = await refreshResponse.json();
              localStorage.setItem('token', access_token);
              localStorage.setItem('refresh_token', refresh_token);

              // Try again with new token
              const userData = await fetchUserProfile(access_token);
              if (userData) {
                setUser(userData);
              }
            } else {
              throw new Error('Failed to refresh token');
            }
          } catch (refreshError) {
            console.error('Failed to refresh token:', refreshError);
            localStorage.removeItem('token');
            localStorage.removeItem('refresh_token');
          }
        }
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