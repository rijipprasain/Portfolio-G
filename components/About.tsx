import React from 'react';
import { MapPin, GraduationCap, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-12 group">
        <span className="text-cyan-500 font-mono text-xl group-hover:scale-110 transition-transform">01.</span>
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white via-cyan-300 to-white bg-clip-text text-transparent bg-[length:200%_auto] group-hover:animate-gradient-x transition-all">Profile Data</h2>
        <div className="h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent flex-grow max-w-xs group-hover:max-w-md transition-all duration-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6 text-slate-400 text-lg leading-relaxed">
          <p>
            I am a <strong className="text-slate-100">Master of Information Technology (Cyber Security)</strong> graduate from Charles Darwin University, combining academic rigor with hands-on expertise in security, networking, and pen-testing.
          </p>
          <p>
            Currently operating out of <strong className="text-slate-100">Sydney, Australia</strong>, I am actively seeking roles in Cybersecurity, Networking, or DevOps. My mission is to architect secure systems that can withstand modern threat landscapes using advanced Linux administration, firewall management, and cloud-native technologies.
          </p>
          <p>
            I approach every challenge with a <span className="text-cyan-400 font-mono text-base bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-500/20 hover:bg-cyan-950/50 hover:border-cyan-500/50 transition-all cursor-default">Red Team / Blue Team</span> mindset—understanding how to break systems in order to better defend them.
          </p>
        </div>

        <div className="space-y-6">
           <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] group">
              <h3 className="text-sm font-mono text-slate-500 mb-6 uppercase tracking-wider group-hover:text-cyan-400 transition-colors">Status Metrics</h3>
              <div className="space-y-5">
                 <div className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="p-2.5 bg-slate-800 rounded-lg text-cyan-400 group-hover/item:bg-cyan-500/20 group-hover/item:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
                       <MapPin size={20} />
                    </div>
                    <div>
                       <div className="text-white font-medium group-hover/item:text-cyan-300 transition-colors">Sydney, Australia</div>
                       <div className="text-xs text-slate-500">Relocatable</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="p-2.5 bg-slate-800 rounded-lg text-violet-400 group-hover/item:bg-violet-500/20 group-hover/item:shadow-[0_0_15px_rgba(167,139,250,0.4)] transition-all">
                       <GraduationCap size={20} />
                    </div>
                    <div>
                       <div className="text-white font-medium group-hover/item:text-violet-300 transition-colors">Master of IT</div>
                       <div className="text-xs text-slate-500">Cyber Security</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="p-2.5 bg-slate-800 rounded-lg text-emerald-400 group-hover/item:bg-emerald-500/20 group-hover/item:shadow-[0_0_15px_rgba(52,211,153,0.4)] transition-all">
                       <Target size={20} />
                    </div>
                    <div>
                       <div className="text-white font-medium group-hover/item:text-emerald-300 transition-colors">Focus Areas</div>
                       <div className="text-xs text-slate-500">SecOps, NetSec, DevOps</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;