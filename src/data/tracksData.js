export const demoTracks = [
  {
    id: 'track-1',
    title: 'Cosmic Horizon',
    artist: 'Shadow Collective ft. Lyra',
    album: 'Neon Cyberpunk Vol. 1',
    duration: 218, // 3:38
    durationStr: '03:38',
    coverGradient: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
    coverArtEmoji: '🌌',
    genre: 'Synthwave / Lofi',
    vibeRating: 'Late Night Chill • 98% resonance',
    bitrate: '384kbps Opus Lossless',
    bpm: 92,
    key: 'F# Minor',
    source: 'Spotify HiFi'
  },
  {
    id: 'track-2',
    title: 'Midnight Tokyo Drift',
    artist: 'Kurogane & Vex',
    album: 'Neo Shinjuku Sessions',
    duration: 185, // 3:05
    durationStr: '03:05',
    coverGradient: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
    coverArtEmoji: '⚡',
    genre: 'Future Bass / Phonk',
    vibeRating: 'High Energy • 96% resonance',
    bitrate: '384kbps Opus Lossless',
    bpm: 140,
    key: 'C Minor',
    source: 'SoundCloud Pro'
  },
  {
    id: 'track-3',
    title: 'Starlight Reverie',
    artist: 'Aethelgard Ambient',
    album: 'Deep Focus & Flow',
    duration: 264, // 4:24
    durationStr: '04:24',
    coverGradient: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
    coverArtEmoji: '✨',
    genre: 'Ambient Chillout',
    vibeRating: 'Deep Focus • 99% resonance',
    bitrate: '384kbps Opus Lossless',
    bpm: 80,
    key: 'A Major',
    source: 'YouTube Music'
  },
  {
    id: 'track-4',
    title: 'Phantom Overdrive',
    artist: 'CyberViper',
    album: 'Overclocked Matrix',
    duration: 198, // 3:18
    durationStr: '03:18',
    coverGradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
    coverArtEmoji: '🔥',
    genre: 'Industrial Electro',
    vibeRating: 'Gaming Rush • 94% resonance',
    bitrate: '384kbps Opus Lossless',
    bpm: 165,
    key: 'D Minor',
    source: 'Apple Music'
  }
];

export const dspFilterPresets = [
  {
    id: 'normal',
    name: 'Master Flat',
    badge: 'Standard',
    description: 'Lossless studio master audio curve with neutral frequency response.',
    tag: 'Hi-Fi 384kbps',
    color: '#8B5CF6',
    speed: 1.0,
    bassGain: 0,
    isPanned: false,
    trebleGain: 0
  },
  {
    id: 'bassboost',
    name: 'Bassboost Ultra',
    badge: 'DSP Favorite',
    description: 'Rich low-end saturation boosting sub-bass frequencies below 120Hz by +12dB.',
    tag: 'Rumble Subwoofer',
    color: '#EC4899',
    speed: 1.0,
    bassGain: 12,
    isPanned: false,
    trebleGain: -2
  },
  {
    id: 'spatial8d',
    name: '8D Spatial Audio',
    badge: 'Surround 360°',
    description: 'Binaural psychoacoustic panning that rotates fluidly around your headphones.',
    tag: 'Use Headphones',
    color: '#06B6D4',
    speed: 1.0,
    bassGain: 3,
    isPanned: true,
    trebleGain: 2
  },
  {
    id: 'nightcore',
    name: 'Nightcore Boost',
    badge: 'Tempo Shift',
    description: 'High tempo speedup (+18%) and pitch increase (+2 semitones) for energetic drops.',
    tag: '+18% Speed / Sharp',
    color: '#F59E0B',
    speed: 1.2,
    bassGain: 1,
    isPanned: false,
    trebleGain: 4
  },
  {
    id: 'vaporwave',
    name: 'Vaporwave Tape',
    badge: 'Slowed + Reverb',
    description: 'Smooth vintage tape degradation, slowed playback (-16%) with warm hall reverb.',
    tag: '-16% Slow / Nostalgic',
    color: '#A855F7',
    speed: 0.85,
    bassGain: 4,
    isPanned: false,
    trebleGain: -6
  },
  {
    id: 'tremolo',
    name: 'Tremolo Pulse',
    badge: 'Modulation',
    description: 'Pulsing amplitude modulation producing a rhythmic, hypnotic audio flutter.',
    tag: 'LFO Pulse',
    color: '#10B981',
    speed: 1.0,
    bassGain: 0,
    isPanned: false,
    trebleGain: 0
  }
];
