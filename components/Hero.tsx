
import React from 'react';
import { Phone, CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import { BUSINESS_PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-44 md:pb-24 overflow-hidden bg-slate-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pointer-events-none"></div>
      
      {/* Decorative Elements - Hidden on mobile for performance and clarity */}
      <div className="absolute top-0 right-0 -mr-24 mt-12 opacity-10 hidden lg:block pointer-events-none">
        <Zap className="w-96 h-96 text-yellow-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full px-4 py-2 mb-6">
            <span className="flex h-2.5 w-2.5 rounded-full bg-yellow-500 animate-pulse"></span>
            <span className="text-yellow-400 text-xs sm:text-sm font-black tracking-widest uppercase">Serving Pasadena & Surrounding</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-[1.1] text-white tracking-tight">
            Reliable, Licensed <span className="text-yellow-500">Electricians</span> You Can Trust.
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-200 font-medium mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed drop-shadow-sm">
            Power issues? Outdated wiring? Don't risk your home's safety. Get a professional inspection and fast service today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10">
            <a 
              href={`tel:${BUSINESS_PROFILE.phoneRaw}`}
              className="flex items-center justify-center gap-3 w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-black px-10 py-5 rounded-2xl shadow-xl shadow-yellow-500/20 transition-all active:scale-95 text-lg uppercase tracking-tight"
            >
              <Phone className="w-6 h-6 fill-current" />
              {BUSINESS_PROFILE.primaryCTA}
            </a>
            <div className="flex items-center gap-2 text-white font-bold bg-white/5 backdrop-blur-sm px-5 py-4 rounded-2xl border border-white/10">
              <CheckCircle className="w-5 h-5 text-yellow-500" />
              <span className="text-base sm:text-lg">{BUSINESS_PROFILE.primaryOffer}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-8 border-t border-slate-700/50 pt-8 text-left">
            <div className="flex items-center gap-3">
              <div className="bg-white/5 p-2 rounded-xl">
                <ShieldCheck className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <p className="font-bold text-white text-sm sm:text-base">Licensed</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Pasadena TX</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/5 p-2 rounded-xl">
                <Zap className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <p className="font-bold text-white text-sm sm:text-base">Fast Response</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Same-Day Avail.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Section - Stacked below on mobile */}
        <div className="relative mt-8 md:mt-0">
          <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/5 relative z-10 group">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000" 
              alt="Electrician troubleshooting"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
          </div>
          
          {/* Review Float - Simplified for mobile */}
          <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white p-5 sm:p-7 rounded-[1.5rem] shadow-2xl border-2 border-slate-50 max-w-[180px] sm:max-w-[220px] z-20 animate-bounce-subtle">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <ShieldCheck key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-slate-950 font-black text-sm sm:text-base leading-tight">"Expert troubleshooting!"</p>
            <p className="text-slate-500 font-black text-[10px] sm:text-xs mt-1 uppercase tracking-widest">— Pasadena Resident</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
