import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <div className='flex sticky top-0 z-50 backdrop-blur-lg justify-between items-center bg-white/80 dark:bg-neutral-900/80 shadow-md px-4 py-2'>
      <div className='p-2 rounded-lg'>
        <Logo />
      </div>
      <div>
        <ul className='flex items-center space-x-4'>
          {isAuthenticated ? (
            <>
              {/* Visible ONLY when Logged In */}
              <li>
                <Link 
                  to="/" 
                  className='text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              {/* Visible ONLY when Logged Out */}
              <li>
                <Link
                  to="/login"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;