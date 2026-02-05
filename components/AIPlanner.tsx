import React, { useState } from 'react';
import { Sparkles, Loader2, Lightbulb } from 'lucide-react';
import { generateContentStrategy } from '../services/geminiService';
import { AIStrategyResult, LoadingState } from '../types';

const AIPlanner: React.FC = () => {
  const [brandName, setBrandName] = useState('');
  const [productType, setProductType] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [results, setResults] = useState<AIStrategyResult[]>([]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName || !productType) return;

    setStatus(LoadingState.LOADING);
    setResults([]);

    try {
      const data = await generateContentStrategy(brandName, productType);
      setResults(data);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section id="strategy" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-pastel-50 skew-x-12 transform translate-x-20 -z-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Input */}
          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-pastel-100">
              <div className="flex items-center gap-2 mb-6 text-pastel-500">
                <Sparkles size={24} />
                <span className="font-semibold uppercase tracking-wider text-sm">AI Strategy Audit</span>
              </div>
              <h3 className="text-3xl font-serif text-slate-800 mb-4">Not sure where to start?</h3>
              <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                Enter your brand details below, and my AI assistant will generate 3 custom video concepts instantly to show you how we could collaborate.
              </p>

              <form onSubmit={handleGenerate} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Brand Name</label>
                  <input 
                    type="text" 
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-pastel-300 transition-all"
                    placeholder="e.g. GlowSkin"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Product / Niche</label>
                  <input 
                    type="text" 
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-pastel-300 transition-all"
                    placeholder="e.g. Hydrating Serum"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={status === LoadingState.LOADING || !brandName || !productType}
                  className="w-full bg-slate-800 text-white font-medium py-3 rounded-lg hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 mt-2"
                >
                  {status === LoadingState.LOADING ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Generating...
                    </>
                  ) : (
                    'Generate Concepts'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right: Output */}
          <div className="lg:w-2/3">
            {status === LoadingState.IDLE && (
               <div className="h-full flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/50">
                 <Lightbulb size={48} className="text-slate-300 mb-4" />
                 <p className="text-slate-400 font-serif text-xl">Your custom strategy will appear here.</p>
               </div>
            )}
            
            {status === LoadingState.LOADING && (
               <div className="h-full flex flex-col items-center justify-center text-center p-12">
                 <div className="w-16 h-16 border-4 border-pastel-200 border-t-pastel-500 rounded-full animate-spin mb-6"></div>
                 <p className="text-slate-500 animate-pulse">Analyzing market trends & crafting hooks...</p>
               </div>
            )}

            {status === LoadingState.ERROR && (
               <div className="h-full flex items-center justify-center p-8 bg-red-50 rounded-3xl border border-red-100 text-red-800">
                 <p>Oops! Something went wrong generating the strategy. Please try again.</p>
               </div>
            )}

            {status === LoadingState.SUCCESS && (
              <div className="grid gap-6">
                <div className="flex items-end justify-between mb-4">
                  <h3 className="text-2xl font-serif text-slate-800">Recommended Concepts</h3>
                  <span className="text-xs text-slate-400">Powered by Gemini AI</span>
                </div>
                
                {results.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-pastel-100 text-pastel-800 w-8 h-8 flex items-center justify-center rounded-full font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="space-y-3">
                        <div>
                          <span className="text-xs font-bold text-pastel-500 uppercase tracking-wide">The Hook</span>
                          <p className="font-serif text-lg text-slate-800 italic">"{item.hook}"</p>
                        </div>
                        <div>
                           <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Visuals</span>
                           <p className="text-slate-600 text-sm">{item.visual}</p>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg">
                           <p className="text-xs text-slate-500">
                             <span className="font-semibold text-slate-700">Why it works: </span> 
                             {item.whyItWorks}
                           </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIPlanner;