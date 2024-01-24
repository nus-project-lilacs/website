import React from 'react';
import { NavLink } from 'react-router-dom';
import projectlilacslogo from './projectlilacslogo.png';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="logo-container">
            <img src={projectlilacslogo} className="logo" alt="Project Lilacs Logo" />
            <div className="name">
                Project Lilacs
            </div>
        </div>
        <div className="nav-links">
           <NavLink to="/" exact activeClassName="active">About Us</NavLink>
           <NavLink to="/resources" activeClassName="active">Resources</NavLink>
           <NavLink to="/sponsors" activeClassName="active">Sponsors</NavLink> 
        </div>
    </nav>
  );
};

export default NavBar;
