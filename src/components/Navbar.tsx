import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="navbar">
            <Link to="/" className="home_button_container">
                <button className={`home_button ${currentPath === '/' ? 'selected' : ''}`}><p>Sophie Park</p></button>
            </Link>
            <div className="nav_subContainer">
                <Link to="/experiences" >
                    <button className={`nav_button ${currentPath === '/experiences' ? 'selected' : ''}`}><p>experiences</p></button>
                </Link>
                <Link to="/projects">
                    <button className={`nav_button ${currentPath === '/projects' ? 'selected' : ''}`}><p>projects</p></button>
                </Link>
                <Link to="/background">
                    <button className={`nav_button ${currentPath === '/background' ? 'selected' : ''}`}><p>about myself</p></button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
