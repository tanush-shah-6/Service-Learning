import React from "react";
import "./Header.css"; 
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="./home.html">
            <img src="/images/logo.png" alt="logo" style={{ width: "170px", height: "58.5px" }} />
          </a>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Signup" className="up">Sign Up</Link></li>
          <li><Link to="/Login" className="in">Sign In</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
