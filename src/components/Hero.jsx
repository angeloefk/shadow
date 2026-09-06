import React from 'react';
import { Sparkles, Terminal, ShieldCheck, Zap, Radio, Headphones, Disc3, ArrowRight } from 'lucide-react';
import DiscordPlayerMockup from './DiscordPlayerMockup';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        paddingTop: '140px',
        paddingBottom: '90px',
        overflow: 'hidden',
      }}
    >
      {/* Radiant Background Glows */}
      <div
        style={{
          position: 'absolute',
          top: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '750px',
          height: '420px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.22) 0%, rgba(99, 102, 241, 0.12) 45%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          width: '450px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.16) 0%, transparent 65%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.08fr 0.92fr',
            gap: '50px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Headlines & CTAs */}
          <div>
            {/* Top Pill Announcement */}
            <div style={{ marginBottom: '22px' }}>
              <div
                className="badge-glow"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Sparkles size={15} color="#A78BFA" />
                <span>384kbps Opus Lossless • 24/7 Playback • 100% Free</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.85rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                marginBottom: '22px',
              }}
            >
              The Ultimate <br />
              <span className="gradient-text-violet">Music Experience</span> <br />
              for Discord.
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.68,
                color: '#94A3B8',
                marginBottom: '32px',
                maxWidth: '560px',
              }}
            >
              Stream studio-grade <span style={{ color: '#F1F5F9', fontWeight: 600 }}>384kbps lossless audio</span> with zero lag. Enjoy instant slash commands, 24/7 uptime, and real-time DSP audio filters in every voice channel.
            </p>

            {/* Dual CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '40px',
              }}
            >
              <a
                href="https://discord.com/oauth2/authorize?client_id=123456789012345678&scope=bot%20applications.commands&permissions=3147776"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  padding: '16px 32px',
                  fontSize: '1rem',
                  letterSpacing: '0.01em',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span>Add to Discord</span>
              </a>

              <a
                href="#commands"
                className="btn-secondary"
                style={{
                  padding: '16px 26px',
                  fontSize: '1rem',
                }}
              >
                <Terminal size={18} color="#A78BFA" />
                <span>Commands</span>
              </a>
            </div>

            {/* Micro Guarantees */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', color: '#64748B', fontSize: '0.825rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} color="#10B981" />
                <span>Discord Verified</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Zap size={16} color="#F59E0B" />
                <span>Instant Setup</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Headphones size={16} color="#06B6D4" />
                <span>Zero Latency</span>
              </div>
            </div>

            {/* Social Proof Metric Counters */}
            <div
              style={{
                marginTop: '45px',
                paddingTop: '28px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
              }}
            >
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                  45,000+
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 500 }}>Active Servers</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                  1.2M+
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 500 }}>Daily Listeners</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#10B981', fontFamily: 'var(--font-heading)' }}>
                  99.98%
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 500 }}>Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Discord Player Widget */}
          <div style={{ position: 'relative' }}>
            {/* Ambient Background Glow Behind Player */}
            <div
              style={{
                position: 'absolute',
                inset: '-20px',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.25) 0%, rgba(6, 182, 212, 0.2) 100%)',
                filter: 'blur(35px)',
                borderRadius: '35px',
                zIndex: 0,
              }}
            />

            {/* Floating feature pills around player */}
            <div
              className="anim-float"
              style={{
                position: 'absolute',
                top: '-18px',
                right: '20px',
                zIndex: 2,
                background: 'rgba(15, 19, 28, 0.92)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(139, 92, 246, 0.4)',
                padding: '6px 14px',
                borderRadius: '100px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#C4B5FD',
              }}
            >
              <Sparkles size={14} color="#C084FC" />
              <span>Live Player Preview</span>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <DiscordPlayerMockup />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
