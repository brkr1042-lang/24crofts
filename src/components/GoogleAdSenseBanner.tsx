import React, { useEffect } from 'react';
import { AdSenseConfig } from '../types.ts';
import { Sparkles, Megaphone, ExternalLink, ShieldCheck } from 'lucide-react';

interface GoogleAdSenseBannerProps {
  slotType: 'header-leaderboard' | 'in-feed-native' | 'sidebar-rectangle';
  config: AdSenseConfig;
  onOpenSettings?: () => void;
}

export const GoogleAdSenseBanner: React.FC<GoogleAdSenseBannerProps> = ({
  slotType,
  config,
  onOpenSettings,
}) => {
  // Inject live Google AdSense script if client publisher ID is provided
  useEffect(() => {
    if (config.enabled && !config.testMode && config.client) {
      const existingScript = document.getElementById('google-adsense-script');
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'google-adsense-script';
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${config.client}`;
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
      }
    }
  }, [config.enabled, config.testMode, config.client]);

  if (!config.enabled) return null;

  // Header 728x90 or responsive leaderboard
  if (slotType === 'header-leaderboard') {
    return (
      <div className="w-full my-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl rounded-xl border border-slate-800 bg-[#0a0e17] overflow-hidden p-3 shadow-lg relative">
          <div className="flex items-center justify-between text-[10px] text-slate-500 uppercase tracking-wider mb-1.5 px-2">
            <span className="flex items-center gap-1 text-amber-400 font-semibold">
              <Megaphone className="w-3 h-3" />
              <span>Google AdSense &bull; Cinema Sponsored Partner</span>
            </span>
            <span className="text-[10px] text-slate-500">
              Verified Cinema Partner
            </span>
          </div>

          {/* Test / Simulated Cinema High-Value Ad or Real Ad Container */}
          <div className="w-full h-20 md:h-24 rounded-lg bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 border border-amber-600/20 flex items-center justify-between px-4 md:px-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-black text-sm">
                ARRI
              </div>
              <div>
                <h4 className="font-cinzel text-xs md:text-sm font-bold text-white">
                  ARRI ALEXA 35 &amp; Master Anamorphic Glass Rental
                </h4>
                <p className="text-[11px] text-slate-300">
                  Exclusive 35% package discount for registered 24 Crofts Directors &amp; DoPs.
                </p>
              </div>
            </div>

            <a
              href="https://24crofts.com/"
              onClick={(e) => e.preventDefault()}
              className="shrink-0 px-3.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition flex items-center gap-1"
            >
              <span>Explore Gear</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // In-Feed Native Cinema Card Ad
  if (slotType === 'in-feed-native') {
    return (
      <div className="rounded-2xl bg-gradient-to-br from-[#0e1422] to-[#0a0d14] border border-amber-500/30 p-5 shadow-xl flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 px-3 py-1 bg-amber-950/80 border-b border-l border-amber-600/40 text-[9px] uppercase tracking-wider text-amber-300 font-bold rounded-bl-xl">
          AdSense Sponsored
        </div>

        <div>
          <span className="text-[10px] font-mono text-slate-500 uppercase">
            Industry Spotlight &bull; AdSlot #24C-FEED
          </span>
          <h3 className="font-cinzel text-base font-bold text-white mt-1">
            Soundstage &amp; Post-Production Suites
          </h3>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            Dolby Atmos Certified Mixing, 4K HDR Color Grading Suites &amp; 15,000 sq.ft Soundstages available for booking in Hyderabad &amp; Mumbai.
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-semibold text-amber-400">
            Special Union Member Tariffs
          </span>
          <a
            href="https://24crofts.com/"
            onClick={(e) => e.preventDefault()}
            className="text-[11px] px-3 py-1 rounded bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition cursor-pointer"
          >
            Learn More
          </a>
        </div>
      </div>
    );
  }

  // Sidebar 300x250 rectangle
  return (
    <div className="w-full rounded-2xl bg-slate-900 border border-slate-800 p-4 shadow-xl text-center space-y-3">
      <div className="flex items-center justify-between text-[10px] text-slate-500 uppercase">
        <span>Sponsored Ad</span>
        <span>Google AdSense</span>
      </div>
      <div className="aspect-[4/3] rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center p-4">
        <Sparkles className="w-8 h-8 text-amber-400 mb-2" />
        <h4 className="font-cinzel text-xs font-bold text-white">Film Festival Submissions 2026</h4>
        <p className="text-[10px] text-slate-400 mt-1">Submit your narrative feature to Cannes &amp; IFFI delegates directly.</p>
      </div>
    </div>
  );
};
