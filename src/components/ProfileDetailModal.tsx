import React, { useState, useEffect } from 'react';
import { Profile, ContactAccessRequest, ProductionHouse } from '../types.ts';
import {
  X,
  ShieldCheck,
  Lock,
  Unlock,
  Phone,
  Mail,
  Share2,
  Check,
  Video,
  Award,
  MapPin,
  Calendar,
  Layers,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Edit,
  Film,
  KeyRound,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Building,
} from 'lucide-react';

interface ProfileDetailModalProps {
  profile: Profile;
  onClose: () => void;
  isContactAuthorized: boolean;
  onRequestContact: (profile: Profile) => void;
  onEditProfile?: (profile: Profile) => void;
  isOwner?: boolean;
  contactRequests?: ContactAccessRequest[];
  onVerifyPhonePermission?: (phone: string) => boolean;
  loggedInProductionHouse?: ProductionHouse | null;
  onOpenProductionHouseLogin?: () => void;
}

export const ProfileDetailModal: React.FC<ProfileDetailModalProps> = ({
  profile,
  onClose,
  isContactAuthorized,
  onRequestContact,
  onEditProfile,
  isOwner = false,
  contactRequests = [],
  onVerifyPhonePermission,
  loggedInProductionHouse,
  onOpenProductionHouseLogin,
}) => {

  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(isContactAuthorized);
  const [verifyPhoneInput, setVerifyPhoneInput] = useState('');
  const [verifyStatus, setVerifyStatus] = useState<{
    message: string;
    type: 'success' | 'error' | 'pending' | null;
  }>({ message: '', type: null });
  const [verifiedRequester, setVerifiedRequester] = useState<string | null>(null);

  useEffect(() => {
    setIsAuthorized(isContactAuthorized);
  }, [isContactAuthorized]);

  const handleShare = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?profile=${profile.id}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleVerifyPhone = (e: React.FormEvent) => {
    e.preventDefault();
    setVerifyStatus({ message: '', type: null });
    const cleanInput = verifyPhoneInput.replace(/[^\d]/g, '');
    if (cleanInput.length < 8) {
      setVerifyStatus({
        message: 'Please enter a valid 10-digit phone number.',
        type: 'error',
      });
      return;
    }

    // Search matching request for this profile
    const matchingReq = contactRequests.find((r) => {
      if (r.profileId !== profile.id) return false;
      const cleanReq = r.requesterPhone.replace(/[^\d]/g, '');
      return (
        cleanReq.endsWith(cleanInput.slice(-10)) ||
        cleanInput.endsWith(cleanReq.slice(-10))
      );
    });

    if (!matchingReq) {
      setVerifyStatus({
        message: 'No authorization request found matching this phone number. Please click "Request Admin Permission" to apply.',
        type: 'error',
      });
      return;
    }

    if (matchingReq.status === 'approved') {
      setIsAuthorized(true);
      setVerifiedRequester(`${matchingReq.requesterName} (${matchingReq.productionHouse})`);
      setVerifyStatus({
        message: `Admin permission verified! Welcome ${matchingReq.requesterName}. Contact number unlocked.`,
        type: 'success',
      });
      if (onVerifyPhonePermission) {
        onVerifyPhonePermission(verifyPhoneInput);
      }
    } else if (matchingReq.status === 'pending') {
      setVerifyStatus({
        message: `Your request (${matchingReq.requesterName}) was submitted on ${matchingReq.requestDate} and is currently PENDING Admin Approval. Once the administrator approves it, your contact access will unlock.`,
        type: 'pending',
      });
    } else {
      setVerifyStatus({
        message: 'Your access request was reviewed and denied by the platform administrator.',
        type: 'error',
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0d121c] border border-amber-600/40 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-slate-900/95 border-b border-slate-800 px-5 py-3.5 flex items-center justify-between backdrop-blur">
          <div className="flex items-center gap-2 md:gap-3 flex-wrap">
            <span className="font-mono text-xs md:text-sm font-black text-amber-300 bg-amber-950/80 px-2.5 py-1 rounded border border-amber-500/50">
              {profile.id}
            </span>
            <span className="font-cinzel text-lg md:text-xl font-bold text-white">
              {profile.name}
            </span>
            {profile.stageName && (
              <span className="text-xs text-slate-400 italic">
                ({profile.stageName})
              </span>
            )}
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
              {profile.craft}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {isOwner && onEditProfile && (
              <button
                onClick={() => onEditProfile(profile)}
                className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Edit Profile</span>
              </button>
            )}

            <button
              onClick={handleShare}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-300 transition flex items-center gap-1.5 text-xs"
              title="Copy shareable link"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold hidden sm:inline">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Share Profile</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-red-950/60 text-slate-400 hover:text-red-400 transition"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 md:p-8 space-y-6">
          {/* Top Section: Photo Gallery & Essential Matrimonial/Industry Details */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left Photo Gallery (unlimited photo support) */}
            <div className="md:col-span-5 flex flex-col gap-2">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-900 border border-slate-700 shadow-lg">
                <img
                  src={profile.photos[activePhotoIdx] || profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />

                {profile.photos.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActivePhotoIdx((prev) =>
                          prev === 0 ? profile.photos.length - 1 : prev - 1
                        )
                      }
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() =>
                        setActivePhotoIdx((prev) =>
                          prev === profile.photos.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1.5">
                      {profile.photos.map((_, i) => (
                        <span
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all ${
                            i === activePhotoIdx
                              ? 'bg-amber-400 w-4'
                              : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Photo Thumbnails */}
              {profile.photos.length > 1 && (
                <div className="flex gap-2 overflow-x-auto py-1">
                  {profile.photos.map((photo, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePhotoIdx(i)}
                      className={`relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition ${
                        i === activePhotoIdx
                          ? 'border-amber-400 scale-95'
                          : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={photo} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Quick Facts & Matrimonial Details */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-400">
                    Category:
                  </span>
                  <span className="text-xs text-amber-300 font-semibold">
                    {profile.category}
                  </span>
                </div>

                <h2 className="font-cinzel text-2xl font-bold text-white mt-1">
                  {profile.name}
                </h2>
                <p className="text-amber-400 text-sm font-semibold">
                  {profile.subRole || profile.craft}
                </p>

                {/* Details Table */}
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <div>
                    <span className="text-slate-500 block">Experience</span>
                    <span className="text-slate-200 font-bold text-sm">
                      {profile.experienceYears} Years
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Age &amp; Gender</span>
                    <span className="text-slate-200 font-bold text-sm">
                      {profile.age} Years, {profile.gender}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Native Place</span>
                    <span className="text-slate-200 font-semibold">
                      {profile.nativePlace}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Current Base</span>
                    <span className="text-slate-200 font-semibold">
                      {profile.currentCity}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-500 block">Languages Spoken</span>
                    <span className="text-slate-200 font-semibold">
                      {profile.languages.join(' • ')}
                    </span>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-slate-500 block">Union / Guild Membership</span>
                      <span className="text-slate-200 font-semibold flex items-center gap-1.5 mt-0.5">
                        {profile.unionCard.hasCard ? (
                          <>
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            <span>
                              {profile.unionCard.unionName || 'Registered Member'}
                              {profile.unionCard.cardNumber && ` (${profile.unionCard.cardNumber})`}
                            </span>
                          </>
                        ) : (
                          <span className="text-slate-400">Independent Practitioner</span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Protected Contact Section (Strict Rule: Only who take permission from admin can view) */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-600/40 shadow-inner space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {isAuthorized ? (
                      <Unlock className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Lock className="w-5 h-5 text-amber-400" />
                    )}
                    <div>
                      <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-200">
                        {isAuthorized
                          ? 'Verified Contact Access Granted'
                          : 'Confidential Contact Details (Admin Permission Required)'}
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        {isAuthorized
                          ? 'Admin permission verified. Contact details unlocked for approved cinema collaboration.'
                          : 'Under cinema matrimonial & directory privacy rules, direct contact numbers are never shown publicly. Only the person who takes permission from the admin can view this number.'}
                      </p>
                    </div>
                  </div>
                </div>

                {isAuthorized ? (
                  /* 1. AUTHORIZED VIEW: Only shown to the person with Admin permission */
                  <div className="bg-slate-950/90 p-4 rounded-xl border border-emerald-500/40 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs text-emerald-300 font-bold">
                          Admin Authorization Active
                        </span>
                      </div>
                      {loggedInProductionHouse && loggedInProductionHouse.status === 'approved' && (
                        <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded flex items-center gap-1">
                          <Building className="w-3 h-3 text-emerald-400" />
                          <span>Unlocked for {loggedInProductionHouse.name} (Approved Production House)</span>
                        </span>
                      )}
                      {verifiedRequester && !loggedInProductionHouse && (
                        <span className="text-[11px] text-slate-400">
                          Authorized Requester: <strong className="text-amber-300">{verifiedRequester}</strong>
                        </span>
                      )}
                      {isOwner && (
                        <span className="text-[11px] text-slate-400">
                          Viewing as <strong className="text-amber-300">Profile Owner</strong>
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase block font-semibold">
                          Direct Contact Phone Number
                        </span>
                        <span className="font-mono text-lg md:text-xl font-black text-amber-300 tracking-wide">
                          {profile.contactNumber}
                        </span>
                        {profile.email && (
                          <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                            <Mail className="w-3 h-3 text-slate-500" />
                            <span>{profile.email}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:${profile.contactNumber}`}
                          className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg transition"
                        >
                          <Phone className="w-4 h-4" />
                          <span>Call Directly</span>
                        </a>
                        <a
                          href={`https://wa.me/${profile.contactNumber.replace(/[^\d]/g, '')}`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg transition"
                        >
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* 2. LOCKED VIEW: Contact number is strictly hidden from everyone without Admin permission */
                  <div className="space-y-4">
                    <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold">
                          <Lock className="w-3.5 h-3.5" />
                          <span>Contact Number: Confidential &amp; Protected</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 max-w-md">
                          Direct phone numbers are strictly hidden. Request individual contact authorization or log in as an approved cinema production house.
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 shrink-0">
                        {onOpenProductionHouseLogin && (
                          <button
                            type="button"
                            onClick={() => {
                              onClose();
                              onOpenProductionHouseLogin();
                            }}
                            className="px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-500/40 text-amber-300 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer shadow"
                            title="Log in with an approved production house account to view all contacts"
                          >
                            <Building className="w-3.5 h-3.5 text-amber-400" />
                            <span>Production House Login</span>
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => onRequestContact(profile)}
                          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 transition cursor-pointer"
                        >
                          <Lock className="w-3.5 h-3.5" />
                          <span>Request Contact Access</span>
                        </button>
                      </div>
                    </div>


                    {/* Inline Verification for Requesters who already received Admin permission */}
                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5">
                      <div className="flex items-center gap-2">
                        <KeyRound className="w-4 h-4 text-amber-400" />
                        <span className="text-xs font-bold text-slate-200">
                          Already Took Permission From Admin?
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Enter the phone number you used when submitting your access request to unlock this contact:
                      </p>

                      <form onSubmit={handleVerifyPhone} className="flex flex-col sm:flex-row gap-2">
                        <input
                          type="tel"
                          value={verifyPhoneInput}
                          onChange={(e) => setVerifyPhoneInput(e.target.value)}
                          placeholder="e.g. +91 98490 88990 or 9849088990"
                          className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono"
                        />
                        <button
                          type="submit"
                          className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs border border-amber-500/30 transition flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                        >
                          <span>Verify &amp; Unlock Contact</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </form>

                      {verifyStatus.message && (
                        <div
                          className={`p-2.5 rounded-lg text-xs flex items-start gap-2 ${
                            verifyStatus.type === 'success'
                              ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700'
                              : verifyStatus.type === 'pending'
                              ? 'bg-amber-950/80 text-amber-300 border border-amber-700'
                              : 'bg-red-950/80 text-red-300 border border-red-800'
                          }`}
                        >
                          {verifyStatus.type === 'success' ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          )}
                          <span className="leading-relaxed">{verifyStatus.message}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Biography & Artist Statement */}
          <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
            <h3 className="font-cinzel text-base font-bold text-amber-300 mb-2 flex items-center gap-2">
              <Film className="w-4 h-4 text-amber-400" />
              Artist Biography &amp; Cinema Background
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
              {profile.bio}
            </p>
          </div>

          {/* Filmography & Key Projects */}
          {profile.keyProjects.length > 0 && (
            <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
              <h3 className="font-cinzel text-base font-bold text-amber-300 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                Selected Filmography &amp; Key Projects
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {profile.keyProjects.map((proj, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 hover:border-amber-500/40 transition"
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-bold text-sm text-white">{proj.title}</span>
                      <span className="text-[11px] font-mono text-amber-400 font-semibold">
                        {proj.year}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{proj.role}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 font-medium">
                      {proj.language}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* YouTube Video Showreels & Clips (Requirement: provide multiple YouTube links) */}
          {profile.youtubeVideos.length > 0 && (
            <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
              <h3 className="font-cinzel text-base font-bold text-amber-300 mb-3 flex items-center gap-2">
                <Video className="w-4 h-4 text-red-500" />
                Cinema Showreels &amp; Video Portfolio
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profile.youtubeVideos.map((vid, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800"
                  >
                    <div className="aspect-video w-full bg-black">
                      <iframe
                        src={`https://www.youtube.com/embed/${vid.videoId}`}
                        title={vid.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="text-xs font-bold text-white truncate">
                        {vid.title}
                      </h4>
                      {vid.isShowreel && (
                        <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider">
                          Primary Showreel
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Share Link Info */}
        <div className="sticky bottom-0 bg-slate-950/95 border-t border-slate-800 px-5 py-3 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>Shareable Profile Link:</span>
            <code className="text-amber-400 font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-[11px]">
              https://24crofts.com/?profile={profile.id}
            </code>
          </div>

          <button
            onClick={handleShare}
            className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Copy Link</span>
          </button>
        </div>
      </div>
    </div>
  );
};
