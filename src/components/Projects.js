import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Tourism Website',
    desc: 'A responsive tourism platform where users explore popular travel destinations through a clean, interactive interface with rich visual content.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    color: '#6366F1',
    emoji: '✈️',
    href: '#',
  },
  {
    title: 'Travelo – 3D Parallax',
    desc: 'An immersive 3D parallax UI experience optimised for smooth 60fps animations across all modern browsers.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Animation'],
    color: '#22D3EE',
    emoji: '🌊',
    href: '#',
  },
  {
    title: 'Chess Game',
    desc: 'A full chess platform with single-player AI and autoplay modes, implementing minimax-style move evaluation for adjustable difficulty levels.',
    tags: ['JavaScript', 'Game AI', 'Minimax', 'CSS Grid'],
    color: '#F59E0B',
    emoji: '♟️',
    href: '#',
  },
  {
    title: 'Calculator App',
    desc: 'A React-based calculator with both basic and scientific modes, clean UI, and comprehensive functional logic handling edge cases.',
    tags: ['React.js', 'CSS', 'Math Logic'],
    color: '#10B981',
    emoji: '🧮',
    href: '#',
  },
  {
    title: 'Quiz Game Platform',
    desc: 'An interactive quiz platform with multi-subject support, real-time score tracking, leaderboard system, and animated progress indicators.',
    tags: ['React.js', 'JavaScript', 'State Management'],
    color: '#EC4899',
    emoji: '🎯',
    href: '#',
  },
];

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <p className="section-label">Portfolio</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle" style={{ marginBottom: 52 }}>
          A selection of things I've built — from interactive UI experiments to fully fledged applications.
        </p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={p.title} style={{ '--card-accent': p.color, animationDelay: `${i * 0.08}s` }}>
              <div className="project-top">
                <span className="project-emoji">{p.emoji}</span>
                <a href={p.href} className="project-link-btn" target="_blank" rel="noreferrer" aria-label="View live">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => (
                  <span className="project-tag" key={t} style={{ '--t': p.color }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
