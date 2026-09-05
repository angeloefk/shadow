/**
 * AudioSynthEngine: Interactive Web Audio API Synthesizer & DSP Processor
 * Generates an ambient synthwave groove and demonstrates real-time DSP filter effects:
 * - Bassboost (Lowshelf boost)
 * - 8D Audio (Binaural stereo panner LFO)
 * - Nightcore (Pitch & playback acceleration)
 * - Vaporwave (Detuned tape warmth & lowpass filter)
 * - Tremolo (Amplitude pulse)
 */

class AudioSynthEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.intervalId = null;
    this.currentPreset = 'normal';
    this.masterGain = null;
    this.bassFilter = null;
    this.trebleFilter = null;
    this.panner = null;
    this.lfoOsc = null;
    this.step = 0;
    this.listeners = new Set();
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContext();

    // Master Gain
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);

    // Bass Filter (Lowshelf)
    this.bassFilter = this.ctx.createBiquadFilter();
    this.bassFilter.type = 'lowshelf';
    this.bassFilter.frequency.setValueAtTime(160, this.ctx.currentTime);
    this.bassFilter.gain.setValueAtTime(0, this.ctx.currentTime);

    // Treble Filter (Highshelf)
    this.trebleFilter = this.ctx.createBiquadFilter();
    this.trebleFilter.type = 'highshelf';
    this.trebleFilter.frequency.setValueAtTime(3200, this.ctx.currentTime);
    this.trebleFilter.gain.setValueAtTime(0, this.ctx.currentTime);

    // Stereo Panner (for 8D audio simulation)
    if (this.ctx.createStereoPanner) {
      this.panner = this.ctx.createStereoPanner();
      this.panner.pan.setValueAtTime(0, this.ctx.currentTime);
    }

    // Connect node chain
    if (this.panner) {
      this.bassFilter.connect(this.trebleFilter);
      this.trebleFilter.connect(this.panner);
      this.panner.connect(this.masterGain);
    } else {
      this.bassFilter.connect(this.trebleFilter);
      this.trebleFilter.connect(this.masterGain);
    }
    this.masterGain.connect(this.ctx.destination);
  }

  setPreset(presetId) {
    this.currentPreset = presetId;
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    switch (presetId) {
      case 'bassboost':
        this.bassFilter.gain.setTargetAtTime(14, now, 0.1);
        this.trebleFilter.gain.setTargetAtTime(-3, now, 0.1);
        if (this.panner) this.panner.pan.setTargetAtTime(0, now, 0.1);
        break;

      case 'spatial8d':
        this.bassFilter.gain.setTargetAtTime(2, now, 0.1);
        this.trebleFilter.gain.setTargetAtTime(4, now, 0.1);
        break;

      case 'nightcore':
        this.bassFilter.gain.setTargetAtTime(1, now, 0.1);
        this.trebleFilter.gain.setTargetAtTime(6, now, 0.1);
        if (this.panner) this.panner.pan.setTargetAtTime(0, now, 0.1);
        break;

      case 'vaporwave':
        this.bassFilter.gain.setTargetAtTime(6, now, 0.1);
        this.trebleFilter.gain.setTargetAtTime(-10, now, 0.1);
        if (this.panner) this.panner.pan.setTargetAtTime(0, now, 0.1);
        break;

      case 'tremolo':
        this.bassFilter.gain.setTargetAtTime(0, now, 0.1);
        this.trebleFilter.gain.setTargetAtTime(0, now, 0.1);
        if (this.panner) this.panner.pan.setTargetAtTime(0, now, 0.1);
        break;

      case 'normal':
      default:
        this.bassFilter.gain.setTargetAtTime(0, now, 0.1);
        this.trebleFilter.gain.setTargetAtTime(0, now, 0.1);
        if (this.panner) this.panner.pan.setTargetAtTime(0, now, 0.1);
        break;
    }

    this.notify();
  }

  setVolume(vol) {
    if (!this.masterGain || !this.ctx) return;
    this.masterGain.gain.setTargetAtTime(vol * 0.4, this.ctx.currentTime, 0.05);
  }

  playChord(frequencies, duration = 0.6, type = 'sine') {
    if (!this.ctx || this.ctx.state === 'suspended') return;
    const now = this.ctx.currentTime;

    // Apply 8D Panning oscillation if spatial8d active
    if (this.currentPreset === 'spatial8d' && this.panner) {
      const panVal = Math.sin(this.step * 0.75);
      this.panner.pan.setTargetAtTime(panVal, now, 0.15);
    }

    let pitchMultiplier = 1.0;
    if (this.currentPreset === 'nightcore') pitchMultiplier = 1.22;
    if (this.currentPreset === 'vaporwave') pitchMultiplier = 0.82;

    frequencies.forEach((f) => {
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(f * pitchMultiplier, now);

      // Attack / Decay envelope
      const attack = this.currentPreset === 'vaporwave' ? 0.08 : 0.03;
      gainNode.gain.setValueAtTime(0.0001, now);
      gainNode.gain.exponentialRampToValueAtTime(0.18, now + attack);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      // Tremolo pulse modulation
      if (this.currentPreset === 'tremolo') {
        const lfo = this.ctx.createOscillator();
        const lfoGain = this.ctx.createGain();
        lfo.frequency.value = 8.0; // 8Hz flutter
        lfoGain.gain.value = 0.12;
        lfo.connect(lfoGain.gain);
        lfo.start(now);
        lfo.stop(now + duration);
      }

      osc.connect(gainNode);
      gainNode.connect(this.bassFilter);

      osc.start(now);
      osc.stop(now + duration + 0.05);
    });

    // Add gentle sub-bass kick
    if (this.step % 2 === 0) {
      this.playKick();
    }
  }

  playKick() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    const startFreq = this.currentPreset === 'bassboost' ? 140 : 110;
    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(32, now + 0.22);

    const kickVol = this.currentPreset === 'bassboost' ? 0.35 : 0.2;
    gain.gain.setValueAtTime(kickVol, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(this.bassFilter);
    osc.start(now);
    osc.stop(now + 0.25);
  }

  start() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) return;
    this.isPlaying = true;

    // Chord progression in F# Minor Synthwave
    const chords = [
      [185.0, 220.0, 277.18], // F#m
      [146.83, 220.0, 293.66], // D
      [164.81, 246.94, 329.63], // E
      [130.81, 196.0, 261.63], // C#m
    ];

    let tempoInterval = 650;
    if (this.currentPreset === 'nightcore') tempoInterval = 520;
    if (this.currentPreset === 'vaporwave') tempoInterval = 820;

    const tick = () => {
      if (!this.isPlaying) return;
      const chord = chords[this.step % chords.length];
      this.playChord(chord, 0.55, 'triangle');
      this.step++;

      let nextInterval = 650;
      if (this.currentPreset === 'nightcore') nextInterval = 520;
      if (this.currentPreset === 'vaporwave') nextInterval = 820;

      this.intervalId = setTimeout(tick, nextInterval);
    };

    tick();
    this.notify();
  }

  stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearTimeout(this.intervalId);
      this.intervalId = null;
    }
    this.notify();
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(fn => fn({ isPlaying: this.isPlaying, preset: this.currentPreset }));
  }
}

export const audioSynth = new AudioSynthEngine();
