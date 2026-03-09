import React, { useState, useEffect } from 'react';
import { Hero } from './Hero';
import { Services } from './Services';
import { Certifications } from './Certifications';
import { DiagnosisTool } from './DiagnosisTool';
import { LeadForm } from './LeadForm';
import { Footer } from './Footer';
import { Logo } from './Logo';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [challenges, setChallenges] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      document.querySelectorAll('.reveal').forEach(r => {
        const top = r.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) r.classList.add('active');
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-primary text-slate-200 selection:bg-white selection:text-brand-primary font-sans">
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${scrolled ? 'bg-brand-primary/95 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-10'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="hover:opacity-80 transition-opacity">
            <Logo className="scale-90" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#contact" className="text-[10px] display font-black uppercase tracking-[0.4em] text-slate-400 hover:text-white transition-colors">Contact</a>
            <a 
              href="#diagnosis" 
              className="px-6 py-3 bg-white text-brand-primary text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:scale-105 transition-all shadow-lg"
            >
              Free Mini Diagnosis
            </a>
          </div>
        </div>
      </nav>

      <main>
        <div id="home">
          <Hero />
        </div>

        <div className="reveal">
          <Services />
        </div>

        <div className="reveal">
          <Certifications />
        </div>

        <div id="diagnosis" className="reveal">
          <DiagnosisTool challenges={challenges} setChallenges={setChallenges} />
        </div>
        
        <div id="contact" className="reveal py-20 bg-slate-900/50">
          <div className="container mx-auto px-6 text-center mb-16">
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <a 
                href="#form-section" 
                className="px-8 py-4 border border-white/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] hover:bg-white hover:text-brand-primary transition-all"
              >
                Request Full Cleanup
              </a>
              <a 
                href="#form-section" 
                className="px-8 py-4 bg-white text-brand-primary rounded-full text-[10px] font-black uppercase tracking-[0.5em] hover:scale-105 transition-all shadow-xl"
              >
                Book Discovery Call
              </a>
            </div>
          </div>
          <div id="form-section">
            <LeadForm initialChallenges={challenges} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
