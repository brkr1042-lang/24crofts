import React, { useState } from 'react';
import { Search, Sparkles, Film, ShieldCheck, Video, Users, ArrowRight, Clapperboard, Camera } from 'lucide-react';
import { BrandLogo } from './BrandLogo.tsx';

interface BrandHeroBannerProps {
  onSearchId: (idOrQuery: string) => void;
  onOpenRegister: () => void;
  onOpenAdUpload: () => void;
  onSelectCategory: (category: string) => void;
  onOpenContact?: () => void;
}

export const BrandHeroBanner: React.FC<BrandHeroBannerProps> = ({
  onSearchId,
  onOpenRegister,
  onOpenAdUpload,
  onSelectCategory,
  onOpenContact,
}) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearchId(searchInput.trim());
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border-2 border-amber-600/40 bg-[#080c14] text-white shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(212,175,55,0.15)]">
      {/* Background panoramic lighting ambiance */}
      <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-black/90 pointer-events-none" />

      {/* Decorative Golden Filigree Top & Bottom Borders */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-90 shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
      <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-80" />

      {/* Left Artwork Overlay (Film Soundstage Silhouette & Golden Studio Glow) - from user's banner */}
      <div className="hidden xl:block absolute left-0 top-0 bottom-0 w-80 pointer-events-none opacity-40 overflow-hidden">
        <svg viewBox="0 0 320 400" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="studioGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#080c14" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="goldOutline" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffd875" />
              <stop offset="100%" stopColor="#8a6115" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="320" height="400" fill="url(#studioGlow)" />
          {/* Framed Stage Box Outline */}
          <rect x="15" y="25" width="280" height="340" rx="8" stroke="url(#goldOutline)" strokeWidth="1.2" strokeOpacity="0.4" />
          {/* Soundstage Dolly Track */}
          <line x1="10" y1="360" x2="260" y2="280" stroke="url(#goldOutline)" strokeWidth="2.5" strokeOpacity="0.6" />
          <line x1="30" y1="375" x2="280" y2="295" stroke="url(#goldOutline)" strokeWidth="2.5" strokeOpacity="0.6" />
          {/* Camera Dolly on Wheels */}
          <rect x="50" y="270" width="60" height="25" rx="3" stroke="url(#goldOutline)" strokeWidth="1.8" fill="#0d111a" />
          <circle cx="62" cy="298" r="8" stroke="url(#goldOutline)" strokeWidth="1.8" />
          <circle cx="98" cy="298" r="8" stroke="url(#goldOutline)" strokeWidth="1.8" />
          {/* Studio Camera Head */}
          <rect x="68" y="215" width="40" height="35" rx="4" stroke="url(#goldOutline)" strokeWidth="1.8" fill="#0d111a" />
          <circle cx="80" cy="205" r="7" stroke="url(#goldOutline)" strokeWidth="1.5" />
          <circle cx="96" cy="205" r="7" stroke="url(#goldOutline)" strokeWidth="1.5" />
          <path d="M 108 225 L 140 215 L 140 250 L 108 240 Z" stroke="url(#goldOutline)" strokeWidth="1.8" fill="#141824" />
          {/* Overhead Studio Lights */}
          <path d="M 50 40 L 70 65 L 40 65 Z" fill="#ffd875" fillOpacity="0.5" />
          <path d="M 120 40 L 140 65 L 110 65 Z" fill="#ffd875" fillOpacity="0.5" />
          <path d="M 190 40 L 210 65 L 180 65 Z" fill="#ffd875" fillOpacity="0.5" />
          {/* Film Slate */}
          <g transform="translate(15, 230)">
            <rect x="0" y="10" width="35" height="25" rx="2" stroke="url(#goldOutline)" strokeWidth="1.4" fill="#0d111a" />
            <polygon points="0,10 35,0 35,8 0,18" fill="url(#goldOutline)" />
          </g>
        </svg>
      </div>

      {/* Right Artwork Overlay (Highland Crofts & Glowing Cinema Projector Beam) - from user's banner */}
      <div className="hidden xl:block absolute right-0 top-0 bottom-0 w-80 pointer-events-none opacity-40 overflow-hidden">
        <svg viewBox="0 0 320 400" className="w-full h-full" fill="none">
          <defs>
            <linearGradient id="projectorBeam" x1="0%" y1="50%" x2="100%" y2="20%">
              <stop offset="0%" stopColor="#ffd875" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#f59e0b" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ffd875" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="goldOutlineRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffd875" />
              <stop offset="100%" stopColor="#8a6115" />
            </linearGradient>
          </defs>
          {/* Framed Landscape Box Outline */}
          <rect x="25" y="25" width="280" height="340" rx="8" stroke="url(#goldOutlineRight)" strokeWidth="1.2" strokeOpacity="0.4" />
          {/* Projector on Tripod */}
          <g transform="translate(45, 170)">
            <rect x="0" y="0" width="30" height="20" rx="3" stroke="url(#goldOutlineRight)" strokeWidth="1.8" fill="#0d111a" />
            <circle cx="8" cy="-8" r="6" stroke="url(#goldOutlineRight)" strokeWidth="1.5" />
            <circle cx="22" cy="-8" r="6" stroke="url(#goldOutlineRight)" strokeWidth="1.5" />
            <line x1="8" y1="20" x2="-5" y2="60" stroke="url(#goldOutlineRight)" strokeWidth="2" />
            <line x1="15" y1="20" x2="15" y2="60" stroke="url(#goldOutlineRight)" strokeWidth="2" />
            <line x1="22" y1="20" x2="35" y2="60" stroke="url(#goldOutlineRight)" strokeWidth="2" />
            {/* Projector Light Cone Beaming to the Mountains */}
            <polygon points="30,10 240,-40 260,80" fill="url(#projectorBeam)" />
          </g>
          {/* Mountain Screen displaying 'cinema' */}
          <g transform="translate(200, 70)">
            <rect x="0" y="0" width="70" height="42" rx="4" fill="#0c1018" stroke="url(#goldOutlineRight)" strokeWidth="1.5" />
            <text x="35" y="26" fill="#fff5cb" fontSize="12" fontWeight="800" fontFamily="'Plus Jakarta Sans', sans-serif" textAnchor="middle" letterSpacing="1">
              cinema
            </text>
          </g>
          {/* Highland Crofts Cottages */}
          <g transform="translate(110, 240)">
            <polygon points="0,15 20,0 40,15" stroke="url(#goldOutlineRight)" strokeWidth="1.5" fill="#0d111a" />
            <rect x="5" y="15" width="30" height="18" stroke="url(#goldOutlineRight)" strokeWidth="1.5" fill="#0d111a" />
            <polygon points="50,18 70,3 90,18" stroke="url(#goldOutlineRight)" strokeWidth="1.5" fill="#0d111a" />
            <rect x="55" y="18" width="30" height="16" stroke="url(#goldOutlineRight)" strokeWidth="1.5" fill="#0d111a" />
          </g>
        </svg>
      </div>

      {/* Main Content Layout matching the user's banner */}
      <div className="relative px-4 py-8 md:px-12 md:py-14 flex flex-col items-center text-center z-10">
        {/* Top Eyebrow: WELCOME TO THE STORY */}
        <div className="flex items-center gap-3 mb-3">
          <span className="h-[1px] w-10 md:w-24 bg-gradient-to-r from-transparent via-amber-400 to-amber-500" />
          <span className="font-cinzel text-xs md:text-sm tracking-[0.35em] uppercase text-amber-300 font-extrabold drop-shadow">
            WELCOME TO THE STORY
          </span>
          <span className="h-[1px] w-10 md:w-24 bg-gradient-to-l from-transparent via-amber-400 to-amber-500" />
        </div>

        {/* Center Grand 3D Gold Medallion Emblem */}
        <div className="my-2.5 transform hover:scale-105 transition-all duration-500 cursor-pointer">
          <BrandLogo size="xl" showText={false} className="justify-center" />
        </div>

        {/* Brand Headline */}
        <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-wider gold-gradient-text drop-shadow-[0_4px_20px_rgba(212,175,55,0.45)] mt-1">
          24 CROFTS
        </h1>
        <p className="font-cinzel text-sm sm:text-base md:text-xl font-bold tracking-[0.28em] text-amber-200 uppercase mt-1 drop-shadow">
          CINEMA &amp; PRODUCTION
        </p>

        {/* Subtitle from user's image */}
        <div className="mt-3 px-4 py-1.5 rounded-full bg-slate-900/60 border border-amber-500/30 backdrop-blur-sm shadow-inner">
          <p className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.16em] text-amber-100/90 uppercase">
            AWARD-WINNING PRODUCTIONS &bull; DOCUMENTARIES, FEATURES, &amp; COMMERCIALS
          </p>
        </div>

        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl mt-4 leading-relaxed font-sans font-normal">
          The premier cinema matchmaking platform connecting Directors, Producers, Cinematographers, and all 24 crafts of filmmaking. Verified profiles with matrimonial-grade confidentiality and admin-authorized contact access.
        </p>

        {/* Fast ID & Name Search Bar */}
        <div className="w-full max-w-2xl mt-8">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center rounded-2xl bg-slate-950/90 border-2 border-amber-500/60 p-1.5 shadow-[0_0_30px_rgba(212,175,55,0.25)] focus-within:border-amber-400 focus-within:shadow-[0_0_35px_rgba(212,175,55,0.4)] transition-all"
          >
            <div className="pl-3 pr-2 text-amber-400 flex items-center gap-1.5 shrink-0">
              <Search className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 hidden sm:inline font-cinzel">
                Profile ID / Craft:
              </span>
            </div>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Enter unique ID (e.g., 24C-DIR-1042 or 1042) or Talent Name..."
              className="w-full bg-transparent text-sm md:text-base text-white placeholder-slate-500 focus:outline-none px-2 py-1.5 font-sans"
            />
            <button
              type="submit"
              className="shrink-0 px-5 md:px-7 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-extrabold text-xs md:text-sm tracking-wider uppercase transition shadow-lg flex items-center gap-1.5 cursor-pointer font-cinzel"
            >
              <span>Search</span>
            </button>
          </form>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-[11px] text-slate-400">
            <span className="text-amber-400/90 font-medium">Quick ID Samples:</span>
            {['24C-DIR-1042', '24C-PRO-1001', '24C-CIN-2055', '24C-MUS-3012'].map((sampleId) => (
              <button
                key={sampleId}
                type="button"
                onClick={() => onSearchId(sampleId)}
                className="px-2.5 py-0.5 rounded-md bg-slate-900/90 border border-slate-700/80 hover:border-amber-500/80 text-amber-300 font-mono text-[11px] transition shadow-sm"
              >
                {sampleId}
              </button>
            ))}
          </div>
        </div>

        {/* Main Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-8">
          <button
            onClick={onOpenRegister}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.6)] transform hover:-translate-y-0.5 transition flex items-center gap-2 cursor-pointer font-cinzel"
          >
            <Users className="w-4 h-4" />
            <span>Register Cinema Profile</span>
          </button>

          <button
            onClick={onOpenAdUpload}
            className="px-6 py-3 rounded-xl bg-slate-900/90 border border-amber-500/50 hover:border-amber-400 text-amber-300 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:bg-slate-800 transition flex items-center gap-2 cursor-pointer font-cinzel"
          >
            <Video className="w-4 h-4 text-amber-400" />
            <span>Upload Movie Teaser / Ad</span>
          </button>

          {/* User's Banner Pill Button: Discover Our Films */}
          <button
            onClick={() => {
              const teaser = document.querySelector('h2');
              if (teaser) teaser.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-2 border-amber-500/60 hover:border-amber-400 text-amber-300 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition flex items-center gap-2 cursor-pointer font-cinzel"
            title="Discover Our Films & Theatrical Teasers"
          >
            <Clapperboard className="w-4 h-4 text-amber-400" />
            <span>Discover Our Films</span>
          </button>

          {onOpenContact && (
            <button
              onClick={onOpenContact}
              className="px-5 py-3 rounded-xl bg-amber-500/10 border border-amber-500/40 hover:bg-amber-500/20 text-amber-200 font-bold text-xs sm:text-sm uppercase tracking-wider transition flex items-center gap-2 cursor-pointer"
            >
              <span className="text-amber-400">📍</span>
              <span>Contact Hyderabad Desk</span>
            </button>
          )}
        </div>

        {/* Feature Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl mt-10 pt-6 border-t border-slate-800/80 text-left">
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-200">Admin-Authorized</div>
              <div className="text-[10px] text-slate-400">Strict contact protection</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 shadow-sm">
            <Film className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-200">24 Crafts of Cinema</div>
              <div className="text-[10px] text-slate-400">All 7 industry categories</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 shadow-sm">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-200">Unique Profile ID</div>
              <div className="text-[10px] text-slate-400">Sharable direct link per artist</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 shadow-sm">
            <Video className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-200">Movie Trailers &amp; Ads</div>
              <div className="text-[10px] text-slate-400">Curated theatrical showcase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
