import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { programsData } from '../data/programsData';
import { 
  CheckCircle, 
  Target, 
  Activity, 
  Sparkles, 
  ArrowRight,
  Quote,
  PlayCircle,
  ShieldCheck,
  Award,
  FileText,
  Building2,
  ChevronRight
} from 'lucide-react';
import { AnimatedImage } from '../components/shared/AnimatedImage';

export const ProgramDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const videoSectionRef = useRef<HTMLDivElement>(null);

  const program = programsData.find((p) => 
    p.slug === slug || 
    (slug === 'anbu-higher-education-scholarships' && p.slug === 'anbu-scholarship') ||
    (slug === 'bright-minds-learning-hubs' && p.slug === 'inclusive-education') ||
    (slug === 'caring-hands-mobile-health' && p.slug === 'joy-of-giving') ||
    (slug === 'village-horizons-rural-empowerment' && p.slug === 'rural-development') ||
    (slug === 'green-roots-community-canopy' && p.slug === 'school-supporting-programs')
  );

  useEffect(() => {
    if (program) {
      document.title = `${program.title} — ANBU Foundation Initiatives`;
    }
  }, [program]);

  if (!program) {
    return (
      <main style={{ paddingTop: '8rem', paddingBottom: '6rem', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--color-sunset-dark)' }}>Initiative Not Located</h2>
          <p style={{ marginTop: '1rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            The requested foundation initiative could not be found.
          </p>
          <Link to="/programs" className="btn btn-primary">
            Explore All Initiatives
          </Link>
        </div>
      </main>
    );
  }

  const scrollToVideo = () => {
    videoSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const videoList = program.videoUrls || (program.videoUrl ? [program.videoUrl] : []);
  const isScholarshipPage = program.slug === 'anbu-scholarship' || slug === 'anbu-scholarship' || slug === 'anbu-higher-education-scholarships';
  const isJoyOfGivingPage = program.slug === 'joy-of-giving' || slug === 'joy-of-giving' || slug === 'caring-hands-mobile-health';
  const isSchoolSupportingPage = program.slug === 'school-supporting-programs' || slug === 'school-supporting-programs' || slug === 'green-roots-community-canopy';

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* 1. Grand Immersive Initiative Hero (Prestige Institutional Presentation) */}
      <section
        style={{
          position: 'relative',
          backgroundColor: '#1E0E08',
          color: '#FFF8F0',
          paddingTop: 'clamp(3rem, 5vw, 4.5rem)',
          paddingBottom: 'clamp(4rem, 6vw, 5.5rem)',
          overflow: 'hidden'
        }}
      >
        {/* Dynamic Background: Animated Moving Background for School Supporting, Joy of Giving, Scholarship, or Glow Mesh for others */}
        {isSchoolSupportingPage ? (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              overflow: 'hidden'
            }}
          >
            {/* Moving Photo Background with Ken Burns Pan & Zoom */}
            <div
              className="scholarship-hero-bg-animated"
              style={{
                position: 'absolute',
                top: '-12%',
                left: '-12%',
                width: '124%',
                height: '124%',
                backgroundImage: 'url(/images/school_supporting_hero.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                filter: 'brightness(0.50) contrast(1.15) saturate(1.15)',
                willChange: 'transform'
              }}
            />
            {/* Deep Warm Golden-Sunset Vignette & Gradient Overlays ensuring crisp contrast & accessibility */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(30, 14, 8, 0.72) 0%, rgba(30, 14, 8, 0.52) 40%, rgba(30, 14, 8, 0.94) 100%)',
                pointerEvents: 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, rgba(30, 14, 8, 0.72) 0%, rgba(30, 14, 8, 0.32) 50%, rgba(30, 14, 8, 0.68) 100%)',
                pointerEvents: 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at 70% 30%, rgba(244, 90, 36, 0.26) 0%, transparent 65%)',
                pointerEvents: 'none'
              }}
            />
          </div>
        ) : isJoyOfGivingPage ? (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              overflow: 'hidden'
            }}
          >
            {/* Moving Photo Background with Ken Burns Pan & Zoom */}
            <div
              className="scholarship-hero-bg-animated"
              style={{
                position: 'absolute',
                top: '-12%',
                left: '-12%',
                width: '124%',
                height: '124%',
                backgroundImage: 'url(/images/joy_of_giving_hero.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center 45%',
                filter: 'brightness(0.54) contrast(1.12) saturate(1.15)',
                willChange: 'transform'
              }}
            />
            {/* Deep Warm Golden-Sunset Vignette & Gradient Overlays ensuring crisp contrast & accessibility */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(30, 14, 8, 0.7) 0%, rgba(30, 14, 8, 0.5) 40%, rgba(30, 14, 8, 0.94) 100%)',
                pointerEvents: 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, rgba(30, 14, 8, 0.72) 0%, rgba(30, 14, 8, 0.32) 50%, rgba(30, 14, 8, 0.68) 100%)',
                pointerEvents: 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at 70% 30%, rgba(244, 90, 36, 0.26) 0%, transparent 65%)',
                pointerEvents: 'none'
              }}
            />
          </div>
        ) : isScholarshipPage ? (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              overflow: 'hidden'
            }}
          >
            {/* Moving Photo Background with Ken Burns Pan & Zoom */}
            <div
              className="scholarship-hero-bg-animated"
              style={{
                position: 'absolute',
                top: '-12%',
                left: '-12%',
                width: '124%',
                height: '124%',
                backgroundImage: 'url(/images/anbu_scholarship_hero.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center 38%',
                filter: 'brightness(0.5) contrast(1.15) saturate(1.12)',
                willChange: 'transform'
              }}
            />
            {/* Deep Warm Vignette & Gradient Overlays ensuring crisp contrast & accessibility */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(30, 14, 8, 0.72) 0%, rgba(30, 14, 8, 0.58) 40%, rgba(30, 14, 8, 0.94) 100%)',
                pointerEvents: 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, rgba(30, 14, 8, 0.75) 0%, rgba(30, 14, 8, 0.35) 50%, rgba(30, 14, 8, 0.7) 100%)',
                pointerEvents: 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at 75% 25%, rgba(244, 90, 36, 0.28) 0%, transparent 65%)',
                pointerEvents: 'none'
              }}
            />
          </div>
        ) : (
          <>
            {/* Ambient Warm Golden Radial Glows & Starlight Mesh */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                maxWidth: '1280px',
                height: '100%',
                background: 'radial-gradient(circle at 50% 15%, rgba(244, 90, 36, 0.35) 0%, rgba(255, 152, 97, 0.1) 50%, transparent 75%)',
                pointerEvents: 'none',
                zIndex: 0
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(rgba(255, 208, 155, 0.08) 1.5px, transparent 1.5px)',
                backgroundSize: '36px 36px',
                opacity: 0.45,
                pointerEvents: 'none',
                zIndex: 0
              }}
            />
          </>
        )}

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Institutional Breadcrumb Bar */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.86rem', color: 'rgba(255, 244, 229, 0.7)', flexWrap: 'wrap' }}>
              <Link to="/" style={{ color: 'rgba(255, 244, 229, 0.75)', textDecoration: 'none' }}>Home</Link>
              <ChevronRight size={14} color="var(--color-sunset-orange)" />
              <Link to="/programs" style={{ color: 'rgba(255, 244, 229, 0.75)', textDecoration: 'none' }}>Initiatives</Link>
              <ChevronRight size={14} color="var(--color-sunset-orange)" />
              <span style={{ color: 'var(--color-golden-peach)', fontWeight: 600 }}>{program.title}</span>
            </div>
          </nav>

          <div style={{ maxWidth: '960px' }}>
            {/* Category Pill & Status */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: 'rgba(244, 90, 36, 0.22)',
                  border: '1px solid rgba(244, 90, 36, 0.45)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.35rem 0.95rem',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-golden-peach)'
                }}
              >
                <Sparkles size={13} color="var(--color-sunset-orange)" />
                <span>{program.category}</span>
              </span>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  backgroundColor: 'rgba(39, 174, 96, 0.18)',
                  border: '1px solid rgba(39, 174, 96, 0.4)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#4ADE80'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4ADE80' }} />
                <span>Status: {program.status}</span>
              </span>
            </div>

            {/* Grand Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                margin: '0 0 1.25rem 0',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FFE0C2 50%, #FFB68D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {program.title}
            </h1>

            {/* Guiding Motto / Creed Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                color: 'var(--color-golden-peach)',
                fontStyle: 'italic',
                fontFamily: 'var(--font-serif)',
                lineHeight: 1.5,
                marginBottom: '2rem',
                maxWidth: '820px'
              }}
            >
              “{program.quote || program.tagline}”
            </p>

            {/* Action Bar with BNR 3D Perspective Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ perspective: '900px' }}>
                <Link to="/contact" className="btn btn-secondary btn-3d-glow" style={{ padding: '0.85rem 1.5rem', fontSize: '0.96rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#FFFFFF', borderColor: 'rgba(255, 208, 155, 0.3)' }}>
                  <span>Inquire & Partner</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {videoList.length > 0 && (
                <button
                  type="button"
                  onClick={scrollToVideo}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-golden-peach)',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    padding: '0.65rem 1rem',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                >
                  <PlayCircle size={18} color="var(--color-sunset-orange)" />
                  <span>Watch Documentary Film</span>
                </button>
              )}
            </div>
          </div>

          {/* Metric Stat Ribbon Cards with BNR 3D Hover Lift */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
              marginTop: '3.5rem',
              paddingTop: '2.5rem',
              borderTop: '1px solid rgba(255, 208, 155, 0.16)'
            }}
          >
            {program.metrics.map((metric, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 208, 155, 0.2)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(244, 90, 36, 0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255, 244, 229, 0.7)', fontWeight: 600 }}>
                  {metric.label}
                </span>
                <span style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', fontWeight: 800, color: 'var(--color-golden-peach)', fontFamily: 'var(--font-sans)' }}>
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Institutional Operational Blueprint & Strategic Framework */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          {/* Institutional Creed Seal Banner */}
          {program.quote && (
            <div
              style={{
                backgroundColor: 'var(--color-sunset-cream)',
                border: '1.5px solid rgba(244, 90, 36, 0.22)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                marginBottom: '3.5rem',
                boxShadow: '0 8px 28px rgba(43, 22, 15, 0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '1.75rem',
                flexWrap: 'wrap'
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-sunset-orange)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 16px rgba(244, 90, 36, 0.3)'
                }}
              >
                <Quote size={28} />
              </div>
              <div style={{ flex: 1, minWidth: '280px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-sunset-orange)', display: 'block', marginBottom: '0.35rem' }}>
                  ANBU Foundation Guiding Creed & Civic Promise
                </span>
                <blockquote style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.2rem, 2.5vw, 1.55rem)', fontStyle: 'italic', color: 'var(--color-sunset-dark)', lineHeight: 1.35 }}>
                  “{program.quote}”
                </blockquote>
              </div>
            </div>
          )}

          {/* Operational Framework Bento Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'start',
              marginBottom: '5rem'
            }}
            className="executive-overview-split"
          >
            {/* Left: Structured Strategic Framework Dossier */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--color-sunset-orange)', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.65rem' }}>
                  <Building2 size={16} />
                  <span>Strategic Operational Mandate</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)', color: 'var(--color-sunset-dark)', lineHeight: 1.2, margin: '0 0 1.25rem 0' }}>
                  Operational Architecture & Ground Interventions
                </h2>
              </div>

              {/* Structured Mandate Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {program.fullDescription.split('\n\n').map((para, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '1.5rem 1.75rem',
                      backgroundColor: '#FFFFFF',
                      borderRadius: 'var(--radius-xl)',
                      border: '1.5px solid rgba(244, 90, 36, 0.16)',
                      boxShadow: '0 6px 20px rgba(43, 22, 15, 0.04)',
                      position: 'relative'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <span
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--color-sunset-cream)',
                          color: 'var(--color-sunset-orange)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.84rem',
                          fontWeight: 800,
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      >
                        0{i + 1}
                      </span>
                      <p style={{ margin: 0, fontSize: '1.02rem', color: 'var(--color-sunset-dark)', lineHeight: 1.75 }}>
                        {para}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Target Beneficiaries Dossier Card */}
              <div
                style={{
                  padding: '1.5rem 1.75rem',
                  backgroundColor: 'var(--color-sunset-cream)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1.5px solid rgba(244, 90, 36, 0.22)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--color-sunset-orange)' }}>
                  <ShieldCheck size={18} />
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Beneficiary Cohort Demographics
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: '0.96rem', color: 'var(--color-sunset-dark)', lineHeight: 1.6, fontWeight: 500 }}>
                  {program.intendedBeneficiaries}
                </p>
              </div>
            </div>

            {/* Right: Framed Institutional Imagery & Key Operational Coordinates */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div
                style={{
                  borderRadius: 'var(--radius-2xl)',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(43, 22, 15, 0.12)',
                  border: '2px solid rgba(244, 90, 36, 0.22)',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '360px', overflow: 'hidden' }}>
                  <AnimatedImage
                    src={program.coverImage}
                    alt={program.title}
                    loading="eager"
                    containerStyle={{ width: '100%', height: '360px' }}
                    style={{
                      width: '100%',
                      height: '360px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      backgroundColor: 'rgba(30, 14, 8, 0.75)',
                      backdropFilter: 'blur(10px)',
                      color: 'var(--color-golden-peach)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      border: '1px solid rgba(255, 208, 155, 0.3)'
                    }}
                  >
                    {program.category}
                  </div>
                </div>
                
                {/* Official University Seal Card Docked Below Image */}
                <div
                  style={{
                    backgroundColor: 'rgba(255, 251, 246, 0.98)',
                    padding: '1.25rem 1.5rem',
                    borderTop: '1px solid rgba(244, 90, 36, 0.15)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <ShieldCheck size={18} color="var(--color-sunset-orange)" />
                    <strong style={{ fontSize: '0.94rem', color: 'var(--color-sunset-dark)' }}>
                      Institutional University Platform
                    </strong>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    Executed directly via Sathyabama Institute of Science and Technology campus facilities & grassroots verification channels.
                  </p>
                </div>
              </div>

              {/* Strategic Delivery Metrics Mini-Dock */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.5rem',
                  border: '1.5px solid rgba(244, 90, 36, 0.18)',
                  boxShadow: '0 6px 20px rgba(43, 22, 15, 0.04)'
                }}
              >
                <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sunset-orange)', display: 'block', marginBottom: '0.75rem' }}>
                  Operational Impact Delivery
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {program.metrics.map((m, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: idx < program.metrics.length - 1 ? '1px solid rgba(244, 90, 36, 0.1)' : 'none' }}>
                      <span style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>{m.label}</span>
                      <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-sunset-dark)' }}>{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Cinematic Documentary Showcase Theater (If videos exist) */}
          {videoList.length > 0 && (
            <div ref={videoSectionRef} style={{ marginBottom: '5rem', scrollMarginTop: '100px' }}>
              <div
                style={{
                  backgroundColor: '#1E0E08',
                  borderRadius: 'var(--radius-2xl)',
                  padding: 'clamp(2rem, 4vw, 3.5rem)',
                  color: '#FFFFFF',
                  boxShadow: '0 25px 60px rgba(43, 22, 15, 0.2)',
                  border: '1.5px solid rgba(255, 208, 155, 0.2)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', backgroundColor: 'rgba(244, 90, 36, 0.25)', padding: '0.35rem 1rem', borderRadius: '9999px', color: 'var(--color-golden-peach)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    <PlayCircle size={15} color="var(--color-sunset-orange)" />
                    <span>Documentary Theater</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#FFFFFF', margin: 0 }}>
                    Experience the Impact in Motion
                  </h3>
                  <p style={{ color: 'rgba(255, 244, 229, 0.8)', fontSize: '0.98rem', marginTop: '0.5rem' }}>
                    Watch inspiring field chronicles, real-world testimonials, and community milestones.
                  </p>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: videoList.length > 1 ? 'repeat(auto-fit, minmax(320px, 1fr))' : '1fr',
                    gap: '2rem',
                    maxWidth: videoList.length > 1 ? '1200px' : '900px',
                    margin: '0 auto'
                  }}
                >
                  {videoList.map((url, idx) => (
                    <div key={idx}>
                      <div
                        style={{
                          position: 'relative',
                          width: '100%',
                          paddingBottom: '56.25%',
                          borderRadius: 'var(--radius-xl)',
                          overflow: 'hidden',
                          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4)',
                          border: '2px solid rgba(244, 90, 36, 0.35)',
                          backgroundColor: '#000000'
                        }}
                      >
                        <iframe
                          src={url}
                          title={`${program.title} Feature ${idx + 1}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 0
                          }}
                        />
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.75rem', padding: '0 0.25rem' }}>
                        <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-golden-peach)' }}>
                          {program.title} — Part {idx + 1}
                        </span>
                        <span style={{ fontSize: '0.76rem', color: 'rgba(255, 255, 255, 0.6)' }}>Official Release</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 4. Foundation Accomplishments & Transformation Models (If present) */}
          {program.accomplishments && program.accomplishments.length > 0 && (
            <div style={{ marginBottom: '5rem' }}>
              <div style={{ marginBottom: '2rem', textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-sunset-orange)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                  <Sparkles size={16} />
                  <span>Demonstrated Milestones</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 2.8vw, 2.25rem)', color: 'var(--color-sunset-dark)', margin: 0 }}>
                  Key Accomplishments & Signature Programs
                </h3>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.65rem' }}>
                  <span style={{ display: 'block', height: '2px', width: '52px', backgroundColor: 'var(--color-sunset-orange)', borderRadius: '2px' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                {program.accomplishments.map((acc, idx) => (
                  <div
                    key={idx}
                    className="warm-card"
                    style={{
                      padding: '1.75rem',
                      backgroundColor: '#FFFFFF',
                      borderRadius: 'var(--radius-xl)',
                      border: '1.5px solid rgba(244, 90, 36, 0.2)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 8px 24px rgba(43, 22, 15, 0.05)',
                      transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 16px 36px rgba(244, 90, 36, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(43, 22, 15, 0.05)';
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--color-sunset-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-sunset-orange)', flexShrink: 0 }}>
                          <Award size={18} />
                        </div>
                        <h4 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--color-sunset-dark)', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                          {acc.title}
                        </h4>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                        {acc.desc}
                      </p>
                    </div>

                    {acc.link && (
                      <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(244, 90, 36, 0.12)' }}>
                        <div style={{ perspective: '900px' }}>
                          <Link
                            to={acc.link.url}
                            className="btn btn-primary btn-sm btn-3d-glow"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                          >
                            <span>{acc.link.text}</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Institutional Alliances & Collaborative Trusts (If present) */}
          {program.associatedTrusts && program.associatedTrusts.length > 0 && (
            <div
              style={{
                backgroundColor: 'var(--color-sunset-cream)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'clamp(2rem, 4vw, 3rem)',
                border: '1.5px solid rgba(244, 90, 36, 0.18)',
                marginBottom: '5rem'
              }}
            >
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-sunset-orange)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                  <ShieldCheck size={16} />
                  <span>Transparent Coalition</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', color: 'var(--color-sunset-dark)', margin: 0 }}>
                  Associated Trusts & Institutional Alliances
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', margin: '0.4rem 0 0 0' }}>
                  The foundation actively coordinates with premier trusts, hospitals, and national missions to deliver maximum productivity and transparency:
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                {program.associatedTrusts.map((trust, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '1rem 1.25rem',
                      backgroundColor: '#FFFFFF',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid rgba(244, 90, 36, 0.18)',
                      boxShadow: '0 4px 12px rgba(43, 22, 15, 0.04)'
                    }}
                  >
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-sunset-orange)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-sunset-dark)' }}>
                      {trust}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. Special Priority Groups / Adopted Hamlets / Schools (If present) */}
          {program.specialCategories && program.specialCategories.length > 0 && (
            <div style={{ marginBottom: '5rem' }}>
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-sunset-orange)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                  <Award size={16} />
                  <span>Targeted Beneficiaries</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', color: 'var(--color-sunset-dark)', margin: 0 }}>
                  {program.slug === 'rural-development'
                    ? 'Adopted Hamlets & Key Communities'
                    : program.slug === 'school-supporting-programs'
                    ? 'Adopted Government Schools Network'
                    : program.slug === 'skill-development'
                    ? 'Certified Vocational Courses & Trades'
                    : 'Dedicated Scholarship Priority Categories'}
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                {program.specialCategories.map((cat, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '1rem 1.35rem',
                      backgroundColor: '#FFFFFF',
                      borderRadius: 'var(--radius-lg)',
                      border: '1.5px solid rgba(244, 90, 36, 0.18)',
                      boxShadow: '0 4px 14px rgba(43, 22, 15, 0.04)'
                    }}
                  >
                    <span style={{ color: 'var(--color-sunset-orange)', fontSize: '1.1rem' }}>✦</span>
                    <span style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--color-sunset-dark)' }}>
                      {cat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. Selection & Screening Mechanism (If present) */}
          {program.selectionCriteria && program.selectionCriteria.length > 0 && (
            <div style={{ marginBottom: '5rem' }}>
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-sunset-orange)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                  <FileText size={16} />
                  <span>Governance & Integrity</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', color: 'var(--color-sunset-dark)', margin: 0 }}>
                  Multi-Tier Screening & Verification Mechanism
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                {program.selectionCriteria.map((crit, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1.5rem',
                      backgroundColor: '#FFFFFF',
                      borderRadius: 'var(--radius-xl)',
                      border: '1.5px solid rgba(244, 90, 36, 0.18)',
                      boxShadow: '0 6px 20px rgba(43, 22, 15, 0.04)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem'
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-sunset-orange)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.9rem',
                        fontWeight: 800
                      }}
                    >
                      {idx + 1}
                    </div>
                    <span style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--color-sunset-dark)', lineHeight: 1.5 }}>
                      {crit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 8. Core Objectives & Framework Pillars (Modern Modular Layout) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '5rem'
            }}
          >
            {/* Objectives Card */}
            <div
              className="warm-card"
              style={{
                padding: '2.25rem',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1.5px solid rgba(244, 90, 36, 0.18)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'var(--color-sunset-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-sunset-orange)' }}>
                  <Target size={22} />
                </div>
                <h3 style={{ fontSize: '1.35rem', margin: 0, color: 'var(--color-sunset-dark)', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                  Strategic Objectives
                </h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
                {program.objectives.map((obj, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle size={18} color="var(--color-sunset-orange)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Field Activities Card */}
            <div
              className="warm-card"
              style={{
                padding: '2.25rem',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1.5px solid rgba(244, 90, 36, 0.18)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'var(--color-sunset-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-sunset-orange)' }}>
                  <Activity size={22} />
                </div>
                <h3 style={{ fontSize: '1.35rem', margin: 0, color: 'var(--color-sunset-dark)', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                  Active Field Execution
                </h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
                {program.activities.map((act, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-sunset-orange)', flexShrink: 0, marginTop: '8px' }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 9. Direct Action / Grand Call-to-Action Bar (No blog widgets!) */}
          <div
            style={{
              backgroundColor: '#1E0E08',
              borderRadius: 'var(--radius-2xl)',
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#FFF8F0',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(43, 22, 15, 0.25)',
              border: '2px solid rgba(255, 208, 155, 0.25)'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '600px',
                height: '100%',
                background: 'radial-gradient(circle, rgba(244, 90, 36, 0.3) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}
            />

            <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-golden-peach)', display: 'block', marginBottom: '0.65rem' }}>
                Join Hands with ANBU Foundation
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', margin: '0 0 1rem 0', color: '#FFFFFF' }}>
                Empower a Scholar, Adopt a Village, Transform a Life
              </h3>
              <p style={{ color: 'rgba(255, 244, 229, 0.82)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: 0 }}>
                Every contribution channels directly into student scholarships, hygienic school amenities, and sustainable rural livelihood infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .executive-overview-split {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
};
