import React from 'react';
import { Lock, Search, ExternalLink, Code2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-12 group">
        <span className="text-cyan-500 font-mono text-xl group-hover:scale-110 transition-transform">04.</span>
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white via-cyan-300 to-white bg-clip-text text-transparent bg-[length:200%_auto] group-hover:animate-gradient-x transition-all">Active Operations</h2>
        <div className="h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent flex-grow max-w-xs group-hover:max-w-md transition-all duration-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Project 1 */}
        <div className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-[length:200%_auto] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 animate-gradient-x"></div>
            
            <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-all duration-300 shadow-lg">
                        <Lock size={24} />
                    </div>
                    <a href="#" className="text-slate-500 hover:text-white transition-colors hover:scale-110 transform">
                        <ExternalLink size={20} />
                    </a>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all">Zero Trust Access System</h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed group-hover:text-slate-300 transition-colors">
                    Designed an AI-driven access control system enforcing Zero Trust Architecture. Replaced static IAM logic with dynamic, interpretable models capable of real-time access decisions based on behavioral signals.
                </p>

                <div className="mt-auto space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {['Python', 'Scikit-learn', 'Flask', 'Bandit'].map(tag => (
                            <span key={tag} className="text-xs font-mono text-cyan-300/60 bg-cyan-950/20 px-2 py-1 rounded border border-transparent group-hover:border-cyan-500/20 group-hover:text-cyan-300 transition-all">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="pt-4 border-t border-slate-800/50 flex items-center gap-2 text-xs font-mono text-slate-500 group-hover:text-cyan-400/80 transition-colors">
                        <Code2 size={12} />
                        <span>Outcome: 89.81% Model Accuracy</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Project 2 */}
        <div className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] flex flex-col hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-[length:200%_auto] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 animate-gradient-x"></div>
            
            <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-red-400 group-hover:text-red-300 group-hover:border-red-500/30 transition-all duration-300 shadow-lg">
                        <Search size={24} />
                    </div>
                    <a href="#" className="text-slate-500 hover:text-white transition-colors hover:scale-110 transform">
                        <ExternalLink size={20} />
                    </a>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-orange-400 transition-all">E-Commerce Pen Test</h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed group-hover:text-slate-300 transition-colors">
                    Conducted grey-box penetration testing on a Flask-based web application. Identified 8 major vulnerabilities aligned with OWASP Top 10, including SQL Injection and Stored XSS, providing comprehensive remediation strategies.
                </p>

                <div className="mt-auto space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {['Kali Linux', 'Burp Suite', 'SQLMap', 'OWASP'].map(tag => (
                            <span key={tag} className="text-xs font-mono text-red-300/60 bg-red-950/20 px-2 py-1 rounded border border-transparent group-hover:border-red-500/20 group-hover:text-red-300 transition-all">
                                {tag}
                            </span>
                        ))}
                    </div>
                     <div className="pt-4 border-t border-slate-800/50 flex items-center gap-2 text-xs font-mono text-slate-500 group-hover:text-red-400/80 transition-colors">
                        <Code2 size={12} />
                        <span>Outcome: 8 Critical Vulns Patched</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;