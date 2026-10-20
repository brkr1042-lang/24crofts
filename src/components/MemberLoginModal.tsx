import React, { useState } from 'react';
import { Profile } from '../types.ts';
import { authenticateMember } from '../utils/craftLogic.ts';
import {
  X,
  KeyRound,
  Mail,
  Film,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';

interface MemberLoginModalProps {
  profiles: Profile[];
  onClose: () => void;
  onLoginSuccess: (profile: Profile) => void;
  onOpenRegister: () => void;
}

export const MemberLoginModal: React.FC<MemberLoginModalProps> = ({
  profiles,
  onClose,
  onLoginSuccess,
  onOpenRegister,
}) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isForgotPass, setIsForgotPass] = useState(false);
  const [resetSentEmail, setResetSentEmail] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const result = authenticateMember(profiles, identifier, password);
    if (result.success && result.profile) {
      onLoginSuccess(result.profile);
      onClose();
    } else {
      setError(result.error || 'Authentication failed. Please verify your Cinema ID and password.');
    }
  };

  const handleQuickFill = (profileId: string, defaultPass: string = 'craft2026') => {
    const prof = profiles.find((p) => p.id === profileId);
    if (prof) {
      setIdentifier(prof.id);
      setPassword(prof.password || defaultPass);
      setError(null);
    }
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const clean = identifier.trim().toLowerCase();
    const prof = profiles.find((p) => p.id.toLowerCase() === clean || p.email.toLowerCase() === clean);

    if (!prof) {
      setError('No registered cinema profile found with that ID or email.');
      return;
    }

    setResetSentEmail(prof.email);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#0d121c] border border-amber-500/50 rounded-2xl shadow-2xl overflow-hidden my-auto p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-slate-950 font-black shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg md:text-xl font-bold text-white">
                {isForgotPass ? 'Reset Cinema Password' : 'Craft Member Login'}
              </h3>
              <p className="text-xs text-amber-300/80">
                24 Crofts Cinema &amp; Production Portal
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

        {/* Forgot Password Flow */}
        {isForgotPass ? (
          resetSentEmail ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-cinzel text-lg font-bold text-white">
                Password Recovery Dispatched
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
                A secure password reset link and temporary access key have been sent to{' '}
                <strong className="text-amber-300">{resetSentEmail}</strong>.
              </p>
              <button
                onClick={() => {
                  setIsForgotPass(false);
                  setResetSentEmail(null);
                }}
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition"
              >
                Return to Member Login
              </button>
            </div>
          ) : (
            <form onSubmit={handleResetPassword} className="mt-5 space-y-4 text-xs">
              <p className="text-slate-400 leading-relaxed text-xs">
                Enter your registered Cinema ID (e.g. <code className="text-amber-400">24C-DIR-1042</code>) or email address to receive password instructions.
              </p>

              {error && (
                <div className="p-3 rounded-lg bg-red-950/70 border border-red-800 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Cinema ID or Email
                </label>
                <input
                  type="text"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="24C-DIR-1042 or director@cinema.com"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setIsForgotPass(false)}
                  className="text-slate-400 hover:text-white"
                >
                  Back to Login
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider transition"
                >
                  Send Recovery Link
                </button>
              </div>
            </form>
          )
        ) : (
          /* Normal Member Login Form */
          <form onSubmit={handleLogin} className="mt-5 space-y-4 text-xs">
            {error && (
              <div className="p-3 rounded-lg bg-red-950/70 border border-red-800 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Cinema ID, Chosen Username, or Registered Email *
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="e.g. 24C-DIR-1042, rajamouli_dir, or director@cinema.com"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono"
                />
                <Film className="w-4 h-4 text-amber-500 absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>


            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-slate-300 font-semibold">
                  Password *
                </label>
                <button
                  type="button"
                  onClick={() => setIsForgotPass(true)}
                  className="text-amber-400 hover:text-amber-300 text-[11px] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
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
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold uppercase tracking-wider shadow-[0_2px_15px_rgba(212,175,55,0.4)] transition flex items-center justify-center gap-1.5"
            >
              <UserCheck className="w-4 h-4" />
              <span>Log In to Member Dashboard</span>
            </button>

            {/* Quick-fill sample accounts for easy testing */}
            <div className="pt-3 border-t border-slate-800/80 space-y-2">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                Quick Demo Talent Logins (Click to Autofill):
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {[
                  { id: '24C-DIR-1042', role: 'K. S. Raghavan (Director)' },
                  { id: '24C-PRO-1001', role: 'Ananya Singhania (Producer)' },
                  { id: '24C-CIN-2055', role: 'Kabir Varma (DoP)' },
                ].map((demo) => (
                  <button
                    key={demo.id}
                    type="button"
                    onClick={() => handleQuickFill(demo.id)}
                    className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 text-left transition flex items-center justify-between text-[11px]"
                  >
                    <span className="text-slate-300 font-medium">{demo.role}</span>
                    <span className="font-mono text-amber-400 text-[10px] bg-black/40 px-1.5 py-0.5 rounded border border-slate-700">
                      {demo.id}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Registration switch link */}
            <div className="pt-2 text-center text-xs text-slate-400">
              <span>New to 24 Crofts? </span>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenRegister();
                }}
                className="text-amber-400 hover:text-amber-300 font-bold hover:underline"
              >
                Register Your Craft Profile &rarr;
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
