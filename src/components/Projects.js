import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './Projects.css';

const projects = [
  {
    title: 'FlavourRush',
    desc: 'A sleek food delivery platform designed for rapid meal ordering with an intuitive UI, smooth animations, and a seamless user experience.',
    tags: ['React.js', 'CSS3', 'JavaScript', 'Responsive'],
    color: '#EF4444',
    emoji: '🔥',
    href: 'https://flavourrush.vercel.app/',
  },
  {
    title: 'Pulse – Connect & Share',
    desc: 'A modern social platform enabling users to connect, share content, and interact in real time with a clean, engaging interface.',
    tags: ['React.js', 'JavaScript', 'Social', 'Responsive'],
    color: '#8B5CF6',
    emoji: '💬',
    href: 'https://pulse-connection.vercel.app/',
  },
  {
    title: 'Inkwell – Blog Platform',
    desc: 'A creative blogging platform where ideas find their voice, offering users a clean space to express and share their thoughts with the world.',
    tags: ['React.js', 'JavaScript', 'Blog', 'Responsive'],
    color: '#F97316',
    emoji: '✍️',
    href: 'https://inkwellbogs.vercel.app/',
  },
  {
    title: 'Realtime Chat',
    desc: 'A lightweight real-time chat application powered by the BroadcastChannel API, enabling instant messaging across browser tabs without any backend server.',
    tags: ['React.js', 'BroadcastChannel API', 'Real-time'],
    color: '#3B82F6',
    emoji: '💬',
    href: 'https://chatapp-xi-rouge.vercel.app/',
  },
  {
    title: 'Tourism Website',
    desc: 'A responsive tourism platform where users explore popular travel destinations through a clean, interactive interface with rich visual content.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    color: '#6366F1',
    emoji: '✈️',
    href: 'https://tourism-website-two-blush.vercel.app/',
  },
  {
    title: 'Travelo – 3D Parallax',
    desc: 'An immersive 3D parallax UI experience optimised for smooth 60fps animations across all modern browsers.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Animation'],
    color: '#22D3EE',
    emoji: '🌊',
    href: 'https://travelo-ten.vercel.app/',
  },
  {
    title: 'Chess Game',
    desc: 'A full chess platform with single-player AI and autoplay modes, implementing minimax-style move evaluation for adjustable difficulty levels.',
    tags: ['JavaScript', 'Game AI', 'Minimax', 'CSS Grid'],
    color: '#F59E0B',
    emoji: '♟️',
    href: 'https://chess-game-by-abhilash.vercel.app/',
  },
  {
    title: 'Calculator App',
    desc: 'A React-based calculator with both basic and scientific modes, clean UI, and comprehensive functional logic handling edge cases.',
    tags: ['React.js', 'CSS', 'Math Logic'],
    color: '#10B981',
    emoji: '🧮',
    href: 'https://calculator-for-portfolio.vercel.app/',
  },
  {
    title: 'Quiz Game Platform',
    desc: 'An interactive quiz platform with multi-subject support, real-time score tracking, leaderboard system, and animated progress indicators.',
    tags: ['React.js', 'JavaScript', 'State Management'],
    color: '#EC4899',
    emoji: '🎯',
    href: 'https://world-of-quiz.vercel.app/',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.12 },
  }),
};

export default function Projects() {
  const prefersReduced = useReducedMotion();

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
            <motion.div
              key={p.title}
              custom={i}
              variants={prefersReduced ? undefined : cardVariants}
              initial={prefersReduced ? undefined : 'hidden'}
              whileInView={prefersReduced ? undefined : 'visible'}
              viewport={{ once: true, margin: '-80px' }}
            >
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable={false}
                scale={1.02}
                transitionSpeed={400}
                className="tilt-wrapper"
              >
                <div className="project-card" style={{ '--card-accent': p.color }}>
                  <div className="project-shimmer" />
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
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
