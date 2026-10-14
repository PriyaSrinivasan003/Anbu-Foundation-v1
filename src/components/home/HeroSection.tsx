import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';
import { RippleHero } from '../shared/RippleHero';
import { BotanicalIllustration } from '../shared/BotanicalIllustration';
import { AnimatedTextLetters } from '../shared/AnimatedTextLetters';
import { OrnamentalDivider } from '../shared/OrnamentalDivider';

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section 
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'calc(76px + clamp(2rem, 4vw, 3.5rem))',
        paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
        overflow: 'hidden',
        backgroundColor: '#1E0E08'
      }}
    >
      {/* Full-width Sunset Background Image with gentle zoom effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden'
        }}
      >
        <motion.div
          initial={{ scale: shouldReduceMotion ? 1 : 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/images/sunset_hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 38%',
            filter: 'brightness(0.96) saturate(1.08)'
          }}
          className="hero-bg-zoom"
        />

        {/* Gradient Overlays: Rich sunset warm dark glow at the base and subtle vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(43, 22, 15, 0.32) 0%, rgba(43, 22, 15, 0.45) 45%, rgba(43, 22, 15, 0.95) 100%)',
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 80% 60%, rgba(244, 90, 36, 0.28) 0%, transparent 65%)',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Soft Expanding Ripple Circles */}
      <RippleHero />

      {/* Elegant Botanical Line Illustration in Top Corner */}
      <div
        style={{
          position: 'absolute',
          top: '5.5rem',
          right: 'clamp(1rem, 4vw, 3.5rem)',
          zIndex: 3,
          opacity: 0.8,
          pointerEvents: 'none'
        }}
      >
        <BotanicalIllustration width={260} height={260} color="#FFD09B" />
      </div>

      {/* Botanical accent in bottom left */}
      <div
        style={{
          position: 'absolute',
          bottom: '1rem',
          left: '1.5rem',
          zIndex: 1,
          opacity: 0.3,
          pointerEvents: 'none'
        }}
      >
        <BotanicalIllustration width={180} height={180} color="#FF9861" flip={true} />
      </div>

      {/* Inner Container aligning with navbar max-width */}
      <div
        style={{
          position: 'relative',
          zIndex: 4,
          width: '100%',
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '0 clamp(1.2rem, 3.5vw, 2.5rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        {/* 20 Years Floating Milestone Capsule */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            marginBottom: '1.75rem',
            alignSelf: 'flex-start',
            backgroundColor: 'rgba(43, 22, 15, 0.78)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1.5px solid rgba(255, 208, 155, 0.35)',
            borderRadius: 'var(--radius-full)',
            padding: '0.4rem 1.15rem 0.4rem 0.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.45)'
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-full)',
              padding: '2px 8px',
              display: 'flex',
              alignItems: 'center',
              height: '30px'
            }}
          >
            <img
              src="/images/logo.png"
              alt="ANBU"
              style={{ height: '24px', width: 'auto', objectFit: 'contain' }}
            />
          </div>
          <span style={{ fontSize: '0.86rem', color: 'var(--color-sunset-cream)', fontWeight: 600 }}>
            <strong style={{ color: 'var(--color-golden-peach)' }}>20 Years of அன்பு</strong> • 10,000+ Scholarships Conferred
          </span>
        </motion.div>

        {/* Hero Content Area */}
        <div
          style={{
            position: 'relative',
            zIndex: 4,
            maxWidth: '840px'
          }}
        >
          {/* Script Eyebrow (BNR Parisienne font style) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ marginBottom: '0.4rem' }}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                color: 'var(--color-golden-peach)',
                display: 'inline-block',
                lineHeight: 1.2,
                letterSpacing: '0.04em',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
              }}
            >
              — Together We Can —
            </span>
          </motion.div>

          {/* Pill Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{ marginBottom: '1.25rem' }}
          >
            <div 
              className="badge-tag"
              style={{
                backgroundColor: 'rgba(255, 244, 229, 0.16)',
                backdropFilter: 'blur(10px)',
                color: 'var(--color-sunset-cream)',
                borderColor: 'rgba(255, 208, 155, 0.35)',
                padding: '0.45rem 1.1rem',
                fontSize: '0.86rem'
              }}
            >
              <Sparkles size={14} color="var(--color-warm-coral)" />
              <span>Celebrating 20 Years of ANBU Foundation (2006–2026)</span>
            </div>
          </motion.div>

          {/* Large White Serif Headline with BNR-style Animated Letter Reveal */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                color: '#FFFFFF',
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.6)'
              }}
            >
              <AnimatedTextLetters
                as="span"
                text="Bring Hope, Build Tomorrow"
                delay={0.3}
              />
            </h1>
          </div>

          {/* Ornamental Diamond Hairline Divider (BNR style) */}
          <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '0.5rem 0' }}>
            <OrnamentalDivider color="var(--color-golden-peach)" maxWidth={240} />
          </div>

          {/* Supporting Text: "Support | Empower | Create Change" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
                fontWeight: 500,
                color: 'var(--color-golden-peach)',
                marginBottom: '0.85rem',
                letterSpacing: '0.08em'
              }}
            >
              Support &nbsp;|&nbsp; Empower &nbsp;|&nbsp; Create Change
            </p>

            <p
              style={{
                color: 'rgba(255, 244, 229, 0.88)',
                fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                lineHeight: 1.7,
                maxWidth: '640px',
                marginBottom: '2.4rem'
              }}
            >
              Rooted in unconditional love, we walk alongside children, elders, and grassroots communities—lifting one another as the sun illuminates a brighter tomorrow.
            </p>
          </motion.div>

          {/* CTA Buttons: Primary "Join Our Mission" & Secondary "Learn More" with 3D glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <div style={{ perspective: '900px' }}>
              <Link
                to="/volunteer"
                className="btn btn-primary btn-lg btn-3d-glow"
                id="hero-join-mission-btn"
              >
                <span>Join Our Mission</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div style={{ perspective: '900px' }}>
              <Link
                to="/our-story"
                className="btn btn-outline-white btn-lg btn-3d-glow"
                id="hero-learn-more-btn"
              >
                <span>Learn More</span>
              </Link>
            </div>

            <Link
              to="/donate"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--color-golden-peach)',
                marginLeft: '0.5rem',
                fontWeight: 600,
                fontSize: '0.98rem',
                textDecoration: 'none'
              }}
            >
              <Heart size={16} fill="var(--color-warm-coral)" color="var(--color-warm-coral)" />
              <span style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                Make a warm donation
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
