import React, { useState, useEffect, useMemo } from 'react';
import {
  Profile,
  MovieAdSubmission,
  ContactAccessRequest,
  AdSenseConfig,
  CraftCategory,
  ProductionHouse,
} from './types.ts';
import { INITIAL_PROFILES, INITIAL_MOVIE_ADS, INITIAL_PRODUCTION_HOUSES } from './data/profilesData.ts';
import { CRAFTS_OF_CINEMA, CRAFT_CATEGORIES } from './data/craftsData.ts';
import { searchProfileById, formatProfileId } from './utils/craftLogic.ts';

// Components
import { BrandLogo } from './components/BrandLogo.tsx';
import { BrandHeroBanner } from './components/BrandHeroBanner.tsx';
import { CraftNavigation } from './components/CraftNavigation.tsx';
import { ProfileCard } from './components/ProfileCard.tsx';
import { ProfileDetailModal } from './components/ProfileDetailModal.tsx';
import { ContactRequestModal } from './components/ContactRequestModal.tsx';
import { MovieAdUploadModal } from './components/MovieAdUploadModal.tsx';
import { MovieAdsShowcase } from './components/MovieAdsShowcase.tsx';
import { RegistrationModal } from './components/RegistrationModal.tsx';
import { EditProfileModal } from './components/EditProfileModal.tsx';
import { AdminPortalModal } from './components/AdminPortalModal.tsx';
import { MemberLoginModal } from './components/MemberLoginModal.tsx';
import { MemberDashboardModal } from './components/MemberDashboardModal.tsx';
import { BigRockDeploymentModal } from './components/BigRockDeploymentModal.tsx';
import { GoogleAdSenseBanner } from './components/GoogleAdSenseBanner.tsx';
import { ContactPage } from './components/ContactPage.tsx';
import { ProductionHouseRegisterModal } from './components/ProductionHouseRegisterModal.tsx';
import { ProductionHouseLoginModal } from './components/ProductionHouseLoginModal.tsx';
import { ProductionHouseDashboardModal } from './components/ProductionHouseDashboardModal.tsx';

import {
  Search,
  Filter,
  ShieldCheck,
  Server,
  Plus,
  Video,
  Users,
  Film,
  Sparkles,
  Lock,
  Unlock,
  Check,
  Megaphone,
  Layers,
  ArrowUpDown,
  SlidersHorizontal,
  LogIn,
  LogOut,
  User,
  Phone,
  Mail,
  MapPin,
  Building,
} from 'lucide-react';


export default function App() {
  // Profiles state (Ensuring each craft category has minimum 6 profiles on home page)
  const [profiles, setProfiles] = useState<Profile[]>(() => {
    const saved = localStorage.getItem('24crofts_profiles');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const hasMin6PerCat = CRAFT_CATEGORIES.every((cat) => {
            const count = parsed.filter((p: Profile) => p.category === cat.id).length;
            return count >= 6;
          });
          if (hasMin6PerCat) {
            return parsed;
          }
          // If any category has fewer than 6, merge all INITIAL_PROFILES with any user custom profiles
          const parsedIds = new Set(parsed.map((p: Profile) => p.id));
          const missingBaseProfiles = INITIAL_PROFILES.filter((baseP) => !parsedIds.has(baseP.id));
          return [...parsed, ...missingBaseProfiles];
        }
      } catch {
        // fallback
      }
    }
    return INITIAL_PROFILES;
  });

  // Movie Ads state (Ensuring all 12 theatrical teaser ads are shown)
  const [movieAds, setMovieAds] = useState<MovieAdSubmission[]>(() => {
    const saved = localStorage.getItem('24crofts_movie_ads');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const hasAll12Base = INITIAL_MOVIE_ADS.every((baseAd) =>
            parsed.some((p: MovieAdSubmission) => p.id === baseAd.id)
          );
          if (hasAll12Base && parsed.length >= 12) {
            return parsed;
          }
          // Merge base ads with any user additions so all 12 base ads are present
          const parsedIds = new Set(parsed.map((a: MovieAdSubmission) => a.id));
          const missingBaseAds = INITIAL_MOVIE_ADS.filter((baseAd) => !parsedIds.has(baseAd.id));
          return [...parsed, ...missingBaseAds];
        }
      } catch {
        // fallback
      }
    }
    return INITIAL_MOVIE_ADS;
  });

  // Contact requests state
  const [contactRequests, setContactRequests] = useState<ContactAccessRequest[]>(() => {
    const saved = localStorage.getItem('24crofts_contact_requests');
    if (saved) return JSON.parse(saved);
    return [
      {
        id: 'REQ-101',
        profileId: '24C-DIR-1042',
        profileName: 'K. S. Raghavan',
        profileCraft: 'Direction',
        requesterName: 'B. V. S. Raju',
        requesterPhone: '+91 98490 88990',
        requesterEmail: 'raju@mythrimovies.com',
        productionHouse: 'Mythri Movie Makers',
        purpose: 'Pan-India action feature script discussion and casting approval.',
        status: 'pending',
        requestDate: '2026-04-12',
      },
    ];
  });

  // Production Houses State (Official Banners - Separate from Admin)
  const [productionHouses, setProductionHouses] = useState<ProductionHouse[]>(() => {
    const saved = localStorage.getItem('24crofts_production_houses');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const parsedIds = new Set(parsed.map((ph: ProductionHouse) => ph.id));
          const missingBase = INITIAL_PRODUCTION_HOUSES.filter((basePH) => !parsedIds.has(basePH.id));
          return [...parsed, ...missingBase];
        }
      } catch {
        // fallback
      }
    }
    return INITIAL_PRODUCTION_HOUSES;
  });

  // Logged-in Production House session
  const [loggedInProductionHouse, setLoggedInProductionHouse] = useState<ProductionHouse | null>(() => {
    const saved = localStorage.getItem('24crofts_logged_in_ph');
    return saved ? JSON.parse(saved) : null;
  });

  // Requester identity and authorized permissions for this browser
  const [myRequesterPhone, setMyRequesterPhone] = useState<string>(() => {
    return localStorage.getItem('24crofts_my_requester_phone') || '';
  });

  const [myAuthorizedProfileIds, setMyAuthorizedProfileIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('24crofts_my_authorized_profiles');
    return saved ? JSON.parse(saved) : [];
  });

  // Strict Permission Checker:
  // Contacts are visible ONLY if:
  // 1. Admin authenticated
  // 2. Member viewing own profile
  // 3. Approved Production House logged in (MANDATORY ADMIN APPROVAL RULE)
  // 4. Authorized via explicit admin contact permission
  const isProfileAuthorizedForUser = (profileId: string): boolean => {
    if (isAdminAuthenticated) return true;
    if (loggedInMember && loggedInMember.id === profileId) return true;
    
    // MANDATORY: Approved Production House can view each profile contact number
    if (loggedInProductionHouse && loggedInProductionHouse.status === 'approved') {
      return true;
    }

    if (myAuthorizedProfileIds.includes(profileId)) return true;
    if (myRequesterPhone) {
      const cleanMy = myRequesterPhone.replace(/[^\d]/g, '');
      if (cleanMy.length >= 8) {
        return contactRequests.some((r) => {
          if (r.profileId !== profileId || r.status !== 'approved') return false;
          const cleanReq = r.requesterPhone.replace(/[^\d]/g, '');
          return (
            cleanReq.endsWith(cleanMy.slice(-10)) ||
            cleanMy.endsWith(cleanReq.slice(-10))
          );
        });
      }
    }
    return false;
  };


  // AdSense configuration
  const [adSenseConfig, setAdSenseConfig] = useState<AdSenseConfig>(() => {
    const saved = localStorage.getItem('24crofts_adsense_config');
    return saved
      ? JSON.parse(saved)
      : {
          enabled: true,
          client: 'ca-pub-9842109420481234',
          testMode: true,
          showInFeed: true,
          showHeaderBanner: true,
          showSidebarBanner: true,
        };
  });

  // Navigation View State: 'directory' | 'contact'
  const [currentView, setCurrentView] = useState<'directory' | 'contact'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const params = new URLSearchParams(window.location.search);
      if (hash === '#contact' || hash === '#contact-us' || params.get('view') === 'contact') {
        return 'contact';
      }
    }
    return 'directory';
  });

  const navigateToView = (view: 'directory' | 'contact') => {
    setCurrentView(view);
    if (view === 'contact') {
      window.location.hash = 'contact';
    } else {
      if (window.location.hash === '#contact' || window.location.hash === '#contact-us') {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#contact' || hash === '#contact-us') {
        setCurrentView('contact');
      } else if (hash === '#directory' || hash === '#home') {
        setCurrentView('directory');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Filtering & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCraft, setSelectedCraft] = useState<string | null>(null);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [newOnly, setNewOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'newest' | 'experience' | 'name'>('newest');
  const [viewGrouping, setViewGrouping] = useState<'categorized' | 'flat'>('categorized');

  // Active Modals & Auth State
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [contactRequestTarget, setContactRequestTarget] = useState<Profile | null>(null);
  const [isAdUploadOpen, setIsAdUploadOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [editingProfile, setEditingProfile] = useState<Profile | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isBigRockOpen, setIsBigRockOpen] = useState(false);

  // Member Authentication & Dashboard State
  const [loggedInMember, setLoggedInMember] = useState<Profile | null>(() => {
    const saved = localStorage.getItem('24crofts_logged_in_member');
    return saved ? JSON.parse(saved) : null;
  });
  const [isMemberLoginOpen, setIsMemberLoginOpen] = useState(false);
  const [isMemberDashboardOpen, setIsMemberDashboardOpen] = useState(false);

  // Production House Modal States
  const [isPHLoginOpen, setIsPHLoginOpen] = useState(false);
  const [isPHRegisterOpen, setIsPHRegisterOpen] = useState(false);
  const [isPHDashboardOpen, setIsPHDashboardOpen] = useState(false);

  // Admin Authentication State
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('24crofts_admin_authenticated') === 'true';
  });

  // Success Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  useEffect(() => {
    if (loggedInMember) {
      localStorage.setItem('24crofts_logged_in_member', JSON.stringify(loggedInMember));
    } else {
      localStorage.removeItem('24crofts_logged_in_member');
    }
  }, [loggedInMember]);

  useEffect(() => {
    if (loggedInProductionHouse) {
      localStorage.setItem('24crofts_logged_in_ph', JSON.stringify(loggedInProductionHouse));
    } else {
      localStorage.removeItem('24crofts_logged_in_ph');
    }
  }, [loggedInProductionHouse]);

  useEffect(() => {
    localStorage.setItem('24crofts_production_houses', JSON.stringify(productionHouses));
  }, [productionHouses]);

  useEffect(() => {
    localStorage.setItem('24crofts_admin_authenticated', String(isAdminAuthenticated));
  }, [isAdminAuthenticated]);

  // Persist state updates to localStorage
  useEffect(() => {
    localStorage.setItem('24crofts_profiles', JSON.stringify(profiles));
  }, [profiles]);

  useEffect(() => {
    localStorage.setItem('24crofts_movie_ads', JSON.stringify(movieAds));
  }, [movieAds]);

  useEffect(() => {
    localStorage.setItem('24crofts_contact_requests', JSON.stringify(contactRequests));
  }, [contactRequests]);

  useEffect(() => {
    localStorage.setItem('24crofts_my_authorized_profiles', JSON.stringify(myAuthorizedProfileIds));
  }, [myAuthorizedProfileIds]);

  useEffect(() => {
    if (myRequesterPhone) {
      localStorage.setItem('24crofts_my_requester_phone', myRequesterPhone);
    }
  }, [myRequesterPhone]);

  useEffect(() => {
    localStorage.setItem('24crofts_adsense_config', JSON.stringify(adSenseConfig));
  }, [adSenseConfig]);


  // Deep linking: If URL has ?profile=ID, automatically open that profile!
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const profileParam = params.get('profile') || params.get('id');
    if (profileParam) {
      const match = searchProfileById(profiles, profileParam);
      if (match) {
        setSelectedProfile(match);
      }
    }
  }, [profiles]);

  // Profile counts grouped by craft
  const profileCountsByCraft = useMemo(() => {
    const counts: Record<string, number> = {};
    profiles.forEach((p) => {
      counts[p.craft] = (counts[p.craft] || 0) + 1;
    });
    return counts;
  }, [profiles]);

  // Filtered & Sorted Profiles List
  const filteredProfiles = useMemo(() => {
    return profiles
      .filter((p) => {
        // ID or Name or Craft query search
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchId = p.id.toLowerCase().includes(q);
          const matchName = p.name.toLowerCase().includes(q);
          const matchStage = p.stageName?.toLowerCase().includes(q) || false;
          const matchCraft = p.craft.toLowerCase().includes(q);
          const matchCity = p.nativePlace.toLowerCase().includes(q) || p.currentCity.toLowerCase().includes(q);
          if (!matchId && !matchName && !matchStage && !matchCraft && !matchCity) {
            return false;
          }
        }

        // Category filter
        if (selectedCategory && p.category !== selectedCategory) {
          return false;
        }

        // New profiles category filter
        if (newOnly && !p.isNew) {
          return false;
        }

        // Specific craft filter
        if (selectedCraft && p.craft !== selectedCraft) {
          return false;
        }

        // Verified union filter
        if (verifiedOnly && !p.unionCard.verified) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'newest') {
          // New profiles first, then by date
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
        if (sortBy === 'experience') {
          return b.experienceYears - a.experienceYears;
        }
        return a.name.localeCompare(b.name);
      });
  }, [profiles, searchQuery, selectedCategory, selectedCraft, verifiedOnly, newOnly, sortBy]);

  // Handler for Profile ID search from Hero banner
  const handleSearchId = (queryId: string) => {
    setSearchQuery(queryId);
    const directMatch = searchProfileById(profiles, queryId);
    if (directMatch) {
      setSelectedProfile(directMatch);
      showToast(`Found Profile: ${directMatch.name} (${directMatch.id})`);
    } else {
      showToast(`Filtered results matching "${queryId}"`);
    }
  };

  // Handle Contact Request submission
  const handleSubmitContactRequest = (
    reqData: Omit<ContactAccessRequest, 'id' | 'status' | 'requestDate'>
  ) => {
    const newReq: ContactAccessRequest = {
      ...reqData,
      id: `REQ-${Date.now().toString().slice(-4)}`,
      status: 'pending',
      requestDate: new Date().toISOString().split('T')[0],
    };
    setContactRequests([newReq, ...contactRequests]);
    setMyRequesterPhone(reqData.requesterPhone);
    localStorage.setItem('24crofts_my_requester_phone', reqData.requesterPhone);
    showToast(`Request submitted for ${reqData.profileName}. Awaiting Admin Authorization.`);
  };

  // Handle Movie Ad submission
  const handleSubmitMovieAd = (
    adData: Omit<MovieAdSubmission, 'id' | 'status' | 'submittedAt'>
  ) => {
    const newAd: MovieAdSubmission = {
      ...adData,
      id: `AD-${Date.now().toString().slice(-4)}`,
      status: 'pending',
      submittedAt: new Date().toISOString().split('T')[0],
    };
    setMovieAds([newAd, ...movieAds]);
    showToast(`Movie teaser "${adData.title}" submitted! Mandatory admin approval required.`);
  };

  // Handle New Profile Registration
  const handleRegisterSuccess = (newProfile: Profile) => {
    setProfiles([newProfile, ...profiles]);
    showToast(`Welcome! Cinema ID ${newProfile.id} registered.`);
  };

  // Handle Save Profile Edits
  const handleSaveProfile = (updatedProfile: Profile) => {
    setProfiles(profiles.map((p) => (p.id === updatedProfile.id ? updatedProfile : p)));
    if (selectedProfile && selectedProfile.id === updatedProfile.id) {
      setSelectedProfile(updatedProfile);
    }
    if (loggedInMember && loggedInMember.id === updatedProfile.id) {
      setLoggedInMember(updatedProfile);
    }
    showToast(`Profile ${updatedProfile.id} updated successfully!`);
  };

  // Member Authentication Handlers
  const handleMemberLogin = (profile: Profile) => {
    setLoggedInMember(profile);
    showToast(`Welcome back, ${profile.name}! Logged in as ${profile.id}`);
  };

  const handleMemberLogout = () => {
    setLoggedInMember(null);
    setIsMemberDashboardOpen(false);
    showToast('Member logged out successfully.');
  };

  const handleUpdateAvailability = (profileId: string, availability: Profile['availability']) => {
    setProfiles((prev) =>
      prev.map((p) => (p.id === profileId ? { ...p, availability } : p))
    );
    if (loggedInMember && loggedInMember.id === profileId) {
      setLoggedInMember({ ...loggedInMember, availability });
    }
    showToast(`Availability status updated to "${availability}"`);
  };

  const handleResetMemberPassword = (profileId: string, newPass: string) => {
    setProfiles((prev) =>
      prev.map((p) => (p.id === profileId ? { ...p, password: newPass } : p))
    );
    if (loggedInMember && loggedInMember.id === profileId) {
      setLoggedInMember({ ...loggedInMember, password: newPass });
    }
    showToast(`Temporary password generated for ${profileId}`);
  };

  const handleDeleteProfile = (profileId: string) => {
    setProfiles((prev) => prev.filter((p) => p.id !== profileId));
    if (loggedInMember && loggedInMember.id === profileId) {
      setLoggedInMember(null);
    }
    showToast(`Profile ${profileId} removed from directory.`);
  };

  // Admin Actions
  const handleApproveContact = (requestId: string) => {
    const req = contactRequests.find((r) => r.id === requestId);
    if (req) {
      setContactRequests(
        contactRequests.map((r) => (r.id === requestId ? { ...r, status: 'approved' } : r))
      );
      // If the current browser session submitted this request, activate authorization locally
      const cleanMy = myRequesterPhone.replace(/[^\d]/g, '');
      const cleanReq = req.requesterPhone.replace(/[^\d]/g, '');
      if (cleanMy && (cleanMy.endsWith(cleanReq.slice(-10)) || cleanReq.endsWith(cleanMy.slice(-10)))) {
        if (!myAuthorizedProfileIds.includes(req.profileId)) {
          setMyAuthorizedProfileIds([...myAuthorizedProfileIds, req.profileId]);
        }
      }
      showToast(`Contact access authorized for ${req.requesterName} (${req.productionHouse}) to view ${req.profileName}`);
    }
  };

  const handleRejectContact = (requestId: string) => {
    setContactRequests(
      contactRequests.map((r) => (r.id === requestId ? { ...r, status: 'rejected' } : r))
    );
    showToast('Contact request denied.');
  };

  const handleApproveAd = (adId: string) => {
    setMovieAds(
      movieAds.map((a) => (a.id === adId ? { ...a, status: 'approved' } : a))
    );
    showToast('Movie Ad approved! Now live on 24crofts.com homepage.');
  };

  const handleRejectAd = (adId: string) => {
    setMovieAds(
      movieAds.map((a) => (a.id === adId ? { ...a, status: 'rejected' } : a))
    );
    showToast('Movie Ad status updated to rejected.');
  };

  const handleToggleProfileVerification = (profileId: string) => {
    setProfiles(
      profiles.map((p) => {
        if (p.id === profileId) {
          return {
            ...p,
            unionCard: {
              ...p.unionCard,
              verified: !p.unionCard.verified,
            },
          };
        }
        return p;
      })
    );
    showToast('Talent verification badge toggled.');
  };

  // Production House Handlers (Separate from Admin)
  const handleRegisterProductionHouse = (newPH: ProductionHouse) => {
    setProductionHouses((prev) => [newPH, ...prev]);
    showToast(`Production House "${newPH.name}" submitted! Status: PENDING ADMIN APPROVAL.`);
  };

  const handleProductionHouseLogin = (ph: ProductionHouse) => {
    setLoggedInProductionHouse(ph);
    showToast(`Welcome, ${ph.name}! Direct contact access unlocked across directory.`);
  };

  const handleProductionHouseLogout = () => {
    setLoggedInProductionHouse(null);
    setIsPHDashboardOpen(false);
    showToast('Production House logged out.');
  };

  const handleApproveProductionHouse = (phId: string) => {
    const approvedAt = new Date().toISOString().split('T')[0];
    setProductionHouses((prev) =>
      prev.map((ph) => (ph.id === phId ? { ...ph, status: 'approved', approvedAt } : ph))
    );
    if (loggedInProductionHouse && loggedInProductionHouse.id === phId) {
      setLoggedInProductionHouse({ ...loggedInProductionHouse, status: 'approved', approvedAt });
    }
    showToast(`Production House approved! Direct contact numbers unlocked.`);
  };

  const handleRejectProductionHouse = (phId: string) => {
    setProductionHouses((prev) =>
      prev.map((ph) => (ph.id === phId ? { ...ph, status: 'rejected' } : ph))
    );
    if (loggedInProductionHouse && loggedInProductionHouse.id === phId) {
      setLoggedInProductionHouse(null);
    }
    showToast('Production House registration rejected.');
  };

  const handleToggleProductionHouseStatus = (phId: string, status: ProductionHouse['status']) => {
    setProductionHouses((prev) =>
      prev.map((ph) => (ph.id === phId ? { ...ph, status } : ph))
    );
    if (loggedInProductionHouse && loggedInProductionHouse.id === phId) {
      setLoggedInProductionHouse({ ...loggedInProductionHouse, status });
    }
    showToast(`Production House status updated to ${status}.`);
  };

  const handleDeleteProductionHouse = (phId: string) => {
    setProductionHouses((prev) => prev.filter((ph) => ph.id !== phId));
    if (loggedInProductionHouse && loggedInProductionHouse.id === phId) {
      setLoggedInProductionHouse(null);
    }
    showToast('Production House removed.');
  };

  const pendingRequestsCount = contactRequests.filter((r) => r.status === 'pending').length;
  const pendingAdsCount = movieAds.filter((a) => a.status === 'pending').length;
  const pendingPHCount = productionHouses.filter((p) => p.status === 'pending').length;
  const totalAdminAlerts = pendingRequestsCount + pendingAdsCount + pendingPHCount;


  return (
    <div className="min-h-screen bg-[#070a10] text-slate-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-slate-900 border border-amber-500/60 text-amber-200 text-xs font-bold shadow-[0_4px_25px_rgba(212,175,55,0.4)] flex items-center gap-2 animate-in slide-in-from-bottom duration-300">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Utility Bar */}
      <div className="bg-[#0b0f19] border-b border-slate-800/80 px-4 py-1.5 text-xs text-slate-400 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="font-mono text-[11px] text-amber-400/90 hidden sm:inline">
            https://24crofts.com/
          </span>
          {loggedInMember ? (
            <button
              onClick={() => setIsMemberDashboardOpen(true)}
              className="text-[11px] text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/40 hover:bg-amber-900/60 transition flex items-center gap-1.5 cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Talent: <strong>{loggedInMember.name}</strong></span>
              <span className="font-mono text-[10px] text-amber-400">({loggedInMember.id})</span>
            </button>
          ) : loggedInProductionHouse ? (
            <button
              onClick={() => setIsPHDashboardOpen(true)}
              className="text-[11px] text-amber-300 bg-amber-950/70 px-2.5 py-0.5 rounded border border-amber-500/50 hover:bg-amber-900/60 transition flex items-center gap-1.5 cursor-pointer"
              title="Open Production House Dashboard"
            >
              <Building className="w-3.5 h-3.5 text-amber-400" />
              <span>Studio: <strong>{loggedInProductionHouse.name}</strong></span>
              {loggedInProductionHouse.status === 'approved' ? (
                <span className="text-emerald-400 font-bold text-[10px] bg-emerald-950/80 px-1.5 py-0.2 rounded border border-emerald-500/40">
                  ✓ Contacts Unlocked
                </span>
              ) : (
                <span className="text-amber-400 font-bold text-[10px] bg-amber-950 px-1.5 py-0.2 rounded border border-amber-500/40 animate-pulse">
                  ⏳ Pending Admin Approval
                </span>
              )}
            </button>
          ) : (
            <span className="text-[11px] text-slate-500 hidden md:inline">
              Official Cinema Crafts &amp; Matrimonial-Style Matchmaking
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          {/* Production House Gateway (Separate from Admin) */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => {
                if (loggedInProductionHouse) {
                  setIsPHDashboardOpen(true);
                } else {
                  setIsPHLoginOpen(true);
                }
              }}
              className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold border transition cursor-pointer ${
                loggedInProductionHouse
                  ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-amber-300 border-slate-700'
              }`}
              title="Official Film Production House Portal (Separate from Admin)"
            >
              <Building className="w-3.5 h-3.5 text-amber-400" />
              <span>
                {loggedInProductionHouse
                  ? loggedInProductionHouse.name.split(' ')[0]
                  : 'Production House'}
              </span>
              {!loggedInProductionHouse && (
                <span className="text-[10px] text-amber-400/90 font-mono hidden lg:inline">
                  (Login)
                </span>
              )}
            </button>
            {!loggedInProductionHouse && (
              <button
                onClick={() => setIsPHRegisterOpen(true)}
                className="text-[10px] text-amber-400 hover:text-amber-300 font-semibold underline hidden sm:inline cursor-pointer"
                title="Register your cinema production house banner"
              >
                Register Banner
              </button>
            )}
          </div>

          {/* Quick Contact Desk Link */}
          <button
            onClick={() => navigateToView('contact')}
            className={`flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold border transition cursor-pointer ${
              currentView === 'contact'
                ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                : 'text-slate-300 hover:text-amber-300 bg-slate-800/80 hover:bg-slate-800 border-slate-700/80 hover:border-amber-500/40'
            }`}
            title="24 Crofts Desk Hyderabad • 7989144860 • 24croftsindia@gmail.com"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-300 font-bold">Hyderabad:</span>
            <span className="font-mono text-slate-100">7989144860</span>
            <span className="text-slate-500 hidden xl:inline">&bull; 24croftsindia@gmail.com</span>
          </button>

          {/* Admin Authority Portal */}
          <button
            onClick={() => setIsAdminOpen(true)}
            className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold border transition cursor-pointer ${
              isAdminAuthenticated
                ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-amber-300 border-slate-700'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>{isAdminAuthenticated ? 'Admin: Active' : 'Admin Panel'}</span>
            {totalAdminAlerts > 0 && (
              <span className="w-4 h-4 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black flex items-center justify-center">
                {totalAdminAlerts}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Main App Header */}
      <header className="sticky top-0 z-40 bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800/90 shadow-xl">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2.5 md:py-3.5 flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <a
            href="https://24crofts.com/"
            onClick={(e) => {
              e.preventDefault();
              navigateToView('directory');
              setSelectedCategory(null);
              setSelectedCraft(null);
              setSearchQuery('');
            }}
            className="shrink-0"
          >
            <BrandLogo size="md" />
          </a>

          {/* Primary View Switcher: Cinema Directory vs Contact Page */}
          <nav className="flex items-center gap-1 bg-slate-900/90 border border-slate-800 p-1 rounded-2xl shadow-inner">
            <button
              onClick={() => navigateToView('directory')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                currentView === 'directory'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Cinema Directory</span>
            </button>

            <button
              onClick={() => navigateToView('contact')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                currentView === 'contact'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Contact Page</span>
              <span className="hidden sm:inline-block px-1.5 py-0.2 rounded bg-amber-400/20 text-[10px] text-amber-300 font-mono">
                Hyderabad
              </span>
            </button>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Production House Button */}
            {loggedInProductionHouse ? (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsPHDashboardOpen(true)}
                  className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/50 text-amber-300 font-bold text-xs flex items-center gap-1.5 transition shadow cursor-pointer"
                  title="Production House Dashboard"
                >
                  <Building className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden lg:inline">{loggedInProductionHouse.name}</span>
                  <span className="lg:hidden">{loggedInProductionHouse.name.split(' ')[0]}</span>
                  {loggedInProductionHouse.status === 'approved' && (
                    <span className="text-[10px] text-emerald-400 font-mono hidden sm:inline">&bull; Contacts Unlocked</span>
                  )}
                </button>
                <button
                  onClick={handleProductionHouseLogout}
                  className="p-1.5 sm:p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-500/40 text-slate-400 hover:text-red-400 transition cursor-pointer"
                  title="Log Out Production House"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsPHLoginOpen(true)}
                className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-slate-900 border border-amber-500/40 hover:border-amber-400 text-amber-300 font-bold text-xs uppercase tracking-wider transition flex items-center gap-1.5 shadow cursor-pointer"
                title="Production House Login / Register (Separate from Admin)"
              >
                <Building className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Production House</span>
                <span className="sm:hidden text-[11px]">Studio</span>
              </button>
            )}

            <button
              onClick={() => setIsAdUploadOpen(true)}
              className="px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-slate-900 border border-amber-500/40 hover:border-amber-400 text-amber-300 font-bold text-xs uppercase tracking-wider transition flex items-center gap-1.5 shadow"
            >
              <Video className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Upload Movie Ad</span>
              <span className="sm:hidden text-[11px]">Ad</span>
            </button>

            {loggedInMember ? (
              /* If Member Logged In */
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={() => setIsMemberDashboardOpen(true)}
                  className="px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/50 text-amber-300 font-bold text-xs flex items-center gap-1.5 transition shadow"
                  title="Open Member Dashboard"
                >
                  <img
                    src={loggedInMember.avatarUrl}
                    alt=""
                    className="w-4 h-4 rounded-full object-cover border border-amber-400"
                  />
                  <span className="hidden md:inline font-mono">{loggedInMember.id}</span>
                  <span className="font-semibold">{loggedInMember.name.split(' ')[0]}</span>
                </button>

                <button
                  onClick={handleMemberLogout}
                  className="p-1.5 sm:p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-500/40 text-slate-400 hover:text-red-400 transition"
                  title="Log Out"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              /* If Member NOT Logged In */
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={() => setIsMemberLoginOpen(true)}
                  className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400 text-slate-200 hover:text-amber-300 font-bold text-xs uppercase tracking-wider transition flex items-center gap-1.5 shadow"
                >
                  <LogIn className="w-3.5 h-3.5 text-amber-400" />
                  <span>Member Login</span>
                </button>

                <button
                  onClick={() => setIsRegisterOpen(true)}
                  className="p-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-[0_2px_15px_rgba(212,175,55,0.4)] transition flex items-center gap-1.5"
                  title="Register Profile"
                >
                  <Users className="w-4 h-4" />
                  <span className="hidden sm:inline">Register Profile</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>


      {/* Main Body Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6 md:py-8 space-y-8">
        {currentView === 'contact' ? (
          <ContactPage
            onBackToDirectory={() => navigateToView('directory')}
            onOpenRegister={() => setIsRegisterOpen(true)}
            onOpenAdminPortal={() => setIsAdminOpen(true)}
          />
        ) : (
          <>
            {/* 1. Grand Hero Banner with Logo & ID Search */}
            <BrandHeroBanner
              onSearchId={handleSearchId}
              onOpenRegister={() => setIsRegisterOpen(true)}
              onOpenAdUpload={() => setIsAdUploadOpen(true)}
              onSelectCategory={(cat) => setSelectedCategory(cat)}
              onOpenContact={() => navigateToView('contact')}
            />

            {/* 2. Google AdSense Header Banner (728x90) */}
            {adSenseConfig.showHeaderBanner && (
              <GoogleAdSenseBanner
                slotType="header-leaderboard"
                config={adSenseConfig}
              />
            )}

        {/* 3. Theatrical Teasers & Movie Advertisements (Mandatory Admin Approved Placement) */}
        <MovieAdsShowcase
          ads={movieAds}
          onOpenUploadModal={() => setIsAdUploadOpen(true)}
        />

        {/* 4. The 24 Crafts Categorization Bar */}
        <CraftNavigation
          selectedCategory={selectedCategory}
          selectedCraft={selectedCraft}
          onSelectCategory={setSelectedCategory}
          onSelectCraft={setSelectedCraft}
          profileCountsByCraft={profileCountsByCraft}
        />

        {/* 5. Directory Search & Filters Toolbar */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-amber-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by Unique Cinema ID (e.g. 24C-DIR-1042), Name, Craft, or City..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs md:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 flex-wrap text-xs">
            {/* New Profiles Category toggle */}
            <button
              onClick={() => setNewOnly(!newOnly)}
              className={`px-3 py-2 rounded-xl border transition flex items-center gap-1.5 ${
                newOnly
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold shadow'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>New Profiles</span>
            </button>

            {/* Verified Union Member toggle */}
            <button
              onClick={() => setVerifiedOnly(!verifiedOnly)}
              className={`px-3 py-2 rounded-xl border transition flex items-center gap-1.5 ${
                verifiedOnly
                  ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Union Cards</span>
            </button>

            {/* Sorting */}
            <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-amber-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-slate-200 focus:outline-none cursor-pointer"
              >
                <option value="newest" className="bg-slate-900">New Profiles First</option>
                <option value="experience" className="bg-slate-900">Years Experience</option>
                <option value="name" className="bg-slate-900">Name Alphabetical</option>
              </select>
            </div>
          </div>
        </div>

        {/* 6. Profiles Grid Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="font-cinzel text-lg md:text-xl font-bold text-white flex flex-wrap items-center gap-2">
                <span>Verified Cinema Talents</span>
                <span className="text-xs font-mono font-semibold text-amber-400 bg-amber-950 px-2.5 py-0.5 rounded-md border border-amber-800">
                  {filteredProfiles.length} Profiles Across 7 Categories
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60 hidden md:inline">
                  Min. 6 Per Category
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Every Cinema Craft Category featuring minimum 6 verified profiles &bull; Contact numbers strictly hidden and masked
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {/* Grouping View Switcher */}
              <div className="bg-slate-900 border border-slate-800 p-1 rounded-xl flex items-center gap-1 text-xs">
                <button
                  type="button"
                  onClick={() => setViewGrouping('categorized')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                    viewGrouping === 'categorized'
                      ? 'bg-amber-500 text-slate-950 shadow font-extrabold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Show all 7 craft categories with 6 profiles each on homepage"
                >
                  7 Craft Sections (6 Each)
                </button>
                <button
                  type="button"
                  onClick={() => setViewGrouping('flat')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                    viewGrouping === 'flat'
                      ? 'bg-amber-500 text-slate-950 shadow font-extrabold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Unified flat grid of all profiles"
                >
                  Unified Grid
                </button>
              </div>

              {(selectedCategory || selectedCraft || searchQuery || verifiedOnly || newOnly) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedCraft(null);
                    setSearchQuery('');
                    setVerifiedOnly(false);
                    setNewOnly(false);
                  }}
                  className="text-xs text-amber-400 hover:underline px-1.5"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          {filteredProfiles.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/40 border border-dashed border-slate-800 rounded-2xl">
              <Film className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <h4 className="font-cinzel text-base font-bold text-slate-300">
                No profiles matched your search criteria
              </h4>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Try searching by different craft names, unique ID codes (e.g. 24C-DIR-1042), or clear your category filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedCraft(null);
                  setSearchQuery('');
                  setVerifiedOnly(false);
                  setNewOnly(false);
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : viewGrouping === 'categorized' && !selectedCategory && !selectedCraft && !searchQuery && !newOnly && !verifiedOnly ? (
            /* Categorized Homepage View: Displays each category with minimum 6 profiles */
            <div className="space-y-10">
              {CRAFT_CATEGORIES.map((cat) => {
                const catProfiles = filteredProfiles.filter((p) => p.category === cat.id);
                if (catProfiles.length === 0) return null;

                return (
                  <div key={cat.id} className="space-y-4 pt-6 border-t border-slate-800/80 first:border-t-0 first:pt-0">
                    {/* Category Header Card */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0d121c] to-slate-900 border border-amber-600/30 shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 font-cinzel font-bold text-base shadow">
                          {cat.index}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-cinzel text-base md:text-lg font-bold text-white tracking-wide">
                              {cat.name}
                            </h3>
                            <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono text-[11px] font-bold">
                              {catProfiles.length} Profiles on Homepage (Min. 6)
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-0.5">
                            {cat.tag} &bull; Verified Union &amp; Guild Talents
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedCategory(cat.id)}
                        className="self-start sm:self-auto px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-white border border-slate-700 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        <span>Focus On This Craft</span>
                        <span className="text-[10px] font-mono text-slate-400">&rarr;</span>
                      </button>
                    </div>

                    {/* Minimum 6 Profiles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {catProfiles.map((profile) => {
                        const isAuthorized = isProfileAuthorizedForUser(profile.id);

                        return (
                          <ProfileCard
                            key={profile.id}
                            profile={profile}
                            isContactAuthorized={isAuthorized}
                            productionHouseName={
                              loggedInProductionHouse && loggedInProductionHouse.status === 'approved'
                                ? loggedInProductionHouse.name
                                : null
                            }
                            onRequestContact={(p) => setContactRequestTarget(p)}
                            onViewDetails={(p) => setSelectedProfile(p)}
                          />
                        );
                      })}
                    </div>

                    {/* Optional AdSense In-feed Banner between category sections */}
                    {adSenseConfig.showInFeed && (cat.index === 2 || cat.index === 5) && (
                      <div className="pt-2">
                        <GoogleAdSenseBanner
                          slotType="in-feed-native"
                          config={adSenseConfig}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            /* Flat Grid View: When filtering or when Unified Grid is selected */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProfiles.map((profile, index) => {
                const isAuthorized = isProfileAuthorizedForUser(profile.id);

                return (
                  <React.Fragment key={profile.id}>
                    <ProfileCard
                      profile={profile}
                      isContactAuthorized={isAuthorized}
                      productionHouseName={
                        loggedInProductionHouse && loggedInProductionHouse.status === 'approved'
                          ? loggedInProductionHouse.name
                          : null
                      }
                      onRequestContact={(p) => setContactRequestTarget(p)}
                      onViewDetails={(p) => setSelectedProfile(p)}
                    />

                    {/* Inject Native AdSense Sponsored Card after every 4 profiles if enabled */}
                    {adSenseConfig.showInFeed && (index + 1) % 4 === 0 && (
                      <GoogleAdSenseBanner
                        slotType="in-feed-native"
                        config={adSenseConfig}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          )}
        </div>
        </>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-[#06090e] border-t border-slate-800/80 py-10 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="space-y-3 lg:col-span-1">
            <BrandLogo size="md" />
            <p className="text-slate-400 text-xs leading-relaxed">
              24 Crofts is the premier matrimonial-style matchmaking directory for the 24 Crafts of Cinema. Verified profiles, trailer advertising, and admin-authorized contact access.
            </p>
            <p className="font-mono text-amber-400/80 text-[11px]">
              Canonical Domain: https://24crofts.com/
            </p>
          </div>

          {/* Contact & Support Desk (Requested: mail 24croftsindia@gmail.com, phone 7989144860, Hyderabad) */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Contact &amp; Support</span>
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Location:</span>
                  <div className="text-slate-300">Hyderabad, Telangana</div>
                  <div className="text-[11px] text-amber-300/80">Film Nagar / Jubilee Hills</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Contact Number:</span>
                  <div>
                    <a
                      href="tel:7989144860"
                      className="font-mono text-amber-300 hover:text-amber-200 font-bold tracking-wide"
                    >
                      7989144860
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Contact Mail ID:</span>
                  <div>
                    <a
                      href="mailto:24croftsindia@gmail.com"
                      className="font-mono text-amber-300 hover:text-amber-200 break-all text-[11px]"
                    >
                      24croftsindia@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigateToView('contact')}
              className="mt-2 w-full py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Open Contact Page</span>
            </button>
          </div>

          {/* Cinema Crafts */}
          <div>
            <h4 className="font-cinzel text-sm font-bold text-white mb-3">Cinema Crafts</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>1. Pre-Production &amp; Scripting</li>
              <li>2. Production &amp; Administration</li>
              <li>3. Visuals &amp; Art</li>
              <li>4. Sound &amp; Music</li>
              <li>5. Action &amp; Movement</li>
              <li>6. Post-Production</li>
              <li>7. Publicity &amp; Release</li>
            </ul>
          </div>

          {/* Portals & Access */}
          <div>
            <h4 className="font-cinzel text-sm font-bold text-white mb-3">Portals &amp; Access</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => navigateToView('contact')}
                  className="hover:text-amber-300 transition flex items-center gap-1.5 text-left text-amber-300 font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Contact Page (Hyderabad)</span>
                </button>
              </li>
              <li>
                {loggedInMember ? (
                  <button
                    onClick={() => setIsMemberDashboardOpen(true)}
                    className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1.5 transition text-left"
                  >
                    <User className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Member Dashboard ({loggedInMember.id})</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setIsMemberLoginOpen(true)}
                    className="hover:text-amber-300 transition flex items-center gap-1.5 text-left"
                  >
                    <LogIn className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Member Login (Talent Access)</span>
                  </button>
                )}
              </li>
              <li>
                <button
                  onClick={() => setIsAdminOpen(true)}
                  className="hover:text-amber-300 transition flex items-center gap-1.5 text-left"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Admin Management Panel</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsRegisterOpen(true)}
                  className="hover:text-amber-300 transition flex items-center gap-1.5 text-left"
                >
                  <Users className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Register Cinema Profile</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsAdUploadOpen(true)}
                  className="hover:text-amber-300 transition flex items-center gap-1.5 text-left"
                >
                  <Video className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Submit Movie Teaser / Ad</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Cinema Alliances & Industry Hub */}
          <div>
            <h4 className="font-cinzel text-sm font-bold text-white mb-3">Cinema Alliances &amp; Hub</h4>
            <p className="text-slate-400 text-xs mb-3">
              Affiliated network supporting Telugu Film Industry, MAA, TFDA, and South Indian Cine associations in Hyderabad.
            </p>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 space-y-1">
              <div className="text-amber-300 font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Film Nagar &bull; Jubilee Hills</span>
              </div>
              <div className="text-slate-400">Hyderabad, Telangana 500096</div>
              <div className="text-amber-400/80 font-mono text-[10px]">Administrative verification mandatory</div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 text-[11px]">
          <div>&copy; {new Date().getFullYear()} 24 Crofts Cinema &amp; Production Portal. All rights reserved. &bull; Hyderabad Desk: 7989144860</div>
          <div>Domain: https://24crofts.com/</div>
        </div>
      </footer>

      {/* MODALS */}
      {/* 1. Full Profile Detail Modal */}
      {selectedProfile && (
        <ProfileDetailModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
          isContactAuthorized={isProfileAuthorizedForUser(selectedProfile.id)}
          onRequestContact={(p) => setContactRequestTarget(p)}
          onEditProfile={(p) => setEditingProfile(p)}
          isOwner={
            Boolean(loggedInMember && loggedInMember.id === selectedProfile.id) ||
            isAdminAuthenticated
          }
          contactRequests={contactRequests}
          loggedInProductionHouse={loggedInProductionHouse}
          onOpenProductionHouseLogin={() => setIsPHLoginOpen(true)}
          onVerifyPhonePermission={(phone) => {
            setMyRequesterPhone(phone);
            localStorage.setItem('24crofts_my_requester_phone', phone);
            if (!myAuthorizedProfileIds.includes(selectedProfile.id)) {
              const updated = [...myAuthorizedProfileIds, selectedProfile.id];
              setMyAuthorizedProfileIds(updated);
              localStorage.setItem('24crofts_my_authorized_profiles', JSON.stringify(updated));
            }
            return true;
          }}
        />
      )}

      {/* 2. Contact Authorization Request Form Modal */}
      {contactRequestTarget && (
        <ContactRequestModal
          profile={contactRequestTarget}
          onClose={() => setContactRequestTarget(null)}
          onSubmitRequest={handleSubmitContactRequest}
        />
      )}

      {/* 3. Movie Ad & Teaser Upload Modal */}
      {isAdUploadOpen && (
        <MovieAdUploadModal
          onClose={() => setIsAdUploadOpen(false)}
          onSubmitAd={handleSubmitMovieAd}
        />
      )}

      {/* 4. Member Profile Registration Modal */}
      {isRegisterOpen && (
        <RegistrationModal
          onClose={() => setIsRegisterOpen(false)}
          onRegisterSuccess={handleRegisterSuccess}
          existingProfilesCount={profiles.length}
        />
      )}

      {/* 5. Edit Profile Modal */}
      {editingProfile && (
        <EditProfileModal
          profile={editingProfile}
          onClose={() => setEditingProfile(null)}
          onSaveProfile={handleSaveProfile}
        />
      )}

      {/* 6. Admin Authority Portal Modal */}
      {isAdminOpen && (
        <AdminPortalModal
          onClose={() => setIsAdminOpen(false)}
          contactRequests={contactRequests}
          onApproveContact={handleApproveContact}
          onRejectContact={handleRejectContact}
          movieAds={movieAds}
          onApproveAd={handleApproveAd}
          onRejectAd={handleRejectAd}
          profiles={profiles}
          onToggleProfileVerification={handleToggleProfileVerification}
          onResetMemberPassword={handleResetMemberPassword}
          onDeleteProfile={handleDeleteProfile}
          isAuthenticated={isAdminAuthenticated}
          onAdminLogin={() => setIsAdminAuthenticated(true)}
          onAdminLogout={() => setIsAdminAuthenticated(false)}
          adSenseConfig={adSenseConfig}
          onSaveAdSenseConfig={(newCfg) => {
            setAdSenseConfig(newCfg);
            showToast('Google AdSense configuration saved!');
          }}
          onOpenBigRock={() => setIsBigRockOpen(true)}
          productionHouses={productionHouses}
          onApproveProductionHouse={handleApproveProductionHouse}
          onRejectProductionHouse={handleRejectProductionHouse}
          onToggleProductionHouseStatus={handleToggleProductionHouseStatus}
          onDeleteProductionHouse={handleDeleteProductionHouse}
        />
      )}

      {/* 7. Member Login Modal */}
      {isMemberLoginOpen && (
        <MemberLoginModal
          profiles={profiles}
          onClose={() => setIsMemberLoginOpen(false)}
          onLoginSuccess={handleMemberLogin}
          onOpenRegister={() => {
            setIsMemberLoginOpen(false);
            setIsRegisterOpen(true);
          }}
        />
      )}

      {/* 8. Member Dashboard Modal */}
      {isMemberDashboardOpen && loggedInMember && (
        <MemberDashboardModal
          member={loggedInMember}
          contactRequests={contactRequests}
          onClose={() => setIsMemberDashboardOpen(false)}
          onOpenEditProfile={(prof) => {
            setIsMemberDashboardOpen(false);
            setEditingProfile(prof);
          }}
          onOpenViewProfile={(prof) => {
            setIsMemberDashboardOpen(false);
            setSelectedProfile(prof);
          }}
          onOpenAddProfile={() => {
            setIsMemberDashboardOpen(false);
            setIsRegisterOpen(true);
          }}
          onUpdateAvailability={handleUpdateAvailability}
          onLogout={handleMemberLogout}
        />
      )}

      {/* 9. BigRock Deployment Hub Modal */}
      {isBigRockOpen && (
        <BigRockDeploymentModal onClose={() => setIsBigRockOpen(false)} />
      )}

      {/* 10. Production House Registration Modal */}
      {isPHRegisterOpen && (
        <ProductionHouseRegisterModal
          onClose={() => setIsPHRegisterOpen(false)}
          onRegisterSuccess={handleRegisterProductionHouse}
          existingCount={productionHouses.length}
          onOpenLogin={() => {
            setIsPHRegisterOpen(false);
            setIsPHLoginOpen(true);
          }}
        />
      )}

      {/* 11. Production House Login Modal */}
      {isPHLoginOpen && (
        <ProductionHouseLoginModal
          productionHouses={productionHouses}
          onClose={() => setIsPHLoginOpen(false)}
          onLoginSuccess={handleProductionHouseLogin}
          onOpenRegister={() => {
            setIsPHLoginOpen(false);
            setIsPHRegisterOpen(true);
          }}
          onOpenAdminPortal={() => {
            setIsPHLoginOpen(false);
            setIsAdminOpen(true);
          }}
        />
      )}

      {/* 12. Production House Dashboard Modal */}
      {isPHDashboardOpen && loggedInProductionHouse && (
        <ProductionHouseDashboardModal
          productionHouse={loggedInProductionHouse}
          onClose={() => setIsPHDashboardOpen(false)}
          onLogout={handleProductionHouseLogout}
        />
      )}
    </div>
  );
}
