import React from 'react';
import { Network, ShieldAlert, Server, Terminal, Lock, BarChart3 } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Network & Security",
      icon: <Network />,
      skills: ["TCP/IP", "DNS/DHCP", "VLAN/VPN", "Cisco ASA", "FortiGate", "Secure SDLC"]
    },
    {
      title: "Offensive Ops",
      icon: <ShieldAlert />,
      skills: ["Kali Linux", "Burp Suite", "Metasploit", "Nmap", "Wireshark", "Vuln Assessment"]
    },
    {
      title: "SysAdmin & Cloud",
      icon: <Server />,
      skills: ["Linux/Unix", "Windows Svr", "Active Directory", "Docker", "Kubernetes", "VMware"]
    },
    {
      title: "Dev & Automation",
      icon: <Terminal />,
      skills: ["Python", "Bash", "C/Java", "Flask", "Git/GitHub", "Scripting"]
    },
    {
      title: "GRC & Compliance",
      icon: <Lock />,
      skills: ["HIPAA", "SOC 2", "IAM", "SIEM", "Jira", "Asset Mgmt"]
    },
    {
      title: "Analytics & SEO",
      icon: <BarChart3 />,
      skills: ["Google Analytics", "Tech SEO", "Performance", "Figma", "Competitor Analysis"]
    },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-cyan-500 font-mono text-xl">02.</span>
        <h2 className="text-3xl font-bold text-white tracking-tight">Technical Arsenal</h2>
        <div className="h-[1px] bg-slate-800 flex-grow max-w-xs" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="group relative h-full bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-6 rounded-md hover:border-cyan-500/40 transition-all duration-300 overflow-hidden"
          >
            {/* Background Icon (Massive & Subtle) */}
            <div className="absolute -right-6 -bottom-6 text-slate-800/50 group-hover:text-cyan-900/20 transition-colors duration-500 transform rotate-[-10deg]">
              {React.cloneElement(category.icon as React.ReactElement<any>, { size: 140, strokeWidth: 1 })}
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-950 border border-slate-700 text-cyan-500 rounded-sm">
                  {React.cloneElement(category.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <h3 className="font-bold text-slate-100 font-mono text-lg tracking-wide">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                      key={idx} 
                      className="text-xs font-mono font-medium text-slate-400 bg-slate-950/80 px-2.5 py-1 rounded-sm border border-slate-800 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Hover Glow Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;