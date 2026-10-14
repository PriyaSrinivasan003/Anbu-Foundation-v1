import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface BotanicalProps {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
  flip?: boolean;
}

export const BotanicalIllustration: React.FC<BotanicalProps> = ({
  className = '',
  color = '#FFD09B',
  width = 280,
  height = 280,
  flip = false
}) => {
  const shouldReduceMotion = useReducedMotion();

  const pathVariants = {
    hidden: { pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.65,
      transition: {
        duration: shouldReduceMotion ? 0 : 2.6,
        delay: 0.4
      }
    }
  };

  return (
    <div 
      className={`pointer-events-none select-none ${className}`}
      style={{
        transform: flip ? 'scaleX(-1)' : 'none',
        display: 'inline-block'
      }}
      aria-hidden="true"
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main stem curve */}
        <motion.path
          d="M20 180 Q 70 140 100 90 T 170 20"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Delicate leaves */}
        <motion.path
          d="M60 145 C 50 120 70 105 85 110 C 85 130 75 145 60 145 Z"
          stroke={color}
          strokeWidth="1.8"
          fill="none"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M85 110 Q 72 125 60 145"
          stroke={color}
          strokeWidth="1"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        <motion.path
          d="M95 100 C 120 90 135 110 130 125 C 110 125 95 115 95 100 Z"
          stroke={color}
          strokeWidth="1.8"
          fill="none"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        <motion.path
          d="M115 70 C 100 45 125 35 140 45 C 135 65 125 75 115 70 Z"
          stroke={color}
          strokeWidth="1.8"
          fill="none"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        <motion.path
          d="M145 42 C 170 30 185 55 175 68 C 160 65 148 55 145 42 Z"
          stroke={color}
          strokeWidth="1.8"
          fill="none"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Small tender bud */}
        <motion.circle
          cx="170"
          cy="20"
          r="4.5"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </div>
  );
};
