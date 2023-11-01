import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './NavBar.css';

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggleClick = () => {
    setNavbarOpen(prevOpen => !prevOpen);
  }

  const handleLinkClick = () => {
    setNavbarOpen(false);
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <button className="navbar-toggler" type="button" onClick={handleToggleClick} aria-controls="navbarNav" aria-expanded={navbarOpen}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item custom">
            <Link className="nav-link" to="/" onClick={handleLinkClick}>
              <img className="nav-image" src="https://i.imgur.com/lLFMaHX.png" alt="Home" style={{ width: '350px', height: '80px', margin: '0px' }} />
              <span className="nav-text">Home</span>
            </Link>
          </li>
          <li className="nav-item custom">
            <Link className="nav-link custom" to="/about" onClick={handleLinkClick}>
              <img className="nav-image" src="https://i.imgur.com/cMuE2gu.png" alt="About" style={{ width: '320px', height: '70px' }} />
              <span className="nav-text">About</span>
            </Link>
          </li>
          <li className="nav-item custom">
            <Link className="nav-link" to="/contact" onClick={handleLinkClick}>
              <img className="nav-image" src="https://i.imgur.com/ZTZGQbE.png" alt="Contact" style={{ width: '380px', height: '70px' }} />
              <span className="nav-text">Contact</span>
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item custom">
            <a href="https://www.instagram.com/yourhairsuks/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="4x" className="instagram-icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
