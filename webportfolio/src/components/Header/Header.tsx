'use client'
import React, { useState } from 'react';
import './Header.scss'; // Import the SCSS file for styling
import { Button } from '../ui/button';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="logo">
        Sahil | Portfolio
      </div>
      <div className={`hamburger ${menuOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Solutions</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact Us</a></li>
        <Button variant="secondary">Secondary</Button>
    
      </ul>
    </nav>
  );
};

export default Navbar;
