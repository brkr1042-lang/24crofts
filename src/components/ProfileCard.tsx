import React, { useState } from 'react';
import { Profile } from '../types.ts';
import {
  ShieldCheck,
  Lock,
  Unlock,
  Share2,
  Check,
  Video,
  Award,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
  Phone,
} from 'lucide-react';

interface ProfileCardProps {
  profile: Profile;
  isContactAuthorized: boolean;
  onRequestContact: (profile: Profile) => void;
  onViewDetails: (profile: Profile) => void;
  productionHouseName?: string | null;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  isContactAuthorized,
  onRequestContact,
  onViewDetails,
  productionHouseName,
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}${window.location.pathname}?profile=${profile.id}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  return (
    <div
      onClick={() => onViewDetails(profile)}
      className="group relative bg-[#0f141f] border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_8px_30px_rgba(212,175,55,0.18)] transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Top Banner & Matrimonial ID Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] tracking-wider uppercase font-bold text-slate-400">
            CINEMA ID:
          </span>
          <span className="font-mono text-xs font-black tracking-wide text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/40">
            {profile.id}
          </span>
          {profile.isNew && (
            <span className="text-[9px] font-extrabold tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-1.5 py-0.5 rounded uppercase">
              NEW
            </span>
          )}
        </div>

        {/* Share Profile Link Button */}
        <button
          type="button"
          onClick={handleShare}
          title="Share direct profile link"
          className="text-xs text-slate-400 hover:text-amber-300 p-1.5 rounded-lg hover:bg-slate-800/80 transition flex items-center gap-1"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] text-emerald-400 font-bold">Copied!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5" />
              <span className="text-[10px] hidden sm:inline">Share</span>
            </>
          )}
        </button>
      </div>

      {/* Main Profile Info Section */}
      <div className="p-4 md:p-5 flex flex-col flex-grow">
        <div className="flex gap-4 items-start">
          {/* Avatar with photo count & union verification */}
          <div className="relative shrink-0">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover border-2 border-slate-700 group-hover:border-amber-400 transition"
              loading="lazy"
            />
            {profile.photos.length > 1 && (
              <span className="absolute bottom-1 right-1 text-[9px] font-bold bg-black/80 text-amber-300 px-1.5 py-0.5 rounded-md backdrop-blur-sm border border-slate-700">
                +{profile.photos.length} photos
              </span>
            )}
            {profile.unionCard.verified && (
              <div
                title="Verified Union/Guild Member"
                className="absolute -top-1.5 -left-1.5 bg-amber-500 text-slate-950 p-1 rounded-full shadow"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
            )}
          </div>

          {/* Name & Craft Headers */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h3 className="font-cinzel text-base md:text-lg font-bold text-white group-hover:text-amber-300 transition truncate">
                {profile.name}
              </h3>
              {profile.stageName && (
                <span className="text-xs text-slate-400 italic">
                  ({profile.stageName})
                </span>
              )}
            </div>

            {/* Primary Craft Pill */}
            <div className="mt-1 flex items-center gap-1.5 flex-wrap">
              <span className="inline-flex items-center text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-md">
                {profile.craft}
              </span>
              <span className="text-[11px] text-slate-400">
                {profile.gender}, {profile.age} yrs
              </span>
            </div>

            {profile.subRole && (
              <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                {profile.subRole}
              </p>
            )}

            {/* Availability */}
            <div className="mt-2 flex items-center gap-1.5 text-[11px]">
              <span
                className={`w-2 h-2 rounded-full ${
                  profile.availability === 'Available'
                    ? 'bg-emerald-400 animate-pulse'
                    : profile.availability === 'Shooting'
                    ? 'bg-amber-400'
                    : 'bg-blue-400'
                }`}
              />
              <span className="text-slate-300">{profile.availability}</span>
            </div>
          </div>
        </div>

        {/* Key Matrimonial & Film Details Grid */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{profile.experienceYears} Years Experience</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-300 truncate">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate">{profile.nativePlace.split(',')[0]}</span>
          </div>

          <div className="col-span-2 text-slate-400 text-[11px] truncate">
            <span className="text-slate-500 font-medium">Languages:</span>{' '}
            {profile.languages.join(', ')}
          </div>
        </div>

        {/* Bio preview */}
        <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
          {profile.bio}
        </p>

        {/* Media tags (showreel / film counts) */}
        <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
          {profile.youtubeVideos.length > 0 && (
            <span className="flex items-center gap-1 text-red-400 bg-red-950/40 px-2 py-0.5 rounded border border-red-900/40">
              <Video className="w-3 h-3" />
              {profile.youtubeVideos.length} Video{profile.youtubeVideos.length > 1 ? 's' : ''}
            </span>
          )}
          {profile.keyProjects.length > 0 && (
            <span className="flex items-center gap-1 text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-900/40">
              <Award className="w-3 h-3" />
              {profile.keyProjects.length} Projects
            </span>
          )}
        </div>

        <div className="flex-grow" />

        {/* Contact Protection Box: Strict Privacy - Never show contact number on home page */}
        <div className="mt-4 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div
              className={`p-1.5 rounded-lg shrink-0 ${
                isContactAuthorized
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
              }`}
            >
              {isContactAuthorized ? (
                <ShieldCheck className="w-4 h-4" />
              ) : (
                <Lock className="w-4 h-4" />
              )}
            </div>
            <div className="min-w-0">
              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider truncate">
                Direct Contact
              </div>
              <div className="text-[11px] font-semibold truncate">
                {isContactAuthorized ? (
                  <div className="flex flex-col">
                    <span className="font-mono text-emerald-300 font-bold text-xs tracking-wide">
                      {profile.contactNumber}
                    </span>
                    <span className="text-[9px] text-emerald-400 font-medium truncate">
                      {productionHouseName ? `Unlocked for ${productionHouseName}` : 'Admin Permission Granted'}
                    </span>
                  </div>
                ) : (
                  <span className="text-slate-400">Admin Permission Required</span>
                )}
              </div>
            </div>
          </div>

          {isContactAuthorized ? (
            <div className="flex items-center gap-1.5 shrink-0">
              <a
                href={`tel:${profile.contactNumber}`}
                onClick={(e) => e.stopPropagation()}
                className="px-2.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-[11px] font-bold tracking-wide transition flex items-center gap-1 cursor-pointer shadow"
                title="Call phone number directly"
              >
                <Phone className="w-3 h-3" />
                <span>Call</span>
              </a>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetails(profile);
                }}
                className="p-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold tracking-wide transition flex items-center cursor-pointer"
                title="Open full profile"
              >
                <Unlock className="w-3 h-3 text-emerald-400" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onRequestContact(profile);
              }}
              className="shrink-0 px-2.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-[11px] font-bold tracking-wide transition flex items-center gap-1 cursor-pointer shadow-sm"
              title="Request direct permission from admin to view contact details"
            >
              <Lock className="w-3 h-3" />
              <span>Request Access</span>
            </button>
          )}
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-4 py-3 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between text-xs">
        <span className="text-[11px] text-slate-500 font-mono">
          {profile.category.split('. ')[1] || profile.category}
        </span>
        <button
          type="button"
          onClick={() => onViewDetails(profile)}
          className="font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 text-xs group-hover:translate-x-0.5 transition-transform"
        >
          <span>View Profile</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
