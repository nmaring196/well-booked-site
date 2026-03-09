import React, { useState } from 'react';

interface DiagnosisToolProps {
  challenges: string;
  setChallenges: (val: string) => void;
}

export const DiagnosisTool: React.FC<DiagnosisToolProps> = ({ challenges, setChallenges }) => {
  const [step, setStep] = useState(1);
  
  const options = [
    { id: 'messy', label: 'My QuickBooks is a mess', icon: '🌪️' },
    { id: 'behind', label: 'I am months behind on reconciliations', icon: '⏳' },
    { id: 'growth', label: 'I am growing fast and need better systems', icon: '🚀' },
    { id: 'taxes', label: 'I am worried about tax season', icon: '📅' }
  ];

  const handleToggle = (label: string) => {
    if (challenges.includes(label)) {
      setChallenges(challenges.replace(label + ', ', '').replace(label, ''));
    } else {
      setChallenges(challenges + (challenges ? ', ' : '') + label);
    }
  };

  return (
    <section className="py-32 bg-slate-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="glass p-12 rounded-[3rem] border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5 text-[10px] display uppercase tracking-[0.5em] text-slate-400">
                Free Assessment
              </div>
              <h2 className="display text-5xl text-white font-bold mb-4">Mini Diagnosis.</h2>
              <p className="text-slate-400 font-light italic">Select your biggest bookkeeping headaches</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleToggle(opt.label)}
                  className={`p-6 rounded-2xl border text-left transition-all flex items-center gap-4 ${
                    challenges.includes(opt.label) 
                    ? 'bg-white border-white text-brand-primary' 
                    : 'bg-white/5 border-white/10 text-white hover:border-white/30'
                  }`}
                >
                  <span className="text-2xl">{opt.icon}</span>
                  <span className="font-medium">{opt.label}</span>
                </button>
              ))}
            </div>

            <div className="text-center">
              <p className="text-slate-500 text-sm mb-8 font-mono">
                {challenges ? `Selected: ${challenges}` : 'Select at least one to continue'}
              </p>
              <a 
                href="#contact"
                className={`inline-block px-12 py-5 rounded-full font-black uppercase tracking-[0.4em] text-[11px] transition-all ${
                  challenges 
                  ? 'bg-white text-brand-primary hover:scale-105 shadow-xl' 
                  : 'bg-white/10 text-white/20 cursor-not-allowed'
                }`}
              >
                Get My Solution
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
