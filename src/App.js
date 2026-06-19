import React, { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence, useReducedMotion } from 'framer-motion';
import { ThemeProvider } from './ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollReveal from './components/ScrollReveal';
import './App.css';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function AppContent() {
  const prefersReduced = useReducedMotion();
  const [loading, setLoading] = useState(!prefersReduced);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 1000);
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
            <Suspense fallback={null}>
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
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
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
