import React, { useState } from 'react';
import { MovieAdSubmission } from '../types.ts';
import { parseYouTubeVideoId, validateMovieAdSubmission } from '../utils/craftLogic.ts';
import { X, Video, Film, CheckCircle2, AlertCircle, ShieldAlert, Sparkles } from 'lucide-react';

interface MovieAdUploadModalProps {
  onClose: () => void;
  onSubmitAd: (ad: Omit<MovieAdSubmission, 'id' | 'status' | 'submittedAt'>) => void;
}

export const MovieAdUploadModal: React.FC<MovieAdUploadModalProps> = ({
  onClose,
  onSubmitAd,
}) => {
  const [formData, setFormData] = useState({
    title: '',
    tagline: '',
    productionBanner: '',
    director: '',
    starring: '',
    category: 'Theatrical Feature Film',
    youtubeUrl: '',
    posterUrl: '',
    releaseDate: '',
    budget: '',
    synopsis: '',
    submitterName: '',
    submitterPhone: '',
    submitterEmail: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const samplePosters = [
    'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1200&q=80',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);

    const validation = validateMovieAdSubmission(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    const defaultPoster = formData.posterUrl.trim() || samplePosters[0];

    onSubmitAd({
      title: formData.title,
      tagline: formData.tagline || 'Experience the cinema on the big screen.',
      productionBanner: formData.productionBanner,
      director: formData.director || 'Visionary Filmmakers',
      starring: formData.starring || 'Ensemble Cast',
      category: formData.category,
      youtubeUrl: formData.youtubeUrl,
      posterUrl: defaultPoster,
      releaseDate: formData.releaseDate || 'Coming Soon',
      budget: formData.budget || 'Confidential',
      synopsis: formData.synopsis || 'An upcoming cinematic presentation.',
      submitterName: formData.submitterName,
      submitterPhone: formData.submitterPhone,
      submitterEmail: formData.submitterEmail,
    });

    setSubmitted(true);
  };

  const detectedVideoId = parseYouTubeVideoId(formData.youtubeUrl);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0d121c] border border-amber-500/50 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-slate-950 font-bold">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg md:text-xl font-bold text-white">
                Upload Movie Advertisement &amp; Teaser
              </h3>
              <p className="text-xs text-amber-300/80">
                Mandatory Admin Approval Required Before Homepage Placement
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-cinzel text-xl font-bold text-white">
              Movie Advertisement Submitted Successfully!
            </h4>
            <p className="text-xs md:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Your movie ad <strong className="text-amber-300">{formData.title}</strong> has been forwarded to the 24 Crofts editorial team. Once verified and approved by the platform administrator, it will be placed live on the homepage ad spotlight and featured trailer reel.
            </p>
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-left text-xs space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between text-slate-400">
                <span>Banner/Studio:</span>
                <span className="text-slate-200 font-semibold">{formData.productionBanner}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>YouTube Teaser ID:</span>
                <span className="font-mono text-amber-400">{detectedVideoId || 'Linked'}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Status:</span>
                <span className="text-amber-400 font-bold">Pending Admin Verification</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition"
            >
              Close &amp; Return to Homepage
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="overflow-y-auto p-6 space-y-4 text-xs">
            {/* Mandatory Admin approval alert notice */}
            <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-600/40 text-amber-200 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-bold text-white block">
                  Mandatory Editorial Approval Protocol
                </span>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Per 24 Crofts guidelines, all commercial movie advertisements, teasers, and YouTube promo links undergo administrative review for copyright, union certifications, and broadcast standards before homepage publication.
                </p>
              </div>
            </div>

            {errors.length > 0 && (
              <div className="p-3 rounded-xl bg-red-950/70 border border-red-800 text-red-200 space-y-1">
                {errors.map((err, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    <span>{err}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Movie Title & Tagline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Movie / Project Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Kalki Chronicles / The Last Kingdom"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Tagline / Catchphrase
                </label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  placeholder="e.g. When truth clashes with destiny..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* YouTube Teaser / Trailer Link (Explicit User Requirement) */}
            <div>
              <label className="block text-slate-300 font-medium mb-1">
                YouTube Teaser / Trailer Link * (Admin Approved Placement)
              </label>
              <div className="relative">
                <input
                  type="url"
                  required
                  value={formData.youtubeUrl}
                  onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                  placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 pl-9 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
                <Video className="w-4 h-4 text-red-500 absolute left-3 top-2.5" />
              </div>
              {detectedVideoId && (
                <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  YouTube video detected (ID: {detectedVideoId})
                </p>
              )}
            </div>

            {/* Production Banner & Director */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Production Banner / Studio Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.productionBanner}
                  onChange={(e) => setFormData({ ...formData, productionBanner: e.target.value })}
                  placeholder="e.g. Gold Dust Entertainment"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Director Name
                </label>
                <input
                  type="text"
                  value={formData.director}
                  onChange={(e) => setFormData({ ...formData, director: e.target.value })}
                  placeholder="e.g. S. S. Rajamouli"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Cast & Genre */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Starring / Lead Cast
                </label>
                <input
                  type="text"
                  value={formData.starring}
                  onChange={(e) => setFormData({ ...formData, starring: e.target.value })}
                  placeholder="e.g. Lead Actor, Lead Actress"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Film Category / Genre
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="Theatrical Feature Film">Theatrical Feature Film</option>
                  <option value="Pan-India Multi-Language Epic">Pan-India Multi-Language Epic</option>
                  <option value="Web Series / OTT Original">Web Series / OTT Original</option>
                  <option value="Independent / Film Festival Entry">Independent / Film Festival Entry</option>
                  <option value="High-End Commercial Campaign">High-End Commercial Campaign</option>
                  <option value="Documentary Short / Feature">Documentary Short / Feature</option>
                </select>
              </div>
            </div>

            {/* Poster URL or Quick Selection */}
            <div>
              <label className="block text-slate-300 font-medium mb-1">
                Movie Poster / Key Art Image URL
              </label>
              <input
                type="url"
                value={formData.posterUrl}
                onChange={(e) => setFormData({ ...formData, posterUrl: e.target.value })}
                placeholder="https://example.com/poster.jpg (leave blank for cinematic default)"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-[10px] text-slate-400">Or use sample posters:</span>
                {samplePosters.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setFormData({ ...formData, posterUrl: p })}
                    className="text-[10px] text-amber-400 underline hover:text-amber-300"
                  >
                    Sample {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Release Date & Synopsis */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Anticipated Release Date / Window
                </label>
                <input
                  type="text"
                  value={formData.releaseDate}
                  onChange={(e) => setFormData({ ...formData, releaseDate: e.target.value })}
                  placeholder="e.g. Diwali 2026 or Summer 2027"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Estimated Budget Scale
                </label>
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  placeholder="e.g. ₹25 Crores / $5M"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Submitter Credentials (for admin validation) */}
            <div className="pt-2 border-t border-slate-800 space-y-2">
              <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">
                Submitter Verification Details
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <input
                  type="text"
                  required
                  value={formData.submitterName}
                  onChange={(e) => setFormData({ ...formData, submitterName: e.target.value })}
                  placeholder="Your Name (Producer/Publicist) *"
                  className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
                <input
                  type="tel"
                  required
                  value={formData.submitterPhone}
                  onChange={(e) => setFormData({ ...formData, submitterPhone: e.target.value })}
                  placeholder="Contact Phone *"
                  className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
                <input
                  type="email"
                  value={formData.submitterEmail}
                  onChange={(e) => setFormData({ ...formData, submitterEmail: e.target.value })}
                  placeholder="Official Email"
                  className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Form actions */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Submit For Admin Approval</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
