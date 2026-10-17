import React, { useState } from 'react';
import type { ContactFormData } from '../../types';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    category: 'General Enquiry',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const categories = [
    'General Enquiry',
    'Scholarship & Student Support',
    'Institutional & School Partnerships',
    'CSR & Academic Collaboration',
    'Media & Story Submissions'
  ];

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please share your message in at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div
        className="warm-card"
        style={{
          padding: '3rem 2rem',
          textAlign: 'center',
          backgroundColor: 'var(--color-sunset-cream)',
          border: '2px solid var(--color-sunset-orange)'
        }}
      >
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-sunset-orange)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem auto'
          }}
        >
          <CheckCircle2 size={32} />
        </div>

        <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', color: 'var(--color-sunset-dark)' }}>
          Message Received!
        </h3>

        <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 1.5rem auto' }}>
          Thank you for reaching out, {formData.fullName}. This demonstration enquiry has validated successfully on your device.
        </p>

        <div className="disclaimer-box" style={{ maxWidth: '500px', margin: '0 auto 2rem auto', textAlign: 'left' }}>
          <span style={{ fontWeight: 700, display: 'block', marginBottom: '0.2rem' }}>Demonstration Notice:</span>
          No email has been dispatched externally as backend SMTP services are currently unconfigured.
        </div>

        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              category: 'General Enquiry',
              message: ''
            });
          }}
          className="btn btn-primary"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="warm-card" style={{ padding: 'clamp(1.5rem, 4vw, 2.75rem)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="contact-name" className="form-label">
            Full Name *
          </label>
          <input
            id="contact-name"
            type="text"
            className="form-input"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g., Meera Sundaram"
          />
          {errors.fullName && <span className="form-error">{errors.fullName}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="contact-email" className="form-label">
            Email Address *
          </label>
          <input
            id="contact-email"
            type="email"
            className="form-input"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="meera@example.org"
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
        {/* Phone */}
        <div className="form-group">
          <label htmlFor="contact-phone" className="form-label">
            Phone Number (Optional)
          </label>
          <input
            id="contact-phone"
            type="tel"
            className="form-input"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 94440 00000"
          />
        </div>

        {/* Category Selector */}
        <div className="form-group">
          <label htmlFor="contact-category" className="form-label">
            Nature of Enquiry *
          </label>
          <select
            id="contact-category"
            className="form-select"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="form-group">
        <label htmlFor="contact-message" className="form-label">
          Your Message *
        </label>
        <textarea
          id="contact-message"
          rows={5}
          className="form-textarea"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please tell us how we can assist or collaborate with you..."
        />
        {errors.message && <span className="form-error">{errors.message}</span>}
      </div>

      {/* Submit Button */}
      <div style={{ marginTop: '1.5rem' }}>
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          style={{ width: '100%' }}
          disabled={isSubmitting}
          id="contact-submit-btn"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Transmitting Enquiry...</span>
            </>
          ) : (
            <>
              <Send size={18} />
              <span>Send Message</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};
