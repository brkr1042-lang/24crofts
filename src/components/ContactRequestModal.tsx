import React, { useState } from 'react';
import { Profile, ContactAccessRequest } from '../types.ts';
import { X, Lock, ShieldCheck, Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactRequestModalProps {
  profile: Profile;
  onClose: () => void;
  onSubmitRequest: (request: Omit<ContactAccessRequest, 'id' | 'status' | 'requestDate'>) => void;
}

export const ContactRequestModal: React.FC<ContactRequestModalProps> = ({
  profile,
  onClose,
  onSubmitRequest,
}) => {
  const [formData, setFormData] = useState({
    requesterName: '',
    requesterPhone: '',
    requesterEmail: '',
    productionHouse: '',
    purpose: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.requesterName || !formData.requesterPhone || !formData.purpose) {
      setError('Please fill in your name, contact phone, and purpose of collaboration.');
      return;
    }

    onSubmitRequest({
      profileId: profile.id,
      profileName: profile.name,
      profileCraft: profile.craft,
      requesterName: formData.requesterName,
      requesterPhone: formData.requesterPhone,
      requesterEmail: formData.requesterEmail,
      productionHouse: formData.productionHouse || 'Independent Production',
      purpose: formData.purpose,
    });

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-[#0d121c] border border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden p-6">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg font-bold text-white">
                Request Authorized Contact Access
              </h3>
              <p className="text-xs text-slate-400">
                Subject to platform administration authorization
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
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-cinzel text-xl font-bold text-white">
              Authorization Request Submitted!
            </h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Your request to access contact details for{' '}
              <strong className="text-amber-300">{profile.name} ({profile.id})</strong>{' '}
              has been logged in the Admin Verification Queue.
            </p>
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-left text-xs text-slate-400 space-y-1">
              <div className="flex justify-between">
                <span>Profile ID:</span>
                <span className="font-mono text-amber-400">{profile.id}</span>
              </div>
              <div className="flex justify-between">
                <span>Talent Craft:</span>
                <span className="text-slate-200">{profile.craft}</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-amber-400 font-bold">Pending Admin Approval</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition"
            >
              Done &amp; Return to Directory
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            {/* Target Profile Summary Badge */}
            <div className="flex items-center gap-3 p-3 bg-slate-900/80 rounded-xl border border-slate-800">
              <img
                src={profile.avatarUrl}
                alt=""
                className="w-12 h-12 rounded-lg object-cover border border-slate-700"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white truncate">{profile.name}</span>
                  <span className="text-[10px] font-mono text-amber-400 bg-black/40 px-1.5 py-0.5 rounded border border-slate-700">
                    {profile.id}
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">{profile.craft} • {profile.category}</div>
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-950/60 border border-red-800/80 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.requesterName}
                  onChange={(e) => setFormData({ ...formData, requesterName: e.target.value })}
                  placeholder="e.g. Suresh Kumar"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Your Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.requesterPhone}
                    onChange={(e) => setFormData({ ...formData, requesterPhone: e.target.value })}
                    placeholder="+91 98480 00000"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Your Official Email
                  </label>
                  <input
                    type="email"
                    value={formData.requesterEmail}
                    onChange={(e) => setFormData({ ...formData, requesterEmail: e.target.value })}
                    placeholder="producer@studio.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Production House / Banner / Agency
                </label>
                <input
                  type="text"
                  value={formData.productionHouse}
                  onChange={(e) => setFormData({ ...formData, productionHouse: e.target.value })}
                  placeholder="e.g. Mythri Movie Makers / Independent Filmmaker"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Project Purpose &amp; Collaboration Details *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  placeholder="Briefly describe your feature film/commercial project, budget scale, and tentative shoot dates..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>
            </div>

            <div className="p-3 bg-amber-950/30 rounded-xl border border-amber-600/30 text-[11px] text-amber-200/90 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                To prevent spam and protect talent privacy, direct contact details of directors, producers, and crew are only released following administrative approval.
              </span>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Authorization Request</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
