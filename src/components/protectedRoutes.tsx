
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from './sidebar';

const ProtectedRoute: React.FC = () => {
  const isAuthenticated: boolean = !!localStorage.getItem('userId');

  return isAuthenticated ? (
    <>
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoute;
