import React from 'react';
import { ProductionHouse } from '../types.ts';
import {
  X,
  Building,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Film,
  LogOut,
  Calendar,
  Briefcase,
  Unlock,
} from 'lucide-react';

interface ProductionHouseDashboardModalProps {
  productionHouse: ProductionHouse;
  onClose: () => void;
  onLogout: () => void;
}

export const ProductionHouseDashboardModal: React.FC<ProductionHouseDashboardModalProps> = ({
  productionHouse,
  onClose,
  onLogout,
}) => {
  const isApproved = productionHouse.status === 'approved';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#0d121c] border-2 border-amber-500/60 rounded-2xl shadow-2xl overflow-hidden my-auto p-6 space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-slate-950 font-black shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-cinzel text-lg md:text-xl font-bold text-white">
                  {productionHouse.name}
                </h3>
                {isApproved && (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Banner
                  </span>
                )}
              </div>
              <p className="text-xs text-amber-300 font-mono">
                Ref ID: {productionHouse.id} &bull; @{productionHouse.username}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Access Privileges Banner */}
        <div className={`p-4 rounded-xl border flex items-start gap-3 ${
          isApproved
            ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
            : 'bg-amber-950/40 border-amber-500/40 text-amber-200'
        }`}>
          {isApproved ? (
            <Unlock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          )}
          <div className="text-xs space-y-1">
            <h4 className="font-bold text-white text-sm">
              {isApproved
                ? 'Full Contact Directory Clearance: Active'
                : 'Account Status: Pending Admin Review'}
            </h4>
            <p className="leading-relaxed opacity-90">
              {isApproved
                ? 'As an approved and authenticated film production house, you have full clearance to view direct phone numbers and contact details for all talent across the 24 Crafts.'
                : 'Your production banner registration is currently being audited by the platform administration board. Contact numbers will be revealed once approved.'}
            </p>
          </div>
        </div>

        {/* Company & Official Details */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <span className="text-slate-500 block">Registration / CIN Number:</span>
              <span className="font-mono text-slate-200 font-bold">{productionHouse.registrationNumber || 'N/A'}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Authorized Representative:</span>
              <span className="font-semibold text-slate-200">{productionHouse.representativeName}</span>
              <span className="text-amber-400 text-[11px] block">{productionHouse.designation}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Official Work Email:</span>
              <span className="font-medium text-slate-200">{productionHouse.email}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Official Phone:</span>
              <span className="font-mono text-slate-200 font-bold">{productionHouse.phone}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Headquarters:</span>
              <span className="text-slate-200">{productionHouse.city}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Registration Date:</span>
              <span className="text-slate-200">{productionHouse.registeredAt}</span>
            </div>
          </div>

          {productionHouse.pastProjects && (
            <div className="pt-2 border-t border-slate-800">
              <span className="text-slate-500 block mb-0.5">Notable Productions / Slate:</span>
              <span className="text-slate-300 font-medium">{productionHouse.pastProjects}</span>
            </div>
          )}

          {productionHouse.upcomingProjects && (
            <div className="pt-2 border-t border-slate-800">
              <span className="text-slate-500 block mb-0.5">Talent Brief &amp; Upcoming Slate:</span>
              <span className="text-amber-300/90">{productionHouse.upcomingProjects}</span>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800">
          <button
            onClick={onLogout}
            className="px-4 py-2 rounded-xl bg-red-950/60 hover:bg-red-900/80 text-red-300 border border-red-800 text-xs font-bold transition flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Log Out Production House</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition"
          >
            Continue Browsing Directory
          </button>
        </div>
      </div>
    </div>
  );
};
