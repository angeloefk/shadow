export const commandCategories = [
  { id: 'all', label: 'All Commands', icon: 'Sparkles', count: 24 },
  { id: 'music', label: '🎵 Music Playback', icon: 'Disc', count: 9 },
  { id: 'ai', label: '🤖 AI Intelligence', icon: 'Bot', count: 5 },
  { id: 'dsp', label: '🎛️ DSP & Filters', icon: 'Sliders', count: 5 },
  { id: 'config', label: '⚙️ Server & Config', icon: 'Shield', count: 5 },
  { id: 'stats', label: '📊 Stats & Profiles', icon: 'BarChart2', count: 4 },
];

export const commandsList = [
  // AI Intelligence
  {
    name: '/autodj',
    category: 'ai',
    description: 'Activates Shadow AI to dynamically analyze server energy and queue continuous matching tracks.',
    usage: '/autodj [vibe] [energy_level]',
    badge: 'AI Core',
    permission: 'DJ / Admin',
    parameters: [
      { name: 'vibe', type: 'string', required: false, desc: 'Optional seed mood e.g. "cyberpunk", "late-night chill", "drill"' },
      { name: 'energy_level', type: 'choice', required: false, desc: 'Low, Medium, High, Chaotic' }
    ]
  },
  {
    name: '/askmusic',
    category: 'ai',
    description: 'Natural language search: prompts Shadow AI to discover or compose a tailored playlist on the fly.',
    usage: '/askmusic <prompt>',
    badge: 'AI Core',
    permission: 'Everyone',
    parameters: [
      { name: 'prompt', type: 'string', required: true, desc: 'E.g. "songs that feel like driving through Tokyo at 3am in rain"' }
    ]
  },
  {
    name: '/smartqueue',
    category: 'ai',
    description: 'AI harmonic flow engine sorts queue based on key, BPM, and mood transitions.',
    usage: '/smartqueue [blend_mode]',
    badge: 'AI Core',
    permission: 'DJ Role',
    parameters: [
      { name: 'blend_mode', type: 'choice', required: false, desc: 'harmonic, tempo-ramp, genre-weave' }
    ]
  },
  {
    name: '/recommend',
    category: 'ai',
    description: 'Analyzes the currently playing track and suggests 5 similar hidden gems.',
    usage: '/recommend [include_indie: true/false]',
    badge: 'AI Core',
    permission: 'Everyone',
    parameters: [
      { name: 'include_indie', type: 'boolean', required: false, desc: 'Include underground and niche artists' }
    ]
  },
  {
    name: '/similar',
    category: 'ai',
    description: 'Finds acoustic and thematic matches for any artist or track.',
    usage: '/similar <song_or_artist>',
    badge: 'AI Core',
    permission: 'Everyone',
    parameters: [
      { name: 'song_or_artist', type: 'string', required: true, desc: 'Target query to analyze' }
    ]
  },

  // Music Playback
  {
    name: '/play',
    category: 'music',
    description: 'Plays music from Spotify, YouTube, SoundCloud, Apple Music, or direct audio streams.',
    usage: '/play <query_or_url>',
    badge: 'Essential',
    permission: 'Everyone',
    parameters: [
      { name: 'query_or_url', type: 'string', required: true, desc: 'Song title, artist, playlist link, or stream URL' }
    ]
  },
  {
    name: '/skip',
    category: 'music',
    description: 'Skips the current song. Supports vote-skip for listeners or instant skip for DJs.',
    usage: '/skip [to_index]',
    badge: 'Essential',
    permission: 'Everyone / DJ',
    parameters: [
      { name: 'to_index', type: 'integer', required: false, desc: 'Jump directly to song number in queue' }
    ]
  },
  {
    name: '/queue',
    category: 'music',
    description: 'Displays the interactive paginated queue with duration, requester tags, and upcoming songs.',
    usage: '/queue [page]',
    badge: 'Essential',
    permission: 'Everyone',
    parameters: [
      { name: 'page', type: 'integer', required: false, desc: 'Queue page number' }
    ]
  },
  {
    name: '/lyrics',
    category: 'music',
    description: 'Displays real-time time-synced or full lyrics for the currently playing track.',
    usage: '/lyrics [query]',
    badge: 'Interactive',
    permission: 'Everyone',
    parameters: [
      { name: 'query', type: 'string', required: false, desc: 'Specific song to fetch lyrics for' }
    ]
  },
  {
    name: '/pause',
    category: 'music',
    description: 'Pauses active stream playback with smooth audio fade out.',
    usage: '/pause',
    badge: 'Playback',
    permission: 'DJ Role',
    parameters: []
  },
  {
    name: '/resume',
    category: 'music',
    description: 'Resumes paused playback with smooth audio fade in.',
    usage: '/resume',
    badge: 'Playback',
    permission: 'DJ Role',
    parameters: []
  },
  {
    name: '/seek',
    category: 'music',
    description: 'Jumps playback forward or backward to a specific timestamp in the track.',
    usage: '/seek <timestamp>',
    badge: 'Playback',
    permission: 'DJ Role',
    parameters: [
      { name: 'timestamp', type: 'string', required: true, desc: 'Format mm:ss (e.g. 02:45) or seconds (165)' }
    ]
  },
  {
    name: '/loop',
    category: 'music',
    description: 'Loops current track, entire queue, or disables looping.',
    usage: '/loop <mode: track|queue|off>',
    badge: 'Playback',
    permission: 'DJ Role',
    parameters: [
      { name: 'mode', type: 'choice', required: true, desc: 'track, queue, or off' }
    ]
  },
  {
    name: '/shuffle',
    category: 'music',
    description: 'Fisher-Yates randomizes the current server queue order while preserving current track.',
    usage: '/shuffle',
    badge: 'Playback',
    permission: 'DJ Role',
    parameters: []
  },

  // DSP & Filters
  {
    name: '/filter',
    category: 'dsp',
    description: 'Opens real-time DSP filter control panel or applies a specific filter effect.',
    usage: '/filter <type: 8d|bassboost|nightcore|vaporwave|tremolo|clear>',
    badge: 'DSP Studio',
    permission: 'Everyone',
    parameters: [
      { name: 'type', type: 'choice', required: true, desc: 'bassboost, 8d, nightcore, vaporwave, tremolo, clear' }
    ]
  },
  {
    name: '/bassboost',
    category: 'dsp',
    description: 'Direct multi-band sub-bass amplifier with configurable intensity (low, medium, high, extreme).',
    usage: '/bassboost <level>',
    badge: 'DSP Studio',
    permission: 'Everyone',
    parameters: [
      { name: 'level', type: 'choice', required: true, desc: 'soft, medium, heavy, ear-rumble' }
    ]
  },
  {
    name: '/8d',
    category: 'dsp',
    description: 'Activates binaural spatial circular panning around the virtual listener stereo field.',
    usage: '/8d [speed]',
    badge: 'DSP Studio',
    permission: 'Everyone',
    parameters: [
      { name: 'speed', type: 'choice', required: false, desc: 'slow, standard, fast' }
    ]
  },
  {
    name: '/nightcore',
    category: 'dsp',
    description: 'Sped-up pitch and tempo multiplier (+15% speed and +2 semitones).',
    usage: '/nightcore',
    badge: 'DSP Studio',
    permission: 'Everyone',
    parameters: []
  },
  {
    name: '/vaporwave',
    category: 'dsp',
    description: 'Slowed + reverb aesthetic filter with warm lowpass analog tape warmth.',
    usage: '/vaporwave',
    badge: 'DSP Studio',
    permission: 'Everyone',
    parameters: []
  },

  // Server & Config
  {
    name: '/setup',
    category: 'config',
    description: 'Creates a dedicated 24/7 interactive music controller channel with live buttons and embeds.',
    usage: '/setup [channel_name]',
    badge: 'Admin',
    permission: 'Server Admin',
    parameters: [
      { name: 'channel_name', type: 'string', required: false, desc: 'Defaults to #shadow-music-player' }
    ]
  },
  {
    name: '/247',
    category: 'config',
    description: 'Keeps Shadow Music connected to the designated voice channel 24/7 without disconnecting.',
    usage: '/247 <enable/disable>',
    badge: 'Pro',
    permission: 'Server Admin',
    parameters: [
      { name: 'mode', type: 'boolean', required: true, desc: 'true to enable 24/7 stay, false to disable' }
    ]
  },
  {
    name: '/dj',
    category: 'config',
    description: 'Assigns or removes DJ roles that hold elevated control over skipping, volume, and filters.',
    usage: '/dj <add|remove|list> [role]',
    badge: 'Admin',
    permission: 'Server Admin',
    parameters: [
      { name: 'action', type: 'choice', required: true, desc: 'add, remove, list' },
      { name: 'role', type: 'role', required: false, desc: 'The target Discord server role' }
    ]
  },
  {
    name: '/musicpermissions',
    category: 'config',
    description: 'Fine-grained command permission matrix for channels, roles, and guest members.',
    usage: '/musicpermissions [view|set]',
    badge: 'Admin',
    permission: 'Server Admin',
    parameters: []
  },
  {
    name: '/controller',
    category: 'config',
    description: 'Toggles compact vs detailed embed modes and reaction button listeners.',
    usage: '/controller <layout: modern|compact|classic>',
    badge: 'Admin',
    permission: 'Server Admin',
    parameters: [
      { name: 'layout', type: 'choice', required: true, desc: 'modern, compact, classic' }
    ]
  },

  // Stats & Profiles
  {
    name: '/musicprofile',
    category: 'stats',
    description: 'Generates your personalized holographic music card showing listening habits, top genres, and badges.',
    usage: '/musicprofile [user]',
    badge: 'Community',
    permission: 'Everyone',
    parameters: [
      { name: 'user', type: 'user', required: false, desc: 'Target user or yourself' }
    ]
  },
  {
    name: '/leaderboard',
    category: 'stats',
    description: 'Displays the server music leaderboard: top listeners, hours streamed, and most active DJs.',
    usage: '/leaderboard [timeframe: weekly|monthly|all-time]',
    badge: 'Community',
    permission: 'Everyone',
    parameters: [
      { name: 'timeframe', type: 'choice', required: false, desc: 'weekly, monthly, all-time' }
    ]
  },
  {
    name: '/favorites',
    category: 'stats',
    description: 'Save current tracks to your personal cloud playlist accessible across any Discord server.',
    usage: '/favorites <add|play|list|remove>',
    badge: 'Cloud Sync',
    permission: 'Everyone',
    parameters: [
      { name: 'action', type: 'choice', required: true, desc: 'add, play, list, remove' }
    ]
  },
  {
    name: '/history',
    category: 'stats',
    description: 'Retrieves previous 50 tracks played in this voice channel with replay shortcuts.',
    usage: '/history [limit]',
    badge: 'Community',
    permission: 'Everyone',
    parameters: [
      { name: 'limit', type: 'integer', required: false, desc: 'Number of past tracks (1-50)' }
    ]
  }
];
