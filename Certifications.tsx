import React from 'react';

export const Certifications = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="text-center md:text-left">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-2">Verified Expertise</div>
            <div className="display text-2xl text-white font-bold">Professional Credentials</div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl">🏆</div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">QuickBooks ProAdvisor</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl">💎</div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Advanced Certified</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl">🛡️</div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Clean-up Specialist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
