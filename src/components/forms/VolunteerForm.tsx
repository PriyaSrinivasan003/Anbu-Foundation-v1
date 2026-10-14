import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import type { VolunteerFormData } from '../../types';
import { CheckCircle2, Loader2, Heart, Sparkles } from 'lucide-react';

export const VolunteerForm: React.FC = () => {
  const [formData, setFormData] = useState<VolunteerFormData>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    interests: [],
    availability: 'weekends',
    skills: '',
    consent: false
  });

  const [errors, setErrors] = useState<Partial<Record<keyof VolunteerFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const interestOptions = [
    'Youth Tutoring & Literacy',
    'Elderly Wellness & Companionship',
    'Tree Plantation & Green Spaces',
    'Emergency Relief Hampers',
    'Creative Storytelling & Photography',
    'Event Coordination & Logistics'
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => {
      const exists = prev.interests.includes(interest);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter(i => i !== interest)
          : [...prev.interests, interest]
      };
    });
    if (errors.interests) {
      setErrors(prev => ({ ...prev, interests: undefined }));
    }
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof VolunteerFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact number is required';
    }
    if (!formData.location.trim()) {
      errs.location = 'Please state your city or district';
    }
    if (formData.interests.length === 0) {
      errs.interests = 'Please select at least one area of interest';
    }
    if (!formData.consent) {
      errs.consent = 'You must agree to the volunteer code and privacy terms';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate async submission flow
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F45A24', '#FF9861', '#FFD09B', '#2B160F']
        });
      } catch {
        // Fallback gracefully
      }
    }, 1200);
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
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-sunset-orange)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto'
          }}
        >
          <CheckCircle2 size={36} />
        </div>

        <h3 style={{ fontSize: '1.85rem', marginBottom: '1rem', color: 'var(--color-sunset-dark)' }}>
          Welcome to the ANBU Circle, {formData.fullName}!
        </h3>

        <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 1.5rem auto' }}>
          This demonstration registration has been received successfully on your device. When our volunteer management backend is connected, our volunteer coordination coordinator will reach out with upcoming orientation details.
        </p>

        <div className="disclaimer-box" style={{ maxWidth: '580px', margin: '0 auto 2rem auto', textAlign: 'left' }}>
          <span style={{ fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
            Demonstration Mode Notice:
          </span>
          Your submitted information has not been transmitted to external servers. No personal data has been permanently saved.
        </div>

        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              location: '',
              interests: [],
              availability: 'weekends',
              skills: '',
              consent: false
            });
          }}
          className="btn btn-primary"
        >
          Submit Another Registration
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="warm-card" style={{ padding: 'clamp(1.5rem, 4vw, 2.75rem)' }}>
      {/* Notice */}
      <div className="disclaimer-box" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
          <Sparkles size={16} color="var(--color-sunset-orange)" />
          <strong style={{ color: 'var(--color-sunset-dark)' }}>Demonstration Application Portal:</strong>
        </div>
        Feel free to test this registration form. All fields will validate accurately on your device.
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="volunteer-name" className="form-label">
            Full Name *
          </label>
          <input
            id="volunteer-name"
            type="text"
            className="form-input"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g., Ananya Raman"
            aria-required="true"
            aria-invalid={!!errors.fullName}
          />
          {errors.fullName && <span className="form-error">{errors.fullName}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="volunteer-email" className="form-label">
            Email Address *
          </label>
          <input
            id="volunteer-email"
            type="email"
            className="form-input"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="ananya@example.org"
            aria-required="true"
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="volunteer-phone" className="form-label">
            Contact Number *
          </label>
          <input
            id="volunteer-phone"
            type="tel"
            className="form-input"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            aria-required="true"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <span className="form-error">{errors.phone}</span>}
        </div>

        {/* Location */}
        <div className="form-group">
          <label htmlFor="volunteer-location" className="form-label">
            City / Neighborhood *
          </label>
          <input
            id="volunteer-location"
            type="text"
            className="form-input"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="e.g., Chennai, Tamil Nadu"
            aria-required="true"
            aria-invalid={!!errors.location}
          />
          {errors.location && <span className="form-error">{errors.location}</span>}
        </div>
      </div>

      {/* Areas of Interest Checkboxes */}
      <div className="form-group" style={{ marginTop: '0.75rem' }}>
        <span className="form-label" style={{ display: 'block', marginBottom: '0.65rem' }}>
          Areas of Interest *
        </span>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '0.75rem'
          }}
        >
          {interestOptions.map((opt) => {
            const isChecked = formData.interests.includes(opt);
            return (
              <label
                key={opt}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: isChecked ? 'var(--color-sunset-cream)' : '#FAFAFA',
                  border: isChecked ? '1.5px solid var(--color-sunset-orange)' : '1px solid var(--border-medium)',
                  cursor: 'pointer',
                  fontSize: '0.92rem',
                  color: 'var(--text-primary)',
                  transition: 'all 0.15s ease'
                }}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleInterestToggle(opt)}
                  style={{ accentColor: 'var(--color-sunset-orange)', width: '17px', height: '17px' }}
                />
                <span>{opt}</span>
              </label>
            );
          })}
        </div>
        {errors.interests && <span className="form-error" style={{ marginTop: '0.4rem' }}>{errors.interests}</span>}
      </div>

      {/* Availability Selector */}
      <div className="form-group" style={{ marginTop: '0.75rem' }}>
        <label htmlFor="volunteer-availability" className="form-label">
          Availability Preference
        </label>
        <select
          id="volunteer-availability"
          className="form-select"
          value={formData.availability}
          onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
        >
          <option value="weekends">Weekends only (Saturday / Sunday mornings)</option>
          <option value="weekdays">Weekday afternoons</option>
          <option value="flexible">Flexible / On-call for specific campaigns</option>
          <option value="remote">Remote contributions (Mentoring / Digital skills)</option>
        </select>
      </div>

      {/* Skills & Experience */}
      <div className="form-group">
        <label htmlFor="volunteer-skills" className="form-label">
          Skills, Interests & Prior Experience (Optional)
        </label>
        <textarea
          id="volunteer-skills"
          rows={3}
          className="form-textarea"
          value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          placeholder="Tell us a little about your background, languages spoken, or what inspires you to serve..."
        />
      </div>

      {/* Consent Checkbox */}
      <div className="form-group" style={{ marginTop: '0.5rem' }}>
        <label
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
            cursor: 'pointer',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)'
          }}
        >
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => {
              setFormData({ ...formData, consent: e.target.checked });
              if (errors.consent) setErrors({ ...errors, consent: undefined });
            }}
            style={{
              accentColor: 'var(--color-sunset-orange)',
              width: '18px',
              height: '18px',
              marginTop: '2px'
            }}
          />
          <span>
            I agree to receive communications regarding volunteer opportunities and confirm that I will respect ANBU Foundation’s community safety and compassion values.
          </span>
        </label>
        {errors.consent && <span className="form-error">{errors.consent}</span>}
      </div>

      {/* Submit Button */}
      <div style={{ marginTop: '2rem' }}>
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          style={{ width: '100%' }}
          disabled={isSubmitting}
          id="volunteer-submit-btn"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              <span>Submitting Volunteer Registration...</span>
            </>
          ) : (
            <>
              <Heart size={20} fill="#FFFFFF" />
              <span>Complete Volunteer Registration</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};
