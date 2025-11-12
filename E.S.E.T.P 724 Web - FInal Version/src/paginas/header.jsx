// src/paginas/header.jsx
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import ESETP from "../assets/ESETP.png";
import "../styles/styles.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { usuario, logout } = useAuth(); // usamos "usuario", no "isAdmin"
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/");
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

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className={location.pathname === "/" ? "active" : ""}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/historia"
              onClick={closeMenu}
              className={location.pathname === "/historia" ? "active" : ""}
            >
              Historia
            </Link>
          </li>
          <li>
            <Link
              to="/horarios"
              onClick={closeMenu}
              className={location.pathname === "/horarios" ? "active" : ""}
            >
              Horarios
            </Link>
          </li>
          <li>
            <Link
              to="/eventos"
              onClick={closeMenu}
              className={location.pathname === "/eventos" ? "active" : ""}
            >
              Eventos
            </Link>
          </li>

          {/* --- Lógica condicional LOGIN / LOGOUT --- */}
          {usuario ? (
            <>
              <li>
                <Link
                  to="/admin"
                  onClick={closeMenu}
                  className={location.pathname === "/admin" ? "active" : ""}
                >
                  Panel
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                to="/login"
                onClick={closeMenu}
                className={location.pathname === "/login" ? "active" : ""}
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
