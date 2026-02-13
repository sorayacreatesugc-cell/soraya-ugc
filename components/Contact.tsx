import React from 'react';
import { Send, Instagram, Mail, Youtube, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-pastel-50 rounded-[3rem] p-8 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6">Let's Create Magic</h2>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto">
            Ready to elevate your brand's social presence? Reach out directly or click below to start our collaboration.
          </p>

          <div className="grid md:grid-cols-2 gap-12 text-left items-center">
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-slate-800 border-b border-pastel-200 pb-2">Contact Info</h3>
              
              {/* Email - Universal */}
              <a href="mailto:sorayacreates.ugc@gmail.com" className="flex items-center gap-4 text-slate-600 hover:text-pastel-600 transition-colors bg-white p-4 rounded-xl shadow-sm border border-transparent hover:border-pastel-200">
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
                 <a href="https://www.instagram.com/sorayacreates_ugc/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-pastel-600 transition-colors bg-white p-4 rounded-xl shadow-sm group border border-transparent hover:border-pastel-200">
                  <div className="bg-pastel-50 p-2 rounded-full text-pastel-400 group-hover:bg-pastel-100 group-hover:text-pastel-600 transition-colors">
                    <Instagram size={20} />
                  </div>
                  <span>@sorayacreates_ugc</span>
                </a>
                <a href="https://www.youtube.com/channel/UC6ScBs4Uj0XFvGRiCqscTCA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-pastel-600 transition-colors bg-white p-4 rounded-xl shadow-sm group border border-transparent hover:border-pastel-200">
                   <div className="bg-pastel-50 p-2 rounded-full text-pastel-400 group-hover:bg-pastel-100 group-hover:text-pastel-600 transition-colors">
                    <Youtube size={20} />
                  </div>
                  <span>Soraya UGC</span>
                </a>
              </div>

               {/* Acting Channels */}
               <div className="space-y-3">
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block ml-1">Acting Channels</span>
                 <a href="https://www.instagram.com/soraya.schwarzenecker" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-slate-800 transition-colors bg-white p-4 rounded-xl shadow-sm group border border-transparent hover:border-slate-200">
                  <div className="bg-slate-100 p-2 rounded-full text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600 transition-colors">
                    <Instagram size={20} />
                  </div>
                  <span>@soraya.schwarzenecker</span>
                </a>
                <a href="https://www.youtube.com/@sorayaschwarzenecker" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-slate-800 transition-colors bg-white p-4 rounded-xl shadow-sm group border border-transparent hover:border-slate-200">
                   <div className="bg-slate-100 p-2 rounded-full text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600 transition-colors">
                    <Youtube size={20} />
                  </div>
                  <span>Soraya Schwarzenecker</span>
                </a>
              </div>
            </div>

            {/* Replaced Form with a simple CTA Button */}
            <div className="flex flex-col items-center justify-center p-8 bg-white/40 backdrop-blur-sm rounded-[2rem] border border-white/60 shadow-inner min-h-[300px]">
              <div className="text-center space-y-6">
                <div className="bg-pastel-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-pastel-600 mb-2">
                   <Send size={28} />
                </div>
                <h3 className="text-2xl font-serif text-slate-800 italic">Ready to start?</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  I'm currently accepting new brand partnerships and acting projects.
                </p>
                <a 
                  href="mailto:sorayacreates.ugc@gmail.com"
                  className="inline-flex items-center gap-3 bg-slate-800 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  Work with me
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;