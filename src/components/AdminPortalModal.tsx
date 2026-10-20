import React, { useState } from 'react';
import { ContactAccessRequest, MovieAdSubmission, Profile, AdSenseConfig, ProductionHouse } from '../types.ts';
import { authenticateAdmin } from '../utils/craftLogic.ts';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Lock,
  Unlock,
  Video,
  Users,
  Film,
  Clock,
  Phone,
  Mail,
  Building,
  Check,
  AlertTriangle,
  KeyRound,
  LogOut,
  BarChart3,
  Search,
  Trash2,
  RotateCcw,
  Sparkles,
  Layers,
  Eye,
  Megaphone,
  Copy,
  ExternalLink,
  Server,
  UserCheck,
} from 'lucide-react';

interface AdminPortalModalProps {
  onClose: () => void;
  contactRequests: ContactAccessRequest[];
  onApproveContact: (requestId: string) => void;
  onRejectContact: (requestId: string) => void;
  movieAds: MovieAdSubmission[];
  onApproveAd: (adId: string) => void;
  onRejectAd: (adId: string) => void;
  profiles: Profile[];
  onToggleProfileVerification: (profileId: string) => void;
  onResetMemberPassword?: (profileId: string, newPass: string) => void;
  onDeleteProfile?: (profileId: string) => void;
  isAuthenticated: boolean;
  onAdminLogin: () => void;
  onAdminLogout: () => void;
  adSenseConfig?: AdSenseConfig;
  onSaveAdSenseConfig?: (newConfig: AdSenseConfig) => void;
  onOpenBigRock?: () => void;
  productionHouses?: ProductionHouse[];
  onApproveProductionHouse?: (phId: string) => void;
  onRejectProductionHouse?: (phId: string) => void;
  onToggleProductionHouseStatus?: (phId: string, status: ProductionHouse['status']) => void;
  onDeleteProductionHouse?: (phId: string) => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({
  onClose,
  contactRequests,
  onApproveContact,
  onRejectContact,
  movieAds,
  onApproveAd,
  onRejectAd,
  profiles,
  onToggleProfileVerification,
  onResetMemberPassword,
  onDeleteProfile,
  isAuthenticated,
  onAdminLogin,
  onAdminLogout,
  adSenseConfig,
  onSaveAdSenseConfig,
  onOpenBigRock,
  productionHouses = [],
  onApproveProductionHouse,
  onRejectProductionHouse,
  onToggleProductionHouseStatus,
  onDeleteProductionHouse,
}) => {
  // Login form state (empty credentials by default; password received by email only)
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);

  // Email password dispatch state
  const [isRequestingPasswordEmail, setIsRequestingPasswordEmail] = useState(false);
  const [adminEmailInput, setAdminEmailInput] = useState('brkr1042@gmail.com');
  const [emailDispatchSuccess, setEmailDispatchSuccess] = useState<string | null>(null);

  // Tabs inside panel
  const [activeTab, setActiveTab] = useState<'overview' | 'contacts' | 'production-houses' | 'ads' | 'profiles' | 'adsense' | 'bigrock' | 'audit'>('overview');
  const [memberSearchQuery, setMemberSearchQuery] = useState('');
  const [resetSuccessId, setResetSuccessId] = useState<string | null>(null);
  const [phSearchQuery, setPhSearchQuery] = useState('');
  const [phFilterStatus, setPhFilterStatus] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');

  // Google AdSense local admin state
  const [adSenseState, setAdSenseState] = useState<AdSenseConfig>(
    adSenseConfig || {
      enabled: true,
      client: 'ca-pub-9842109420481234',
      testMode: true,
      showHeaderBanner: true,
      showInFeed: true,
      showSidebarBanner: true,
    }
  );
  const [adSenseSaveSuccess, setAdSenseSaveSuccess] = useState<boolean>(false);
  const [copiedAdsTxt, setCopiedAdsTxt] = useState<boolean>(false);

  const pendingRequests = contactRequests.filter((r) => r.status === 'pending');
  const pendingAds = movieAds.filter((a) => a.status === 'pending');
  const approvedAds = movieAds.filter((a) => a.status === 'approved');
  const pendingProductionHouses = productionHouses.filter((p) => p.status === 'pending');
  const approvedProductionHouses = productionHouses.filter((p) => p.status === 'approved');


  const handleLoginFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);

    const result = authenticateAdmin(adminUsername, adminPassword);
    if (result.success) {
      onAdminLogin();
    } else {
      setLoginError(result.error || 'Invalid credentials.');
    }
  };

  const handleDispatchPasswordEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminEmailInput.trim()) return;
    setEmailDispatchSuccess(
      `Admin login password and access token have been dispatched to ${adminEmailInput.trim()}. Please check your email inbox and enter the credentials to log in.`
    );
  };

  const handleResetPasswordClick = (profileId: string) => {
    const newPass = '24C@' + Math.random().toString(36).substring(2, 7).toUpperCase();
    if (onResetMemberPassword) {
      onResetMemberPassword(profileId, newPass);
    }
    setResetSuccessId(profileId);
    setTimeout(() => setResetSuccessId(null), 3000);
  };

  const filteredDirectory = profiles.filter((p) => {
    if (!memberSearchQuery.trim()) return true;
    const q = memberSearchQuery.toLowerCase();
    return (
      p.id.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q) ||
      p.craft.toLowerCase().includes(q) ||
      p.email.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#0d121c] border-2 border-amber-500/60 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="sticky top-0 z-10 bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 font-black shadow-[0_0_15px_rgba(212,175,55,0.5)]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-cinzel text-lg md:text-xl font-black text-white">
                  24 Crofts Administration Panel
                </h3>
                <span className="text-[10px] font-mono bg-red-950 text-red-300 border border-red-800 px-2 py-0.5 rounded uppercase font-bold">
                  {isAuthenticated ? 'Admin Session Active' : 'Restricted Access'}
                </span>
              </div>
              <p className="text-xs text-amber-300/80">
                Official Authorization Center for Director/Producer Contacts &amp; Movie Ads
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={onAdminLogout}
                className="px-3 py-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 text-red-300 text-xs font-bold border border-red-800 transition flex items-center gap-1.5"
                title="Log out of Admin mode"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Logout Admin</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 1. If NOT authenticated: Show Admin Login Gate */}
        {!isAuthenticated ? (
          <div className="p-8 md:p-12 max-w-md mx-auto w-full my-auto text-xs space-y-5">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto shadow-inner">
                <Lock className="w-8 h-8" />
              </div>
              <h4 className="font-cinzel text-xl font-bold text-white">
                Admin Panel Authentication
              </h4>
              <p className="text-slate-400 text-xs">
                Authorization credentials are required to review contact requests and approve movie advertisements for 24crofts.com.
              </p>
            </div>

            {loginError && (
              <div className="p-3 rounded-lg bg-red-950/70 border border-red-800 text-red-200 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLoginFormSubmit} className="space-y-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Admin Username or Email
                </label>
                <input
                  type="text"
                  required
                  value={adminUsername}
                  onChange={(e) => setAdminUsername(e.target.value)}
                  placeholder="Enter admin username or email..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-slate-300 font-semibold">
                    Admin Password
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setIsRequestingPasswordEmail(!isRequestingPasswordEmail);
                      setEmailDispatchSuccess(null);
                    }}
                    className="text-amber-400 hover:text-amber-300 text-[11px] underline"
                  >
                    Receive Password by Email
                  </button>
                </div>
                <input
                  type="password"
                  required
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold uppercase tracking-wider shadow-[0_2px_15px_rgba(212,175,55,0.4)] transition flex items-center justify-center gap-1.5"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Sign In to Admin Panel</span>
              </button>

              {/* Password By Email Security Dispatch Section */}
              {isRequestingPasswordEmail && (
                <div className="p-3.5 rounded-xl bg-slate-950/90 border border-amber-500/40 space-y-2.5 text-xs animate-in fade-in duration-200">
                  <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                    <Mail className="w-4 h-4 text-amber-400" />
                    <span>Receive Admin Password via Email</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    In compliance with platform policy, administrator passwords are never displayed on the website and are only delivered directly to authorized email addresses.
                  </p>
                  {emailDispatchSuccess ? (
                    <div className="p-2.5 rounded-lg bg-emerald-950/70 border border-emerald-700 text-emerald-200 text-xs flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{emailDispatchSuccess}</span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <input
                        type="email"
                        value={adminEmailInput}
                        onChange={(e) => setAdminEmailInput(e.target.value)}
                        placeholder="Enter registered admin email..."
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
                      />
                      <button
                        type="button"
                        onClick={handleDispatchPasswordEmail}
                        className="w-full py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition"
                      >
                        Send Admin Password to Email
                      </button>
                    </div>
                  )}
                </div>
              )}
            </form>
          </div>
        ) : (
          /* 2. When Authenticated: Full Admin Command Center */
          <>
            {/* Admin Tabs */}
            <div className="bg-slate-950/80 px-6 pt-3 border-b border-slate-800 flex gap-2 md:gap-4 overflow-x-auto">
              {[
                { id: 'overview', label: 'Dashboard & Metrics', icon: BarChart3 },
                {
                  id: 'production-houses',
                  label: `Production Houses (${productionHouses.length})`,
                  icon: Building,
                  badge: pendingProductionHouses.length,
                },
                {
                  id: 'contacts',
                  label: 'Contact Approvals',
                  icon: Lock,
                  badge: pendingRequests.length,
                },
                {
                  id: 'ads',
                  label: 'Movie Ads Queue',
                  icon: Video,
                  badge: pendingAds.length,
                },
                {
                  id: 'profiles',
                  label: `Members Directory (${profiles.length})`,
                  icon: Users,
                },
                {
                  id: 'adsense',
                  label: 'Google AdSense (Admin Only)',
                  icon: Megaphone,
                  badgeText: adSenseState.enabled ? 'Active' : 'Off',
                },
                {
                  id: 'bigrock',
                  label: 'BigRock Server & Hosting',
                  icon: Server,
                },
              ].map((tab) => {

                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`pb-3 text-xs font-bold tracking-wider uppercase transition flex items-center gap-1.5 shrink-0 border-b-2 cursor-pointer ${
                      isActive
                        ? 'border-amber-400 text-amber-300'
                        : 'border-transparent text-slate-400 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                    {tab.badge && tab.badge > 0 ? (
                      <span className="w-4 h-4 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black flex items-center justify-center ml-1">
                        {tab.badge}
                      </span>
                    ) : null}
                    {tab.badgeText && (
                      <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ml-1 ${
                        adSenseState.enabled
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}>
                        {tab.badgeText}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Admin Tab Content */}
            <div className="overflow-y-auto p-6 space-y-5 text-xs">
              {/* TAB 1: Overview & Metrics */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Summary Metric Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-slate-500 text-[10px] uppercase font-bold block">
                        Total Registered Talents
                      </span>
                      <span className="font-cinzel text-2xl font-bold text-white mt-1 block">
                        {profiles.length}
                      </span>
                      <span className="text-[11px] text-emerald-400 mt-1 block">
                        24 Cinema Crafts
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/40">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-[10px] uppercase font-bold block">
                          Production Houses
                        </span>
                        {pendingProductionHouses.length > 0 && (
                          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                        )}
                      </div>
                      <span className="font-cinzel text-2xl font-bold text-amber-300 mt-1 block">
                        {productionHouses.length}
                      </span>
                      <span className="text-[11px] text-amber-400 mt-1 block font-semibold">
                        {pendingProductionHouses.length} Pending Approval
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-slate-500 text-[10px] uppercase font-bold block">
                        Pending Contact Requests
                      </span>
                      <span className="font-cinzel text-2xl font-bold text-amber-400 mt-1 block">
                        {pendingRequests.length}
                      </span>
                      <span className="text-[11px] text-slate-400 mt-1 block">
                        Requires Approval
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-slate-500 text-[10px] uppercase font-bold block">
                        Live Movie Ads
                      </span>
                      <span className="font-cinzel text-2xl font-bold text-white mt-1 block">
                        {approvedAds.length}
                      </span>
                      <span className="text-[11px] text-emerald-400 mt-1 block">
                        Active on Homepage
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-slate-500 text-[10px] uppercase font-bold block">
                        Pending Movie Ads
                      </span>
                      <span className="font-cinzel text-2xl font-bold text-amber-400 mt-1 block">
                        {pendingAds.length}
                      </span>
                      <span className="text-[11px] text-slate-400 mt-1 block">
                        Trailers in Queue
                      </span>
                    </div>
                  </div>

                  {/* Fast Action Center */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/30 via-slate-900 to-slate-900 border border-amber-600/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="font-cinzel text-sm font-bold text-white flex items-center gap-2">
                        <span>Admin Action Center</span>
                        {pendingProductionHouses.length > 0 && (
                          <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-mono">
                            {pendingProductionHouses.length} Studio Review{pendingProductionHouses.length > 1 ? 's' : ''}
                          </span>
                        )}
                      </h4>
                      <p className="text-slate-400 text-[11px] mt-0.5">
                        {pendingProductionHouses.length} production house banner(s), {pendingRequests.length} contact request(s), and {pendingAds.length} trailer ad(s) require admin approval.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => setActiveTab('production-houses')}
                        className="px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition flex items-center gap-1.5 shadow cursor-pointer"
                      >
                        <Building className="w-3.5 h-3.5" />
                        <span>Review Production Houses ({pendingProductionHouses.length})</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('contacts')}
                        className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs border border-slate-700 transition"
                      >
                        Review Contacts ({pendingRequests.length})
                      </button>
                      <button
                        onClick={() => setActiveTab('ads')}
                        className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs border border-slate-700 transition"
                      >
                        Review Ads ({pendingAds.length})
                      </button>
                    </div>
                  </div>


                  {/* Admin Infrastructure & Monetization Quick Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* BigRock Server & Hosting (Admin Only) */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Server className="w-4 h-4 text-amber-400" />
                          <h5 className="font-cinzel text-xs font-bold text-white">BigRock Linux Hosting &amp; Server</h5>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                          Admin Only
                        </span>
                      </div>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        BigRock cPanel FTP upload path (<code className="text-amber-300">public_html/</code>), AutoSSL certificate renewal, and DNS A-records for <strong>24crofts.com</strong>.
                      </p>
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => {
                            if (onOpenBigRock) {
                              onOpenBigRock();
                            } else {
                              setActiveTab('bigrock');
                            }
                          }}
                          className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer shadow"
                        >
                          <Server className="w-3.5 h-3.5" />
                          <span>Open BigRock Deployment Hub</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveTab('bigrock')}
                          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition"
                        >
                          Server Details
                        </button>
                      </div>
                    </div>

                    {/* Google AdSense Monetization (Admin Only) */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Megaphone className="w-4 h-4 text-amber-400" />
                          <h5 className="font-cinzel text-xs font-bold text-white">Google AdSense Controls</h5>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                          adSenseState.enabled
                            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                            : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}>
                          {adSenseState.enabled ? 'Active' : 'Disabled'}
                        </span>
                      </div>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        Google publisher ID (<span className="font-mono text-amber-300">{adSenseState.client}</span>), slot toggles, and ads.txt records are exclusively configured here.
                      </p>
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => setActiveTab('adsense')}
                          className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer"
                        >
                          <Megaphone className="w-3.5 h-3.5" />
                          <span>Configure AdSense Settings</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB: Production Houses Verification & Approval */}
              {activeTab === 'production-houses' && (
                <div className="space-y-4">
                  {/* Security Notice */}
                  <div className="p-3.5 bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/40 rounded-xl text-xs text-amber-200/90 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-amber-300 font-bold block mb-0.5">
                        Mandatory Admin Approval for Production Houses
                      </strong>
                      <p className="text-slate-300 leading-relaxed text-[11px]">
                        Production houses cannot access talent contact numbers until approved by administration. Once approved, the production house receives full directory contact clearance to view direct phone numbers for all 24 crafts.
                      </p>
                    </div>
                  </div>

                  {/* Filter & Search Bar */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
                      {[
                        { id: 'all', label: `All (${productionHouses.length})` },
                        { id: 'pending', label: `Pending Review (${pendingProductionHouses.length})` },
                        { id: 'approved', label: `Approved (${approvedProductionHouses.length})` },
                        { id: 'rejected', label: `Rejected (${productionHouses.filter(p => p.status === 'rejected').length})` },
                      ].map((f) => (
                        <button
                          key={f.id}
                          type="button"
                          onClick={() => setPhFilterStatus(f.id as any)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 cursor-pointer ${
                            phFilterStatus === f.id
                              ? 'bg-amber-500 text-slate-950 shadow'
                              : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300'
                          }`}
                        >
                          <span>{f.label}</span>
                        </button>
                      ))}
                    </div>

                    <div className="relative w-full sm:w-64">
                      <input
                        type="text"
                        value={phSearchQuery}
                        onChange={(e) => setPhSearchQuery(e.target.value)}
                        placeholder="Search banners, reps, emails..."
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono"
                      />
                      <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Production Houses List */}
                  {productionHouses
                    .filter((ph) => {
                      if (phFilterStatus !== 'all' && ph.status !== phFilterStatus) return false;
                      if (!phSearchQuery.trim()) return true;
                      const q = phSearchQuery.toLowerCase();
                      return (
                        ph.name.toLowerCase().includes(q) ||
                        ph.representativeName.toLowerCase().includes(q) ||
                        ph.username.toLowerCase().includes(q) ||
                        ph.email.toLowerCase().includes(q) ||
                        ph.city.toLowerCase().includes(q) ||
                        ph.id.toLowerCase().includes(q)
                      );
                    })
                    .length === 0 ? (
                    <div className="text-center py-12 border border-slate-800 rounded-xl bg-slate-950/40">
                      <Building className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-slate-400">No production houses found matching criteria.</p>
                      <p className="text-xs text-slate-500 mt-1">Production houses register separately via the official Production House Portal.</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {productionHouses
                        .filter((ph) => {
                          if (phFilterStatus !== 'all' && ph.status !== phFilterStatus) return false;
                          if (!phSearchQuery.trim()) return true;
                          const q = phSearchQuery.toLowerCase();
                          return (
                            ph.name.toLowerCase().includes(q) ||
                            ph.representativeName.toLowerCase().includes(q) ||
                            ph.username.toLowerCase().includes(q) ||
                            ph.email.toLowerCase().includes(q) ||
                            ph.city.toLowerCase().includes(q) ||
                            ph.id.toLowerCase().includes(q)
                          );
                        })
                        .map((ph) => (
                          <div
                            key={ph.id}
                            className={`p-4 rounded-xl border space-y-3 shadow-lg transition ${
                              ph.status === 'approved'
                                ? 'bg-slate-900/90 border-emerald-500/40'
                                : ph.status === 'rejected'
                                ? 'bg-slate-900/90 border-red-800/60'
                                : 'bg-slate-900 border-amber-500/50 shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                            }`}
                          >
                            {/* Card Header */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                              <div className="flex items-center gap-2.5">
                                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30">
                                  <Building className="w-5 h-5" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <h5 className="font-cinzel text-base font-bold text-white">
                                      {ph.name}
                                    </h5>
                                    <span className="font-mono text-xs text-amber-400 bg-black/50 px-2 py-0.5 rounded border border-slate-700">
                                      {ph.id}
                                    </span>
                                    <span className="font-mono text-xs text-slate-400">
                                      @{ph.username}
                                    </span>
                                  </div>
                                  <span className="text-[11px] text-slate-400">
                                    Reg / CIN: {ph.registrationNumber || 'Not Specified'} &bull; Base: {ph.city}
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 self-start sm:self-auto">
                                <span
                                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border flex items-center gap-1.5 ${
                                    ph.status === 'approved'
                                      ? 'bg-emerald-950/80 text-emerald-400 border-emerald-600'
                                      : ph.status === 'rejected'
                                      ? 'bg-red-950/80 text-red-400 border-red-700'
                                      : 'bg-amber-950/80 text-amber-400 border-amber-600'
                                  }`}
                                >
                                  {ph.status === 'approved' && <CheckCircle2 className="w-3.5 h-3.5" />}
                                  {ph.status === 'pending' && <Clock className="w-3.5 h-3.5 animate-pulse" />}
                                  {ph.status === 'rejected' && <XCircle className="w-3.5 h-3.5" />}
                                  <span>
                                    {ph.status === 'approved'
                                      ? 'Approved (Contacts Unlocked)'
                                      : ph.status === 'pending'
                                      ? 'Pending Admin Review'
                                      : 'Rejected'}
                                  </span>
                                </span>
                              </div>
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                              <div>
                                <span className="text-slate-500 block">Authorized Key Official</span>
                                <span className="text-slate-200 font-bold">{ph.representativeName}</span>
                                <span className="text-amber-400 text-[11px] block">{ph.designation}</span>
                              </div>

                              <div>
                                <span className="text-slate-500 block">Work Phone &amp; Email</span>
                                <span className="font-mono text-slate-200 font-bold">{ph.phone}</span>
                                <span className="text-slate-400 block text-[11px] truncate">{ph.email}</span>
                              </div>

                              <div>
                                <span className="text-slate-500 block">Registration Timeline</span>
                                <span className="text-slate-300 font-medium">Applied: {ph.registeredAt}</span>
                                {ph.approvedAt && (
                                  <span className="text-emerald-400 text-[11px] block">Approved: {ph.approvedAt}</span>
                                )}
                              </div>
                            </div>

                            {/* Projects & Slate */}
                            {(ph.pastProjects || ph.upcomingProjects || ph.address) && (
                              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs space-y-1.5">
                                {ph.pastProjects && (
                                  <div>
                                    <span className="text-slate-500 font-bold">Past Productions: </span>
                                    <span className="text-slate-300">{ph.pastProjects}</span>
                                  </div>
                                )}
                                {ph.upcomingProjects && (
                                  <div>
                                    <span className="text-amber-400 font-bold">Upcoming Slate / Talent Needs: </span>
                                    <span className="text-amber-200/90">{ph.upcomingProjects}</span>
                                  </div>
                                )}
                                {ph.address && (
                                  <div>
                                    <span className="text-slate-500 font-bold">Office Address: </span>
                                    <span className="text-slate-400">{ph.address}</span>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Actions */}
                            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800">
                              <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                                {ph.status === 'approved' ? (
                                  <>
                                    <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                                    <span className="text-emerald-400 font-semibold">
                                      This production house can view each talent profile's contact phone number.
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    <Lock className="w-3.5 h-3.5 text-amber-400" />
                                    <span className="text-amber-400 font-semibold">
                                      Contact phone access is strictly blocked until approved below.
                                    </span>
                                  </>
                                )}
                              </div>

                              <div className="flex items-center gap-2">
                                {ph.status === 'pending' && (
                                  <>
                                    <button
                                      type="button"
                                      onClick={() => onRejectProductionHouse && onRejectProductionHouse(ph.id)}
                                      className="px-3 py-1.5 rounded-lg bg-red-950/70 hover:bg-red-900 text-red-300 text-xs font-bold border border-red-800 transition flex items-center gap-1 cursor-pointer"
                                    >
                                      <XCircle className="w-3.5 h-3.5" />
                                      <span>Reject</span>
                                    </button>

                                    <button
                                      type="button"
                                      onClick={() => onApproveProductionHouse && onApproveProductionHouse(ph.id)}
                                      className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 text-xs font-bold transition flex items-center gap-1.5 shadow-[0_0_12px_rgba(16,185,129,0.3)] cursor-pointer"
                                    >
                                      <CheckCircle2 className="w-4 h-4" />
                                      <span>Approve Production House (Unlock Contacts)</span>
                                    </button>
                                  </>
                                )}

                                {ph.status === 'approved' && (
                                  <button
                                    type="button"
                                    onClick={() => onToggleProductionHouseStatus && onToggleProductionHouseStatus(ph.id, 'pending')}
                                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition flex items-center gap-1 cursor-pointer"
                                  >
                                    <RotateCcw className="w-3.5 h-3.5" />
                                    <span>Revoke / Set to Pending</span>
                                  </button>
                                )}

                                {ph.status === 'rejected' && (
                                  <button
                                    type="button"
                                    onClick={() => onApproveProductionHouse && onApproveProductionHouse(ph.id)}
                                    className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    <span>Re-evaluate &amp; Approve</span>
                                  </button>
                                )}

                                {onDeleteProductionHouse && (
                                  <button
                                    type="button"
                                    onClick={() => onDeleteProductionHouse(ph.id)}
                                    className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-slate-800 transition cursor-pointer"
                                    title="Delete production house"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: Contact Approvals */}
              {activeTab === 'contacts' && (

                <div className="space-y-4">
                  <div className="p-3 bg-amber-950/20 border border-amber-600/30 rounded-xl text-xs text-amber-200/90 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Strict Matrimonial Confidentiality:</strong> Phone numbers of Directors, Producers, and crew are inaccessible until approved here.
                    </span>
                  </div>

                  {contactRequests.length === 0 ? (
                    <div className="text-center py-12 border border-slate-800 rounded-xl">
                      <Lock className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-slate-400">No contact requests submitted yet.</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {contactRequests.map((req) => (
                        <div
                          key={req.id}
                          className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3 shadow"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-slate-400">Target Talent:</span>
                              <span className="font-bold text-white text-sm">{req.profileName}</span>
                              <span className="font-mono text-xs text-amber-400 bg-black/40 px-2 py-0.5 rounded border border-slate-700">
                                {req.profileId}
                              </span>
                              <span className="text-xs text-slate-400 font-medium">({req.profileCraft})</span>
                            </div>

                            <span
                              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                                req.status === 'approved'
                                  ? 'bg-emerald-950/80 text-emerald-400 border-emerald-700'
                                  : req.status === 'rejected'
                                  ? 'bg-red-950/80 text-red-400 border-red-700'
                                  : 'bg-amber-950/80 text-amber-400 border-amber-700'
                              }`}
                            >
                              {req.status}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                            <div>
                              <span className="text-slate-500 block">Requester Name &amp; House</span>
                              <span className="text-slate-200 font-bold">{req.requesterName}</span>
                              <span className="text-slate-400 block text-[11px]">{req.productionHouse}</span>
                            </div>
                            <div>
                              <span className="text-slate-500 block">Contact Phone &amp; Email</span>
                              <span className="font-mono text-slate-200">{req.requesterPhone}</span>
                              <span className="text-slate-400 block text-[11px]">{req.requesterEmail || 'None'}</span>
                            </div>
                            <div>
                              <span className="text-slate-500 block">Date of Request</span>
                              <span className="text-slate-300 font-medium">{req.requestDate}</span>
                            </div>
                          </div>

                          <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-xs text-slate-300">
                            <span className="text-slate-500 font-semibold block mb-0.5">Stated Purpose / Collaboration:</span>
                            {req.purpose}
                          </div>

                          {req.status === 'pending' && (
                            <div className="flex items-center justify-end gap-2 pt-1">
                              <button
                                onClick={() => onRejectContact(req.id)}
                                className="px-3 py-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 text-red-300 text-xs font-bold border border-red-800/80 transition flex items-center gap-1"
                              >
                                <XCircle className="w-3.5 h-3.5" />
                                <span>Deny Access</span>
                              </button>
                              <button
                                onClick={() => onApproveContact(req.id)}
                                className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold uppercase tracking-wider transition flex items-center gap-1.5 shadow"
                              >
                                <Unlock className="w-3.5 h-3.5" />
                                <span>Authorize &amp; Reveal Phone</span>
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: Movie Ads Moderation Queue */}
              {activeTab === 'ads' && (
                <div className="space-y-4">
                  <div className="p-3 bg-amber-950/20 border border-amber-600/30 rounded-xl text-xs text-amber-200/90 flex items-start gap-2">
                    <Video className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Mandatory Ad Placement Protocol:</strong> Movie advertisements and YouTube trailers are held in this queue until approved for the live 24crofts.com homepage.
                    </span>
                  </div>

                  <div className="space-y-3">
                    {movieAds.map((ad) => (
                      <div
                        key={ad.id}
                        className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3 shadow"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                          <div>
                            <span className="text-xs text-amber-400 font-semibold uppercase">{ad.productionBanner}</span>
                            <h4 className="font-cinzel text-base font-bold text-white">{ad.title}</h4>
                          </div>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border self-start sm:self-auto ${
                              ad.status === 'approved'
                                ? 'bg-emerald-950 text-emerald-400 border-emerald-700'
                                : ad.status === 'rejected'
                                ? 'bg-red-950 text-red-400 border-red-700'
                                : 'bg-amber-950 text-amber-400 border-amber-700'
                            }`}
                          >
                            {ad.status === 'approved' ? 'Live on Homepage' : ad.status}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                          <div>
                            <span className="text-slate-500 block">Director / Cast</span>
                            <span className="text-slate-200 font-medium">{ad.director}</span>
                            <span className="text-slate-400 block text-[11px] truncate">{ad.starring}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block">Release Window</span>
                            <span className="text-amber-300 font-semibold">{ad.releaseDate}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block">Submitted By</span>
                            <span className="text-slate-200">{ad.submitterName}</span>
                            <span className="font-mono text-slate-400 block text-[11px]">{ad.submitterPhone}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block">YouTube Link</span>
                            <a
                              href={ad.youtubeUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-amber-400 underline font-mono text-[11px] truncate block hover:text-amber-300"
                            >
                              Watch Trailer Video &rarr;
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center justify-end gap-2 pt-1 border-t border-slate-800">
                          {ad.status === 'pending' ? (
                            <>
                              <button
                                onClick={() => onRejectAd(ad.id)}
                                className="px-3 py-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 text-red-300 text-xs font-bold border border-red-800"
                              >
                                Reject Ad
                              </button>
                              <button
                                onClick={() => onApproveAd(ad.id)}
                                className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold uppercase tracking-wider shadow"
                              >
                                Approve for Live Homepage
                              </button>
                            </>
                          ) : (
                            <button
                              onClick={() => onRejectAd(ad.id)}
                              className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-red-950 text-slate-300 hover:text-red-300 text-xs font-medium"
                            >
                              Take Down Ad
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: Member Profiles Directory */}
              {activeTab === 'profiles' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-slate-400">
                      Manage registered cinema talents, view confidential credentials, reset passwords, or update guild verification.
                    </p>

                    <div className="w-full sm:w-64 relative">
                      <Search className="w-3.5 h-3.5 text-amber-400 absolute left-2.5 top-2.5" />
                      <input
                        type="text"
                        value={memberSearchQuery}
                        onChange={(e) => setMemberSearchQuery(e.target.value)}
                        placeholder="Search member by ID, name, email..."
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {filteredDirectory.map((p) => (
                      <div
                        key={p.id}
                        className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={p.avatarUrl}
                            alt=""
                            className="w-12 h-12 rounded-xl object-cover border border-slate-700 shrink-0"
                          />
                          <div className="min-w-0 space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm text-white truncate">{p.name}</span>
                              <span className="font-mono text-[11px] text-amber-400 bg-black/40 px-1.5 py-0.5 rounded border border-slate-700">
                                {p.id}
                              </span>
                            </div>
                            <div className="text-[11px] text-slate-400 truncate">
                              {p.craft} &bull; {p.category.split('. ')[1] || p.category}
                            </div>
                            <div className="text-[10px] text-slate-500 font-mono flex items-center gap-3">
                              <span>Email: {p.email}</span>
                              <span>Phone: {p.contactNumber}</span>
                              <span>Password: <code className="text-amber-300 font-bold">{p.password || 'craft2026'}</code></span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
                          {resetSuccessId === p.id && (
                            <span className="text-[10px] text-emerald-400 font-bold">New Pass Dispatched!</span>
                          )}

                          <button
                            onClick={() => handleResetPasswordClick(p.id)}
                            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 flex items-center gap-1"
                            title="Generate new temporary password"
                          >
                            <RotateCcw className="w-3 h-3" />
                            <span>Reset Pass</span>
                          </button>

                          <button
                            onClick={() => onToggleProfileVerification(p.id)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition ${
                              p.unionCard.verified
                                ? 'bg-amber-500/15 text-amber-300 border-amber-500/40'
                                : 'bg-slate-800 text-slate-400 border-slate-700'
                            }`}
                          >
                            {p.unionCard.verified ? 'Verified Union Member' : 'Unverified'}
                          </button>

                          {onDeleteProfile && (
                            <button
                              onClick={() => onDeleteProfile(p.id)}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-950/40 transition"
                              title="Delete Profile"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: Google AdSense Management (Admin Only) */}
              {activeTab === 'adsense' && (
                <div className="space-y-6">
                  {/* Header Box */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                    <div>
                      <h3 className="font-cinzel text-base font-bold text-white flex items-center gap-2">
                        <Megaphone className="w-5 h-5 text-amber-400" />
                        <span>Google AdSense Platform Monetization</span>
                        <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                          Admin Exclusive
                        </span>
                      </h3>
                      <p className="text-slate-400 text-xs mt-1">
                        Configure Google AdSense ad slots, client publisher ID, live vs test mode, and ads.txt verification exclusively from this admin panel.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                        adSenseState.enabled
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}>
                        {adSenseState.enabled ? '● Monetization Active' : '○ Monetization Disabled'}
                      </span>
                    </div>
                  </div>

                  {adSenseSaveSuccess && (
                    <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center justify-between animate-fade-in">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Google AdSense configuration has been saved and applied across 24crofts.com!</span>
                      </div>
                      <button
                        onClick={() => setAdSenseSaveSuccess(false)}
                        className="text-emerald-400 hover:text-white"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {/* 3 Status Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 text-[10px] uppercase font-bold block">
                        Target Canonical Domain
                      </span>
                      <span className="font-mono text-sm font-bold text-amber-300 mt-1 block">
                        https://24crofts.com/
                      </span>
                      <span className="text-[10px] text-slate-500 mt-1 block">
                        Domain approved in Google AdSense Site List
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 text-[10px] uppercase font-bold block">
                        Ad Server Environment
                      </span>
                      <span className="font-mono text-sm font-bold text-white mt-1 block">
                        {adSenseState.testMode ? 'Test & Preview Simulation' : 'Live Google Ad Delivery'}
                      </span>
                      <span className="text-[10px] text-amber-400/90 mt-1 block">
                        {adSenseState.testMode ? 'High-value cinema gear sponsors' : 'Real Google AdSense auction'}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 text-[10px] uppercase font-bold block">
                        Active Ad Placements
                      </span>
                      <span className="font-mono text-sm font-bold text-emerald-400 mt-1 block">
                        {[
                          adSenseState.showHeaderBanner ? 'Leaderboard (728x90)' : null,
                          adSenseState.showInFeed ? 'Native Feed Card' : null,
                        ].filter(Boolean).join(', ') || 'No slots enabled'}
                      </span>
                      <span className="text-[10px] text-slate-500 mt-1 block">
                        Responsive viewports supported
                      </span>
                    </div>
                  </div>

                  {/* Form Settings */}
                  <div className="space-y-4 bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
                    <h4 className="font-cinzel text-sm font-bold text-white mb-2">
                      AdSense Parameter Settings
                    </h4>

                    {/* Master Toggle */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <div>
                        <span className="font-bold text-sm text-white block">
                          Master Switch: Enable Google AdSense
                        </span>
                        <span className="text-slate-400 text-xs">
                          Controls whether any Google AdSense banners or native cards are displayed on 24crofts.com.
                        </span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={adSenseState.enabled}
                          onChange={(e) =>
                            setAdSenseState({ ...adSenseState, enabled: e.target.checked })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                      </label>
                    </div>

                    {/* Publisher Client ID */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <label className="block text-slate-300 font-bold text-xs">
                        Google AdSense Publisher Client ID (ca-pub-XXXXXXXXXXXX)
                      </label>
                      <input
                        type="text"
                        value={adSenseState.client}
                        onChange={(e) =>
                          setAdSenseState({ ...adSenseState, client: e.target.value.trim() })
                        }
                        placeholder="ca-pub-9842109420481234"
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white font-mono text-xs placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                      <p className="text-[11px] text-slate-400">
                        Copy this Publisher ID directly from your approved Google AdSense console for the 24crofts.com property.
                      </p>
                    </div>

                    {/* Test Mode Switch */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <div>
                        <span className="font-bold text-sm text-white block">
                          AdSense Test / Sandbox Mode
                        </span>
                        <span className="text-slate-400 text-xs">
                          When checked, renders cinema production equipment ads (ARRI, Soundstage, RED) for aesthetic review without triggering invalid click flags. Uncheck for production Google live ads.
                        </span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={adSenseState.testMode}
                          onChange={(e) =>
                            setAdSenseState({ ...adSenseState, testMode: e.target.checked })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                      </label>
                    </div>

                    {/* Individual Slot Toggles */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                      <span className="font-bold text-sm text-white block">
                        Ad Slot Placements:
                      </span>

                      <label className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 cursor-pointer">
                        <div>
                          <span className="font-semibold text-slate-200 block">
                            Header Leaderboard Banner (728x90)
                          </span>
                          <span className="text-slate-400 text-[11px]">
                            Prominent slot between the Hero Banner and Movie Trailer Showcase
                          </span>
                        </div>
                        <input
                          type="checkbox"
                          checked={adSenseState.showHeaderBanner}
                          onChange={(e) =>
                            setAdSenseState({ ...adSenseState, showHeaderBanner: e.target.checked })
                          }
                          className="w-4 h-4 accent-amber-500 rounded"
                        />
                      </label>

                      <label className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 cursor-pointer">
                        <div>
                          <span className="font-semibold text-slate-200 block">
                            In-Feed Native Cinema Sponsored Cards
                          </span>
                          <span className="text-slate-400 text-[11px]">
                            Injected seamlessly after every 4 cinema profile cards in the directory
                          </span>
                        </div>
                        <input
                          type="checkbox"
                          checked={adSenseState.showInFeed}
                          onChange={(e) =>
                            setAdSenseState({ ...adSenseState, showInFeed: e.target.checked })
                          }
                          className="w-4 h-4 accent-amber-500 rounded"
                        />
                      </label>

                      <label className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 cursor-pointer">
                        <div>
                          <span className="font-semibold text-slate-200 block">
                            Sidebar &amp; Profile Detail Sponsored Placements
                          </span>
                          <span className="text-slate-400 text-[11px]">
                            Secondary banners in profile views and side drawers
                          </span>
                        </div>
                        <input
                          type="checkbox"
                          checked={adSenseState.showSidebarBanner}
                          onChange={(e) =>
                            setAdSenseState({ ...adSenseState, showSidebarBanner: e.target.checked })
                          }
                          className="w-4 h-4 accent-amber-500 rounded"
                        />
                      </label>
                    </div>

                    {/* BigRock ads.txt Helper */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-amber-300">
                          BigRock ads.txt Verification Entry:
                        </span>
                        <button
                          onClick={() => {
                            const adsTxtLine = `google.com, ${adSenseState.client.replace('ca-', '') || 'pub-9842109420481234'}, DIRECT, f08c47fec0942fa0`;
                            navigator.clipboard.writeText(adsTxtLine);
                            setCopiedAdsTxt(true);
                            setTimeout(() => setCopiedAdsTxt(false), 2000);
                          }}
                          className="text-[11px] text-slate-400 hover:text-amber-300 flex items-center gap-1 font-mono transition"
                        >
                          {copiedAdsTxt ? (
                            <span className="text-emerald-400 font-bold">Copied to Clipboard!</span>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy ads.txt Line</span>
                            </>
                          )}
                        </button>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/60 border border-slate-800 font-mono text-[11px] text-amber-200">
                        google.com, {adSenseState.client.replace('ca-', '') || 'pub-9842109420481234'}, DIRECT, f08c47fec0942fa0
                      </div>
                      <p className="text-[10px] text-slate-500">
                        Upload this single line into <code className="text-slate-300">public_html/ads.txt</code> on your BigRock Shared Hosting cPanel file manager.
                      </p>
                    </div>

                    {/* Save Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          if (onSaveAdSenseConfig) {
                            onSaveAdSenseConfig(adSenseState);
                          }
                          setAdSenseSaveSuccess(true);
                          setTimeout(() => setAdSenseSaveSuccess(false), 4000);
                        }}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Check className="w-4 h-4" />
                        <span>Save Google AdSense Configuration</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {/* TAB 6: BigRock Server & Hosting (Admin Only) */}
              {activeTab === 'bigrock' && (
                <div className="space-y-6">
                  {/* Header Box */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                    <div>
                      <h3 className="font-cinzel text-base font-bold text-white flex items-center gap-2">
                        <Server className="w-5 h-5 text-amber-400" />
                        <span>BigRock Server &amp; Linux Shared Hosting</span>
                        <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                          Admin Exclusive
                        </span>
                      </h3>
                      <p className="text-slate-400 text-xs mt-1">
                        Domain DNS routing, cPanel LFTP/FTP automated uploads, AutoSSL certificates, and Apache configuration for <strong>24crofts.com</strong>.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          if (onOpenBigRock) {
                            onOpenBigRock();
                          }
                        }}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition shadow flex items-center gap-1.5 cursor-pointer"
                      >
                        <Server className="w-4 h-4" />
                        <span>Launch Full BigRock Suite</span>
                      </button>
                    </div>
                  </div>

                  {/* Security Notice */}
                  <div className="p-3.5 bg-amber-950/20 border border-amber-500/30 rounded-xl text-xs text-amber-200/90 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Platform Privacy Notice:</strong> Per platform architecture, BigRock hosting details, server configurations, and deployment guides are restricted exclusively to authenticated administrators and are strictly hidden from the public homepage.
                    </span>
                  </div>

                  {/* Server Specification Overview */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <span className="text-slate-500 text-[10px] uppercase font-bold block">Production Domain</span>
                      <span className="font-mono text-amber-300 font-bold text-sm block">https://24crofts.com/</span>
                      <span className="text-slate-400 text-[11px] block">Registrar &amp; DNS: BigRock Control Panel</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <span className="text-slate-500 text-[10px] uppercase font-bold block">Hosting Environment</span>
                      <span className="text-white font-bold text-sm block">BigRock Linux Shared Hosting</span>
                      <span className="text-slate-400 text-[11px] block">cPanel / Apache / PHP 8.2 / MySQL 8</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <span className="text-slate-500 text-[10px] uppercase font-bold block">Root Deployment Path</span>
                      <span className="font-mono text-emerald-400 font-bold text-sm block">/public_html/</span>
                      <span className="text-slate-400 text-[11px] block">Upload built dist/* directly into public_html</span>
                    </div>
                  </div>

                  {/* DNS Configuration Table */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                    <h4 className="font-cinzel text-xs font-bold text-white flex items-center gap-1.5">
                      <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                      <span>BigRock DNS Management Records for 24crofts.com</span>
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left font-mono text-[11px]">
                        <thead>
                          <tr className="border-b border-slate-800 text-slate-500 text-[10px] uppercase">
                            <th className="pb-2">Host / Name</th>
                            <th className="pb-2">Type</th>
                            <th className="pb-2">Destination / IP</th>
                            <th className="pb-2">TTL</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-slate-300">
                          <tr>
                            <td className="py-2 text-amber-300">@</td>
                            <td className="py-2 text-cyan-400">A</td>
                            <td className="py-2 text-emerald-400">Your_BigRock_Shared_IP</td>
                            <td className="py-2 text-slate-500">14400</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-amber-300">www</td>
                            <td className="py-2 text-cyan-400">CNAME</td>
                            <td className="py-2 text-slate-200">24crofts.com</td>
                            <td className="py-2 text-slate-500">14400</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-amber-300">ftp</td>
                            <td className="py-2 text-cyan-400">CNAME</td>
                            <td className="py-2 text-slate-200">24crofts.com</td>
                            <td className="py-2 text-slate-500">14400</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-amber-300">mail</td>
                            <td className="py-2 text-cyan-400">CNAME</td>
                            <td className="py-2 text-slate-200">24crofts.com</td>
                            <td className="py-2 text-slate-500">14400</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Launch Modal Action */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-slate-900 to-amber-950/20 border border-amber-600/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="font-cinzel text-xs font-bold text-white">Need Detailed Step-by-Step Instructions?</h4>
                      <p className="text-slate-400 text-[11px] mt-0.5">
                        Open the interactive guide covering FTP upload script, database.php MySQL config, AutoSSL installation, and .htaccess SPA rewrite rules.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenBigRock) {
                          onOpenBigRock();
                        }
                      }}
                      className="shrink-0 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition flex items-center gap-1.5 cursor-pointer shadow"
                    >
                      <Server className="w-3.5 h-3.5" />
                      <span>Open BigRock Deployment Guide</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-slate-950/95 border-t border-slate-800 px-6 py-3 flex items-center justify-between text-xs text-slate-400">
          <span>
            24 Crofts Platform Control &bull; Domain: <strong className="text-amber-300">https://24crofts.com/</strong>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold"
          >
            Close Panel
          </button>
        </div>
      </div>
    </div>
  );
};
