import React, { useState } from 'react';
import { Check, Zap, Sparkles, Shield, Crown, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  const handleUpgradeClick = (tierName) => {
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#8B5CF6', '#EC4899', '#06B6D4', '#FFFFFF']
    });
  };

  const plans = [
    {
      name: 'Free Community',
      badge: 'Always Free',
      description: 'Essential high-quality music streaming for friendly gaming servers.',
      monthlyPrice: 0,
      annualPrice: 0,
      ctaText: 'Add Free Bot',
      ctaClass: 'btn-secondary',
      highlight: false,
      features: [
        'Standard 160kbps Opus streaming',
        'YouTube, Spotify & SoundCloud playback',
        'Basic DSP filters (Bassboost, Nightcore)',
        'Up to 100 tracks in server queue',
        'Standard AI AutoDJ (10 queries/day)',
        'Server /leaderboard & stats',
      ],
      notIncluded: [
        '24/7 Voice Channel Stay',
        '384kbps Tier 3 Lossless Opus',
        'Spatial 8D & Vaporwave DSP filters',
        'Custom bot name & avatar',
      ]
    },
    {
      name: 'Shadow Pro',
      badge: '★ Most Popular',
      description: 'Supercharge your music with audiophile bitrate, 24/7 stay, and all DSP filters.',
      monthlyPrice: 4.99,
      annualPrice: 3.75,
      ctaText: 'Upgrade to Pro',
      ctaClass: 'btn-primary',
      highlight: true,
      features: [
        '384kbps Studio Lossless Opus (Max Discord quality)',
        '24/7 Voice Channel Stay (never disconnects)',
        'All 16+ DSP Filters (8D, Vaporwave, Tremolo)',
        'Unlimited server queue & auto-reconnect',
        'Unlimited AI AutoDJ & /askmusic prompts',
        'Personal Cloud Playlists across all servers',
        'Priority low-latency streaming nodes',
        'Pro Discord role & profile badges',
      ],
      notIncluded: [
        'Multi-bot instances per server'
      ]
    },
    {
      name: 'Shadow Guild',
      badge: 'Enterprise Server',
      description: 'Unlocks Pro privileges for every single member in your Discord community.',
      monthlyPrice: 12.99,
      annualPrice: 9.99,
      ctaText: 'Get Guild Pass',
      ctaClass: 'btn-secondary',
      highlight: false,
      features: [
        'All Shadow Pro perks for ALL server members',
        'Up to 3 simultaneous bot instances (Multi-room)',
        'Custom Bot Avatar & Nickname support',
        'Dedicated isolated audio streaming node',
        '24/7 Voice stay in up to 3 voice rooms',
        'Dedicated VIP support channel in our guild',
        'Early access to beta AI models',
      ],
      notIncluded: []
    }
  ];

  return (
    <section id="pricing" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px auto' }}>
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <Crown size={14} color="#A78BFA" />
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '16px' }}>
            Pick the Sound for Your <span className="gradient-text-violet">Community</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.65 }}>
            Start completely free or unlock 384kbps audiophile streaming, 24/7 channel stay, and spatial 8D filters with Shadow Pro.
          </p>

          {/* Billing Toggle (Monthly / Annual) */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              padding: '6px 8px',
              background: 'rgba(255, 255, 255, 0.04)',
              borderRadius: '100px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              marginTop: '28px',
            }}
          >
            <button
              onClick={() => setIsAnnual(false)}
              style={{
                padding: '8px 18px',
                borderRadius: '100px',
                background: !isAnnual ? 'rgba(139, 92, 246, 0.3)' : 'transparent',
                border: 'none',
                color: !isAnnual ? '#FFFFFF' : '#94A3B8',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer'
              }}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              style={{
                padding: '8px 18px',
                borderRadius: '100px',
                background: isAnnual ? 'linear-gradient(135deg, #7C3AED, #6366F1)' : 'transparent',
                border: 'none',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: isAnnual ? '0 4px 15px rgba(124, 58, 237, 0.4)' : 'none'
              }}
            >
              <span>Annual Billing</span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  background: '#10B981',
                  color: '#0B0E14',
                  padding: '2px 6px',
                  borderRadius: '100px'
                }}
              >
                SAVE 25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div
          style={{
            maxWidth: '1150px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '24px',
            alignItems: 'stretch'
          }}
        >
          {plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.name}
                className="glass-card"
                style={{
                  borderRadius: '24px',
                  padding: '36px 30px',
                  background: plan.highlight
                    ? 'linear-gradient(170deg, rgba(30, 24, 58, 0.9) 0%, rgba(14, 17, 30, 0.95) 100%)'
                    : 'linear-gradient(170deg, rgba(20, 24, 38, 0.7) 0%, rgba(12, 15, 24, 0.85) 100%)',
                  border: plan.highlight ? '1px solid rgba(139, 92, 246, 0.6)' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: plan.highlight
                    ? '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(139, 92, 246, 0.3)'
                    : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  transform: plan.highlight ? 'scale(1.02)' : 'none',
                  zIndex: plan.highlight ? 2 : 1
                }}
              >
                {plan.highlight && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, #EC4899, #8B5CF6)',
                      color: '#FFFFFF',
                      padding: '4px 16px',
                      borderRadius: '100px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      boxShadow: '0 4px 15px rgba(236, 72, 153, 0.4)'
                    }}
                  >
                    RECOMMENDED CHOICE
                  </div>
                )}

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF' }}>
                      {plan.name}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: plan.highlight ? '#C084FC' : '#94A3B8',
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '4px 10px',
                        borderRadius: '100px',
                        border: '1px solid rgba(255, 255, 255, 0.06)'
                      }}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  <p style={{ color: '#94A3B8', fontSize: '0.875rem', minHeight: '42px', marginBottom: '24px' }}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '28px' }}>
                    <span style={{ fontSize: '2.8rem', fontWeight: 900, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                      ${price}
                    </span>
                    <span style={{ color: '#64748B', fontSize: '0.9rem' }}>
                      {price === 0 ? 'forever' : isAnnual ? '/month (billed yearly)' : '/month'}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleUpgradeClick(plan.name)}
                    className={plan.ctaClass}
                    style={{
                      width: '100%',
                      padding: '14px',
                      marginBottom: '32px',
                      fontSize: '0.95rem'
                    }}
                  >
                    <span>{plan.ctaText}</span>
                  </button>

                  {/* Feature Checklist */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#CBD5E1', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Included Features:
                    </div>
                    {plan.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: '#E2E8F0' }}>
                        <Check size={16} color="#10B981" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: '#64748B', opacity: 0.6 }}>
                        <span style={{ flexShrink: 0, marginTop: '1px', width: '16px', textAlign: 'center' }}>✕</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
