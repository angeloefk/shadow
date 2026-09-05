import React, { useState } from 'react';
import { 
  Lock, 
  ArrowLeft, 
  Copy, 
  Check, 
  ExternalLink, 
  MicOff, 
  ShieldCheck, 
  Trash2, 
  Database, 
  Key, 
  Server, 
  Sparkles,
  HelpCircle
} from 'lucide-react';

export default function PrivacyPolicy({ onNavigate }) {
  const [copied, setCopied] = useState(false);

  // Fallback to origin or canonical URL
  const currentOrigin = typeof window !== 'undefined' && window.location.origin 
    ? window.location.origin 
    : 'https://shadowmusic.bot';
  const pageUrl = `${currentOrigin}/privacy`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const sections = [
    {
      id: 'collection',
      icon: <Database size={20} color="#22D3EE" />,
      title: '1. Information We Collect',
      content: (
        <>
          <p>
            Shadow Music is designed with strict data minimization principles. We only collect and process the minimal technical telemetry necessary to provide audio streaming, manage music queues, and enforce server permissions:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginTop: '16px' }}>
            <div style={{ background: 'rgba(34, 211, 238, 0.05)', border: '1px solid rgba(34, 211, 238, 0.2)', borderRadius: '12px', padding: '16px' }}>
              <strong style={{ color: '#67E8F9', display: 'block', marginBottom: '6px' }}>Discord Identifiers</strong>
              <span style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.5 }}>
                Your public Discord User ID, Guild (Server) ID, Voice Channel ID, and Text Channel ID to authenticate slash commands and route audio.
              </span>
            </div>
            <div style={{ background: 'rgba(34, 211, 238, 0.05)', border: '1px solid rgba(34, 211, 238, 0.2)', borderRadius: '12px', padding: '16px' }}>
              <strong style={{ color: '#67E8F9', display: 'block', marginBottom: '6px' }}>Playback & Queue Requests</strong>
              <span style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.5 }}>
                Requested song titles, URLs, duration, and requesting user IDs to display now-playing overlays, manage the server queue, and calculate listening leaderboards.
              </span>
            </div>
            <div style={{ background: 'rgba(34, 211, 238, 0.05)', border: '1px solid rgba(34, 211, 238, 0.2)', borderRadius: '12px', padding: '16px' }}>
              <strong style={{ color: '#67E8F9', display: 'block', marginBottom: '6px' }}>Custom Preferences</strong>
              <span style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.5 }}>
                Custom server volume defaults, 24/7 channel bindings, saved DSP equalizer presets, and user playlist favorites explicitly created via bot commands.
              </span>
            </div>
            <div style={{ background: 'rgba(34, 211, 238, 0.05)', border: '1px solid rgba(34, 211, 238, 0.2)', borderRadius: '12px', padding: '16px' }}>
              <strong style={{ color: '#67E8F9', display: 'block', marginBottom: '6px' }}>Anonymized Telemetry</strong>
              <span style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.5 }}>
                Cluster response latency, audio node ping, and command error traces to diagnose service health without associating personal identities.
              </span>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'voice-guarantee',
      icon: <MicOff size={20} color="#F43F5E" />,
      title: '2. Zero Voice Recording & Chat Monitoring Guarantee',
      content: (
        <>
          <div 
            style={{ 
              background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.12) 0%, rgba(18, 22, 32, 0.8) 100%)', 
              border: '1px solid rgba(244, 63, 94, 0.35)', 
              borderRadius: '16px', 
              padding: '20px',
              marginBottom: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <MicOff size={20} color="#FDA4AF" />
              <strong style={{ color: '#FFFFFF', fontSize: '1rem' }}>We Never Record Or Listen To Your Voice</strong>
            </div>
            <p style={{ color: '#CBD5E1', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Shadow Music only connects as an audio sender in Discord voice channels. The bot does NOT request or receive incoming voice audio streams from Discord users. We do not listen to, record, monitor, transcribe, or store any microphone audio whatsoever.
            </p>
          </div>
          <p>
            Furthermore, Shadow Music does not read, index, or store your private text messages, direct messages (DMs), or chat histories. The bot only reads command payloads directly invoked via Discord Slash Commands (e.g. <code>/play</code>, <code>/volume</code>).
          </p>
        </>
      )
    },
    {
      id: 'purpose',
      icon: <Sparkles size={20} color="#A78BFA" />,
      title: '3. How We Use Collected Data',
      content: (
        <>
          <p>We process collected data exclusively for the following legitimate purposes:</p>
          <ul style={{ paddingLeft: '20px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Audio Playback Delivery:</strong> Connecting our Lavalink cluster workers to the requested guild voice channel and decoding requested media streams.</li>
            <li><strong>AI AutoDJ Autonomous Recommendations:</strong> Analyzing previously queued track acoustic tags and genres to auto-queue harmonious recommendations when queue completes.</li>
            <li><strong>Server Music Leaderboards:</strong> Aggregating minutes listened and most requested tracks within each community guild.</li>
            <li><strong>Abuse Prevention:</strong> Detecting automated API spam, DDoS flooding, or unauthorized subscription sharing to maintain cluster stability for all servers.</li>
          </ul>
        </>
      )
    },
    {
      id: 'third-parties',
      icon: <Server size={20} color="#F59E0B" />,
      title: '4. Third-Party Integrations & External APIs',
      content: (
        <>
          <p>
            To fulfill music streaming requests and operate our cloud clusters, Shadow Music interacts with select trusted third-party providers:
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Discord Inc.:</strong> Interaction handling, OAuth2 verification, and voice gateway protocols.</li>
            <li><strong>Audio Streaming Proxies:</strong> Public search endpoints (YouTube, Spotify metadata API, SoundCloud) accessed anonymously on-the-fly to retrieve track metadata and public audio streams.</li>
            <li><strong>Payment Gateways:</strong> Stripe and Discord App Subscriptions for secure billing tokenization. We never see or store your raw credit card numbers.</li>
            <li><strong>Hosting Providers:</strong> Secure enterprise cloud servers (OVH, Hetzner, AWS) hosting our containerized Lavalink audio workers.</li>
          </ul>
        </>
      )
    },
    {
      id: 'security-retention',
      icon: <Key size={20} color="#10B981" />,
      title: '5. Data Security, Encryption & Retention Periods',
      content: (
        <>
          <p>
            We implement industry-standard cryptographic practices to safeguard all stored records:
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Encryption:</strong> All database storage (guild settings, saved playlists) is encrypted at rest using AES-256. All bot network traffic is transmitted using TLS 1.3.</li>
            <li><strong>Queue Data Lifecycle:</strong> Active track queues and current player status are stored strictly in-memory (RAM) and are permanently destroyed as soon as the playback session terminates or the Bot leaves the voice channel.</li>
            <li><strong>Server Data Retention:</strong> Guild settings and leaderboard stats remain active while the bot remains in the server. If the Bot is removed from a server for more than 30 consecutive days, associated server records are scheduled for automated deletion.</li>
          </ul>
        </>
      )
    },
    {
      id: 'user-rights',
      icon: <Trash2 size={20} color="#EC4899" />,
      title: '6. Your Data Rights & Instant Data Deletion (GDPR / CCPA)',
      content: (
        <>
          <p>
            Under the European Union General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA), you retain full rights to review, export, or delete your data at any time:
          </p>
          <div 
            style={{ 
              marginTop: '14px', 
              background: 'rgba(236, 72, 153, 0.08)', 
              border: '1px solid rgba(236, 72, 153, 0.25)', 
              borderRadius: '12px', 
              padding: '16px' 
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <Trash2 size={16} color="#F472B6" />
              <strong style={{ color: '#FFFFFF' }}>Instant Data Purge Command</strong>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#CBD5E1', lineHeight: 1.6 }}>
              Any user can run the <code>/data-delete</code> slash command in any server where Shadow Music is present to instantly purge all personal leaderboard statistics, saved playlists, and stored preferences within 5 seconds.
            </p>
          </div>
          <p style={{ marginTop: '12px' }}>
            Alternatively, server owners or users can email us at <a href="mailto:privacy@shadowmusic.bot" style={{ color: '#22D3EE' }}>privacy@shadowmusic.bot</a> with your Discord User ID, and our data protection officer will manually scrub all associated records across all clusters within 48 hours.
          </p>
        </>
      )
    },
    {
      id: 'children',
      icon: <ShieldCheck size={20} color="#60A5FA" />,
      title: '7. Children’s Online Privacy Protection (COPPA)',
      content: (
        <>
          <p>
            Shadow Music is not intended for or directed toward children under the age of 13 (or under 16 in certain European jurisdictions, in accordance with Discord’s minimum age terms). We do not knowingly collect or solicit personal information from children under these age limits.
          </p>
          <p style={{ marginTop: '10px' }}>
            If we learn that we have inadvertently collected data from a child under the required age, we will expeditiously delete that information from our servers upon notification.
          </p>
        </>
      )
    },
    {
      id: 'contact-privacy',
      icon: <HelpCircle size={20} color="#CBD5E1" />,
      title: '8. Privacy Questions & Data Protection Officer',
      content: (
        <>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data processing practices, please contact us:
          </p>
          <div style={{ marginTop: '14px', display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            <a
              href="mailto:privacy@shadowmusic.bot"
              className="btn-secondary"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              <span>privacy@shadowmusic.bot</span>
            </a>
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-discord"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              <span>Join Discord Support</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </>
      )
    }
  ];

  return (
    <div style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* Breadcrumb Navigation & Back to Home */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            marginBottom: '32px',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <button
            onClick={() => onNavigate('/')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '100px',
              padding: '8px 18px',
              color: '#CBD5E1',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: 600,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(6, 182, 212, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = '#CBD5E1';
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#64748B' }}>
            <span 
              onClick={() => onNavigate('/')} 
              style={{ cursor: 'pointer', color: '#94A3B8' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
            >
              Home
            </span>
            <span>/</span>
            <span>Legal</span>
            <span>/</span>
            <span style={{ color: '#22D3EE' }}>Privacy Policy</span>
          </div>
        </div>

        {/* Hero Header */}
        <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
          <div className="badge-glow badge-glow-cyan" style={{ marginBottom: '18px' }}>
            <Lock size={14} color="#22D3EE" />
            <span>PRIVACY-FIRST ARCHITECTURE</span>
          </div>

          <h1 
            style={{ 
              fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', 
              fontWeight: 900, 
              letterSpacing: '-0.03em',
              marginBottom: '16px' 
            }}
          >
            Privacy <span className="gradient-text-cyan">Policy</span>
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '24px' }}>
            Transparent, zero-voice-recording privacy standards for your Discord server. Learn exactly what data is processed and how it is secured.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px', color: '#64748B', fontSize: '0.875rem' }}>
            <div>
              <strong style={{ color: '#CBD5E1' }}>Last Updated:</strong> September 6, 2026
            </div>
            <div>•</div>
            <div>
              <strong style={{ color: '#CBD5E1' }}>GDPR & CCPA:</strong> Fully Compliant
            </div>
            <div>•</div>
            <div>
              <strong style={{ color: '#CBD5E1' }}>Microphone Recording:</strong> 0% (Never Recorded)
            </div>
          </div>
        </div>

        {/* Discord Developer Portal URL Quick-Copy Card */}
        <div 
          className="glass-card"
          style={{
            padding: '24px 28px',
            marginBottom: '40px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.12) 0%, rgba(18, 22, 32, 0.95) 100%)',
            border: '1px solid rgba(6, 182, 212, 0.4)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '18px'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#67E8F9' }}>
                Discord Developer Portal Setting
              </span>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
              Privacy Policy URL
            </div>
            <code 
              style={{ 
                background: 'rgba(0, 0, 0, 0.45)', 
                padding: '4px 10px', 
                borderRadius: '6px', 
                fontSize: '0.85rem', 
                color: '#22D3EE',
                fontFamily: 'var(--font-mono)'
              }}
            >
              {pageUrl}
            </code>
          </div>

          <button
            onClick={copyToClipboard}
            className="btn-primary"
            style={{ 
              padding: '11px 22px', 
              fontSize: '0.875rem',
              background: 'linear-gradient(135deg, #0284C7 0%, #06B6D4 100%)',
              boxShadow: '0 4px 24px rgba(6, 182, 212, 0.45)'
            }}
          >
            {copied ? (
              <>
                <Check size={16} color="#FFFFFF" />
                <span>Copied URL!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copy URL for Discord</span>
              </>
            )}
          </button>
        </div>

        {/* Content Layout with Sticky Sidebar */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '36px', 
            alignItems: 'start' 
          }}
        >
          
          {/* Main Privacy Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {sections.map((section) => (
              <div 
                key={section.id} 
                id={section.id}
                className="glass-card"
                style={{
                  borderRadius: '20px',
                  padding: '30px',
                  background: 'rgba(18, 22, 32, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div 
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '12px', 
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {section.icon}
                  </div>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF' }}>
                    {section.title}
                  </h2>
                </div>
                <div style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Sidebar Navigation */}
          <div 
            style={{ 
              position: 'sticky', 
              top: '100px', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '20px' 
            }}
          >
            <div 
              className="glass-card" 
              style={{ 
                borderRadius: '20px', 
                padding: '24px', 
                border: '1px solid rgba(255, 255, 255, 0.08)' 
              }}
            >
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                On This Page
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
                {sections.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      style={{
                        color: '#94A3B8',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'color 0.2s ease',
                        padding: '3px 0'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#22D3EE')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                    >
                      {sec.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Terms of Service Link Card */}
            <div 
              className="glass-card" 
              style={{ 
                borderRadius: '20px', 
                padding: '24px', 
                background: 'rgba(139, 92, 246, 0.06)',
                border: '1px solid rgba(139, 92, 246, 0.25)' 
              }}
            >
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                Looking for Terms of Service?
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.5, marginBottom: '16px' }}>
                Read our acceptable use rules, audio non-hosting disclaimers, and cluster SLAs.
              </p>
              <button
                onClick={() => onNavigate('/terms')}
                className="btn-secondary"
                style={{ width: '100%', padding: '10px', fontSize: '0.85rem', justifyContent: 'center' }}
              >
                <span>View Terms of Service</span>
                <ExternalLink size={14} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
