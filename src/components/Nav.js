import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav aria-label="Main navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo" aria-label="Little Lemon home">
          <span className="logo-text">Little Lemon</span>
        </Link>
        <ul className="nav-links" role="list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/booking" aria-label="Reserve a table">Reservations</Link></li>
          <li><Link to="/order">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
