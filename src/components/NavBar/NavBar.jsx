import React, { useState } from 'react';
import { Link } from "react-router-dom";
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
            <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/mywork">My Work</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="https://www.instagram.com/yourhairsuks/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
