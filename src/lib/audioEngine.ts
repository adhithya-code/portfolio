/**
 * Web Audio API Precision Mechanical Relay & Microswitch Engine
 * Generates synthetic acoustic transients with zero external asset latency.
 */

class AudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;

  constructor() {
    // Initialized in muted state per specification guardrail
    this.isMuted = true;
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.initContext();
    this.isMuted = !this.isMuted;
    if (!this.isMuted) {
      this.playRelayClick();
    }
    return !this.isMuted;
  }

  public getMutedState(): boolean {
    return this.isMuted;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (!muted) {
      this.initContext();
      this.playRelayClick();
    }
  }

  /**
   * 12ms mechanical relay impulse with sharp transient cutoff (KVM / Channel Switch)
   */
  public playRelayClick() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Sharp square click with fast decay
      osc.type = 'square';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.012);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2400, this.ctx.currentTime);
      filter.Q.setValueAtTime(3.0, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.22, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.014);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.015);
    } catch {
      // Audio fallback safety
    }
  }

  /**
   * Low-resonance metallic friction snap (Rear I/O Shield Cable Plug)
   */
  public playPortConnect() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // White noise burst filtered for metallic scrape + low thud
      const bufferSize = this.ctx.sampleRate * 0.035;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(1800, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

      // Low frequency tactile engagement thud
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = 'triangle';
      subOsc.frequency.setValueAtTime(160, now);
      subOsc.frequency.exponentialRampToValueAtTime(45, now + 0.03);

      subGain.gain.setValueAtTime(0.25, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      subOsc.connect(subGain);
      subGain.connect(this.ctx.destination);

      noise.start(now);
      subOsc.start(now);
      noise.stop(now + 0.036);
      subOsc.stop(now + 0.036);
    } catch {
      // Audio fallback safety
    }
  }

  /**
   * 4ms high-frequency detent click (Teardown layer dial / slider tick)
   */
  public playRotaryTick() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(3200, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.005);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.005);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.006);
    } catch {
      // Audio fallback safety
    }
  }

  /**
   * Sub-2ms micro-pulse when optical reticle snaps to an inspectable component
   */
  public playReticleLock() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(4800, this.ctx.currentTime);
      osc.frequency.setValueAtTime(2400, this.ctx.currentTime + 0.002);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.003);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.004);
    } catch {
      // Audio fallback safety
    }
  }
}

export const audioEngine = new AudioEngine();
