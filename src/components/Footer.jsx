import React from 'react';
import '../styles/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Información de derechos de autor */}
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} MiEmpresa. Todos los derechos reservados.</p>
        </div>

        {/* Enlaces a redes sociales */}
        <div className="footer-socials">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-square"></i> {/* Icono de Facebook */}
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter-square"></i> {/* Icono de Twitter */}
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram-square"></i> {/* Icono de Instagram */}
          </a>
        </div>

        {/* Enlace adicional */}
        <div className="footer-links">
          <Link to="/privacy-policy">Política de Privacidad</Link>
          <Link to="/terms-of-service">Términos de Servicio</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
