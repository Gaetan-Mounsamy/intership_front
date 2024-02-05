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
                <li className="navbar-item navbar-submenu">
                    <span>Internship</span>
                    <ul className="submenu">
                        <li><Link to="/internship/add">Add Internship</Link></li>
                        <li><Link to="/internship/consult">Consult Internship</Link></li>
                    </ul>
                </li>
                <li className="navbar-item navbar-submenu">
                    <span>Report</span>
                    <ul className="submenu">
                        <li><Link to="/report/upload">Upload Report File</Link></li>
                    </ul>
                </li>
                <li className="navbar-item navbar-submenu">
                    <span>CdC</span>
                    <ul className="submenu">
                        <li><Link to="/cdc/upload">Upload CdC File</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
