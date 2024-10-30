import React, { useState } from "react";
import "./Header.css"; 
import { Link } from 'react-router-dom';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(prevState => (prevState === dropdown ? null : dropdown)); // Toggle the specified dropdown
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null); // Close any open dropdown
  };

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
          <li>
            <span onClick={() => handleDropdownToggle('services')}>Services</span>
            {openDropdown === 'services' && (
              <ul className="dropdown">
                <li onClick={handleDropdownClose}>
                  <Link to="/Our_Services/ClimateTrooper" onClick={handleDropdownClose}>Climate Trooper</Link>
                </li>
                <li onClick={handleDropdownClose}>
                  <Link to="/services/service-two" onClick={handleDropdownClose}>Service Two</Link>
                </li>
                {/* Add more services as needed */}
              </ul>
            )}
          </li>
          <li>
            <span onClick={() => handleDropdownToggle('projects')}>Projects</span>
            {openDropdown === 'projects' && (
              <ul className="dropdown">
                <li onClick={handleDropdownClose}>
                  <Link to="/projects/project-one" onClick={handleDropdownClose}>Project One</Link>
                </li>
                <li onClick={handleDropdownClose}>
                  <Link to="/projects/project-two" onClick={handleDropdownClose}>Project Two</Link>
                </li>
                {/* Add more projects as needed */}
              </ul>
            )}
          </li>
          <li><Link to="/Signup" className="up">Sign Up</Link></li>
          <li><Link to="/Login" className="in">Sign In</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
