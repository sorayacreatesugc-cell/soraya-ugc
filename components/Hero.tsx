import React, { useState } from 'react';
import { ArrowDown, MapPin, Instagram, Mail, Youtube, Camera, X } from 'lucide-react';

const Hero: React.FC = () => {
  // Initial placeholder image - pink background headshot
  const [heroImage, setHeroImage] = useState("https://lh3.googleusercontent.com/d/1XbT59iQUU0-kAGBbqor1sxDgydY9St7o");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [tempImageInput, setTempImageInput] = useState("");

  const handleEditClick = () => {
    setTempImageInput(heroImage);
    setIsEditModalOpen(true);
  };

  const handleSaveImage = () => {
    if (tempImageInput.trim()) {
      setHeroImage(tempImageInput);
    }
    setIsEditModalOpen(false);
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center bg-pastel-50 pt-0 md:pt-20 pb-12 overflow-hidden z-0">
      {/* Abstract Background Shapes */}
      <div className="absolute top-10 left-10 w-64 h-16 bg-pastel-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-8 md:gap-12 my-8 md:m-16">
          
          {/* Left Column: Text & Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-1.5 rounded-full text-slate-500 mb-2 text-xs md:text-sm border border-white/50">
              <MapPin size={14} className="text-pastel-500" />
              <span>Arlington, Virginia (Northern Virginia)</span>
            </div>
            
            <h2 className="text-pastel-500 font-bold tracking-[0.2em] uppercase mb-2 flex flex-col md:block items-center md:items-start gap-1">
              <span className="text-2xl md:text-3xl align-middle">UGC Creator</span>
              <span className="text-xs md:text-sm align-middle ml-0 md:ml-2">& Actress</span>
            </h2>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-800 leading-none mb-4">
              Soraya <br />
              <span className="italic text-slate-600">Schwarzenecker</span>
            </h1>

            {/* Split Social Icons */}
            <div className="flex flex-col md:flex-row gap-6 mb-10 justify-center md:justify-start">
              
              {/* UGC Socials */}
              <div className="flex flex-col items-center md:items-start gap-2">
                <span className="text-[10px] font-bold text-pastel-500 uppercase tracking-widest">UGC Socials</span>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/sorayacreates_ugc/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-pastel-400 hover:text-pastel-600 transition-all transform hover:scale-110"
                    title="UGC Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href="https://www.youtube.com/channel/UC6ScBs4Uj0XFvGRiCqscTCA" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-pastel-400 hover:text-pastel-600 transition-all transform hover:scale-110"
                    title="UGC YouTube"
                  >
                    <Youtube size={24} />
                  </a>
                </div>
              </div>

              {/* Separator for desktop */}
              <div className="hidden md:block w-px bg-slate-300 mx-2"></div>

              {/* Acting Socials */}
              <div className="flex flex-col items-center md:items-start gap-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Acting Socials</span>
                <div className="flex gap-4">
                   <a 
                    href="https://www.instagram.com/soraya.schwarzenecker" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 hover:text-slate-600 transition-all transform hover:scale-110"
                    title="Acting Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href="https://www.youtube.com/@sorayaschwarzenecker" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 hover:text-slate-600 transition-all transform hover:scale-110"
                    title="Acting YouTube"
                  >
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
              
               {/* Separator for desktop */}
               <div className="hidden md:block w-px bg-slate-300 mx-2"></div>

               {/* Email */}
               <div className="flex flex-col items-center md:items-start gap-2">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Contact</span>
                 <a 
                    href="mailto:sorayacreates.ugc@gmail.com" 
                    className="text-slate-400 hover:text-slate-600 transition-all transform hover:scale-110"
                    title="Email Me"
                  >
                    <Mail size={24} />
                  </a>
               </div>
            </div>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
              Trained actress with a background in theater, musical performance, and on-camera work.
              I create story-first UGC where performance meets strategy — in English & German.
            </p>

            {/* Buttons */}
            <div className="flex justify-center md:justify-start">
                <a 
                  href="mailto:sorayacreates.ugc@gmail.com"
                  className="bg-slate-800 text-white px-10 py-4 rounded-full font-medium text-lg shadow-lg hover:bg-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 group"
                >
                  Work With Me
                </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex-1 w-2/3 md:w-full max-w-md md:max-w-lg relative group mx-auto md:mx-0">
             <div className="absolute inset-0 bg-pastel-200 rounded-[3rem] transform rotate-3 scale-105 z-0"></div>
             <div className="relative z-10 rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl aspect-[3/4] bg-slate-200">
                <img 
                  src={heroImage} 
                  alt="Soraya Schwarzenecker" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
             </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 hidden md:block">
        <ArrowDown size={24} />
      </div>

      {/* Edit Image Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 relative transform transition-all animate-fade-in-up">
            <button 
              onClick={() => setIsEditModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors bg-slate-100 p-2 rounded-full"
            >
              <X size={20} />
            </button>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-pastel-100 text-pastel-600 rounded-full">
           
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-800">Update Hero Photo</h3>
            </div>
            
            <p className="text-slate-500 mb-6 leading-relaxed">
              Paste the URL of your new photo below to update the hero section.
            </p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Image URL</label>
                <input 
                  type="url" 
                  value={tempImageInput}
                  onChange={(e) => setTempImageInput(e.target.value)}
                  placeholder="https://example.com/photo.jpg"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-pastel-300 transition-all font-medium"
                  autoFocus
                />
              </div>
              
              <div className="flex gap-4 pt-2">
                <button 
                  onClick={() => setIsEditModalOpen(false)}
                  className="flex-1 px-6 py-3 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSaveImage}
                  className="flex-1 px-6 py-3 bg-pastel-500 text-white rounded-xl hover:bg-pastel-600 font-medium shadow-md hover:shadow-lg transition-all"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;