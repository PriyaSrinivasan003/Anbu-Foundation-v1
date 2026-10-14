import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../shared/SectionHeader';
import { LockedGalleryGrid } from '../gallery/LockedGalleryGrid';
import { galleryMediaItems } from '../../data/storiesData';
import { ArrowRight } from 'lucide-react';

export const CommunityGallery: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface-warm)' }}>
      <div className="container">
        <SectionHeader
          scriptEyebrow="Community Moments"
          title="Glimpses of Hope, Connection & Care"
          subtitle="A visual celebration of shared human connection in the warm sunset spirit of collective solidarity."
          showOrnament={true}
        />

        {/* Locked / Unlocked Gallery with Animations */}
        <div style={{ marginBottom: '3rem' }}>
          <LockedGalleryGrid items={galleryMediaItems} maxItems={6} />
        </div>

        {/* View all stories and gallery CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/stories" className="btn btn-secondary btn-lg">
            <span>Explore Complete Media & Stories Archive</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
