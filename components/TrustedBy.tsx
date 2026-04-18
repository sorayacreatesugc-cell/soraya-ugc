import React from 'react';
import { TRUSTED_BY_LOGOS } from '@/constants/images';

type TrustedByProps = {
  embedded?: boolean;
};

const TrustedBy: React.FC<TrustedByProps> = ({ embedded = false }) => {
  if (embedded) {
    return (
      <div
        aria-labelledby="trusted-by-heading"
        className="mt-4 md:mt-5 max-w-2xl mx-auto"
      >
        <h2
          id="trusted-by-heading"
          className="text-center text-xl md:text-2xl font-medium text-slate-500 tracking-tight"
        >
          Trusted By
        </h2>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:gap-x-12 md:gap-y-6">
          {TRUSTED_BY_LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex h-24 sm:h-28 md:h-32 items-center justify-center px-2 sm:px-4"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className={`${logo.imageClassName} w-auto max-w-full object-contain`}
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section
      id="trusted-by"
      aria-labelledby="trusted-by-heading"
      className="relative z-20 bg-white py-10 md:py-14"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.9))]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          <h2
            id="trusted-by-heading"
            className="text-center text-lg md:text-xl font-medium text-slate-500 tracking-tight"
          >
            Trusted By
          </h2>

          <div className="mt-6 rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_30px_80px_-56px_rgba(15,23,42,0.35)] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {TRUSTED_BY_LOGOS.map((logo, index) => (
                <div
                  key={logo.name}
                  className={`flex h-32 md:h-40 items-center justify-center px-8 md:px-12 ${
                    index > 0 ? 'border-t md:border-t-0 md:border-l border-slate-200/80' : ''
                  }`}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className={`${logo.imageClassName} w-auto max-w-full object-contain`}
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
