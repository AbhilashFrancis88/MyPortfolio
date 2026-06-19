import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ScrollReveal({ children, width = '100%', delay = 0 }) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div style={{ width }}>{children}</div>;
  }

  return (
    <motion.div
      style={{ width, overflow: 'hidden' }}
      initial={{ opacity: 0, y: 80, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
