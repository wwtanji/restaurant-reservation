import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useNotification } from '../../context/NotificationContext';
import NotificationComponent from '../notification/NotificationComponent';

const NavbarComponent: React.FC = () => {
  const { user, logout: authLogout } = useAuth();
  const { show } = useNotification();
  const navigate = useNavigate();

  const avatarUrl = useMemo(() => 
    `https://api.dicebear.com/9.x/bottts/svg?seed=${user?.first_name || 'user'}`,
    [user?.first_name]
  );

  const handleLogout = () => {
    authLogout();
    localStorage.removeItem('justLoggedIn');
    show('You have successfully logged out', 'error');
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 relative z-50 font-['Inter']">
      <NotificationComponent />

      <div className="flex items-center justify-between px-6 py-4 w-full">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-extrabold text-black">
            Reservelt
          </Link>
        </div>

        <div className="flex items-center gap-6">
          {!user ? (
            <>
              <Link
                to="/for-restaurants"
                className="text-sm font-semibold text-gray-700 hover:text-gray-900"
              >
                For restaurants
              </Link>

              <Link
                to="/login"
                className="text-sm font-semibold text-gray-700 hover:text-gray-900"
              >
                Log In
              </Link>

              <Link
                to="/signup"
                className="text-sm font-semibold bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition duration-200"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile">
                <img
                  src={avatarUrl}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full border border-gray-300 hover:ring-2 ring-gray-300 transition"
                />
              </Link>

              <button
                onClick={handleLogout}
                className="text-sm font-semibold text-gray-700 hover:text-red-600 transition duration-200"
              >
                Log Out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent; 