import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';

const About: React.FC = () => {
  // State for images
  const [aboutImages, setAboutImages] = useState([
    "https://lh3.googleusercontent.com/d/1JONxl1YlXFdWMawKC42RhBAhOwjBFvR_", 
    "https://lh3.googleusercontent.com/pw/AP1GczO3y9Fahl8SWKCoHh5PJovEwsTLiXpyRHIX7hPwPLdcHP2lJY204u2r_z-KKhpDL-8X-QTqa6Rdk8dTvMl6OlW5tnKLvMWqjx_S3E1zLP6B0WWLXxby_56BJFcVP_h4wMs-uUndZehsGV0ww_ZPbUmhdw=w1025-h765-s-no-gm?authuser=0", 
    "https://lh3.googleusercontent.com/pw/AP1GczMMzIPYOTwsWNc4ZCHXJeEWn7NRC7qWN-2Yy7Z_D0_d5QziPVYpqX0_kBLWo-YKQyT_B9jXys6yrupmfQgxVfd0EhDjVDlCTwPiKY5GlIWgCscI7fdYkcUIOV5VmaQJQ2oh1ou3FJrChfPB3JuXM3NOiQ=w1114-h1486-s-no-gm?authuser=0", 
    "https://lh3.googleusercontent.com/pw/AP1GczOw79iTqoYDZT8OCvoB8I8amgPOE0pYYc-jCnXw2QxfmPyxFuy10Sdus1-nEcL0MGW0KYbNwXa4a8djgxVD7qf_IaXuCrYeDzf--FmEKXTF9E6skGLS1FoO0RpvDPf0wZuGlJU5OeA64_Cn9ECTOZidhg=w838-h1490-s-no-gm?authuser=0",  
    "https://lh3.googleusercontent.com/pw/AP1GczOL5-usPK_Hf0jstY3YuBJh24yTkjVNOF79CzCN4O-H9Xoh-2sAQFQphPUO4dvgKhAZi1RC6uBZ5XNuz8Px8j19lCevRtxnNBNYaHtL4xy9c2uOEDlRffw9G4dXxRp9ifSbB7fmcp6P0v-30AhPP7_-2Q=w940-h1670-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/d/1ZJs-mmdQ8SZqtUK7bl208C4-YwwO829K"
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

  // Helper component for Images to reduce duplication
  const AboutImage = ({ index, className }: { index: number, className: string }) => (
    <div className={`relative group overflow-hidden shadow-lg border-[3px] md:border-[6px] border-white transition-all duration-500 hover:z-20 hover:scale-105 hover:shadow-2xl ${className}`}>
        <img 
            src={aboutImages[index]} 
            alt={`About ${index + 1}`} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
    </div>
  );

  return (
    <section id="about" className="py-12 md:py-32 bg-white relative z-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-pastel-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-[30rem] h-[30rem] bg-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 -z-10 delay-700"></div>

      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        
        {/* DESKTOP LAYOUT (Hidden on mobile) */}
        <div className="hidden md:flex flex-row gap-6 lg:gap-16 items-start">
             {/* Text Side */}
            <div className="w-[40%] sticky top-24 z-10">
                <h2 className="text-6xl font-serif text-slate-800 mb-10 text-left relative inline-block">
                    About Me
                    <span className="absolute -bottom-2 left-0 w-full h-3 bg-pastel-200/40 -z-10 rounded-full transform -rotate-1"></span>
                </h2>
                
                <div className="text-slate-600 leading-relaxed space-y-8">
                    <div className="grid grid-cols-2 gap-6">
                        {/* 1. Bilingual */}
                        <div className="bg-pastel-50 p-8 rounded-[2rem] border border-pastel-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:rotate-1 group">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">🌍</div>
                            <h4 className="font-bold text-slate-800 text-xl mb-3 leading-tight">Bilingual (English & German)</h4>
                            <p className="text-slate-600 text-base leading-relaxed font-medium">UGC tailored for international and European markets</p>
                        </div>
                        {/* 2. Vegan */}
                         <div className="bg-white p-8 rounded-[2rem] border-2 border-slate-100 hover:border-pastel-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:-rotate-1 group">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">🌱</div>
                            <h4 className="font-bold text-slate-800 text-xl mb-3 leading-tight">Vegan lifestyle</h4>
                            <p className="text-slate-600 text-base leading-relaxed font-medium">Great fit for plant-based, wellness, and conscious brands</p>
                        </div>
                        {/* 3. Dramatic Arts */}
                        <div className="col-span-2 bg-gradient-to-br from-white to-pastel-50 p-8 rounded-[2rem] border border-pastel-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                             <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity transform rotate-12 pointer-events-none">
                                <span className="text-9xl">🎭</span>
                             </div>
                            <div className="relative z-10 flex flex-row gap-6 items-center">
                                <div className="text-6xl shrink-0 group-hover:rotate-12 transition-transform duration-500">🎭</div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-2xl mb-2">Trained in Dramatic Arts</h4>
                                    <p className="text-slate-700 text-lg font-medium leading-relaxed">Strong on-camera presence, storytelling, and confident delivery</p>
                                </div>
                            </div>
                        </div>
                        {/* 4. Married Creator */}
                        <div className="col-span-2 bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-pastel-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                            <div className="flex flex-row gap-6 items-center">
                                <div className="text-4xl shrink-0 bg-pastel-50 p-4 rounded-full shadow-sm group-hover:scale-110 transition-transform">💍</div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-xl mb-2">Married creator</h4>
                                    <p className="text-slate-600 text-base leading-relaxed font-medium">(My husband is also a creator and can appear in content!)</p>
                                </div>
                            </div>
                        </div>
                        {/* 5. World Traveler */}
                        <div className="col-span-2 bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                            <div className="flex flex-row gap-6 items-center">
                                <div className="text-4xl shrink-0 bg-white p-4 rounded-full shadow-sm group-hover:rotate-12 transition-transform">✈️</div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-xl mb-2">World traveler</h4>
                                    <p className="text-slate-600 text-base leading-relaxed font-medium">Always planning my next adventure — this year through Europe (Austria, Switzerland & more). I’d love to bring your product along for the journey!</p>
                                </div>
                            </div>
                        </div>
                        {/* 6. Outdoor Obsessed */}
                        <div className="col-span-2 bg-pastel-50 p-8 rounded-[2rem] border border-pastel-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                            <div className="flex flex-row gap-6 items-center">
                                <div className="text-4xl shrink-0 bg-white p-4 rounded-full shadow-sm group-hover:scale-110 transition-transform">🌊</div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-xl mb-2">Outdoor-obsessed</h4>
                                    <p className="text-slate-600 text-base leading-relaxed font-medium">Hiking, surfing, and active lifestyle content in natural settings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             {/* Image Side - DESKTOP - SCATTERED GRID */}
            <div className="w-[60%] relative">
                <div className="grid grid-cols-2 gap-8 px-12">
                    {/* Column 1 - Starts Lower */}
                    <div className="space-y-14 pt-20">
                        {/* Image 0 (Requested Top Image) - Slight right tilt */}
                        <AboutImage index={0} className="rounded-3xl aspect-[3/4] rotate-3 hover:rotate-0" />
                        
                        {/* Image 2 - Pushed left, slight left tilt */}
                        <AboutImage index={2} className="rounded-3xl aspect-square -translate-x-8 -rotate-2 hover:rotate-0 hover:translate-x-0" />
                        
                        {/* Image 5 (NEW) - Portrait, slight right tilt */}
                        <AboutImage index={5} className="rounded-3xl aspect-[3/4] rotate-6 translate-x-4 hover:rotate-0 hover:translate-x-0" />
                    </div>

                    {/* Column 2 - Starts Higher */}
                    <div className="space-y-14 -mt-12">
                        {/* Image 1 - Square, sharp left tilt */}
                        <AboutImage index={1} className="rounded-3xl aspect-square -rotate-6 hover:rotate-0" />
                        
                        {/* Image 3 - Portrait, pushed down, sharp right tilt */}
                        <AboutImage index={3} className="rounded-3xl aspect-[3/4] translate-y-8 rotate-3 hover:rotate-0 hover:translate-y-0" />
                        
                        {/* Image 4 - Tall, neutral but pushed right */}
                        <AboutImage index={4} className="rounded-3xl aspect-[9/16] -rotate-3 translate-x-6 hover:rotate-0 hover:translate-x-0" />
                    </div>
                </div>
            </div>
        </div>

        {/* MOBILE LAYOUT (Visible only on md hidden) - REVERTED TO SIDE-BY-SIDE */}
        <div className="md:hidden flex flex-col mt-4">
             <h2 className="text-4xl font-serif text-slate-800 mb-6 relative z-20">
                 About Me
                 <div className="w-16 h-1 bg-pastel-300 mt-2 rounded-full"></div>
             </h2>

            <div className="flex flex-row gap-3 items-start">
                {/* Left Side: Text Cards (Vertical Column) */}
                <div className="w-[60%] flex flex-col gap-3">
                     {/* 1. Bilingual */}
                     <div className="bg-pastel-50 p-4 rounded-xl border border-pastel-200 shadow-sm">
                         <div className="text-2xl mb-1">🌍</div>
                         <h4 className="font-bold text-slate-800 text-sm mb-1">Bilingual (English & German)</h4>
                         <p className="text-slate-600 text-xs leading-tight">UGC tailored for international and European markets</p>
                     </div>

                     {/* 2. Vegan */}
                     <div className="bg-white p-4 rounded-xl border-2 border-slate-100 shadow-sm">
                         <div className="text-2xl mb-1">🌱</div>
                         <h4 className="font-bold text-slate-800 text-sm mb-1">Vegan lifestyle</h4>
                         <p className="text-slate-600 text-xs leading-tight">Great fit for plant-based, wellness, and conscious brands</p>
                     </div>

                     {/* 3. Dramatic Arts */}
                     <div className="bg-gradient-to-br from-white to-pastel-50 p-4 rounded-xl border border-pastel-200 shadow-sm">
                         <div className="text-2xl mb-1">🎭</div>
                         <h4 className="font-bold text-slate-800 text-sm mb-1">Trained in Dramatic Arts</h4>
                         <p className="text-slate-700 text-xs leading-tight">Strong on-camera presence, storytelling, and confident delivery</p>
                     </div>

                     {/* 4. Married Creator */}
                     <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="text-2xl mb-1">💍</div>
                        <h4 className="font-bold text-slate-800 text-sm mb-1">Married creator</h4>
                        <p className="text-slate-600 text-xs leading-tight">(My husband is also a creator and can appear in content!)</p>
                     </div>

                     {/* 5. World Traveler */}
                     <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="text-2xl mb-1">✈️</div>
                        <h4 className="font-bold text-slate-800 text-sm mb-1">World traveler</h4>
                        <p className="text-slate-600 text-xs leading-tight">Always planning my next adventure — this year through Europe (Austria, Switzerland & more). I’d love to bring your product along for the journey!</p>
                     </div>

                     {/* 6. Outdoor Obsessed */}
                     <div className="bg-pastel-50 p-4 rounded-xl border border-pastel-200 shadow-sm">
                        <div className="text-2xl mb-1">🌊</div>
                        <h4 className="font-bold text-slate-800 text-sm mb-1">Outdoor-obsessed</h4>
                        <p className="text-slate-600 text-xs leading-tight">Hiking, surfing, and active lifestyle content in natural settings</p>
                     </div>
                </div>

                {/* Right Side: Images (Vertical Stack) */}
                <div className="w-[40%] flex flex-col gap-4 pt-2">
                     {/* Image 0: The specific picture requested to be always on top */}
                     <AboutImage index={0} className="w-full aspect-[3/4] rotate-2 rounded-xl shadow-md" />
                     
                     {/* 2nd: Image 4 (Tall) */}
                     <AboutImage index={4} className="w-[85%] aspect-[9/16] -rotate-3 rounded-xl shadow-md self-end" />
                     
                     {/* 3rd: Image 2 (Requested to follow Image 4) */}
                     <AboutImage index={2} className="w-[90%] aspect-square rotate-2 rounded-xl shadow-md self-center" />

                     {/* 4th: Image 1 (Requested as 4th) */}
                     <AboutImage index={1} className="w-[80%] aspect-square -rotate-2 rounded-xl shadow-md self-start" />
                     
                     {/* 5th: Image 3 (Index 5 removed per request) */}
                     <AboutImage index={3} className="w-[85%] aspect-[3/4] -rotate-1 rounded-xl shadow-md self-center" />
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