import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../shared/SectionHeader';
import { ProgramCard } from '../programs/ProgramCard';
import { programsData, DEMO_NOTICE } from '../../data/programsData';
import type { ProgramCategory } from '../../types';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProgramExplorer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProgramCategory>('All');

  const categories: ProgramCategory[] = [
    'All',
    'Education',
    'School Adoption',
    'Rural Development',
    'Community Welfare',
    'Skill Development'
  ];

  const filteredPrograms = selectedCategory === 'All'
    ? programsData
    : programsData.filter(p => p.category === selectedCategory);

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface-warm)' }}>
      <div className="container">
        <SectionHeader
          scriptEyebrow="What We Nurture"
          title="Our Key Initiatives"
          subtitle="Explore the cornerstone pathways through which ANBU Foundation channels community resources, volunteer energy, and compassionate interventions. Point at any card to open its full details."
          showOrnament={true}
        />

        {/* Category Pills Filter */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '2.5rem'
          }}
          role="tablist"
          aria-label="Filter programs by category"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.65rem 1.35rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isActive ? '1.5px solid var(--color-sunset-orange)' : '1px solid rgba(43, 22, 15, 0.12)',
                  backgroundColor: isActive ? 'var(--color-sunset-orange)' : 'var(--color-white)',
                  color: isActive ? 'var(--color-white)' : 'var(--text-secondary)',
                  boxShadow: isActive ? '0 4px 14px rgba(244, 90, 36, 0.3)' : 'var(--shadow-sm)',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Demonstration Model Disclaimer Note */}
        <div style={{ maxWidth: '820px', margin: '0 auto 2.5rem auto' }}>
          <div className="disclaimer-box" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Sparkles size={16} color="var(--color-sunset-orange)" style={{ flexShrink: 0 }} />
            <span>{DEMO_NOTICE}</span>
          </div>
        </div>

        {/* BNR-style 3D Perspective Animated Program Cards Grid */}
        <div className="w-full perspective-1200" style={{ perspective: '1400px' }}>
          <motion.div
            layout
            className="preserve-3d"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem 2rem',
              marginBottom: '3rem'
            }}
          >
          <AnimatePresence>
            {filteredPrograms.map((program) => (
              <motion.div
                key={program.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
              >
                <ProgramCard program={program} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        </div>

        {/* Empty state if no programs match */}
        {filteredPrograms.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '3rem 1rem',
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-light)'
            }}
          >
            <Filter size={36} color="var(--color-muted-rose)" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No programs currently in this category</h3>
            <p style={{ color: 'var(--text-muted)' }}>We are continually shaping community initiatives. Check back soon or view all programs.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="btn btn-secondary btn-sm"
              style={{ marginTop: '1rem' }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* View All Programs CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/programs" className="btn btn-dark btn-lg">
            <span>Explore All Initiatives</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
