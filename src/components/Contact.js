import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const mailto = `mailto:abhilashfrancis88@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Let's Build Something<br /><span className="gradient-text">Together</span></h2>

        <div className="contact-layout">
          <div className="contact-info">
            <p className="contact-intro">
              I'm currently open to new opportunities — whether it's a full-time role,
              freelance project, or just a conversation about React. My inbox is always open.
            </p>

            <div className="contact-links">
              <a href="mailto:abhilashfrancis88@gmail.com" className="contact-link">
                <div className="cl-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="cl-label">Email</p>
                  <p className="cl-value">abhilashfrancis88@gmail.com</p>
                </div>
              </a>

              <a href="tel:+918129316512" className="contact-link">
                <div className="cl-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.41a16 16 0 0 0 5.68 5.68l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="cl-label">Phone</p>
                  <p className="cl-value">+91 8129316512</p>
                </div>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-link">
                <div className="cl-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                  </svg>
                </div>
                <div>
                  <p className="cl-label">LinkedIn</p>
                  <p className="cl-value">Connect with me</p>
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input
                  className="form-input"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                  className="form-input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                className="form-input form-textarea"
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className={`form-submit ${sent ? 'sent' : ''}`}>
              {sent ? '✓ Opening your mail client...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
