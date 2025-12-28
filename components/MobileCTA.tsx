
import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_PROFILE } from '../constants';

const MobileCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 z-50 shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.1)]">
      <a 
        href={`tel:${BUSINESS_PROFILE.phoneRaw}`}
        className="relative flex items-center justify-center gap-3 w-full bg-yellow-500 text-slate-950 font-black py-4 rounded-2xl shadow-lg shadow-yellow-500/20 active:scale-95 transition-all overflow-hidden group"
      >
        <div className="absolute inset-0 bg-white/20 scale-x-0 group-active:scale-x-100 transition-transform origin-left duration-200"></div>
        <div className="relative flex items-center gap-2">
          <Phone className="w-5 h-5 fill-current animate-pulse" />
          <span className="text-lg tracking-tight">{BUSINESS_PROFILE.primaryCTA.toUpperCase()} NOW</span>
        </div>
      </a>
    </div>
  );
};

export default MobileCTA;
