import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Heart, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { RippleHero } from '../shared/RippleHero';
import { BotanicalIllustration } from '../shared/BotanicalIllustration';
import { AnimatedTextLetters } from '../shared/AnimatedTextLetters';
import { OrnamentalDivider } from '../shared/OrnamentalDivider';

const heroSlides = [
  {
    url: '/images/sunset_hero.jpg',
    position: 'center 38%',
    title: 'ANBU Sunset Spirit & Community Care',
    filter: 'brightness(0.96) saturate(1.08)'
  },
  {
    url: '/images/sathyabama_campus_hero.jpg',
    position: 'center 35%',
    title: 'Sathyabama University Campus & Heritage',
    filter: 'brightness(0.78) contrast(1.12) saturate(1.15)'
  }
];

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    setTouchStart(null);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? 0 : (dir > 0 ? '100%' : '-100%'),
      opacity: 0,
      scale: 1.05
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 32 },
        opacity: { duration: 0.65 }
      }
    },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? 0 : (dir < 0 ? '100%' : '-100%'),
      opacity: 0,
      scale: 1.05,
      transition: {
        x: { type: 'spring' as const, stiffness: 280, damping: 32 },
        opacity: { duration: 0.65 }
      }
    })
  };

  return (
    <section 
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'calc(92px + clamp(1.8rem, 3.5vw, 3rem))',
        paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
        overflow: 'hidden',
        backgroundColor: '#1E0E08'
      }}
    >
      {/* Full-width Background Image Slides with Swiping */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden'
        }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              position: 'absolute',
              top: '-5%',
              left: '-5%',
              width: '110%',
              height: '110%',
              backgroundImage: `url(${heroSlides[currentSlide].url})`,
              backgroundSize: 'cover',
              backgroundPosition: heroSlides[currentSlide].position,
              filter: heroSlides[currentSlide].filter,
              willChange: 'transform, opacity'
            }}
            className="hero-bg-zoom"
          />
        </AnimatePresence>

        {/* Gradient Overlays: Rich sunset warm dark glow at the base and subtle vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(30, 14, 8, 0.42) 0%, rgba(30, 14, 8, 0.54) 45%, rgba(30, 14, 8, 0.95) 100%)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 80% 60%, rgba(244, 90, 36, 0.28) 0%, transparent 65%)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(30, 14, 8, 0.6) 0%, rgba(30, 14, 8, 0.25) 50%, rgba(30, 14, 8, 0.6) 100%)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
      </div>

      {/* Left Navigation Arrow */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous hero background"
        style={{
          position: 'absolute',
          left: 'clamp(0.5rem, 2vw, 1.75rem)',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 5,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: 'rgba(43, 22, 15, 0.65)',
          border: '1.5px solid rgba(255, 208, 155, 0.35)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.25s ease',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--color-sunset-orange)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(43, 22, 15, 0.65)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Navigation Arrow */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next hero background"
        style={{
          position: 'absolute',
          right: 'clamp(0.5rem, 2vw, 1.75rem)',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 5,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: 'rgba(43, 22, 15, 0.65)',
          border: '1.5px solid rgba(255, 208, 155, 0.35)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.25s ease',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--color-sunset-orange)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(43, 22, 15, 0.65)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Bottom Indicator Dots */}
      <div
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          backgroundColor: 'rgba(30, 14, 8, 0.65)',
          padding: '0.35rem 0.85rem',
          borderRadius: 'var(--radius-full)',
          border: '1px solid rgba(255, 208, 155, 0.28)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        {heroSlides.map((slide, idx) => {
          const isActive = currentSlide === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setDirection(idx > currentSlide ? 1 : -1);
                setCurrentSlide(idx);
              }}
              aria-label={`Jump to background slide ${idx + 1}: ${slide.title}`}
              style={{
                height: '8px',
                width: isActive ? '28px' : '9px',
                borderRadius: '4px',
                backgroundColor: isActive ? 'var(--color-sunset-orange)' : 'rgba(255, 255, 255, 0.38)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: isActive ? '0 0 10px rgba(244, 90, 36, 0.8)' : 'none'
              }}
            />
          );
        })}
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
              padding: '3px 10px',
              display: 'flex',
              alignItems: 'center',
              height: '34px'
            }}
          >
            <img
              src="/images/logo.png"
              alt="ANBU"
              style={{ height: '28px', width: 'auto', objectFit: 'contain' }}
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

          {/* CTA Buttons: Primary "Learn More" & Secondary "Make a warm donation" */}
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
