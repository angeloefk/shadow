import React from 'react';
import { Sparkles, Terminal } from 'lucide-react';
import DiscordPlayerMockup from './DiscordPlayerMockup';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        paddingTop: '130px',
        paddingBottom: '80px',
      }}
    >

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
            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.6rem, 5vw, 4rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                marginBottom: '20px',
              }}
            >
              High-fidelity music <br />
              <span className="gradient-text-violet">for your Discord server.</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.65,
                color: '#94A3B8',
                marginBottom: '36px',
                maxWidth: '540px',
              }}
            >
              Stream studio-grade 384kbps lossless audio with zero lag, instant slash commands, 24/7 playback, and real-time DSP filters. Built for communities that care about sound.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '48px',
              }}
            >
              <a
                href="https://discord.com/oauth2/authorize?client_id=123456789012345678&scope=bot%20applications.commands&permissions=3147776"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  padding: '14px 28px',
                  fontSize: '0.95rem',
                }}
              >
                <Sparkles size={16} />
                <span>Add to Discord</span>
              </a>

              <a
                href="#commands"
                className="btn-secondary"
                style={{
                  padding: '14px 24px',
                  fontSize: '0.95rem',
                }}
              >
                <Terminal size={16} color="#A78BFA" />
                <span>View Commands</span>
              </a>
            </div>

            {/* Social Proof Text */}
            <div
              style={{
                paddingTop: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF' }}>45,000+</div>
                <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Active Servers</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF' }}>1.2M+</div>
                <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Daily Listeners</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10B981' }}>99.98%</div>
                <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Right Column: Discord Player */}
          <div>
            <DiscordPlayerMockup />
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
