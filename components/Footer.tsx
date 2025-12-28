
import React from 'react';
import { BUSINESS_PROFILE } from '../constants';
import { Zap, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-32 md:pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Zap className="w-8 h-8 text-yellow-500 fill-current" />
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl leading-none tracking-tight">Mockingbird</span>
                <span className="text-xs font-bold text-yellow-500 tracking-widest uppercase">Electric</span>
              </div>
            </div>
            <p className="text-slate-200 font-medium leading-relaxed text-lg">
              Pasadena's choice for safe, reliable, and professional residential electrical services. Your safety is our business.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-500">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${BUSINESS_PROFILE.phoneRaw}`} className="flex items-center gap-3 text-white font-bold hover:text-yellow-500 transition-colors text-lg">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  {BUSINESS_PROFILE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-200 font-medium text-lg leading-relaxed">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <span>{BUSINESS_PROFILE.address}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-200 font-medium text-lg leading-relaxed">
                <Clock className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <span>{BUSINESS_PROFILE.hours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-500">Service Areas</h4>
            <ul className="grid grid-cols-1 gap-2 text-slate-200 font-bold text-lg">
              <li className="flex items-center gap-2"><span className="text-yellow-500 text-xs">●</span> Pasadena, TX</li>
              <li className="flex items-center gap-2"><span className="text-yellow-500 text-xs">●</span> Deer Park, TX</li>
              <li className="flex items-center gap-2"><span className="text-yellow-500 text-xs">●</span> La Porte, TX</li>
              <li className="flex items-center gap-2"><span className="text-yellow-500 text-xs">●</span> South Houston, TX</li>
              <li className="flex items-center gap-2"><span className="text-yellow-500 text-xs">●</span> Greater Houston</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-yellow-500">Quick Links</h4>
            <ul className="space-y-3 text-slate-200 font-bold text-lg">
              <li><a href="#services" className="hover:text-yellow-500 transition-colors">Our Services</a></li>
              <li><a href="#why-us" className="hover:text-yellow-500 transition-colors">Why Choose Us</a></li>
              <li><a href="#faq" className="hover:text-yellow-500 transition-colors">Safety FAQ</a></li>
              <li><a href={`tel:${BUSINESS_PROFILE.phoneRaw}`} className="hover:text-yellow-500 transition-colors">Request Inspection</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-300 font-bold">
          <p>© {new Date().getFullYear()} {BUSINESS_PROFILE.name}. All rights reserved.</p>
          <p className="bg-slate-800 px-3 py-1 rounded-full text-slate-200">Licensed Electrical Contractor #TBD (Pasadena, TX)</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors underline underline-offset-4">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors underline underline-offset-4">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
