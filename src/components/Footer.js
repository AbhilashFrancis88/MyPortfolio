import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <a href="#hero" className="footer-logo">
          <span className="logo-bracket">&lt;</span>AF<span className="logo-bracket">/&gt;</span>
        </a>
        <p className="footer-copy">
          © {new Date().getFullYear()} Abhilash Francis · Built with React.js
        </p>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:abhilashfrancis88@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
