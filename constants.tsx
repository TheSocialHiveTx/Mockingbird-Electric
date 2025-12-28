
import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  CheckCircle2, 
  Wrench, 
  Lightbulb, 
  Search, 
  UserCheck, 
  CalendarCheck 
} from 'lucide-react';

export const BUSINESS_PROFILE = {
  name: "Mockingbird Electric",
  category: "Electrician",
  city: "Pasadena",
  state: "TX",
  phone: "(832) 230-5883",
  phoneRaw: "8322305883",
  address: "2950 Shaver St Suite D-14, Pasadena, TX 77502",
  hours: "Mon–Fri 8:00 AM – 5:00 PM (After-hours by request)",
  primaryOffer: "Free Electrical Inspection",
  primaryCTA: "Call Now",
};

export const SERVICES = [
  {
    id: "repairs",
    title: "Residential Electrical Repairs",
    description: "Fast, reliable fixing of flickering lights, faulty circuits, and hazardous wiring in your home.",
    icon: <Zap className="w-8 h-8 text-yellow-500" />
  },
  {
    id: "upgrades",
    title: "Panel Upgrades",
    description: "Modernize your home's power capacity with a safe, high-capacity electrical panel installation.",
    icon: <ShieldCheck className="w-8 h-8 text-yellow-500" />
  },
  {
    id: "troubleshooting",
    title: "Electrical Troubleshooting",
    description: "Pinpoint accuracy in finding hidden electrical issues before they become dangerous emergencies.",
    icon: <Search className="w-8 h-8 text-yellow-500" />
  },
  {
    id: "outlets",
    title: "Outlet & Switch Repair",
    description: "Replace broken, sparking, or non-functional outlets and switches with safety-tested hardware.",
    icon: <Wrench className="w-8 h-8 text-yellow-500" />
  },
  {
    id: "lighting",
    title: "Lighting Installation",
    description: "Transform your living space with energy-efficient LED upgrades and custom fixture installs.",
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />
  },
  {
    id: "inspections",
    title: "Electrical Inspections",
    description: "Comprehensive safety audits to ensure your home meets current Texas electrical codes.",
    icon: <CheckCircle2 className="w-8 h-8 text-yellow-500" />
  }
];

export const FAQS = [
  {
    question: "Are you licensed and insured for Pasadena, TX?",
    answer: "Yes, we are a local Pasadena-based business and our electricians are fully licensed where required and insured to protect your home and our team."
  },
  {
    question: "Do you offer free electrical inspections?",
    answer: "Absolutely! We believe in transparency. We provide a free initial electrical inspection to diagnose your issue and provide an honest estimate."
  },
  {
    question: "How quickly can you schedule my service?",
    answer: "We prioritize urgent calls. Typically, we can schedule a visit within 24-48 hours, and we offer emergency troubleshooting for power outages."
  },
  {
    question: "My breakers keep tripping. Is this a safety concern?",
    answer: "Yes. Frequent tripping usually means a circuit is overloaded or there is a short. It's a fire hazard and should be inspected by a professional immediately."
  },
  {
    question: "What areas besides Pasadena do you cover?",
    answer: "While we are based on Shaver St in Pasadena, we serve the surrounding communities including Deer Park, La Porte, South Houston, and the Greater Houston area."
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Local Pasadena Experts",
    description: "We know the specific electrical codes and building styles in Pasadena and surrounding Harris County.",
    icon: <MapPin className="w-6 h-6" />
  },
  {
    title: "Urgent Response",
    description: "Power issues don't wait. We offer prompt scheduling and clear communication throughout the process.",
    icon: <Clock className="w-6 h-6" />
  },
  {
    title: "Safety Focused",
    description: "Your family's safety is our priority. We never cut corners and always ensure code compliance.",
    icon: <ShieldCheck className="w-6 h-6" />
  }
];
