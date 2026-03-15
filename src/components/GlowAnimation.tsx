"use client";

import { motion } from "framer-motion";

export default function GlowAnimation() {
  return (
    <section className="relative w-full py-48 flex justify-center items-center overflow-hidden">
      <div className="text-center absolute z-30 pointer-events-none drop-shadow-2xl">
        <h2 className="text-sm font-black text-fuchsia-400 tracking-[0.4em] uppercase mb-4 opacity-100 drop-shadow-[0_0_10px_rgba(232,121,249,0.8)]">Nexus Engine</h2>
        <div className="text-3xl sm:text-5xl font-light text-white tracking-widest mix-blend-plus-lighter">Synthesizing Data</div>
      </div>
      
      {/* Deep Space Background Glow */}
      <div className="absolute w-[600px] sm:w-[800px] h-[600px] bg-gradient-to-tr from-purple-900/40 via-indigo-900/20 to-fuchsia-900/30 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '6s' }} />

      <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex justify-center items-center">
        {/* Morphing Outer Shield */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.02, 1], borderRadius: ["50%", "45%", "48%", "50%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border border-fuchsia-500/20 bg-fuchsia-500/5 shadow-[0_0_80px_rgba(217,70,239,0.1)] backdrop-blur-[2px]"
        />
        {/* Inner Core Rings */}
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] border-2 border-dashed border-indigo-500/30 rounded-full"
        />
        <motion.div
          animate={{ rotate: 360, scale: [0.9, 1, 0.9] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] border border-fuchsia-500/40 rounded-full opacity-50"
        />
        
        {/* Center Vivid Orb */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], filter: ["hue-rotate(0deg)", "hue-rotate(60deg)", "hue-rotate(0deg)"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-fuchsia-600 to-cyan-400 z-10 blur-[8px] shadow-[0_0_100px_rgba(217,70,239,1)]"
        />
        {/* Deep Core Highlight */}
        <div className="absolute w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-white z-20 mix-blend-overlay blur-md" />
      </div>
    </section>
  );
}