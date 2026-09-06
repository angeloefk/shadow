import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Disc, Users } from 'lucide-react';
import { demoTracks } from '../data/tracksData';

export default function DiscordPlayerMockup() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(74); // 1:14
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [activeFilter, setActiveFilter] = useState('bassboost');

  const track = demoTracks[currentTrackIndex];

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

  const formatSeconds = (sec) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progressPercent = (currentTime / track.duration) * 100;

  const filters = [
    { id: 'normal', name: 'Normal' },
    { id: 'bassboost', name: 'Bass Boost' },
    { id: '8d', name: '8D Audio' },
    { id: 'nightcore', name: 'Nightcore' },
  ];

  return (
    <div
      className="discord-widget-wrapper"
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        background: '#1E1F22',
        boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.6)',
      }}
    >
      {/* Top Discord Voice Channel Status Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
          background: 'rgba(255, 255, 255, 0.03)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          fontSize: '0.825rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <img
              src="/shadow-avatar.webp"
              alt="Shadow Bot"
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '1px solid rgba(139, 92, 246, 0.5)',
              }}
              onError={(e) => {
                e.target.src = 'https://cdn.discordapp.com/avatars/1352679776036589648/a_2b85e7ea42101ad3e3160c98880f3598.webp?size=1024';
              }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: '-1px',
                right: '-1px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                border: '1.5px solid #141826',
                boxShadow: '0 0 6px #10B981',
              }}
            />
          </div>
          <span style={{ fontWeight: 600, color: '#E2E8F0' }}>#voice-lounge</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              padding: '2px 7px',
              borderRadius: '4px',
              background: 'rgba(6, 182, 212, 0.15)',
              color: '#22D3EE',
              border: '1px solid rgba(6, 182, 212, 0.3)',
            }}
          >
            384kbps HD
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94A3B8' }}>
            <Users size={13} />
            <span>12</span>
          </div>
        </div>
      </div>

      {/* Main Player Body */}
      <div style={{ padding: '22px' }}>
        {/* Track Info */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '18px' }}>
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '14px',
              background: track.coverGradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              boxShadow: '0 8px 20px -4px rgba(139, 92, 246, 0.4)',
              flexShrink: 0,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {track.coverArtEmoji}
            {isPlaying && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.35))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Disc size={28} color="rgba(255,255,255,0.75)" className="anim-spin-vinyl" />
              </div>
            )}
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '1px 6px',
                  borderRadius: '4px',
                  background: 'rgba(139, 92, 246, 0.2)',
                  color: '#C4B5FD',
                }}
              >
                {track.source}
              </span>
            </div>

            <h3
              style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#FFFFFF',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                marginBottom: '2px',
              }}
            >
              {track.title}
            </h3>

            <p
              style={{
                fontSize: '0.85rem',
                color: '#94A3B8',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                margin: 0,
              }}
            >
              {track.artist}
            </p>
          </div>
        </div>

        {/* Visualizer Equalizer */}
        <div
          style={{
            height: '32px',
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '8px',
            padding: '4px 10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2px',
            marginBottom: '14px',
          }}
        >
          {Array.from({ length: 30 }).map((_, i) => {
            const heightMultiplier = isPlaying ? (Math.sin(i * 0.45 + currentTime) * 0.5 + 0.5) : 0.15;
            const barH = Math.max(3, Math.floor(heightMultiplier * 24));
            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${barH}px`,
                  borderRadius: '2px',
                  background: 'linear-gradient(180deg, #8B5CF6, #06B6D4)',
                  transition: 'height 0.12s ease',
                  opacity: isPlaying ? 0.9 : 0.3,
                }}
              />
            );
          })}
        </div>

        {/* Progress Bar */}
        <div style={{ marginBottom: '16px' }}>
          <div
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const ratio = Math.max(0, Math.min(1, clickX / rect.width));
              setCurrentTime(Math.floor(ratio * track.duration));
            }}
            style={{
              height: '5px',
              borderRadius: '3px',
              background: 'rgba(255, 255, 255, 0.1)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${progressPercent}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #8B5CF6, #06B6D4)',
                borderRadius: '3px',
                transition: 'width 0.2s linear',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.75rem',
              color: '#64748B',
              marginTop: '5px',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <span>{formatSeconds(currentTime)}</span>
            <span>{track.durationStr}</span>
          </div>
        </div>

        {/* Playback Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '18px',
          }}
        >
          <button
            onClick={handlePrevTrack}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#CBD5E1',
              cursor: 'pointer',
              padding: '6px',
            }}
            title="Previous track"
          >
            <SkipBack size={18} />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
              border: 'none',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
              transition: 'transform 0.15s ease',
            }}
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause size={20} fill="#FFFFFF" /> : <Play size={20} fill="#FFFFFF" style={{ marginLeft: '2px' }} />}
          </button>

          <button
            onClick={handleNextTrack}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#CBD5E1',
              cursor: 'pointer',
              padding: '6px',
            }}
            title="Next track"
          >
            <SkipForward size={18} />
          </button>
        </div>

        {/* Filter Selection Pills */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', marginBottom: '16px' }}>
          {filters.map((f) => {
            const isSel = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                style={{
                  padding: '5px',
                  borderRadius: '6px',
                  border: isSel ? '1px solid #8B5CF6' : '1px solid rgba(255, 255, 255, 0.07)',
                  background: isSel ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255, 255, 255, 0.02)',
                  color: isSel ? '#FFFFFF' : '#94A3B8',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.15s ease',
                }}
              >
                {f.name}
              </button>
            );
          })}
        </div>

        {/* Volume Slider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '10px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94A3B8', fontSize: '0.75rem' }}>
            <span>Volume: {isMuted ? 0 : volume}%</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => setIsMuted(!isMuted)}
              style={{ background: 'transparent', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: 0 }}
            >
              {isMuted || volume === 0 ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                setVolume(Number(e.target.value));
                setIsMuted(false);
              }}
              style={{
                width: '75px',
                accentColor: '#8B5CF6',
                cursor: 'pointer',
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
