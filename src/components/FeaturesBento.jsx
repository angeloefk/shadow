import React, { useState } from 'react';
import { 
  Bot, Sparkles, Sliders, Shield, Award, Zap, Radio, 
  Headphones, Flame, Clock, Heart, ArrowUpRight, CheckCircle2 
} from 'lucide-react';

export default function FeaturesBento() {
  const [activeTab, setActiveTab] = useState('autodj');

  return (
    <section id="features" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px auto' }}>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '18px' }}>
            Engineered for <span className="gradient-text-violet">Audiophiles</span> and Server Legends.
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.65 }}>
            Shadow Music is not another generic Discord player. Powered by Discord.js v14 and machine learning algorithms, it delivers bit-perfect audio and intelligent server vibe curation.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
          }}
          className="bento-container"
        >
          {/* Card 1: AI-Powered Intelligence (Col span 7) */}
          <div
            className="glass-card bento-card-7"
            style={{
              gridColumn: 'span 7',
              padding: '36px',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(145deg, rgba(22, 28, 44, 0.8) 0%, rgba(13, 17, 26, 0.9) 100%)',
              border: '1px solid rgba(139, 92, 246, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            {/* Ambient Corner Glow */}
            <div
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(139, 92, 246, 0.15)',
                    border: '1px solid rgba(139, 92, 246, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#A78BFA'
                  }}
                >
                  <Bot size={22} />
                </div>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#C084FC', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  AI-Powered Curation Engine
                </span>
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '12px', color: '#FFFFFF' }}>
                AI AutoDJ & Natural Language Discovery
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.975rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Forget awkward silence and jarring playlist transitions. Shadow analyzes song BPM, harmonic keys, and server mood to autonomously queue tracks that flow like an elite club DJ set.
              </p>
            </div>

            {/* Interactive Feature Demo Pills */}
            <div
              style={{
                background: 'rgba(11, 14, 20, 0.7)',
                borderRadius: '16px',
                padding: '16px',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setActiveTab('autodj')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    background: activeTab === 'autodj' ? 'rgba(139, 92, 246, 0.25)' : 'rgba(255,255,255,0.04)',
                    border: activeTab === 'autodj' ? '1px solid #8B5CF6' : '1px solid transparent',
                    color: activeTab === 'autodj' ? '#FFFFFF' : '#94A3B8',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  /autodj Vibe Match
                </button>
                <button
                  onClick={() => setActiveTab('askmusic')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    background: activeTab === 'askmusic' ? 'rgba(6, 182, 212, 0.25)' : 'rgba(255,255,255,0.04)',
                    border: activeTab === 'askmusic' ? '1px solid #06B6D4' : '1px solid transparent',
                    color: activeTab === 'askmusic' ? '#FFFFFF' : '#94A3B8',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  /askmusic Prompt
                </button>
                <button
                  onClick={() => setActiveTab('smartqueue')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    background: activeTab === 'smartqueue' ? 'rgba(236, 72, 153, 0.25)' : 'rgba(255,255,255,0.04)',
                    border: activeTab === 'smartqueue' ? '1px solid #EC4899' : '1px solid transparent',
                    color: activeTab === 'smartqueue' ? '#FFFFFF' : '#94A3B8',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  /smartqueue Harmonic
                </button>
              </div>

              {/* Dynamic Simulated AI Response Output */}
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {activeTab === 'autodj' && (
                  <div style={{ color: '#A78BFA' }}>
                    <span style={{ color: '#10B981' }}>✔ AutoDJ:</span> Synced with 12 listeners • Tempo: 95 BPM • Harmonic Key: F# Minor • Next: <em>"Midnight Cyber Resonance"</em> (98.4% match)
                  </div>
                )}
                {activeTab === 'askmusic' && (
                  <div style={{ color: '#67E8F9' }}>
                    <span style={{ color: '#06B6D4' }}>⚡ Prompt:</span> "rainy study session in Kyoto" ➔ Curated 14 lofi tracks featuring acoustic rain overlays & soft Rhodes chords.
                  </div>
                )}
                {activeTab === 'smartqueue' && (
                  <div style={{ color: '#F472B6' }}>
                    <span style={{ color: '#EC4899' }}>♫ Flow Sorted:</span> 8 queue tracks rearranged by Camelot Wheel (8A ➔ 9A ➔ 10A) with zero key clashing.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Card 2: 384kbps HD Bitrate & Native Streaming (Col span 5) */}
          <div
            className="glass-card bento-card-5"
            style={{
              gridColumn: 'span 5',
              padding: '36px',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(145deg, rgba(20, 24, 38, 0.8) 0%, rgba(11, 14, 22, 0.9) 100%)',
              border: '1px solid rgba(6, 182, 212, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(6, 182, 212, 0.15)',
                    border: '1px solid rgba(6, 182, 212, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#22D3EE'
                  }}
                >
                  <Headphones size={22} />
                </div>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#22D3EE', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Ultra-HD Audio Pipeline
                </span>
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '12px', color: '#FFFFFF' }}>
                384kbps Opus Lossless
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.975rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Discord Tier 3 maximum supported bitrate. Powered by custom low-latency C++ audio pipelines for instantaneous buffering and zero dropped audio packets.
              </p>
            </div>

            {/* Multi-Platform Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>
                Native High-Res Source Extraction
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['Spotify HiFi', 'Apple Music', 'SoundCloud HQ', 'YouTube HD', 'Direct Streams'].map((src) => (
                  <span
                    key={src}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      fontSize: '0.75rem',
                      color: '#E2E8F0',
                      fontWeight: 500
                    }}
                  >
                    {src}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Real-Time DSP Audio Studio (Col span 4) */}
          <div
            className="glass-card bento-card-4"
            style={{
              gridColumn: 'span 4',
              padding: '32px',
              borderRadius: '24px',
              background: 'linear-gradient(145deg, rgba(20, 24, 38, 0.8) 0%, rgba(11, 14, 22, 0.9) 100%)',
              border: '1px solid rgba(236, 72, 153, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(236, 72, 153, 0.15)',
                  border: '1px solid rgba(236, 72, 153, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F472B6',
                  marginBottom: '16px'
                }}
              >
                <Sliders size={22} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '10px', color: '#FFFFFF' }}>
                Hardware-Accelerated DSP
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '18px' }}>
                Shift reality with real-time audio filters. Rotate binaural soundscapes with 8D Audio, vibrate headphones with deep Bassboost, or accelerate BPM with Nightcore.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['/8d', '/bassboost', '/nightcore', '/vaporwave', '/tremolo'].map((cmd) => (
                <code
                  key={cmd}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '6px',
                    background: 'rgba(236, 72, 153, 0.1)',
                    border: '1px solid rgba(236, 72, 153, 0.25)',
                    color: '#F472B6',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {cmd}
                </code>
              ))}
            </div>
          </div>

          {/* Card 4: Community Profiles & Gamification (Col span 4) */}
          <div
            className="glass-card bento-card-4"
            style={{
              gridColumn: 'span 4',
              padding: '32px',
              borderRadius: '24px',
              background: 'linear-gradient(145deg, rgba(20, 24, 38, 0.8) 0%, rgba(11, 14, 22, 0.9) 100%)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FBBF24',
                  marginBottom: '16px'
                }}
              >
                <Award size={22} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '10px', color: '#FFFFFF' }}>
                Music Profiles & Leaderboards
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '18px' }}>
                Turn passive listening into a competitive social sport. Track total listening hours, uncover your personalized genre DNA card, and compete on server rank charts.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['/musicprofile', '/leaderboard', '/toptracks', '/favorites'].map((cmd) => (
                <code
                  key={cmd}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '6px',
                    background: 'rgba(245, 158, 11, 0.1)',
                    border: '1px solid rgba(245, 158, 11, 0.25)',
                    color: '#FBBF24',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {cmd}
                </code>
              ))}
            </div>
          </div>

          {/* Card 5: Pro Server Control & 24/7 Stay (Col span 4) */}
          <div
            className="glass-card bento-card-4"
            style={{
              gridColumn: 'span 4',
              padding: '32px',
              borderRadius: '24px',
              background: 'linear-gradient(145deg, rgba(20, 24, 38, 0.8) 0%, rgba(11, 14, 22, 0.9) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#34D399',
                  marginBottom: '16px'
                }}
              >
                <Shield size={22} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '10px', color: '#FFFFFF' }}>
                Dedicated Controller & 24/7
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '18px' }}>
                Run <code>/setup</code> to deploy a persistent interactive controller channel with real-time Discord buttons, assign DJ roles with <code>/dj</code>, and enable non-stop <code>/247</code> mode.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['/setup', '/247', '/dj', '/musicpermissions'].map((cmd) => (
                <code
                  key={cmd}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '6px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    color: '#34D399',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {cmd}
                </code>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .bento-card-7 { grid-column: span 12 !important; }
          .bento-card-5 { grid-column: span 12 !important; }
          .bento-card-4 { grid-column: span 6 !important; }
        }
        @media (max-width: 640px) {
          .bento-card-4 { grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
}
