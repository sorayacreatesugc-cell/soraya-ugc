import React, { useState } from 'react';
import { Play, Check, X } from 'lucide-react';
import { PortfolioItem } from '../types';

// Specific video items with the requested labels
const videoItems = [
  { 
    id: 1, 
    src: 'https://img.youtube.com/vi/_P9ekwqLHzI/maxresdefault.jpg', 
    link: 'https://youtube.com/shorts/_P9ekwqLHzI?feature=share',
    caption: 'UGC Short Example', 
    label: 'Travel'
  },
  { 
    id: 2, 
    src: 'https://img.youtube.com/vi/eNpEmXCd18k/maxresdefault.jpg', 
    link: 'https://youtube.com/shorts/eNpEmXCd18k?feature=share',
    caption: 'Fashion Haul', 
    label: 'Sport & Fashion'
  },
  { 
    id: 3, 
    src: 'https://img.youtube.com/vi/27aA1428Gkc/maxresdefault.jpg', 
    link: 'https://youtube.com/shorts/27aA1428Gkc?feature=share',
    caption: 'Product Demo', 
    label: 'Home'
  },
  { 
    id: 5, 
    src: 'https://img.youtube.com/vi/nuz3XjctcNU/maxresdefault.jpg', 
    link: 'https://youtube.com/shorts/nuz3XjctcNU?feature=share',
    caption: 'Aesthetic Vlog', 
    label: 'Lifestyle'
  },
];

// Updated image items with new photos
const imageItems: PortfolioItem[] = [
  {
    id: 1,
    type: 'image',
    src: 'https://lh3.googleusercontent.com/pw/AP1GczPgHYryFBVbu0WKyMCoU8K-0gJnfXpBlnE4y2zZmWwjzkLcHPzZ_xUU1ZpGb1Zs-TK0s12a_orHkSWpI1icklV5EUPYRV1o_qVmNcVIXP6yXQseu-6YkaMSoDdIf1nEJd11NvrkZ73EmKCvIoyfwTnZKw=w1170-h1486-s-no-gm?authuser=0',
    caption: 'Lifestyle'
  },
  {
    id: 2,
    type: 'image',
    src: 'https://lh3.googleusercontent.com/pw/AP1GczMGmbMT_wuiU8N9ByOpm79wIR304_iJ5aMRp4rJdDIRnaBvbY4GuKuUW73SEdJW71QcyOmMSTpM8LidfTjFv2HgiMQs1aWyWnfXbY7zk1dbyidg3d96pXMRMMxRfl5Z4gyvfBP3qxK3fHVNuJAu3bqUVA=w938-h1467-s-no-gm?authuser=0',
    caption: 'Travel'
  },
  {
    id: 3,
    type: 'image',
    src: 'https://lh3.googleusercontent.com/pw/AP1GczNx_H6fb3t8HRLvZ0zbLXAdNWjBd568t918Py6_yhlIQzudawH_dVM-A7l6lUUyx2hdmN9Rd90uTPzCKdNr0GLRDJwZazv_pjmCk4d_3by0xCw1n3vtys0g8gT3bW9uV99o-ho0ecNXED_9G63-J_nG9w=w1118-h1486-s-no-gm?authuser=0',
    caption: 'Fashion'
  },
  {
    id: 4,
    type: 'image',
    src: 'https://lh3.googleusercontent.com/pw/AP1GczMj_UITBB8cO3meU4Kx8LOZiSO_vVIi-cGFBGGlWq2XCXQV0DB1xNiis4cgsYqIOw9CnvFT2rXUNvYeBaJPY5JGx9jtL1Or7ZvFMfaDNIi0GR4N2KLerYJIOjQGsMTJTaw1s0j-urWL4gHsAaZnsrFScA=w876-h1486-s-no-gm?authuser=0',
    caption: 'Product'
  },
  {
    id: 5,
    type: 'image',
    src: 'https://lh3.googleusercontent.com/pw/AP1GczNVkmqTZLyDhmJ9M5ut-dlgCi02-n90B7iTiCwvfGdMKLV6nlRl_9YqCjUm1_2AyWiMoz99hdzCf7WFGhqQUAG1F2ZmE6rnWf-wvniNJd--HU0hijcizWBinq8_6hzFfQo7wm4EnDz-XkGqA8g9rH3VOg=w864-h1486-s-no-gm?authuser=0',
    caption: 'Aesthetic'
  },
  {
    id: 6,
    type: 'image',
    src: 'https://lh3.googleusercontent.com/pw/AP1GczMOn2q11KxQJe9wpD6Z0hF0znrx_7uUNqNj_GaldvDIuibCnctEo32D05JJEjp-xtVnpM5NYB4wyCvEliaaOMJibbQDW040qj4qsXHtjrUegHuh8PKUle75Ojcxr2vDgRv7suXN2yb82h90ySr6c9YUDQ=w1060-h1448-s-no-gm?authuser=0',
    caption: 'Vlog'
  }
];

const trustPoints = [
    { title: "UGC Creator & On-Camera Talent", desc: "Creating authentic, scroll-stopping content brands can trust." },
    { title: "Trained in Dramatic Arts 🎭", desc: "Strong storytelling, natural delivery, and confident on-camera presence." },
    { title: "Scriptwriting & Concept Development", desc: "Engaging hooks and clear messaging crafted to hold attention and drive action." },
    { title: "Bilingual Creator (EN / DE) 🌍", desc: "Creating content in both English and German to reach wider audiences." },
    { title: "Worked with Brands", desc: "HelloFresh, The Fleece Company, and more." },
    { title: "Short-Form Content Focused", desc: "TikTok, Instagram Reels, and Shorts optimized for organic and paid use." },
    { title: "High-Quality Production Setup 🎥", desc: "Softbox lighting, ring light, microphones, tripod, and clean editing." },
    { title: "Fast & Reliable Turnaround", desc: "Efficient delivery without compromising quality." },
    { title: "Lifestyle & Travel-Ready ✈️", desc: "Perfect for brands looking to integrate products into real-life, active, and travel settings." },
];

const Portfolio: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const getVideoId = (link?: string) => {
    if (!link) return null;
    // Matches standard watch links, shorts links, and youtu.be links
    const match = link.match(/\/shorts\/([^?]+)/) || link.match(/\/watch\?v=([^&]+)/) || link.match(/\/youtu\.be\/([^?]+)/);
    return match ? match[1] : null;
  };

  const handleVideoClick = (link?: string) => {
    const videoId = getVideoId(link);
    if (videoId) {
      setActiveVideoId(videoId);
    }
  };

  return (
    <section className="py-24 bg-pastel-50">
      <div className="max-w-6xl mx-auto px-6 space-y-24">
        
        {/* Videos Section */}
        <div id="ugc-videos" className="scroll-mt-24">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold text-pastel-500 uppercase tracking-widest mb-3">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-4">UGC Videos</h2>
            <p className="text-slate-500 max-w-lg mx-auto">High-performing reels and tiktoks optimized for conversion.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {videoItems.map((item) => {
              return (
                <div key={item.id} className="flex flex-col gap-4">
                  {/* Label Above Video */}
                  <h3 className="text-center font-serif text-xl md:text-2xl text-slate-800 tracking-tight">
                    {item.label}
                  </h3>
                  
                  {/* Video Thumbnail Button */}
                  <button 
                    onClick={() => handleVideoClick(item.link)}
                    className="relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 block w-full aspect-[9/16] bg-slate-100 cursor-pointer border border-slate-200"
                  >
                    <img 
                      src={item.src} 
                      alt={item.caption} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white/90 p-4 rounded-full backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Play className="text-slate-900 fill-slate-900 ml-1" size={24} />
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pictures Section */}
        <div id="ugc-pictures" className="scroll-mt-24 pt-8 border-t border-slate-200/50">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold text-pastel-500 uppercase tracking-widest mb-3">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-4">UGC Photos</h2>
            <p className="text-slate-500 italic">Mood Board & Aesthetic</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-4 md:px-12 items-center justify-items-center">
            {imageItems.length > 0 ? (
                imageItems.map((item, index) => {
                    // Mood Board Style Classes - More exaggerated scattering
                    let transformClass = "";
                    
                    // Specific rotations for a scattered "tabletop" look
                    switch(index) {
                        case 0: transformClass = "rotate-3 translate-y-2"; break;
                        case 1: transformClass = "-rotate-3 translate-y-12"; break; 
                        case 2: transformClass = "rotate-6 -translate-x-4"; break;
                        case 3: transformClass = "-rotate-2 translate-x-4 translate-y-8"; break;
                        case 4: transformClass = "rotate-3 translate-y-16"; break; 
                        case 5: transformClass = "-rotate-6 -translate-y-4"; break;
                        default: transformClass = "rotate-0";
                    }

                    return (
                        <div key={item.id} className={`relative group transition-all duration-500 ease-out transform ${transformClass} hover:z-50 hover:scale-110 hover:rotate-0 w-full`}>
                            <div className="relative overflow-hidden bg-white shadow-lg group-hover:shadow-2xl transition-all duration-300 border-[12px] border-white/90">
                                <img 
                                    src={item.src} 
                                    alt={item.caption} 
                                    className="w-full h-auto object-cover"
                                />
                                {/* No hover labels or buttons */}
                            </div>
                            
                            {/* Tape Effect */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-28 h-8 bg-white/40 backdrop-blur-sm rotate-1 shadow-sm border border-white/30 z-10"></div>
                        </div>
                    );
                })
            ) : (
                <div className="col-span-full py-12 text-center border-2 border-dashed border-slate-200 rounded-3xl">
                     <p className="text-slate-400 italic">Photos coming soon...</p>
                </div>
            )}
          </div>
        </div>
        
        {/* Why Brands Trust Me - Stats Section */}
        <div id="trust" className="mt-24 pt-16 border-t border-slate-200 scroll-mt-24">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-4">Why brands trust me</h2>
             <p className="text-slate-500">Proven results and consistent delivery.</p>
           </div>
           
           <div className="max-w-5xl mx-auto mb-12">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {trustPoints.map((point, index) => (
                 <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1 flex items-start gap-4">
                   <div className="bg-pastel-100 text-pastel-600 p-2 rounded-full shrink-0 mt-1">
                     <Check size={16} strokeWidth={3} />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-800 mb-2 leading-tight">{point.title}</h4>
                     <p className="text-sm text-slate-600 leading-relaxed">{point.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideoId && (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8"
            onClick={() => setActiveVideoId(null)}
        >
            <div 
                className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={() => setActiveVideoId(null)}
                    className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-md transition-colors"
                >
                    <X size={20} />
                </button>
                <iframe
                    src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&playsinline=1&rel=0&modestbranding=1&controls=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;