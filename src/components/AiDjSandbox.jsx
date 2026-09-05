import React, { useState } from 'react';
import { Bot, Sparkles, Send, Music, ArrowRight, Play, CheckCircle2, Flame, Heart } from 'lucide-react';

export default function AiDjSandbox() {
  const [prompt, setPrompt] = useState('late night coding with rain in Tokyo');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationResult, setGenerationResult] = useState({
    title: 'Neo-Tokyo Cyber Solitude',
    vibe: 'Deep Focus & Ambient Resonance',
    energy: '42% • Low-Mid Flow',
    harmonicRoot: 'D Minor (Camelot 7A)',
    queue: [
      { title: 'Rain on Shinjuku Rooftops', artist: 'Kuro Lofi', duration: '03:12', bpm: 84, key: 'Dm' },
      { title: 'Terminal Window Nostalgia', artist: 'Syntax Drift', duration: '02:48', bpm: 86, key: 'F' },
      { title: 'Cybernetic Haze', artist: 'Aethelgard Ambient', duration: '04:05', bpm: 82, key: 'Dm' },
      { title: 'Midnight Coffee Steam', artist: 'Chiyo Cafe', duration: '03:30', bpm: 88, key: 'Bb' },
    ]
  });

  const promptPresets = [
    { label: '💻 Late Night Coding', prompt: 'late night coding with rain in Tokyo' },
    { label: '🔥 Valorant Ranked Clutches', prompt: 'high adrenaline future bass & dark phonk for gaming clutch moments' },
    { label: '☕ Rainy Lofi Anime Cafe', prompt: 'warm nostalgic acoustic guitar lofi for study & chill coffee vibes' },
    { label: '🏋️ Heavy Gym Deadlift', prompt: 'heavy industrial electro & aggressive bassboost gym pre-workout' },
  ];

  const handleGenerate = (customPrompt = null) => {
    const activePrompt = customPrompt || prompt;
    setIsGenerating(true);

    setTimeout(() => {
      setIsGenerating(false);
      if (activePrompt.toLowerCase().includes('valorant') || activePrompt.toLowerCase().includes('gaming')) {
        setGenerationResult({
          title: 'Radiant Clutch Protocol',
          vibe: 'Maximum Adrenaline & Hyper-focus',
          energy: '94% • Overclocked High Energy',
          harmonicRoot: 'C Minor (Camelot 5A)',
          queue: [
            { title: 'Phantom Strike Overdrive', artist: 'CyberViper', duration: '03:15', bpm: 155, key: 'Cm' },
            { title: 'Spike Defuse Rush', artist: 'Neon Voltage', duration: '02:50', bpm: 160, key: 'Eb' },
            { title: 'Midnight Tokyo Drift', artist: 'Kurogane & Vex', duration: '03:05', bpm: 140, key: 'Cm' },
            { title: 'Ace or Die', artist: 'SubZero Phonk', duration: '02:38', bpm: 165, key: 'Gm' },
          ]
        });
      } else if (activePrompt.toLowerCase().includes('gym') || activePrompt.toLowerCase().includes('deadlift') || activePrompt.toLowerCase().includes('heavy')) {
        setGenerationResult({
          title: 'PR Destroyer 3000',
          vibe: 'Subwoofer Earthquake & Raw Power',
          energy: '99% • Maximum Aggression',
          harmonicRoot: 'F Minor (Camelot 4A)',
          queue: [
            { title: 'Titan Deadlift Anthem', artist: 'Iron Phonk Crew', duration: '02:44', bpm: 160, key: 'Fm' },
            { title: 'Pre-Workout Synapse Burn', artist: 'Vicious Beats', duration: '03:02', bpm: 168, key: 'Ab' },
            { title: 'Zero Mercy Drop', artist: 'Hardstyle Renegades', duration: '03:22', bpm: 175, key: 'Fm' },
            { title: 'Overclocked Pulse', artist: 'Drift Legion', duration: '02:55', bpm: 162, key: 'C' },
          ]
        });
      } else {
        setGenerationResult({
          title: 'Neo-Tokyo Cyber Solitude',
          vibe: 'Deep Focus & Ambient Resonance',
          energy: '42% • Low-Mid Flow',
          harmonicRoot: 'D Minor (Camelot 7A)',
          queue: [
            { title: 'Rain on Shinjuku Rooftops', artist: 'Kuro Lofi', duration: '03:12', bpm: 84, key: 'Dm' },
            { title: 'Terminal Window Nostalgia', artist: 'Syntax Drift', duration: '02:48', bpm: 86, key: 'F' },
            { title: 'Cybernetic Haze', artist: 'Aethelgard Ambient', duration: '04:05', bpm: 82, key: 'Dm' },
            { title: 'Midnight Coffee Steam', artist: 'Chiyo Cafe', duration: '03:30', bpm: 88, key: 'Bb' },
          ]
        });
      }
    }, 600);
  };

  return (
    <section id="aidj" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <Bot size={14} color="#A78BFA" />
            <span>NATURAL LANGUAGE SONG DISCOVERY</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '16px' }}>
            Talk to Your Music with <span className="gradient-text-violet">Shadow AI</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.65 }}>
            Don't waste minutes searching for song titles. Type any mood, scenario, or aesthetic, and watch Shadow AI construct an immaculate, harmonic queue in real-time.
          </p>
        </div>

        {/* Sandbox Container */}
        <div
          className="glass-card"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            borderRadius: '24px',
            padding: '36px',
            background: 'linear-gradient(180deg, rgba(20, 26, 42, 0.85) 0%, rgba(12, 16, 26, 0.95) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
          }}
        >
          {/* Preset Prompts Pills */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600, marginBottom: '10px' }}>
              Test Quick Prompts:
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {promptPresets.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setPrompt(p.prompt);
                    handleGenerate(p.prompt);
                  }}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '100px',
                    background: prompt === p.prompt ? 'rgba(139, 92, 246, 0.3)' : 'rgba(255, 255, 255, 0.04)',
                    border: prompt === p.prompt ? '1px solid #8B5CF6' : '1px solid rgba(255, 255, 255, 0.08)',
                    color: prompt === p.prompt ? '#FFFFFF' : '#CBD5E1',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Prompt Input Bar */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              padding: '8px 10px 8px 18px',
              background: 'rgba(10, 12, 18, 0.9)',
              borderRadius: '16px',
              border: '1px solid rgba(139, 92, 246, 0.4)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
              marginBottom: '32px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#A78BFA' }}>
              <Bot size={20} />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>/askmusic</span>
            </div>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleGenerate();
              }}
              placeholder="Describe what you want to hear (e.g. late night synthwave with analog tape warmth)..."
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#FFFFFF',
                fontSize: '0.95rem'
              }}
            />
            <button
              onClick={() => handleGenerate()}
              className="btn-primary"
              disabled={isGenerating}
              style={{
                padding: '10px 22px',
                fontSize: '0.875rem',
                borderRadius: '10px'
              }}
            >
              {isGenerating ? (
                <>
                  <Sparkles size={16} className="anim-spin-vinyl" />
                  <span>Synthesizing...</span>
                </>
              ) : (
                <>
                  <Sparkles size={16} />
                  <span>Generate Set</span>
                </>
              )}
            </button>
          </div>

          {/* Simulated AI Result Embed */}
          <div
            style={{
              background: 'rgba(15, 19, 28, 0.75)',
              borderRadius: '18px',
              padding: '24px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              position: 'relative'
            }}
          >
            {/* Header of AI response */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                paddingBottom: '18px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: '4px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#34D399',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      border: '1px solid rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    AI VIBE SYNTHESIS COMPLETE
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#64748B' }}>Root Key: {generationResult.harmonicRoot}</span>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF' }}>
                  {generationResult.title}
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.875rem' }}>
                  {generationResult.vibe}
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  textAlign: 'right'
                }}
              >
                <div style={{ fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>
                  Acoustic Energy Meter
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#22D3EE' }}>
                  {generationResult.energy}
                </div>
              </div>
            </div>

            {/* Generated Queue List */}
            <div style={{ marginTop: '18px' }}>
              <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px' }}>
                Curated Harmonic Queue ({generationResult.queue.length} Tracks):
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {generationResult.queue.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.04)',
                      transition: 'background 0.15s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '6px',
                          background: 'rgba(139, 92, 246, 0.15)',
                          color: '#C084FC',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.75rem',
                          fontWeight: 700
                        }}
                      >
                        {idx + 1}
                      </span>
                      <div>
                        <div style={{ color: '#F1F5F9', fontWeight: 600, fontSize: '0.9rem' }}>
                          {item.title}
                        </div>
                        <div style={{ color: '#64748B', fontSize: '0.75rem' }}>
                          {item.artist}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                      <span style={{ color: '#A78BFA', background: 'rgba(139,92,246,0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                        Key: {item.key}
                      </span>
                      <span style={{ color: '#64748B' }}>{item.bpm} BPM</span>
                      <span style={{ color: '#94A3B8' }}>{item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
