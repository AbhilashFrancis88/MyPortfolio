import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Animated background orbs */}
      <div className="hero-blob blob-1" />
      <div className="hero-blob blob-2" />
      <div className="hero-blob blob-3" />
      <div className="hero-grid" />

      <div className="hero-inner container">
        <div className="hero-content">
          <p className="hero-greeting">
            <span className="mono-tag">{'>'}</span> Hello, world! I'm
          </p>

          <h1 className="hero-name">Abhilash<br /><span>Francis</span></h1>

          <div className="hero-role-line">
            <span className="role-prefix mono-tag">{'// '}</span>
            <TypeAnimation
              sequence={[
                'Front-End Developer', 2000,
                'React.js Specialist', 2000,
                'UI/UX Enthusiast', 2000,
                'Next.js Developer', 2000,
              ]}
              wrapper="span"
              className="hero-role"
              speed={55}
              deletionSpeed={70}
              repeat={Infinity}
            />
            <span className="cursor">|</span>
          </div>

          <p className="hero-bio">
            4+ years crafting high-performance web applications with React.js, Next.js &amp; TypeScript.
            Passionate about clean code, intuitive UIs, and scalable architecture.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-outline">Let's Talk</a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:abhilashfrancis88@gmail.com" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>

        {/* Terminal card */}
        <div className="hero-terminal">
          <div className="terminal-header">
            <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
            <span className="terminal-title">abhilash.config.js</span>
          </div>
          <pre className="terminal-body">
<span className="t-kw">const </span><span className="t-var">developer</span> = {'{'}{'\n'}
{'  '}<span className="t-key">name</span>: <span className="t-str">"Abhilash Francis"</span>,{'\n'}
{'  '}<span className="t-key">role</span>: <span className="t-str">"Front-End Developer"</span>,{'\n'}
{'  '}<span className="t-key">location</span>: <span className="t-str">"Kochi, Kerala 🇮🇳"</span>,{'\n'}
{'  '}<span className="t-key">experience</span>: <span className="t-num">4</span>, <span className="t-comment">{'// years'}</span>{'\n'}
{'  '}<span className="t-key">stack</span>: [{'\n'}
{'    '}<span className="t-str">"React.js"</span>,{'\n'}
{'    '}<span className="t-str">"Next.js"</span>,{'\n'}
{'    '}<span className="t-str">"TypeScript"</span>,{'\n'}
{'    '}<span className="t-str">"MUI"</span>,{'\n'}
{'  '}],{'\n'}
{'  '}<span className="t-key">available</span>: <span className="t-bool">true</span>,{'\n'}
{'}'};</pre>
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <svg className="scroll-chevron" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}
