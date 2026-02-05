import React from 'react';
import { Send, Instagram, Mail, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-pastel-50 rounded-[3rem] p-8 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6">Let's Create Magic</h2>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto">
            Ready to elevate your brand's social presence? Fill out the form below or reach out directly.
          </p>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-slate-800 border-b border-pastel-200 pb-2">Contact Info</h3>
              
              {/* Email - Universal */}
              <a href="mailto:sorayacreates.ugc@gmail.com" className="flex items-center gap-4 text-slate-600 hover:text-pastel-600 transition-colors bg-white p-4 rounded-xl shadow-sm">
                <div className="bg-pastel-100 p-2 rounded-full text-pastel-600">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-pastel-500 uppercase">Email</span>
                  <span className="break-all font-medium">sorayacreates.ugc@gmail.com</span>
                </div>
              </a>

              {/* UGC Channels */}
              <div className="space-y-3">
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block ml-1">UGC Channels</span>
                 <a href="https://www.instagram.com/sorayacreates_ugc/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-pastel-600 transition-colors bg-white p-4 rounded-xl shadow-sm group">
                  <div className="bg-pastel-50 p-2 rounded-full text-pastel-400 group-hover:bg-pastel-100 group-hover:text-pastel-600 transition-colors">
                    <Instagram size={20} />
                  </div>
                  <span>@sorayacreates_ugc</span>
                </a>
                <a href="https://www.youtube.com/channel/UC6ScBs4Uj0XFvGRiCqscTCA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-pastel-600 transition-colors bg-white p-4 rounded-xl shadow-sm group">
                   <div className="bg-pastel-50 p-2 rounded-full text-pastel-400 group-hover:bg-pastel-100 group-hover:text-pastel-600 transition-colors">
                    <Youtube size={20} />
                  </div>
                  <span>Soraya UGC</span>
                </a>
              </div>

               {/* Acting Channels */}
               <div className="space-y-3">
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block ml-1">Acting Channels</span>
                 <a href="https://www.instagram.com/soraya.schwarzenecker" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-slate-800 transition-colors bg-white p-4 rounded-xl shadow-sm group">
                  <div className="bg-slate-100 p-2 rounded-full text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600 transition-colors">
                    <Instagram size={20} />
                  </div>
                  <span>@soraya.schwarzenecker</span>
                </a>
                <a href="https://www.youtube.com/@sorayaschwarzenecker" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-slate-800 transition-colors bg-white p-4 rounded-xl shadow-sm group">
                   <div className="bg-slate-100 p-2 rounded-full text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600 transition-colors">
                    <Youtube size={20} />
                  </div>
                  <span>Soraya Schwarzenecker</span>
                </a>
              </div>
            </div>

            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-white border-0 rounded-xl px-6 py-4 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-pastel-300 shadow-sm"
              />
              <input 
                type="email" 
                placeholder="Business Email" 
                className="w-full bg-white border-0 rounded-xl px-6 py-4 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-pastel-300 shadow-sm"
              />
              <textarea 
                placeholder="Tell me about your project..." 
                rows={4}
                className="w-full bg-white border-0 rounded-xl px-6 py-4 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-pastel-300 shadow-sm resize-none"
              ></textarea>
              <button className="w-full bg-slate-800 text-white py-4 rounded-xl font-medium hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;