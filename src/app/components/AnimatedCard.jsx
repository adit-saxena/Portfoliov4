'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AnimatedCard({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
      whileHover={{
        y: -10,
      }}
    >
      {children}
    </motion.div>
  );
}
