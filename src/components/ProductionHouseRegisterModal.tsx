import React, { useState } from 'react';
import { ProductionHouse } from '../types.ts';
import { validateProductionHouseRegistration } from '../utils/craftLogic.ts';
import {
  X,
  Building,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Film,
  Lock,
  KeyRound,
  Eye,
  EyeOff,
  User,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Clock,
  Briefcase,
} from 'lucide-react';

interface ProductionHouseRegisterModalProps {
  onClose: () => void;
  onRegisterSuccess: (newPH: ProductionHouse) => void;
  existingCount: number;
  onOpenLogin: () => void;
}

export const ProductionHouseRegisterModal: React.FC<ProductionHouseRegisterModalProps> = ({
  onClose,
  onRegisterSuccess,
  existingCount,
  onOpenLogin,
}) => {
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [representativeName, setRepresentativeName] = useState('');
  const [designation, setDesignation] = useState('Managing Partner / Producer');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Hyderabad, Telangana');
  const [address, setAddress] = useState('');
  const [pastProjects, setPastProjects] = useState('');
  const [upcomingProjects, setUpcomingProjects] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState<string[]>([]);
  const [registeredPH, setRegisteredPH] = useState<ProductionHouse | null>(null);

  const handleGenerateSuggestion = () => {
    const base = (name.trim() || 'prod')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '')
      .slice(0, 14) || 'banner';
    const randDigits = Math.floor(100 + Math.random() * 900);
    const suggestedUser = `${base}_${randDigits}`;
    const generatedPass = 'Studio@' + Math.random().toString(36).substring(2, 7).toUpperCase() + Math.floor(10 + Math.random() * 90);
    setUsername(suggestedUser);
    setPassword(generatedPass);
    setConfirmPassword(generatedPass);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);

    const validation = validateProductionHouseRegistration({
      name,
      registrationNumber,
      representativeName,
      email,
      phone,
      username,
      password,
      confirmPassword,
    });

    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    const newPH: ProductionHouse = {
      id: `PH-${1000 + existingCount + 1}`,
      name: name.trim(),
      registrationNumber: registrationNumber.trim() || `CIN-${Date.now().toString().slice(-8)}`,
      representativeName: representativeName.trim(),
      designation: designation.trim() || 'Managing Partner / Producer',
      email: email.trim(),
      phone: phone.trim(),
      city: city.trim() || 'Hyderabad',
      address: address.trim() || undefined,
      pastProjects: pastProjects.trim() || undefined,
      upcomingProjects: upcomingProjects.trim() || undefined,
      username: username.trim().toLowerCase(),
      password: password.trim(),
      status: 'pending', // MANDATORY: Admin approval required!
      registeredAt: new Date().toISOString().split('T')[0],
      adminNotes: 'New production house registration awaiting board verification.',
    };

    setRegisteredPH(newPH);
    onRegisterSuccess(newPH);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0d121c] border-2 border-amber-500/60 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-slate-950 font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg md:text-xl font-bold text-white">
                Production House Registration
              </h3>
              <p className="text-xs text-amber-300/80">
                Official Studio &amp; Producer Portal &bull; Mandatory Admin Approval
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

        {/* Success / Pending Admin Notice View */}
        {registeredPH ? (
          <div className="p-6 md:p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/50 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <Clock className="w-8 h-8 animate-pulse" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded border border-amber-500/30">
                Application Submitted &bull; Status: PENDING ADMIN APPROVAL
              </span>
              <h4 className="font-cinzel text-2xl font-bold text-white">
                {registeredPH.name}
              </h4>
              <p className="text-xs md:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                Your production banner has been registered with reference ID{' '}
                <strong className="text-amber-300 font-mono">{registeredPH.id}</strong>.
              </p>
            </div>

            {/* Approval Notice Callout */}
            <div className="max-w-lg mx-auto p-4 rounded-xl bg-slate-950 border border-amber-500/40 text-left space-y-3 shadow-inner">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <h5 className="font-bold text-amber-300">Mandatory Admin Approval Process:</h5>
                  <p className="text-slate-300 leading-relaxed">
                    To maintain strict privacy and prevent spam, <strong>admin approval is mandatory</strong> for all production houses. Once the 24 Crofts Administration audits and approves your banner, your account will be activated to <strong>view each craft profile's contact phone number</strong> across the directory.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-500 block">Registered Username:</span>
                  <span className="font-mono font-bold text-amber-300">@{registeredPH.username}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Representative:</span>
                  <span className="font-semibold text-slate-200">{registeredPH.representativeName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Official Work Email:</span>
                  <span className="font-semibold text-slate-300 truncate block">{registeredPH.email}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Current Status:</span>
                  <span className="text-amber-400 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block" />
                    Pending Review
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenLogin();
                }}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition shadow"
              >
                Go to Production House Login
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition"
              >
                Close &amp; Return to Directory
              </button>
            </div>
          </div>
        ) : (
          /* Production House Registration Form */
          <form onSubmit={handleSubmit} className="overflow-y-auto p-5 md:p-6 space-y-4 text-xs">
            {/* Regulatory Notice Banner */}
            <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-200/90 flex items-start gap-3 leading-relaxed">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300 font-bold block mb-0.5">
                  Production House Verification Policy
                </strong>
                <span>
                  Admin approval is mandatory following registration. Once approved by the administrator, your production house account will be empowered to view direct contact phone numbers for every profile in the 24 Crafts directory.
                </span>
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

            {/* Banner Company Information */}
            <div className="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <h4 className="font-cinzel text-xs font-bold text-amber-300 flex items-center gap-2 uppercase tracking-wider">
                <Building className="w-4 h-4 text-amber-400" />
                <span>Production Banner &amp; Corporate Identity</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Production House / Banner Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Mythri Movie Makers / Hombale Films"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Registration / CIN / Trade License Number
                  </label>
                  <input
                    type="text"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    placeholder="e.g. CIN-U92100TG2015PTC099881"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Authorized Representative / Key Official *
                  </label>
                  <input
                    type="text"
                    required
                    value={representativeName}
                    onChange={(e) => setRepresentativeName(e.target.value)}
                    placeholder="e.g. Naveen Yerneni / Vijay Kiragandur"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Designation / Role in Banner *
                  </label>
                  <input
                    type="text"
                    required
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    placeholder="e.g. Managing Partner / Executive Producer"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Official Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="productions@mythrimovies.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Official Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98490 88990"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Operating City / Headquarters *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Hyderabad / Mumbai / Chennai"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Studio / Registered Office Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="e.g. Road No. 36, Jubilee Hills, Hyderabad"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Filmography & Talent Needs */}
            <div className="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <h4 className="font-cinzel text-xs font-bold text-amber-300 flex items-center gap-2 uppercase tracking-wider">
                <Film className="w-4 h-4 text-amber-400" />
                <span>Filmography &amp; Production Slate</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Past Notable Productions (comma separated)
                  </label>
                  <input
                    type="text"
                    value={pastProjects}
                    onChange={(e) => setPastProjects(e.target.value)}
                    placeholder="e.g. Pushpa 2: The Rule, Waltair Veerayya, Rangasthalam"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Upcoming Slate / Talent Requirements
                  </label>
                  <input
                    type="text"
                    value={upcomingProjects}
                    onChange={(e) => setUpcomingProjects(e.target.value)}
                    placeholder="e.g. Pan-India feature seeking Action Directors and DoPs"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Production House Account Credentials (Username & Password) */}
            <div className="space-y-3 bg-amber-500/5 p-4 rounded-xl border border-amber-500/30">
              <div className="flex items-center justify-between">
                <h4 className="font-cinzel text-xs font-bold text-amber-300 flex items-center gap-2 uppercase tracking-wider">
                  <KeyRound className="w-4 h-4 text-amber-400" />
                  <span>Choose Production House Username &amp; Password</span>
                </h4>
                <button
                  type="button"
                  onClick={handleGenerateSuggestion}
                  className="text-[11px] text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Suggest Credentials</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Choose Username *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_.-]/g, ''))}
                      placeholder="e.g. mythri_official"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono text-xs"
                    />
                    <User className="w-3.5 h-3.5 text-slate-500 absolute right-2.5 top-2.5 pointer-events-none" />
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    For production house login
                  </span>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Choose Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Min 6 characters"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 pr-8 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono text-xs"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-2 p-0.5 text-slate-400 hover:text-slate-200"
                      title={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    Min 6 characters
                  </span>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Confirm Password *
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repeat password"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono text-xs"
                  />
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    Must match password
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenLogin();
                }}
                className="text-amber-400 hover:text-amber-300 font-bold hover:underline"
              >
                Already registered? Production House Login &rarr;
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5"
                >
                  <Building className="w-4 h-4" />
                  <span>Register &amp; Submit for Admin Approval</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
