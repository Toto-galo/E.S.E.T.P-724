import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  // Recuperar sesión del almacenamiento al cargar
  useEffect(() => {
    const userData = localStorage.getItem("usuario");
    if (userData) {
      setUsuario(JSON.parse(userData));
    }
  }, []);

  // Iniciar sesión
  const login = (userData) => {
    localStorage.setItem("usuario", JSON.stringify(userData));
    setUsuario(userData);
  };

  // Cerrar sesión
  const logout = () => {
    localStorage.removeItem("usuario");
    setUsuario(null);
    window.location.href = "/"; // redirige a inicio al cerrar sesión
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
