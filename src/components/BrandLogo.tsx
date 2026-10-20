import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  size = 'md', 
  showText = true, 
  className = '' 
}) => {
  const pixelSizes = {
    sm: 38,
    md: 48,
    lg: 84,
    xl: 132,
  };

  const dim = pixelSizes[size] || 48;

  // Primary user provided logo asset path
  const logoSrc = "/assets/aistudio/Gemini_Generated_Image_r4lrq6r4lrq6r4lr_28a07ca7.png";
  const fallbackLogoSrc = "/assets/aistudio/logo_emblem.png";

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* 24 CROFTS Official Gold Medallion Logo */}
      <div 
        className="relative shrink-0 flex items-center justify-center rounded-full overflow-hidden bg-[#090d14] shadow-[0_0_24px_rgba(212,175,55,0.45)] border-2 border-amber-500/60 ring-1 ring-amber-300/40 group cursor-pointer transition-all duration-300 hover:shadow-[0_0_32px_rgba(245,158,11,0.65)] hover:border-amber-400"
        style={{ width: dim, height: dim }}
      >
        <img
          src={logoSrc}
          alt="24 CROFTS Cinema & Production Official Emblem"
          className="w-full h-full object-cover rounded-full transform scale-[1.36] transition-transform duration-500 group-hover:scale-[1.44] select-none pointer-events-none"
          loading="eager"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            if (target.src !== fallbackLogoSrc) {
              target.src = fallbackLogoSrc;
              target.className = 'w-full h-full object-contain rounded-full transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none';
            }
          }}
        />
        {/* Subtle inner gold rim highlight */}
        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-amber-200/25 pointer-events-none" />
      </div>

      {/* Brand Text Header */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-cinzel text-lg md:text-2xl font-black tracking-wider gold-gradient-text drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]">
              24 CROFTS
            </span>
            <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-amber-300 bg-amber-950/80 border border-amber-500/50 px-1.5 py-0.5 rounded shadow-sm">
              Cinema
            </span>
          </div>
          <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.18em] text-slate-400 uppercase hidden sm:block">
            Cinema &amp; Production Portal
          </span>
        </div>
      )}
    </div>
  );
};

export default BrandLogo;
