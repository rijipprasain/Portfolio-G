import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Application Security Intern",
      company: "Country Corn Australia",
      location: "Melrose Park, NSW",
      period: "Sep 2025 – Nov 2025",
      duties: [
        "Analyzed and optimized website architecture for security and performance.",
        "Implemented CI/CD workflows and secure coding practices.",
        "Dockerized deployments for consistent development environments.",
        "Collaborated on full-scale SEO strategies to enhance visibility."
      ]
    },
    {
      role: "Associate IT Engineer",
      company: "Leapfrog Technology, Inc.",
      location: "Kathmandu, Nepal",
      period: "Sep 2023 – Feb 2024",
      duties: [
        "Managed virtual infrastructure across hybrid cloud environments.",
        "Hardened server security via firewall optimization and OS patching.",
        "Maintained comprehensive inventory and documentation systems.",
        "Assisted in network reliability upgrades and migrations."
      ]
    },
    {
      role: "Fellowship on Infrastructure",
      company: "Nepal Clearing House",
      location: "Kathmandu, Nepal",
      period: "May 2023 – Aug 2023",
      duties: [
        "Administered Active Directory access controls and user permissions.",
        "Configured L2TP/IPSec VPNs for secure remote access.",
        "Diagnosed complex LAN/WAN connectivity issues for endpoint devices."
      ]
    }
  ];

  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-cyan-500 font-mono text-xl">03.</span>
        <h2 className="text-3xl font-bold text-white tracking-tight">Mission History</h2>
        <div className="h-[1px] bg-slate-800 flex-grow max-w-xs" />
      </div>

      <div className="space-y-12 pl-4 md:pl-0">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group md:grid md:grid-cols-[1fr,4rem,1fr] md:gap-0">
            
            {/* Left Side (Date/Location on Desktop) */}
            <div className="hidden md:flex flex-col items-end justify-start pt-2 text-right pr-6">
                <span className="font-mono text-sm text-cyan-400 mb-1 tracking-wider">{exp.period}</span>
                <span className="text-xs text-slate-500 flex items-center gap-1 uppercase tracking-wide font-semibold">
                    {exp.location}
                </span>
            </div>

            {/* Center Circuit Line */}
            <div className="flex flex-col items-center relative">
                {/* Circuit Line */}
                <div className="absolute top-0 bottom-0 w-[2px] bg-slate-800 group-hover:bg-cyan-900/50 transition-colors"></div>
                
                {/* Glowing Node */}
                <div className="w-4 h-4 rounded-full border-2 border-cyan-500 bg-slate-950 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10 mt-2 relative group-hover:scale-125 transition-transform duration-300">
                  <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
                </div>
            </div>

            {/* Right Side (Content) */}
            <div className="pb-8 md:pb-0 pl-6 md:pl-6 pt-1">
                <div className="md:hidden flex items-center gap-3 mb-2 text-xs font-mono text-slate-500">
                    <span className="text-cyan-400">{exp.period}</span>
                    <span>|</span>
                    <span>{exp.location}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                </h3>
                <div className="text-slate-400 font-medium mb-4 font-mono text-sm">{exp.company}</div>
                
                <div className="bg-slate-900/30 border border-slate-800 p-5 rounded-md hover:border-slate-700 transition-colors">
                  <ul className="space-y-3">
                      {exp.duties.map((duty, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                              <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-500/50 rounded-full shrink-0"></span>
                              {duty}
                          </li>
                      ))}
                  </ul>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;