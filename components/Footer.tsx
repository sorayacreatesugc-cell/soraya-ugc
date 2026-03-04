import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white mx-auto py-8 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="mx-auto text-center text-slate-400 text-sm font-serif">
          © {new Date().getFullYear()} Soraya Schwarzenecker. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;