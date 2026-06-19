import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import './Skills.css';

const categories = [
  {
    title: 'Languages',
    icon: '{ }',
    items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '⚛',
    items: ['React.js', 'Next.js', 'NestJS', 'jQuery', 'Laravel', 'ASP.NET'],
  },
  {
    title: 'UI & Styling',
    icon: '🎨',
    items: ['Material UI (MUI)', 'Tailwind CSS', 'Bootstrap', 'Styled Components'],
  },
  {
    title: 'Databases',
    icon: '🗄',
    items: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠',
    items: ['Git', 'GitHub', 'Bitbucket', 'Postman', 'Figma', 'VS Code', 'MySQL Workbench'],
  },
  {
    title: 'Methodology',
    icon: '⚡',
    items: ['Agile / Scrum', 'Component-Driven Dev', 'Responsive Design', 'Cross-Browser Compat'],
  },
];

const proficiency = [
  { label: 'React.js',    pct: 95 },
  { label: 'TypeScript',  pct: 80 },
  { label: 'Next.js',     pct: 78 },
  { label: 'Material UI', pct: 90 },
  { label: 'CSS / Tailwind', pct: 88 },
  { label: 'REST APIs',   pct: 85 },
];

export default function Skills() {
  const [inView, setInView] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <p className="section-label">Technical Skills</p>
        <h2 className="section-title">My Tech Stack</h2>
        <p className="section-subtitle" style={{ marginBottom: 56 }}>
          Tools and technologies I use to build delightful, performant user experiences.
        </p>

        <div className="skills-layout">
          {/* Bento cards */}
          <div className="skills-bento">
            {categories.map(cat => (
              <div className="skill-card" key={cat.title}>
                <div className="skill-card-header">
                  <span className="skill-icon">{cat.icon}</span>
                  <span className="skill-cat-title">{cat.title}</span>
                </div>
                <div className="skill-tags">
                  {cat.items.map(item => (
                    <span className="skill-tag" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency bars */}
          <div className="proficiency-panel" ref={panelRef}>
            <h3 className="prof-title">Proficiency</h3>
            <div className="prof-list">
              {proficiency.map(p => (
                <div className="prof-row" key={p.label}>
                  <div className="prof-label-row">
                    <span className="prof-label">{p.label}</span>
                    <span className="prof-pct">
                      {inView ? (
                        <CountUp end={p.pct} duration={1.4} suffix="%" />
                      ) : '0%'}
                    </span>
                  </div>
                  <div className="prof-track">
                    <div
                      className="prof-fill"
                      style={{ width: inView ? `${p.pct}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
