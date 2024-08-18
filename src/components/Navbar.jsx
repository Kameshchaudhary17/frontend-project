import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
// Make sure to replace this with the correct path to your logo file

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const isAuthenticated = user && user.username;

  return (
    <div>
      <nav className="bg-blue-500 p-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
         <span className="text-white font-bold text-lg">MyCMS</span>
        </div>

        {/* Links Section */}
        <ul className="flex justify-center space-x-4">
          {!isAuthenticated && (
            <>
              <li>
                <Link
                  to="/register"
                  className="text-white hover:text-blue-200 transition duration-300"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-white hover:text-blue-200 transition duration-300"
                >
                  Login
                </Link>
              </li>
            </>
          )}
          {isAuthenticated && (
            <>
              <li>
                <Link
                  to="/register"
                  className="text-white hover:text-blue-200 transition duration-300"
                >
                  User Registration
                </Link>
              </li>
              <li>
                <Link
                  to="/theme"
                  className="text-white hover:text-blue-200 transition duration-300"
                >
                  Theme Settings
                </Link>
              </li>
              <li>
                <Link
                  to="/message"
                  className="text-white hover:text-blue-200 transition duration-300"
                >
                  User Messages
                </Link>
              </li>
              <li>
                <Link
                  to="/info"
                  className="text-white hover:text-blue-200 transition duration-300"
                >
                  Company Info
                </Link>
              </li>
              <li>
                <Link
                  to="/heading"
                  className="text-white hover:text-blue-200 transition duration-300"
                >
                  Web Heading
                </Link>
              </li>
              <li>
                <Link
                  to="/setting"
                  className="text-white hover:text-blue-200 transition duration-300"
                >
                  Web Settings
                </Link>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="text-white hover:text-blue-200 transition duration-300"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
