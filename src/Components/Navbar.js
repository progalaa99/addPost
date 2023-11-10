import React from 'react';
import { Link } from 'react-router-dom';
// import './css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/add-posts" className="nav-link">
        Add Posts
      </Link>
      <div className="logo">React</div>
     
    </nav>
  );
}

export default Navbar;
