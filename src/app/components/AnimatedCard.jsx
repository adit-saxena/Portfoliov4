'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AnimatedCard({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.4
      }}
      whileHover={{ scale: 0.98, opacity: 0.9 }}
    >
      {children}
    </motion.div>
  );
}
