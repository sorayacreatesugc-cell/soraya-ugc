import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm font-serif">
          © {new Date().getFullYear()} Soraya Schwarzenecker. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#" className="hover:text-pastel-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-pastel-500 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-pastel-500 transition-colors">Imprint</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;