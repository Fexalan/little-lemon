import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="hero" role="banner">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link
            to="/booking"
            className="btn-primary"
            aria-label="Reserve a table at Little Lemon restaurant"
          >
            Reserve a Table
          </Link>
        </div>
        <div
          className="hero-image"
          role="img"
          aria-label="Little Lemon restaurant food"
        ></div>
      </div>
    </header>
  );
}

export default Header;
