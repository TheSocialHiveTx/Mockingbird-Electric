
import React from 'react';
import { SERVICES, BUSINESS_PROFILE } from '../constants';
import { ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-950 mb-6 uppercase tracking-tight">Expert Electrical Solutions</h2>
          <p className="text-lg sm:text-xl text-slate-700 font-bold max-w-2xl mx-auto leading-relaxed px-4">
            Safe, professional, and code-compliant services for every home and business in {BUSINESS_PROFILE.city}.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group p-8 bg-slate-50 rounded-[2rem] border border-slate-200 transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 focus-within:ring-4 focus-within:ring-yellow-500/20"
            >
              <div className="mb-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:bg-yellow-500 transition-colors border border-slate-100">
                <div className="group-hover:text-slate-950 transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-black text-slate-950 mb-3 tracking-tight">{service.title}</h3>
              <p className="text-slate-800 font-bold text-lg mb-6 leading-relaxed opacity-90">
                {service.description}
              </p>
              <a 
                href={`tel:${BUSINESS_PROFILE.phoneRaw}`}
                className="inline-flex items-center gap-2 font-black text-yellow-700 group-hover:text-yellow-800 transition-all text-sm uppercase tracking-widest active:translate-x-1"
              >
                Schedule Now <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-slate-950 p-10 sm:p-14 rounded-[3rem] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-left max-w-xl">
              <h4 className="text-2xl sm:text-3xl font-black text-white mb-4 uppercase tracking-tight">Have an Electrical Emergency?</h4>
              <p className="text-slate-300 font-bold text-lg">Don't wait. Our expert team is standing by to help Pasadena residents 24/7 with urgent power issues.</p>
            </div>
            <a 
              href={`tel:${BUSINESS_PROFILE.phoneRaw}`}
              className="bg-yellow-500 text-slate-950 font-black px-12 py-5 rounded-2xl hover:bg-yellow-600 transition-all shadow-xl shadow-yellow-500/10 w-full md:w-auto text-center text-lg active:scale-95 uppercase tracking-tight"
            >
              Get Help NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
