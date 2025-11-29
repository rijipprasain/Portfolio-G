import React from 'react';
import { Network, ShieldAlert, Server, Terminal, Lock, BarChart3 } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Network & Security",
      icon: <Network />,
      skills: ["TCP/IP", "DNS/DHCP", "VLAN/VPN", "Cisco ASA", "FortiGate", "Secure SDLC"],
      color: "text-cyan-400",
      glow: "hover:shadow-cyan-500/20 hover:border-cyan-500/40"
    },
    {
      title: "Offensive Ops",
      icon: <ShieldAlert />,
      skills: ["Kali Linux", "Burp Suite", "Metasploit", "Nmap", "Wireshark", "Vuln Assessment"],
      color: "text-red-400",
      glow: "hover:shadow-red-500/20 hover:border-red-500/40"
    },
    {
      title: "SysAdmin & Cloud",
      icon: <Server />,
      skills: ["Linux/Unix", "Windows Svr", "Active Directory", "Docker", "Kubernetes", "VMware"],
      color: "text-violet-400",
      glow: "hover:shadow-violet-500/20 hover:border-violet-500/40"
    },
    {
      title: "Dev & Automation",
      icon: <Terminal />,
      skills: ["Python", "Bash", "C/Java", "Flask", "Git/GitHub", "Scripting"],
      color: "text-emerald-400",
      glow: "hover:shadow-emerald-500/20 hover:border-emerald-500/40"
    },
    {
      title: "GRC & Compliance",
      icon: <Lock />,
      skills: ["HIPAA", "SOC 2", "IAM", "SIEM", "Jira", "Asset Mgmt"],
      color: "text-amber-400",
      glow: "hover:shadow-amber-500/20 hover:border-amber-500/40"
    },
    {
      title: "Analytics & SEO",
      icon: <BarChart3 />,
      skills: ["Google Analytics", "Tech SEO", "Performance", "Figma", "Competitor Analysis"],
      color: "text-blue-400",
      glow: "hover:shadow-blue-500/20 hover:border-blue-500/40"
    },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-12 group">
        <span className="text-cyan-500 font-mono text-xl group-hover:scale-110 transition-transform">02.</span>
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white via-cyan-300 to-white bg-clip-text text-transparent bg-[length:200%_auto] group-hover:animate-gradient-x transition-all">Technical Arsenal</h2>
        <div className="h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent flex-grow max-w-xs group-hover:max-w-md transition-all duration-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className={`group relative h-full bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-6 rounded-xl transition-all duration-300 overflow-hidden ${category.glow} hover:-translate-y-1`}
          >
            {/* Background Icon (Massive & Subtle) */}
            <div className={`absolute -right-6 -bottom-6 text-slate-800/50 group-hover:text-slate-800 transition-colors duration-500 transform rotate-[-10deg] group-hover:rotate-[0deg] group-hover:scale-110`}>
              {/* @ts-ignore */}
              {React.cloneElement(category.icon, { size: 140, strokeWidth: 0.5, className: "group-hover:animate-spin-slow opacity-20" })}
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 bg-slate-950 border border-slate-700 rounded-lg ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {/* @ts-ignore */}
                  {React.cloneElement(category.icon, { size: 24 })}
                </div>
                <h3 className="font-bold text-slate-100 font-mono text-lg tracking-wide group-hover:text-white transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                      key={idx} 
                      className="text-xs font-mono font-medium text-slate-400 bg-slate-950/60 px-2.5 py-1 rounded-md border border-slate-800 hover:text-white hover:border-slate-600 transition-all cursor-default hover:bg-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Hover Glow Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;