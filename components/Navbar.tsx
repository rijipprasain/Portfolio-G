import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Send } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll detection for styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Arsenal', href: '#skills' },
    { name: 'History', href: '#experience' },
    { name: 'Ops', href: '#projects' },
  ];

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* 
        Main Header Container 
        - pointer-events-none allows clicking through the empty space around the navbar
        - z-50 ensures it stays on top
        - Transitioning padding to 0 when scrolled to dock the nav
      */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 pointer-events-none ${
          scrolled ? 'pt-0' : 'pt-6'
        }`}
      >
        <nav 
          className={`
            pointer-events-auto relative
            flex items-center justify-between 
            transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${scrolled 
              ? 'w-full bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/60 shadow-xl py-4 px-6 md:px-12' 
              : 'w-[95%] md:w-[90%] max-w-7xl bg-transparent border border-transparent py-4 px-2'
            }
          `}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group select-none">
            <div className={`p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? 'bg-cyan-950/30 text-cyan-400' : 'bg-slate-800/80 text-slate-200'
            } group-hover:bg-cyan-500 group-hover:text-slate-900`}>
              <Terminal size={18} />
            </div>
            <span className={`font-mono font-bold tracking-tight text-lg transition-colors ${
              scrolled ? 'text-slate-200' : 'text-white'
            }`}>
              RIJIP<span className="text-cyan-500">_</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-1 transition-all duration-300 ${
              scrolled ? 'bg-transparent border-transparent' : 'bg-slate-950/20 border border-white/5 backdrop-blur-sm p-1 rounded-xl'
            }`}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="px-5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-cyan-50 hover:bg-white/10 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a 
              href="#contact"
              className={`hidden md:flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 border ${
                scrolled
                  ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950'
                  : 'bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Send size={14} />
              <span>Contact</span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-slate-300 hover:text-white hover:bg-white/10' : 'text-slate-200 hover:text-white bg-slate-800/50'
              }`}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* 
        Mobile Menu Overlay 
        - Full screen fixed overlay
        - Handles z-index to sit above everything
      */}
      <div 
        className={`fixed inset-0 z-[60] bg-slate-950/95 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full p-6 relative overflow-hidden">
          
          {/* Ambient Background Glows */}
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-500/10 rounded-full blur-[80px] pointer-events-none"></div>

          {/* Mobile Header */}
          <div className="flex justify-between items-center mb-12 relative z-10">
             <span className="font-mono font-bold text-slate-100 text-xl">
              MENU<span className="text-cyan-500">.</span>
            </span>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-full border border-slate-800 hover:border-slate-600 transition-all"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col items-center justify-center flex-grow gap-8 relative z-10">
            {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={handleMobileLinkClick}
                className={`text-3xl font-bold text-slate-300 hover:text-cyan-400 transition-all transform duration-500 ${
                   mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                {link.name}
              </a>
            ))}
             
             {/* Mobile CTA */}
             <a 
                href="#contact"
                onClick={handleMobileLinkClick}
                className={`mt-6 px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2 transform duration-500 active:scale-95 transition-all ${
                   mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <Send size={18} /> Send Signal
              </a>
          </div>
          
          {/* Mobile Footer Status */}
          <div className="text-center pb-8 text-slate-600 font-mono text-xs relative z-10">
            SYSTEM_READY // WAITING_INPUT
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;