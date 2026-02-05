import React from 'react';
import { Check } from 'lucide-react';
import { ServicePackage } from '../types';

const packages: ServicePackage[] = [
  {
    title: "The Tester",
    price: "€150",
    features: [
      "1 UGC Video (15-30s)",
      "Script & Concept",
      "Basic Editing",
      "1 Revision",
      "30-Day Usage Rights"
    ]
  },
  {
    title: "The Growth Bundle",
    price: "€400",
    features: [
      "3 UGC Videos",
      "2 Hooks per video",
      "Script & Strategy",
      "Trend Research",
      "Advanced Editing",
      "90-Day Usage Rights"
    ],
    popular: true
  },
  {
    title: "Monthly Partner",
    price: "€1,200",
    features: [
      "8 UGC Videos / Month",
      "Weekly Strategy Calls",
      "Raw Footage Included",
      "Whitelisted Ads Access",
      "Priority Turnaround",
      "Unlimited Usage Rights"
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-4">Investment</h2>
          <p className="text-slate-500 max-w-lg mx-auto">Transparent pricing for high-quality content assets.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-3xl p-8 border ${pkg.popular ? 'border-pastel-400 shadow-xl scale-105 z-10' : 'border-slate-100 shadow-sm hover:shadow-lg'} transition-all duration-300 flex flex-col`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pastel-400 text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                  Best Value
                </div>
              )}
              
              <div className="mb-8 text-center">
                <h3 className="text-xl font-medium text-slate-600 mb-2">{pkg.title}</h3>
                <div className="text-4xl font-serif font-bold text-slate-800">{pkg.price}</div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-600 text-sm">
                    <Check size={16} className="text-pastel-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-medium transition-colors ${pkg.popular ? 'bg-pastel-500 hover:bg-pastel-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}>
                Book Now
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center max-w-3xl mx-auto">
          <h4 className="font-serif text-xl text-slate-800 mb-2">Need a custom package?</h4>
          <p className="text-slate-500 mb-4">I offer photography bundles, raw footage only, and bulk deals.</p>
          <a href="#contact" className="text-pastel-500 font-semibold hover:underline">Let's chat about your specific needs &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default Services;