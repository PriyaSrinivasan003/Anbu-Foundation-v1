import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface AnimatedTextLettersProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'span';
}

export const AnimatedTextLetters: React.FC<AnimatedTextLettersProps> = ({
  text,
  className = '',
  style = {},
  delay = 0.2,
  as = 'h1'
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Tag = as;
    return (
      <Tag className={className} style={style}>
        {text}
      </Tag>
    );
  }

  // Split sentence into words and words into letters
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.026,
        delayChildren: delay
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 42, rotateX: 30 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  const Tag = motion[as];

  return (
    <Tag
      className={className}
      style={{ display: 'inline-block', ...style }}
      aria-label={text}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          aria-hidden="true"
          style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.28em' }}
        >
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={letterVariants}
              style={{ display: 'inline-block', whiteSpace: 'pre' }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </Tag>
  );
};
