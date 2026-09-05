import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Star, MessageSquare } from 'lucide-react';
import { faqsData, testimonials } from '../data/faqsData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Testimonials Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <Star size={14} color="#F59E0B" fill="#F59E0B" />
            <span>COMMUNITY PRAISE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '16px' }}>
            Trusted by Discord’s <span className="gradient-text-cyan">Biggest Guilds</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.65 }}>
            See why server administrators and community DJs switched to Shadow Music for daily voice hangouts and competitive listening parties.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div
          style={{
            maxWidth: '1150px',
            margin: '0 auto 80px auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                borderRadius: '20px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'linear-gradient(160deg, rgba(20, 25, 40, 0.75) 0%, rgba(12, 16, 26, 0.85) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.07)'
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {Array.from({ length: t.stars }).map((_, sIdx) => (
                    <Star key={sIdx} size={16} color="#F59E0B" fill="#F59E0B" />
                  ))}
                </div>
                <p style={{ color: '#E2E8F0', fontSize: '0.95rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '24px' }}>
                  "{t.quote}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <img
                  src={t.avatar}
                  alt={t.author}
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid rgba(139, 92, 246, 0.4)'
                  }}
                />
                <div>
                  <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.95rem' }}>
                    {t.author}
                  </div>
                  <div style={{ color: '#A78BFA', fontSize: '0.78rem', fontWeight: 600 }}>
                    {t.role} • {t.serverName}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px auto' }}>
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <HelpCircle size={14} color="#A78BFA" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, marginBottom: '12px' }}>
            Got Questions? We’ve Got <span className="gradient-text-violet">Answers</span>
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: isOpen ? 'rgba(24, 30, 48, 0.85)' : 'rgba(18, 22, 34, 0.65)',
                  border: isOpen ? '1px solid rgba(139, 92, 246, 0.4)' : '1px solid rgba(255, 255, 255, 0.06)',
                  transition: 'all 0.2s ease'
                }}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'transparent',
                    border: 'none',
                    color: '#FFFFFF',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '1.05rem',
                    fontWeight: 700
                  }}
                >
                  <span style={{ color: isOpen ? '#C4B5FD' : '#FFFFFF' }}>{faq.q}</span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isOpen ? '#A78BFA' : '#94A3B8',
                      flexShrink: 0
                    }}
                  >
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 22px 24px',
                      color: '#94A3B8',
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                      paddingTop: '16px'
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
