import React from 'react';
import { CRAFT_CATEGORIES, CRAFTS_OF_CINEMA } from '../data/craftsData.ts';
import { CraftCategory } from '../types.ts';
import { Film, Layers, CheckCircle2, ChevronRight } from 'lucide-react';

interface CraftNavigationProps {
  selectedCategory: string | null;
  selectedCraft: string | null;
  onSelectCategory: (category: string | null) => void;
  onSelectCraft: (craftId: string | null) => void;
  profileCountsByCraft: Record<string, number>;
}

export const CraftNavigation: React.FC<CraftNavigationProps> = ({
  selectedCategory,
  selectedCraft,
  onSelectCategory,
  onSelectCraft,
  profileCountsByCraft,
}) => {
  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div>
          <h2 className="font-cinzel text-lg md:text-xl font-bold text-amber-200 flex items-center gap-2">
            <Film className="w-5 h-5 text-amber-400" />
            The 24 Crafts of Cinema
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Browse verified talent categorized across the 7 traditional cinema disciplines
          </p>
        </div>

        {/* Reset / All crafts button */}
        {(selectedCategory || selectedCraft) && (
          <button
            onClick={() => {
              onSelectCategory(null);
              onSelectCraft(null);
            }}
            className="self-start md:self-auto text-xs px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 transition flex items-center gap-1.5"
          >
            <span>Reset Category Filter</span>
          </button>
        )}
      </div>

      {/* 7 Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
        <button
          onClick={() => {
            onSelectCategory(null);
            onSelectCraft(null);
          }}
          className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition flex items-center gap-1.5 ${
            selectedCategory === null && selectedCraft === null
              ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>All 24 Crafts</span>
        </button>

        {CRAFT_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategory(isSelected ? null : cat.id);
                onSelectCraft(null);
              }}
              className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-bold shadow-md'
                  : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-black/30 flex items-center justify-center text-[10px]">
                {cat.index}
              </span>
              <span>{cat.name.split('. ')[1] || cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Subcategory Pills for the Selected Category or All Crafts */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 pt-3">
        {CRAFTS_OF_CINEMA.filter(
          (craft) => !selectedCategory || craft.category === selectedCategory
        ).map((craft) => {
          const isCraftActive = selectedCraft === craft.name;
          const count = profileCountsByCraft[craft.name] || 0;

          return (
            <button
              key={craft.id}
              onClick={() => {
                onSelectCraft(isCraftActive ? null : craft.name);
                if (!selectedCategory) {
                  onSelectCategory(craft.category);
                }
              }}
              className={`text-left p-2.5 rounded-xl border transition-all flex flex-col justify-between ${
                isCraftActive
                  ? 'bg-amber-500/15 border-amber-400 text-amber-200 shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                  : 'bg-slate-800/40 border-slate-800 hover:border-slate-700 hover:bg-slate-800/70 text-slate-300'
              }`}
            >
              <div className="flex items-start justify-between gap-1">
                <span className="text-xs font-bold leading-tight">{craft.name}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-amber-400/90 font-mono">
                  {craft.codePrefix}
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                <span className="truncate text-[10px] text-slate-500">
                  {craft.category.split('. ')[1]?.split(' & ')[0]}
                </span>
                <span className="font-semibold text-amber-300">{count} profiles</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
