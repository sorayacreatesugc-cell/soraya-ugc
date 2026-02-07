import React, { useState } from 'react';
import { FileText, Image as ImageIcon, ArrowRight, X, Play, Eye, Instagram, Youtube } from 'lucide-react';

const Acting: React.FC = () => {
  const [showDemoReel, setShowDemoReel] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showHeadshots, setShowHeadshots] = useState(false);
  const demoReelId = "K--77wBWim0";

  // Headshots Gallery
  const headshots = [
    "https://lh3.googleusercontent.com/d/1XbT59iQUU0-kAGBbqor1sxDgydY9St7o", // Top (Requested)
    "https://lh3.googleusercontent.com/d/19rKXzae3e8rW7S5HAWcUHSOZl1e8_jRK", // Recent Headshot
    "https://lh3.googleusercontent.com/d/1JONxl1YlXFdWMawKC42RhBAhOwjBFvR_", // Third (Requested)
    "https://lh3.googleusercontent.com/d/1QbxXNPeoSkatU6xzhwIa8vOqYgwRkYZJ", // New Headshot 1
    "https://lh3.googleusercontent.com/d/1gzmpewQpiQANOS9arwapTIlZ6mPHeYPV", // New Headshot 2
    "https://lh3.googleusercontent.com/d/1xTtVEpdozGuueSLiReiX-bQxANgICfNp"  // Bottom (Requested)
  ];

  return (
    <section id="acting" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Acting Header */}
            <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-serif text-slate-800">Acting Portfolio</h3>
            </div>

            {/* Subcategories Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                
                {/* Demo Reel Card - With Thumbnail Trigger */}
                <div id="acting-reel" className="bg-slate-50 p-6 rounded-2xl border border-slate-100 scroll-mt-32 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default flex flex-col">
                    <h4 className="font-serif text-xl text-slate-800 mb-4">Demo Reel</h4>
                    
                    {/* Video Thumbnail Area */}
                    <button 
                        onClick={() => setShowDemoReel(true)}
                        className="relative w-full aspect-video bg-slate-200 rounded-xl overflow-hidden mb-4 cursor-pointer group/video border border-slate-200 outline-none focus:ring-2 focus:ring-pastel-300"
                    >
                        <img 
                            src={`https://img.youtube.com/vi/${demoReelId}/maxresdefault.jpg`} 
                            alt="Demo Reel Thumbnail" 
                            className="w-full h-full object-cover opacity-90 group-hover/video:opacity-100 transition-opacity"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/90 p-3 rounded-full shadow-md group-hover/video:scale-110 transition-transform">
                                <Play size={24} className="fill-slate-900 text-slate-900 ml-1" />
                            </div>
                        </div>
                    </button>

                    <p className="text-sm text-slate-500 mb-4 flex-grow">View my latest performance clips and dramatic work.</p>
                    <button 
                        onClick={() => setShowDemoReel(true)}
                        className="text-sm font-semibold text-pastel-500 hover:text-pastel-600 flex items-center focus:outline-none hover:underline mt-auto"
                    >
                        Watch Reel <Play size={14} className="ml-1 fill-current" />
                    </button>
                </div>

                {/* Headshots Card - With Grid Preview */}
                <button 
                    id="acting-headshots" 
                    onClick={() => setShowHeadshots(true)}
                    className="bg-slate-50 p-6 rounded-2xl border border-slate-100 scroll-mt-32 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col text-left w-full outline-none focus:ring-2 focus:ring-pastel-300"
                >
                    <h4 className="font-serif text-xl text-slate-800 mb-4">Headshots</h4>
                    
                    {/* Tiny Picture Grid Preview */}
                    <div className="relative w-full aspect-video bg-white rounded-xl overflow-hidden mb-4 border border-slate-200">
                        <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
                            {headshots.slice(0, 4).map((src, index) => (
                                <div key={index} className="relative w-full h-full border-r border-b border-white/50">
                                    <img 
                                        src={src} 
                                        alt={`Headshot preview ${index + 1}`} 
                                        className="w-full h-full object-cover object-top opacity-95"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <div className="bg-white/90 p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                                <Eye size={24} className="text-slate-900" />
                            </div>
                        </div>
                    </div>

                    <p className="text-sm text-slate-500 mb-4 flex-grow">Professional theatrical and commercial headshots.</p>
                    <div className="text-sm font-semibold text-pastel-500 group-hover:text-pastel-600 flex items-center mt-auto group-hover:underline">
                        View Gallery <Eye size={14} className="ml-1" />
                    </div>
                </button>

                {/* Resume */}
                <button 
                    id="acting-resume" 
                    onClick={() => setShowResume(true)}
                    className="bg-slate-50 p-6 rounded-2xl border border-slate-100 scroll-mt-32 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col text-left w-full outline-none focus:ring-2 focus:ring-pastel-300"
                >
                    <div className="bg-white p-3 rounded-full w-fit mb-4 text-slate-700 shadow-sm group-hover:text-pastel-500 transition-colors">
                        <FileText size={20} />
                    </div>
                    <h4 className="font-serif text-xl text-slate-800 mb-2">Resume</h4>
                    <p className="text-sm text-slate-500 mb-4 flex-grow">Full CV detailing training, credits, and special skills.</p>
                    <div className="text-sm font-semibold text-pastel-500 group-hover:text-pastel-600 flex items-center mt-auto group-hover:underline">
                        View Resume <Eye size={14} className="ml-1" />
                    </div>
                </button>
            </div>

            {/* Request Audition & Socials - Container */}
            <div className="flex flex-col items-center pt-8">
                
                {/* Acting Socials - Added here */}
                <div className="flex flex-col items-center gap-3 mb-6">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Acting Socials</span>
                    <div className="flex gap-6">
                        <a 
                            href="https://www.instagram.com/soraya.schwarzenecker" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-slate-400 hover:text-pastel-500 transition-all transform hover:scale-110 p-2 bg-slate-50 rounded-full hover:shadow-sm"
                            title="Acting Instagram"
                        >
                            <Instagram size={24} />
                        </a>
                        <a 
                            href="https://www.youtube.com/@sorayaschwarzenecker" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-slate-400 hover:text-pastel-500 transition-all transform hover:scale-110 p-2 bg-slate-50 rounded-full hover:shadow-sm"
                            title="Acting YouTube"
                        >
                            <Youtube size={24} />
                        </a>
                    </div>
                </div>

                 <a 
                    href="mailto:sorayacreates.ugc@gmail.com" 
                    className="inline-flex items-center px-8 py-3 rounded-full bg-slate-50 text-slate-800 font-semibold border border-slate-200 hover:bg-pastel-500 hover:text-white hover:border-pastel-500 transition-all duration-300 group shadow-sm"
                 >
                     Request Audition <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                 </a>
            </div>
        </div>
      </div>

      {/* Video Modal */}
      {showDemoReel && (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8"
            onClick={() => setShowDemoReel(false)}
        >
            <div 
                className="relative w-full max-w-5xl aspect-[16/9] bg-black rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={() => setShowDemoReel(false)}
                    className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-md transition-colors"
                >
                    <X size={20} />
                </button>
                <iframe
                    src={`https://www.youtube.com/embed/${demoReelId}?autoplay=1&rel=0&modestbranding=1`}
                    title="Acting Demo Reel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>
        </div>
      )}

      {/* Headshots Modal */}
      {showHeadshots && (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
            onClick={() => setShowHeadshots(false)}
        >
            <div 
                className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-slate-50 flex-shrink-0">
                    <h2 className="text-2xl font-serif text-slate-800">Headshots</h2>
                    <button 
                        onClick={() => setShowHeadshots(false)}
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Modal Content - Scrollable Grid */}
                <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar bg-slate-50">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {headshots.map((src, index) => (
                            <div key={index} className="relative group rounded-xl overflow-hidden bg-white shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 aspect-[3/4]">
                                <img 
                                    src={src} 
                                    alt={`Headshot ${index + 1}`} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* Resume Modal */}
      {showResume && (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
            onClick={() => setShowResume(false)}
        >
            <div 
                className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-slate-50 flex-shrink-0">
                    <h2 className="text-2xl font-serif text-slate-800">Resume</h2>
                    <button 
                        onClick={() => setShowResume(false)}
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Modal Content - Scrollable */}
                <div className="p-6 md:p-10 overflow-y-auto font-sans text-slate-700 leading-relaxed custom-scrollbar">
                    
                    {/* Header Info */}
                    <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2">Soraya Schwarzenecker</h1>
                        <p className="text-lg font-medium text-slate-500 mb-4">Non-Union</p>
                        
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base text-slate-600 mb-4">
                            <span>Height: 5'3"</span>
                            <span>Weight: 113 lbs</span>
                            <span>Hair: Brown</span>
                            <span>Eyes: Brown</span>
                        </div>
                    </div>

                    <div className="space-y-10">
                        {/* Section: Short Films */}
                        <ResumeSection title="Short Films & Vertical Shorts">
                             <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-2 text-sm border-b md:border-b-0 border-slate-100 pb-4 md:pb-0 last:border-0">
                                <div className="md:col-span-5 font-bold md:font-medium">The Anniversary</div>
                                <div className="md:col-span-4 text-slate-600">Marie (American University)</div>
                                <div className="md:col-span-3 text-slate-500 italic">Dir. Mirfad Ahmed Mfaoume</div>
                             </div>
                             <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-2 text-sm border-b md:border-b-0 border-slate-100 pb-4 md:pb-0 last:border-0">
                                <div className="md:col-span-5 font-bold md:font-medium">The Book of Eve</div>
                                <div className="md:col-span-4 text-slate-600">Alice (George Mason Univ.)</div>
                                <div className="md:col-span-3 text-slate-500 italic">Dir. Marco Duran</div>
                             </div>
                             <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-2 text-sm border-b md:border-b-0 border-slate-100 pb-4 md:pb-0 last:border-0">
                                <div className="md:col-span-5 font-bold md:font-medium">Tracy’s Porch</div>
                                <div className="md:col-span-4 text-slate-600">Tracy (Independent Film)</div>
                                <div className="md:col-span-3 text-slate-500 italic">Dir. Marquis Frieson</div>
                             </div>
                             <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-2 text-sm border-b md:border-b-0 border-slate-100 pb-4 md:pb-0 last:border-0">
                                <div className="md:col-span-5 font-bold md:font-medium">Just passing by</div>
                                <div className="md:col-span-4 text-slate-600">Nora (Inclusion Ent.)</div>
                                <div className="md:col-span-3 text-slate-500 italic">Dir. Janice Carlberg</div>
                             </div>
                             <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-2 text-sm border-b md:border-b-0 border-slate-100 pb-4 md:pb-0 last:border-0">
                                <div className="md:col-span-5 font-bold md:font-medium">Gyopo</div>
                                <div className="md:col-span-4 text-slate-600">Miss Franco (Woodbury Univ.)</div>
                                <div className="md:col-span-3 text-slate-500 italic">Dir. Kate Kim</div>
                             </div>
                             <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-2 text-sm border-b md:border-b-0 border-slate-100 pb-4 md:pb-0 last:border-0">
                                <div className="md:col-span-5 font-bold md:font-medium">Inflight Inflatables</div>
                                <div className="md:col-span-4 text-slate-600">Shoe Lady (LMU)</div>
                                <div className="md:col-span-3 text-slate-500 italic">Dir. John Mac Menamie</div>
                             </div>
                             <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-2 text-sm border-b md:border-b-0 border-slate-100 pb-4 md:pb-0 last:border-0">
                                <div className="md:col-span-5 font-bold md:font-medium">You Had Your Chance</div>
                                <div className="md:col-span-4 text-slate-600">Assistant (Dots Collective)</div>
                                <div className="md:col-span-3 text-slate-500 italic">Dir. Qianqian Zhao</div>
                             </div>
                              <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-2 text-sm border-b md:border-b-0 border-slate-100 pb-4 md:pb-0 last:border-0">
                                <div className="md:col-span-5 font-bold md:font-medium">More than I can say</div>
                                <div className="md:col-span-4 text-slate-600">Maid (Production House 8)</div>
                                <div className="md:col-span-3 text-slate-500 italic">Dir. Qianqian Zhao</div>
                             </div>
                              <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-2 text-sm">
                                <div className="md:col-span-5 font-bold md:font-medium">WWSS</div>
                                <div className="md:col-span-4 text-slate-600">Kind Woman (Prod. House 8)</div>
                                <div className="md:col-span-3 text-slate-500 italic">Dir. Evey Yu</div>
                             </div>
                        </ResumeSection>

                        {/* Section: Commercial */}
                        <ResumeSection title="Commercial">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-2 text-sm border-b md:border-b-0 border-slate-100 pb-4 md:pb-0 last:border-0">
                                <div className="md:col-span-5 font-bold md:font-medium">National University</div>
                                <div className="md:col-span-4 text-slate-600">Lead</div>
                                <div className="md:col-span-3 text-slate-500 italic">Dir. David Siciliano</div>
                             </div>
                             <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-2 text-sm">
                                <div className="md:col-span-5 font-bold md:font-medium">Movie Thieves</div>
                                <div className="md:col-span-4 text-slate-600">Lead</div>
                                <div className="md:col-span-3 text-slate-500 italic">Dir. Andrew Reyna</div>
                             </div>
                        </ResumeSection>

                        {/* Section: Theater / Musical */}
                        <ResumeSection title="Theater / Musical">
                             <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-2 text-sm border-b md:border-b-0 border-slate-100 pb-4 md:pb-0 last:border-0">
                                <div className="md:col-span-5 font-bold md:font-medium">The Wolves</div>
                                <div className="md:col-span-4 text-slate-600">#11 (American Academy of Dramatic Arts)</div>
                             </div>
                             <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-2 text-sm border-b md:border-b-0 border-slate-100 pb-4 md:pb-0 last:border-0">
                                <div className="md:col-span-5 font-bold md:font-medium">Letters to Sala</div>
                                <div className="md:col-span-4 text-slate-600">Young Sala (AADA)</div>
                             </div>
                             <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-2 text-sm border-b md:border-b-0 border-slate-100 pb-4 md:pb-0 last:border-0">
                                <div className="md:col-span-5 font-bold md:font-medium">The Fox on the Fairway</div>
                                <div className="md:col-span-4 text-slate-600">Luise (AADA)</div>
                             </div>
                             <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-2 text-sm border-b md:border-b-0 border-slate-100 pb-4 md:pb-0 last:border-0">
                                <div className="md:col-span-5 font-bold md:font-medium">Enfrascada</div>
                                <div className="md:col-span-4 text-slate-600">Lulu (AADA)</div>
                             </div>
                             <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-2 text-sm border-b md:border-b-0 border-slate-100 pb-4 md:pb-0 last:border-0">
                                <div className="md:col-span-5 font-bold md:font-medium">These shining lives</div>
                                <div className="md:col-span-4 text-slate-600">Frances (AADA)</div>
                             </div>
                              <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-2 text-sm border-b md:border-b-0 border-slate-100 pb-4 md:pb-0 last:border-0">
                                <div className="md:col-span-5 font-bold md:font-medium">Obstsalad</div>
                                <div className="md:col-span-4 text-slate-600">Kiwi (Mag. Günther Mohaupt)</div>
                             </div>
                              <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-2 text-sm border-b md:border-b-0 border-slate-100 pb-4 md:pb-0 last:border-0">
                                <div className="md:col-span-5 font-bold md:font-medium">Ameisenstraße</div>
                                <div className="md:col-span-4 text-slate-600">Raya (Kulturszene Kottingbrunn)</div>
                             </div>
                              <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-2 text-sm">
                                <div className="md:col-span-5 font-bold md:font-medium">Planet des Lichts</div>
                                <div className="md:col-span-4 text-slate-600">Forscher 4 (Kulturszene Kottingbrunn)</div>
                             </div>
                        </ResumeSection>

                        {/* Section: Training */}
                        <ResumeSection title="Training">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-sm">
                                <div>
                                    <p className="font-bold mb-1">Acting Training</p>
                                    <p className="text-slate-600">American Academy of Dramatic Arts</p>
                                    <p className="text-slate-500 italic">Susan Zech</p>
                                </div>
                                <div>
                                    <p className="font-bold mb-1">Acting Training</p>
                                    <p className="text-slate-600">Schauspielschule Wien</p>
                                    <p className="text-slate-500 italic">Mag. Markus Hippmann</p>
                                </div>
                                <div>
                                    <p className="font-bold mb-1">Acting Training</p>
                                    <p className="text-slate-600">Vienna Film Academy</p>
                                    <p className="text-slate-500 italic">Wiltrud Schreiner</p>
                                </div>
                                <div>
                                    <p className="font-bold mb-1">Acting Training</p>
                                    <p className="text-slate-600">Michelle Danner Acting Studios</p>
                                    <p className="text-slate-500 italic">Alexandra Guarnieri</p>
                                </div>
                                <div>
                                    <p className="font-bold mb-1">Acting Training</p>
                                    <p className="text-slate-600">La Acting Studios</p>
                                    <p className="text-slate-500 italic">David Rountree</p>
                                </div>
                                <div>
                                    <p className="font-bold mb-1">Ballroom dance</p>
                                    <p className="text-slate-600">Dobner Tanzschule</p>
                                    <p className="text-slate-500 italic">Christian Maier</p>
                                </div>
                                <div>
                                    <p className="font-bold mb-1">Music Training</p>
                                    <p className="text-slate-600">Musikhauptschule Gumpoldskirchen</p>
                                    <p className="text-slate-500 italic">Mag. Günther Mohaupt</p>
                                </div>
                                <div>
                                    <p className="font-bold mb-1">Music Instruments</p>
                                    <p className="text-slate-600">Musikschule Bad Vöslau</p>
                                    <p className="text-slate-500 italic">Christian Sauer</p>
                                </div>
                            </div>
                        </ResumeSection>

                        {/* Section: Skills */}
                         <ResumeSection title="Skills">
                             <p className="text-sm leading-7 text-slate-700">
                                 Accordion, Ukulele, Guitar, Ballroom Dancing, Basic Photography, Yoga, Horseback Riding, Swimming, Skiing, Rollerblading, Beginner Surfing, Beg/Int. Musical Theatre and Jazz Dance, Stage Combat.
                             </p>
                             <div className="mt-4 text-sm space-y-2">
                                 <p><span className="font-bold text-slate-900">Languages:</span> German (Native), English (Fluent), Farsi (Speaking)</p>
                                 <p><span className="font-bold text-slate-900">Other:</span> Licensed Driver, Passport (Austria), Authorized to work in the United States</p>
                             </div>
                         </ResumeSection>
                    </div>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

const ResumeSection: React.FC<{title: string, children: React.ReactNode}> = ({ title, children }) => (
    <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-2 mb-4">{title}</h3>
        {children}
    </div>
);

export default Acting;