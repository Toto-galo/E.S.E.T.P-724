// src/paginas/ProtectedRoute.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    // Si no es admin, lo redirige a la página principal
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;