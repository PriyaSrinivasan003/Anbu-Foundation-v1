import React, { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface ImageRevealProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  minHeight?: string;
  objectPosition?: string;
  curtainColor?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  badge?: React.ReactNode;
  enableHoverZoom?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  minHeight = '100%',
  objectPosition = 'center 15%',
  curtainColor = 'linear-gradient(135deg, #2B160F 0%, #F45A24 100%)',
  delay = 0.15,
  direction = 'up',
  badge,
  enableHoverZoom = true,
  style = {},
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });
  const shouldReduceMotion = useReducedMotion();

  // Directional curtain translation
  const curtainVariants = {
    initial: {
      clipPath: direction === 'up' 
        ? 'inset(0% 0% 0% 0%)' 
        : direction === 'down'
        ? 'inset(0% 0% 0% 0%)'
        : direction === 'left'
        ? 'inset(0% 0% 0% 0%)'
        : 'inset(0% 0% 0% 0%)',
      y: '0%',
      opacity: 1
    },
    animate: {
      clipPath: direction === 'up'
        ? 'inset(0% 0% 100% 0%)'
        : direction === 'down'
        ? 'inset(100% 0% 0% 0%)'
        : direction === 'left'
        ? 'inset(0% 100% 0% 0%)'
        : 'inset(0% 0% 0% 100%)',
      y: direction === 'up' ? '-100%' : direction === 'down' ? '100%' : '0%',
      opacity: 0,
      transition: {
        duration: 1.15,
        delay,
        ease: [0.77, 0, 0.175, 1] as const
      }
    }
  };

  const imageVariants = {
    initial: {
      scale: shouldReduceMotion ? 1 : 1.18,
      filter: shouldReduceMotion ? 'none' : 'blur(6px) brightness(0.85)',
      opacity: 0.3
    },
    animate: {
      scale: 1,
      filter: 'blur(0px) brightness(1)',
      opacity: 1,
      transition: {
        duration: 1.3,
        delay: delay + 0.1,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`image-reveal-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight,
        overflow: 'hidden',
        backgroundColor: 'var(--color-sunset-dark)',
        ...style
      }}
    >
      {/* Underlying Image with Ken Burns / Entrance Zoom */}
      <motion.div
        variants={imageVariants}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        whileHover={enableHoverZoom && !shouldReduceMotion ? { scale: 1.04 } : undefined}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
      >
        {/* Shimmer skeleton while loading */}
        {!isLoaded && (
          <div
            aria-hidden="true"
            className="img-skeleton-shimmer-dark"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 2
            }}
          />
        )}

        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`img-load-fade ${isLoaded ? 'is-loaded' : ''}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition,
            display: 'block'
          }}
        />

        {/* Cinematic Vignette Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(43, 22, 15, 0.05) 50%, rgba(43, 22, 15, 0.72) 100%)',
            pointerEvents: 'none'
          }}
        />
      </motion.div>

      {/* Shutter / Curtain Wipe Overlay that slides away upon entering viewport */}
      {!shouldReduceMotion && (
        <motion.div
          variants={curtainVariants}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          style={{
            position: 'absolute',
            inset: 0,
            background: curtainColor,
            zIndex: 3,
            pointerEvents: 'none'
          }}
        >
          {/* Subtle golden shimmer line at curtain edge */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #FFD09B, #F45A24, transparent)',
              boxShadow: '0 0 16px rgba(255, 208, 155, 0.8)'
            }}
          />
        </motion.div>
      )}

      {/* Light Sheen / Glare sweep reflection */}
      {!shouldReduceMotion && isInView && (
        <motion.div
          initial={{ x: '-150%', opacity: 0 }}
          animate={{ x: '180%', opacity: [0, 0.45, 0] }}
          transition={{ duration: 1.4, delay: delay + 0.45, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(105deg, transparent 35%, rgba(255, 244, 229, 0.5) 50%, transparent 65%)',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        />
      )}

      {/* Optional Overlay Badge (e.g., category tag or anniversary indicator) */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: delay + 0.5 }}
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '1.5rem',
            zIndex: 4
          }}
        >
          {badge}
        </motion.div>
      )}
    </div>
  );
};
