import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "../styles/styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h4>E.S.E.T.P Nº724 "Pte. Dr. Arturo U. Illia"</h4>
          <p>Dirección: Lloyd Jones 898</p>
          <p>Teléfono: (280)-442-7629</p>
          <p>Email: 724educa@educacionvirtual.chubut.edu.ar</p>
        </div>
        <div className="footer-social">
          <a
            href="https://www.facebook.com/esetp724/?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/esetp724ok/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@ESETP724ME"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 E.S.E.T.P Nº724. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

