// src/components/Footer.jsx
import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo">MT</div>
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} Mulat Tesfay. All rights reserved.</p>
          <p>Designed & Built with passion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
