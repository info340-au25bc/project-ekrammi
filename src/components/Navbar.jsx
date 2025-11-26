import { NavLink, Link } from "react-router-dom";

export default function Navbar(){
    return (
        <header className="navbar">
            <Link to="/" className="logo">
            CoreLab <span> Pilates </span>
            </Link>

            <nav className="nav-links">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/classes"> Classes </NavLink>
                <NavLink to="/schedule"> Schedule </NavLink>
                <NavLink to="/contact"> Contact </NavLink>
            </nav>
        </header>
        
    );
}