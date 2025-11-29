import React from 'react';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto text-center group">
      <div className="inline-block p-4 rounded-full bg-slate-900 border border-slate-800 mb-8 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
         <MessageSquare className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={32} />
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-blue-400 group-hover:to-cyan-300 group-hover:animate-gradient-x transition-all">
        Initialize Connection
      </h2>
      
      <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed group-hover:text-slate-300 transition-colors">
        I am currently available for full-time opportunities in Cybersecurity and DevOps. 
        Whether you have a security concern to discuss or a position to fill, my terminal is open.
      </p>
      
      <a 
        href="mailto:prasainrijip@gmail.com" 
        className="relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)] mb-12 overflow-hidden group/btn"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
        <Mail className="mr-2 group-hover/btn:rotate-12 transition-transform" size={20} />
        Send Transmission
      </a>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="https://github.com/rijipprasain" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900/80 transition-all group/card hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <Github className="text-slate-400 group-hover/card:text-purple-400 transition-colors" size={20} />
            <span className="font-mono text-slate-400 group-hover/card:text-white">GitHub</span>
        </a>
        <a href="https://linkedin.com/in/rijipprasain" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all group/card hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <Linkedin className="text-slate-400 group-hover/card:text-blue-400 transition-colors" size={20} />
            <span className="font-mono text-slate-400 group-hover/card:text-white">LinkedIn</span>
        </a>
        <a href="tel:+61452506796" className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900/80 transition-all group/card hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <span className="w-5 h-5 rounded-full border-2 border-slate-400 group-hover/card:border-emerald-400 flex items-center justify-center text-[10px] font-bold text-slate-400 group-hover/card:text-emerald-400 transition-colors">ID</span>
            <span className="font-mono text-slate-400 group-hover/card:text-white">+61 452 506 796</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;