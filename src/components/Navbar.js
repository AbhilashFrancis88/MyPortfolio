import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import Logo from './Logo';
import './Navbar.css';

const links = [
  { label: 'About',      href: '#about',      id: 'about' },
  { label: 'Skills',     href: '#skills',     id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects',   href: '#projects',   id: 'projects' },
  { label: 'Contact',    href: '#contact',    id: 'contact' },
];

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar() {
  const [pastHero, setPastHero] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggle } = useTheme();
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map(l => l.id);
    const observers = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const navContent = (
    <motion.nav
      className={`navbar scrolled`}
      initial={prefersReduced ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={prefersReduced ? undefined : { y: -80, opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          <Logo size={36} />
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l.label} className="nav-item">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={activeSection === l.id ? 'active' : ''}
              >
                {l.label}
              </a>
              {activeSection === l.id && (
                <motion.div
                  className="active-indicator"
                  layoutId="nav-indicator"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
          <li>
            <a href="mailto:abhilashfrancis88@gmail.com" className="nav-cta" onClick={() => setOpen(false)}>
              Hire Me
            </a>
          </li>
        </ul>

        <div className="nav-right">
          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme" title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            <span className={`toggle-track ${theme}`}>
              <span className="toggle-thumb">
                {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
              </span>
            </span>
          </button>

          <button className={`burger ${open ? 'active' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </motion.nav>
  );

  return (
    <>
      {/* Floating theme toggle visible while hero is in view */}
      <AnimatePresence>
        {!pastHero && (
          <motion.button
            className="floating-theme-toggle"
            onClick={toggle}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            initial={prefersReduced ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={prefersReduced ? undefined : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}
          >
            <span className={`toggle-track ${theme}`}>
              <span className="toggle-thumb">
                {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
              </span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(pastHero || open) && navContent}
      </AnimatePresence>
    </>
  );
}
