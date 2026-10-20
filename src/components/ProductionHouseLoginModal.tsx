import React, { useState } from 'react';
import { ProductionHouse } from '../types.ts';
import { authenticateProductionHouse } from '../utils/craftLogic.ts';
import {
  X,
  Building,
  KeyRound,
  Eye,
  EyeOff,
  AlertCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Unlock,
  Film,
  Sparkles,
  ArrowRight,
  Phone,
} from 'lucide-react';

interface ProductionHouseLoginModalProps {
  productionHouses: ProductionHouse[];
  onClose: () => void;
  onLoginSuccess: (ph: ProductionHouse) => void;
  onOpenRegister: () => void;
  onOpenAdminPortal?: () => void;
}

export const ProductionHouseLoginModal: React.FC<ProductionHouseLoginModalProps> = ({
  productionHouses,
  onClose,
  onLoginSuccess,
  onOpenRegister,
  onOpenAdminPortal,
}) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pendingNoticePH, setPendingNoticePH] = useState<ProductionHouse | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setPendingNoticePH(null);

    const result = authenticateProductionHouse(productionHouses, identifier, password);

    if (result.success && result.productionHouse) {
      onLoginSuccess(result.productionHouse);
      onClose();
    } else if (result.isPending && result.productionHouse) {
      setPendingNoticePH(result.productionHouse);
      setError(null);
    } else {
      setError(result.error || 'Invalid production house credentials.');
    }
  };

  const handleQuickFill = (phUsername: string, pass: string) => {
    setIdentifier(phUsername);
    setPassword(pass);
    setError(null);
    setPendingNoticePH(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#0d121c] border-2 border-amber-500/60 rounded-2xl shadow-2xl overflow-hidden my-auto p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-slate-950 font-black shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg md:text-xl font-bold text-white">
                Production House Login
              </h3>
              <p className="text-xs text-amber-300/80">
                Official Studio Access &bull; Full Contact Phone Directory
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

        {/* Pending Admin Notice Card if user tries to log in with unapproved banner */}
        {pendingNoticePH && (
          <div className="mt-4 p-4 rounded-xl bg-amber-950/50 border border-amber-500/50 space-y-3">
            <div className="flex items-center gap-2 text-amber-300">
              <Clock className="w-5 h-5 text-amber-400 animate-pulse shrink-0" />
              <span className="font-cinzel text-xs font-bold uppercase tracking-wider">
                Status: Pending Admin Approval
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              The registration for <strong className="text-amber-200">{pendingNoticePH.name}</strong> (@{pendingNoticePH.username}) is currently awaiting review by the platform administrator.
            </p>

            <div className="p-2.5 rounded-lg bg-black/40 border border-amber-500/20 text-[11px] text-amber-300/90 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Mandatory Approval:</strong> Contact phone numbers will unlock across the entire 24 crafts directory as soon as the admin approves this banner in the Admin Panel.
              </span>
            </div>

            {onOpenAdminPortal && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenAdminPortal();
                }}
                className="w-full py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition flex items-center justify-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Open Admin Panel to Approve Banner Now</span>
              </button>
            )}
          </div>
        )}

        {/* General Error */}
        {error && (
          <div className="mt-4 p-3 rounded-xl bg-red-950/70 border border-red-800 text-red-200 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="mt-5 space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Production House Username or Official Email *
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="e.g. mythri_official or production@mythrimovies.com"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono"
              />
              <Building className="w-4 h-4 text-amber-500 absolute right-3 top-3 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Account Password *
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 pr-10 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-200"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold uppercase tracking-wider shadow-[0_2px_15px_rgba(212,175,55,0.4)] transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Building className="w-4 h-4" />
            <span>Log In as Production House</span>
          </button>

          {/* Quick Demo Production House Logins */}
          <div className="pt-3 border-t border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                Quick Test Accounts:
              </span>
              <span className="text-[10px] text-amber-400">Click to Autofill</span>
            </div>
            
            <div className="space-y-1.5">
              <button
                type="button"
                onClick={() => handleQuickFill('mythri_official', 'mythri2026')}
                className="w-full p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-emerald-500/40 text-left transition flex items-center justify-between text-[11px]"
              >
                <div className="flex items-center gap-1.5 truncate">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <span className="text-white font-medium truncate">Mythri Movie Makers</span>
                  <span className="text-emerald-400 font-bold text-[10px]">[Approved &bull; Unlocks All]</span>
                </div>
                <span className="font-mono text-amber-400 text-[10px] bg-black/40 px-1.5 py-0.5 rounded border border-slate-700 shrink-0">
                  @mythri_official
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickFill('hombale_studio', 'hombale2026')}
                className="w-full p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-emerald-500/40 text-left transition flex items-center justify-between text-[11px]"
              >
                <div className="flex items-center gap-1.5 truncate">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <span className="text-white font-medium truncate">Hombale Films</span>
                  <span className="text-emerald-400 font-bold text-[10px]">[Approved &bull; Unlocks All]</span>
                </div>
                <span className="font-mono text-amber-400 text-[10px] bg-black/40 px-1.5 py-0.5 rounded border border-slate-700 shrink-0">
                  @hombale_studio
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickFill('vyjayanthi_films', 'vyjayanthi2026')}
                className="w-full p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-amber-500/40 text-left transition flex items-center justify-between text-[11px]"
              >
                <div className="flex items-center gap-1.5 truncate">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span className="text-white font-medium truncate">Vyjayanthi Movies</span>
                  <span className="text-amber-400 font-bold text-[10px]">[Pending Admin Approval]</span>
                </div>
                <span className="font-mono text-amber-400 text-[10px] bg-black/40 px-1.5 py-0.5 rounded border border-slate-700 shrink-0">
                  @vyjayanthi_films
                </span>
              </button>
            </div>
          </div>

          {/* Registration link */}
          <div className="pt-2 text-center text-xs text-slate-400">
            <span>New Production House / Studio? </span>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenRegister();
              }}
              className="text-amber-400 hover:text-amber-300 font-bold hover:underline"
            >
              Register Banner for Verification &rarr;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
