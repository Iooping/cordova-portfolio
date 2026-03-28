import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Code, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center px-6 overflow-hidden">
      
      {/* 🟢 Layer 1: The "Engine" Glows (These sit behind the glass to make it visible) */}
      <div className="absolute top-1/4 -left-20 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* 🟢 Layer 2: The Glass Command Center */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass max-w-6xl mx-auto w-full p-8 md:p-20 rounded-[3rem] relative z-10 border-white/10 overflow-hidden"
      >
        {/* Subtle Inner Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />

        {/* System Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-[2px] w-16 bg-gradient-to-r from-[#d4af37] to-transparent" />
          <span className="text-[#d4af37] font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase font-black italic">
            Uplink Established // v2.4.6
          </span>
          <Sparkles size={14} className="text-[#d4af37] animate-bounce" />
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9] md:leading-[0.85]">
          ARCHITECTING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f3cf7a] to-[#d4af37] gold-glow">
            INTELLIGENT <br className="md:hidden" /> SYSTEMS
          </span>
        </h1>

        {/* Description with Vertical Accent */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <p className="max-w-2xl text-gray-300 text-lg md:text-2xl leading-relaxed border-l-4 border-[#d4af37]/40 pl-8">
            I am <span className="text-white font-bold underline decoration-[#d4af37]/40 underline-offset-4">Joshua Cordova</span>, 
            an engineer bridging the gap between <span className="text-gold-primary">AIoT Hardware</span> and 
            <span className="text-gold-primary"> Enterprise Automation</span>.
            </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-6 mb-16">
          <Link to="/projects" className="group bg-[#d4af37] text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center gap-3 hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-[#d4af37]/20">
            Access Projects <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
          <Link to="/contact" className="glass px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all border-white/20">
            Contact Me
          </Link>
        </div>

        {/* 🟢 Layer 3: System Specs Footer (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/10">
          <div className="flex items-center gap-5 group">
            <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#d4af37]/20 transition-colors">
                <Cpu className="text-[#d4af37]" size={28} />
            </div>
            <div>
              <h4 className="text-[10px] font-mono uppercase text-gray-500 tracking-[0.2em] mb-1">Core Architecture</h4>
              <p className="text-sm font-black text-white/90">AIoT & ROBOTICS</p>
            </div>
          </div>
          
          <div className="flex items-center gap-5 group">
            <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#d4af37]/20 transition-colors">
                <Terminal className="text-[#d4af37]" size={28} />
            </div>
            <div>
              <h4 className="text-[10px] font-mono uppercase text-gray-500 tracking-[0.2em] mb-1">Stack Log</h4>
              <p className="text-sm font-black text-white/90">MERN / PYTHON / C++</p>
            </div>
          </div>

          <div className="flex items-center gap-5 group">
            <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#d4af37]/20 transition-colors">
                <Code className="text-[#d4af37]" size={28} />
            </div>
            <div>
              <h4 className="text-[10px] font-mono uppercase text-gray-500 tracking-[0.2em] mb-1">Operation</h4>
              <p className="text-sm font-black text-white/90">AGENTIC AUTOMATION</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Decorative Corner Element */}
      <div className="absolute bottom-10 left-10 text-[8px] font-mono text-gray-800 uppercase tracking-[1em] pointer-events-none hidden md:block">
        Joshua Cordova // Systems Engineering // CHMSU
      </div>
    </div>
  );
}