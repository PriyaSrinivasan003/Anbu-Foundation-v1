import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  caption?: string;
  date?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  caption,
  date
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            backgroundColor: 'rgba(23, 11, 7, 0.88)',
            backdropFilter: 'blur(8px)'
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '100%',
              backgroundColor: 'var(--color-sunset-dark)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.65)',
              border: '1px solid rgba(255, 208, 155, 0.2)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close preview"
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                zIndex: 10,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(43, 22, 15, 0.75)',
                color: 'var(--color-sunset-cream)',
                border: '1px solid rgba(255, 244, 229, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
            >
              <X size={20} />
            </button>

            {/* Media Image */}
            <div style={{ maxHeight: '65vh', overflow: 'hidden', backgroundColor: '#000' }}>
              <img
                src={imageUrl}
                alt={title}
                style={{
                  width: '100%',
                  maxHeight: '65vh',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>

            {/* Caption bar */}
            <div style={{ padding: '1.5rem', color: 'var(--color-sunset-cream)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
                <h3 style={{ color: 'var(--color-sunset-cream)', fontSize: '1.25rem' }}>{title}</h3>
                {date && <span style={{ fontSize: '0.85rem', color: 'var(--color-golden-peach)' }}>{date}</span>}
              </div>
              {caption && (
                <p style={{ color: 'rgba(255, 244, 229, 0.8)', fontSize: '0.95rem', margin: 0 }}>
                  {caption}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
