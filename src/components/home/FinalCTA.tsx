import React from 'react';
import { Link } from 'react-router-dom';
import { HandHeart, Sparkles } from 'lucide-react';
import { BotanicalIllustration } from '../shared/BotanicalIllustration';
import { AnimatedReveal } from '../shared/AnimatedReveal';
import { AnimatedTextLetters } from '../shared/AnimatedTextLetters';
import { OrnamentalDivider } from '../shared/OrnamentalDivider';

export const FinalCTA: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <AnimatedReveal>
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              backgroundColor: 'var(--color-sunset-dark)',
              color: 'var(--color-sunset-cream)',
              padding: 'clamp(3rem, 6vw, 5.5rem) clamp(1.5rem, 4vw, 4rem)',
              textAlign: 'center',
              boxShadow: '0 25px 60px -15px rgba(43, 22, 15, 0.4)',
              border: '2px solid rgba(255, 208, 155, 0.25)'
            }}
          >
            {/* Background sunset glow & botanical accents */}
            <div
              style={{
                position: 'absolute',
                top: '-50%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(244, 90, 36, 0.35) 0%, rgba(43, 22, 15, 0) 70%)',
                pointerEvents: 'none'
              }}
            />

            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '15px',
                opacity: 0.25,
                pointerEvents: 'none'
              }}
            >
              <BotanicalIllustration width={260} height={260} color="#FFD09B" />
            </div>

            <div
              style={{
                position: 'absolute',
                top: '-20px',
                left: '15px',
                opacity: 0.25,
                pointerEvents: 'none'
              }}
            >
              <BotanicalIllustration width={220} height={220} color="#FF9861" flip={true} />
            </div>

            <div style={{ position: 'relative', zIndex: 2, maxWidth: '780px', margin: '0 auto' }}>
              {/* BNR Parisienne Script Eyebrow */}
              <div style={{ marginBottom: '0.4rem' }}>
                <span
                  className="font-script"
                  style={{
                    fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
                    color: 'var(--color-golden-peach)',
                    display: 'inline-block',
                    lineHeight: 1.1
                  }}
                >
                  You’re Invited
                </span>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <span className="badge-tag badge-tag-dark">
                  <Sparkles size={14} color="var(--color-golden-peach)" />
                  <span>The Tomorrow We Build Together</span>
                </span>
              </div>

              {/* Animated Letter Heading */}
              <div style={{ marginBottom: '1rem' }}>
                <AnimatedTextLetters
                  as="h2"
                  text="No act of love is too small to kindle hope."
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
                    color: 'var(--color-sunset-cream)',
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em'
                  }}
                />
              </div>

              {/* BNR Ornamental Diamond Hairline Divider */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <OrnamentalDivider color="var(--color-golden-peach)" maxWidth={260} />
              </div>

              <p
                style={{
                  fontSize: '1.15rem',
                  color: 'rgba(255, 244, 229, 0.85)',
                  lineHeight: 1.7,
                  marginBottom: '2.5rem'
                }}
              >
                Whether you join us on the field, share your expertise, or make a heartfelt contribution, you are an essential part of the ANBU circle.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '1.25rem'
                }}
              >
                <div style={{ perspective: '900px' }}>
                  <Link
                    to="/volunteer"
                    className="btn btn-outline-white btn-lg btn-3d-glow"
                    id="final-cta-volunteer-btn"
                  >
                    <HandHeart size={20} />
                    <span>Become a Volunteer</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};
