import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../components/shared/SectionHeader';
import { AnimatedCounter } from '../components/shared/AnimatedCounter';
import { SuccessStoriesDeck } from '../components/impact/SuccessStoriesDeck';
import { impactMetrics, DEMO_IMPACT_NOTE } from '../data/impactData';
import { 
  FileText, 
  Download, 
  MapPin, 
  ShieldCheck
} from 'lucide-react';

export const ImpactPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    document.title = 'Our Impact — ANBU Foundation';
  }, []);

  const categories = ['All', 'Community', 'Education', 'Healthcare', 'Ecology'];

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

      {/* Interactive Project Map Visualization (Designated Pilot Locations) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface-warm)' }}>
        <div className="container">
          <SectionHeader
            badge="Geographic Reach"
            title="Designated Regional Pilot Chapters"
            subtitle="A preview of community hubs and target operational zones where pilot programs are underway."
          />

          <div
            className="warm-card"
            style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-xl)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="badge-tag" style={{ marginBottom: '1rem' }}>
                Spatial Planning
              </span>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--color-sunset-dark)' }}>
                Decentralized Community Hubs
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                We believe that centralized aid often misses hyper-local nuances. ANBU Foundation structures operations through modular community pods located directly within walking distance of participating families.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  { name: 'Pod Alpha — Riverside Valley', desc: 'Focus on outdoor reading circles and primary elder screening.' },
                  { name: 'Pod Beta — Sunny Vale Hamlet', desc: 'Dedicated community canopy, composting, and micro-nursery.' },
                  { name: 'Pod Gamma — Hillside Rural Sector', desc: 'Clean water biosand stations and solar path lighting.' }
                ].map((pod, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <MapPin size={20} color="var(--color-sunset-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.95rem' }}>{pod.name}</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{pod.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stylized Map Vector Visual */}
            <div
              style={{
                position: 'relative',
                minHeight: '320px',
                backgroundColor: 'var(--color-sunset-cream)',
                borderRadius: 'var(--radius-lg)',
                border: '1.5px solid rgba(244, 90, 36, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                textAlign: 'center',
                overflow: 'hidden'
              }}
            >
              {/* Decorative grid pattern */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'radial-gradient(rgba(244, 90, 36, 0.2) 1.5px, transparent 1.5px)',
                  backgroundSize: '24px 24px',
                  opacity: 0.6
                }}
              />

              {/* Pin markers */}
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-sunset-orange)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    boxShadow: '0 8px 24px rgba(244, 90, 36, 0.35)'
                  }}
                >
                  <MapPin size={32} />
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.35rem' }}>Verified Pilot Zones</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '300px' }}>
                  Interactive geographic GPS maps will be linked once regional regulatory clearances are completed.
                </p>
              </div>
            </div>
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
