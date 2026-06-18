import React from 'react';
import './Certifications.css';

const certs = [
  { title: 'Frontend Developer (React)', issuer: 'HackerRank', icon: '⚛️', color: '#00EA64' },
  { title: 'React (Basic)', issuer: 'HackerRank', icon: '🏅', color: '#00EA64' },
  { title: 'Introduction to Packet Tracer', issuer: 'Cisco', icon: '🌐', color: '#1BA0D7' },
  { title: 'Getting Started with Cisco Packet Tracer', issuer: 'Cisco', icon: '🔧', color: '#1BA0D7' },
  { title: 'Exploring Networking with Cisco Packet Tracer', issuer: 'Cisco', icon: '📡', color: '#1BA0D7' },
  { title: 'Exploring IoT with Cisco Packet Tracer', issuer: 'Cisco', icon: '🔌', color: '#1BA0D7' },
];

export default function Certifications() {
  return (
    <section className="section certs-section" id="certifications">
      <div className="container">
        <p className="section-label">Credentials</p>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle" style={{ marginBottom: 52 }}>
          Recognised qualifications from industry-leading platforms.
        </p>

        <div className="certs-grid">
          {certs.map(c => (
            <div className="cert-card" key={c.title} style={{ '--cc': c.color }}>
              <span className="cert-icon">{c.icon}</span>
              <div className="cert-info">
                <p className="cert-title">{c.title}</p>
                <p className="cert-issuer" style={{ color: c.color }}>{c.issuer}</p>
              </div>
              <span className="cert-badge">✓</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
