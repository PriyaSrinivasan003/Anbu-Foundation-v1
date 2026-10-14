import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedReveal } from '../shared/AnimatedReveal';
import { SectionHeader } from '../shared/SectionHeader';
import { ImageReveal } from '../shared/ImageReveal';
import { storiesData } from '../../data/storiesData';
import { Quote, ArrowRight, Calendar, User, Heart } from 'lucide-react';

export const FeaturedStory: React.FC = () => {
  const story = storiesData[0]; // 20 Years milestone story

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <SectionHeader
          scriptEyebrow="Human Interest Spotlight"
          title="Voices of Compassion & Care"
          subtitle="Behind every community initiative is a human heartbeat. Read how small acts of everyday kindness blossom into enduring dignity."
          showOrnament={true}
        />

        {/* Featured Story Editorial Card */}
        <AnimatedReveal>
          <div
            className="warm-card"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              overflow: 'hidden',
              borderRadius: 'var(--radius-xl)',
              backgroundColor: 'var(--color-sunset-cream)',
              border: '1.5px solid rgba(244, 90, 36, 0.25)',
              boxShadow: '0 20px 48px -12px rgba(43, 22, 15, 0.16)'
            }}
          >
            {/* Story Image with Cinematic Curtain & Light-Sheen Reveal */}
            <div style={{ position: 'relative', minHeight: '440px', height: '100%' }}>
              <ImageReveal
                src={story.coverImage}
                alt={story.title}
                minHeight="440px"
                objectPosition="center 10%"
                direction="up"
                badge={
                  <span
                    className="badge-tag"
                    style={{
                      backgroundColor: 'rgba(255, 244, 229, 0.95)',
                      color: 'var(--color-sunset-orange)',
                      boxShadow: '0 4px 14px rgba(43, 22, 15, 0.25)',
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    <Heart size={14} fill="var(--color-sunset-orange)" />
                    <span>{story.category}</span>
                  </span>
                }
              />
            </div>

            {/* Story Text Editorial */}
            <div
              style={{
                padding: 'clamp(2rem, 5vw, 3.5rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  fontSize: '0.88rem',
                  color: 'var(--color-muted-rose)',
                  marginBottom: '1rem'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={15} />
                  {story.date}
                </span>
                <span>•</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <User size={15} />
                  {story.role}
                </span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                  lineHeight: 1.25,
                  marginBottom: '1.25rem',
                  color: 'var(--color-sunset-dark)'
                }}
              >
                {story.title}
              </h3>

              {/* Quote callout */}
              <div
                style={{
                  position: 'relative',
                  padding: '1.25rem 1.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.65)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.5rem',
                  borderLeft: '4px solid var(--color-sunset-orange)'
                }}
              >
                <Quote
                  size={28}
                  color="var(--color-warm-coral)"
                  style={{ opacity: 0.35, position: 'absolute', top: '10px', right: '12px' }}
                />
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '1.1rem',
                    color: 'var(--color-sunset-dark)',
                    lineHeight: 1.5,
                    margin: 0
                  }}
                >
                  “{story.quote}”
                </p>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', marginBottom: '1.75rem' }}>
                {story.excerpt}
              </p>

              <div>
                <div style={{ perspective: '900px' }}>
                  <Link to="/stories" className="btn btn-primary btn-3d-glow">
                    <span>Read Full Story & Gallery</span>
                    <ArrowRight size={16} />
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
