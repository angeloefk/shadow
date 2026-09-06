import React from 'react';

export default function SimpleFeatures() {
  const features = [
    {
      num: '01',
      title: '384kbps Lossless Audio',
      desc: 'Bit-perfect Opus audio encoding tuned for Discord Tier 3 bitrates. Hear vocals, basslines, and dynamics with studio clarity and zero compression artifacts.',
    },
    {
      num: '02',
      title: '24/7 Voice Channel Uptime',
      desc: 'Powered by resilient global audio clusters with automatic failover. Enable /247 to keep Shadow connected in your voice room without random disconnects.',
    },
    {
      num: '03',
      title: 'Real-Time DSP Filters',
      desc: 'Shift audio instantly with low-latency DSP algorithms. Rotate sound in 360° with 8D Audio, enhance low-end with Bass Boost, or speed up tracks with Nightcore.',
    },
    {
      num: '04',
      title: 'Universal Music Sources',
      desc: 'Seamless streaming compatibility with Spotify, SoundCloud, YouTube, Apple Music, and direct HTTP/HTTPS web radio streams with instant track extraction.',
    },
  ];

  return (
    <section id="features" style={{ padding: '110px 0', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">
        
        {/* Section Heading: Heading -> Short description -> Content */}
        <div style={{ maxWidth: '640px', marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '14px', letterSpacing: '-0.02em', color: '#FFFFFF' }}>
            Engineered for pure sound.
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.6 }}>
            No bloat, no confusing setups. Built from the ground up for high-fidelity Discord server playback.
          </p>
        </div>

        {/* Open Editorial Content Grid with Clean Dividers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
          }}
        >
          {features.map((item) => (
            <div
              key={item.num}
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                paddingTop: '24px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: '#A78BFA',
                  fontWeight: 600,
                  marginBottom: '16px',
                }}
              >
                {item.num}
              </div>

              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '10px',
                  letterSpacing: '-0.01em',
                }}
              >
                {item.title}
              </h3>

              <p style={{ color: '#94A3B8', fontSize: '0.925rem', lineHeight: 1.65 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
