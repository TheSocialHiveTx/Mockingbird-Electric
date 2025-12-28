
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-700 font-medium">Get quick answers to common electrical concerns.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl transition-all duration-200 shadow-sm ${openIndex === idx ? 'border-yellow-500 bg-yellow-50/50 ring-1 ring-yellow-500' : 'border-slate-200 hover:border-slate-400 hover:shadow-md'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-slate-900 md:text-xl">{faq.question}</span>
                {openIndex === idx ? (
                  <ChevronUp className="w-6 h-6 text-yellow-700" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-slate-500" />
                )}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-slate-900 text-lg font-medium leading-relaxed border-t border-yellow-200 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
