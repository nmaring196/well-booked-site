import React from 'react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-brand-primary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <Logo className="mb-8 scale-75 -ml-4" />
            <p className="text-slate-400 font-light display text-lg">
              Precision bookkeeping for high-growth businesses. Empowering your growth through stress-free accuracy.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-6">Navigation</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-light">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#diagnosis" className="hover:text-white transition-colors">Diagnosis</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-6">Contact</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-light">
                <li>hello@wellbooked.com</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-slate-600">
            © 2026 Well Booked Bookkeeping. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-slate-600">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
