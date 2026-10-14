import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Lock, Loader2, Sparkles } from 'lucide-react';

export const DonationForm: React.FC = () => {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('monthly');
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(50);
  const [customAmount, setCustomAmount] = useState('');
  
  const [formData, setFormData] = useState<{
    donorName: string;
    donorEmail: string;
    donorPhone: string;
    isAnonymous: boolean;
    consent: boolean;
    message: string;
  }>({
    donorName: '',
    donorEmail: '',
    donorPhone: '',
    isAnonymous: false,
    consent: true,
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const predefinedAmounts = [25, 50, 100, 250, 500];

  const actualAmount = selectedAmount === 'custom' 
    ? parseFloat(customAmount) || 0 
    : selectedAmount;

  const getImpactDescription = (amt: number) => {
    if (amt <= 25) return 'Funds 1 student learning kit with illustrated storybooks & stationery.';
    if (amt <= 50) return 'Provides doorstep wellness screening & vital monitoring for 2 elderly citizens.';
    if (amt <= 100) return 'Supports 10 native saplings with organic soil conditioning and community tree-guards.';
    if (amt <= 250) return 'Sponsors a community reading circle pod for one full calendar month.';
    return 'Powers comprehensive multi-sector community care and emergency relief packs.';
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (selectedAmount === 'custom') {
      const num = parseFloat(customAmount);
      if (!num || num < 5) {
        errs.amount = 'Please enter a valid amount of at least $5';
      }
    }

    if (!formData.isAnonymous && !formData.donorName.trim()) {
      errs.donorName = 'Donor name is required for tax deduction receipts';
    }

    if (!formData.donorEmail.trim()) {
      errs.donorEmail = 'Email address is required for donation receipt';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.donorEmail)) {
      errs.donorEmail = 'Please provide a valid email address';
    }

    if (!formData.consent) {
      errs.consent = 'Please confirm consent to proceed';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsProcessing(true);

    // Simulate payment gateway handoff / demonstration verification
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#F45A24', '#FF9861', '#FFD09B', '#FFFFFF']
        });
      } catch {
        // Fallback
      }
    }, 1400);
  };

  if (isSuccess) {
    return (
      <div
        className="warm-card"
        style={{
          padding: '3.5rem 2rem',
          textAlign: 'center',
          backgroundColor: 'var(--color-sunset-cream)',
          border: '2px solid var(--color-sunset-orange)'
        }}
      >
        <div
          style={{
            width: '68px',
            height: '68px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-sunset-orange)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto'
          }}
        >
          <Heart size={36} fill="#FFFFFF" />
        </div>

        <h3 style={{ fontSize: '2rem', marginBottom: '0.75rem', color: 'var(--color-sunset-dark)' }}>
          Thank You for Your Generous Heart!
        </h3>

        <p style={{ color: 'var(--color-sunset-orange)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>
          Demonstration Pledge: ${actualAmount} ({frequency})
        </p>

        <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 1.5rem auto' }}>
          Your simulated donation has been recorded in this session. In production, this step invokes a secure PCI-DSS compliant checkout session (e.g., Razorpay / Stripe) verified server-side with cryptographic signature webhooks.
        </p>

        <div className="disclaimer-box" style={{ maxWidth: '580px', margin: '0 auto 2.5rem auto', textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <Lock size={16} color="var(--color-sunset-orange)" />
            <strong style={{ color: 'var(--color-sunset-dark)' }}>Security & Gateway Integration Notice:</strong>
          </div>
          No real financial transaction took place, and no credit card numbers or private credentials were asked or recorded.
        </div>

        <button
          onClick={() => {
            setIsSuccess(false);
            setCustomAmount('');
            setSelectedAmount(50);
          }}
          className="btn btn-primary"
        >
          Simulate Another Gift
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSimulatePayment} noValidate className="warm-card" style={{ padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
      {/* Frequency Toggle */}
      <div style={{ marginBottom: '2rem' }}>
        <label className="form-label" style={{ marginBottom: '0.65rem', display: 'block' }}>
          Donation Frequency
        </label>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.75rem',
            backgroundColor: 'var(--color-sunset-cream)',
            padding: '0.4rem',
            borderRadius: 'var(--radius-full)'
          }}
        >
          <button
            type="button"
            onClick={() => setFrequency('monthly')}
            style={{
              padding: '0.75rem',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.95rem',
              backgroundColor: frequency === 'monthly' ? 'var(--color-sunset-orange)' : 'transparent',
              color: frequency === 'monthly' ? '#FFFFFF' : 'var(--color-sunset-dark)',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem'
            }}
          >
            <Sparkles size={16} />
            <span>Monthly Impact (Recommended)</span>
          </button>

          <button
            type="button"
            onClick={() => setFrequency('one-time')}
            style={{
              padding: '0.75rem',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.95rem',
              backgroundColor: frequency === 'one-time' ? 'var(--color-sunset-orange)' : 'transparent',
              color: frequency === 'one-time' ? '#FFFFFF' : 'var(--color-sunset-dark)',
              transition: 'all 0.2s ease'
            }}
          >
            One-Time Gift
          </button>
        </div>
      </div>

      {/* Predefined Amounts */}
      <div style={{ marginBottom: '1.75rem' }}>
        <label className="form-label" style={{ marginBottom: '0.65rem', display: 'block' }}>
          Choose Contribution Amount (USD)
        </label>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
            gap: '0.75rem',
            marginBottom: '1rem'
          }}
        >
          {predefinedAmounts.map((amt) => {
            const isSelected = selectedAmount === amt;
            return (
              <button
                key={amt}
                type="button"
                onClick={() => setSelectedAmount(amt)}
                style={{
                  padding: '1rem 0.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: isSelected ? '2px solid var(--color-sunset-orange)' : '1.5px solid var(--border-medium)',
                  backgroundColor: isSelected ? 'var(--color-sunset-cream)' : '#FFFFFF',
                  color: isSelected ? 'var(--color-sunset-orange)' : 'var(--text-primary)',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-serif)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isSelected ? '0 4px 12px rgba(244, 90, 36, 0.2)' : 'none'
                }}
              >
                ${amt}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => setSelectedAmount('custom')}
            style={{
              padding: '1rem 0.5rem',
              borderRadius: 'var(--radius-md)',
              border: selectedAmount === 'custom' ? '2px solid var(--color-sunset-orange)' : '1.5px solid var(--border-medium)',
              backgroundColor: selectedAmount === 'custom' ? 'var(--color-sunset-cream)' : '#FFFFFF',
              color: selectedAmount === 'custom' ? 'var(--color-sunset-orange)' : 'var(--text-primary)',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            Custom
          </button>
        </div>

        {/* Custom Amount Input if Selected */}
        {selectedAmount === 'custom' && (
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <div style={{ position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: '1.2rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  color: 'var(--text-secondary)'
                }}
              >
                $
              </span>
              <input
                type="number"
                min="5"
                step="5"
                className="form-input"
                style={{ paddingLeft: '2.5rem', fontSize: '1.2rem', fontWeight: 700 }}
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Enter custom donation amount"
              />
            </div>
            {errors.amount && <span className="form-error">{errors.amount}</span>}
          </div>
        )}

        {/* Dynamic Impact Estimation Note */}
        {actualAmount > 0 && (
          <div
            style={{
              padding: '0.85rem 1.25rem',
              backgroundColor: 'rgba(255, 208, 155, 0.2)',
              borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid var(--color-sunset-orange)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              fontSize: '0.92rem',
              color: 'var(--color-sunset-dark)'
            }}
          >
            <Sparkles size={16} color="var(--color-sunset-orange)" style={{ flexShrink: 0 }} />
            <span>
              <strong>Your Impact:</strong> {getImpactDescription(actualAmount)}
            </span>
          </div>
        )}
      </div>

      {/* Donor Information */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
        <div className="form-group">
          <label htmlFor="donor-name" className="form-label">
            Your Full Name *
          </label>
          <input
            id="donor-name"
            type="text"
            className="form-input"
            value={formData.donorName}
            onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
            placeholder="e.g., Rajesh Krishnan"
            disabled={formData.isAnonymous}
          />
          {errors.donorName && <span className="form-error">{errors.donorName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="donor-email" className="form-label">
            Email for Tax Receipt *
          </label>
          <input
            id="donor-email"
            type="email"
            className="form-input"
            value={formData.donorEmail}
            onChange={(e) => setFormData({ ...formData, donorEmail: e.target.value })}
            placeholder="rajesh@example.com"
          />
          {errors.donorEmail && <span className="form-error">{errors.donorEmail}</span>}
        </div>
      </div>

      {/* Anonymous Checkbox */}
      <div className="form-group">
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            cursor: 'pointer',
            fontSize: '0.92rem',
            color: 'var(--text-secondary)'
          }}
        >
          <input
            type="checkbox"
            checked={formData.isAnonymous}
            onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
            style={{ accentColor: 'var(--color-sunset-orange)', width: '18px', height: '18px' }}
          />
          <span>Make my donation anonymous on public community recognitions</span>
        </label>
      </div>

      {/* Optional Heartfelt Message */}
      <div className="form-group">
        <label htmlFor="donor-message" className="form-label">
          Leave a Word of Encouragement (Optional)
        </label>
        <textarea
          id="donor-message"
          rows={2}
          className="form-textarea"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Words of hope for the children, elders, or volunteer team..."
        />
      </div>

      {/* Security & Backend Clarification */}
      <div
        style={{
          padding: '1rem',
          backgroundColor: '#FAFAFA',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-medium)',
          marginBottom: '1.75rem',
          display: 'flex',
          gap: '0.75rem',
          alignItems: 'flex-start'
        }}
      >
        <Lock size={18} color="var(--color-sunset-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
        <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          <strong>Modular Architecture:</strong> In production, payment processing connects to certified payment processors (Stripe / Razorpay). Payment tokens and signatures are verified via backend webhooks to guarantee zero client-side credential exposure.
        </p>
      </div>

      {/* Consent Checkbox */}
      <div className="form-group">
        <label
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.65rem',
            cursor: 'pointer',
            fontSize: '0.88rem',
            color: 'var(--text-secondary)'
          }}
        >
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            style={{ accentColor: 'var(--color-sunset-orange)', width: '18px', height: '18px', marginTop: '2px' }}
          />
          <span>
            I understand this is currently a demonstration checkout preview. No actual monetary charges will be billed to any payment method.
          </span>
        </label>
        {errors.consent && <span className="form-error">{errors.consent}</span>}
      </div>

      {/* Action Button */}
      <div style={{ marginTop: '1.75rem' }}>
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          style={{ width: '100%' }}
          disabled={isProcessing}
          id="donate-submit-btn"
        >
          {isProcessing ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              <span>Verifying Demonstration Contribution...</span>
            </>
          ) : (
            <>
              <Heart size={20} fill="#FFFFFF" />
              <span>
                Simulate Gift of ${actualAmount || 0} ({frequency === 'monthly' ? 'Monthly' : 'One-Time'})
              </span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};
