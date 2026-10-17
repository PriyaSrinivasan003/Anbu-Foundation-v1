import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, HeartPulse, TreePine, Users, Home } from 'lucide-react';
import { AnimatedImage } from '../shared/AnimatedImage';
import type { Program } from '../../types';

interface ProgramCardProps {
  program: Program;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const [isHovered, setIsHovered] = useState(false);

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
      case 'Active': return { bg: 'rgba(39, 174, 96, 0.22)', text: '#2ecc71', border: 'rgba(39, 174, 96, 0.45)' };
      case 'Expanding': return { bg: 'rgba(244, 90, 36, 0.25)', text: '#ff7675', border: 'rgba(244, 90, 36, 0.45)' };
      default: return { bg: 'rgba(255, 208, 155, 0.25)', text: '#f39c12', border: 'rgba(255, 208, 155, 0.45)' };
    }
  };

  const statusStyle = getStatusColor(program.status);

  return (
    <div
      className={`bnr-service-card group preserve-3d ${isHovered ? 'is-active' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
      style={{
        perspective: '1200px',
        position: 'relative',
        height: '460px',
        borderRadius: 'var(--radius-2xl)',
        cursor: 'pointer'
      }}
    >
      {/* 1. Radial Blur Glow on Hover */}
      <div className="bnr-service-glow" aria-hidden="true" />

      {/* 2. Main Card Housing */}
      <div
        className="warm-card preserve-3d"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          borderRadius: 'var(--radius-2xl)',
          backgroundColor: '#1E0E08',
          border: '1.5px solid rgba(244, 90, 36, 0.22)',
          boxShadow: isHovered
            ? '0 20px 42px -8px rgba(244, 90, 36, 0.32), 0 10px 24px rgba(43, 22, 15, 0.2)'
            : '0 10px 28px -4px rgba(43, 22, 15, 0.1)',
          transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: isHovered ? 'translateY(-6px)' : 'translateY(0)'
        }}
      >
        {/* Full-Bleed Image: Always filling the card, exclusively visible in resting state */}
        <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
          <AnimatedImage
            src={program.coverImage}
            alt={program.title}
            containerStyle={{ width: '100%', height: '100%' }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: isHovered ? 'scale(1.08)' : 'scale(1)',
              transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
        </div>

        {/* Hover Content Overlay: Rich glassmorphism overlay that appears only while hovered */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            background: 'linear-gradient(180deg, rgba(30, 14, 8, 0.5) 0%, rgba(30, 14, 8, 0.88) 36%, rgba(30, 14, 8, 0.98) 100%)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            opacity: isHovered ? 1 : 0,
            pointerEvents: isHovered ? 'auto' : 'none',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transform: isHovered ? 'translateY(0)' : 'translateY(18px)',
            transition: 'opacity 0.38s cubic-bezier(0.16, 1, 0.3, 1), transform 0.38s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Top Row: Category and Status Pill */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.74rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-golden-peach)',
                backgroundColor: 'rgba(255, 208, 155, 0.15)',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(255, 208, 155, 0.28)'
              }}
            >
              {getCategoryIcon(program.category)}
              <span>{program.category}</span>
            </span>

            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.3rem 0.75rem',
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

          {/* Middle/Bottom Information */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                color: '#FFFFFF',
                lineHeight: 1.25,
                margin: '0 0 0.45rem 0'
              }}
            >
              {program.title}
            </h3>

            {program.tagline && (
              <p
                style={{
                  fontFamily: 'var(--font-script, cursive)',
                  color: 'var(--color-golden-peach)',
                  fontSize: '1.1rem',
                  lineHeight: 1.35,
                  margin: '0 0 0.75rem 0',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}
              >
                "{program.tagline}"
              </p>
            )}

            <p
              style={{
                fontSize: '0.88rem',
                color: 'rgba(255, 244, 229, 0.88)',
                lineHeight: 1.55,
                margin: '0 0 1rem 0',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
            >
              {program.shortDescription}
            </p>

            {/* Key Metric Snapshot */}
            {program.metrics && program.metrics[0] && (
              <div
                style={{
                  padding: '0.55rem 0.85rem',
                  backgroundColor: 'rgba(244, 90, 36, 0.22)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  border: '1px solid rgba(255, 208, 155, 0.25)'
                }}
              >
                <span style={{ fontSize: '0.78rem', color: 'rgba(255, 244, 229, 0.85)', fontWeight: 600 }}>
                  {program.metrics[0].label}
                </span>
                <span style={{ fontSize: '0.88rem', color: 'var(--color-golden-peach)', fontWeight: 800 }}>
                  {program.metrics[0].value}
                </span>
              </div>
            )}

            {/* Direct Action Link */}
            <Link
              to={`/programs/${program.slug}`}
              className="btn btn-primary"
              style={{
                width: '100%',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.25rem',
                fontSize: '0.88rem',
                fontWeight: 700,
                textDecoration: 'none',
                borderRadius: 'var(--radius-full)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <span>Explore Initiative</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
