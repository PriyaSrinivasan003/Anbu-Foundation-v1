import React, { useEffect } from 'react';
import { SectionHeader } from '../components/shared/SectionHeader';
import { ShieldCheck, Lock, Eye, Database, FileCheck } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy & Data Stewardship — ANBU Foundation';
  }, []);

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)' }}>
      <section className="section-padding">
        <div className="container container-narrow">
          <SectionHeader
            badge="Privacy & Governance"
            title="Privacy Policy & Data Stewardship"
            subtitle="At ANBU Foundation, respecting the trust and personal dignity of our community members, partners, and beneficiaries is a foundational ethical priority."
          />

          <div
            className="warm-card"
            style={{
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              backgroundColor: 'var(--color-white)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem'
            }}
          >
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-muted-rose)', fontWeight: 600 }}>
                Effective Date: October 2026 • Policy Version 1.0 (Demonstration Edition)
              </span>
              <p style={{ marginTop: '1rem', lineHeight: 1.8 }}>
                This Privacy Policy describes how ANBU Foundation ("we", "our", or "the Foundation") collects, safeguards, and utilizes information submitted via our digital interfaces, community inquiry forms, and official communication channels.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <ShieldCheck size={22} color="var(--color-sunset-orange)" />
                <h3 style={{ fontSize: '1.35rem', margin: 0 }}>1. Ethical Data Stewardship</h3>
              </div>
              <p style={{ margin: 0, lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                We believe privacy is an extension of human dignity. We will never sell, rent, commercialize, or lease contact records or beneficiary identities to third-party commercial entities or marketing brokers.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Database size={22} color="var(--color-sunset-orange)" />
                <h3 style={{ fontSize: '1.35rem', margin: 0 }}>2. Information Collected</h3>
              </div>
              <p style={{ margin: 0, lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                We collect personal information solely when provided voluntarily:
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                <li><strong>Academic & School Partnerships:</strong> Institution name, coordinator contact, email address, and initiative proposals.</li>
                <li><strong>General Inquiries & Feedback:</strong> Sender contact details, message descriptions, and correspondence preferences.</li>
                <li><strong>Newsletter Subscriptions:</strong> Voluntary email address for receiving monthly dispatches.</li>
              </ul>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Lock size={22} color="var(--color-sunset-orange)" />
                <h3 style={{ fontSize: '1.35rem', margin: 0 }}>3. Digital Security & Infrastructure Protection</h3>
              </div>
              <p style={{ margin: 0, lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                All communications and data submissions are transmitted via secure HTTPS encryption. We maintain strict access controls across our internal databases and digital communication portals.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Eye size={22} color="var(--color-sunset-orange)" />
                <h3 style={{ fontSize: '1.35rem', margin: 0 }}>4. Beneficiary Rights & Dignity Protection</h3>
              </div>
              <p style={{ margin: 0, lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                We observe rigorous child-protection and vulnerable adult protocols. Photographs, names, or identifiable personal histories of beneficiaries are documented strictly with informed written consent and are never portrayed in a derogatory or sensationalized manner.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <FileCheck size={22} color="var(--color-sunset-orange)" />
                <h3 style={{ fontSize: '1.35rem', margin: 0 }}>5. Data Rights & Opt-Out</h3>
              </div>
              <p style={{ margin: 0, lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                You have the complete right at any time to inspect, modify, or permanently request deletion of your inquiry details or mailing list subscription. Simply email <strong>contact@anbufoundation.org</strong> with your request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
