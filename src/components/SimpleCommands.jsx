import React, { useState } from 'react';
import { Terminal, Copy, Check, Sparkles } from 'lucide-react';

export default function SimpleCommands() {
  const [copiedCmd, setCopiedCmd] = useState(null);

  const topCommands = [
    {
      cmd: '/play',
      syntax: '/play <song or link>',
      desc: 'Play any track, album, or playlist from Spotify, SoundCloud, or YouTube.',
      category: 'Playback',
    },
    {
      cmd: '/pause',
      syntax: '/pause  &  /resume',
      desc: 'Temporarily pause playback or resume from where you left off.',
      category: 'Playback',
    },
    {
      cmd: '/skip',
      syntax: '/skip [number]',
      desc: 'Skip to the next track or jump several songs ahead in the queue.',
      category: 'Playback',
    },
    {
      cmd: '/queue',
      syntax: '/queue [page]',
      desc: 'View all queued tracks, total playtime, and who requested what.',
      category: 'Queue',
    },
    {
      cmd: '/filter',
      syntax: '/filter <8d | bassboost | nightcore | lofi | off>',
      desc: 'Apply studio DSP filters to transform audio in real time.',
      category: 'Audio FX',
    },
    {
      cmd: '/247',
      syntax: '/247',
      desc: 'Keep Shadow inside your voice channel 24/7 without leaving.',
      category: 'Utility',
    },
    {
      cmd: '/volume',
      syntax: '/volume <1-100>',
      desc: 'Adjust master bot volume for everyone in the voice channel.',
      category: 'Playback',
    },
    {
      cmd: '/lyrics',
      syntax: '/lyrics [song]',
      desc: 'Display synced, line-by-line scrolling lyrics for the current song.',
      category: 'Utility',
    },
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => {
      setCopiedCmd(null);
    }, 2000);
  };

  return (
    <section id="commands" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 46px auto' }}>
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <Terminal size={14} color="#A78BFA" />
            <span>INSTANT SLASH COMMANDS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: 800, marginBottom: '14px', letterSpacing: '-0.02em' }}>
            Simple & Intuitive <span className="gradient-text-violet">Controls</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Type <code>/</code> in Discord to trigger native auto-completion. Click any command below to copy it.
          </p>
        </div>

        {/* Commands Grid */}
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '16px',
          }}
        >
          {topCommands.map((item) => {
            const isCopied = copiedCmd === item.cmd;

            return (
              <div
                key={item.cmd}
                className="glass-card"
                style={{
                  borderRadius: '16px',
                  padding: '20px 22px',
                  background: 'linear-gradient(150deg, rgba(20, 25, 40, 0.6) 0%, rgba(12, 16, 26, 0.8) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '12px',
                  transition: 'border-color 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <code
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        background: 'rgba(139, 92, 246, 0.18)',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        border: '1px solid rgba(139, 92, 246, 0.35)',
                      }}
                    >
                      {item.cmd}
                    </code>

                    <button
                      onClick={() => handleCopy(item.cmd)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        padding: '5px 9px',
                        borderRadius: '7px',
                        background: isCopied ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                        border: isCopied ? '1px solid #10B981' : '1px solid rgba(255, 255, 255, 0.1)',
                        color: isCopied ? '#34D399' : '#94A3B8',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                      title="Copy command"
                    >
                      {isCopied ? <Check size={13} /> : <Copy size={13} />}
                      <span>{isCopied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: '#A78BFA',
                      marginBottom: '8px',
                    }}
                  >
                    {item.syntax}
                  </div>

                  <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.5, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
