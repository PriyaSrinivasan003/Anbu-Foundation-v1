import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';
import { BotanicalIllustration } from '../components/shared/BotanicalIllustration';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found — ANBU Foundation';
  }, []);

  return (
    <main
      style={{
        paddingTop: '8rem',
        paddingBottom: '8rem',
        backgroundColor: 'var(--bg-primary)',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          opacity: 0.25,
          pointerEvents: 'none'
        }}
      >
        <BotanicalIllustration width={260} height={260} color="#FF9861" />
      </div>

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-sunset-cream)',
            border: '2px solid var(--color-sunset-orange)',
            color: 'var(--color-sunset-orange)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto'
          }}
        >
          <Compass size={36} />
        </div>

        <span className="badge-tag" style={{ marginBottom: '1rem' }}>
          Error 404 • Lost in the Horizon
        </span>

        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: 'var(--color-sunset-dark)',
            marginBottom: '1rem'
          }}
        >
          Pathway Not Found
        </h1>

        <p
          style={{
            maxWidth: '540px',
            margin: '0 auto 2.5rem auto',
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7
          }}
        >
          The page or resource you are looking for might have been shifted, renamed, or is currently being cultivated. Let us guide you back to familiar grounds.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary btn-lg">
            <ArrowLeft size={18} />
            <span>Return to Homepage</span>
          </Link>
          <Link to="/programs" className="btn btn-secondary btn-lg">
            <span>Explore Programs</span>
          </Link>
        </div>
      </div>
    </main>
  );
};
