// src/paginas/Admin.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Admin = () => {
  return (
    <div className="admin-panel">
      <h1>Panel de Administración</h1>
      <p>Selecciona la sección que deseas editar:</p>
      <div className="admin-links">
        <Link to="/admin/editar-documentos" className="admin-link-button">
          Gestionar Documentos
        </Link>
        <Link to="/admin/editar-horarios" className="admin-link-button">
          Gestionar Horarios
        </Link>
      </div>
    </div>
  );
};

export default Admin;