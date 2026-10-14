import React from 'react';
import { AnimatedReveal } from '../shared/AnimatedReveal';
import { StaggerContainer, StaggerItem } from '../shared/StaggerContainer';
import { SectionHeader } from '../shared/SectionHeader';
import { Heart, Users, Sparkles, Sprout, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

        {/* 4 Pillars Grid */}
        <StaggerContainer
          staggerDelay={0.15}
          className="pillars-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3.5rem'
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

        {/* Story Snapshot Banner */}
        <AnimatedReveal delay={0.2}>
          <div
            className="cream-card"
            style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem',
              border: '1.5px solid rgba(244, 90, 36, 0.25)'
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <span className="badge-tag" style={{ marginBottom: '0.75rem' }}>
                Our Foundation Philosophy
              </span>
              <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', marginBottom: '0.75rem' }}>
                “Charity gives to relieve pain; Anbu embraces to restore wholeness.”
              </h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                Discover how our journey started, our governance framework, and the people dedicated to nurturing this vision.
              </p>
            </div>

            <div>
              <Link to="/our-story" className="btn btn-primary">
                <span>Read Our Full Story</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};
