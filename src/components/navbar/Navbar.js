import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/preferences">Preferences</Link>
                </li>
                <li className="navbar-item navbar-submenu">
                    <span>Internship</span>
                    <ul className="submenu">
                        <li><Link to="/internship/add">Add Internship</Link></li>
                        <li><Link to="/internship/consult">Consult Internship</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
