import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ScrollReveal({ children, width = '100%', delay = 0 }) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div style={{ width }}>{children}</div>;
  }

  return (
    <motion.div
      style={{ width }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
