import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, HeartPulse, TreePine, Users, Home, Sparkles } from 'lucide-react';
import { AnimatedImage } from '../shared/AnimatedImage';
import type { Program } from '../../types';

interface ProgramCardProps {
  program: Program;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const [isTrayActive, setIsTrayActive] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Education': return <BookOpen size={14} />;
      case 'Healthcare': return <HeartPulse size={14} />;
      case 'Environment': return <TreePine size={14} />;
      case 'Community Welfare': return <Home size={14} />;
      default: return <Users size={14} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return { bg: 'rgba(39, 174, 96, 0.15)', text: '#196F3D', border: 'rgba(39, 174, 96, 0.3)' };
      case 'Expanding': return { bg: 'rgba(244, 90, 36, 0.15)', text: '#C0392B', border: 'rgba(244, 90, 36, 0.3)' };
      default: return { bg: 'rgba(255, 208, 155, 0.3)', text: '#8C4724', border: 'rgba(255, 208, 155, 0.5)' };
    }
  };

  const statusStyle = getStatusColor(program.status);

  return (
    <div
      className={`bnr-service-card group preserve-3d ${isTrayActive ? 'is-active' : ''}`}
      onMouseEnter={() => setIsTrayActive(true)}
      onMouseLeave={() => setIsTrayActive(false)}
      style={{
        perspective: '1200px',
        marginBottom: isTrayActive ? '2.5rem' : '0',
        transition: 'margin-bottom 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* 1. Radial Blur Glow on Hover (BNR signature) */}
      <div className="bnr-service-glow" aria-hidden="true" />

      {/* 2. Main Elevated 3D Card */}
      <div
        className="warm-card preserve-3d"
        style={{
          position: 'relative',
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          borderRadius: 'var(--radius-xl)',
          backgroundColor: '#FFFFFF',
          border: '1.5px solid rgba(244, 90, 36, 0.18)',
          boxShadow: isTrayActive
            ? '0 16px 36px -6px rgba(244, 90, 36, 0.22), 0 6px 16px rgba(43, 22, 15, 0.06)'
            : '0 8px 24px -4px rgba(43, 22, 15, 0.08)',
          transition: 'all 0.38s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Card Header with Category, Title, and Expanding Accent Underline (BNR signature) */}
        <div style={{ padding: '1.5rem 1.75rem 1.25rem 1.75rem', backgroundColor: 'var(--color-sunset-cream)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-sunset-orange)'
              }}
            >
              {getCategoryIcon(program.category)}
              <span>{program.category}</span>
            </span>

            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.2rem 0.65rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                backgroundColor: statusStyle.bg,
                color: statusStyle.text,
                border: `1px solid ${statusStyle.border}`
              }}
            >
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: statusStyle.text }} />
              {program.status}
            </span>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.35rem',
              color: 'var(--color-sunset-dark)',
              lineHeight: 1.25,
              margin: '0 0 0.5rem 0'
            }}
          >
            {program.title}
          </h3>

          {/* BNR-style expanding accent underline on hover */}
          <span className="accent-expand-line" />
        </div>

        {/* Cover Image with Loading Shimmer Skeleton */}
        <div style={{ position: 'relative', height: '200px', overflow: 'hidden', backgroundColor: 'var(--color-sunset-cream)' }}>
          <AnimatedImage
            src={program.coverImage}
            alt={program.title}
            containerStyle={{ height: '200px', width: '100%' }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: isTrayActive ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(43, 22, 15, 0.05) 0%, rgba(43, 22, 15, 0.5) 100%)'
            }}
          />
          <div style={{ position: 'absolute', bottom: '0.75rem', left: '1.25rem', right: '1.25rem' }}>
            <span className="font-script" style={{ color: 'var(--color-golden-peach)', fontSize: '1.25rem', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
              {program.tagline}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            {program.shortDescription}
          </p>

          {/* Key Metric Snapshot */}
          {program.metrics && program.metrics[0] && (
            <div
              style={{
                padding: '0.65rem 0.9rem',
                backgroundColor: 'rgba(255, 244, 229, 0.7)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
                border: '1px solid rgba(244, 90, 36, 0.12)'
              }}
            >
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                {program.metrics[0].label}
              </span>
              <span style={{ fontSize: '0.92rem', color: 'var(--color-sunset-orange)', fontWeight: 800 }}>
                {program.metrics[0].value}
              </span>
            </div>
          )}

          {/* Footer Action */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)' }}>
            <Link
              to={`/programs/${program.slug}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontWeight: 700,
                fontSize: '0.9rem',
                color: 'var(--color-sunset-orange)',
                textDecoration: 'none'
              }}
            >
              <span>Explore Details</span>
              <ArrowRight size={15} />
            </Link>

            <button
              type="button"
              onClick={() => setIsTrayActive(!isTrayActive)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-muted-rose)',
                fontSize: '0.8rem',
                fontWeight: 600
              }}
            >
              {isTrayActive ? 'Close Quick View ↑' : 'Quick Preview ↓'}
            </button>
          </div>
        </div>
      </div>

      {/* 3. BNR-style Sliding Drawer / Tray Underneath Card */}
      <div
        className={`bnr-card-tray ${isTrayActive ? 'bnr-card-tray-open' : 'bnr-card-tray-closed'}`}
        aria-hidden={!isTrayActive}
      >
        <div
          style={{
            backgroundColor: 'var(--color-sunset-cream)',
            border: '1.5px solid rgba(244, 90, 36, 0.25)',
            borderTop: 'none',
            borderRadius: '0 0 var(--radius-xl) var(--radius-xl)',
            padding: '1.25rem 1.5rem',
            boxShadow: '0 12px 24px -6px rgba(43, 22, 15, 0.12)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
            <Sparkles size={14} color="var(--color-sunset-orange)" />
            <strong style={{ fontSize: '0.82rem', color: 'var(--color-sunset-dark)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Beneficiary Reach
            </strong>
          </div>
          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 0.85rem 0' }}>
            {program.intendedBeneficiaries}
          </p>
          <Link
            to={`/programs/${program.slug}`}
            className="btn btn-primary btn-sm"
            style={{ width: '100%', fontSize: '0.82rem', padding: '0.5rem 1rem' }}
          >
            <span>Open Dedicated Program Page</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};
