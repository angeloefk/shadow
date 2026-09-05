import React, { useState } from 'react';
import { 
  Shield, 
  ArrowLeft, 
  Copy, 
  Check, 
  ExternalLink, 
  FileText, 
  AlertCircle, 
  Headphones, 
  Scale, 
  Ban, 
  Sparkles,
  Zap,
  HelpCircle
} from 'lucide-react';

export default function TermsOfService({ onNavigate }) {
  const [copied, setCopied] = useState(false);

  // Fallback to origin or canonical URL
  const currentOrigin = typeof window !== 'undefined' && window.location.origin 
    ? window.location.origin 
    : 'https://shadowmusic.bot';
  const pageUrl = `${currentOrigin}/terms`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const sections = [
    {
      id: 'acceptance',
      icon: <Scale size={20} color="#A78BFA" />,
      title: '1. Acceptance of Terms',
      content: (
        <>
          <p>
            By adding the <strong>Shadow Music</strong> application ("Shadow", "Bot", "we", "us", or "our") to a Discord server (guild), initiating any slash command, streaming audio, or accessing our associated web interfaces, you agree to be bound by these Terms of Service ("Terms").
          </p>
          <p style={{ marginTop: '12px' }}>
            If you do not agree to these Terms, you must immediately remove the Bot from your Discord server and discontinue any interaction with our services. Your continued use of Shadow Music signifies your irrevocable acceptance of these terms in their entirety.
          </p>
        </>
      )
    },
    {
      id: 'service-description',
      icon: <Headphones size={20} color="#22D3EE" />,
      title: '2. Description of Service',
      content: (
        <>
          <p>
            Shadow Music is an advanced Discord audio integration that delivers high-fidelity audio playback (up to 384kbps lossless), real-time Digital Signal Processing (DSP equalizers, 8D audio, bassboost, nightcore, vaporwave), autonomous AI AutoDJ curation, and guild leaderboards.
          </p>
          <p style={{ marginTop: '12px' }}>
            The service is provided online via Discord voice channels. Features, command syntaxes, and audio filters are continuously updated to enhance performance and stability.
          </p>
        </>
      )
    },
    {
      id: 'discord-compliance',
      icon: <Shield size={20} color="#8B5CF6" />,
      title: '3. Discord Terms & Developer Policy Adherence',
      content: (
        <>
          <p>
            Shadow Music operates as a verified third-party application on the Discord platform. As a user or server administrator, you must also strictly comply with:
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>
              <a href="https://discord.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: '#A78BFA', textDecoration: 'underline' }}>
                Discord Terms of Service <ExternalLink size={12} style={{ display: 'inline' }} />
              </a>
            </li>
            <li>
              <a href="https://discord.com/guidelines" target="_blank" rel="noopener noreferrer" style={{ color: '#A78BFA', textDecoration: 'underline' }}>
                Discord Community Guidelines <ExternalLink size={12} style={{ display: 'inline' }} />
              </a>
            </li>
            <li>
              <a href="https://discord.com/developers/docs/policies-and-agreements/developer-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#A78BFA', textDecoration: 'underline' }}>
                Discord Developer Policy <ExternalLink size={12} style={{ display: 'inline' }} />
              </a>
            </li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Any violation of Discord’s overarching policies that occurs via or in connection with Shadow Music may result in immediate termination of your access to the Bot.
          </p>
        </>
      )
    },
    {
      id: 'acceptable-use',
      icon: <Ban size={20} color="#F43F5E" />,
      title: '4. Acceptable Use & Prohibited Conduct',
      content: (
        <>
          <p>When using Shadow Music, you expressly agree NOT to:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginTop: '14px' }}>
            <div style={{ background: 'rgba(244, 63, 94, 0.08)', border: '1px solid rgba(244, 63, 94, 0.25)', borderRadius: '12px', padding: '14px' }}>
              <strong style={{ color: '#FDA4AF', display: 'block', marginBottom: '4px' }}>No Flooding or DoS</strong>
              <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Automating rapid command spam, flooding cluster queues, or attempting Denial-of-Service attacks against bot nodes.</span>
            </div>
            <div style={{ background: 'rgba(244, 63, 94, 0.08)', border: '1px solid rgba(244, 63, 94, 0.25)', borderRadius: '12px', padding: '14px' }}>
              <strong style={{ color: '#FDA4AF', display: 'block', marginBottom: '4px' }}>No Reverse Engineering</strong>
              <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Decompiling, scraping, reverse-engineering our DSP algorithms, AI AutoDJ weights, or proprietary cluster protocols.</span>
            </div>
            <div style={{ background: 'rgba(244, 63, 94, 0.08)', border: '1px solid rgba(244, 63, 94, 0.25)', borderRadius: '12px', padding: '14px' }}>
              <strong style={{ color: '#FDA4AF', display: 'block', marginBottom: '4px' }}>No Malicious Broadcasts</strong>
              <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Streaming ear-rape, screamers, illegal content, hate speech, or audio intended to physically harm user hearing.</span>
            </div>
            <div style={{ background: 'rgba(244, 63, 94, 0.08)', border: '1px solid rgba(244, 63, 94, 0.25)', borderRadius: '12px', padding: '14px' }}>
              <strong style={{ color: '#FDA4AF', display: 'block', marginBottom: '4px' }}>No Commercial Reselling</strong>
              <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Reselling, sublicensing, or charging other guild members access fees to invoke Shadow without written authorization.</span>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'audio-content',
      icon: <Sparkles size={20} color="#F59E0B" />,
      title: '5. Audio Content, Intellectual Property & Non-Hosting Disclaimer',
      content: (
        <>
          <p>
            <strong>Shadow Music does NOT store, upload, distribute, or host audio files on its own infrastructure.</strong>
          </p>
          <p style={{ marginTop: '12px' }}>
            The Bot functions exclusively as an automated dynamic routing proxy (utilizing secure Lavalink audio worker clusters). When a user requests a song via search query or URL, the Bot routes the public stream on-the-fly directly to the requested Discord voice channel.
          </p>
          <p style={{ marginTop: '12px' }}>
            All song titles, album artwork, trademarks, and copyright rights belong exclusively to their respective owners and copyright holders. If you are a copyright holder with concerns, please contact our support team or the upstream content distributor.
          </p>
        </>
      )
    },
    {
      id: 'subscriptions',
      icon: <Zap size={20} color="#10B981" />,
      title: '6. Shadow Pro Subscriptions & Virtual Perks',
      content: (
        <>
          <p>
            Shadow Music offers optional premium tiers ("Shadow Pro", "Server Booster") that unlock high-bitrate streaming nodes (384kbps), extended queue capacity, custom DSP filter chains, and 24/7 channel presence.
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Billing:</strong> Subscriptions are billed on a recurring monthly or annual basis via verified Discord App Subscriptions or Stripe checkout.</li>
            <li><strong>Virtual Perks:</strong> Perks are digital non-tangible goods tied to your Discord User ID or Guild ID.</li>
            <li><strong>Cancellations & Refunds:</strong> You may cancel anytime through Discord settings or our billing portal. Refunds are evaluated on a case-by-case basis within 48 hours of renewal if no significant cluster bandwidth was consumed.</li>
          </ul>
        </>
      )
    },
    {
      id: 'uptime-sla',
      icon: <AlertCircle size={20} color="#60A5FA" />,
      title: '7. Availability, Maintenance & Cluster SLAs',
      content: (
        <>
          <p>
            While our infrastructure targets 99.9% uptime with redundant voice cluster nodes across North America and Europe, we do not guarantee uninterrupted or error-free operation.
          </p>
          <p style={{ marginTop: '12px' }}>
            Temporary outages may occur due to upstream Discord Gateway disruptions, third-party API changes, routine maintenance patches, or unexpected hardware failures. We bear no liability for downtime or lost playlist queues resulting from such events.
          </p>
        </>
      )
    },
    {
      id: 'blacklisting',
      icon: <Ban size={20} color="#C084FC" />,
      title: '8. Access Revocation & Server Blacklisting',
      content: (
        <>
          <p>
            We reserve the right, in our sole discretion, without prior notice or liability, to deny access, ban, or blacklist any Discord User ID or Guild ID from using Shadow Music if we identify:
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li>Breach of these Terms or Discord Community Guidelines.</li>
            <li>Abnormal bot traffic that threatens cluster stability.</li>
            <li>Attempted fraud, chargeback abuse, or payment exploitation.</li>
          </ul>
        </>
      )
    },
    {
      id: 'warranty-liability',
      icon: <Scale size={20} color="#CBD5E1" />,
      title: '9. Disclaimer of Warranties & Limitation of Liability',
      content: (
        <>
          <p style={{ textTransform: 'uppercase', fontSize: '0.85rem', color: '#94A3B8', letterSpacing: '0.04em' }}>
            Provided "As-Is" and "As-Available"
          </p>
          <p style={{ marginTop: '8px' }}>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SHADOW MUSIC AND ITS DEVELOPERS DISCLAIM ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE. IN NO EVENT SHALL THE DEVELOPERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OR INABILITY TO USE THE SERVICE.
          </p>
        </>
      )
    },
    {
      id: 'changes',
      icon: <FileText size={20} color="#A78BFA" />,
      title: '10. Modifications to These Terms',
      content: (
        <>
          <p>
            We may revise these Terms of Service periodically to reflect changes in our bot features, legal requirements, or Discord platform policies. The latest revision date will always be displayed at the top of this page. Continued usage of the Bot following any update constitutes full acceptance of the revised Terms.
          </p>
        </>
      )
    },
    {
      id: 'contact',
      icon: <HelpCircle size={20} color="#22D3EE" />,
      title: '11. Contact & Community Support',
      content: (
        <>
          <p>
            If you have questions, inquiries, or legal concerns regarding these Terms of Service, please reach out to our team:
          </p>
          <div style={{ marginTop: '14px', display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-discord"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              <span>Join Official Support Server</span>
              <ExternalLink size={15} />
            </a>
            <a
              href="mailto:support@shadowmusic.bot"
              className="btn-secondary"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              <span>support@shadowmusic.bot</span>
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
              e.currentTarget.style.background = 'rgba(139, 92, 246, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
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
            <span style={{ color: '#A78BFA' }}>Terms of Service</span>
          </div>
        </div>

        {/* Hero Header */}
        <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
          <div className="badge-glow" style={{ marginBottom: '18px' }}>
            <Shield size={14} color="#A78BFA" />
            <span>DISCORD DEVELOPER COMPLIANT</span>
          </div>

          <h1 
            style={{ 
              fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', 
              fontWeight: 900, 
              letterSpacing: '-0.03em',
              marginBottom: '16px' 
            }}
          >
            Terms of <span className="gradient-text-violet">Service</span>
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '24px' }}>
            These terms govern your use of the Shadow Music Discord bot, website, and related audio streaming services. Please read them carefully.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px', color: '#64748B', fontSize: '0.875rem' }}>
            <div>
              <strong style={{ color: '#CBD5E1' }}>Last Updated:</strong> September 6, 2026
            </div>
            <div>•</div>
            <div>
              <strong style={{ color: '#CBD5E1' }}>Version:</strong> 2.4.0 (Production Release)
            </div>
            <div>•</div>
            <div>
              <strong style={{ color: '#CBD5E1' }}>App:</strong> Shadow Music
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
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(18, 22, 32, 0.95) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.4)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '18px'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#C084FC' }}>
                Discord Developer Portal Setting
              </span>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
              Terms of Service URL
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
            style={{ padding: '11px 22px', fontSize: '0.875rem' }}
          >
            {copied ? (
              <>
                <Check size={16} color="#34D399" />
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

        {/* Content Layout with Quick Nav Sidebar */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '36px', 
            alignItems: 'start' 
          }}
        >
          
          {/* Main Legal Sections */}
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
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#A78BFA')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                    >
                      {sec.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Privacy Policy Link Card */}
            <div 
              className="glass-card" 
              style={{ 
                borderRadius: '20px', 
                padding: '24px', 
                background: 'rgba(6, 182, 212, 0.06)',
                border: '1px solid rgba(6, 182, 212, 0.25)' 
              }}
            >
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                Looking for Privacy Policy?
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.5, marginBottom: '16px' }}>
                Learn how Shadow Music protects your guild data, user IDs, and our strict zero-voice-recording guarantee.
              </p>
              <button
                onClick={() => onNavigate('/privacy')}
                className="btn-secondary"
                style={{ width: '100%', padding: '10px', fontSize: '0.85rem', justifyContent: 'center' }}
              >
                <span>View Privacy Policy</span>
                <ExternalLink size={14} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
