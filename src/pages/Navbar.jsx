import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="wrapper-nav">
        <div className="container-nav">
          <div className="logo">
            <button className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
              ☰
            </button>
            <Link to="/">Tani<span className="voice">Voice</span></Link>
          </div>
          <div className={`menu ${isOpen ? "open" : ""}`}>
            <ul>
              <li><Link to="/">About Us</Link></li>
              <li><a href="#jadisiapa">Products</a></li>
              <li><a href="#contact">Contact</a></li>
              <div className="navbar-buttons">
                <button className="btn-signin">Sign In</button>
                <button className="btn-signup">Sign Up</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
