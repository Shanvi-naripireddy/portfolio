import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__name">Shanvi Rishi Naripireddy</p>
        <div className="footer__links">
          <a href="https://linkedin.com/in/shanvi-rishi" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:shanvirishi4@gmail.com">Email</a>
        </div>
        <p className="footer__copy">© 2025 Shanvi Rishi. All rights reserved.</p>
      </div>
    </footer>
  );
}
