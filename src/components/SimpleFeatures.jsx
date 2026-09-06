import React from 'react';
import { Headphones, Zap, Sliders, Music2 } from 'lucide-react';

export default function SimpleFeatures() {
  const features = [
    {
      icon: <Headphones size={24} color="#A78BFA" />,
      tag: 'High-Fidelity Audio',
      title: '384kbps Studio Sound',
      desc: 'Experience bit-perfect lossless streaming with zero compression artifacts or stutter. Tuned for Discord Tier 3 voice channels.',
      accent: 'rgba(139, 92, 246, 0.15)',
      borderColor: 'rgba(139, 92, 246, 0.3)',
      tagColor: '#C4B5FD',
    },
    {
      icon: <Zap size={24} color="#22D3EE" />,
      tag: 'Continuous Playback',
      title: '24/7 Mode & Zero Lag',
      desc: 'Powered by high-performance global audio nodes. Enable /247 to keep music playing in your server without random disconnects.',
      accent: 'rgba(6, 182, 212, 0.15)',
      borderColor: 'rgba(6, 182, 212, 0.3)',
      tagColor: '#67E8F9',
    },
    {
      icon: <Sliders size={24} color="#F472B6" />,
      tag: 'Audio Effects',
      title: 'Real-Time DSP Filters',
      desc: 'Transform any track in real-time with Bass Boost, 8D Spatial Audio, Nightcore, Vaporwave, and Lo-Fi at the touch of a slash command.',
      accent: 'rgba(236, 72, 153, 0.15)',
      borderColor: 'rgba(236, 72, 153, 0.3)',
      tagColor: '#FBCFE8',
    },
    {
      icon: <Music2 size={24} color="#34D399" />,
      tag: 'Multi-Source',
      title: 'Spotify, Soundcloud & More',
      desc: 'Play tracks, playlists, and albums directly from Spotify, SoundCloud, YouTube, Apple Music, and direct web radio streams.',
      accent: 'rgba(16, 185, 129, 0.15)',
      borderColor: 'rgba(16, 185, 129, 0.3)',
      tagColor: '#A7F3D0',
    },
  ];

  return (
    <section id="features" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 50px auto' }}>
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <span>WHY SHADOW MUSIC</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: 800, marginBottom: '14px', letterSpacing: '-0.02em' }}>
            Pure Audio. <span className="gradient-text-violet">Zero Distractions.</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Everything you need for an unforgettable server listening session, built with performance and simplicity in mind.
          </p>
        </div>

        {/* 4 Clean Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {features.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                borderRadius: '20px',
                padding: '32px 28px',
                background: 'linear-gradient(150deg, rgba(20, 25, 40, 0.7) 0%, rgba(12, 15, 25, 0.85) 100%)',
                border: `1px solid ${item.borderColor}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 16px 36px -10px ${item.borderColor}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                {/* Icon Container */}
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: item.accent,
                    border: `1px solid ${item.borderColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  {item.icon}
                </div>

                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: item.tagColor,
                    letterSpacing: '0.05em',
                    marginBottom: '8px',
                  }}
                >
                  {item.tag}
                </div>

                <h3
                  style={{
                    fontSize: '1.28rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '12px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.title}
                </h3>

                <p style={{ color: '#94A3B8', fontSize: '0.925rem', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
