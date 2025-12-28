
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import { CheckCircle, Phone } from 'lucide-react';
import { BUSINESS_PROFILE } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        
        {/* Trust Signals Strip - Refined with better mobile scrolling layout */}
        <div className="bg-slate-50 border-y border-slate-200 overflow-hidden py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 sm:gap-10 text-slate-950">
              <div className="font-black text-xs sm:text-sm tracking-[0.2em] flex items-center gap-3 uppercase">
                <CheckCircle className="text-yellow-600 w-6 h-6 flex-shrink-0" /> 
                Pasadena Local
              </div>
              <div className="font-black text-xs sm:text-sm tracking-[0.2em] flex items-center gap-3 uppercase">
                <CheckCircle className="text-yellow-600 w-6 h-6 flex-shrink-0" /> 
                Licensed & Insured
              </div>
              <div className="font-black text-xs sm:text-sm tracking-[0.2em] flex items-center gap-3 uppercase">
                <CheckCircle className="text-yellow-600 w-6 h-6 flex-shrink-0" /> 
                Same-Day Avail.
              </div>
              <div className="hidden lg:flex font-black text-sm tracking-[0.2em] items-center gap-3 uppercase">
                <CheckCircle className="text-yellow-600 w-6 h-6 flex-shrink-0" /> 
                5-Star Rated
              </div>
            </div>
          </div>
        </div>

        <Services />

        {/* Process Section - Optimized for high-impact mobile reading */}
        <section className="py-20 md:py-32 bg-slate-950 text-white overflow-hidden relative border-t border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-50"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16 px-4">
              <h2 className="text-3xl sm:text-5xl font-black mb-4 uppercase tracking-tighter">Getting Your Power Back</h2>
              <p className="text-yellow-500 text-lg sm:text-xl font-black uppercase tracking-[0.2em]">Restored in 3 simple steps</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10 md:gap-12">
              {[
                { step: "01", title: "Call Mockingbird", text: "Speak directly with a local expert at (832) 230-5883 now." },
                { step: "02", title: "Expert Diagnosis", text: "We visit your property for a professional safety inspection." },
                { step: "03", title: "Fast Resolution", text: "Quick, code-compliant repairs with guaranteed quality." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-900/50 backdrop-blur-md p-10 rounded-[2.5rem] border-2 border-slate-800/50 text-center relative shadow-2xl group transition-all hover:border-yellow-500/50">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-yellow-500 text-slate-950 rounded-2xl rotate-6 flex items-center justify-center font-black text-2xl shadow-xl ring-8 ring-slate-950 group-hover:rotate-0 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-black mb-4 mt-8 text-white uppercase tracking-tight">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed font-bold text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WhyChooseUs />

        {/* Final CTA Strip - High impact mobile conversion block */}
        <section className="py-20 md:py-32 bg-yellow-500 relative border-y-[6px] border-slate-950 overflow-hidden">
          <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black text-slate-950 mb-10 leading-none uppercase tracking-tighter italic">
              Don't Wait For A Fire
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={`tel:${BUSINESS_PROFILE.phoneRaw}`}
                className="flex items-center justify-center gap-4 w-full sm:w-auto bg-slate-950 hover:bg-slate-900 text-white font-black px-14 py-7 rounded-3xl shadow-2xl transition-all active:scale-95 text-xl sm:text-2xl uppercase tracking-tighter"
              >
                <Phone className="w-8 h-8 fill-current" />
                {BUSINESS_PROFILE.phone}
              </a>
              <span className="text-slate-950 font-black uppercase tracking-[0.5em] text-lg hidden sm:block">OR</span>
              <div className="text-slate-950 font-black bg-white/40 px-8 py-6 rounded-3xl border-4 border-slate-950 shadow-inner text-xl uppercase tracking-tight w-full sm:w-auto">
                {BUSINESS_PROFILE.primaryOffer}
              </div>
            </div>
            <p className="mt-12 text-slate-950 font-black text-xl sm:text-3xl max-w-2xl mx-auto leading-tight italic">
              "Most electrical fires start with a small flicker. Call us for a free safety check today."
            </p>
          </div>
        </section>

        <FAQ />
      </main>

      <Footer />
      <MobileCTA />
    </div>
  );
};

export default App;
