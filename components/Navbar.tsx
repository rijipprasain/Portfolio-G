import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Send } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll detection for styling
  useEffect(() => {
    const handleScroll = () => {
      // Increased threshold to 50px to make the initial scroll feel more deliberate
      setScrolled(window.scrollY > 50);
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

  // Shared transition class for consistent timing across all elements
  const transitionClass = "transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]";

  return (
    <>
      {/* 
        Main Header Container 
        - pointer-events-none allows clicking through the empty space around the navbar
        - Transitions padding to dock the navbar to the top
      */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none ${transitionClass} ${
          scrolled ? 'pt-0' : 'pt-6'
        }`}
      >
        <nav 
          className={`
            pointer-events-auto relative
            flex items-center justify-between 
            ${transitionClass}
            ${scrolled 
              ? 'w-full bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/60 shadow-xl py-4 px-6 md:px-12' 
              : 'w-[95%] md:w-[90%] max-w-7xl bg-transparent border border-transparent py-4 px-2'
            }
          `}
        >
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3 group select-none">
            {/* Animated Icon Container */}
            <div className={`
              relative flex items-center justify-center rounded-lg ${transitionClass}
              ${scrolled 
                ? 'w-9 h-9 bg-cyan-950/30 text-cyan-400' 
                : 'w-11 h-11 bg-slate-800/80 text-slate-200 shadow-lg shadow-black/20'
              } 
              group-hover:bg-cyan-500 group-hover:text-slate-900 group-hover:shadow-cyan-500/20
            `}>
              <Terminal 
                size={scrolled ? 18 : 22} 
                className={`${transitionClass}`} 
              />
            </div>

            {/* Animated Text Container */}
            <div className={`flex flex-col ${transitionClass}`}>
              <span className={`font-mono font-bold leading-none flex items-center ${transitionClass} ${
                scrolled ? 'text-slate-200' : 'text-white'
              }`}>
                {/* First Name - Always Visible, Resizes */}
                <span className={`${transitionClass} ${
                  scrolled ? 'text-lg tracking-normal' : 'text-2xl tracking-wide'
                }`}>
                  RIJIP
                </span>

                {/* Last Name - Collapses when scrolled */}
                <span className={`
                  inline-block overflow-hidden whitespace-nowrap ${transitionClass}
                  ${scrolled ? 'max-w-0 opacity-0 -ml-0' : 'max-w-[200px] opacity-100 ml-2'}
                `}>
                  <span className={`${transitionClass} ${
                    scrolled ? 'text-lg' : 'text-2xl text-cyan-100'
                  }`}>
                    PRASAIN
                  </span>
                </span>

                {/* Underscore Cursor - Always Visible */}
                <span className={`text-cyan-500 animate-pulse ${transitionClass} ${
                   scrolled ? 'ml-0.5' : 'ml-1'
                }`}>_</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-1 ${transitionClass} ${
              scrolled ? 'bg-transparent border-transparent' : 'bg-slate-950/20 border border-white/5 backdrop-blur-sm p-1 rounded-xl'
            }`}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`
                  rounded-lg font-medium hover:text-cyan-50 hover:bg-white/10 ${transitionClass}
                  ${scrolled ? 'px-4 py-1.5 text-sm text-slate-300' : 'px-5 py-2 text-sm text-slate-300'}
                `}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a 
              href="#contact"
              className={`hidden md:flex items-center gap-2 rounded-xl font-bold border ${transitionClass} ${
                scrolled
                  ? 'px-4 py-1.5 text-xs bg-cyan-500/10 border-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950'
                  : 'px-6 py-2.5 text-sm bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white shadow-lg'
              }`}
            >
              <Send size={scrolled ? 14 : 16} className={transitionClass} />
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