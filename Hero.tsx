import React from 'react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 text-[10px] display uppercase tracking-[0.5em] text-slate-400 animate-fade-in">
            Premium Bookkeeping for Growth
          </div>
          
          <h1 className="display text-7xl md:text-9xl text-white font-bold leading-[0.85] tracking-tighter mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Empowering <br />
            <span className="silver-text italic">Growth</span> Through <br />
            Stress-Free <br />
            <span className="silver-text italic">Accuracy.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 font-light display leading-relaxed max-w-2xl mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Your financials shouldn't be a mystery. We provide the clarity and precision high-growth businesses need to scale with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a 
              href="#contact" 
              className="px-10 py-5 bg-white text-brand-primary text-[11px] font-black uppercase tracking-[0.4em] rounded-full hover:scale-105 transition-all shadow-2xl flex items-center justify-center"
            >
              Get Started
            </a>
            <a 
              href="#diagnosis" 
              className="px-10 py-5 border border-white/20 text-white text-[11px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-white/5 transition-all flex items-center justify-center"
            >
              Free Diagnosis
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50"></div>
    </section>
  );
};
