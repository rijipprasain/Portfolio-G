import React from 'react';
import BinaryRain from './components/BinaryRain';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-slate-950 selection:bg-cyan-500/30">
      
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Layer 1: Binary Rain (Deepest) */}
        <div className="opacity-40">
           <BinaryRain />
        </div>
        
        {/* Layer 2: Holographic Grid & Vignette */}
        <div className="absolute inset-0 bg-grid-holo opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#020617_85%)]" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        
        <main className="w-full flex flex-col gap-32 pb-24 pt-10">
          <section id="hero">
            <Hero />
          </section>
          
          <section id="about" className="scroll-mt-24">
            <About />
          </section>

          <section id="skills" className="scroll-mt-24">
            <Skills />
          </section>

          <section id="experience" className="scroll-mt-24">
            <Experience />
          </section>

          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>

          <section id="contact" className="scroll-mt-24">
            <Contact />
          </section>
        </main>

        <footer className="w-full py-10 text-center border-t border-slate-800/50 mb-4">
          <div className="font-mono text-xs text-slate-600">
            <p className="mb-2">DESIGNED & ENGINEERED BY RIJIP PRASAIN</p>
            <p className="opacity-50">SYSTEM STATUS: OPERATIONAL</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;