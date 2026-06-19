import React, { useState, useEffect } from 'react';
import { AnimatePresence, useReducedMotion } from 'framer-motion';
import { ThemeProvider } from './ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import './App.css';

function AppContent() {
  const prefersReduced = useReducedMotion();
  const [loading, setLoading] = useState(!prefersReduced);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 1800);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onComplete={() => {}} />}
      </AnimatePresence>

      {!loading && (
        <div className="app">
          <div className="noise-overlay" />
          <div className="ambient-blob ambient-blob-1" />
          <div className="ambient-blob ambient-blob-2" />
          <div className="ambient-blob ambient-blob-3" />
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <ScrollReveal>
              <About />
            </ScrollReveal>
            <ScrollReveal>
              <Skills />
            </ScrollReveal>
            <ScrollReveal>
              <Experience />
            </ScrollReveal>
            <ScrollReveal>
              <Projects />
            </ScrollReveal>
            <ScrollReveal>
              <Certifications />
            </ScrollReveal>
            <ScrollReveal>
              <Contact />
            </ScrollReveal>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
