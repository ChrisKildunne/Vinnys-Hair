import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Home</Link>
            &nbsp; | &nbsp;
            <Link className="navbar-brand" to="/orders/new">Products Page</Link>
            &nbsp; | &nbsp;
            <Link className="navbar-brand" to="/contact">Contact</Link>
            &nbsp; | &nbsp;
            <Link className="navbar-brand" to="/orders/cart">Your Cart</Link>
        </nav>
    );
}
