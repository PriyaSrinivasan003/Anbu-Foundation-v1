import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../components/shared/SectionHeader';
import { LockedGalleryGrid } from '../components/gallery/LockedGalleryGrid';
import { storiesData, galleryMediaItems } from '../data/storiesData';
import { Calendar, User, ChevronDown, ChevronUp, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const StoriesPage: React.FC = () => {
  const [selectedStoryCategory, setSelectedStoryCategory] = useState('All');
  const [expandedStoryId, setExpandedStoryId] = useState<string | null>('story-1');

  useEffect(() => {
    document.title = 'Stories & Media Gallery — ANBU Foundation';
  }, []);

  const storyCategories = ['All', 'Healthcare', 'Education', 'Environment', 'Community Welfare'];

  const filteredStories = selectedStoryCategory === 'All'
    ? storiesData
    : storiesData.filter(s => s.category === selectedStoryCategory);

  const toggleExpand = (id: string) => {
    setExpandedStoryId(expandedStoryId === id ? null : id);
  };

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Header */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            scriptEyebrow="Voices of Dignity"
            title="Voices of Dignity, Care & Renewal"
            subtitle="Real human narratives illustrating how love, mentorship, and collective spirit foster lasting community empowerment."
            showOrnament={true}
          />

          {/* Stories Category Filter */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.65rem',
              marginBottom: '3rem'
            }}
          >
            {storyCategories.map((cat) => {
              const isActive = selectedStoryCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedStoryCategory(cat)}
                  style={{
                    padding: '0.55rem 1.25rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: isActive ? '1.5px solid var(--color-sunset-orange)' : '1px solid rgba(43, 22, 15, 0.12)',
                    backgroundColor: isActive ? 'var(--color-sunset-orange)' : 'var(--color-white)',
                    color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                    transition: 'all 0.18s ease'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Stories Accordion & Panels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '5rem' }}>
            {filteredStories.map((story) => {
              const isExpanded = expandedStoryId === story.id;
              return (
                <div
                  key={story.id}
                  className="warm-card"
                  style={{
                    overflow: 'hidden',
                    backgroundColor: 'var(--color-white)',
                    border: isExpanded ? '2px solid var(--color-sunset-orange)' : '1px solid var(--border-light)'
                  }}
                >
                  {/* Summary Header */}
                  <div
                    style={{
                      padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                      display: 'grid',
                      gridTemplateColumns: 'minmax(0, 1fr) auto',
                      gap: '1.5rem',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                    onClick={() => toggleExpand(story.id)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') toggleExpand(story.id);
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                        <span className="badge-tag">{story.category}</span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--color-muted-rose)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <Calendar size={14} />
                          {story.date}
                        </span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--color-muted-rose)' }}>•</span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--color-muted-rose)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <User size={14} />
                          {story.role}
                        </span>
                      </div>

                      <h3 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)', marginBottom: '0.75rem', color: 'var(--color-sunset-dark)', lineHeight: 1.25 }}>
                        {story.title}
                      </h3>

                      <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.98rem', lineHeight: 1.6 }}>
                        {story.excerpt}
                      </p>
                    </div>

                    <button
                      type="button"
                      aria-label={isExpanded ? 'Collapse story' : 'Expand story'}
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        backgroundColor: isExpanded ? 'var(--color-sunset-orange)' : 'var(--color-sunset-cream)',
                        color: isExpanded ? '#FFFFFF' : 'var(--color-sunset-orange)',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        flexShrink: 0,
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {isExpanded ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                    </button>
                  </div>

                  {/* Expandable Story Detail Section */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        style={{ borderTop: '1px solid var(--border-light)', overflow: 'hidden' }}
                      >
                        <div style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)', backgroundColor: 'var(--color-sunset-cream)' }}>
                          <div
                            style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                              gap: '2rem',
                              alignItems: 'center',
                              marginBottom: '2rem'
                            }}
                          >
                            <div style={{ height: '280px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                              <img src={story.coverImage} alt={story.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>

                            <div
                              style={{
                                padding: '1.75rem',
                                backgroundColor: '#FFFFFF',
                                borderRadius: 'var(--radius-lg)',
                                borderLeft: '4px solid var(--color-sunset-orange)',
                                position: 'relative'
                              }}
                            >
                              <Quote size={28} color="var(--color-warm-coral)" style={{ opacity: 0.35, position: 'absolute', top: '12px', right: '14px' }} />
                              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--color-sunset-dark)', margin: 0, lineHeight: 1.6 }}>
                                “{story.quote}”
                              </p>
                              <span style={{ display: 'block', marginTop: '1rem', fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-sunset-orange)' }}>
                                — Field Correspondent
                              </span>
                            </div>
                          </div>

                          {/* Full Story Content Paragraphs */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {story.fullContent.map((paragraph, pIdx) => (
                              <p key={pIdx} style={{ fontSize: '1.02rem', lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0 }}>
                                {paragraph}
                              </p>
                            ))}
                          </div>

                          {/* Tags */}
                          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                            {story.tags.map((t) => (
                              <span key={t} className="badge-tag badge-tag-peach" style={{ fontSize: '0.78rem' }}>
                                #{t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Media Lightbox Gallery Grid */}
          <SectionHeader
            badge="Visual Gallery Archive"
            title="Moments of Hope & Connection"
            subtitle="Unlock the protected archive below to explore high-resolution imagery and contextual field captions."
          />

          {/* Locked / Unlocked Gallery Grid */}
          <div style={{ marginTop: '2.5rem' }}>
            <LockedGalleryGrid items={galleryMediaItems} maxItems={12} />
          </div>
        </div>
      </section>
    </main>
  );
};
