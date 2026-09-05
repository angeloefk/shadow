import React, { useState, useEffect } from 'react';
import { Sliders, Volume2, Headphones, Play, Pause, Sparkles, Check, Copy, Zap, Info } from 'lucide-react';
import { dspFilterPresets } from '../data/tracksData';
import { audioSynth } from '../utils/audioSynth';

export default function DspStudio() {
  const [selectedPresetId, setSelectedPresetId] = useState('bassboost');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [copiedCmd, setCopiedCmd] = useState(false);

  const currentPreset = dspFilterPresets.find((p) => p.id === selectedPresetId) || dspFilterPresets[0];

  useEffect(() => {
    const unsub = audioSynth.subscribe(({ isPlaying }) => {
      setIsAudioPlaying(isPlaying);
    });
    return unsub;
  }, []);

  const handleSelectFilter = (presetId) => {
    setSelectedPresetId(presetId);
    audioSynth.setPreset(presetId);
  };

  const toggleSound = () => {
    if (isAudioPlaying) {
      audioSynth.stop();
      setIsAudioPlaying(false);
    } else {
      audioSynth.setPreset(selectedPresetId);
      audioSynth.start();
      setIsAudioPlaying(true);
    }
  };

  const handleCopyCommand = () => {
    const cmd = `/filter ${selectedPresetId === 'spatial8d' ? '8d' : selectedPresetId}`;
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <section id="dsp-studio" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <Sliders size={14} color="#A78BFA" />
            <span>STUDIO-GRADE DSP SUITE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '16px' }}>
            Interactive <span className="gradient-text-cyan">DSP Filter Studio</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.65 }}>
            Experience how Shadow Music transforms any track in real-time. Select a filter preset below to inspect the frequency response curves and test the audio modulation live.
          </p>
        </div>

        {/* Studio Console Box */}
        <div
          className="glass-card"
          style={{
            maxWidth: '1050px',
            margin: '0 auto',
            borderRadius: '28px',
            padding: '36px',
            background: 'linear-gradient(180deg, rgba(20, 25, 40, 0.9) 0%, rgba(11, 14, 22, 0.95) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8), 0 0 40px -10px rgba(139, 92, 246, 0.25)',
          }}
        >
          {/* Top Preset Buttons Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '12px',
              marginBottom: '32px',
            }}
          >
            {dspFilterPresets.map((preset) => {
              const active = preset.id === selectedPresetId;
              return (
                <button
                  key={preset.id}
                  onClick={() => handleSelectFilter(preset.id)}
                  style={{
                    padding: '16px 14px',
                    borderRadius: '16px',
                    background: active
                      ? 'linear-gradient(145deg, rgba(139, 92, 246, 0.3) 0%, rgba(99, 102, 241, 0.15) 100%)'
                      : 'rgba(255, 255, 255, 0.03)',
                    border: active ? `1px solid ${preset.color}` : '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: active ? `0 0 20px ${preset.color}35` : 'none',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '90px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: active ? '#FFFFFF' : '#E2E8F0' }}>
                      {preset.name}
                    </span>
                    {active && <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: preset.color, boxShadow: `0 0 10px ${preset.color}` }} />}
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: active ? preset.color : '#64748B',
                      background: 'rgba(0,0,0,0.25)',
                      padding: '2px 8px',
                      borderRadius: '100px',
                      alignSelf: 'flex-start'
                    }}
                  >
                    {preset.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Equalizer Frequency Display & Interactive Sound Engine */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '30px',
              alignItems: 'center',
            }}
            className="dsp-interactive-grid"
          >
            {/* Visual Equalizer Spectrum */}
            <div
              style={{
                background: 'rgba(10, 12, 18, 0.8)',
                borderRadius: '20px',
                padding: '24px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
                  <Sliders size={16} color={currentPreset.color} />
                  <span>Real-Time Spectrum Analyzer</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px #10B981' }} />
                  <span>Active DSP Chain: {currentPreset.tag}</span>
                </div>
              </div>

              {/* Dynamic Frequency Visualizer Bars */}
              <div
                style={{
                  height: '160px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  gap: '4px',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {Array.from({ length: 28 }).map((_, i) => {
                  let barHeight = 40;
                  const isBass = i < 9;
                  const isMid = i >= 9 && i < 19;
                  const isTreble = i >= 19;

                  if (selectedPresetId === 'bassboost') {
                    barHeight = isBass ? (110 + Math.sin(i * 0.8) * 35) : (35 + Math.cos(i) * 15);
                  } else if (selectedPresetId === 'spatial8d') {
                    barHeight = 55 + Math.sin(i * 0.5 + (isAudioPlaying ? Date.now() * 0.005 : 0)) * 40;
                  } else if (selectedPresetId === 'nightcore') {
                    barHeight = isTreble ? (115 + Math.sin(i) * 25) : (50 + Math.cos(i) * 20);
                  } else if (selectedPresetId === 'vaporwave') {
                    barHeight = isBass ? (80 + Math.sin(i) * 20) : (25 + Math.cos(i) * 10);
                  } else if (selectedPresetId === 'tremolo') {
                    barHeight = 65 + Math.sin(i * 0.9) * 45;
                  } else {
                    // Master flat
                    barHeight = 60 + Math.sin(i * 0.3) * 20;
                  }

                  return (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${Math.min(150, Math.max(12, barHeight))}px`,
                        borderRadius: '4px 4px 1px 1px',
                        background: isBass && selectedPresetId === 'bassboost'
                          ? 'linear-gradient(180deg, #EC4899 0%, #8B5CF6 100%)'
                          : selectedPresetId === 'spatial8d'
                          ? 'linear-gradient(180deg, #06B6D4 0%, #6366F1 100%)'
                          : `linear-gradient(180deg, ${currentPreset.color} 0%, #4F46E5 100%)`,
                        transition: 'height 0.25s ease',
                        boxShadow: `0 0 10px ${currentPreset.color}30`
                      }}
                    />
                  );
                })}
              </div>

              {/* EQ Frequency Labels */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '10px',
                  fontSize: '0.72rem',
                  color: '#64748B',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <span>32 Hz (Sub)</span>
                <span>120 Hz (Bass)</span>
                <span>1 kHz (Mid)</span>
                <span>6 kHz (Presence)</span>
                <span>16 kHz (Air)</span>
              </div>
            </div>

            {/* Filter Explanation & Live Test Audio Trigger */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: '100px',
                      background: `${currentPreset.color}25`,
                      color: currentPreset.color,
                      border: `1px solid ${currentPreset.color}50`
                    }}
                  >
                    {currentPreset.badge}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Speed: {currentPreset.speed}x</span>
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px' }}>
                  {currentPreset.name}
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.925rem', lineHeight: 1.6 }}>
                  {currentPreset.description}
                </p>
              </div>

              {/* Web Audio API Preview Button */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '16px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#E2E8F0', fontWeight: 600 }}>
                    <Headphones size={16} color="#06B6D4" />
                    <span>In-Browser Live Audio Synthesizer</span>
                  </div>
                </div>

                <button
                  onClick={toggleSound}
                  style={{
                    width: '100%',
                    padding: '12px 18px',
                    borderRadius: '12px',
                    background: isAudioPlaying
                      ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
                      : 'linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)',
                    border: 'none',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: isAudioPlaying ? '0 0 25px rgba(16, 185, 129, 0.5)' : '0 4px 20px rgba(124, 58, 237, 0.4)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {isAudioPlaying ? <Pause size={18} fill="#FFFFFF" /> : <Play size={18} fill="#FFFFFF" />}
                  <span>{isAudioPlaying ? 'Mute Audio Synth' : 'Listen with Filter Applied'}</span>
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '10px', color: '#64748B', fontSize: '0.75rem' }}>
                  <Info size={13} />
                  <span>Use headphones to experience 8D spatial binaural panning.</span>
                </div>
              </div>

              {/* Slash Command Quick Copy */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 16px',
                  borderRadius: '12px',
                  background: 'rgba(0,0,0,0.35)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748B' }}>Discord Command:</span>
                  <code style={{ color: '#C084FC', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 600 }}>
                    /filter {selectedPresetId === 'spatial8d' ? '8d' : selectedPresetId}
                  </code>
                </div>
                <button
                  onClick={handleCopyCommand}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    background: copiedCmd ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                    border: 'none',
                    color: copiedCmd ? '#34D399' : '#CBD5E1',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {copiedCmd ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedCmd ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .dsp-interactive-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
