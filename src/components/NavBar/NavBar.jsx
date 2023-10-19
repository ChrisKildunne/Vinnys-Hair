import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './NavBar.css';

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg">
      <button className="navbar-toggler" type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className='collapse navbar-collapse' id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/"><img src="https://i.imgur.com/lLFMaHX.png" alt="ransom-note-fonts" border="0"  style={{ width: '350px', height: '80px' , margin: '0px'}}></img></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/mywork"><img src="https://i.imgur.com/tKFzVAe.png" alt="ransom-note-fonts" border="0"  style={{ width: '350px', height: '80px' }}></img>
     </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact"><img
        src="https://i.imgur.com/ZTZGQbE.png"
        alt="ransom-note-fonts"
        border="0"
        style={{ width: '320px', height: '70px' }}
      /></Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
          <a href="https://www.instagram.com/yourhairsuks/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="4x" className="instagram-icon" />
                        </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
