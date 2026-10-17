import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../components/shared/SectionHeader';
import { AnimatedCounter } from '../components/shared/AnimatedCounter';
import { SuccessStoriesDeck } from '../components/impact/SuccessStoriesDeck';
import { impactMetrics, DEMO_IMPACT_NOTE } from '../data/impactData';
import { 
  FileText, 
  Download,
  ShieldCheck 
} from 'lucide-react';

export const ImpactPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    document.title = 'Success Stories & Impact — ANBU Foundation';
  }, []);

  const categories = ['All', 'Education', 'Community'];

  const filteredMetrics = selectedCategory === 'All'
    ? impactMetrics
    : impactMetrics.filter(m => m.category === selectedCategory);

  const sampleReports = [
    {
      title: 'ANBU Foundation Operational Framework & Demonstration Blueprint',
      year: '2026 Edition',
      fileSize: 'Demonstration PDF • 2.4 MB',
      description: 'Overview of program governance, metric methodology, and verified compliance policies.'
    },
    {
      title: 'Annual Community Needs Assessment & Gap Analysis',
      year: '2025 Study',
      fileSize: 'Demonstration PDF • 1.8 MB',
      description: 'Grassroots survey findings regarding rural learning barriers and elder loneliness.'
    }
  ];

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Hero section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-sunset-dark)', color: 'var(--color-sunset-cream)' }}>
        <div className="container">
          <SectionHeader
            scriptEyebrow="Measurable Aspirations"
            badgeStyle="dark"
            darkTheme={true}
            title="Demonstrated Accountability & Targeted Growth"
            subtitle="True compassion is measurable. We structure every initiative around transparent goals, community reviews, and open disclosure."
            showOrnament={true}
          />

          {/* Demonstration Notice */}
          <div style={{ maxWidth: '820px', margin: '0 auto 2.5rem auto' }}>
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
                fontSize: '0.88rem'
              }}
            >
              <ShieldCheck size={20} color="var(--color-warm-coral)" style={{ flexShrink: 0 }} />
              <span>{DEMO_IMPACT_NOTE}</span>
            </div>
          </div>

          {/* Category Filter */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.65rem',
              marginBottom: '3rem'
            }}
          >
            {categories.map((c) => {
              const isActive = selectedCategory === c;
              return (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  style={{
                    padding: '0.55rem 1.25rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: isActive ? '1.5px solid var(--color-warm-coral)' : '1px solid rgba(255, 255, 255, 0.15)',
                    backgroundColor: isActive ? 'var(--color-sunset-orange)' : 'rgba(255, 255, 255, 0.06)',
                    color: '#FFFFFF',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {c}
                </button>
              );
            })}
          </div>

          {/* Live Metrics Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.75rem',
              marginBottom: '3rem'
            }}
          >
            {filteredMetrics.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  padding: '2.5rem 2rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(255, 208, 155, 0.2)',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '3.2rem',
                    fontWeight: 800,
                    color: 'var(--color-golden-peach)',
                    lineHeight: 1,
                    marginBottom: '0.75rem'
                  }}
                >
                  <AnimatedCounter
                    target={item.targetNumber}
                    suffix={item.suffix}
                    prefix={item.prefix}
                  />
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>{item.label}</h4>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255, 244, 229, 0.75)', margin: 0, lineHeight: 1.5 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documented Institutional Milestones */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface-warm)', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '0.35rem 1.15rem',
                backgroundColor: '#1E293B',
                color: '#FFFFFF',
                borderRadius: '9999px',
                fontSize: '0.74rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}
            >
              VERIFIED OUTCOMES
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                color: 'var(--color-sunset-dark)',
                fontWeight: 700,
                lineHeight: 1.25,
                margin: '0 0 0.75rem 0'
              }}
            >
              Documented Institutional Milestones
            </h2>
            <div
              style={{
                width: '40px',
                height: '2px',
                backgroundColor: '#1E293B',
                margin: '0.75rem auto 1rem auto',
                borderRadius: '2px'
              }}
            />
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                margin: 0
              }}
            >
              Authentic commitments tracked through our partner centers and academic reviews.
            </p>
          </div>

          {/* 3 Milestone Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}
          >
            {[
              {
                metric: '100%',
                title: 'Free Educational Aid',
                description: 'Tuition and learning support delivered without any hidden charges or processing fees for approved candidates.'
              },
              {
                metric: '18+',
                title: 'Years of Sustained Service',
                description: 'Continuous community engagement and student sponsorship since the inception of the foundation in 2006.'
              },
              {
                metric: 'Direct',
                title: 'Faculty & Student Mentorship',
                description: 'Connecting university professors and student mentors directly with grassroots government schools.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="warm-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  padding: '3rem 2.25rem',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(43, 22, 15, 0.05)',
                  border: '1.5px solid rgba(244, 90, 36, 0.12)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.5rem, 3.8vw, 3.3rem)',
                    fontWeight: 800,
                    color: 'var(--color-sunset-dark)',
                    lineHeight: 1,
                    marginBottom: '1rem'
                  }}
                >
                  {item.metric}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--color-sunset-dark)',
                    marginBottom: '0.85rem'
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    margin: 0
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Reports Section */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            badge="Audited Disclosures"
            title="Downloadable Reports & Governance"
            subtitle="Access our organizational charters, operational methodology, and demonstration assessment publications."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem',
              marginBottom: '3rem'
            }}
          >
            {sampleReports.map((report, idx) => (
              <div
                key={idx}
                className="warm-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--bg-surface)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                    <FileText size={22} color="var(--color-sunset-orange)" />
                    <span className="badge-tag">{report.year}</span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem', color: 'var(--color-sunset-dark)', lineHeight: 1.3 }}>
                    {report.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                    {report.description}
                  </p>
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{report.fileSize}</span>
                  <button
                    onClick={() => alert(`Downloading demonstration report: "${report.title}". Production versions will be hosted securely on our cloud storage.`)}
                    className="btn btn-secondary btn-sm"
                    style={{ gap: '0.4rem' }}
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <SuccessStoriesDeck />
    </main>
  );
};
