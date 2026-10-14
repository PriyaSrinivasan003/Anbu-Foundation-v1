import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/shared/SectionHeader';
import { AnimatedReveal } from '../components/shared/AnimatedReveal';
import { StaggerContainer, StaggerItem } from '../components/shared/StaggerContainer';
import { HandHeart, Sparkles, Building2, Megaphone, Heart, ArrowRight } from 'lucide-react';

export const GetInvolvedPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Get Involved — ANBU Foundation';
  }, []);

  const pathways = [
    {
      icon: HandHeart,
      badge: 'Direct Engagement',
      title: 'Volunteer Your Time',
      description: 'Join hands with local field pods. Spend weekend mornings tutoring curious kids, visiting neighborhood seniors, or planting micro-forests.',
      actionLink: '/volunteer',
      actionText: 'Register as Volunteer'
    },
    {
      icon: Sparkles,
      badge: 'Skills & Mentorship',
      title: 'Share Your Expertise',
      description: 'Are you a doctor, teacher, artist, or web designer? Contribute pro-bono consulting, curriculum designs, or digital storytelling skills.',
      actionLink: '/volunteer',
      actionText: 'Join Skills Network'
    },
    {
      icon: Megaphone,
      badge: 'Grassroots Advocacy',
      title: 'Support a Campaign',
      description: 'Host a book collection drive, organize an apartment composting challenge, or champion mutual-aid relief in your neighborhood.',
      actionLink: '/contact',
      actionText: 'Propose a Campaign'
    },
    {
      icon: Building2,
      badge: 'Institutional & CSR',
      title: 'Partner With The Foundation',
      description: 'Collaborate through Corporate Social Responsibility grants, university internships, or matching gift programs for employees.',
      actionLink: '/contact',
      actionText: 'Explore Partnerships'
    }
  ];

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)' }}>
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            scriptEyebrow="Ways to Participate"
            title="Every Hand Strengthens the Circle"
            subtitle="Social change is not a spectator sport. Discover meaningful avenues to bring your unique energy, compassion, and resources into ANBU Foundation."
            showOrnament={true}
          />

          {/* 4 Pathways Grid */}
          <StaggerContainer
            staggerDelay={0.15}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}
          >
            {pathways.map((path, idx) => {
              const Icon = path.icon;
              return (
                <StaggerItem key={idx}>
                  <div
                    className="warm-card"
                    style={{
                      padding: '2.5rem 2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      backgroundColor: 'var(--bg-surface)'
                    }}
                  >
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'rgba(244, 90, 36, 0.12)',
                        color: 'var(--color-sunset-orange)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.25rem'
                      }}
                    >
                      <Icon size={26} />
                    </div>

                    <span className="badge-tag" style={{ alignSelf: 'flex-start', marginBottom: '0.85rem' }}>
                      {path.badge}
                    </span>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--color-sunset-dark)' }}>
                      {path.title}
                    </h3>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '2rem', flexGrow: 1 }}>
                      {path.description}
                    </p>

                    <div>
                      <Link to={path.actionLink} className="btn btn-secondary" style={{ width: '100%' }}>
                        <span>{path.actionText}</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Bottom Warm Donation Banner */}
          <AnimatedReveal>
            <div
              className="cream-card"
              style={{
                padding: 'clamp(2rem, 4vw, 3.5rem)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '2rem',
                border: '2px solid rgba(244, 90, 36, 0.25)'
              }}
            >
              <div style={{ maxWidth: '640px' }}>
                <span className="badge-tag" style={{ marginBottom: '0.75rem' }}>
                  Financial Stewardship
                </span>
                <h3 style={{ fontSize: '1.85rem', marginBottom: '0.75rem', color: 'var(--color-sunset-dark)' }}>
                  Prefer to Support Financially?
                </h3>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.6 }}>
                  Direct your generosity toward vital program materials—funding children’s storybooks, elder wellness kits, and indigenous trees.
                </p>
              </div>

              <div>
                <Link to="/donate" className="btn btn-primary btn-lg">
                  <Heart size={18} fill="#FFFFFF" />
                  <span>Donate to ANBU</span>
                </Link>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </main>
  );
};
