import React, { useState } from 'react';
import { Sparkles, Disc, Heart, ExternalLink } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const [modalType, setModalType] = useState(null); // fallback modal

  const handleLinkClick = (e, path) => {
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <footer style={{ position: 'relative' }}>
      
      {/* Clean Full-Width CTA Callout Section */}
      <section
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          padding: '120px 0 100px 0',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '640px' }}>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              fontWeight: 800,
              marginBottom: '16px',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
            }}
          >
            Elevate your server's sound.
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: '#94A3B8',
              marginBottom: '36px',
              lineHeight: 1.6,
            }}
          >
            Add Shadow to your Discord guild in seconds. Enjoy lag-free 384kbps lossless audio, instant slash commands, and 24/7 uptime.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '14px',
            }}
          >
            <a
              href="https://discord.com/oauth2/authorize?client_id=123456789012345678&scope=bot%20applications.commands&permissions=3147776"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '14px 28px', fontSize: '0.95rem' }}
            >
              <Sparkles size={16} />
              <span>Add to Discord</span>
            </a>

            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '14px 24px', fontSize: '0.95rem' }}
            >
              <span>Support Server</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

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
                    overflow: 'hidden',
                    border: '1px solid rgba(139, 92, 246, 0.4)',
                    boxShadow: '0 0 12px rgba(139, 92, 246, 0.3)',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src="/shadow-avatar.webp"
                    alt="Shadow Bot"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.src = 'https://cdn.discordapp.com/avatars/1352679776036589648/a_2b85e7ea42101ad3e3160c98880f3598.webp?size=1024';
                    }}
                  />
                </div>
                <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF' }}>
                  SHADOW<span style={{ color: '#A78BFA' }}>MUSIC</span>
                </span>
              </div>
              <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '18px' }}>
                The high-fidelity Discord music bot with 384kbps lossless audio, 24/7 uptime, and real-time DSP sound filters.
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
                Navigation
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: '#94A3B8' }}>
                <li><a href="#features" style={{ transition: 'color 0.2s' }}>Features</a></li>
                <li><a href="#commands" style={{ transition: 'color 0.2s' }}>Slash Commands</a></li>
                <li><a href="#faq" style={{ transition: 'color 0.2s' }}>FAQ</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                Discord
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem', color: '#94A3B8' }}>
                <li><a href="https://discord.gg" target="_blank" rel="noopener noreferrer">Support Server</a></li>
                <li><a href="https://discord.com/oauth2/authorize?client_id=123456789012345678&scope=bot%20applications.commands&permissions=3147776" target="_blank" rel="noopener noreferrer">Add Shadow to Discord</a></li>
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
