import React from 'react';
import '../styles/Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="https://appsfactory.cat/wp-content/uploads/2016/05/cropped-Logo_apps_factory.png" alt="Logo" className="logo-image" />
          </Link>
        </div>

        {/* Barra de navegación */}
        <nav className="nav">
          <ul className="nav-links">
            <li><Link to="/" className="nav-link">Inicio</Link></li>
            <li>
              <Link to="/about" className="nav-link">Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">Contacto</Link>
            </li>
          </ul>
        </nav>

        {/* Botón para móvil */}
        <div className="mobile-menu">
          <button className="menu-toggle">
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
