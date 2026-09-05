import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, SkipForward, SkipBack, Shuffle, Repeat, Volume2, 
  VolumeX, Bot, Sparkles, Radio, Users, Sliders, ChevronDown, 
  ChevronUp, Check, Music2, Disc 
} from 'lucide-react';
import { demoTracks, dspFilterPresets } from '../data/tracksData';
import { audioSynth } from '../utils/audioSynth';

export default function DiscordPlayerMockup() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(74); // 1:14
  const [volume, setVolume] = useState(85);
  const [isMuted, setIsMuted] = useState(false);
  const [activeFilter, setActiveFilter] = useState('bassboost');
  const [queueOpen, setQueueOpen] = useState(false);
  const [soundSynthesizerEnabled, setSoundSynthesizerEnabled] = useState(false);
  const [loopMode, setLoopMode] = useState('off'); // 'off' | 'track' | 'queue'
  const [isShuffled, setIsShuffled] = useState(false);

  const track = demoTracks[currentTrackIndex];

  // Sync with Web Audio API Synth if enabled
  useEffect(() => {
    const unsub = audioSynth.subscribe(({ isPlaying: synthPlaying }) => {
      setSoundSynthesizerEnabled(synthPlaying);
    });
    return unsub;
  }, []);

  // Track timer simulation
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= track.duration) {
            handleNextTrack();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, track.duration]);

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % demoTracks.length);
    setCurrentTime(0);
  };

  const handlePrevTrack = () => {
    if (currentTime > 4) {
      setCurrentTime(0);
    } else {
      setCurrentTrackIndex((prev) => (prev - 1 + demoTracks.length) % demoTracks.length);
      setCurrentTime(0);
    }
  };

  const togglePlayPause = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    if (soundSynthesizerEnabled) {
      if (nextState) audioSynth.start();
      else audioSynth.stop();
    }
  };

  const toggleSynthSound = () => {
    if (soundSynthesizerEnabled) {
      audioSynth.stop();
      setSoundSynthesizerEnabled(false);
    } else {
      audioSynth.setPreset(activeFilter);
      audioSynth.setVolume(volume / 100);
      audioSynth.start();
      setSoundSynthesizerEnabled(true);
      setIsPlaying(true);
    }
  };

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    audioSynth.setPreset(filterId);
  };

  const formatSeconds = (sec) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progressPercent = (currentTime / track.duration) * 100;

  return (
    <div
      className="discord-widget-wrapper glass-card"
      style={{
        position: 'relative',
        borderRadius: '24px',
        padding: '0',
        overflow: 'hidden',
        border: '1px solid rgba(139, 92, 246, 0.28)',
        background: 'linear-gradient(180deg, rgba(20, 24, 38, 0.95) 0%, rgba(13, 16, 26, 0.98) 100%)',
        boxShadow: '0 24px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px -10px rgba(139, 92, 246, 0.3)',
      }}
    >
      {/* Top Discord Server Channel Status Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 22px',
          background: 'rgba(255, 255, 255, 0.03)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          fontSize: '0.85rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#10B981',
              boxShadow: '0 0 10px #10B981'
            }}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: '#E2E8F0' }}>
            <Radio size={14} color="#06B6D4" />
            <span>Cyberpunk Lounge</span>
            <span style={{ color: '#64748B', fontWeight: 400 }}>#🎧-voice-stream</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '4px',
              background: 'rgba(6, 182, 212, 0.15)',
              color: '#22D3EE',
              border: '1px solid rgba(6, 182, 212, 0.3)'
            }}
          >
            384kbps OPUS
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#94A3B8' }}>
            <Users size={14} />
            <span>18 connected</span>
          </div>
        </div>
      </div>

      {/* Main Player Body */}
      <div style={{ padding: '24px' }}>
        {/* Track Info Header */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
          {/* Cover Art with Ambient Shadow */}
          <div
            style={{
              width: '84px',
              height: '84px',
              borderRadius: '16px',
              background: track.coverGradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.4rem',
              boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.5)',
              flexShrink: 0,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {track.coverArtEmoji}
            {isPlaying && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.4))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Disc size={34} color="rgba(255,255,255,0.7)" className="anim-spin-vinyl" />
              </div>
            )}
          </div>

          {/* Titles & Vibe Badge */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '2px 8px',
                  borderRadius: '100px',
                  background: 'rgba(139, 92, 246, 0.2)',
                  color: '#C4B5FD',
                  border: '1px solid rgba(139, 92, 246, 0.35)'
                }}
              >
                {track.source}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#64748B' }}>BPM {track.bpm} • {track.key}</span>
            </div>

            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#FFFFFF',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                marginBottom: '4px'
              }}
            >
              {track.title}
            </h3>

            <p
              style={{
                fontSize: '0.9rem',
                color: '#94A3B8',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                marginBottom: '8px'
              }}
            >
              {track.artist}
            </p>

            {/* AI AutoDJ status pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.75rem',
                color: '#22D3EE',
                background: 'rgba(6, 182, 212, 0.1)',
                padding: '3px 10px',
                borderRadius: '100px',
                border: '1px solid rgba(6, 182, 212, 0.25)'
              }}
            >
              <Sparkles size={13} />
              <span>AutoDJ: {track.vibeRating}</span>
            </div>
          </div>
        </div>

        {/* Real-time Visualizer Equalizer */}
        <div
          style={{
            height: '38px',
            background: 'rgba(0, 0, 0, 0.25)',
            borderRadius: '10px',
            padding: '4px 12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '3px',
            marginBottom: '16px',
            border: '1px solid rgba(255, 255, 255, 0.04)'
          }}
        >
          {Array.from({ length: 36 }).map((_, i) => {
            const heightMultiplier = isPlaying ? (Math.sin(i * 0.4 + currentTime) * 0.5 + 0.5) : 0.15;
            const barH = Math.max(4, Math.floor(heightMultiplier * 28));
            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${barH}px`,
                  borderRadius: '2px',
                  background:
                    activeFilter === 'bassboost' && i < 12
                      ? 'linear-gradient(180deg, #EC4899, #8B5CF6)'
                      : activeFilter === 'spatial8d'
                      ? 'linear-gradient(180deg, #06B6D4, #6366F1)'
                      : 'linear-gradient(180deg, #8B5CF6, #4F46E5)',
                  transition: 'height 0.12s ease',
                  opacity: isPlaying ? 0.9 : 0.3
                }}
              />
            );
          })}
        </div>

        {/* Progress Bar & Timestamps */}
        <div style={{ marginBottom: '18px' }}>
          <div
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const ratio = Math.max(0, Math.min(1, clickX / rect.width));
              setCurrentTime(Math.floor(ratio * track.duration));
            }}
            style={{
              height: '6px',
              borderRadius: '3px',
              background: 'rgba(255, 255, 255, 0.12)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                width: `${progressPercent}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #8B5CF6, #06B6D4)',
                borderRadius: '3px',
                transition: 'width 0.2s linear'
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.78rem',
              color: '#64748B',
              marginTop: '6px',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <span>{formatSeconds(currentTime)}</span>
            <span>{track.durationStr}</span>
          </div>
        </div>

        {/* Interactive Playback Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => setIsShuffled(!isShuffled)}
              style={{
                background: isShuffled ? 'rgba(139, 92, 246, 0.25)' : 'transparent',
                border: 'none',
                color: isShuffled ? '#C084FC' : '#94A3B8',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
              title="Shuffle queue"
            >
              <Shuffle size={18} />
            </button>
            <button
              onClick={handlePrevTrack}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#E2E8F0',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '8px',
                transition: 'transform 0.1s'
              }}
              title="Previous song"
            >
              <SkipBack size={20} />
            </button>
          </div>

          {/* Glowing Play/Pause Center Button */}
          <button
            onClick={togglePlayPause}
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
              border: 'none',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 0 25px rgba(139, 92, 246, 0.6), inset 0 1px 1px rgba(255,255,255,0.4)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.92)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause size={24} fill="#FFFFFF" /> : <Play size={24} fill="#FFFFFF" style={{ marginLeft: '3px' }} />}
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={handleNextTrack}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#E2E8F0',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '8px'
              }}
              title="Skip to next track"
            >
              <SkipForward size={20} />
            </button>
            <button
              onClick={() => {
                const modes = ['off', 'track', 'queue'];
                const next = modes[(modes.indexOf(loopMode) + 1) % modes.length];
                setLoopMode(next);
              }}
              style={{
                background: loopMode !== 'off' ? 'rgba(139, 92, 246, 0.25)' : 'transparent',
                border: 'none',
                color: loopMode !== 'off' ? '#C084FC' : '#94A3B8',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '8px',
                position: 'relative'
              }}
              title={`Loop: ${loopMode}`}
            >
              <Repeat size={18} />
              {loopMode === 'track' && (
                <span style={{ position: 'absolute', top: '3px', right: '4px', fontSize: '9px', fontWeight: 800 }}>1</span>
              )}
            </button>
          </div>
        </div>

        {/* DSP Filter Selector Pills */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sliders size={13} color="#8B5CF6" /> Real-Time DSP Audio Filter:
            </span>
            <span style={{ fontSize: '0.72rem', color: '#A78BFA', fontWeight: 600 }}>
              {dspFilterPresets.find(p => p.id === activeFilter)?.tag}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
            {dspFilterPresets.slice(0, 4).map((preset) => {
              const isSelected = activeFilter === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => handleFilterChange(preset.id)}
                  style={{
                    padding: '6px 8px',
                    borderRadius: '8px',
                    border: isSelected ? `1px solid ${preset.color}` : '1px solid rgba(255, 255, 255, 0.08)',
                    background: isSelected ? `rgba(${preset.id === 'bassboost' ? '236,72,153' : preset.id === 'spatial8d' ? '6,182,212' : '139,92,246'}, 0.2)` : 'rgba(255, 255, 255, 0.03)',
                    color: isSelected ? '#FFFFFF' : '#94A3B8',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    textAlign: 'center',
                    boxShadow: isSelected ? `0 0 12px ${preset.color}40` : 'none'
                  }}
                >
                  {preset.name.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Audio Volume & Interactive Web Audio Synth Sound Preview Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '12px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)'
          }}
        >
          {/* Sound Synthesizer Preview Trigger */}
          <button
            onClick={toggleSynthSound}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '8px',
              background: soundSynthesizerEnabled ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.05)',
              border: soundSynthesizerEnabled ? '1px solid #10B981' : '1px solid rgba(255, 255, 255, 0.1)',
              color: soundSynthesizerEnabled ? '#34D399' : '#CBD5E1',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Music2 size={14} />
            <span>{soundSynthesizerEnabled ? 'Synth Live (Audio ON)' : 'Test Live Audio FX'}</span>
          </button>

          {/* Volume Control */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => setIsMuted(!isMuted)}
              style={{ background: 'transparent', border: 'none', color: '#94A3B8', cursor: 'pointer' }}
            >
              {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                const val = Number(e.target.value);
                setVolume(val);
                setIsMuted(false);
                audioSynth.setVolume(val / 100);
              }}
              style={{
                width: '80px',
                accentColor: '#8B5CF6',
                cursor: 'pointer'
              }}
            />
          </div>
        </div>

        {/* Up Next Drawer Toggle */}
        <div style={{ marginTop: '14px' }}>
          <button
            onClick={() => setQueueOpen(!queueOpen)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 12px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              color: '#94A3B8',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <span>Up Next in Server Queue ({demoTracks.length - 1} tracks)</span>
            {queueOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>

          {queueOpen && (
            <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {demoTracks
                .filter((_, idx) => idx !== currentTrackIndex)
                .map((t, i) => (
                  <div
                    key={t.id}
                    onClick={() => {
                      const newIdx = demoTracks.findIndex((item) => item.id === t.id);
                      setCurrentTrackIndex(newIdx);
                      setCurrentTime(0);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 10px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      transition: 'background 0.15s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: '#64748B', fontWeight: 600, width: '14px' }}>#{i + 1}</span>
                      <div>
                        <div style={{ color: '#F1F5F9', fontWeight: 600 }}>{t.title}</div>
                        <div style={{ color: '#64748B', fontSize: '0.72rem' }}>{t.artist}</div>
                      </div>
                    </div>
                    <span style={{ color: '#64748B', fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}>
                      {t.durationStr}
                    </span>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
