import React from 'react';
import './About.css';

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '20+', label: 'React Components' },
  { value: '10+', label: 'APIs Integrated' },
  { value: '95%', label: 'Release Success Rate' },
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <p className="section-label">About Me</p>
            <h2 className="section-title">Crafting Interfaces<br />That <span className="gradient-text">Just Work</span></h2>
            <p className="about-text">
              I'm a Front-End Developer based in Kochi, India, with 4+ years of experience building
              scalable, accessible web applications. My core strength is React.js — from architecting
              reusable component libraries to integrating complex RESTful APIs.
            </p>
            <p className="about-text">
              At Acumen Capital Market, I work across HRMS and KYC platforms, turning complex financial
              workflows into clean, user-focused interfaces. I care deeply about performance, code
              maintainability, and shipping things that users actually love to use.
            </p>
            <div className="about-actions">
              <a href="mailto:abhilashfrancis88@gmail.com" className="btn-primary">Get In Touch</a>
              <a href="#experience" className="btn-outline">My Journey</a>
            </div>
          </div>

          <div className="about-right">
            <div className="stats-grid">
              {stats.map(s => (
                <div className="stat-card" key={s.label}>
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="about-card">
              <div className="about-card-row">
                <span className="about-card-icon">📍</span>
                <span>Kochi, Kerala, India</span>
              </div>
              <div className="about-card-row">
                <span className="about-card-icon">💼</span>
                <span>Senior React.js Developer @ Acumen</span>
              </div>
              <div className="about-card-row">
                <span className="about-card-icon">🎓</span>
                <span>B.Tech Mechanical, VTU (2018)</span>
              </div>
              <div className="about-card-row">
                <span className="about-card-icon">✅</span>
                <span className="available">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
