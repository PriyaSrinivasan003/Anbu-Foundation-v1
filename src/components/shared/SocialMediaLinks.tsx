import React from 'react';

export interface SocialPlatform {
  name: string;
  handle: string;
  url: string;
  brandColor: string;
  hoverGradient?: string;
  description: string;
  icon: React.ReactNode;
}

export const socialPlatforms: SocialPlatform[] = [
  {
    name: 'Instagram',
    handle: '@anbufoundation',
    url: 'https://instagram.com',
    brandColor: '#E1306C',
    hoverGradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    description: 'Daily field stories, student spotlights & photo updates',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    )
  },
  {
    name: 'Facebook',
    handle: 'anbufoundation',
    url: 'https://facebook.com',
    brandColor: '#1877F2',
    hoverGradient: 'linear-gradient(135deg, #1877F2 0%, #0C5DC7 100%)',
    description: 'Community initiatives, outreach drives & event livestreams',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  },
  {
    name: 'YouTube',
    handle: '@anbufoundation',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01MwIw30levEfQcDQAY_NvHNEpURCG-CPyUmqMWHAHw&s=10',
    brandColor: '#FF0000',
    hoverGradient: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)',
    description: 'Documentaries, student testimonials & annual celebration films',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    handle: 'anbu-foundation',
    url: 'https://linkedin.com',
    brandColor: '#0A66C2',
    hoverGradient: 'linear-gradient(135deg, #0A66C2 0%, #004182 100%)',
    description: 'CSR partnerships, institutional tie-ups & governance impact',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    )
  },
  {
    name: 'X (Twitter)',
    handle: '@anbufoundation',
    url: 'https://twitter.com',
    brandColor: '#1E1E1E',
    hoverGradient: 'linear-gradient(135deg, #2B160F 0%, #000000 100%)',
    description: 'Instant dispatches, announcements & public press updates',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  }
];

interface SocialIconRowProps {
  variant?: 'compact' | 'detailed';
  className?: string;
}

export const SocialMediaLinks: React.FC<SocialIconRowProps> = ({ variant = 'compact' }) => {
  if (variant === 'detailed') {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        {socialPlatforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-detail-card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              padding: '0.85rem 1.15rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(244, 90, 36, 0.16)',
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: '0 4px 14px rgba(43, 22, 15, 0.04)'
            }}
          >
            <div
              className="social-icon-bubble"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(244, 90, 36, 0.08)',
                color: platform.brandColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'all 0.3s ease'
              }}
            >
              {platform.icon}
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-sunset-dark)', lineHeight: 1.2 }}>
                {platform.name}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-sunset-orange)', fontWeight: 500 }}>
                {platform.handle}
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
      {socialPlatforms.map((platform) => (
        <a
          key={platform.name}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          title={`${platform.name} - ${platform.handle}`}
          aria-label={`Visit ANBU Foundation on ${platform.name}`}
          className="social-icon-btn"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid rgba(244, 90, 36, 0.22)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-sunset-dark)',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(43, 22, 15, 0.06)',
            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            position: 'relative'
          }}
        >
          {platform.icon}
        </a>
      ))}
    </div>
  );
};
