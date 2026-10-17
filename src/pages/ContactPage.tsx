import React, { useEffect, useState } from 'react';
import { SectionHeader } from '../components/shared/SectionHeader';
import { ContactForm } from '../components/forms/ContactForm';
import { faqsData } from '../data/faqsData';
import { Mail, Phone, MapPin, ChevronDown, ChevronUp, ExternalLink, Share2, Sparkles } from 'lucide-react';
import { SocialMediaLinks } from '../components/shared/SocialMediaLinks';

export const ContactPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'Contact — ANBU Foundation';
  }, []);

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)' }}>
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            scriptEyebrow="Get in Touch"
            title="Let’s Converse & Collaborate"
            subtitle="Whether you have questions regarding our programs, academic initiatives, or want to explore institutional CSR alignment, our team welcomes your voice."
            showOrnament={true}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)',
              gap: '3rem',
              alignItems: 'flex-start',
              marginBottom: '5rem'
            }}
            className="contact-page-layout"
          >
            {/* Left: Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right: Placeholders & Office Hours */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="warm-card" style={{ padding: '2.25rem', backgroundColor: 'var(--color-sunset-cream)' }}>
                <span className="badge-tag" style={{ marginBottom: '1rem' }}>
                  Contact Information (Designated)
                </span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-sunset-orange)', flexShrink: 0 }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--color-sunset-dark)' }}>Email Correspondence</strong>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>contact@anbufoundation.org</span>
                      <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-muted-rose)' }}>Inquiries acknowledged within 24-48 business hours</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-sunset-orange)', flexShrink: 0 }}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--color-sunset-dark)' }}>Community Helpline</strong>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>+91 (0) 44 2800 0000 (Designated Placeholder)</span>
                      <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-muted-rose)' }}>Monday to Friday: 9:30 AM – 5:30 PM IST</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-sunset-orange)', flexShrink: 0 }}>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--color-sunset-dark)' }}>Registered Secretariat</strong>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        Sathyabama Institute of Science and Technology, Jeppiaar Nagar, Rajiv Gandhi Salai, Chennai, Tamil Nadu 600119
                      </span>
                    </div>
                  </div>

                  {/* Social Media Channels Row */}
                  <div
                    style={{
                      paddingTop: '1.25rem',
                      marginTop: '0.5rem',
                      borderTop: '1px solid rgba(244, 90, 36, 0.15)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                      <Share2 size={16} color="var(--color-sunset-orange)" />
                      <strong style={{ fontSize: '0.92rem', color: 'var(--color-sunset-dark)', letterSpacing: '0.02em' }}>
                        Follow Us on Social Media
                      </strong>
                    </div>
                    <SocialMediaLinks variant="compact" />
                    <span style={{ display: 'block', marginTop: '0.65rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Stay updated with our grassroots stories, community programs, and live announcements.
                    </span>
                  </div>
                </div>
              </div>

              {/* Sathyabama University Google Map Embed */}
              <div
                className="warm-card"
                style={{
                  padding: '1.25rem',
                  backgroundColor: 'var(--color-white)',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: '0 12px 36px rgba(43, 22, 15, 0.08)',
                  border: '1.5px solid rgba(244, 90, 36, 0.22)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={18} color="var(--color-sunset-orange)" />
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-sunset-dark)' }}>
                      Location & Campus Map
                    </span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Sathyabama+University+Chennai"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--color-sunset-orange)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                  >
                    <span>Open in Maps</span>
                    <ExternalLink size={13} />
                  </a>
                </div>

                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '280px',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: '1px solid rgba(244, 90, 36, 0.15)'
                  }}
                >
                  <iframe
                    title="ANBU Foundation Secretariat at Sathyabama University"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.542230667101!2d80.21809697585626!3d12.872816517034689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b8c90befe2b%3A0x170ab8b5b21bb530!2sSathyabama%20University!5e0!3m2!1sen!2sin!4v1791970120887!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>

                <p style={{ margin: '0.75rem 0 0 0', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  Located at Sathyabama University Campus, Rajiv Gandhi Salai (OMR), Chennai. Visitors and partners welcome during office hours.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Social Media Showcase Banner */}
          <div
            className="warm-card"
            style={{
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              boxShadow: '0 12px 36px rgba(43, 22, 15, 0.06)',
              border: '1.5px solid rgba(244, 90, 36, 0.16)',
              marginBottom: '5rem'
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-sunset-orange)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                  <Sparkles size={14} />
                  <span>Digital Community Hub</span>
                </div>
                <h3 style={{ margin: 0, fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: 'var(--color-sunset-dark)' }}>
                  Connect Across Our Official Social Channels
                </h3>
                <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  Follow along for field updates, student empowerment spotlights, and program milestones.
                </p>
              </div>
            </div>

            <SocialMediaLinks variant="detailed" />
          </div>

          {/* Frequently Asked Questions Accordion */}
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <SectionHeader
              badge="Knowledge Base"
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about our foundation, programs, and contribution ethics."
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqsData.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="warm-card"
                    style={{
                      overflow: 'hidden',
                      backgroundColor: 'var(--color-white)',
                      border: isOpen ? '1.5px solid var(--color-sunset-orange)' : '1px solid var(--border-light)'
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        padding: '1.25rem 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        gap: '1rem'
                      }}
                      aria-expanded={isOpen}
                    >
                      <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-sunset-dark)' }}>
                        {faq.question}
                      </span>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: isOpen ? 'var(--color-sunset-cream)' : '#FAFAFA',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-sunset-orange)',
                          flexShrink: 0
                        }}
                      >
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.7 }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .social-icon-btn:hover {
          transform: translateY(-3px) scale(1.06);
          background-color: var(--color-sunset-orange) !important;
          color: #FFFFFF !important;
          border-color: var(--color-sunset-orange) !important;
          box-shadow: 0 8px 22px rgba(244, 90, 36, 0.35) !important;
        }
        .social-detail-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-sunset-orange) !important;
          box-shadow: 0 10px 24px rgba(244, 90, 36, 0.14) !important;
        }
        .social-detail-card:hover .social-icon-bubble {
          background-color: var(--color-sunset-orange) !important;
          color: #FFFFFF !important;
          transform: scale(1.08);
        }
        @media (max-width: 900px) {
          .contact-page-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
};
