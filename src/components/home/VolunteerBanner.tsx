import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, HandHeart, ArrowRight } from 'lucide-react';
import { AnimatedReveal } from '../shared/AnimatedReveal';

export const VolunteerBanner: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {/* Left Card: Volunteer */}
          <AnimatedReveal delay={0.1}>
            <div
              className="cream-card"
              style={{
                padding: 'clamp(2rem, 4vw, 3rem)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                border: '2px solid rgba(244, 90, 36, 0.25)'
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(244, 90, 36, 0.15)',
                  color: 'var(--color-sunset-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <HandHeart size={28} />
              </div>

              <span className="badge-tag" style={{ alignSelf: 'flex-start', marginBottom: '0.85rem' }}>
                Join as a Volunteer
              </span>

              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.85rem', color: 'var(--color-sunset-dark)' }}>
                Offer Your Time & Heart
              </h3>

              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', flexGrow: 1, lineHeight: 1.6 }}>
                Whether you have two hours on a weekend to read with kids, professional skills in nursing, or enthusiasm for community planting—your presence creates lasting impact.
              </p>

              <div>
                <Link to="/volunteer" className="btn btn-primary" id="home-volunteer-link">
                  <span>Register to Volunteer</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </AnimatedReveal>

          {/* Right Card: Donate */}
          <AnimatedReveal delay={0.25}>
            <div
              className="dark-card"
              style={{
                padding: 'clamp(2rem, 4vw, 3rem)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'var(--color-sunset-dark)',
                border: '2px solid rgba(255, 208, 155, 0.25)'
              }}
            >
              {/* Subtle radial glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '240px',
                  height: '240px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(244, 90, 36, 0.3) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}
              />

              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(255, 208, 155, 0.15)',
                  color: 'var(--color-golden-peach)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <Heart size={28} fill="var(--color-golden-peach)" />
              </div>

              <span className="badge-tag badge-tag-dark" style={{ alignSelf: 'flex-start', marginBottom: '0.85rem' }}>
                Support the Mission
              </span>

              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.85rem', color: 'var(--color-sunset-cream)' }}>
                Seed Sustainable Change
              </h3>

              <p style={{ color: 'rgba(255, 244, 229, 0.8)', marginBottom: '1.75rem', flexGrow: 1, lineHeight: 1.6 }}>
                Every contribution fuels direct community support—funding children’s learning bags, medical screening supplies, and saplings for neighborhood green belts.
              </p>

              <div>
                <Link to="/donate" className="btn btn-primary" id="home-donate-link">
                  <span>Make a Contribution</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
};
