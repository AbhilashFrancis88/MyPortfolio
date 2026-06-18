import React, { useState } from 'react';
import './Experience.css';

const jobs = [
  {
    company: 'Acumen Capital Market India Ltd.',
    role: 'Senior React.js Developer',
    period: 'May 2022 – Present',
    location: 'Kochi, India',
    color: '#6366F1',
    points: [
      'Developed and maintained 20+ React.js components for HRMS and KYC web applications, improving page load performance via lazy loading and code splitting.',
      'Built a library of 15+ reusable, accessible UI components using Material UI and Tailwind CSS — reducing new feature dev time by ~30%.',
      'Integrated 10+ RESTful APIs across HRMS modules: employee management, KRA/KPI tracking, leave management, and performance reviews.',
      'Implemented complex multi-step form flows with React Hook Form and Yup validation, cutting form submission errors by over 40%.',
      'Led migration of 5+ legacy Laravel and ASP.NET modules to the React-based AERO platform, reducing technical debt significantly.',
      'Maintained 95%+ release success rate through weekly code reviews, QA/UAT participation, and thorough technical documentation.',
    ],
  },
  {
    company: 'Websoullabs',
    role: 'Website Developer',
    period: 'Nov 2021 – May 2022',
    location: 'Kochi, India',
    color: '#22D3EE',
    points: [
      'Designed and developed 10+ responsive websites using HTML5, CSS3, JavaScript, and jQuery, consistently on time and within scope.',
      'Integrated third-party APIs and plugins to extend site functionality, improving user engagement through streamlined user journeys.',
      'Collaborated with designers to implement pixel-perfect layouts from wireframes and mockups.',
      'Debugged and optimised existing codebases, reducing page load times and improving cross-browser compatibility.',
    ],
  },
  {
    company: 'CVS Motors',
    role: 'Service Advisor',
    period: '2020 – 2021',
    location: 'Bengaluru, India',
    color: '#94A3B8',
    points: [
      'Handled customer service operations and coordinated vehicle service processes efficiently.',
      'Advised customers on service options, warranty coverage, and cost-effective solutions.',
      'Maintained accurate service records and managed updates using the Royal Enfield application.',
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = jobs[active];

  return (
    <section className="section exp-section" id="experience">
      <div className="container">
        <p className="section-label">Work History</p>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle" style={{ marginBottom: 52 }}>
          My professional journey building products that matter.
        </p>

        <div className="exp-layout">
          {/* Tab list */}
          <div className="exp-tabs">
            {jobs.map((j, i) => (
              <button
                key={j.company}
                className={`exp-tab ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
                style={{ '--accent': j.color }}
              >
                <span className="tab-company">{j.company}</span>
                <span className="tab-period">{j.period}</span>
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="exp-panel" key={active}>
            <div className="exp-header">
              <div>
                <h3 className="exp-role">{job.role}</h3>
                <p className="exp-meta">
                  <span style={{ color: job.color }}>{job.company}</span>
                  &nbsp;·&nbsp;{job.location}
                </p>
              </div>
              <span className="exp-badge">{job.period}</span>
            </div>

            <ul className="exp-points">
              {job.points.map((p, i) => (
                <li key={i}>
                  <span className="point-dot" style={{ background: job.color }} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
