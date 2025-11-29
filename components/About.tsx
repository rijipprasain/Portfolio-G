import React from 'react';
import { User, MapPin, GraduationCap, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-cyan-500 font-mono text-xl">01.</span>
        <h2 className="text-3xl font-bold text-white tracking-tight">Profile Data</h2>
        <div className="h-[1px] bg-slate-800 flex-grow max-w-xs" />
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
            I approach every challenge with a <span className="text-cyan-400 font-mono text-base bg-cyan-950/30 px-1 rounded">Red Team / Blue Team</span> mindset—understanding how to break systems in order to better defend them.
          </p>
        </div>

        <div className="space-y-6">
           <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
              <h3 className="text-sm font-mono text-slate-500 mb-4 uppercase tracking-wider">Status Metrics</h3>
              <div className="space-y-4">
                 <div className="flex items-center gap-4">
                    <div className="p-2 bg-slate-800 rounded-lg text-cyan-400">
                       <MapPin size={20} />
                    </div>
                    <div>
                       <div className="text-white font-medium">Sydney, Australia</div>
                       <div className="text-xs text-slate-500">Relocatable</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="p-2 bg-slate-800 rounded-lg text-violet-400">
                       <GraduationCap size={20} />
                    </div>
                    <div>
                       <div className="text-white font-medium">Master of IT</div>
                       <div className="text-xs text-slate-500">Cyber Security</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="p-2 bg-slate-800 rounded-lg text-emerald-400">
                       <Target size={20} />
                    </div>
                    <div>
                       <div className="text-white font-medium">Focus Areas</div>
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