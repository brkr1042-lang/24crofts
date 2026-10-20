import React, { useState } from 'react';
import { Profile, CraftCategory } from '../types.ts';
import { parseYouTubeVideoId } from '../utils/craftLogic.ts';
import { CRAFT_CATEGORIES, CRAFTS_OF_CINEMA, getUnderSubCategories } from '../data/craftsData.ts';
import { X, Save, Plus, Trash2, Video, Image as ImageIcon, ShieldCheck, Film, Upload } from 'lucide-react';

interface EditProfileModalProps {
  profile: Profile;
  onClose: () => void;
  onSaveProfile: (updatedProfile: Profile) => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  profile,
  onClose,
  onSaveProfile,
}) => {
  const [name, setName] = useState(profile.name);
  const [stageName, setStageName] = useState(profile.stageName || '');
  const [category, setCategory] = useState<CraftCategory>(profile.category);
  const [craft, setCraft] = useState(profile.craft);
  const [underSubCategory, setUnderSubCategory] = useState(profile.subRole || '');
  const [customUnderSubCategory, setCustomUnderSubCategory] = useState('');
  const [experienceYears, setExperienceYears] = useState(profile.experienceYears);
  const [nativePlace, setNativePlace] = useState(profile.nativePlace);
  const [currentCity, setCurrentCity] = useState(profile.currentCity);
  const [languagesStr, setLanguagesStr] = useState(profile.languages.join(', '));
  const [bio, setBio] = useState(profile.bio);
  const [availability, setAvailability] = useState(profile.availability);
  const [contactNumber, setContactNumber] = useState(profile.contactNumber);

  // Crafts matching current category
  const availableCrafts = CRAFTS_OF_CINEMA.filter((c) => c.category === category);
  const availableUnderSubs = getUnderSubCategories(craft);

  const handleCategoryChange = (newCat: CraftCategory) => {
    setCategory(newCat);
    const matching = CRAFTS_OF_CINEMA.filter((c) => c.category === newCat);
    if (matching[0]) {
      const firstCraft = matching[0].name;
      setCraft(firstCraft);
      const subs = getUnderSubCategories(firstCraft);
      setUnderSubCategory(subs[0] || '');
      setCustomUnderSubCategory('');
    }
  };

  const handleCraftChange = (newCraft: string) => {
    setCraft(newCraft);
    const subs = getUnderSubCategories(newCraft);
    setUnderSubCategory(subs[0] || '');
    setCustomUnderSubCategory('');
  };

  // Photos
  const [photos, setPhotos] = useState<string[]>(profile.photos);

  // YouTube Videos
  const [youtubeVideos, setYoutubeVideos] = useState<{ title: string; url: string }[]>(
    profile.youtubeVideos.map((v) => ({ title: v.title, url: v.url }))
  );
  const [newVideoTitle, setNewVideoTitle] = useState('');
  const [newVideoUrl, setNewVideoUrl] = useState('');

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
    e.target.value = '';
  };

  const handleRemovePhoto = (idx: number) => {
    setPhotos(photos.filter((_, i) => i !== idx));
  };

  const handleAddVideo = () => {
    if (newVideoUrl.trim()) {
      setYoutubeVideos([
        ...youtubeVideos,
        {
          title: newVideoTitle.trim() || `Showreel ${youtubeVideos.length + 1}`,
          url: newVideoUrl.trim(),
        },
      ]);
      setNewVideoTitle('');
      setNewVideoUrl('');
    }
  };

  const handleRemoveVideo = (idx: number) => {
    setYoutubeVideos(youtubeVideos.filter((_, i) => i !== idx));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const parsedVideos = youtubeVideos
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

    const finalPhotos = photos.length > 0 ? photos : profile.photos;

    const effectiveSubRole =
      underSubCategory === 'Custom (Specify Below)' || underSubCategory === 'Other'
        ? (customUnderSubCategory.trim() || profile.subRole || craft)
        : (underSubCategory.trim() || profile.subRole || craft);

    const updated: Profile = {
      ...profile,
      name: name.trim(),
      stageName: stageName.trim() || undefined,
      category,
      craft,
      subRole: effectiveSubRole || undefined,
      experienceYears: Number(experienceYears) || 1,
      nativePlace: nativePlace.trim(),
      currentCity: currentCity.trim(),
      languages: languagesStr.split(',').map((l) => l.trim()).filter(Boolean),
      bio: bio.trim(),
      availability,
      contactNumber: contactNumber.trim(),
      photos: finalPhotos,
      avatarUrl: finalPhotos[0],
      youtubeVideos: parsedVideos,
    };

    onSaveProfile(updated);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0d121c] border border-amber-500/50 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-bold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/40">
              {profile.id}
            </span>
            <h3 className="font-cinzel text-lg font-bold text-white">
              Edit Cinema Profile
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="overflow-y-auto p-6 space-y-4 text-xs">
          {/* Cinema Discipline Hierarchy */}
          <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-cinzel text-xs font-bold text-amber-300">
                Cinema Discipline &amp; Craft Classification
              </span>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-500/30">
                3-Tier Hierarchy
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">1. Category</label>
                <select
                  value={category}
                  onChange={(e) => handleCategoryChange(e.target.value as CraftCategory)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-amber-400"
                >
                  {CRAFT_CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">2. Craft / Sub-Category</label>
                <select
                  value={craft}
                  onChange={(e) => handleCraftChange(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-amber-400"
                >
                  {availableCrafts.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name} ({c.codePrefix})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">3. Under Sub-Category</label>
                <select
                  value={underSubCategory}
                  onChange={(e) => setUnderSubCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-amber-500/40 rounded-lg px-2.5 py-1.5 text-amber-300 focus:outline-none focus:border-amber-400"
                >
                  {availableUnderSubs.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                  <option value="Custom (Specify Below)">+ Other / Custom Under Sub-Category</option>
                </select>
              </div>
            </div>

            {(underSubCategory === 'Custom (Specify Below)' || underSubCategory === 'Other') && (
              <div>
                <label className="block text-amber-300 font-semibold mb-1">
                  Custom Under Sub-Category / Designation
                </label>
                <input
                  type="text"
                  value={customUnderSubCategory}
                  onChange={(e) => setCustomUnderSubCategory(e.target.value)}
                  placeholder="e.g. Associate Virtual Production Technician"
                  className="w-full bg-slate-950 border border-amber-500/60 rounded-lg px-3 py-1.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Stage Name</label>
              <input
                type="text"
                value={stageName}
                onChange={(e) => setStageName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Experience (Years)</label>
              <input
                type="number"
                value={experienceYears}
                onChange={(e) => setExperienceYears(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Availability</label>
              <select
                value={availability}
                onChange={(e) => setAvailability(e.target.value as any)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
              >
                <option value="Available">Available</option>
                <option value="Shooting">Shooting</option>
                <option value="In Discussion">In Discussion</option>
                <option value="Busy">Busy</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Native Place</label>
              <input
                type="text"
                value={nativePlace}
                onChange={(e) => setNativePlace(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Current Base</label>
              <input
                type="text"
                value={currentCity}
                onChange={(e) => setCurrentCity(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Languages (comma separated)</label>
            <input
              type="text"
              value={languagesStr}
              onChange={(e) => setLanguagesStr(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Direct Contact Phone</label>
            <input
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 font-mono"
            />
            <p className="text-[10px] text-slate-400 mt-1">
              Protected by 24 Crofts privacy: Hidden from external visitors unless approved by administrator.
            </p>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Biography</label>
            <textarea
              rows={4}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400 resize-none"
            />
          </div>

          {/* Photo Management - Direct File Upload from System / Mobile Gallery */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <div className="flex items-center justify-between">
              <label className="text-slate-300 font-semibold text-xs">
                Photo Gallery ({photos.length} Photo{photos.length !== 1 ? 's' : ''})
              </label>
              <span className="text-[11px] text-amber-400 font-medium">Upload as Many as You Wish</span>
            </div>

            <div>
              <input
                id="edit-profile-file-upload"
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileUpload}
                className="hidden"
              />
              <label
                htmlFor="edit-profile-file-upload"
                className="w-full py-3 px-4 border-2 border-dashed border-amber-500/40 hover:border-amber-400 hover:bg-amber-500/5 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition text-center group"
              >
                <Upload className="w-4 h-4 text-amber-400 group-hover:scale-110 transition" />
                <span className="text-xs font-bold text-amber-300 group-hover:text-amber-200">
                  Upload Photos from System or Mobile Gallery
                </span>
              </label>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 pt-1">
              {photos.map((p, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-slate-700 group">
                  <img src={p} alt="" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => handleRemovePhoto(i)}
                    className="absolute top-1 right-1 p-1 bg-red-600 rounded text-white opacity-0 group-hover:opacity-100 transition"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* YouTube Videos Management */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <label className="block text-slate-300 font-semibold">YouTube Links ({youtubeVideos.length})</label>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
              <input
                type="text"
                value={newVideoTitle}
                onChange={(e) => setNewVideoTitle(e.target.value)}
                placeholder="Video Title"
                className="sm:col-span-5 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
              />
              <input
                type="url"
                value={newVideoUrl}
                onChange={(e) => setNewVideoUrl(e.target.value)}
                placeholder="YouTube Link"
                className="sm:col-span-5 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
              />
              <button
                type="button"
                onClick={handleAddVideo}
                className="sm:col-span-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-lg font-bold border border-slate-700"
              >
                Add
              </button>
            </div>
            <div className="space-y-1">
              {youtubeVideos.map((v, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-white font-medium truncate">{v.title}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveVideo(i)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
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
              className="px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider shadow flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" />
              <span>Save Profile Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
