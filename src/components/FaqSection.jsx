import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How do I add Shadow Music to my Discord server?',
      a: 'Simply click any "Add to Discord" button on this page. Select your Discord server, authorize the required voice and slash command permissions, and Shadow will join instantly. No complex setup or command line required.',
    },
    {
      q: 'Is Shadow Music 100% free to use?',
      a: 'Yes! All core features—including 384kbps lossless audio, unlimited songs, queue management, volume controls, and real-time DSP filters—are completely free with no paywalls.',
    },
    {
      q: 'Which platforms and audio sources are supported?',
      a: 'Shadow natively plays tracks, albums, and playlists from Spotify, SoundCloud, YouTube, Apple Music, and direct HTTP/HTTPS web audio streams.',
    },
    {
      q: 'Does Shadow record or store voice chat audio?',
      a: 'Never. Shadow only connects to voice channels as an audio transmitter (speaker). We never listen to, monitor, record, or store microphone audio from you or your server members. Your privacy is 100% guaranteed.',
    },
    {
      q: 'How do I keep the bot inside my voice channel 24/7?',
      a: 'Just type /247 in any text channel where the bot has access. Shadow will stay connected in your current voice channel even when everyone disconnects, so it is always ready whenever you join.',
    },
  ];

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px auto' }}>
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <HelpCircle size={14} color="#A78BFA" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.02em' }}>
            Got Questions? We’ve Got <span className="gradient-text-violet">Answers</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Quick answers to the most common questions about Shadow Music.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, idx) => {
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
                  transition: 'all 0.2s ease',
                }}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  style={{
                    width: '100%',
                    padding: '18px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'transparent',
                    border: 'none',
                    color: '#FFFFFF',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 700,
                  }}
                >
                  <span style={{ color: isOpen ? '#C4B5FD' : '#FFFFFF' }}>{faq.q}</span>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isOpen ? '#A78BFA' : '#94A3B8',
                      flexShrink: 0,
                    }}
                  >
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 22px 20px 22px',
                      color: '#94A3B8',
                      fontSize: '0.925rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                      paddingTop: '14px',
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
