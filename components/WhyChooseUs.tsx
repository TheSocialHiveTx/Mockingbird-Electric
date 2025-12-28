
import React from 'react';
import { WHY_CHOOSE_US, BUSINESS_PROFILE } from '../constants';
import { Star } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Why Pasadena Homeowners Choose <span className="text-yellow-700">{BUSINESS_PROFILE.name}</span>
            </h2>
            <p className="text-xl text-slate-800 font-medium mb-10 leading-relaxed">
              We aren't just electricians; we are your neighbors. We pride ourselves on transparent pricing, safety-first procedures, and a commitment to getting the job done right.
            </p>

            <div className="space-y-8">
              {WHY_CHOOSE_US.map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-yellow-600 shadow-sm border border-slate-200">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-700 font-medium leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-slate-900 rounded-3xl overflow-hidden shadow-2xl rotate-3 transform hidden sm:block absolute inset-0 -z-10 opacity-10"></div>
            <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-slate-200 relative">
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />)}
              </div>
              <blockquote className="text-center mb-8">
                <p className="text-2xl font-bold text-slate-900 italic mb-4 leading-relaxed">
                  "Found them when my panel started buzzing. They were at my house in 2 hours and fixed it by the afternoon. Truly saved my day!"
                </p>
                <cite className="text-slate-800 font-black not-italic text-sm tracking-wide">— SARAH J., PASADENA RESIDENT</cite>
              </blockquote>
              <div className="flex items-center justify-center gap-4 pt-8 border-t border-slate-200">
                <img src="https://picsum.photos/id/64/48/48" alt="Reviewer" className="w-12 h-12 rounded-full ring-2 ring-yellow-500 ring-offset-2 shadow-sm" />
                <div className="text-left">
                  <p className="font-black text-slate-900 text-sm">Verified Customer</p>
                  <p className="text-xs text-slate-700 font-bold">Service: Emergency Panel Repair</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
