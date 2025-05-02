import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import Analytics from './components/dashboard/Analytics';
import Reports from './components/dashboard/Reports';
import UploadExcel from './components/dashboard/UploadExcel';
import AdminDashboard from './components/admin/AdminDashboard';
import UserManagement from './components/admin/UserManagement';
import Settings from './components/admin/Settings';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('user'); // 'user' or 'admin'

  const handleLogin = (userData) => {
    // In a real app, you would validate credentials against a backend
    // For demo purposes, we'll just set authentication state
    setIsAuthenticated(true);
    setUserRole(userData.role || 'user');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole('user');
  };

  // Protected route wrapper component
  const ProtectedRoute = ({ children, requiredRole }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    
    if (requiredRole && userRole !== requiredRole) {
      return <Navigate to={userRole === 'admin' ? '/admin' : '/dashboard'} />;
    }
    
    return children;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={
            isAuthenticated ? 
              <Navigate to={userRole === 'admin' ? '/admin' : '/dashboard'} /> : 
              <Login onLogin={handleLogin} />
          } />
          <Route path="/register" element={
            isAuthenticated ? 
              <Navigate to={userRole === 'admin' ? '/admin' : '/dashboard'} /> : 
              <Register onRegister={handleLogin} />
          } />
          
          {/* User Dashboard Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard onLogout={handleLogout} />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/analytics" element={
            <ProtectedRoute>
              <Analytics onLogout={handleLogout} />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/reports" element={
            <ProtectedRoute>
              <Reports onLogout={handleLogout} />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/upload" element={
            <ProtectedRoute>
              <UploadExcel onLogout={handleLogout} />
            </ProtectedRoute>
          } />
          
          {/* Admin Routes */}
          <Route path="/admin" element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard onLogout={handleLogout} />
            </ProtectedRoute>
          } />
          <Route path="/admin/users" element={
            <ProtectedRoute requiredRole="admin">
              <UserManagement onLogout={handleLogout} />
            </ProtectedRoute>
          } />
          <Route path="/admin/settings" element={
            <ProtectedRoute requiredRole="admin">
              <Settings onLogout={handleLogout} />
            </ProtectedRoute>
          } />
          
          {/* Default Route */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;