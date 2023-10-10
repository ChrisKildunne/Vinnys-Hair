import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './NavBar.css';

export default function NavBar() {
    return (
<nav className="navbar navbar-expand-lg">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/mywork">My Work</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/orders/new">Merch</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/orders/cart">Your Cart</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="https://www.instagram.com/yourhairsuks/" target="_blank" rel="noopener noreferrer" >
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
