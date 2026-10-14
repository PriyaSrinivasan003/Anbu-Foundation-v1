import React, { useEffect } from 'react';
import { SectionHeader } from '../components/shared/SectionHeader';
import { VolunteerForm } from '../components/forms/VolunteerForm';
import { faqsData } from '../data/faqsData';
import { CheckCircle2, Sparkles, HelpCircle } from 'lucide-react';

export const VolunteerPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Volunteer Registration — ANBU Foundation';
  }, []);

  const volunteerFaqs = faqsData.filter(f => f.category === 'Volunteering' || f.category === 'General');

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)' }}>
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            scriptEyebrow="Volunteer With Us"
            title="Step Into the Warmth of Service"
            subtitle="Become an active thread in our mutual-aid tapestry. Fill in your details below to register your demonstration volunteer interest."
            showOrnament={true}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
              gap: '3rem',
              alignItems: 'flex-start'
            }}
            className="volunteer-page-layout"
          >
            {/* Left: Volunteer Form */}
            <div>
              <VolunteerForm />
            </div>

            {/* Right: What to Expect & Guidelines */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="warm-card" style={{ padding: '2rem', backgroundColor: 'var(--color-sunset-cream)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                  <Sparkles size={22} color="var(--color-sunset-orange)" />
                  <h3 style={{ fontSize: '1.35rem', margin: 0, color: 'var(--color-sunset-dark)' }}>
                    What You Gain as a Volunteer
                  </h3>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', margin: 0, padding: 0 }}>
                  {[
                    'Orientation and child-safe / elder-care mentorship training',
                    'A deeply compassionate community of fellow changemakers',
                    'Flexible participation hours tailored to weekend schedules',
                    'Verified demonstration volunteer hours certificate upon completion'
                  ].map((benefit, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={18} color="var(--color-sunset-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs accordion / card */}
              <div className="warm-card" style={{ padding: '2rem', backgroundColor: 'var(--bg-surface)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                  <HelpCircle size={22} color="var(--color-sunset-orange)" />
                  <h3 style={{ fontSize: '1.35rem', margin: 0, color: 'var(--color-sunset-dark)' }}>
                    Common Questions
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {volunteerFaqs.map((faq, i) => (
                    <div key={i} style={{ borderBottom: i < volunteerFaqs.length - 1 ? '1px solid var(--border-light)' : 'none', paddingBottom: '1rem' }}>
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
          .volunteer-page-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
};
