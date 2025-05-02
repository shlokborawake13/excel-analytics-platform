import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ userRole }) => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="h-screen w-64 bg-gray-800 text-white fixed left-0 top-0 overflow-y-auto">
      <div className="p-5">
        <h2 className="text-2xl font-bold mb-5">Excel Analytics</h2>
        
        <nav className="mt-8">
          <div className="space-y-2">
            <Link 
              to="/dashboard" 
              className={`block px-4 py-2 rounded-md transition-colors ${
                isActive('/dashboard') 
                  ? 'bg-indigo-600 text-white' 
                  : 'hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Dashboard
              </div>
            </Link>
            
            <Link 
              to="/dashboard/analytics" 
              className={`block px-4 py-2 rounded-md transition-colors ${
                isActive('/dashboard/analytics') 
                  ? 'bg-indigo-600 text-white' 
                  : 'hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Analytics
              </div>
            </Link>
            
            <Link 
              to="/dashboard/reports" 
              className={`block px-4 py-2 rounded-md transition-colors ${
                isActive('/dashboard/reports') 
                  ? 'bg-indigo-600 text-white' 
                  : 'hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Reports
              </div>
            </Link>
            
            <Link 
              to="/dashboard/upload" 
              className={`block px-4 py-2 rounded-md transition-colors ${
                isActive('/dashboard/upload') 
                  ? 'bg-indigo-600 text-white' 
                  : 'hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Upload Excel
              </div>
            </Link>
            
            {userRole === 'admin' && (
              <>
                <div className="border-t border-gray-700 my-4"></div>
                <h3 className="px-4 text-xs uppercase text-gray-500 font-semibold tracking-wider">
                  Admin
                </h3>
                
                <Link 
                  to="/admin" 
                  className={`block px-4 py-2 rounded-md transition-colors ${
                    isActive('/admin') 
                      ? 'bg-indigo-600 text-white' 
                      : 'hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center">
                    <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    Admin Dashboard
                  </div>
                </Link>
                
                <Link 
                  to="/admin/users" 
                  className={`block px-4 py-2 rounded-md transition-colors ${
                    isActive('/admin/users') 
                      ? 'bg-indigo-600 text-white' 
                      : 'hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center">
                    <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Manage Users
                  </div>
                </Link>
                
                <Link 
                  to="/admin/settings" 
                  className={`block px-4 py-2 rounded-md transition-colors ${
                    isActive('/admin/settings') 
                      ? 'bg-indigo-600 text-white' 
                      : 'hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center">
                    <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Settings
                  </div>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;