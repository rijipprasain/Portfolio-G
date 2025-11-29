import React from 'react';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      <div className="inline-block p-3 rounded-full bg-slate-900 border border-slate-800 mb-6">
         <MessageSquare className="text-cyan-400" size={24} />
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
        Initialize Connection
      </h2>
      
      <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
        I am currently available for full-time opportunities in Cybersecurity and DevOps. 
        Whether you have a security concern to discuss or a position to fill, my terminal is open.
      </p>
      
      <a 
        href="mailto:prasainrijip@gmail.com" 
        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-950 bg-cyan-500 rounded-lg hover:bg-cyan-400 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)] mb-12"
      >
        <Mail className="mr-2" size={20} />
        Send Transmission
      </a>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="https://github.com/rijipprasain" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 hover:bg-slate-800 transition-all group">
            <Github className="text-slate-400 group-hover:text-white" size={20} />
            <span className="font-mono text-slate-400 group-hover:text-white">GitHub</span>
        </a>
        <a href="https://linkedin.com/in/rijipprasain" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-800 hover:bg-slate-800 transition-all group">
            <Linkedin className="text-slate-400 group-hover:text-blue-400" size={20} />
            <span className="font-mono text-slate-400 group-hover:text-white">LinkedIn</span>
        </a>
        <a href="tel:+61452506796" className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-800 hover:bg-slate-800 transition-all group">
            <span className="w-5 h-5 rounded-full border-2 border-slate-400 group-hover:border-emerald-400 flex items-center justify-center text-[10px] font-bold text-slate-400 group-hover:text-emerald-400">ID</span>
            <span className="font-mono text-slate-400 group-hover:text-white">+61 452 506 796</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;