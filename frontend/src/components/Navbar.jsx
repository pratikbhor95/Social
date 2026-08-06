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
    <div className='flex sticky top-0 z-50 backdrop-blur-lg justify-between items-center bg-white/80 dark:bg-neutral-900/80 shadow-md px-3 sm:px-6 py-2'>
      {/* Logo container with overflow prevention */}
      <div className='p-1 sm:p-2 rounded-lg max-w-[50%] overflow-hidden'>
        <Logo />
      </div>

      {/* Navigation Links */}
      <div>
        <ul className='flex items-center space-x-2 sm:space-x-4'>
          {isAuthenticated ? (
            <>
              <li>
                <Link 
                  to="/" 
                  className='text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium transition-colors text-sm sm:text-base'
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors text-sm sm:text-base"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm sm:text-base whitespace-nowrap"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm sm:text-base whitespace-nowrap"
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