import React from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'fade';
  duration?: number;
  delay?: number;
  className?: string;
  once?: boolean;
  margin?: string;
  key?: React.Key;
}

export default function ScrollReveal({
  children,
  variant = 'fade-up',
  duration = 0.8,
  delay = 0,
  className = '',
  once = true,
  margin = '-80px',
}: ScrollRevealProps) {
  const getVariants = () => {
    switch (variant) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        };
      case 'fade-down':
        return {
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        };
      case 'fade-left':
        return {
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 },
        };
      case 'fade-right':
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.92 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'fade':
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease: [0.21, 1.02, 0.43, 1.01],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
