import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { programsData, DEMO_NOTICE } from '../data/programsData';
import { 
  GraduationCap, 
  HeartHandshake, 
  School, 
  Home, 
  Heart, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  PlayCircle, 
  Building2,
  Users,
  Compass,
  FileCheck2,
  ExternalLink,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedImage } from '../components/shared/AnimatedImage';

export const ProgramsPage: React.FC = () => {
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const [expandedTrayIndex, setExpandedTrayIndex] = useState<number | null>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Key Initiatives — ANBU Foundation';
  }, []);

  const activePillar = programsData[activePillarIndex] || programsData[0];
  const prevPillarIndex = (activePillarIndex - 1 + programsData.length) % programsData.length;
  const nextPillarIndex = (activePillarIndex + 1) % programsData.length;
  const prevPillar = programsData[prevPillarIndex];
  const nextPillar = programsData[nextPillarIndex];

  const getPillarIcon = (slug: string) => {
    switch (slug) {
      case 'anbu-scholarship':
        return <GraduationCap size={20} />;
      case 'inclusive-education':
        return <HeartHandshake size={20} />;
      case 'school-supporting-programs':
        return <School size={20} />;
      case 'rural-development':
        return <Home size={20} />;
      case 'joy-of-giving':
        return <Heart size={20} />;
      case 'skill-development':
        return <Sparkles size={20} />;
      default:
        return <Compass size={20} />;
    }
  };

  const scrollToPillar = (slug: string) => {
    const element = document.getElementById(`pillar-${slug}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* 1. Grand Institutional Hero Section with BNR Glow & 3D Perspective */}
      <section
        style={{
          position: 'relative',
          backgroundColor: '#1E0E08',
          color: '#FFF8F0',
          paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(4rem, 6vw, 6rem)',
          overflow: 'hidden'
        }}
      >
        {/* Subtle radial warmth and mesh grid background (BNR signature ambient lighting) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: '1360px',
            height: '100%',
            background: 'radial-gradient(circle at 50% 15%, rgba(244, 90, 36, 0.35) 0%, rgba(255, 152, 97, 0.08) 50%, transparent 75%)',
            pointerEvents: 'none',
            zIndex: 0
          }}
          className="bnr-glow-animated"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(255, 208, 155, 0.08) 1.5px, transparent 1.5px)',
            backgroundSize: '36px 36px',
            opacity: 0.5,
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Institutional Eyebrow */}
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(244, 90, 36, 0.22)',
                border: '1px solid rgba(244, 90, 36, 0.45)',
                backdropFilter: 'blur(10px)',
                padding: '0.45rem 1.15rem',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-golden-peach)',
                marginBottom: '1.5rem'
              }}
            >
              <Building2 size={15} color="var(--color-sunset-orange)" />
              <span>Foundation Strategic Portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5.2vw, 4.2rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                margin: '0 0 1.25rem 0',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FFE0C2 50%, #FFB68D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Six Cornerstone Initiatives
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.28rem)',
                color: 'rgba(255, 244, 229, 0.88)',
                lineHeight: 1.65,
                margin: '0 auto 2.5rem auto',
                maxWidth: '740px'
              }}
            >
              For over two decades, ANBU Foundation has steered an integrated humanitarian blueprint in strategic alliance with <strong>Sathyabama Deemed University</strong> and premier trusts across Tamil Nadu.
            </motion.p>

            {/* Verification Notice */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                backgroundColor: 'rgba(255, 255, 255, 0.07)',
                border: '1px solid rgba(255, 208, 155, 0.22)',
                borderRadius: 'var(--radius-full)',
                padding: '0.5rem 1.25rem',
                fontSize: '0.85rem',
                color: 'var(--color-golden-peach)',
                marginBottom: '3rem'
              }}
            >
              <Sparkles size={16} color="var(--color-sunset-orange)" />
              <span>{DEMO_NOTICE}</span>
            </motion.div>
          </div>

          {/* Institutional Metrics Strip with BNR 3D Lift */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              maxWidth: '1160px',
              margin: '0 auto',
              paddingTop: '2.5rem',
              borderTop: '1px solid rgba(255, 208, 155, 0.16)'
            }}
          >
            {[
              { label: 'Higher Education Scholarships', val: '10,000+ Conferred' },
              { label: 'Adopted Government Schools', val: '6 Campus Networks' },
              { label: 'Rural Hamlets Empowered', val: '10 Kanchipuram Villages' },
              { label: 'Women Vocational Scholars', val: '2,000+ Certified' },
              { label: 'Direct Grassroots Delivery', val: '100% Transparent' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                transition={{ duration: 0.2 }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 208, 155, 0.14)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem 1rem',
                  textAlign: 'center',
                  cursor: 'default'
                }}
              >
                <div style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)', fontWeight: 800, color: 'var(--color-golden-peach)', marginBottom: '0.3rem', fontFamily: 'var(--font-sans)' }}>
                  {stat.val}
                </div>
                <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255, 244, 229, 0.72)', fontWeight: 600 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. BNR Signature Interactive 3D Showcase (Wheel Navigation + 3D Card Fan Deck) */}
      <section
        style={{
          backgroundColor: '#160904',
          color: '#FFF8F0',
          padding: 'clamp(4rem, 7vw, 6.5rem) 0',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(244, 90, 36, 0.18)'
        }}
      >
        {/* Ambient BNR Golden/Warm Glow Orb */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '15%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(244, 90, 36, 0.4) 0%, transparent 70%)',
            filter: 'blur(70px)',
            pointerEvents: 'none',
            zIndex: 0
          }}
          className="bnr-glow-animated"
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <span className="font-script" style={{ fontSize: '2rem', color: 'var(--color-golden-peach)', display: 'block', marginBottom: '0.35rem' }}>
              Strategic Pathways in Motion
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.8vw, 3rem)', color: '#FFFFFF', margin: '0 0 1rem 0' }}>
              Interactive Program Showcase
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <span style={{ display: 'block', height: '2px', width: '56px', backgroundColor: 'var(--color-sunset-orange)', borderRadius: '2px' }} />
            </div>
            <p style={{ color: 'rgba(255, 244, 229, 0.8)', fontSize: '1rem', marginTop: '1rem' }}>
              Select any cornerstone pillar to view its operational blueprint, verified platform metrics, and documentary chronicles.
            </p>
          </div>

          {/* BNR-Style Split Wheel & 3D Perspective Deck Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.15fr)',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'center'
            }}
            className="bnr-showcase-split"
          >
            {/* Left: Interactive Vertical Wheel Navigation */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                position: 'relative'
              }}
            >
              {programsData.map((p, idx) => {
                const isActive = activePillarIndex === idx;
                return (
                  <button
                    key={p.slug}
                    type="button"
                    onClick={() => setActivePillarIndex(idx)}
                    onMouseEnter={() => setActivePillarIndex(idx)}
                    style={{
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      padding: '0.85rem 1.25rem',
                      borderRadius: 'var(--radius-xl)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.07)' : 'transparent',
                      backdropFilter: isActive ? 'blur(12px)' : 'none',
                      borderLeft: isActive ? '3.5px solid var(--color-sunset-orange)' : '3.5px solid transparent',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: isActive ? 'var(--color-sunset-orange)' : 'rgba(255, 255, 255, 0.05)',
                        color: isActive ? '#FFFFFF' : 'rgba(255, 244, 229, 0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <span style={{ fontSize: '0.82rem', fontWeight: 800 }}>0{idx + 1}</span>
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: isActive ? '1.45rem' : '1.12rem',
                            fontWeight: isActive ? 800 : 600,
                            color: isActive ? 'var(--color-golden-peach)' : 'rgba(255, 244, 229, 0.72)',
                            transition: 'all 0.25s ease',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: 'block'
                          }}
                        >
                          {p.title}
                        </span>
                        {isActive && (
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22C55E', flexShrink: 0 }} />
                        )}
                      </div>
                      <span style={{ fontSize: '0.78rem', color: 'rgba(255, 244, 229, 0.55)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginTop: '0.15rem' }}>
                        {p.category} • {p.metrics[0]?.value}
                      </span>
                    </div>

                    <ChevronRight
                      size={18}
                      color={isActive ? 'var(--color-sunset-orange)' : 'rgba(255, 255, 255, 0.2)'}
                      style={{
                        transform: isActive ? 'translateX(4px)' : 'none',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0
                      }}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right: BNR 3D Perspective Card Fan Deck */}
            <div style={{ perspective: '1400px' }} className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillar.slug}
                  initial={{ opacity: 0, y: 16, rotateY: -4 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  exit={{ opacity: 0, y: -16, rotateY: 4 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="preserve-3d"
                  style={{
                    position: 'relative'
                  }}
                >
                  {/* Background Stacked Card 1 (Rotated Left - BNR Signature Fan) */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '-24px',
                      width: '65%',
                      height: '80%',
                      borderRadius: 'var(--radius-2xl)',
                      overflow: 'hidden',
                      border: '1.5px solid rgba(255, 208, 155, 0.2)',
                      transform: 'rotate(-7deg) scale(0.85)',
                      opacity: 0.35,
                      pointerEvents: 'none',
                      zIndex: 1,
                      filter: 'grayscale(30%)'
                    }}
                  >
                    <img
                      src={prevPillar.coverImage}
                      alt={prevPillar.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Background Stacked Card 2 (Rotated Right - BNR Signature Fan) */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '-24px',
                      width: '65%',
                      height: '80%',
                      borderRadius: 'var(--radius-2xl)',
                      overflow: 'hidden',
                      border: '1.5px solid rgba(255, 208, 155, 0.2)',
                      transform: 'rotate(6deg) scale(0.85)',
                      opacity: 0.35,
                      pointerEvents: 'none',
                      zIndex: 1,
                      filter: 'grayscale(30%)'
                    }}
                  >
                    <img
                      src={nextPillar.coverImage}
                      alt={nextPillar.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Main Active 3D Elevated Card */}
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 5,
                      backgroundColor: '#1E0E08',
                      borderRadius: 'var(--radius-2xl)',
                      border: '2px solid rgba(244, 90, 36, 0.35)',
                      boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5), 0 0 35px rgba(244, 90, 36, 0.2)',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Visual Media Header with Subtle Ken Burns & Loading Shimmer */}
                    <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                      <AnimatedImage
                        src={activePillar.coverImage}
                        alt={activePillar.title}
                        darkSkeleton={true}
                        containerStyle={{ height: '100%', width: '100%' }}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(180deg, rgba(30, 14, 8, 0.2) 0%, rgba(30, 14, 8, 0.85) 100%)'
                        }}
                      />

                      {/* Top Pill Tags */}
                      <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', right: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span
                          style={{
                            backgroundColor: 'rgba(244, 90, 36, 0.85)',
                            color: '#FFFFFF',
                            padding: '0.35rem 0.85rem',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.76rem',
                            fontWeight: 800,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase'
                          }}
                        >
                          Pillar 0{activePillarIndex + 1}
                        </span>

                        {activePillar.videoUrl && (
                          <span
                            style={{
                              backgroundColor: 'rgba(0, 0, 0, 0.65)',
                              backdropFilter: 'blur(8px)',
                              color: 'var(--color-golden-peach)',
                              border: '1px solid rgba(255, 208, 155, 0.3)',
                              padding: '0.35rem 0.85rem',
                              borderRadius: 'var(--radius-full)',
                              fontSize: '0.76rem',
                              fontWeight: 700,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem'
                            }}
                          >
                            <PlayCircle size={14} color="var(--color-sunset-orange)" />
                            <span>Documentary Included</span>
                          </span>
                        )}
                      </div>

                      {/* Tagline Ribbon */}
                      <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem', right: '1.25rem' }}>
                        <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-golden-peach)', fontStyle: 'italic', fontFamily: 'var(--font-serif)', textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}>
                          “{activePillar.quote || activePillar.tagline}”
                        </p>
                      </div>
                    </div>

                    {/* Card Content & Action Bar */}
                    <div style={{ padding: '1.75rem 2rem' }}>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: '#FFFFFF', margin: '0 0 0.5rem 0' }}>
                        {activePillar.title}
                      </h3>

                      {/* BNR-style expanding accent underline */}
                      <div style={{ width: '48px', height: '2px', backgroundColor: 'var(--color-sunset-orange)', borderRadius: '2px', marginBottom: '1rem' }} />

                      <p style={{ color: 'rgba(255, 244, 229, 0.85)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                        {activePillar.shortDescription}
                      </p>

                      {/* Key Metric Highlights Bento */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginBottom: '1.75rem' }}>
                        {activePillar.metrics.slice(0, 2).map((m, mIdx) => (
                          <div key={mIdx} style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 208, 155, 0.16)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)' }}>
                            <div style={{ fontSize: '0.7rem', color: 'rgba(255, 244, 229, 0.65)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{m.label}</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-golden-peach)', marginTop: '0.2rem' }}>{m.value}</div>
                          </div>
                        ))}
                      </div>

                      {/* 3D Action Buttons (BNR Signature Glow) */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <div style={{ perspective: '900px' }}>
                          <Link
                            to={`/programs/${activePillar.slug}`}
                            className="btn btn-primary btn-3d-glow"
                            style={{ padding: '0.75rem 1.6rem', fontSize: '0.92rem' }}
                          >
                            <span>Open Strategic Blueprint</span>
                            <ArrowRight size={15} />
                          </Link>
                        </div>

                        <button
                          type="button"
                          onClick={() => scrollToPillar(activePillar.slug)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--color-golden-peach)',
                            fontSize: '0.88rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            padding: '0.5rem 0.75rem'
                          }}
                        >
                          <span>Scroll to Dossier Details</span>
                          <ChevronDown size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Executive Strategic Dossier Portfolio with BNR 3D Hover & Sliding Drawers */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-sunset-orange)', display: 'block', marginBottom: '0.5rem' }}>
              Structured Operational Blueprints
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.1rem, 3.8vw, 3rem)', color: 'var(--color-sunset-dark)', margin: 0 }}>
              The Six Strategic Dossiers
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.65, marginTop: '0.75rem' }}>
              Hover over or expand any dossier card to view verified university platforms, coalition trusts, and screening governance.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
            {programsData.map((program, index) => {
              const isEven = index % 2 === 1;
              const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI'];
              const roman = romanNumerals[index] || `${index + 1}`;
              const isTrayOpen = expandedTrayIndex === index;
              const isHovered = hoveredCardIndex === index;

              return (
                <div
                  key={program.slug}
                  id={`pillar-${program.slug}`}
                  className={`bnr-service-card ${isHovered ? 'is-active' : ''}`}
                  onMouseEnter={() => setHoveredCardIndex(index)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                  style={{
                    perspective: '1400px',
                    scrollMarginTop: '120px'
                  }}
                >
                  {/* BNR Ambient Radial Blur Glow on Hover */}
                  <div className="bnr-service-glow" aria-hidden="true" />

                  {/* Main Elevated 3D Dossier Card */}
                  <div
                    className="preserve-3d"
                    style={{
                      position: 'relative',
                      zIndex: 5,
                      backgroundColor: '#FFFFFF',
                      borderRadius: 'var(--radius-2xl)',
                      border: '1.5px solid rgba(244, 90, 36, 0.2)',
                      boxShadow: isHovered
                        ? '0 20px 48px rgba(244, 90, 36, 0.16), 0 8px 24px rgba(43, 22, 15, 0.08)'
                        : '0 8px 28px rgba(43, 22, 15, 0.05)',
                      overflow: 'hidden',
                      transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    {/* Top Institutional Banner */}
                    <div
                      style={{
                        padding: '1.25rem 2rem',
                        backgroundColor: 'var(--color-sunset-cream)',
                        borderBottom: '1px solid rgba(244, 90, 36, 0.14)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '0.75rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        <span
                          style={{
                            backgroundColor: 'var(--color-sunset-orange)',
                            color: '#FFFFFF',
                            padding: '0.3rem 0.75rem',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.76rem',
                            fontWeight: 800,
                            letterSpacing: '0.1em'
                          }}
                        >
                          PILLAR {roman}
                        </span>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-sunset-dark)', fontSize: '0.86rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          {getPillarIcon(program.slug)}
                          <span>{program.category}</span>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            fontSize: '0.76rem',
                            fontWeight: 700,
                            color: '#16A34A',
                            backgroundColor: 'rgba(34, 197, 94, 0.12)',
                            padding: '0.3rem 0.75rem',
                            borderRadius: '9999px',
                            border: '1px solid rgba(34, 197, 94, 0.25)'
                          }}
                        >
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#16A34A' }} />
                          <span>Active Field Operations</span>
                        </span>

                        {program.videoUrl && (
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              fontSize: '0.76rem',
                              fontWeight: 700,
                              color: 'var(--color-sunset-orange)',
                              backgroundColor: 'rgba(244, 90, 36, 0.1)',
                              padding: '0.3rem 0.75rem',
                              borderRadius: '9999px',
                              border: '1px solid rgba(244, 90, 36, 0.25)'
                            }}
                          >
                            <PlayCircle size={13} />
                            <span>Film Available</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Main Dossier Grid */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: isEven ? 'minmax(0, 1fr) minmax(0, 1.15fr)' : 'minmax(0, 1.15fr) minmax(0, 1fr)',
                        gap: 'clamp(2rem, 4vw, 3.5rem)',
                        padding: 'clamp(2rem, 3.5vw, 3rem)',
                        alignItems: 'center'
                      }}
                      className={`dossier-grid ${isEven ? 'dossier-reversed' : ''}`}
                    >
                      {/* Content Column */}
                      <div style={{ order: isEven ? 2 : 1 }}>
                        <h3
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'clamp(1.9rem, 3vw, 2.6rem)',
                            color: 'var(--color-sunset-dark)',
                            lineHeight: 1.2,
                            margin: '0 0 0.5rem 0'
                          }}
                        >
                          {program.title}
                        </h3>

                        {/* BNR Expanding Accent Underline on Hover */}
                        <span className="accent-expand-line" style={{ marginBottom: '1rem' }} />

                        {/* Creed Quote Callout */}
                        {program.quote && (
                          <div
                            style={{
                              backgroundColor: 'rgba(255, 244, 229, 0.65)',
                              borderLeft: '4px solid var(--color-sunset-orange)',
                              padding: '0.85rem 1.25rem',
                              borderRadius: 'var(--radius-md)',
                              marginBottom: '1.25rem'
                            }}
                          >
                            <p
                              style={{
                                margin: 0,
                                fontFamily: 'var(--font-serif)',
                                fontStyle: 'italic',
                                fontSize: '1.05rem',
                                color: 'var(--color-sunset-dark)',
                                lineHeight: 1.45
                              }}
                            >
                              “{program.quote}”
                            </p>
                          </div>
                        )}

                        {/* Executive Summary */}
                        <p
                          style={{
                            fontSize: '1.02rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.7,
                            marginBottom: '1.5rem'
                          }}
                        >
                          {program.shortDescription}
                        </p>

                        {/* Metric Bento Pills */}
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                            gap: '0.85rem',
                            marginBottom: '1.75rem'
                          }}
                        >
                          {program.metrics.map((metric, mIdx) => (
                            <div
                              key={mIdx}
                              style={{
                                padding: '0.85rem 1.1rem',
                                backgroundColor: 'var(--color-sunset-cream)',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid rgba(244, 90, 36, 0.16)'
                              }}
                            >
                              <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-secondary)', fontWeight: 700 }}>
                                {metric.label}
                              </div>
                              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-sunset-dark)', fontFamily: 'var(--font-sans)', marginTop: '0.2rem' }}>
                                {metric.value}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Associated Trusts or Key Focus Items */}
                        {program.associatedTrusts && program.associatedTrusts.length > 0 && (
                          <div style={{ marginBottom: '1.75rem' }}>
                            <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sunset-orange)', display: 'block', marginBottom: '0.5rem' }}>
                              Key Coalitions & Partner Trusts:
                            </span>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                              {program.associatedTrusts.slice(0, 5).map((trust, tIdx) => (
                                <span
                                  key={tIdx}
                                  style={{
                                    fontSize: '0.82rem',
                                    fontWeight: 600,
                                    color: 'var(--color-sunset-dark)',
                                    backgroundColor: '#FFFFFF',
                                    border: '1px solid rgba(43, 22, 15, 0.12)',
                                    padding: '0.3rem 0.75rem',
                                    borderRadius: '9999px'
                                  }}
                                >
                                  {trust}
                                </span>
                              ))}
                              {program.associatedTrusts.length > 5 && (
                                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-sunset-orange)', padding: '0.3rem 0.5rem' }}>
                                  +{program.associatedTrusts.length - 5} More
                                </span>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Action Links with BNR 3D Button Shadows */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
                          <div style={{ perspective: '900px' }}>
                            <Link
                              to={`/programs/${program.slug}`}
                              className="btn btn-primary btn-3d-glow"
                              style={{ padding: '0.75rem 1.6rem', fontSize: '0.94rem' }}
                            >
                              <span>Explore Blueprint & Film</span>
                              <ArrowRight size={16} />
                            </Link>
                          </div>
                          
                          <button
                            type="button"
                            onClick={() => setExpandedTrayIndex(isTrayOpen ? null : index)}
                            style={{
                              padding: '0.75rem 1.35rem',
                              fontSize: '0.92rem',
                              fontWeight: 700,
                              borderRadius: 'var(--radius-full)',
                              border: '1px solid rgba(244, 90, 36, 0.25)',
                              backgroundColor: isTrayOpen ? 'var(--color-sunset-cream)' : '#FFFFFF',
                              color: 'var(--color-sunset-dark)',
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.4rem',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <span>{isTrayOpen ? 'Close Quick Tray' : 'Inspect Governance Tray'}</span>
                            <ChevronDown
                              size={15}
                              style={{
                                transform: isTrayOpen ? 'rotate(180deg)' : 'none',
                                transition: 'transform 0.25s ease'
                              }}
                            />
                          </button>
                        </div>
                      </div>

                      {/* Visual Media Column with BNR Ken Burns Hover */}
                      <div style={{ order: isEven ? 1 : 2 }}>
                        <div
                          style={{
                            position: 'relative',
                            borderRadius: 'var(--radius-xl)',
                            overflow: 'hidden',
                            boxShadow: '0 16px 40px rgba(43, 22, 15, 0.12)',
                            border: '2px solid rgba(244, 90, 36, 0.18)',
                            height: '380px'
                          }}
                          className="bnr-ken-burns"
                        >
                          <AnimatedImage
                            src={program.coverImage}
                            alt={program.title}
                            containerStyle={{ height: '380px', width: '100%' }}
                            style={{
                              width: '100%',
                              height: '380px',
                              objectFit: 'cover',
                              display: 'block',
                              transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
                            }}
                          />

                          {/* Gradient Scrim */}
                          <div
                            style={{
                              position: 'absolute',
                              inset: 0,
                              background: 'linear-gradient(180deg, rgba(43, 22, 15, 0.05) 0%, rgba(43, 22, 15, 0.65) 100%)'
                            }}
                          />

                          {/* Strategic Tagline Footer */}
                          <div
                            style={{
                              position: 'absolute',
                              bottom: '1.25rem',
                              left: '1.25rem',
                              right: '1.25rem',
                              color: '#FFFFFF'
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: 'rgba(30, 14, 8, 0.88)',
                                backdropFilter: 'blur(12px)',
                                padding: '1rem 1.25rem',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid rgba(255, 208, 155, 0.25)'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-golden-peach)' }}>
                                  Institutional Platform
                                </span>
                                <Link
                                  to={`/programs/${program.slug}`}
                                  style={{
                                    fontSize: '0.76rem',
                                    fontWeight: 700,
                                    color: '#FFFFFF',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.25rem',
                                    textDecoration: 'none'
                                  }}
                                >
                                  <span>Full Dossier</span>
                                  <ExternalLink size={12} />
                                </Link>
                              </div>
                              <p style={{ margin: 0, fontSize: '0.88rem', color: 'rgba(255, 244, 229, 0.9)', lineHeight: 1.45 }}>
                                {program.tagline}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BNR-Style Sliding Drawer / Tray Underneath Card */}
                  <div
                    className={`bnr-card-tray ${isTrayOpen ? 'bnr-card-tray-open' : 'bnr-card-tray-closed'}`}
                    style={{
                      marginTop: isTrayOpen ? '-1rem' : '0'
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: 'var(--color-sunset-cream)',
                        border: '1.5px solid rgba(244, 90, 36, 0.22)',
                        borderTop: 'none',
                        borderRadius: '0 0 var(--radius-2xl) var(--radius-2xl)',
                        padding: '1.75rem 2rem',
                        boxShadow: '0 12px 32px rgba(43, 22, 15, 0.08)'
                      }}
                    >
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                          gap: '1.5rem',
                          alignItems: 'start'
                        }}
                      >
                        {/* Column 1: Governance & Screening */}
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--color-sunset-orange)', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                            <FileCheck2 size={15} />
                            <span>Selection & Verification Mechanism</span>
                          </div>
                          {program.selectionCriteria && program.selectionCriteria.length > 0 ? (
                            <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                              {program.selectionCriteria.slice(0, 3).map((crit, cIdx) => (
                                <li key={cIdx}>{crit}</li>
                              ))}
                            </ul>
                          ) : (
                            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                              Direct community vulnerability profiling conducted with grassroots representatives and university staff.
                            </p>
                          )}
                        </div>

                        {/* Column 2: Institutional Alliance Platform */}
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--color-sunset-orange)', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                            <ShieldCheck size={15} />
                            <span>Operational University Alliance</span>
                          </div>
                          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-sunset-dark)', lineHeight: 1.55 }}>
                            Sathyabama Institute of Science and Technology platform provides academic seat allocation, faculty guidance, and direct laboratory infrastructure.
                          </p>
                        </div>

                        {/* Column 3: Quick Direct Action */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                          <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sunset-orange)' }}>
                            Civic Participation
                          </span>
                          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                            <Link
                              to={`/programs/${program.slug}`}
                              className="btn btn-primary btn-sm"
                              style={{ padding: '0.55rem 1.15rem' }}
                            >
                              <span>View Full Initiative</span>
                            </Link>
                            <Link
                              to={`/programs/${program.slug}`}
                              className="btn btn-secondary btn-sm"
                              style={{ padding: '0.55rem 1.15rem' }}
                            >
                              <span>Watch Feature Video</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Strategic Governance & Institutional Alliances Matrix */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-sunset-cream)', borderTop: '1px solid rgba(244, 90, 36, 0.16)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--color-sunset-orange)', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              <ShieldCheck size={16} />
              <span>High-Fidelity Governance</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--color-sunset-dark)', margin: '0 0 1rem 0' }}>
              Our Strategic Operating Framework
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <span style={{ display: 'block', height: '2px', width: '56px', backgroundColor: 'var(--color-sunset-orange)', borderRadius: '2px', marginBottom: '1rem' }} />
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Every initiative operates under a disciplined 3-tier governance structure: Institutional University Sponsorship, Rigorous Field Verification, and Multi-Trust Collaborations.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
              marginBottom: '4rem'
            }}
          >
            {[
              {
                icon: <Building2 size={24} color="var(--color-sunset-orange)" />,
                title: 'University Academic Seat Allocation',
                desc: 'Guaranteed higher education seats and state-of-the-art laboratory access provided in collaboration with Sathyabama Institute of Science and Technology.'
              },
              {
                icon: <FileCheck2 size={24} color="var(--color-sunset-orange)" />,
                title: 'Multi-Tier Screening & Verification',
                desc: 'Family vulnerability audits, 10th & 12th Board evaluation, and foundation-conducted entrance testing ensure 100% integrity in scholarship allotment.'
              },
              {
                icon: <Users size={24} color="var(--color-sunset-orange)" />,
                title: 'Coalition of Trusted Partner NGOs',
                desc: 'Active operational syndication with Agaram Foundation, World Vision, India Vision, Ability Foundation, The Banyan, NAAM, and Tamilnadu Blind Association.'
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, boxShadow: '0 16px 36px rgba(43, 22, 15, 0.08)' }}
                transition={{ duration: 0.25 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem',
                  border: '1.5px solid rgba(244, 90, 36, 0.18)',
                  boxShadow: '0 8px 24px rgba(43, 22, 15, 0.04)'
                }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-sunset-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-sunset-dark)', margin: '0 0 0.75rem 0', fontFamily: 'var(--font-sans)' }}>
                  {card.title}
                </h3>
                <span className="accent-expand-line" style={{ marginBottom: '0.75rem' }} />
                <p style={{ margin: 0, fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* At-a-Glance Executive Matrix Table */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-2xl)',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              border: '1.5px solid rgba(244, 90, 36, 0.2)',
              boxShadow: '0 12px 36px rgba(43, 22, 15, 0.06)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-sunset-dark)', margin: 0 }}>
                  Initiatives Matrix at a Glance
                </h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Summary of ANBU Foundation’s operational pillars and flagship beneficiaries
                </p>
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-sunset-orange)', backgroundColor: 'var(--color-sunset-cream)', padding: '0.4rem 0.85rem', borderRadius: '9999px' }}>
                Updated for 2026 Mandate
              </span>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '680px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid rgba(244, 90, 36, 0.2)' }}>
                    <th style={{ padding: '0.85rem 1rem', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-sunset-dark)' }}>Pillar</th>
                    <th style={{ padding: '0.85rem 1rem', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-sunset-dark)' }}>Initiative Name</th>
                    <th style={{ padding: '0.85rem 1rem', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-sunset-dark)' }}>Core Demographics</th>
                    <th style={{ padding: '0.85rem 1rem', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-sunset-dark)' }}>Flagship Impact</th>
                    <th style={{ padding: '0.85rem 1rem', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-sunset-dark)', textAlign: 'right' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {programsData.map((p, idx) => (
                    <tr
                      key={p.slug}
                      style={{
                        borderBottom: '1px solid rgba(43, 22, 15, 0.08)',
                        transition: 'background-color 0.15s ease'
                      }}
                      className="matrix-row"
                    >
                      <td style={{ padding: '1rem', fontWeight: 800, color: 'var(--color-sunset-orange)', fontSize: '0.88rem' }}>
                        0{idx + 1}
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <Link to={`/programs/${p.slug}`} style={{ textDecoration: 'none', color: 'var(--color-sunset-dark)', fontWeight: 700, fontSize: '0.96rem' }}>
                          {p.title}
                        </Link>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{p.category}</div>
                      </td>
                      <td style={{ padding: '1rem', fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '280px' }}>
                        {p.intendedBeneficiaries.split(',').slice(0, 2).join(',')}...
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{ display: 'inline-block', backgroundColor: 'var(--color-sunset-cream)', padding: '0.3rem 0.7rem', borderRadius: '6px', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-sunset-dark)' }}>
                          {p.metrics[0]?.value || 'Ongoing Support'}
                        </span>
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'right' }}>
                        <Link
                          to={`/programs/${p.slug}`}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            fontSize: '0.86rem',
                            fontWeight: 700,
                            color: 'var(--color-sunset-orange)',
                            textDecoration: 'none'
                          }}
                        >
                          <span>Blueprint</span>
                          <ArrowRight size={14} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Direct Action Call-to-Action Bar with BNR 3D Buttons */}
      <section
        style={{
          backgroundColor: '#1E0E08',
          color: '#FFF8F0',
          padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '650px',
            height: '100%',
            background: 'radial-gradient(circle, rgba(244, 90, 36, 0.35) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
          className="bnr-glow-animated"
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '780px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-golden-peach)', display: 'block', marginBottom: '0.75rem' }}>
            Empower Our Next 20 Years
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.1rem, 4vw, 3rem)', margin: '0 0 1.25rem 0', color: '#FFFFFF' }}>
            Collaborate with ANBU Foundation
          </h2>
          <p style={{ color: 'rgba(255, 244, 229, 0.85)', fontSize: '1.08rem', lineHeight: 1.65, marginBottom: '2.5rem' }}>
            Whether connecting for academic seat allotments, government school adoption programs, or grassroots rural empowerment, ANBU Foundation welcomes constructive institutional partnerships.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <div style={{ perspective: '900px' }}>
              <Link to="/contact" className="btn btn-primary btn-lg btn-3d-glow" style={{ padding: '0.95rem 2.25rem' }}>
                <span>Contact Our Office</span>
              </Link>
            </div>
            
            <div style={{ perspective: '900px' }}>
              <Link to="/our-story" className="btn btn-secondary btn-lg btn-3d-glow" style={{ padding: '0.95rem 2rem', backgroundColor: 'rgba(255,255,255,0.08)', color: '#FFFFFF', borderColor: 'rgba(255,208,155,0.35)' }}>
                <span>Discover Our Story</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .bnr-showcase-split {
            grid-template-columns: 1fr !important;
          }
          .dossier-grid {
            grid-template-columns: 1fr !important;
          }
          .dossier-reversed > div:first-child {
            order: 2 !important;
          }
          .dossier-reversed > div:last-child {
            order: 1 !important;
          }
        }
        .matrix-row:hover {
          background-color: var(--color-sunset-cream);
        }
      `}</style>
    </main>
  );
};
