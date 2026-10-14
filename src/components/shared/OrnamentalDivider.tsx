import React from 'react';

interface OrnamentalDividerProps {
  className?: string;
  color?: string;
  maxWidth?: number;
}

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  className = '',
  color = 'var(--color-sunset-orange)',
  maxWidth = 360
}) => {
  return (
    <div
      className={`flex justify-center items-center py-4 ${className}`}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.8rem 0',
        width: '100%'
      }}
      role="presentation"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 32"
        style={{
          height: '24px',
          width: '100%',
          maxWidth: `${maxWidth}px`,
          color: color,
          opacity: 0.75
        }}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        {/* Dotted hairline */}
        <line x1="0" y1="16" x2="400" y2="16" strokeDasharray="2 8" />

        {/* Outer and inner diamond ornaments */}
        <g transform="translate(40 16)">
          <rect x="-5" y="-5" width="10" height="10" transform="rotate(45 0 0)" />
          <circle r="1.5" fill="currentColor" stroke="none" />
        </g>
        <g transform="translate(100 16)">
          <rect x="-5" y="-5" width="10" height="10" transform="rotate(45 0 0)" />
          <circle r="1.5" fill="currentColor" stroke="none" />
        </g>
        <g transform="translate(155 16)">
          <rect x="-6" y="-6" width="12" height="12" transform="rotate(45 0 0)" />
          <circle r="2" fill="currentColor" stroke="none" />
        </g>

        {/* Center Grand Diamond Motif */}
        <g transform="translate(200 16)">
          <rect x="-9" y="-9" width="18" height="18" transform="rotate(45 0 0)" strokeWidth="1.2" />
          <circle r="3" fill="currentColor" stroke="none" />
        </g>

        <g transform="translate(245 16)">
          <rect x="-6" y="-6" width="12" height="12" transform="rotate(45 0 0)" />
          <circle r="2" fill="currentColor" stroke="none" />
        </g>
        <g transform="translate(300 16)">
          <rect x="-5" y="-5" width="10" height="10" transform="rotate(45 0 0)" />
          <circle r="1.5" fill="currentColor" stroke="none" />
        </g>
        <g transform="translate(360 16)">
          <rect x="-5" y="-5" width="10" height="10" transform="rotate(45 0 0)" />
          <circle r="1.5" fill="currentColor" stroke="none" />
        </g>
      </svg>
    </div>
  );
};
