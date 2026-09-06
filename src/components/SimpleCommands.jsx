import React, { useState } from 'react';
import { Terminal, Copy, Check, Sparkles, Play, Sliders, ListMusic, FileText, Radio, Volume2, CornerDownRight } from 'lucide-react';

export default function SimpleCommands() {
  const [activeTab, setActiveTab] = useState('play');
  const [copiedCmd, setCopiedCmd] = useState(null);

  const shadowAvatarUrl = '/shadow-avatar.webp';

  const commandsData = [
    {
      id: 'play',
      name: '/play',
      syntax: '/play <song or link>',
      badge: 'Core Playback',
      icon: <Play size={16} />,
      shortDesc: 'Play any track, album, or playlist from Spotify, SoundCloud, or YouTube.',
      userPrompt: 'used /play query: Starboy - The Weeknd',
      embed: {
        borderColor: '#8B5CF6',
        title: '🎶 Now Playing',
        description: '**[The Weeknd - Starboy (ft. Daft Punk)](https://open.spotify.com)**',
        fields: [
          { label: 'Artist', value: 'The Weeknd' },
          { label: 'Duration', value: '03:50 (384kbps Opus)' },
          { label: 'Source', value: 'Spotify Lossless' },
          { label: 'Requested by', value: '@You' },
        ],
        thumbnail: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=160&h=160&fit=crop&q=80',
        footer: 'Server: Cyberpunk Lounge • Queue: 4 songs',
        buttons: ['⏸️ Pause', '⏭️ Skip', '🔀 Shuffle', '📜 Lyrics', '❤️ Favorite'],
      },
    },
    {
      id: 'queue',
      name: '/queue',
      syntax: '/queue [page]',
      badge: 'Queue Control',
      icon: <ListMusic size={16} />,
      shortDesc: 'View upcoming songs, total playlist length, and requesters with pagination.',
      userPrompt: 'used /queue page: 1',
      embed: {
        borderColor: '#EC4899',
        title: '📜 Server Music Queue',
        description: `**Now Playing:**
▶️ **[The Weeknd - Starboy]** [3:50] • *@You*

**Up Next:**
**1.** Daft Punk - Get Lucky [4:08] • *@Alex*
**2.** Post Malone - Circles [3:35] • *@Sarah*
**3.** Metro Boomin - Space Cadet [3:23] • *@Kev*`,
        fields: [
          { label: 'Total Songs', value: '4 tracks' },
          { label: 'Total Duration', value: '15 mins 06 secs' },
          { label: 'Loop Mode', value: 'Disabled' },
          { label: 'Autoplay', value: 'Enabled' },
        ],
        footer: 'Page 1 of 2 • Type /queue 2 for more',
        buttons: ['◀️ Prev', '1 / 2', '▶️ Next', '🔀 Shuffle', '🗑️ Clear'],
      },
    },
    {
      id: 'filter',
      name: '/filter',
      syntax: '/filter <8d | bassboost | nightcore | lofi | off>',
      badge: 'Audio FX',
      icon: <Sliders size={16} />,
      shortDesc: 'Apply studio-grade hardware DSP filters in real-time with zero lag.',
      userPrompt: 'used /filter type: 8d',
      embed: {
        borderColor: '#06B6D4',
        title: '🎛️ DSP Audio Filter Activated',
        description: 'Applied **Spatial 8D Audio** filter to voice stream. The sound is now rotating in 360° binaural space.',
        fields: [
          { label: 'Active Filter', value: '8D Binaural Spatial' },
          { label: 'Hardware Node', value: 'Cluster EU-01 (Opus)' },
          { label: 'Audio Latency', value: '8ms' },
          { label: 'Status', value: 'Streaming Active' },
        ],
        footer: 'Tip: Use /filter off anytime to restore flat sound',
        buttons: ['Bass Boost', 'Nightcore', '8D Spatial', 'Lo-Fi', 'Turn Off'],
      },
    },
    {
      id: 'lyrics',
      name: '/lyrics',
      syntax: '/lyrics [song name]',
      badge: 'Interactive',
      icon: <FileText size={16} />,
      shortDesc: 'Fetch live synchronized scrolling lyrics for the currently playing track.',
      userPrompt: 'used /lyrics',
      embed: {
        borderColor: '#10B981',
        title: '📝 Lyrics: The Weeknd — Starboy',
        description: `*I'm tryna put you in the worst mood, ah*
*P1 cleaner than your church shoes, ah*
*Milli point two just to hurt you, ah*
*All red Lamb' just to tease you, ah*
*None of these toys on lease too, ah...*`,
        fields: [
          { label: 'Track', value: 'Starboy' },
          { label: 'Provider', value: 'Genius Synced' },
        ],
        footer: 'Synced lyrics • Line 1-5 of 42',
        buttons: ['🔄 Refresh', '📄 Full Lyrics', '🌐 Open Genius'],
      },
    },
    {
      id: '247',
      name: '/247',
      syntax: '/247',
      badge: 'Voice Utility',
      icon: <Radio size={16} />,
      shortDesc: 'Keep Shadow inside your server voice room 24/7 without disconnecting.',
      userPrompt: 'used /247',
      embed: {
        borderColor: '#F59E0B',
        title: '⚡ 24/7 Voice Channel Mode',
        description: '✅ **24/7 Mode is now ENABLED!**\n\nShadow will stay in **#voice-lounge** permanently. The bot will never leave even when the room is empty.',
        fields: [
          { label: 'Target Channel', value: '#voice-lounge' },
          { label: 'Auto-Reconnect', value: 'Enabled' },
          { label: 'Cluster Affinity', value: 'Persistent' },
          { label: 'Uptime Tier', value: '99.98%' },
        ],
        footer: 'Toggle off anytime using /247 again',
        buttons: ['Disable 24/7', 'Switch Channel', 'Set Volume'],
      },
    },
  ];

  const quickCommands = [
    { cmd: '/pause', desc: 'Pause current song' },
    { cmd: '/resume', desc: 'Resume playback' },
    { cmd: '/skip', desc: 'Skip to next song' },
    { cmd: '/volume', desc: 'Set room volume (1-100)' },
    { cmd: '/stop', desc: 'Stop & disconnect bot' },
    { cmd: '/shuffle', desc: 'Randomize queue tracks' },
  ];

  const activeCmd = commandsData.find((c) => c.id === activeTab) || commandsData[0];

  const handleCopy = (cmd) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => {
      setCopiedCmd(null);
    }, 2000);
  };

  return (
    <section id="commands" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 45px auto' }}>
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <Terminal size={14} color="#A78BFA" />
            <span>DISCORD SLASH COMMANDS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: 800, marginBottom: '14px', letterSpacing: '-0.02em' }}>
            Interactive <span className="gradient-text-violet">Command Arsenal</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.6 }}>
            See exactly how Shadow responds in your Discord voice and text channels with rich embeds and action buttons.
          </p>
        </div>

        {/* Command Selector Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '32px',
          }}
        >
          {commandsData.map((cmd) => {
            const isSelected = activeTab === cmd.id;
            return (
              <button
                key={cmd.id}
                onClick={() => setActiveTab(cmd.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  background: isSelected ? 'rgba(139, 92, 246, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                  border: isSelected ? '1px solid #8B5CF6' : '1px solid rgba(255, 255, 255, 0.08)',
                  color: isSelected ? '#FFFFFF' : '#94A3B8',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 0 20px rgba(139, 92, 246, 0.3)' : 'none',
                }}
              >
                {cmd.icon}
                <span>{cmd.name}</span>
                <span
                  style={{
                    fontSize: '0.68rem',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    background: isSelected ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.05)',
                    color: isSelected ? '#FFFFFF' : '#64748B',
                  }}
                >
                  {cmd.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Discord Message Mockup Box */}
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto 40px auto',
            borderRadius: '20px',
            background: 'rgba(20, 24, 38, 0.95)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
            overflow: 'hidden',
          }}
        >
          {/* Top Discord Window Header */}
          <div
            style={{
              padding: '12px 20px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.825rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#CBD5E1', fontWeight: 600 }}>
              <span style={{ color: '#8B5CF6' }}>#</span>
              <span>music-chat</span>
              <span style={{ color: '#64748B', fontWeight: 400 }}>• Discord Slash Response Preview</span>
            </div>

            <button
              onClick={() => handleCopy(activeCmd.name)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 12px',
                borderRadius: '8px',
                background: copiedCmd === activeCmd.name ? 'rgba(16, 185, 129, 0.2)' : 'rgba(139, 92, 246, 0.15)',
                border: copiedCmd === activeCmd.name ? '1px solid #10B981' : '1px solid rgba(139, 92, 246, 0.35)',
                color: copiedCmd === activeCmd.name ? '#34D399' : '#C4B5FD',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {copiedCmd === activeCmd.name ? <Check size={13} /> : <Copy size={13} />}
              <span>{copiedCmd === activeCmd.name ? 'Copied' : `Copy ${activeCmd.name}`}</span>
            </button>
          </div>

          {/* Discord Message Container */}
          <div style={{ padding: '24px' }}>
            
            {/* User Interaction Line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: '#94A3B8', fontSize: '0.8rem' }}>
              <CornerDownRight size={14} color="#64748B" />
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&q=80"
                alt="User"
                style={{ width: '16px', height: '16px', borderRadius: '50%' }}
              />
              <span style={{ color: '#E2E8F0', fontWeight: 600 }}>You</span>
              <span>{activeCmd.userPrompt}</span>
            </div>

            {/* Shadow Bot Response Header */}
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              {/* Shadow Official Profile Avatar */}
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <img
                  src={shadowAvatarUrl}
                  alt="Shadow Profile"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid rgba(139, 92, 246, 0.4)',
                    boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)',
                  }}
                  onError={(e) => {
                    // Fallback to discord CDN direct if local fails
                    e.target.src = 'https://cdn.discordapp.com/avatars/1352679776036589648/a_2b85e7ea42101ad3e3160c98880f3598.webp?size=1024';
                  }}
                />
              </div>

              {/* Bot Message Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Bot Name & BOT Badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.975rem' }}>
                    Shadow
                  </span>
                  <span
                    style={{
                      background: '#5865F2',
                      color: '#FFFFFF',
                      fontSize: '0.625rem',
                      fontWeight: 700,
                      padding: '1px 5px',
                      borderRadius: '3px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                    }}
                  >
                    ✓ BOT
                  </span>
                  <span style={{ color: '#64748B', fontSize: '0.75rem' }}>Today at 2:45 PM</span>
                </div>

                {/* Discord Embed Box */}
                <div
                  style={{
                    maxWidth: '560px',
                    borderRadius: '8px',
                    background: '#2B2D31',
                    borderLeft: `4px solid ${activeCmd.embed.borderColor}`,
                    padding: '16px 18px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '14px' }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          color: activeCmd.embed.borderColor,
                          marginBottom: '4px',
                        }}
                      >
                        {activeCmd.embed.title}
                      </div>

                      <div
                        style={{
                          color: '#DBDEE1',
                          fontSize: '0.88rem',
                          lineHeight: 1.5,
                          marginBottom: '12px',
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {activeCmd.embed.description}
                      </div>

                      {/* Fields */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(2, 1fr)',
                          gap: '10px',
                          marginBottom: '12px',
                        }}
                      >
                        {activeCmd.embed.fields.map((f, i) => (
                          <div key={i}>
                            <div style={{ fontSize: '0.72rem', color: '#949BA4', fontWeight: 600, textTransform: 'uppercase' }}>
                              {f.label}
                            </div>
                            <div style={{ fontSize: '0.825rem', color: '#F2F3F5', fontWeight: 500 }}>
                              {f.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Footer */}
                      <div style={{ fontSize: '0.72rem', color: '#949BA4', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '8px' }}>
                        {activeCmd.embed.footer}
                      </div>
                    </div>

                    {/* Optional Thumbnail */}
                    {activeCmd.embed.thumbnail && (
                      <img
                        src={activeCmd.embed.thumbnail}
                        alt="Thumbnail"
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '8px',
                          objectFit: 'cover',
                          flexShrink: 0,
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Discord Component Action Buttons */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '10px' }}>
                  {activeCmd.embed.buttons.map((btn, bIdx) => (
                    <button
                      key={bIdx}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        background: '#4E5058',
                        border: 'none',
                        color: '#FFFFFF',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        cursor: 'default',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                      }}
                    >
                      {btn}
                    </button>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Quick Reference Grid for Other Commands */}
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', textAlign: 'center' }}>
            More Everyday Commands (Click to copy)
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '10px',
            }}
          >
            {quickCommands.map((qc) => {
              const isCopied = copiedCmd === qc.cmd;
              return (
                <div
                  key={qc.cmd}
                  onClick={() => handleCopy(qc.cmd)}
                  className="glass-card"
                  style={{
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(139, 92, 246, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  }}
                >
                  <div>
                    <code style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
                      {qc.cmd}
                    </code>
                    <div style={{ color: '#94A3B8', fontSize: '0.75rem', marginTop: '2px' }}>
                      {qc.desc}
                    </div>
                  </div>

                  <span style={{ color: isCopied ? '#34D399' : '#64748B', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {isCopied ? <Check size={14} /> : <Copy size={14} />}
                    {isCopied && 'Copied'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
