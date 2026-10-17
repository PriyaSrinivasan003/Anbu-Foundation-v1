import React from 'react';
import { AnimatedReveal } from '../shared/AnimatedReveal';
import { StaggerContainer, StaggerItem } from '../shared/StaggerContainer';
import { SectionHeader } from '../shared/SectionHeader';
import { Heart, Users, Sparkles, Sprout, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedImage } from '../shared/AnimatedImage';

export const IntroSection: React.FC = () => {
  const pillars = [
    {
      icon: Heart,
      title: 'Unconditional Anbu',
      description: 'Rooted in timeless compassion, offering genuine empathy and dignity without preconditions or judgment.'
    },
    {
      icon: Users,
      title: 'Collective Community Care',
      description: 'Strengthening neighborhood solidarity where every hand is both supported and invited to lift others.'
    },
    {
      icon: Sparkles,
      title: 'Dignity in Every Action',
      description: 'Empowering children and elders through respectful educational guidance, healthcare, and lifelong respect.'
    },
    {
      icon: Sprout,
      title: 'Ecological Harmony',
      description: 'Nurturing urban greenery, clean soils, and community resilience that enrich life for generations to come.'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <SectionHeader
          scriptEyebrow="Who We Are"
          title="Fostering Compassion Across Every Generation"
          subtitle="ANBU Foundation is a civic initiative inspired by the warmth of community care. We believe that lasting social transformation happens when people connect with open hearts and cooperative hands."
          showOrnament={true}
        />

        {/* Foundation Leadership & Content Showcase */}
        <AnimatedReveal delay={0.15}>
          <div
            className="warm-card"
            style={{
              padding: 'clamp(1.5rem, 3.5vw, 2.75rem)',
              borderRadius: 'var(--radius-2xl)',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid rgba(244, 90, 36, 0.22)',
              boxShadow: '0 20px 50px rgba(43, 22, 15, 0.08)',
              marginBottom: '4rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left: Framed Leadership Photography */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-2xl)',
                  overflow: 'hidden',
                  boxShadow: '0 16px 40px rgba(43, 22, 15, 0.14)',
                  border: '2.5px solid rgba(244, 90, 36, 0.25)',
                  backgroundColor: 'var(--color-sunset-cream)'
                }}
              >
                <AnimatedImage
                  src="/images/mariazeena_johnson.png"
                  alt="Dr. Mariazeena Johnson — Founder, Anbu Foundation & Chancellor, Sathyabama Institute of Science and Technology"
                  loading="eager"
                  containerStyle={{ width: '100%', height: '400px' }}
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    display: 'block'
                  }}
                />

                {/* Gradient Scrim & Designation Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1.5rem 1.5rem 1.25rem 1.5rem',
                    background: 'linear-gradient(180deg, transparent 0%, rgba(30, 14, 8, 0.92) 100%)',
                    color: '#FFFFFF'
                  }}
                >
                  <strong style={{ display: 'block', fontSize: '1.15rem', color: '#FFFFFF', letterSpacing: '0.02em', marginBottom: '0.25rem' }}>
                    Dr. Mariazeena Johnson
                  </strong>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-golden-peach)', fontWeight: 600, lineHeight: 1.4, display: 'block' }}>
                    Founder, ANBU Foundation • Chancellor, Sathyabama Institute of Science and Technology
                  </span>
                </div>
              </div>

              {/* Floating Decorative Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '-0.75rem',
                  right: '-0.75rem',
                  backgroundColor: 'var(--color-sunset-orange)',
                  color: '#FFFFFF',
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  boxShadow: '0 6px 16px rgba(244, 90, 36, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <Heart size={13} fill="#FFFFFF" />
                <span>Home of Love</span>
              </div>
            </div>

            {/* Right: The Foundation Message & Narrative */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', alignSelf: 'flex-start' }}>
                <span className="badge-tag" style={{ margin: 0, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Sparkles size={13} />
                  <span>Our Foundation Philosophy</span>
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.5rem, 2.4vw, 2.1rem)',
                  lineHeight: 1.25,
                  color: 'var(--color-sunset-dark)',
                  margin: 0
                }}
              >
                “Answering the Unanswered” — Humanity is Not an Act; It is Our Way of Living
              </h3>

              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>
                The most intrinsic feeling of life is being human. Humanity is not an occasional act; it is our way of living. The cause of suffering has many reasons, but the need for dignity, higher education, and collective upliftment is universal.
              </p>

              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>
                Anbu Foundation was started to bring back happiness to the lives of people striving to live life to the fullest. Through higher education scholarships, inclusive campus platforms, and grassroots community care, ANBU is committed to serving the nation through unconditional love and accountable action.
              </p>

              {/* Quote Highlight Box */}
              <div
                style={{
                  padding: '1rem 1.25rem',
                  backgroundColor: 'var(--color-sunset-cream)',
                  borderRadius: 'var(--radius-lg)',
                  borderLeft: '4px solid var(--color-sunset-orange)',
                  marginTop: '0.25rem'
                }}
              >
                <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.02rem', color: 'var(--color-sunset-dark)', lineHeight: 1.5 }}>
                  “Charity gives to relieve pain; Anbu embraces to restore wholeness.”
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem', alignItems: 'center' }}>
                <Link to="/our-story" className="btn btn-primary">
                  <span>Read Our Full Story</span>
                  <ArrowRight size={17} />
                </Link>
                <Link
                  to="/programs"
                  className="btn btn-secondary"
                  style={{
                    backgroundColor: 'transparent',
                    border: '1.5px solid rgba(244, 90, 36, 0.4)',
                    color: 'var(--color-sunset-orange)'
                  }}
                >
                  <span>Explore Key Initiatives</span>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedReveal>

        {/* 4 Pillars Grid */}
        <StaggerContainer
          staggerDelay={0.15}
          className="pillars-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem key={idx}>
                <div
                  className="warm-card"
                  style={{
                    padding: '2.25rem 2rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(244, 90, 36, 0.1)',
                      color: 'var(--color-sunset-orange)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      border: '1px solid rgba(244, 90, 36, 0.2)'
                    }}
                  >
                    <Icon size={26} />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.35rem',
                      marginBottom: '0.85rem',
                      color: 'var(--color-sunset-dark)'
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};
