import React from 'react';
import Logo from './Logo';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <a href="#hero" className="footer-logo">
          <Logo size={32} />
        </a>
        <p className="footer-copy">
          © {new Date().getFullYear()} Abhilash Francis · Built with React.js
        </p>
        <div className="footer-links">
          <a href="https://github.com/AbhilashFrancis88" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/abhilash-francis-66971118a" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:abhilashfrancis88@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
