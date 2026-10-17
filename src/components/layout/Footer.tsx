import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle2, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { SocialMediaLinks } from '../shared/SocialMediaLinks';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-sunset-dark)',
        color: 'var(--color-sunset-cream)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '3px solid var(--color-sunset-orange)'
      }}
    >
      {/* Subtle background glow effect */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          right: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244, 90, 36, 0.15) 0%, rgba(43, 22, 15, 0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ paddingTop: '5rem', paddingBottom: '3.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Column 1: Brand & Compassion statement */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <div 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  backgroundColor: '#FFFFFF', 
                  padding: '0.55rem 1.15rem', 
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)'
                }}
              >
                <img
                  src="/images/logo.png"
                  alt="ANBU Foundation"
                  style={{ height: '58px', width: 'auto', objectFit: 'contain' }}
                />
              </div>
            </div>

            <p style={{ color: 'rgba(255, 244, 229, 0.78)', fontSize: '0.98rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Rooted in the eternal spirit of unconditional love. We unite communities to bring dignity, education, health support, and green renewal to every doorstep.
            </p>

            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-golden-peach)', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Connect With Us
              </div>
              <SocialMediaLinks variant="compact" />
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-golden-peach)',
                marginBottom: '1.4rem'
              }}
            >
              Explore Foundation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link to="/" style={{ color: 'rgba(255, 244, 229, 0.82)', transition: 'color 0.2s' }}>
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/our-story" style={{ color: 'rgba(255, 244, 229, 0.82)', transition: 'color 0.2s' }}>
                  Our Story & Values
                </Link>
              </li>
              <li>
                <Link to="/programs" style={{ color: 'rgba(255, 244, 229, 0.82)', transition: 'color 0.2s' }}>
                  Community Programs
                </Link>
              </li>
              <li>
                <Link to="/impact" style={{ color: 'rgba(255, 244, 229, 0.82)', transition: 'color 0.2s' }}>
                  Success Stories & Impact
                </Link>
              </li>
              <li>
                <Link to="/stories" style={{ color: 'rgba(255, 244, 229, 0.82)', transition: 'color 0.2s' }}>
                  Stories & Community Media
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" style={{ color: 'rgba(255, 244, 229, 0.82)', transition: 'color 0.2s' }}>
                  Privacy & Data Stewardship
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-golden-peach)',
                marginBottom: '1.4rem'
              }}
            >
              Get Involved
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link to="/volunteer" style={{ color: 'rgba(255, 244, 229, 0.82)' }}>
                  Volunteer Registration
                </Link>
              </li>
              <li>
                <Link to="/get-involved" style={{ color: 'rgba(255, 244, 229, 0.82)' }}>
                  Partnership Opportunities
                </Link>
              </li>
              <li>
                <Link to="/donate" style={{ color: 'rgba(255, 244, 229, 0.82)' }}>
                  Make a Contribution
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'rgba(255, 244, 229, 0.82)' }}>
                  Contact Information & FAQ
                </Link>
              </li>
            </ul>

            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255, 244, 229, 0.75)', fontSize: '0.9rem' }}>
                <Mail size={16} color="var(--color-warm-coral)" />
                <span>contact@anbufoundation.org</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255, 244, 229, 0.75)', fontSize: '0.9rem' }}>
                <MapPin size={16} color="var(--color-warm-coral)" />
                <span>Regional Community Chapters (Designated)</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter & Community Bulletin */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-golden-peach)',
                marginBottom: '1.4rem'
              }}
            >
              Community Dispatches
            </h4>
            <p style={{ color: 'rgba(255, 244, 229, 0.75)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
              Receive monthly dispatches on grassroots stories, upcoming volunteer drives, and progress milestones.
            </p>

            {subscribed ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.85rem 1rem',
                  backgroundColor: 'rgba(255, 208, 155, 0.15)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-warm-coral)',
                  color: 'var(--color-golden-peach)',
                  fontSize: '0.9rem'
                }}
              >
                <CheckCircle2 size={18} />
                <span>Thank you for subscribing to our community circle!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    aria-label="Email for community updates"
                    style={{
                      flex: 1,
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid rgba(255, 208, 155, 0.3)',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      color: 'var(--color-white)',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ padding: '0.75rem 1.15rem' }}
                    aria-label="Subscribe"
                  >
                    <Send size={16} />
                  </button>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255, 244, 229, 0.6)' }}>
                  No spam. We respect your peace and privacy.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Legal & Transparent Disclaimer Note */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(255, 208, 155, 0.12)',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.85rem'
          }}
        >
          <ShieldCheck size={22} color="var(--color-warm-coral)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ color: 'rgba(255, 244, 229, 0.72)', fontSize: '0.84rem', margin: 0, lineHeight: 1.6 }}>
            <strong>Commitment to Integrity:</strong> ANBU Foundation operates under the highest ethical standards. All program categories, beneficiary indicators, and statistical projections showcased during this development phase are carefully labeled demonstration models. Official registration certificates and audited tax statements will be published upon verified regulatory sanction.
          </p>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            paddingTop: '1.75rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            fontSize: '0.88rem',
            color: 'rgba(255, 244, 229, 0.6)'
          }}
        >
          <div>
            © {new Date().getFullYear()} ANBU Foundation. Dedicated to compassion, support, and hope.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/privacy-policy" style={{ color: 'rgba(255, 244, 229, 0.75)' }}>
              Privacy Policy
            </Link>
            <Link to="/contact" style={{ color: 'rgba(255, 244, 229, 0.75)' }}>
              Support & Transparency
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
