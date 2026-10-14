import React from 'react';

interface RippleHeroProps {
  className?: string;
}

export const RippleHero: React.FC<RippleHeroProps> = ({ className = '' }) => {
  return (
    <div 
      className={`pointer-events-none absolute inset-0 overflow-hidden flex items-center justify-center ${className}`}
      aria-hidden="true"
      style={{ zIndex: 1 }}
    >
      <div 
        className="ripple-circle"
        style={{
          width: '540px',
          height: '540px',
          top: '42%',
          left: '68%',
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div 
        className="ripple-circle"
        style={{
          width: '760px',
          height: '760px',
          top: '42%',
          left: '68%',
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div 
        className="ripple-circle"
        style={{
          width: '980px',
          height: '980px',
          top: '42%',
          left: '68%',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
  );
};
