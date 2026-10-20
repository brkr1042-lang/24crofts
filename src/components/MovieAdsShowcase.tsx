import React, { useState } from 'react';
import { MovieAdSubmission } from '../types.ts';
import { parseYouTubeVideoId } from '../utils/craftLogic.ts';
import { Film, Play, Sparkles, Plus, Calendar, Eye, CheckCircle2, Clapperboard, X } from 'lucide-react';

interface MovieAdsShowcaseProps {
  ads: MovieAdSubmission[];
  onOpenUploadModal: () => void;
}

export const MovieAdsShowcase: React.FC<MovieAdsShowcaseProps> = ({
  ads,
  onOpenUploadModal,
}) => {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);
  const [activeAd, setActiveAd] = useState<MovieAdSubmission | null>(null);

  // Filter approved ads for public display
  const approvedAds = ads.filter((a) => a.status === 'approved');

  const handleWatchTrailer = (ad: MovieAdSubmission) => {
    setActiveAd(ad);
    const videoId = parseYouTubeVideoId(ad.youtubeUrl);
    if (videoId) {
      setSelectedVideoUrl(videoId);
    }
  };

  return (
    <div className="w-full bg-[#0d121c] border border-amber-600/30 rounded-2xl p-5 md:p-8 shadow-2xl relative overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Showcase Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
              <Clapperboard className="w-5 h-5" />
            </span>
            <h2 className="font-cinzel text-xl md:text-2xl font-black tracking-wide text-white">
              Theatrical Teasers &amp; Movie Advertisements
            </h2>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 font-mono text-xs font-bold flex items-center gap-1 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{approvedAds.length} Theatrical Ads Live</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Curated cinematic trailers and banner previews &bull; Showing 12 verified promotional releases
          </p>
        </div>

        <button
          onClick={onOpenUploadModal}
          className="self-start sm:self-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Upload Movie Teaser / Ad</span>
        </button>
      </div>

      {/* Ads Grid */}
      {approvedAds.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-slate-800 rounded-xl my-4">
          <Film className="w-10 h-10 text-slate-600 mx-auto mb-2" />
          <p className="text-sm font-semibold text-slate-400">No active movie advertisements currently live.</p>
          <p className="text-xs text-slate-500 mt-1">Be the first production house to showcase your teaser on 24 Crofts!</p>
          <button
            onClick={onOpenUploadModal}
            className="mt-4 px-4 py-2 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold"
          >
            Submit Movie Teaser
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-6">
          {approvedAds.map((ad) => {
            const videoId = parseYouTubeVideoId(ad.youtubeUrl);
            return (
              <div
                key={ad.id}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-amber-500/60 transition-all duration-300 shadow-xl flex flex-col"
              >
                {/* Poster / Thumbnail with Play Overlay */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                  <img
                    src={ad.posterUrl}
                    alt={ad.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Play Button Overlay */}
                  <button
                    onClick={() => handleWatchTrailer(ad)}
                    className="absolute inset-0 flex items-center justify-center group/btn"
                    aria-label={`Watch teaser for ${ad.title}`}
                  >
                    <div className="w-14 h-14 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.7)] group-hover/btn:scale-110 group-hover/btn:bg-amber-400 transition-all">
                      <Play className="w-6 h-6 fill-slate-950 translate-x-0.5" />
                    </div>
                  </button>

                  {/* Release Window Tag */}
                  <span className="absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase bg-black/80 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-md backdrop-blur">
                    {ad.releaseDate}
                  </span>

                  {/* Admin Verified Badge */}
                  <span className="absolute top-3 right-3 text-[10px] font-bold tracking-wider uppercase bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded-md backdrop-blur flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Ad
                  </span>
                </div>

                {/* Details Section */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-amber-400/90 tracking-wider">
                      {ad.productionBanner}
                    </span>
                    <h3 className="font-cinzel text-base font-bold text-white group-hover:text-amber-300 transition truncate mt-0.5">
                      {ad.title}
                    </h3>
                    <p className="text-xs text-slate-400 italic line-clamp-1 mt-1">
                      "{ad.tagline}"
                    </p>

                    <div className="mt-3 pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Directed by:</span>
                        <span className="text-slate-200 font-medium">{ad.director}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Starring:</span>
                        <span className="text-slate-200 font-medium truncate max-w-[160px]">{ad.starring}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[10px] text-slate-500">
                      YouTube Teaser Link
                    </span>
                    <button
                      onClick={() => handleWatchTrailer(ad)}
                      className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                    >
                      <span>Watch Teaser</span>
                      <Play className="w-3 h-3 fill-amber-400" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Embedded Video Player Modal */}
      {selectedVideoUrl && activeAd && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
          <div className="relative w-full max-w-4xl bg-slate-950 border border-amber-500/50 rounded-2xl shadow-2xl overflow-hidden my-auto">
            <div className="bg-slate-900 px-5 py-3 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="font-cinzel text-base font-bold text-white">
                  {activeAd.title} &mdash; Official Teaser
                </h4>
                <p className="text-[11px] text-slate-400">
                  {activeAd.productionBanner} &bull; Directed by {activeAd.director}
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedVideoUrl(null);
                  setActiveAd(null);
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideoUrl}?autoplay=1`}
                title={activeAd.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-4 bg-slate-900/80 flex items-center justify-between text-xs text-slate-400">
              <span className="italic">{activeAd.tagline}</span>
              <span className="text-amber-400 font-semibold">{activeAd.releaseDate}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
