import React, { useState } from 'react';
import { Sparkles, Disc, Heart, Shield, Radio, ExternalLink, ArrowRight } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const [modalType, setModalType] = useState(null); // fallback modal

  const handleLinkClick = (e, path) => {
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <footer style={{ position: 'relative', marginTop: '60px', overflow: 'hidden' }}>
      
      {/* High-Impact CTA Banner */}
      <div className="container" style={{ marginBottom: '80px', position: 'relative', zIndex: 1 }}>
        <div
          className="glass-card"
          style={{
            borderRadius: '32px',
            padding: '60px 40px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(35, 25, 70, 0.85) 0%, rgba(14, 18, 32, 0.95) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.5)',
            boxShadow: '0 25px 70px rgba(0,0,0,0.8), 0 0 50px rgba(139, 92, 246, 0.35)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Radiant Halo Effect */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '600px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)',
              filter: 'blur(50px)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', margin: '0 auto' }}>
            <div className="badge-glow" style={{ marginBottom: '20px' }}>
              <Sparkles size={14} color="#A78BFA" />
              <span>TRANSFORM YOUR GUILD TODAY</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 900,
                marginBottom: '20px',
                lineHeight: 1.15
              }}
            >
              Ready to elevate your Discord server’s <span className="gradient-text-violet">sound</span>?
            </h2>

            <p
              style={{
                fontSize: '1.125rem',
                color: '#94A3B8',
                marginBottom: '36px',
                lineHeight: 1.65
              }}
            >
              Join 45,000+ communities enjoying lag-free 384kbps lossless music and autonomous AI AutoDJ curation. Setup takes less than 15 seconds.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '16px',
              }}
            >
              <a
                href="https://discord.com/oauth2/authorize?client_id=123456789012345678&scope=bot%20applications.commands&permissions=3147776"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '16px 36px', fontSize: '1.05rem' }}
              >
                <Sparkles size={18} />
                <span>Add Shadow to Discord</span>
              </a>

              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '16px 30px', fontSize: '1.05rem' }}
              >
                <span>Join Support Server</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Copyright */}
      <div
        style={{
          background: 'rgba(8, 10, 16, 0.95)',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '60px',
          paddingBottom: '40px',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '40px',
              marginBottom: '50px',
            }}
          >
            {/* Brand Col */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Disc size={20} color="#FFFFFF" className="anim-spin-vinyl" style={{ animationDuration: '10s' }} />
                </div>
                <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF' }}>
                  SHADOW<span style={{ color: '#A78BFA' }}>MUSIC</span>
                </span>
              </div>
              <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '18px' }}>
                The next-generation AI Discord music bot with 384kbps lossless audio, DSP sound sculpting, and community rank leaderboards.
              </p>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '4px 10px',
                  borderRadius: '100px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  color: '#34D399',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px #10B981' }} />
                <span>All Audio Clusters Operational</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                Product
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: '#94A3B8' }}>
                <li><a href="#features" style={{ transition: 'color 0.2s' }}>Features Overview</a></li>
                <li><a href="#aidj" style={{ transition: 'color 0.2s' }}>AI AutoDJ Engine</a></li>
                <li><a href="#dsp-studio" style={{ transition: 'color 0.2s' }}>DSP Filter Studio</a></li>
                <li><a href="#commands" style={{ transition: 'color 0.2s' }}>Slash Commands</a></li>
                <li><a href="#pricing" style={{ transition: 'color 0.2s' }}>Shadow Pro Pricing</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                Community & Support
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: '#94A3B8' }}>
                <li><a href="https://discord.gg" target="_blank" rel="noopener noreferrer">Discord Community</a></li>
                <li><a href="#faq">FAQ & Troubleshooting</a></li>
                <li><a href="#leaderboard">Server Leaderboard</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">Release Changelog</a></li>
                <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer">Bot Invite Link</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                Legal & Privacy
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: '#94A3B8' }}>
                <li>
                  <a
                    href="/terms"
                    onClick={(e) => handleLinkClick(e, '/terms')}
                    style={{ 
                      color: '#94A3B8', 
                      transition: 'color 0.2s', 
                      display: 'inline-block',
                      cursor: 'pointer' 
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#A78BFA')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    onClick={(e) => handleLinkClick(e, '/privacy')}
                    style={{ 
                      color: '#94A3B8', 
                      transition: 'color 0.2s', 
                      display: 'inline-block',
                      cursor: 'pointer' 
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#22D3EE')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li><span style={{ color: '#64748B' }}>Discord Verified Application</span></li>
                <li><span style={{ color: '#64748B' }}>Encrypted Token Storage</span></li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div
            style={{
              paddingTop: '24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              color: '#64748B',
              fontSize: '0.8125rem'
            }}
          >
            <div>
              © 2026 Shadow Music Bot. Not affiliated with Discord Inc.
            </div>
            <div>
              Crafted with <Heart size={13} color="#EC4899" fill="#EC4899" style={{ display: 'inline', verticalAlign: 'middle' }} /> for music lovers worldwide.
            </div>
          </div>
        </div>
      </div>

      {/* Modal for ToS and Privacy Policy */}
      {modalType && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(12px)',
            zIndex: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setModalType(null)}
        >
          <div
            className="glass-card"
            style={{
              maxWidth: '600px',
              width: '100%',
              borderRadius: '24px',
              padding: '36px',
              background: 'rgba(18, 22, 34, 0.98)',
              border: '1px solid rgba(139, 92, 246, 0.4)',
              maxHeight: '80vh',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>
              {modalType === 'tos' ? 'Terms of Service' : 'Privacy Policy'}
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
              {modalType === 'tos'
                ? 'Shadow Music complies with all Discord Developer Policies and Terms of Service. Shadow Music does not store or distribute copyrighted audio files on its own servers; streams are fetched on-demand from public streaming providers under standard fair-use caching. By using Shadow Music, you agree not to abuse or attempt denial-of-service against bot audio clusters.'
                : 'Shadow Music values member privacy. We only process voice channel identifiers and song request history necessary to maintain playback and server leaderboards. We do not record or store spoken microphone voice audio under any circumstances. User data can be purged at any time upon request.'}
            </p>
            <button
              onClick={() => setModalType(null)}
              className="btn-primary"
              style={{ width: '100%', marginTop: '16px' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </footer>
  );
}
