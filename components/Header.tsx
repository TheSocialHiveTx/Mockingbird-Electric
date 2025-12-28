
import React from 'react';
import { Zap, Phone } from 'lucide-react';
import { BUSINESS_PROFILE } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-40 border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="bg-yellow-500 p-2 rounded-xl shadow-sm transition-transform group-hover:rotate-12">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-slate-950 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg sm:text-2xl text-slate-950 leading-none tracking-tighter">Mockingbird</span>
            <span className="text-[10px] sm:text-xs font-black text-yellow-600 tracking-[0.2em] uppercase">Electric</span>
          </div>
        </a>
        
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-8 font-bold text-slate-700 text-sm uppercase tracking-widest">
            <a href="#services" className="hover:text-yellow-600 transition-colors py-2 border-b-2 border-transparent hover:border-yellow-500">Services</a>
            <a href="#why-us" className="hover:text-yellow-600 transition-colors py-2 border-b-2 border-transparent hover:border-yellow-500">Why Us</a>
            <a href="#faq" className="hover:text-yellow-600 transition-colors py-2 border-b-2 border-transparent hover:border-yellow-500">FAQ</a>
          </nav>
          <a 
            href={`tel:${BUSINESS_PROFILE.phoneRaw}`}
            className="flex items-center gap-3 bg-slate-950 text-white px-6 py-3 rounded-2xl font-black hover:bg-slate-800 transition-all text-sm shadow-xl shadow-slate-900/10 active:scale-95"
          >
            <Phone className="w-4 h-4 fill-current" />
            {BUSINESS_PROFILE.phone}
          </a>
        </div>

        <a 
          href={`tel:${BUSINESS_PROFILE.phoneRaw}`}
          className="md:hidden flex items-center gap-2 bg-slate-950 text-white px-5 py-2.5 rounded-xl font-black text-xs active:scale-90 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          CALL
        </a>
      </div>
    </header>
  );
};

export default Header;
