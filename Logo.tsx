import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 bg-white rounded-xl rotate-45"></div>
        <div className="absolute inset-0 flex items-center justify-center text-brand-primary font-black text-xl italic">
          W
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-white font-black uppercase tracking-[0.3em] text-lg leading-none">Well</span>
        <span className="text-slate-500 font-light uppercase tracking-[0.5em] text-[10px] mt-1">Booked</span>
      </div>
    </div>
  );
};
