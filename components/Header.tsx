import React, { useState, useEffect } from 'react';
import { Mail, Instagram, Youtube, Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Flattened navigation structure
  const navLinks: NavItem[] = [
    { name: 'About Me', href: '#about' },
    { name: 'UGC Videos', href: '#ugc-videos' },
    { name: 'UGC Photos', href: '#ugc-pictures' },
    { name: 'Why brands trust me', href: '#trust' },
    { name: 'Acting Portfolio', href: '#acting' },
    { name: 'Connect', href: '#contact' },
  ];

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for header height
      
      let current = '';
      
      // Check if we are at the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
         current = '#contact';
      } else {
        // Find the section currently in view
        for (const link of navLinks) {
          const section = document.querySelector(link.href) as HTMLElement;
          if (section) {
            const { offsetTop, offsetHeight } = section;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              current = link.href;
            }
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="sticky md:fixed top-0 w-full z-50 transition-all duration-300"
    >
      {/* Background layer with blur - separated to avoid containing block issues for fixed children */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm -z-10" />

      <div className="w-full px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0 z-[60]">
            <div className="text-2xl font-serif font-bold text-slate-800 tracking-tight flex items-center gap-2">
                <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Soraya S.</a>
            </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-medium uppercase tracking-wider transition-all duration-200 ${
                    isActive 
                      ? 'text-pastel-500 font-bold border-b-2 border-pastel-500 pb-1' 
                      : 'text-slate-600 hover:text-pastel-500 pb-1 border-b-2 border-transparent'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
          
          <div className="flex items-center space-x-4 border-l pl-6 border-slate-200">
             <a href="https://www.instagram.com/sorayacreates_ugc/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pastel-500 transition-colors" title="UGC Instagram">
              <Instagram size={18} />
            </a>
             <a href="https://www.youtube.com/channel/UC6ScBs4Uj0XFvGRiCqscTCA" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pastel-500 transition-colors" title="UGC YouTube">
              <Youtube size={18} />
            </a>
            <a href="mailto:sorayacreates.ugc@gmail.com" className="text-slate-400 hover:text-pastel-500 transition-colors" title="Email Me">
              <Mail size={18} />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4 z-[60]">
             <a href="https://www.instagram.com/sorayacreates_ugc/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pastel-500 transition-colors">
                <Instagram size={20} />
            </a>
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-800 focus:outline-none p-1"
                aria-label="Toggle menu"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {/* Mobile Menu Backdrop */}
        <div 
            className={`fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Navigation Drawer */}
        <div 
            className={`fixed top-0 right-0 h-screen w-auto bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out md:hidden flex flex-col pt-24 pl-12 pr-6 border-l border-slate-100 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <div className="flex flex-col space-y-6 items-start overflow-y-auto h-full pb-8 whitespace-nowrap">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-serif font-medium tracking-wide transition-colors ${
                        isActive 
                          ? 'text-pastel-500 font-bold' 
                          : 'text-slate-800 hover:text-pastel-500'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
                 <div className="flex items-center space-x-6 pt-8 border-t border-slate-100 mt-4 w-full">
                     <a href="https://www.instagram.com/sorayacreates_ugc/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pastel-500 transition-colors">
                      <Instagram size={24} />
                    </a>
                     <a href="https://www.youtube.com/channel/UC6ScBs4Uj0XFvGRiCqscTCA" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pastel-500 transition-colors">
                      <Youtube size={24} />
                    </a>
                    <a href="mailto:sorayacreates.ugc@gmail.com" className="text-slate-400 hover:text-pastel-500 transition-colors">
                      <Mail size={24} />
                    </a>
                 </div>
            </div>
        </div>

      </div>
    </header>
  );
};

export default Header;