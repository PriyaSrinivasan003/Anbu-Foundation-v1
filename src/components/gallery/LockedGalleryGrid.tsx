import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Lock, Unlock, Sparkles, Key, Eye } from 'lucide-react';
import type { GalleryMediaItem } from '../../data/storiesData';
import { LightboxModal } from '../shared/LightboxModal';
import { AnimatedImage } from '../shared/AnimatedImage';

interface LockedGalleryGridProps {
  items: GalleryMediaItem[];
  maxItems?: number;
}

export const LockedGalleryGrid: React.FC<LockedGalleryGridProps> = ({
  items,
  maxItems = 6
}) => {
  const [isLocked, setIsLocked] = useState<boolean>(true);
  const [isUnlocking, setIsUnlocking] = useState<boolean>(false);
  const [activeMedia, setActiveMedia] = useState<GalleryMediaItem | null>(null);
  const [shakeTrigger, setShakeTrigger] = useState<number>(0);

  const displayItems = items.slice(0, maxItems);

  const handleUnlock = () => {
    setIsUnlocking(true);

    // Fire celebratory confetti shower
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#F45A24', '#FF9861', '#FFD09B', '#FFF4E5', '#FFFFFF']
    });

    // Slight delay for lock spring animation to finish before revealing grid
    setTimeout(() => {
      setIsLocked(false);
      setIsUnlocking(false);
    }, 650);
  };

  const handleRelock = () => {
    setIsLocked(true);
  };

  const handleCardClick = (item: GalleryMediaItem) => {
    if (isLocked) {
      // Trigger a lock jiggle and attention pulse
      setShakeTrigger(prev => prev + 1);
    } else {
      setActiveMedia(item);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Interactive Vault Control Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '0.85rem 1.4rem',
          backgroundColor: isLocked ? 'rgba(43, 22, 15, 0.08)' : 'rgba(255, 208, 155, 0.2)',
          borderRadius: 'var(--radius-lg)',
          border: isLocked ? '1.5px dashed rgba(244, 90, 36, 0.4)' : '1.5px solid rgba(244, 90, 36, 0.35)',
          marginBottom: '2rem',
          transition: 'all 0.4s ease'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <motion.div
            key={isLocked ? 'locked-icon' : 'unlocked-icon'}
            initial={{ scale: 0.8, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: isLocked ? 'var(--color-sunset-orange)' : '#10B981',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: isLocked 
                ? '0 0 16px rgba(244, 90, 36, 0.5)' 
                : '0 0 16px rgba(16, 185, 129, 0.5)'
            }}
          >
            {isLocked ? <Lock size={18} /> : <Unlock size={18} />}
          </motion.div>

          <div>
            <span style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--color-sunset-dark)', display: 'block' }}>
              {isLocked ? 'Memory Vault Locked' : 'Memory Vault Unlocked'}
            </span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              {isLocked 
                ? 'Unlock to view authentic 20-year milestone photographs' 
                : `Showing ${displayItems.length} authenticated photographs. Click any photo for Lightbox.`}
            </span>
          </div>
        </div>

        {/* Lock / Unlock Toggle Action Button */}
        <div>
          {isLocked ? (
            <motion.button
              type="button"
              onClick={handleUnlock}
              disabled={isUnlocking}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary btn-sm btn-3d-glow"
              style={{
                boxShadow: '0 6px 20px rgba(244, 90, 36, 0.45)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer'
              }}
            >
              <Key size={16} />
              <span>{isUnlocking ? 'Unlocking Vault...' : 'Unlock Gallery Photos'}</span>
              <Sparkles size={14} />
            </motion.button>
          ) : (
            <button
              type="button"
              onClick={handleRelock}
              className="btn btn-outline btn-sm"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                cursor: 'pointer',
                borderColor: 'var(--color-sunset-orange)',
                color: 'var(--color-sunset-dark)',
                backgroundColor: 'rgba(255, 244, 229, 0.8)'
              }}
            >
              <Lock size={14} />
              <span>Lock Gallery</span>
            </button>
          )}
        </div>
      </div>

      {/* Photo Grid Container with Relative Locking Layer */}
      <div style={{ position: 'relative', minHeight: '400px' }}>
        {/* Responsive Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            filter: isLocked ? 'blur(10px) brightness(0.75)' : 'none',
            transition: 'filter 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: isLocked ? 'auto' : 'auto'
          }}
        >
          {displayItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={false}
              animate={!isLocked ? { opacity: 1, y: 0, scale: 1 } : { scale: 0.98 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={!isLocked ? { y: -6 } : undefined}
              style={{
                position: 'relative',
                height: '280px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-warm-card)',
                border: '1px solid var(--border-light)',
                backgroundColor: 'var(--color-sunset-dark)'
              }}
              onClick={() => handleCardClick(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCardClick(item);
                }
              }}
              aria-label={`View ${item.title}`}
            >
              <AnimatedImage
                src={item.image}
                alt={item.title}
                darkSkeleton={true}
                containerStyle={{ width: '100%', height: '100%' }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />

              {/* Hover overlay with caption & eye icon (always present once unlocked) */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(43, 22, 15, 0.1) 0%, rgba(43, 22, 15, 0.88) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.5rem',
                  color: 'var(--color-sunset-cream)'
                }}
              >
                {!isLocked && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 244, 229, 0.9)',
                      color: 'var(--color-sunset-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                    }}
                  >
                    <Eye size={18} />
                  </div>
                )}

                <span
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-golden-peach)',
                    fontWeight: 700,
                    marginBottom: '0.35rem'
                  }}
                >
                  {item.category} • {item.date}
                </span>

                <h3
                  style={{
                    color: '#FFFFFF',
                    fontSize: '1.15rem',
                    lineHeight: 1.25,
                    marginBottom: '0.35rem'
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: 'rgba(255, 244, 229, 0.85)',
                    fontSize: '0.85rem',
                    margin: 0,
                    lineHeight: 1.4,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Frosted Lock Veil (Overlaid across photos when locked) */}
        <AnimatePresence>
          {isLocked && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(16px)' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                borderRadius: 'var(--radius-xl)',
                backgroundColor: 'rgba(43, 22, 15, 0.45)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                cursor: 'pointer'
              }}
              onClick={handleUnlock}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleUnlock();
              }}
              aria-label="Unlock gallery to view photographs"
            >
              {/* Vault Emblem Center Box */}
              <motion.div
                key={shakeTrigger}
                animate={
                  shakeTrigger > 0 
                    ? { x: [-10, 10, -8, 8, -4, 4, 0], scale: [1, 1.05, 1] } 
                    : {}
                }
                transition={{ duration: 0.45 }}
                style={{
                  maxWidth: '460px',
                  width: '100%',
                  backgroundColor: 'rgba(255, 244, 229, 0.96)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'clamp(2rem, 5vw, 2.75rem)',
                  textAlign: 'center',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(244, 90, 36, 0.35)',
                  border: '2px solid rgba(244, 90, 36, 0.4)',
                  position: 'relative'
                }}
              >
                {/* Concentric Golden Halo Pulse */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(244, 90, 36, 0.25) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: -1
                  }}
                />

                {/* Padlock Icon with Shackle Spring Animation */}
                <motion.div
                  animate={
                    isUnlocking 
                      ? { rotate: [-10, 15, -20, 0], scale: [1, 1.25, 0.9] } 
                      : { y: [0, -4, 0] }
                  }
                  transition={
                    isUnlocking
                      ? { duration: 0.5 }
                      : { repeat: Infinity, duration: 2.8, ease: 'easeInOut' }
                  }
                  style={{
                    width: '74px',
                    height: '74px',
                    borderRadius: '50%',
                    margin: '0 auto 1.25rem auto',
                    background: 'linear-gradient(135deg, #F45A24 0%, #FF9861 100%)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(244, 90, 36, 0.5)',
                    border: '3px solid #FFF4E5'
                  }}
                >
                  {isUnlocking ? <Unlock size={36} /> : <Lock size={36} />}
                </motion.div>

                {/* Parisienne Cursive Eyebrow */}
                <span
                  className="font-script"
                  style={{
                    fontSize: '1.9rem',
                    color: 'var(--color-sunset-orange)',
                    display: 'block',
                    marginBottom: '0.25rem'
                  }}
                >
                  Sacred Moments of Service
                </span>

                <h3
                  style={{
                    fontSize: '1.45rem',
                    color: 'var(--color-sunset-dark)',
                    marginBottom: '0.65rem'
                  }}
                >
                  Unlock the 20-Year Archive
                </h3>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem'
                  }}
                >
                  These authentic photographs capture two decades of scholarships, community fellowship, and civic honors. Tap to reveal the full collection.
                </p>

                {/* Unlock Button */}
                <motion.button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleUnlock();
                  }}
                  disabled={isUnlocking}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="btn btn-primary btn-lg btn-3d-glow"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    boxShadow: '0 8px 25px rgba(244, 90, 36, 0.45)',
                    cursor: 'pointer'
                  }}
                >
                  <Key size={18} />
                  <span>{isUnlocking ? 'Unlocking Vault...' : 'Tap to Unlock Photos'}</span>
                  <Sparkles size={16} />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal (For viewing unlocked photos) */}
      {activeMedia && (
        <LightboxModal
          isOpen={!!activeMedia}
          onClose={() => setActiveMedia(null)}
          imageUrl={activeMedia.image}
          title={activeMedia.title}
          caption={activeMedia.caption}
          date={activeMedia.date}
        />
      )}
    </div>
  );
};
