import React from 'react';
import { SectionHeader } from '../shared/SectionHeader';
import { AnimatedReveal } from '../shared/AnimatedReveal';
import { projectMilestones } from '../../data/impactData';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

export const JourneyTimeline: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <SectionHeader
          scriptEyebrow="Our Evolutionary Path"
          title="The ANBU Journey & Milestones"
          subtitle="Every deep-rooted tree begins with quiet germination. Track our developmental path as we scale compassionate programs sustainably."
          showOrnament={true}
        />

        {/* Timeline Container */}
        <div style={{ position: 'relative', maxWidth: '860px', margin: '0 auto' }}>
          {/* Central Line */}
          <div
            style={{
              position: 'absolute',
              top: '15px',
              bottom: '15px',
              left: '24px',
              width: '3px',
              background: 'linear-gradient(180deg, var(--color-sunset-orange) 0%, var(--color-warm-coral) 50%, var(--color-golden-peach) 100%)',
              borderRadius: '2px'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {projectMilestones.map((milestone, index) => (
              <AnimatedReveal key={milestone.year} delay={index * 0.15}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.75rem',
                    position: 'relative'
                  }}
                >
                  {/* Timeline Node Icon */}
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-sunset-cream)',
                      border: '3px solid var(--color-sunset-orange)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-sunset-orange)',
                      flexShrink: 0,
                      zIndex: 2,
                      boxShadow: '0 4px 12px rgba(244, 90, 36, 0.25)'
                    }}
                  >
                    {index <= 1 ? <CheckCircle2 size={24} /> : <Clock size={22} />}
                  </div>

                  {/* Milestone Card */}
                  <div
                    className="warm-card"
                    style={{
                      flexGrow: 1,
                      padding: '1.75rem 2rem',
                      backgroundColor: 'var(--bg-surface)'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        gap: '0.5rem',
                        marginBottom: '0.65rem'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '1.25rem',
                          fontFamily: 'var(--font-serif)',
                          fontWeight: 800,
                          color: 'var(--color-sunset-orange)'
                        }}
                      >
                        {milestone.year}
                      </span>
                      <span className="badge-tag badge-tag-peach">
                        {milestone.phase}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: 'var(--color-sunset-dark)' }}>
                      {milestone.title}
                    </h3>

                    <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', marginBottom: '0.85rem' }}>
                      {milestone.description}
                    </p>

                    {milestone.highlight && (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.88rem',
                          color: 'var(--color-sunset-dark)',
                          fontWeight: 600,
                          padding: '0.5rem 0.85rem',
                          backgroundColor: 'var(--color-sunset-cream)',
                          borderRadius: 'var(--radius-sm)'
                        }}
                      >
                        <Sparkles size={14} color="var(--color-sunset-orange)" />
                        <span>{milestone.highlight}</span>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
