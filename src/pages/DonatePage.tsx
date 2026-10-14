import React, { useEffect } from 'react';
import { SectionHeader } from '../components/shared/SectionHeader';
import { DonationForm } from '../components/forms/DonationForm';
import { faqsData } from '../data/faqsData';
import { Lock, Award, CheckCircle2, HelpCircle } from 'lucide-react';

export const DonatePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Donate — ANBU Foundation';
  }, []);

  const donationFaqs = faqsData.filter(f => f.category === 'Donations' || f.category === 'Transparency');

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)' }}>
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            scriptEyebrow="Compassionate Giving"
            title="Sponsor Hope, Dignity & Community Resilience"
            subtitle="Your contributions empower direct grassroots programs: providing children with illustrated learning kits, enabling elder health checkups, and nurturing community green spaces."
            showOrnament={true}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
              gap: '3rem',
              alignItems: 'flex-start'
            }}
            className="donation-page-layout"
          >
            {/* Left: Donation Checkout Flow */}
            <div>
              <DonationForm />
            </div>

            {/* Right: Stewardship Commitments, Security & FAQ */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Financial Stewardship Card */}
              <div className="dark-card" style={{ padding: '2.25rem', backgroundColor: 'var(--color-sunset-dark)', color: 'var(--color-sunset-cream)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                  <Award size={24} color="var(--color-golden-peach)" />
                  <h3 style={{ fontSize: '1.35rem', margin: 0, color: 'var(--color-sunset-cream)' }}>
                    Our Stewardship Pledge
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} color="var(--color-warm-coral)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'rgba(255, 244, 229, 0.82)', lineHeight: 1.5 }}>
                      <strong>Direct Program Focus:</strong> We aim for a 94%+ operational allocation benchmark, maximizing direct field impact.
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} color="var(--color-warm-coral)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'rgba(255, 244, 229, 0.82)', lineHeight: 1.5 }}>
                      <strong>Audited Disclosures:</strong> Verified annual receipts and independent financial audits will be published openly.
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} color="var(--color-warm-coral)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'rgba(255, 244, 229, 0.82)', lineHeight: 1.5 }}>
                      <strong>Zero Hidden Fees:</strong> Complete transparency on gateway fees and transaction processing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Security & Modular Architecture Notice */}
              <div className="warm-card" style={{ padding: '2rem', backgroundColor: 'var(--color-sunset-cream)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                  <Lock size={20} color="var(--color-sunset-orange)" />
                  <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--color-sunset-dark)' }}>
                    Payment Security & Compliance
                  </h3>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  This interface illustrates our production checkout architecture. Upon live backend deployment, payments are processed exclusively through PCI-DSS Level 1 certified gateways with end-to-end 256-bit encryption. No payment tokens or card data are stored on our servers.
                </p>
              </div>

              {/* Donation FAQs */}
              <div className="warm-card" style={{ padding: '2rem', backgroundColor: 'var(--bg-surface)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                  <HelpCircle size={22} color="var(--color-sunset-orange)" />
                  <h3 style={{ fontSize: '1.35rem', margin: 0, color: 'var(--color-sunset-dark)' }}>
                    Donation FAQs
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {donationFaqs.map((faq, i) => (
                    <div key={i} style={{ borderBottom: i < donationFaqs.length - 1 ? '1px solid var(--border-light)' : 'none', paddingBottom: '1rem' }}>
                      <h4 style={{ fontSize: '1rem', marginBottom: '0.4rem', color: 'var(--color-sunset-dark)' }}>
                        {faq.question}
                      </h4>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .donation-page-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
};
