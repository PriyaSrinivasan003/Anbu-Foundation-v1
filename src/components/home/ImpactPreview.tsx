import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../shared/SectionHeader';
import { AnimatedCounter } from '../shared/AnimatedCounter';
import { StaggerContainer, StaggerItem } from '../shared/StaggerContainer';
import { impactMetrics, DEMO_IMPACT_NOTE } from '../../data/impactData';
import { ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export const ImpactPreview: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-sunset-dark)', color: 'var(--color-sunset-cream)' }}>
      <div className="container">
        <SectionHeader
          scriptEyebrow="Measurable Aspirations"
          badgeStyle="dark"
          darkTheme={true}
          title="Targeted Impact for Enduring Change"
          subtitle="We pair compassionate ground presence with transparent metrics. Below are the targeted performance indicators shaping our pilot programs."
          showOrnament={true}
        />

        {/* Disclaimer on demonstration metrics */}
        <div style={{ maxWidth: '820px', margin: '0 auto 3rem auto' }}>
          <div
            style={{
              padding: '1rem 1.4rem',
              backgroundColor: 'rgba(255, 208, 155, 0.08)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255, 208, 155, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: 'var(--color-golden-peach)',
              fontSize: '0.86rem'
            }}
          >
            <ShieldCheck size={20} color="var(--color-warm-coral)" style={{ flexShrink: 0 }} />
            <span>{DEMO_IMPACT_NOTE}</span>
          </div>
        </div>

        {/* Counter Cards Grid */}
        <StaggerContainer
          staggerDelay={0.15}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3.5rem'
          }}
        >
          {impactMetrics.map((item) => (
            <StaggerItem key={item.id}>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  padding: '2.25rem 1.75rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(255, 208, 155, 0.15)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)',
                    fontWeight: 800,
                    color: 'var(--color-golden-peach)',
                    lineHeight: 1,
                    marginBottom: '0.85rem'
                  }}
                >
                  <AnimatedCounter
                    target={item.targetNumber}
                    suffix={item.suffix}
                    prefix={item.prefix}
                  />
                </div>

                <h4
                  style={{
                    fontSize: '1.15rem',
                    color: 'var(--color-sunset-cream)',
                    marginBottom: '0.65rem'
                  }}
                >
                  {item.label}
                </h4>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'rgba(255, 244, 229, 0.72)',
                    margin: 0,
                    lineHeight: 1.5
                  }}
                >
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Interactive CTA to full Impact Dashboard */}
        <div style={{ textAlign: 'center' }}>
          <Link
            to="/impact"
            className="btn btn-primary btn-lg"
          >
            <HeartHandshake size={20} />
            <span>View Full Impact Dashboard & Reports</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
