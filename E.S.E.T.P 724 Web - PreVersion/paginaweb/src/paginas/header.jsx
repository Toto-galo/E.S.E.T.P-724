// src/paginas/header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importamos el hook de autenticación
import ESETP from '../assets/ESETP.png';
import '../styles/styles.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAdmin, logout } = useAuth(); // Obtenemos el estado de admin y la función de logout
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/'); // Llevamos al usuario al inicio después de cerrar sesión
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={ESETP} alt="Logo ESETP 724" />
          <span>E.S.E.T.P Nº724</span>
        </Link>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/historia" onClick={closeMenu}>Historia</Link></li>
          <li><Link to="/horarios" onClick={closeMenu}>Horarios</Link></li>
          {/* ... otros links ... */}

          {/* --- LÓGICA CONDICIONAL PARA LOGIN/LOGOUT/ADMIN --- */}
          {isAdmin ? (
            <>
              <li><Link to="/admin" className="admin-link" onClick={closeMenu}>Admin</Link></li>
              <li><span onClick={handleLogout} className="logout-button">Salir</span></li>
            </>
          ) : (
            <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;