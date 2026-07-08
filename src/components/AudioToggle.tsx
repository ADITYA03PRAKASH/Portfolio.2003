"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthNodesRef = useRef<{
    oscillators: OscillatorNode[];
    gainNode: GainNode;
    filterNode: BiquadFilterNode;
  } | null>(null);

  // Initialize and start procedural ambient synthesizer
  const startSynth = () => {
    try {
      // Create audio context
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      // Master lowpass filter for warmth and soft tones
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(250, ctx.currentTime);
      filter.Q.setValueAtTime(1, ctx.currentTime);

      // Master volume gain (extremely quiet lofi drone)
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0, ctx.currentTime); // fade in
      masterGain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 3);

      filter.connect(masterGain);
      masterGain.connect(ctx.destination);

      // Chord frequencies: C3 (130.81Hz), G3 (196.00Hz), C4 (261.63Hz), E4 (329.63Hz)
      const freqs = [130.81, 196.0, 261.63, 329.63];
      const oscillators: OscillatorNode[] = [];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        // Triangle wave for smooth lofi woodwind-like sound
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Detune slightly for lush chorus effect
        osc.detune.setValueAtTime((idx - 1.5) * 6, ctx.currentTime);

        // Individual low volume oscillator gain
        const oscGain = ctx.createGain();
        oscGain.gain.setValueAtTime(0.2, ctx.currentTime);

        osc.connect(oscGain);
        oscGain.connect(filter);
        osc.start();

        oscillators.push(osc);
      });

      // Ambient slow filter sweep LFO
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.value = 0.08; // Very slow filter sweep (once every 12 seconds)
      lfoGain.gain.value = 80; // range of sweep

      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();

      synthNodesRef.current = {
        oscillators: [...oscillators, lfo],
        gainNode: masterGain,
        filterNode: filter,
      };
    } catch (error) {
      console.warn("Web Audio API not supported or blocked: ", error);
    }
  };

  const stopSynth = () => {
    const nodes = synthNodesRef.current;
    if (nodes && audioCtxRef.current) {
      // Fade out gain
      const ctx = audioCtxRef.current;
      nodes.gainNode.gain.setValueAtTime(nodes.gainNode.gain.value, ctx.currentTime);
      nodes.gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);

      setTimeout(() => {
        nodes.oscillators.forEach((osc) => {
          try {
            osc.stop();
          } catch (e) {}
        });
        if (ctx.state !== "closed") {
          ctx.close();
        }
        audioCtxRef.current = null;
        synthNodesRef.current = null;
      }, 550);
    }
  };

  const handleToggle = () => {
    if (isPlaying) {
      stopSynth();
      setIsPlaying(false);
    } else {
      startSynth();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      stopSynth();
    };
  }, []);

  return (
    <button
      onClick={handleToggle}
      className="relative flex items-center gap-2 p-2.5 rounded-full glass-card border border-white/5 hover:border-secondary/40 text-slate-400 hover:text-slate-200 transition-all duration-300 z-50 overflow-hidden group cursor-pointer"
      title={isPlaying ? "Mute Ambient Drone" : "Play Ambient Lofi Drone"}
      aria-label="Toggle Ambient Audio"
    >
      {/* Sound wave bars */}
      <div className="flex items-end gap-[2px] h-3 w-[14px]">
        {[1, 2, 3].map((val) => (
          <span
            key={val}
            className={`w-[2px] rounded-full bg-secondary transition-all duration-300 ${
              isPlaying
                ? `animate-pulse-height h-full`
                : "h-[30%]"
            }`}
            style={{
              animation: isPlaying
                ? `soundWavePulse ${0.6 + val * 0.2}s infinite ease-in-out alternate`
                : "none",
            }}
          />
        ))}
      </div>
      
      {isPlaying ? (
        <Volume2 className="w-3.5 h-3.5" />
      ) : (
        <VolumeX className="w-3.5 h-3.5" />
      )}
      
      <span className="max-w-0 overflow-hidden text-[10px] uppercase font-bold tracking-widest transition-all duration-500 group-hover:max-w-[80px] whitespace-nowrap">
        {isPlaying ? "ambient playing" : "sound track"}
      </span>

      {/* Styled sound waves animation */}
      <style jsx global>{`
        @keyframes soundWavePulse {
          0% { height: 20%; }
          100% { height: 100%; }
        }
      `}</style>
    </button>
  );
}
