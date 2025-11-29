import React from 'react';
import { Shield, ChevronDown, Download, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-start pt-20 relative">
      
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>

      <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-sm border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">System Online</span>
      </div>

      <div className="mb-2">
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none glitch-wrapper">
          <span className="glitch" data-text="RIJIP PRASAIN">RIJIP PRASAIN</span>
        </h1>
      </div>
      
      <div className="flex items-center gap-3 mb-8 h-8">
        <div className="flex items-center text-xl md:text-2xl font-mono text-slate-400">
          <span className="text-cyan-500 mr-2">{'>'}</span>
          <span>Master of IT (Cyber Security)</span>
          <span className="inline-block w-3 h-6 bg-cyan-500 ml-2 animate-cursor-blink"></span>
        </div>
      </div>

      <p className="max-w-2xl text-lg text-slate-400 leading-relaxed mb-10 font-light border-l-2 border-slate-800 pl-6">
        Bridging the gap between <strong className="text-slate-200 font-medium">Offensive Security</strong>, <strong className="text-slate-200 font-medium">Network Defense</strong>, and <strong className="text-slate-200 font-medium">DevOps</strong>. 
        Building resilient infrastructure for the modern web with a Zero Trust mindset.
      </p>

      <div className="flex flex-wrap gap-4">
        <a href="#contact" className="group relative px-8 py-4 bg-cyan-600 text-white font-bold rounded-sm overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] border border-cyan-500">
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative flex items-center gap-2 tracking-wide">
            <Shield size={18} /> INITIALIZE_CONTACT
          </span>
        </a>
        
        <button className="px-8 py-4 text-slate-300 hover:text-cyan-400 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800/50 rounded-sm transition-all duration-300 flex items-center gap-2 font-mono font-medium tracking-wide">
          <Download size={18} /> RESUME.PDF
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-700">
        <ChevronDown size={24} />
      </div>
    </div>
  );
};

export default Hero;