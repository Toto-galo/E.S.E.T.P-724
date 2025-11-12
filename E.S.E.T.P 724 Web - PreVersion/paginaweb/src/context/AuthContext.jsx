// src/context/AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';

// El AuthContext se crea aquí, no se importa de otro lado.
const AuthContext = createContext(null);

// Creamos el proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  // --- USUARIO Y CONTRASEÑA HARDCODEADOS ---
  const ADMIN_USER = "admin";
  const ADMIN_PASS = "12345"; // ¡En un proyecto real, esto debería ser más seguro!

  // Función para intentar hacer login
  const login = (username, password) => {
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  // Función para cerrar sesión
  const logout = () => {
    setIsAdmin(false);
  };

  const value = { isAdmin, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook personalizado para usar el contexto
export const useAuth = () => {
  return useContext(AuthContext);
};