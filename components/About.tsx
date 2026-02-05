import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';

const About: React.FC = () => {
  // State for 4 images in the masonry grid
  const [aboutImages, setAboutImages] = useState([
    "https://lh3.googleusercontent.com/d/1JONxl1YlXFdWMawKC42RhBAhOwjBFvR_", // Headshot (Using existing)
    "https://photos.app.goo.gl/BmpWfW3C76xYS2wx6", // User provided photo 1
    "https://photos.app.goo.gl/BmpWfW3C76xYS2wx6", // User provided photo 2 (Replacing Unsplash)
    "https://photos.app.goo.gl/BmpWfW3C76xYS2wx6"  // User provided photo 3
  ]);
  
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [tempImageInput, setTempImageInput] = useState("");

  const handleEditClick = (index: number) => {
    setActiveImageIndex(index);
    setTempImageInput(aboutImages[index]);
    setIsEditModalOpen(true);
  };

  const handleSaveImage = () => {
    if (tempImageInput.trim() && activeImageIndex !== null) {
      const newImages = [...aboutImages];
      newImages[activeImageIndex] = tempImageInput;
      setAboutImages(newImages);
    }
    setIsEditModalOpen(false);
    setActiveImageIndex(null);
  };

  return (
    <section id="about" className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* About Me Section - Side by Side */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* Text Side */}
            <div className="lg:w-1/2 order-2 lg:order-1 sticky top-24">
                <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6 text-center lg:text-left">
                    About Me
                </h2>
                <div className="w-20 h-1 bg-pastel-300 mb-8 mx-auto lg:mx-0"></div>
                
                <div className="text-slate-600 leading-relaxed text-lg space-y-6">
                    {/* Fun Bubble Grid Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        
                        {/* 1. Bilingual (Swapped from position 4) */}
                        <div className="bg-pastel-50 p-6 rounded-[2rem] border border-pastel-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:rotate-1">
                            <div className="text-4xl mb-3">🌍</div>
                            <h4 className="font-bold text-slate-800 text-lg mb-2 leading-tight">Bilingual (English & German)</h4>
                            <p className="text-slate-600 text-sm leading-relaxed font-medium">UGC tailored for international and European markets</p>
                        </div>
                        
                        {/* 2. Vegan */}
                         <div className="bg-white p-6 rounded-[2rem] border-2 border-slate-100 hover:border-pastel-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:-rotate-1">
                            <div className="text-4xl mb-3">🌱</div>
                            <h4 className="font-bold text-slate-800 text-lg mb-2 leading-tight">Vegan lifestyle</h4>
                            <p className="text-slate-600 text-sm leading-relaxed font-medium">Great fit for plant-based, wellness, and conscious brands</p>
                        </div>

                        {/* 3. Dramatic Arts (Full Width Highlight) */}
                        <div className="sm:col-span-2 bg-gradient-to-br from-white to-pastel-50 p-6 rounded-[2rem] border border-pastel-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                             <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity transform rotate-12 pointer-events-none">
                                <span className="text-9xl">🎭</span>
                             </div>
                            <div className="relative z-10 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                                <div className="text-5xl shrink-0">🎭</div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-xl mb-1">Trained in Dramatic Arts</h4>
                                    <p className="text-slate-700 font-medium leading-relaxed">Strong on-camera presence, storytelling, and confident delivery</p>
                                </div>
                            </div>
                        </div>

                        {/* 4. Married Creator (Swapped from position 1) */}
                        <div className="sm:col-span-2 bg-white p-6 rounded-[2rem] border border-slate-200 hover:border-pastel-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                                <div className="text-4xl shrink-0 bg-pastel-50 p-3 rounded-full shadow-sm">💍</div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-lg mb-1">Married creator</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed font-medium">(My husband is also a creator and can appear in content!)</p>
                                </div>
                            </div>
                        </div>

                        {/* 5. World Traveler (Full Width) */}
                        <div className="sm:col-span-2 bg-slate-50 p-6 rounded-[2rem] border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                                <div className="text-4xl shrink-0 bg-white p-3 rounded-full shadow-sm">✈️</div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-lg mb-1">World traveler</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed font-medium">Currently exploring Europe (Austria, Switzerland & more) — happy to bring your product along on my journeys</p>
                                </div>
                            </div>
                        </div>

                        {/* 6. Outdoor Obsessed (Full Width) */}
                        <div className="sm:col-span-2 bg-pastel-50 p-6 rounded-[2rem] border border-pastel-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                                <div className="text-4xl shrink-0 bg-white p-3 rounded-full shadow-sm">🌊</div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-lg mb-1">Outdoor-obsessed</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed font-medium">Hiking, surfing, ocean days, rollerblading, and active lifestyle content in natural settings</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Image Side - Masonry Grid */}
            <div className="lg:w-1/2 w-full order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                    {/* Column 1 - Starts Lower for Masonry Effect */}
                    <div className="space-y-4 md:space-y-6 pt-8 md:pt-12">
                        <div className="relative group rounded-2xl overflow-hidden shadow-lg border-4 border-white aspect-[3/4]">
                            <img 
                                src={aboutImages[0]} 
                                alt="Soraya Headshot" 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <button onClick={() => handleEditClick(0)} className="absolute bottom-3 right-3 bg-white/90 p-2 rounded-full text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                                <Camera size={16} />
                            </button>
                        </div>
                        <div className="relative group rounded-2xl overflow-hidden shadow-lg border-4 border-white aspect-square">
                            <img 
                                src={aboutImages[2]} 
                                alt="Lifestyle Photo" 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                             <button onClick={() => handleEditClick(2)} className="absolute bottom-3 right-3 bg-white/90 p-2 rounded-full text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                                <Camera size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-4 md:space-y-6">
                        <div className="relative group rounded-2xl overflow-hidden shadow-lg border-4 border-white aspect-square">
                            <img 
                                src={aboutImages[1]} 
                                alt="Lifestyle Photo" 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                             <button onClick={() => handleEditClick(1)} className="absolute bottom-3 right-3 bg-white/90 p-2 rounded-full text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                                <Camera size={16} />
                            </button>
                        </div>
                        <div className="relative group rounded-2xl overflow-hidden shadow-lg border-4 border-white aspect-[3/4]">
                            <img 
                                src={aboutImages[3]} 
                                alt="Lifestyle Photo" 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                             <button onClick={() => handleEditClick(3)} className="absolute bottom-3 right-3 bg-white/90 p-2 rounded-full text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                                <Camera size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                <Camera size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-800">Update Photo</h3>
            </div>
            
            <p className="text-slate-500 mb-6 leading-relaxed">
              Paste the URL of your new photo below.
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

export default About;