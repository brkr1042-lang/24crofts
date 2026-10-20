import React, { useState } from 'react';
import { Profile, ContactAccessRequest } from '../types.ts';
import {
  X,
  User,
  Film,
  Edit,
  Eye,
  LogOut,
  ShieldCheck,
  Phone,
  Mail,
  Video,
  Award,
  Clock,
  MapPin,
  Lock,
  Unlock,
  CheckCircle2,
  Calendar,
  Share2,
  Copy,
  Check,
  Plus,
} from 'lucide-react';

interface MemberDashboardModalProps {
  member: Profile;
  contactRequests: ContactAccessRequest[];
  onClose: () => void;
  onOpenEditProfile: (profile: Profile) => void;
  onOpenViewProfile: (profile: Profile) => void;
  onOpenAddProfile?: () => void;
  onUpdateAvailability: (profileId: string, availability: Profile['availability']) => void;
  onLogout: () => void;
}

export const MemberDashboardModal: React.FC<MemberDashboardModalProps> = ({
  member,
  contactRequests,
  onClose,
  onOpenEditProfile,
  onOpenViewProfile,
  onOpenAddProfile,
  onUpdateAvailability,
  onLogout,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  // Filter requests submitted specifically for this member
  const memberRequests = contactRequests.filter((r) => r.profileId === member.id);

  const handleShare = () => {
    const url = `${window.location.origin}${window.location.pathname}?profile=${member.id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0d121c] border border-amber-500/50 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="sticky top-0 z-10 bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={member.avatarUrl}
              alt=""
              className="w-11 h-11 rounded-xl object-cover border-2 border-amber-500/60 shadow"
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-cinzel text-lg md:text-xl font-bold text-white">
                  {member.name}
                </h3>
                <span className="font-mono text-xs font-black text-amber-300 bg-amber-950 px-2 py-0.5 rounded border border-amber-500/40">
                  {member.id}
                </span>
              </div>
              <p className="text-xs text-amber-400 font-semibold">
                {member.craft} &bull; {member.category.split('. ')[1] || member.category}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onLogout}
              className="px-3 py-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 text-red-300 text-xs font-bold border border-red-800/80 transition flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Dashboard Body */}
        <div className="overflow-y-auto p-6 space-y-6 text-xs">
          {/* Quick Actions & Status Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Availability Status Switcher */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <span className="text-slate-400 font-semibold block uppercase text-[10px] tracking-wider">
                Availability Status
              </span>
              <div className="mt-2 flex items-center gap-1.5">
                {(['Available', 'Shooting', 'In Discussion', 'Busy'] as const).map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => onUpdateAvailability(member.id, status)}
                    className={`px-2 py-1 rounded text-[10px] font-bold transition ${
                      member.availability === status
                        ? 'bg-amber-500 text-slate-950 shadow'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Profile Link */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <span className="text-slate-400 font-semibold block uppercase text-[10px] tracking-wider">
                Shareable Cinema Profile Link
              </span>
              <div className="mt-2 flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] text-amber-400 truncate">
                  24crofts.com/?profile={member.id}
                </span>
                <button
                  onClick={handleShare}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-[10px] shrink-0 flex items-center gap-1"
                >
                  {copiedLink ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedLink ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Quick Profile Controls */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center gap-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenEditProfile(member);
                }}
                className="w-full sm:flex-1 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Edit Profile</span>
              </button>
              {onOpenAddProfile && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenAddProfile();
                  }}
                  className="w-full sm:flex-1 py-2.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/50 text-amber-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>+ Add Profile</span>
                </button>
              )}
              <button
                onClick={() => {
                  onClose();
                  onOpenViewProfile(member);
                }}
                className="w-full sm:w-auto py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-1"
                title="View Public Profile"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View</span>
              </button>
            </div>
          </div>

          {/* Contact Requests Received by this Member */}
          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-400" />
                <h4 className="font-cinzel text-sm font-bold text-white">
                  Contact Number Access Requests ({memberRequests.length})
                </h4>
              </div>
              <span className="text-[11px] text-slate-400">
                Protected by 24 Crofts Admin Authorization Protocol
              </span>
            </div>

            {memberRequests.length === 0 ? (
              <div className="text-center py-6 text-slate-500">
                <p>No external producers have requested your contact details yet.</p>
                <p className="text-[11px] mt-1 text-slate-600">
                  When studios or directors request your number, their identity and purpose will appear here.
                </p>
              </div>
            ) : (
              <div className="space-y-2.5">
                {memberRequests.map((req) => (
                  <div
                    key={req.id}
                    className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-xs">{req.requesterName}</span>
                        <span className="text-slate-400 text-[11px]">({req.productionHouse})</span>
                      </div>
                      <p className="text-slate-300 text-[11px] mt-1 italic">
                        "{req.purpose}"
                      </p>
                      <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-3">
                        <span>Requested on: {req.requestDate}</span>
                        <span>Requester Phone: {req.requesterPhone}</span>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border self-start sm:self-auto ${
                        req.status === 'approved'
                          ? 'bg-emerald-950 text-emerald-400 border-emerald-700'
                          : req.status === 'rejected'
                          ? 'bg-red-950 text-red-400 border-red-700'
                          : 'bg-amber-950 text-amber-400 border-amber-700'
                      }`}
                    >
                      {req.status === 'approved' ? 'Admin Authorized' : `Status: ${req.status}`}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Profile Overview Card */}
          <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-4">
            <h4 className="font-cinzel text-sm font-bold text-amber-300 flex items-center gap-1.5">
              <Film className="w-4 h-4 text-amber-400" />
              <span>Current Profile Snapshot</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">Photos Uploaded</span>
                <span className="font-bold text-white text-sm">{member.photos.length} Photos</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">YouTube Showreels</span>
                <span className="font-bold text-white text-sm">{member.youtubeVideos.length} Videos</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">Film Projects</span>
                <span className="font-bold text-white text-sm">{member.keyProjects.length} Titles</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">Union Card</span>
                <span className="font-bold text-emerald-400 text-sm">
                  {member.unionCard.hasCard ? 'Verified' : 'Independent'}
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex justify-between text-slate-400 text-xs">
                <span>Native Place: <strong className="text-slate-200">{member.nativePlace}</strong></span>
                <span>Current Base: <strong className="text-slate-200">{member.currentCity}</strong></span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                {member.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-950/95 border-t border-slate-800 px-6 py-3.5 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Registered Email: <strong className="text-slate-300">{member.email}</strong>
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
