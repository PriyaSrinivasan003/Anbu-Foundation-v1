import React from 'react';
import { motion } from 'framer-motion';

export const PageHeaderBanner: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(380px, 40vw, 720px)',
        minHeight: 'clamp(380px, 40vw, 720px)',
        overflow: 'hidden',
        backgroundColor: '#D97706',
        display: 'flex',
        alignItems: 'flex-end'
      }}
    >
      {/* Background Sunset Heart Hands Image (Hands on the Right - Heart Fully Visible) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: 'url(/images/sunset_navbar_banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'right 68%',
          filter: 'brightness(1.02) saturate(1.08)'
        }}
      />

      {/* Gentle left vignette to give maximum contrast for the white text while keeping the sky golden */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(90deg, rgba(43, 22, 15, 0.52) 0%, rgba(43, 22, 15, 0.22) 45%, transparent 72%)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(180deg, rgba(43, 22, 15, 0.18) 0%, transparent 40%, rgba(43, 22, 15, 0.4) 100%)',
          pointerEvents: 'none'
        }}
      />

      {/* Content Container (padded from top for the 76px navbar) */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 3vw, 2.5rem) clamp(2.4rem, 4.5vw, 4rem) clamp(1rem, 3vw, 2.5rem)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '680px' }}
        >
          {/* Eyebrow Script */}
          <div style={{ marginBottom: '0.35rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.02rem, 1.4vw, 1.3rem)',
                color: 'rgba(255, 255, 255, 0.98)',
                letterSpacing: '0.04em',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
              }}
            >
              — Together We Can Make The Difference —
            </span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 3.6vw, 3.2rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: '0.45rem',
              letterSpacing: '-0.01em',
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.5)'
            }}
          >
            Bring Hope, Build Tomorrow
          </h1>

          {/* Supporting Tagline: "Support | Empower | Create Change" */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.92rem, 1.2vw, 1.12rem)',
              fontWeight: 500,
              color: 'rgba(255, 245, 235, 0.95)',
              letterSpacing: '0.04em',
              textShadow: '0 1px 6px rgba(0, 0, 0, 0.45)'
            }}
          >
            Support &nbsp;|&nbsp; Empower &nbsp;|&nbsp; Create Change
          </p>
        </motion.div>
      </div>
    </div>
  );
};
