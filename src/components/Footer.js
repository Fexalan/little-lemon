import React from 'react';

function Footer() {
  return (
    <footer role="contentinfo" aria-label="Little Lemon footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Little Lemon</h3>
          <p>Family owned Mediterranean restaurant</p>
        </div>
        <nav aria-label="Footer navigation">
          <h4>Doormat Navigation</h4>
          <ul role="list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/booking" aria-label="Make a reservation">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
        <div className="footer-contact" aria-label="Contact information">
          <h4>Contact</h4>
          <address>
            <p>123 Little Lemon Street</p>
            <p>Chicago, IL 60601</p>
            <p><a href="tel:+13125551234" aria-label="Call us at 312-555-1234">312-555-1234</a></p>
            <p><a href="mailto:info@littlelemon.com" aria-label="Email us at info@littlelemon.com">info@littlelemon.com</a></p>
          </address>
        </div>
        <div className="footer-social" aria-label="Social media links">
          <h4>Social Media Links</h4>
          <ul role="list">
            <li><a href="https://facebook.com" aria-label="Visit our Facebook page" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" aria-label="Visit our Instagram page" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" aria-label="Visit our Twitter page" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
