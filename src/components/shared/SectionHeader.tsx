import React from 'react';
import { AnimatedReveal } from './AnimatedReveal';
import { AnimatedTextLetters } from './AnimatedTextLetters';
import { OrnamentalDivider } from './OrnamentalDivider';

interface SectionHeaderProps {
  badge?: string;
  scriptEyebrow?: string;
  badgeStyle?: 'orange' | 'peach' | 'dark';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  darkTheme?: boolean;
  showOrnament?: boolean;
  animatedLetters?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  scriptEyebrow,
  badgeStyle = 'orange',
  title,
  subtitle,
  align = 'center',
  darkTheme = false,
  showOrnament = false,
  animatedLetters = true,
  className = ''
}) => {
  const badgeClass = 
    badgeStyle === 'peach' ? 'badge-tag badge-tag-peach' :
    badgeStyle === 'dark' ? 'badge-tag badge-tag-dark' :
    'badge-tag';

  return (
    <div 
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}
      style={{
        marginLeft: align === 'center' ? 'auto' : undefined,
        marginRight: align === 'center' ? 'auto' : undefined,
        textAlign: align === 'center' ? 'center' : 'left',
        marginBottom: '2.8rem'
      }}
    >
      {/* Script Eyebrow (BNR Parisienne font style) */}
      {scriptEyebrow && (
        <AnimatedReveal delay={0.05} yOffset={10}>
          <div style={{ marginBottom: '0.4rem' }}>
            <span
              className="font-script"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                color: darkTheme ? 'var(--color-warm-coral)' : 'var(--color-sunset-orange)',
                display: 'block',
                lineHeight: 1.2
              }}
            >
              {scriptEyebrow}
            </span>
          </div>
        </AnimatedReveal>
      )}

      {/* Pill Badge */}
      {badge && !scriptEyebrow && (
        <AnimatedReveal delay={0.05} yOffset={14}>
          <div style={{ marginBottom: '1rem' }}>
            <span className={badgeClass}>{badge}</span>
          </div>
        </AnimatedReveal>
      )}

      {/* Title with letter animation or standard reveal */}
      {animatedLetters ? (
        <AnimatedTextLetters
          as="h2"
          text={title}
          style={{
            color: darkTheme ? 'var(--color-sunset-cream)' : 'var(--text-primary)',
            marginBottom: subtitle ? '1rem' : '0'
          }}
        />
      ) : (
        <AnimatedReveal delay={0.15} yOffset={20}>
          <h2 
            style={{ 
              color: darkTheme ? 'var(--color-sunset-cream)' : 'var(--text-primary)',
              marginBottom: subtitle ? '1rem' : '0'
            }}
          >
            {title}
          </h2>
        </AnimatedReveal>
      )}

      {/* Subtitle */}
      {subtitle && (
        <AnimatedReveal delay={0.25} yOffset={20}>
          <p 
            style={{ 
              color: darkTheme ? 'rgba(255, 244, 229, 0.85)' : 'var(--text-secondary)',
              fontSize: '1.12rem',
              maxWidth: '680px',
              margin: align === 'center' ? '0 auto' : '0',
              marginTop: '0.5rem'
            }}
          >
            {subtitle}
          </p>
        </AnimatedReveal>
      )}

      {/* Ornamental Diamond Hairline Divider (BNR style) */}
      {showOrnament && (
        <AnimatedReveal delay={0.35} yOffset={10}>
          <OrnamentalDivider
            color={darkTheme ? 'var(--color-golden-peach)' : 'var(--color-sunset-orange)'}
            maxWidth={280}
          />
        </AnimatedReveal>
      )}
    </div>
  );
};
