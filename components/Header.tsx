import React from 'react';
import { Mail, Instagram, Youtube } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  primary?: boolean;
}

const Header: React.FC = () => {
  // Flattened navigation structure
  const navLinks: NavItem[] = [
    { name: 'About Me', href: '#about' },
    { name: 'UGC Videos', href: '#ugc-videos' },
    { name: 'UGC Photos', href: '#ugc-pictures' },
    { name: 'Why brands trust me', href: '#trust' },
    { name: 'Acting Portfolio', href: '#acting' },
    { name: 'Connect', href: '#contact', primary: true },
  ];

  return (
    <header 
      className="fixed top-0 w-full z-50 bg-white border-b border-slate-100 shadow-sm py-4 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="flex justify-between w-full md:w-auto items-center">
            <div className="text-2xl font-serif font-bold text-slate-800 tracking-tight flex items-center gap-2">
            <a href="#">Soraya S.</a>
            </div>
            
            {/* Mobile-only icons that sit next to logo when collapsed */}
            <div className="md:hidden flex items-center gap-4">
                 <a href="https://www.instagram.com/sorayacreates_ugc/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pastel-500 transition-colors">
                    <Instagram size={20} />
                </a>
                 <a href="mailto:sorayacreates.ugc@gmail.com" className="text-slate-400 hover:text-pastel-500 transition-colors" title="Email Me">
                    <Mail size={20} />
                </a>
            </div>
        </div>

        {/* Navigation - Always visible, scrollable on mobile */}
        <nav className="flex items-center gap-4 md:gap-6 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar mask-linear-fade">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[10px] md:text-xs font-medium uppercase tracking-wider py-1 whitespace-nowrap transition-colors flex-shrink-0 ${
                link.primary 
                  ? 'text-pastel-500 font-bold border-b-2 border-pastel-500' 
                  : 'text-slate-600 hover:text-pastel-500'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="hidden md:flex items-center space-x-4 ml-4 border-l pl-4 border-slate-200 flex-shrink-0">
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
      </div>
    </header>
  );
};

export default Header;