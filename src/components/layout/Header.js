import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ userRole, onLogout }) => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gray-900">Excel Analytics Platform</h1>
        </div>
        <div className="flex items-center space-x-4">
          {userRole === 'admin' && (
            <Link to="/admin" className="text-gray-700 hover:text-gray-900">
              Admin Dashboard
            </Link>
          )}
          <Link to="/dashboard" className="text-gray-700 hover:text-gray-900">
            Dashboard
          </Link>
          <button
            onClick={onLogout}
            className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;