export const faqsData = [
  {
    q: 'How do I add Shadow Music to my Discord server?',
    a: 'Click the "Add to Discord" button at the top of this page. You will be redirected to Discord’s official authorization screen where you select your server and grant required voice/embed permissions with a single click.'
  },
  {
    q: 'Is Shadow Music really free to use?',
    a: 'Yes! Shadow Music offers an extensive free tier that includes full playback, access to standard DSP filters, high quality audio, and basic AI features. We also offer Shadow Pro and Guild plans for servers wanting 24/7 stay, 384kbps lossless audio, and unlimited AI AutoDJ queries.'
  },
  {
    q: 'How does the AI AutoDJ work?',
    a: 'Our proprietary machine learning engine analyzes the tempo, musical key, sonic density, and recent server song history to queue tracks that seamlessly transition without abrupt vibe breaks. You can also seed it with moods like /autodj late-night coding or high-energy workout.'
  },
  {
    q: 'What makes Shadow Music’s audio quality superior to other bots?',
    a: 'Shadow Music uses a custom C++ native audio resampler and direct Discord Opus encoder streaming at up to 384kbps (Discord’s maximum supported tier 3 bitrate). Unlike traditional bots that transcode multiple times, our pipeline maintains bit-perfect acoustic clarity.'
  },
  {
    q: 'Can I restrict music controls to specific roles or channels?',
    a: 'Absolutely. Using /setup, Shadow creates an isolated, beautiful controller channel with interactive buttons. Admins can assign dedicated DJ roles via /dj add @DJ or configure granular permissions using /musicpermissions.'
  },
  {
    q: 'Does it support Spotify, YouTube, SoundCloud, and Apple Music?',
    a: 'Yes! You can paste links from Spotify playlists, albums, track links, YouTube playlists, SoundCloud, Apple Music, Deezer, or simply type the song title and artist directly into /play.'
  }
];

export const testimonials = [
  {
    quote: 'Shadow Music replaced three different bots on our 18,000-member community. The 8D audio filter and AI AutoDJ keep our voice channels packed 24/7.',
    author: 'Alexandre R.',
    role: 'Server Owner',
    serverName: 'CyberCity Gaming (18.5k Members)',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    stars: 5
  },
  {
    quote: 'The audio clarity is unbelievable. Zero stuttering, instant response to /play, and our members compete every week on the server /leaderboard!',
    author: 'Elena V.',
    role: 'Lead Community Mod',
    serverName: 'Lofi Chill Study Hub (32k Members)',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80',
    stars: 5
  },
  {
    quote: 'Being able to type "/askmusic songs for late night code debugging" and get a flawless playlist in seconds is like living in the future. Essential bot.',
    author: 'Marcus Chen',
    role: 'Tech Lead & Founder',
    serverName: 'DevSphere Discord (12k Devs)',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
    stars: 5
  }
];
