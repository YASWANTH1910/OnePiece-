import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/images/one piece.png" alt="One Piece Logo" />
      </div>

      <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}><span>Home</span></Link>
        </li>
        <li>
          <Link to="/arcs" onClick={() => setIsOpen(false)}><span>Arcs</span></Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}><span>About</span></Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
