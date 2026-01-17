import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/images/one piece.png" alt="One Piece Logo" />
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/"><span>Home</span></Link>
        </li>
        <li>
          <Link to="/arcs"><span>Arcs</span></Link>
        </li>
        <li>
          <Link to="/about"><span>About</span></Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
