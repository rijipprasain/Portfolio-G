import React from 'react';
import { Lock, Search, ExternalLink, Code2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-cyan-500 font-mono text-xl">04.</span>
        <h2 className="text-3xl font-bold text-white tracking-tight">Active Operations</h2>
        <div className="h-[1px] bg-slate-800 flex-grow max-w-xs" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Project 1 */}
        <div className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            
            <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-cyan-400">
                        <Lock size={24} />
                    </div>
                    <a href="#" className="text-slate-500 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                    </a>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Zero Trust Access System</h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                    Designed an AI-driven access control system enforcing Zero Trust Architecture. Replaced static IAM logic with dynamic, interpretable models capable of real-time access decisions based on behavioral signals.
                </p>

                <div className="mt-auto space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {['Python', 'Scikit-learn', 'Flask', 'Bandit'].map(tag => (
                            <span key={tag} className="text-xs font-mono text-cyan-300/80">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="pt-4 border-t border-slate-800/50 flex items-center gap-2 text-xs font-mono text-slate-500">
                        <Code2 size={12} />
                        <span>Outcome: 89.81% Model Accuracy</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Project 2 */}
        <div className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            
            <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-red-400">
                        <Search size={24} />
                    </div>
                    <a href="#" className="text-slate-500 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                    </a>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">E-Commerce Pen Test</h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                    Conducted grey-box penetration testing on a Flask-based web application. Identified 8 major vulnerabilities aligned with OWASP Top 10, including SQL Injection and Stored XSS, providing comprehensive remediation strategies.
                </p>

                <div className="mt-auto space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {['Kali Linux', 'Burp Suite', 'SQLMap', 'OWASP'].map(tag => (
                            <span key={tag} className="text-xs font-mono text-red-300/80">
                                {tag}
                            </span>
                        ))}
                    </div>
                     <div className="pt-4 border-t border-slate-800/50 flex items-center gap-2 text-xs font-mono text-slate-500">
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