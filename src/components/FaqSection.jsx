import React, { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How do I add Shadow Music to my Discord server?',
      a: 'Click any "Add to Discord" button on this page. Select your server from the Discord authorization window, confirm permissions, and Shadow will join instantly. No command line configuration or manual hosting required.',
    },
    {
      q: 'Is Shadow Music 100% free to use?',
      a: 'Yes. All essential features—including 384kbps lossless audio, unlimited track queuing, real-time DSP audio filters, volume control, and 24/7 playback—are free for all servers.',
    },
    {
      q: 'Which platforms and audio sources are supported?',
      a: 'Shadow natively plays songs, albums, and playlists from Spotify, SoundCloud, YouTube, Apple Music, and direct HTTP/HTTPS web audio streams.',
    },
    {
      q: 'Does Shadow record or store voice chat audio?',
      a: 'Never. Shadow operates exclusively as an audio transmitter (speaker) in voice channels. It does not record, listen to, or store microphone audio from any user under any circumstance.',
    },
    {
      q: 'How do I keep the bot inside my voice channel 24/7?',
      a: 'Type /247 in your server. Shadow will remain connected to your active voice room indefinitely, even after all server members leave.',
    },
  ];

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ padding: '110px 0', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">
        
        {/* Section Heading: Heading -> Short description -> Content */}
        <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '14px', letterSpacing: '-0.02em', color: '#FFFFFF' }}>
            Frequently asked questions.
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Quick answers about setting up, sound quality, and managing Shadow in your Discord guild.
          </p>
        </div>

        {/* Clean, Non-Card Minimal Line Accordion */}
        <div style={{ maxWidth: '820px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  style={{
                    width: '100%',
                    padding: '24px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                    background: 'transparent',
                    border: 'none',
                    color: '#FFFFFF',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                  }}
                >
                  <span style={{ color: isOpen ? '#FFFFFF' : '#CBD5E1', transition: 'color 0.15s ease' }}>
                    {faq.q}
                  </span>
                  <span
                    style={{
                      color: '#94A3B8',
                      fontSize: '1.3rem',
                      lineHeight: 1,
                      fontWeight: 300,
                      userSelect: 'none',
                    }}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      paddingBottom: '24px',
                      color: '#94A3B8',
                      fontSize: '0.975rem',
                      lineHeight: 1.65,
                      maxWidth: '740px',
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
