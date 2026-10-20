import React, { useState } from 'react';
import { Profile, CraftCategory } from '../types.ts';
import { CRAFT_CATEGORIES, CRAFTS_OF_CINEMA, getUnderSubCategories } from '../data/craftsData.ts';
import { formatProfileId, parseYouTubeVideoId, validateProfileRegistration } from '../utils/craftLogic.ts';
import {
  X,
  Upload,
  Plus,
  Trash2,
  Video,
  Image as ImageIcon,
  CheckCircle2,
  ShieldCheck,
  Film,
  Mail,
  KeyRound,
  AlertCircle,
  Copy,
  Check,
  Lock,
  Camera,
  Sparkles,
  Layers,
  ChevronRight,
  Eye,
  EyeOff,
  User,
} from 'lucide-react';


interface RegistrationModalProps {
  onClose: () => void;
  onRegisterSuccess: (newProfile: Profile) => void;
  existingProfilesCount: number;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  onClose,
  onRegisterSuccess,
  existingProfilesCount,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CraftCategory>('1. Pre-Production & Scripting');
  const [selectedCraft, setSelectedCraft] = useState<string>('Direction');
  const [selectedUnderSubCategory, setSelectedUnderSubCategory] = useState<string>(() => {
    return getUnderSubCategories('Direction')[0] || 'Main Feature Film Director';
  });
  const [customUnderSubCategory, setCustomUnderSubCategory] = useState<string>('');

  // Form Fields
  const [name, setName] = useState('');
  const [stageName, setStageName] = useState('');
  const [gender, setGender] = useState<'Male' | 'Female' | 'Other'>('Male');
  const [age, setAge] = useState<number>(30);
  const [subRole, setSubRole] = useState('');
  const [experienceYears, setExperienceYears] = useState<number>(5);
  const [nativePlace, setNativePlace] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [languagesStr, setLanguagesStr] = useState('Telugu, English, Hindi');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [hasUnionCard, setHasUnionCard] = useState(true);
  const [unionName, setUnionName] = useState('Film Directors Association');
  const [unionCardNumber, setUnionCardNumber] = useState('FDA-2026-902');
  const [bio, setBio] = useState('');

  // Chosen Username & Password fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Helper to suggest or generate strong credentials
  const handleGenerateSuggestion = () => {
    const base = (name.trim() || stageName.trim() || 'cinema')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '')
      .slice(0, 14) || 'talent';
    const randDigits = Math.floor(100 + Math.random() * 900);
    const suggestedUser = `${base}_${randDigits}`;
    const generatedPass = 'Craft@' + Math.random().toString(36).substring(2, 7).toUpperCase() + Math.floor(10 + Math.random() * 90);
    setUsername(suggestedUser);
    setPassword(generatedPass);
    setConfirmPassword(generatedPass);
  };

  // Filmography

  const [projects, setProjects] = useState<{ title: string; year: number; role: string; language: string }[]>([
    { title: '', year: 2025, role: '', language: 'Telugu' },
  ]);

  // Multiple Photos (Upload as Many Photos as You Wish directly from system/mobile gallery)
  const [photos, setPhotos] = useState<string[]>([
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  ]);

  // Multiple YouTube Videos
  const [youtubeUrls, setYoutubeUrls] = useState<{ title: string; url: string }[]>([
    { title: 'Official Showreel 2026', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  ]);
  const [newVideoTitle, setNewVideoTitle] = useState('');
  const [newVideoUrl, setNewVideoUrl] = useState('');

  // Result state
  const [createdProfile, setCreatedProfile] = useState<Profile | null>(null);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [copiedCreds, setCopiedCreds] = useState(false);

  // Crafts matching current category
  const availableCrafts = CRAFTS_OF_CINEMA.filter((c) => c.category === selectedCategory);

  // Under sub-categories matching current craft
  const availableUnderSubCategories = getUnderSubCategories(selectedCraft);

  const handleCategoryChange = (newCat: CraftCategory) => {
    setSelectedCategory(newCat);
    const matchingCrafts = CRAFTS_OF_CINEMA.filter((c) => c.category === newCat);
    if (matchingCrafts[0]) {
      const firstCraft = matchingCrafts[0].name;
      setSelectedCraft(firstCraft);
      const subs = getUnderSubCategories(firstCraft);
      setSelectedUnderSubCategory(subs[0] || '');
      setCustomUnderSubCategory('');
    }
  };

  const handleCraftChange = (newCraft: string) => {
    setSelectedCraft(newCraft);
    const subs = getUnderSubCategories(newCraft);
    setSelectedUnderSubCategory(subs[0] || '');
    setCustomUnderSubCategory('');
  };

  // Direct file upload from System / Mobile Gallery
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      if (!file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotos((prev) => [...prev, result]);
        }
      };
      reader.readAsDataURL(file);
    });
    // Reset file input so user can choose more photos anytime
    e.target.value = '';
  };

  const handleSetPrimaryPhoto = (idx: number) => {
    if (idx === 0) return;
    setPhotos((prev) => {
      const target = prev[idx];
      const rest = prev.filter((_, i) => i !== idx);
      return [target, ...rest];
    });
  };

  const handleRemovePhoto = (idx: number) => {
    setPhotos(photos.filter((_, i) => i !== idx));
  };

  const handleAddVideo = () => {
    if (newVideoUrl.trim()) {
      setYoutubeUrls([
        ...youtubeUrls,
        {
          title: newVideoTitle.trim() || `Cinema Video ${youtubeUrls.length + 1}`,
          url: newVideoUrl.trim(),
        },
      ]);
      setNewVideoTitle('');
      setNewVideoUrl('');
    }
  };

  const handleRemoveVideo = (idx: number) => {
    setYoutubeUrls(youtubeUrls.filter((_, i) => i !== idx));
  };

  const handleAddProject = () => {
    setProjects([...projects, { title: '', year: 2025, role: selectedCraft, language: 'Telugu' }]);
  };

  const handleRemoveProject = (idx: number) => {
    setProjects(projects.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);

    const effectiveUsername = username.trim().toLowerCase() || (
      name.trim().toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '').slice(0, 14) +
      '_' + Math.floor(100 + Math.random() * 900)
    );
    const effectivePassword = password.trim() || ('24C@' + Math.random().toString(36).substring(2, 8).toUpperCase());

    const validation = validateProfileRegistration({
      name,
      category: selectedCategory,
      craft: selectedCraft,
      email,
      contactNumber,
      username: effectiveUsername,
      password: effectivePassword,
      confirmPassword: confirmPassword.trim() ? confirmPassword.trim() : effectivePassword,
    });

    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    // Lookup craft prefix
    const craftMeta = CRAFTS_OF_CINEMA.find((c) => c.name === selectedCraft);
    const prefix = craftMeta ? craftMeta.codePrefix : 'ART';
    const profileId = formatProfileId(prefix, 1000 + existingProfilesCount + 1);

    // Parse YouTube videos
    const parsedVideos = youtubeUrls
      .map((v) => {
        const vidId = parseYouTubeVideoId(v.url);
        return vidId
          ? {
              title: v.title,
              url: v.url,
              videoId: vidId,
              isShowreel: true,
            }
          : null;
      })
      .filter(Boolean) as any[];

    const finalPhotos = photos.length > 0 ? photos : [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    ];

    const effectiveSubRole =
      selectedUnderSubCategory === 'Custom (Specify Below)' || selectedUnderSubCategory === 'Other'
        ? (customUnderSubCategory.trim() || subRole.trim() || selectedCraft)
        : (selectedUnderSubCategory.trim() || subRole.trim() || selectedCraft);

    const newProfile: Profile = {
      id: profileId,
      name: name.trim(),
      stageName: stageName.trim() || undefined,
      gender,
      age: Number(age) || 28,
      category: selectedCategory,
      craft: selectedCraft,
      subRole: effectiveSubRole || undefined,
      experienceYears: Number(experienceYears) || 1,
      nativePlace: nativePlace.trim() || 'Film City',
      currentCity: currentCity.trim() || 'Hyderabad / Mumbai',
      languages: languagesStr.split(',').map((l) => l.trim()).filter(Boolean),
      unionCard: {
        hasCard: hasUnionCard,
        unionName: hasUnionCard ? unionName : undefined,
        cardNumber: hasUnionCard ? unionCardNumber : undefined,
        verified: true,
      },
      bio: bio.trim() || 'Experienced cinema craftsman passionate about visual storytelling and collaboration.',
      keyProjects: projects.filter((p) => p.title.trim().length > 0),
      photos: finalPhotos,
      avatarUrl: finalPhotos[0],
      youtubeVideos: parsedVideos,
      contactNumber: contactNumber.trim(),
      email: email.trim(),
      availability: 'Available',
      featured: false,
      createdAt: new Date().toISOString().split('T')[0],
      isNew: true,
      username: effectiveUsername,
      password: effectivePassword,
    };

    setGeneratedPassword(effectivePassword);
    setCreatedProfile(newProfile);
    onRegisterSuccess(newProfile);
  };

  const handleCopyCredentials = () => {
    if (!createdProfile) return;
    const credText = `24 Crofts Cinema Credentials:\nUnique Cinema ID: ${createdProfile.id}\nUsername: ${createdProfile.username || 'N/A'}\nEmail: ${createdProfile.email}\nPassword: ${generatedPassword}\nLogin Portal: https://24crofts.com/`;
    navigator.clipboard.writeText(credText).then(() => {
      setCopiedCreds(true);
      setTimeout(() => setCopiedCreds(false), 2200);
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0d121c] border border-amber-500/50 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-slate-950 font-bold">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg md:text-xl font-bold text-white">
                Register Your Cinema Craft Profile
              </h3>
              <p className="text-xs text-amber-300/80">
                Matrimonial-Style Portal for the 24 Crafts of Cinema
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

        {/* Success View */}
        {createdProfile ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="font-cinzel text-2xl font-bold text-white">
              Profile Registered Successfully!
            </h4>

            <p className="text-xs md:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              Your Cinema ID and login credentials have been generated and dispatched to your email{' '}
              <strong className="text-amber-300">{createdProfile.email}</strong>. You can now log in and edit your profile at any time.
            </p>

            {/* Credentials Card */}
            <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-950 border border-amber-500/40 text-left space-y-3 shadow-inner">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Registration Credentials
                </span>
                <button
                  onClick={handleCopyCredentials}
                  className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1"
                >
                  {copiedCreds ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Credentials</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-500 block">Unique Cinema ID:</span>
                  <span className="font-mono text-base font-black text-amber-300">
                    {createdProfile.id}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Chosen Username:</span>
                  <span className="font-mono text-base font-bold text-amber-300">
                    @{createdProfile.username || 'user'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Login Password:</span>
                  <span className="font-mono text-base font-bold text-slate-100">
                    {generatedPassword}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Assigned Craft:</span>
                  <span className="font-semibold text-slate-200">
                    {createdProfile.craft}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-500 block">Under Sub-Category:</span>
                  <span className="font-semibold text-amber-300">
                    {createdProfile.subRole || 'General Practitioner'}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-500 block">Contact Protection:</span>
                  <span className="text-emerald-400 font-semibold">Active &bull; Protected by Admin Authorization</span>
                </div>
              </div>


              <div className="pt-2 border-t border-slate-800 flex items-center gap-2 text-[11px] text-slate-400">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Simulation email notification sent to {createdProfile.email}</span>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-center gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition"
              >
                View Live in Directory
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="overflow-y-auto p-6 space-y-5 text-xs">
            {errors.length > 0 && (
              <div className="p-3.5 rounded-xl bg-red-950/70 border border-red-800 text-red-200 space-y-1">
                {errors.map((err, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    <span>{err}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Step 1: Craft Categorization (Category -> Sub-Category -> Under Sub-Category) */}
            <div className="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-slate-800/80 pb-2">
                <h4 className="font-cinzel text-sm font-bold text-amber-300 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">
                    1
                  </span>
                  <span>Select Cinema Discipline (Category &rarr; Sub-Category &rarr; Under Sub-Category)</span>
                </h4>
                <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30 self-start sm:self-auto">
                  3-Tier Craft Selection
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* 1. Category */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    1. Primary Category *
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value as CraftCategory)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                  >
                    {CRAFT_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Sub-Category */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    2. Craft / Sub-Category *
                  </label>
                  <select
                    value={selectedCraft}
                    onChange={(e) => handleCraftChange(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                  >
                    {availableCrafts.map((craft) => (
                      <option key={craft.id} value={craft.name}>
                        {craft.name} ({craft.codePrefix})
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. Under Sub-Category */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    3. Under Sub-Category (Role / Designation) *
                  </label>
                  <select
                    value={selectedUnderSubCategory}
                    onChange={(e) => setSelectedUnderSubCategory(e.target.value)}
                    className="w-full bg-slate-900 border border-amber-500/50 rounded-lg px-3 py-2 text-amber-300 font-medium focus:outline-none focus:border-amber-400"
                  >
                    {availableUnderSubCategories.map((sub) => (
                      <option key={sub} value={sub}>
                        {sub}
                      </option>
                    ))}
                    <option value="Custom (Specify Below)">+ Other / Custom Under Sub-Category</option>
                  </select>
                </div>
              </div>

              {/* Custom Under Sub-Category input if selected */}
              {(selectedUnderSubCategory === 'Custom (Specify Below)' || selectedUnderSubCategory === 'Other') && (
                <div className="pt-1">
                  <label className="block text-amber-300 font-semibold mb-1">
                    Specify Your Custom Under Sub-Category / Designation *
                  </label>
                  <input
                    type="text"
                    required
                    value={customUnderSubCategory}
                    onChange={(e) => setCustomUnderSubCategory(e.target.value)}
                    placeholder="e.g. Associate Virtual Production Technician / Chief Gimbal Operator"
                    className="w-full bg-slate-950 border border-amber-500/60 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              )}

              {/* Visual Confirmation of 3-Tier Hierarchy */}
              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center gap-2 text-xs text-slate-400 flex-wrap">
                <span className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Active Craft Hierarchy:</span>
                <span className="text-slate-300 font-medium">{selectedCategory.replace(/^\d+\.\s*/, '')}</span>
                <span className="text-amber-500">&rarr;</span>
                <span className="text-amber-300 font-semibold">{selectedCraft}</span>
                <span className="text-amber-500">&rarr;</span>
                <span className="text-emerald-400 font-bold">
                  {selectedUnderSubCategory === 'Custom (Specify Below)' || selectedUnderSubCategory === 'Other'
                    ? (customUnderSubCategory || 'Custom Designation')
                    : selectedUnderSubCategory}
                </span>
              </div>
            </div>

            {/* Step 2: Personal & Matrimonial Profile Information */}
            <div className="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <h4 className="font-cinzel text-sm font-bold text-amber-300 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">
                  2
                </span>
                <span>Talent Details &amp; Background</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-slate-300 font-semibold mb-1">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. S. S. Rajamouli / Anupama Rao"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Stage Name / Screen Credit
                  </label>
                  <input
                    type="text"
                    value={stageName}
                    onChange={(e) => setStageName(e.target.value)}
                    placeholder="e.g. Rajamouli"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as any)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Age</label>
                  <input
                    type="number"
                    min={18}
                    max={95}
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Years of Experience
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={65}
                    value={experienceYears}
                    onChange={(e) => setExperienceYears(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Specialty / Genre Focus (Optional)
                  </label>
                  <input
                    type="text"
                    value={subRole}
                    onChange={(e) => setSubRole(e.target.value)}
                    placeholder="e.g. Pan-India Epics / Commercial / Thrillers"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Native Place / Home Town *
                  </label>
                  <input
                    type="text"
                    required
                    value={nativePlace}
                    onChange={(e) => setNativePlace(e.target.value)}
                    placeholder="e.g. Hyderabad, Telangana"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Current Base City
                  </label>
                  <input
                    type="text"
                    value={currentCity}
                    onChange={(e) => setCurrentCity(e.target.value)}
                    placeholder="e.g. Chennai & Hyderabad"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Languages Spoken (comma separated)
                  </label>
                  <input
                    type="text"
                    value={languagesStr}
                    onChange={(e) => setLanguagesStr(e.target.value)}
                    placeholder="e.g. Telugu, Tamil, Hindi, English"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Contact & Email (Credentials sent here) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Email Address * (Credentials will be sent here)
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="director@cinema.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-slate-300 font-semibold flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-amber-400" />
                      <span>Contact Phone Number *</span>
                    </label>
                    <span className="text-[10px] text-amber-400 font-bold bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded">
                      Strictly Masked &amp; Hidden
                    </span>
                  </div>
                  <input
                    type="tel"
                    required
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    placeholder="+91 98480 12345"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono"
                  />
                  <div className="p-2 mt-1 rounded-lg bg-amber-950/30 border border-amber-500/30 flex items-start gap-1.5 text-[11px] text-amber-200/90 leading-relaxed">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Privacy Protected:</strong> Your phone number is hidden and can only be unlocked via admin approval.
                    </span>
                  </div>
                </div>
              </div>

              {/* Choose Username & Password Section */}
              <div className="pt-3 border-t border-slate-800 space-y-3 bg-amber-500/5 -mx-4 px-4 py-3 border-y border-amber-500/20 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <KeyRound className="w-4 h-4 text-amber-400" />
                    <span className="font-cinzel text-xs font-bold text-amber-300 uppercase tracking-wider">
                      Account Login Credentials (Choose Username &amp; Password)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleGenerateSuggestion}
                    className="text-[11px] text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Generate Suggestion</span>
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
                        placeholder="e.g. rajamouli_dir"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono text-xs"
                      />
                      <User className="w-3.5 h-3.5 text-slate-500 absolute right-2.5 top-2.5 pointer-events-none" />
                    </div>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      Log in using this username or your Cinema ID.
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
                      Min 6 characters.
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
                      Must match password.
                    </span>
                  </div>
                </div>
              </div>


              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Professional Bio &amp; Creative Vision
                </label>
                <textarea
                  rows={3}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Detail your film background, cinematic influences, training, and types of projects sought..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>
            </div>

            {/* Step 3: Photos Upload (Direct upload from System or Mobile Gallery - Unlimited) */}
            <div className="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between">
                <h4 className="font-cinzel text-sm font-bold text-amber-300 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">
                    3
                  </span>
                  <span>Photo Gallery (Upload as Many Photos as You Wish)</span>
                </h4>
                <span className="text-[11px] font-mono text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30 font-bold">
                  {photos.length} Photo{photos.length !== 1 ? 's' : ''} in Gallery
                </span>
              </div>

              <p className="text-xs text-slate-400">
                Select photos directly from your system or mobile gallery. No image links needed &mdash; upload as many portfolio pictures, on-set photos, and headshots as you wish!
              </p>

              {/* Direct File Upload Dropzone / Button */}
              <div>
                <input
                  id="gallery-file-upload-input"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <label
                  htmlFor="gallery-file-upload-input"
                  className="w-full p-6 border-2 border-dashed border-amber-500/40 hover:border-amber-400 hover:bg-amber-500/5 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer transition text-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition">
                    <Upload className="w-6 h-6" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold text-amber-300 group-hover:text-amber-200 block">
                      Choose Photos from System or Mobile Gallery
                    </span>
                    <span className="text-xs text-slate-400 block">
                      Upload as many photos as you wish &bull; Tap here to select from gallery (JPG, PNG, WEBP)
                    </span>
                  </div>
                </label>
              </div>

              {/* Gallery Preview & Management */}
              {photos.length > 0 && (
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>The first photo is automatically used as your Main Profile Avatar.</span>
                    <label
                      htmlFor="gallery-file-upload-input"
                      className="text-amber-400 hover:text-amber-300 font-bold cursor-pointer flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add More Photos</span>
                    </label>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
                    {photos.map((url, i) => (
                      <div
                        key={i}
                        className={`relative aspect-square rounded-xl overflow-hidden border-2 group bg-slate-950 ${
                          i === 0 ? 'border-amber-400 shadow-[0_0_12px_rgba(212,175,55,0.4)]' : 'border-slate-700'
                        }`}
                      >
                        <img src={url} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />

                        {/* Primary Badge or Make Avatar Button */}
                        {i === 0 ? (
                          <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 text-[9px] font-black tracking-wider uppercase shadow">
                            ★ Main Avatar
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleSetPrimaryPhoto(i)}
                            className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/80 hover:bg-amber-500 hover:text-slate-950 text-amber-300 text-[9px] font-bold opacity-0 group-hover:opacity-100 transition shadow"
                            title="Set this as main profile avatar"
                          >
                            Make Avatar
                          </button>
                        )}

                        {/* Remove Button */}
                        <button
                          type="button"
                          onClick={() => handleRemovePhoto(i)}
                          className="absolute top-1.5 right-1.5 p-1 rounded-md bg-red-600/90 hover:bg-red-500 text-white opacity-0 group-hover:opacity-100 transition shadow"
                          title="Remove photo"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Step 4: YouTube Video Showreels (Multiple YouTube links requirement) */}
            <div className="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between">
                <h4 className="font-cinzel text-sm font-bold text-amber-300 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">
                    4
                  </span>
                  <span>YouTube Video Showreels &amp; Work Links</span>
                </h4>
                <span className="text-[11px] text-slate-400">{youtubeUrls.length} Video{youtubeUrls.length !== 1 ? 's' : ''} Added</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                <input
                  type="text"
                  value={newVideoTitle}
                  onChange={(e) => setNewVideoTitle(e.target.value)}
                  placeholder="Video Title (e.g. Cinematography Reel 2026)"
                  className="sm:col-span-5 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs"
                />
                <input
                  type="url"
                  value={newVideoUrl}
                  onChange={(e) => setNewVideoUrl(e.target.value)}
                  placeholder="https://youtube.com/watch?v=..."
                  className="sm:col-span-5 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs"
                />
                <button
                  type="button"
                  onClick={handleAddVideo}
                  className="sm:col-span-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-lg text-xs font-bold border border-slate-700 flex items-center justify-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Link</span>
                </button>
              </div>

              {/* Videos list */}
              <div className="space-y-1.5 pt-1">
                {youtubeUrls.map((v, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                    <div className="flex items-center gap-2 truncate">
                      <Video className="w-4 h-4 text-red-500 shrink-0" />
                      <span className="font-bold text-white truncate">{v.title}</span>
                      <span className="text-[11px] text-slate-400 font-mono truncate">{v.url}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveVideo(i)}
                      className="text-red-400 hover:text-red-300 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Form actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5"
              >
                <Film className="w-4 h-4" />
                <span>Complete Registration &amp; Get Cinema ID</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
