import React, { useState } from 'react';
import { Copy, Check, Play, Sliders, ListMusic, FileText, Radio, CornerDownRight } from 'lucide-react';

export default function SimpleCommands() {
  const [activeTab, setActiveTab] = useState('play');
  const [copiedCmd, setCopiedCmd] = useState(null);

  const shadowAvatarUrl = '/shadow-avatar.webp';

  const commandsData = [
    {
      id: 'play',
      name: '/play',
      syntax: '/play <song or link>',
      icon: <Play size={15} />,
      userPrompt: 'used /play query: Starboy - The Weeknd',
      embed: {
        borderColor: '#8B5CF6',
        title: 'Now Playing',
        description: '**[The Weeknd - Starboy (ft. Daft Punk)](https://open.spotify.com)**',
        fields: [
          { label: 'Artist', value: 'The Weeknd' },
          { label: 'Duration', value: '03:50 (384kbps Opus)' },
          { label: 'Source', value: 'Spotify Lossless' },
          { label: 'Requested by', value: '@You' },
        ],
        thumbnail: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=160&h=160&fit=crop&q=80',
        footer: 'Server: Cyberpunk Lounge • Queue: 4 tracks',
        buttons: ['Pause', 'Skip', 'Shuffle', 'Lyrics'],
      },
    },
    {
      id: 'queue',
      name: '/queue',
      syntax: '/queue [page]',
      icon: <ListMusic size={15} />,
      userPrompt: 'used /queue page: 1',
      embed: {
        borderColor: '#A855F7',
        title: 'Server Music Queue',
        description: `**Now Playing:**
▶️ **[The Weeknd - Starboy]** [3:50] • *@You*

**Up Next:**
**1.** Daft Punk - Get Lucky [4:08] • *@Alex*
**2.** Post Malone - Circles [3:35] • *@Sarah*
**3.** Metro Boomin - Space Cadet [3:23] • *@Kev*`,
        fields: [
          { label: 'Total Tracks', value: '4 songs' },
          { label: 'Total Duration', value: '15:06' },
          { label: 'Loop Mode', value: 'Off' },
          { label: 'Autoplay', value: 'On' },
        ],
        footer: 'Page 1 of 2 • Use /queue 2 for next page',
        buttons: ['◀ Previous', '1 / 2', 'Next ▶', 'Clear'],
      },
    },
    {
      id: 'filter',
      name: '/filter',
      syntax: '/filter <8d | bassboost | nightcore | lofi | off>',
      icon: <Sliders size={15} />,
      userPrompt: 'used /filter type: 8d',
      embed: {
        borderColor: '#06B6D4',
        title: 'DSP Audio Filter Applied',
        description: 'Applied **Spatial 8D Audio** filter. The sound is now rotating in 360° binaural stereo.',
        fields: [
          { label: 'Active Preset', value: '8D Binaural Spatial' },
          { label: 'Processing Node', value: 'Cluster EU-01 (Opus)' },
          { label: 'Latency', value: '8ms' },
          { label: 'Status', value: 'Active' },
        ],
        footer: 'Tip: Use /filter off anytime to reset audio',
        buttons: ['Bass Boost', 'Nightcore', '8D Audio', 'Lo-Fi', 'Reset'],
      },
    },
    {
      id: 'lyrics',
      name: '/lyrics',
      syntax: '/lyrics [song name]',
      icon: <FileText size={15} />,
      userPrompt: 'used /lyrics',
      embed: {
        borderColor: '#10B981',
        title: 'Lyrics: The Weeknd — Starboy',
        description: `*I'm tryna put you in the worst mood, ah*
*P1 cleaner than your church shoes, ah*
*Milli point two just to hurt you, ah*
*All red Lamb' just to tease you, ah*
*None of these toys on lease too, ah...*`,
        fields: [
          { label: 'Track', value: 'Starboy' },
          { label: 'Source', value: 'Genius Synced' },
        ],
        footer: 'Synced lyrics • Line 1-5 of 42',
        buttons: ['Refresh', 'Full Lyrics'],
      },
    },
    {
      id: '247',
      name: '/247',
      syntax: '/247',
      icon: <Radio size={15} />,
      userPrompt: 'used /247',
      embed: {
        borderColor: '#EAB308',
        title: '24/7 Voice Mode',
        description: 'Shadow will now stay in **#voice-lounge** permanently without disconnecting when members leave.',
        fields: [
          { label: 'Room', value: '#voice-lounge' },
          { label: 'Auto-Reconnect', value: 'Enabled' },
          { label: 'Cluster', value: 'Persistent' },
          { label: 'Uptime', value: '99.98%' },
        ],
        footer: 'Run /247 again anytime to disable',
        buttons: ['Disable 24/7', 'Switch Channel'],
      },
    },
  ];

  const quickReference = [
    { cmd: '/pause', syntax: '/pause', desc: 'Temporarily pause current playback' },
    { cmd: '/resume', syntax: '/resume', desc: 'Resume paused playback' },
    { cmd: '/skip', syntax: '/skip [number]', desc: 'Skip to the next song or index in queue' },
    { cmd: '/volume', syntax: '/volume <1-100>', desc: 'Adjust master bot volume for the voice channel' },
    { cmd: '/stop', syntax: '/stop', desc: 'Clear queue, stop music, and leave channel' },
    { cmd: '/shuffle', syntax: '/shuffle', desc: 'Randomize the upcoming queue order' },
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
    <section id="commands" style={{ padding: '110px 0', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">
        
        {/* Section Heading: Heading -> Short description -> Content */}
        <div style={{ maxWidth: '640px', marginBottom: '50px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '14px', letterSpacing: '-0.02em', color: '#FFFFFF' }}>
            Slash commands in action.
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Type <code style={{ color: '#E2E8F0', background: 'rgba(255,255,255,0.06)', padding: '2px 6px', borderRadius: '4px' }}>/</code> in your Discord server to access intuitive controls with auto-completion.
          </p>
        </div>

        {/* Command Selector Tabs - Simple, Clean, Non-Glowing */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '24px',
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
                  padding: '9px 16px',
                  borderRadius: '8px',
                  background: isSelected ? '#1E2333' : 'transparent',
                  border: isSelected ? '1px solid rgba(139, 92, 246, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
                  color: isSelected ? '#FFFFFF' : '#94A3B8',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {cmd.icon}
                <span>{cmd.name}</span>
              </button>
            );
          })}
        </div>

        {/* Live Discord Message Preview - Authentic Discord Styling, No Neon Halos */}
        <div
          style={{
            maxWidth: '900px',
            borderRadius: '12px',
            background: '#1E1F22',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            overflow: 'hidden',
            marginBottom: '60px',
          }}
        >
          {/* Top Discord Bar */}
          <div
            style={{
              padding: '10px 18px',
              background: '#2B2D31',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.8rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#949BA4' }}>
              <span style={{ color: '#8B5CF6', fontWeight: 700 }}>#</span>
              <span style={{ color: '#F2F3F5', fontWeight: 600 }}>music-commands</span>
            </div>

            <button
              onClick={() => handleCopy(activeCmd.name)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: copiedCmd === activeCmd.name ? '#34D399' : '#DBDEE1',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {copiedCmd === activeCmd.name ? <Check size={12} /> : <Copy size={12} />}
              <span>{copiedCmd === activeCmd.name ? 'Copied' : `Copy ${activeCmd.name}`}</span>
            </button>
          </div>

          {/* Discord Chat Area */}
          <div style={{ padding: '20px' }}>
            
            {/* User Interaction Line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#949BA4', fontSize: '0.8rem' }}>
              <CornerDownRight size={13} color="#64748B" />
              <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#5865F2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#FFF' }}>
                U
              </div>
              <span style={{ color: '#F2F3F5', fontWeight: 600 }}>You</span>
              <span>{activeCmd.userPrompt}</span>
            </div>

            {/* Shadow Bot Response */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <img
                src={shadowAvatarUrl}
                alt="Shadow"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  flexShrink: 0,
                }}
                onError={(e) => {
                  e.target.src = 'https://cdn.discordapp.com/avatars/1352679776036589648/a_2b85e7ea42101ad3e3160c98880f3598.webp?size=1024';
                }}
              />

              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 600, color: '#F2F3F5', fontSize: '0.95rem' }}>Shadow</span>
                  <span
                    style={{
                      background: '#5865F2',
                      color: '#FFFFFF',
                      fontSize: '0.625rem',
                      fontWeight: 700,
                      padding: '1px 5px',
                      borderRadius: '3px',
                      textTransform: 'uppercase',
                    }}
                  >
                    ✓ BOT
                  </span>
                  <span style={{ color: '#949BA4', fontSize: '0.75rem' }}>Today at 2:45 PM</span>
                </div>

                {/* Discord Embed */}
                <div
                  style={{
                    maxWidth: '540px',
                    borderRadius: '6px',
                    background: '#2B2D31',
                    borderLeft: `4px solid ${activeCmd.embed.borderColor}`,
                    padding: '14px 16px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '14px' }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: activeCmd.embed.borderColor, marginBottom: '4px' }}>
                        {activeCmd.embed.title}
                      </div>

                      <div style={{ color: '#DBDEE1', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '10px', whiteSpace: 'pre-line' }}>
                        {activeCmd.embed.description}
                      </div>

                      {/* Embed Fields */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', marginBottom: '10px' }}>
                        {activeCmd.embed.fields.map((f, i) => (
                          <div key={i}>
                            <div style={{ fontSize: '0.7rem', color: '#949BA4', fontWeight: 600, textTransform: 'uppercase' }}>
                              {f.label}
                            </div>
                            <div style={{ fontSize: '0.8rem', color: '#F2F3F5' }}>
                              {f.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div style={{ fontSize: '0.72rem', color: '#949BA4', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '6px' }}>
                        {activeCmd.embed.footer}
                      </div>
                    </div>

                    {activeCmd.embed.thumbnail && (
                      <img
                        src={activeCmd.embed.thumbnail}
                        alt="Thumbnail"
                        style={{ width: '60px', height: '60px', borderRadius: '6px', objectFit: 'cover', flexShrink: 0 }}
                      />
                    )}
                  </div>
                </div>

                {/* Discord Embed Buttons */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '8px' }}>
                  {activeCmd.embed.buttons.map((btn, bIdx) => (
                    <button
                      key={bIdx}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '4px',
                        background: '#383A40',
                        border: 'none',
                        color: '#DBDEE1',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: 'default',
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

        {/* Clean Reference Table for Other Commands - Layout Variety (Table, not cards!) */}
        <div style={{ maxWidth: '900px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '16px' }}>
            Quick command reference
          </h3>

          <div
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {quickReference.map((row) => {
              const isCopied = copiedCmd === row.cmd;
              return (
                <div
                  key={row.cmd}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    gap: '16px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', flex: 1, minWidth: 0 }}>
                    <code
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        color: '#FFFFFF',
                        minWidth: '90px',
                      }}
                    >
                      {row.cmd}
                    </code>
                    <span style={{ color: '#94A3B8', fontSize: '0.875rem' }}>
                      {row.desc}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopy(row.cmd)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: isCopied ? '#34D399' : '#94A3B8',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      flexShrink: 0,
                    }}
                  >
                    {isCopied ? <Check size={12} /> : <Copy size={12} />}
                    <span>{isCopied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
