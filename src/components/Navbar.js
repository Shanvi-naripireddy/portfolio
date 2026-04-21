import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar__inner container">
        <NavLink to="/" className="navbar__logo">
          Shanvi Rishi
        </NavLink>
        <div className="navbar__links">
          <NavLink to="/" end className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}>
            Projects
          </NavLink>
          <a
            href="mailto:shanvirishi4@gmail.com"
            className="navbar__cta"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
