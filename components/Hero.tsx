import React from 'react';
import { Shield, ChevronDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-start pt-20 relative">
      
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-mono text-cyan-300 tracking-widest uppercase font-semibold">System Online</span>
      </div>

      <div className="mb-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none glitch-wrapper hover:scale-[1.01] transition-transform duration-300 origin-left">
          <span className="glitch" data-text="RIJIP PRASAIN">RIJIP PRASAIN</span>
        </h1>
      </div>
      
      <div className="flex items-center gap-3 mb-8 h-10">
        <div className="flex items-center text-xl md:text-3xl font-mono">
          <span className="text-cyan-500 mr-3 font-bold">{'>'}</span>
          <span className="bg-gradient-to-r from-slate-200 via-cyan-200 to-slate-200 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x font-bold">Master of IT (Cyber Security)</span>
          <span className="inline-block w-3 h-8 bg-cyan-500 ml-3 animate-cursor-blink shadow-[0_0_10px_#06b6d4]"></span>
        </div>
      </div>

      <p className="max-w-2xl text-lg text-slate-400 leading-relaxed mb-10 font-light border-l-4 border-cyan-500/50 pl-6 hover:border-cyan-400 transition-colors duration-300">
        Bridging the gap between <strong className="text-slate-100 font-medium">Offensive Security</strong>, <strong className="text-slate-100 font-medium">Network Defense</strong>, and <strong className="text-slate-100 font-medium">DevOps</strong>. 
        Building resilient infrastructure for the modern web with a <span className="text-cyan-400">Zero Trust</span> mindset.
      </p>

      <div className="flex flex-wrap gap-5">
        <a href="#contact" className="group relative px-8 py-4 bg-cyan-600 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:-translate-y-1 border border-cyan-400">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          <span className="relative flex items-center gap-2 tracking-wide">
            <Shield size={20} className="group-hover:rotate-12 transition-transform" /> INITIALIZE_CONTACT
          </span>
        </a>
        
        <button className="px-8 py-4 text-slate-300 hover:text-white border border-slate-700 hover:border-cyan-500 hover:bg-slate-800/80 rounded-lg transition-all duration-300 flex items-center gap-2 font-mono font-medium tracking-wide group hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
          <Download size={20} className="group-hover:translate-y-1 transition-transform" /> RESUME.PDF
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-cyan-500/50">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;