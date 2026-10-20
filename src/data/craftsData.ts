import { CraftCategory, CraftSubCategory } from '../types.ts';

export const CRAFT_CATEGORIES: { id: CraftCategory; index: number; name: string; tag: string; codePrefix: string }[] = [
  {
    "id": "1. Director",
    "index": 1,
    "name": "Director",
    "tag": "Direction & Staging",
    "codePrefix": "DIR"
  },
  {
    "id": "2. Story Writer",
    "index": 2,
    "name": "Story Writer",
    "tag": "Concept & Narrative",
    "codePrefix": "STR"
  },
  {
    "id": "3. Screenplay Writer",
    "index": 3,
    "name": "Screenplay Writer",
    "tag": "Scene Structure & Dramaturgy",
    "codePrefix": "SCP"
  },
  {
    "id": "4. Dialogue Writer",
    "index": 4,
    "name": "Dialogue Writer",
    "tag": "Dialogues & Dialect",
    "codePrefix": "DLG"
  },
  {
    "id": "5. Cinematographer (Director of Photography - DOP)",
    "index": 5,
    "name": "Cinematographer (Director of Photography - DOP)",
    "tag": "Camera & Lighting",
    "codePrefix": "DOP"
  },
  {
    "id": "6. Music Director (Composer)",
    "index": 6,
    "name": "Music Director (Composer)",
    "tag": "Songs & BGM Score",
    "codePrefix": "MUS"
  },
  {
    "id": "7. Editor",
    "index": 7,
    "name": "Editor",
    "tag": "Footage Assembly & Color",
    "codePrefix": "EDT"
  },
  {
    "id": "8. Art Director",
    "index": 8,
    "name": "Art Director",
    "tag": "Sets, Props & Visuals",
    "codePrefix": "ART"
  },
  {
    "id": "9. Casting  (Actors / Main Cast)",
    "index": 9,
    "name": "Casting  (Actors / Main Cast)",
    "tag": "Hero, Heroin & Lead Roles",
    "codePrefix": "CST"
  },
  {
    "id": "10. Junior Artists (Background Actors)",
    "index": 10,
    "name": "Junior Artists (Background Actors)",
    "tag": "Crowd & Specialized Extras",
    "codePrefix": "JRA"
  },
  {
    "id": "11. Junior Artist Agents",
    "index": 11,
    "name": "Junior Artist Agents",
    "tag": "Crowd Coordination & Extras Support",
    "codePrefix": "AGT"
  },
  {
    "id": "12. Stunt Director (Action Director)",
    "index": 12,
    "name": "Stunt Director (Action Director)",
    "tag": "Action Choreography & Rigging",
    "codePrefix": "STN"
  },
  {
    "id": "13. Dance Choreographer",
    "index": 13,
    "name": "Dance Choreographer",
    "tag": "Dance Numbers & Group Dancers",
    "codePrefix": "DNC"
  },
  {
    "id": "14. Costume Designer",
    "index": 14,
    "name": "Costume Designer",
    "tag": "Wardrobe & Styling",
    "codePrefix": "COS"
  },
  {
    "id": "15. Makeup Artist",
    "index": 15,
    "name": "Makeup Artist",
    "tag": "Hair, Cosmetics & Prosthetics",
    "codePrefix": "MKP"
  },
  {
    "id": "16. Audiographer (Sound Designer / Sound Department)",
    "index": 16,
    "name": "Audiographer (Sound Designer / Sound Department)",
    "tag": "Sound Mix, Foley & Recording",
    "codePrefix": "SND"
  },
  {
    "id": "17. Dubbing Artist",
    "index": 17,
    "name": "Dubbing Artist",
    "tag": "Voice Acting & Lip-Sync",
    "codePrefix": "DUB"
  },
  {
    "id": "18. Still Photographer",
    "index": 18,
    "name": "Still Photographer",
    "tag": "Unit Publicity & BTS Stills",
    "codePrefix": "PHO"
  },
  {
    "id": "19. Publicity Designer",
    "index": 19,
    "name": "Publicity Designer",
    "tag": "Posters, Teasers & Trailers",
    "codePrefix": "PUB"
  },
  {
    "id": "20. Production Executive",
    "index": 20,
    "name": "Production Executive",
    "tag": "Line & Location Management",
    "codePrefix": "PRD"
  },
  {
    "id": "21. Outdoor Unit Technicians",
    "index": 21,
    "name": "Outdoor Unit Technicians",
    "tag": "Cranes, Jibs & Generators",
    "codePrefix": "OUT"
  },
  {
    "id": "22. Outdoor Lightmen",
    "index": 22,
    "name": "Outdoor Lightmen",
    "tag": "Gaffers, Lamps & Electric Crew",
    "codePrefix": "LGT"
  },
  {
    "id": "23. Studio Workers",
    "index": 23,
    "name": "Studio Workers",
    "tag": "Carpentry, Painting & Construction",
    "codePrefix": "STU"
  },
  {
    "id": "24. Production Assistants / Support Staff",
    "index": 24,
    "name": "Production Assistants / Support Staff",
    "tag": "Runners, Drivers & Set Helpers",
    "codePrefix": "PAS"
  }
];

export const CRAFTS_OF_CINEMA: CraftSubCategory[] = [
  {
    "id": "dir-co-director-1",
    "name": "Co Director",
    "category": "1. Director",
    "categoryIndex": 1,
    "description": "Co Director under Director",
    "codePrefix": "DIR"
  },
  {
    "id": "dir-chief-associate-director-2",
    "name": "Chief Associate Director",
    "category": "1. Director",
    "categoryIndex": 1,
    "description": "Chief Associate Director under Director",
    "codePrefix": "DIR"
  },
  {
    "id": "dir-associate-directors-3",
    "name": "Associate Directors",
    "category": "1. Director",
    "categoryIndex": 1,
    "description": "Associate Directors under Director",
    "codePrefix": "DIR"
  },
  {
    "id": "dir-assistant-directors-ads-4",
    "name": "Assistant Directors (ADs)",
    "category": "1. Director",
    "categoryIndex": 1,
    "description": "Assistant Directors (ADs) under Director",
    "codePrefix": "DIR"
  },
  {
    "id": "dir-continuity-supervisor-script-supervisor-5",
    "name": "Continuity Supervisor (Script Supervisor)",
    "category": "1. Director",
    "categoryIndex": 1,
    "description": "Continuity Supervisor (Script Supervisor) under Director",
    "codePrefix": "DIR"
  },
  {
    "id": "dir-main-feature-film-director-6",
    "name": "Main Feature Film Director",
    "category": "1. Director",
    "categoryIndex": 1,
    "description": "Main Feature Film Director under Director",
    "codePrefix": "DIR"
  },
  {
    "id": "str-concept-developer-1",
    "name": "Concept developer",
    "category": "2. Story Writer",
    "categoryIndex": 2,
    "description": "Concept developer under Story Writer",
    "codePrefix": "STR"
  },
  {
    "id": "str-researcher-2",
    "name": "researcher",
    "category": "2. Story Writer",
    "categoryIndex": 2,
    "description": "researcher under Story Writer",
    "codePrefix": "STR"
  },
  {
    "id": "str-dialog-writer-3",
    "name": "Dialog writer",
    "category": "2. Story Writer",
    "categoryIndex": 2,
    "description": "Dialog writer under Story Writer",
    "codePrefix": "STR"
  },
  {
    "id": "str-narrative-outline-writer-4",
    "name": "narrative outline writer",
    "category": "2. Story Writer",
    "categoryIndex": 2,
    "description": "narrative outline writer under Story Writer",
    "codePrefix": "STR"
  },
  {
    "id": "str-lead-story-writer-5",
    "name": "Lead Story Writer",
    "category": "2. Story Writer",
    "categoryIndex": 2,
    "description": "Lead Story Writer under Story Writer",
    "codePrefix": "STR"
  },
  {
    "id": "scp-scene-structure-writer-1",
    "name": "Scene structure writer",
    "category": "3. Screenplay Writer",
    "categoryIndex": 3,
    "description": "Scene structure writer under Screenplay Writer",
    "codePrefix": "SCP"
  },
  {
    "id": "scp-dramaturg-2",
    "name": "dramaturg",
    "category": "3. Screenplay Writer",
    "categoryIndex": 3,
    "description": "dramaturg under Screenplay Writer",
    "codePrefix": "SCP"
  },
  {
    "id": "scp-lead-screenplay-writer-3",
    "name": "Lead Screenplay Writer",
    "category": "3. Screenplay Writer",
    "categoryIndex": 3,
    "description": "Lead Screenplay Writer under Screenplay Writer",
    "codePrefix": "SCP"
  },
  {
    "id": "scp-screenplay-consultant-4",
    "name": "Screenplay Consultant",
    "category": "3. Screenplay Writer",
    "categoryIndex": 3,
    "description": "Screenplay Consultant under Screenplay Writer",
    "codePrefix": "SCP"
  },
  {
    "id": "dlg-language-translator-1",
    "name": "Language translator",
    "category": "4. Dialogue Writer",
    "categoryIndex": 4,
    "description": "Language translator under Dialogue Writer",
    "codePrefix": "DLG"
  },
  {
    "id": "dlg-idiom-dialect-coach-2",
    "name": "idiom/dialect coach",
    "category": "4. Dialogue Writer",
    "categoryIndex": 4,
    "description": "idiom/dialect coach under Dialogue Writer",
    "codePrefix": "DLG"
  },
  {
    "id": "dlg-lead-dialogue-writer-3",
    "name": "Lead Dialogue Writer",
    "category": "4. Dialogue Writer",
    "categoryIndex": 4,
    "description": "Lead Dialogue Writer under Dialogue Writer",
    "codePrefix": "DLG"
  },
  {
    "id": "dlg-punch-mass-dialogue-specialist-4",
    "name": "Punch & Mass Dialogue Specialist",
    "category": "4. Dialogue Writer",
    "categoryIndex": 4,
    "description": "Punch & Mass Dialogue Specialist under Dialogue Writer",
    "codePrefix": "DLG"
  },
  {
    "id": "dop-camera-operators-1",
    "name": "Camera operators",
    "category": "5. Cinematographer (Director of Photography - DOP)",
    "categoryIndex": 5,
    "description": "Camera operators under Cinematographer (Director of Photography - DOP)",
    "codePrefix": "DOP"
  },
  {
    "id": "dop-focus-pullers-1st-ac-2",
    "name": "focus pullers (1st AC)",
    "category": "5. Cinematographer (Director of Photography - DOP)",
    "categoryIndex": 5,
    "description": "focus pullers (1st AC) under Cinematographer (Director of Photography - DOP)",
    "codePrefix": "DOP"
  },
  {
    "id": "dop-clapper-loaders-2nd-ac-3",
    "name": "clapper loaders (2nd AC)",
    "category": "5. Cinematographer (Director of Photography - DOP)",
    "categoryIndex": 5,
    "description": "clapper loaders (2nd AC) under Cinematographer (Director of Photography - DOP)",
    "codePrefix": "DOP"
  },
  {
    "id": "dop-drone-steadicam-operators-4",
    "name": "drone/steadicam operators",
    "category": "5. Cinematographer (Director of Photography - DOP)",
    "categoryIndex": 5,
    "description": "drone/steadicam operators under Cinematographer (Director of Photography - DOP)",
    "codePrefix": "DOP"
  },
  {
    "id": "dop-director-of-photography-dop-5",
    "name": "Director of Photography (DOP)",
    "category": "5. Cinematographer (Director of Photography - DOP)",
    "categoryIndex": 5,
    "description": "Director of Photography (DOP) under Cinematographer (Director of Photography - DOP)",
    "codePrefix": "DOP"
  },
  {
    "id": "mus-song-composers-1",
    "name": "Song composers",
    "category": "6. Music Director (Composer)",
    "categoryIndex": 6,
    "description": "Song composers under Music Director (Composer)",
    "codePrefix": "MUS"
  },
  {
    "id": "mus-background-score-bgm-arrangers-2",
    "name": "background score (BGM) arrangers",
    "category": "6. Music Director (Composer)",
    "categoryIndex": 6,
    "description": "background score (BGM) arrangers under Music Director (Composer)",
    "codePrefix": "MUS"
  },
  {
    "id": "mus-lyricists-3",
    "name": "lyricists",
    "category": "6. Music Director (Composer)",
    "categoryIndex": 6,
    "description": "lyricists under Music Director (Composer)",
    "codePrefix": "MUS"
  },
  {
    "id": "mus-music-programmers-4",
    "name": "music programmers",
    "category": "6. Music Director (Composer)",
    "categoryIndex": 6,
    "description": "music programmers under Music Director (Composer)",
    "codePrefix": "MUS"
  },
  {
    "id": "mus-music-director-composer-5",
    "name": "Music Director / Composer",
    "category": "6. Music Director (Composer)",
    "categoryIndex": 6,
    "description": "Music Director / Composer under Music Director (Composer)",
    "codePrefix": "MUS"
  },
  {
    "id": "edt-assistant-editors-1",
    "name": "Assistant editors",
    "category": "7. Editor",
    "categoryIndex": 7,
    "description": "Assistant editors under Editor",
    "codePrefix": "EDT"
  },
  {
    "id": "edt-colorists-2",
    "name": "colorists",
    "category": "7. Editor",
    "categoryIndex": 7,
    "description": "colorists under Editor",
    "codePrefix": "EDT"
  },
  {
    "id": "edt-visual-effects-vfx-editors-3",
    "name": "visual effects (VFX) editors",
    "category": "7. Editor",
    "categoryIndex": 7,
    "description": "visual effects (VFX) editors under Editor",
    "codePrefix": "EDT"
  },
  {
    "id": "edt-conform-editors-4",
    "name": "conform editors",
    "category": "7. Editor",
    "categoryIndex": 7,
    "description": "conform editors under Editor",
    "codePrefix": "EDT"
  },
  {
    "id": "edt-principal-film-editor-5",
    "name": "Principal Film Editor",
    "category": "7. Editor",
    "categoryIndex": 7,
    "description": "Principal Film Editor under Editor",
    "codePrefix": "EDT"
  },
  {
    "id": "art-set-designers-1",
    "name": "Set designers",
    "category": "8. Art Director",
    "categoryIndex": 8,
    "description": "Set designers under Art Director",
    "codePrefix": "ART"
  },
  {
    "id": "art-prop-masters-2",
    "name": "prop masters",
    "category": "8. Art Director",
    "categoryIndex": 8,
    "description": "prop masters under Art Director",
    "codePrefix": "ART"
  },
  {
    "id": "art-storyboard-artists-3",
    "name": "storyboard artists",
    "category": "8. Art Director",
    "categoryIndex": 8,
    "description": "storyboard artists under Art Director",
    "codePrefix": "ART"
  },
  {
    "id": "art-graphic-signage-artists-4",
    "name": "graphic/signage artists",
    "category": "8. Art Director",
    "categoryIndex": 8,
    "description": "graphic/signage artists under Art Director",
    "codePrefix": "ART"
  },
  {
    "id": "art-production-designer-art-director-5",
    "name": "Production Designer / Art Director",
    "category": "8. Art Director",
    "categoryIndex": 8,
    "description": "Production Designer / Art Director under Art Director",
    "codePrefix": "ART"
  },
  {
    "id": "cst-hero-1",
    "name": "hero",
    "category": "9. Casting  (Actors / Main Cast)",
    "categoryIndex": 9,
    "description": "hero under Casting  (Actors / Main Cast)",
    "codePrefix": "CST"
  },
  {
    "id": "cst-heroin-2",
    "name": "Heroin",
    "category": "9. Casting  (Actors / Main Cast)",
    "categoryIndex": 9,
    "description": "Heroin under Casting  (Actors / Main Cast)",
    "codePrefix": "CST"
  },
  {
    "id": "cst-character-actors-3",
    "name": "character actors",
    "category": "9. Casting  (Actors / Main Cast)",
    "categoryIndex": 9,
    "description": "character actors under Casting  (Actors / Main Cast)",
    "codePrefix": "CST"
  },
  {
    "id": "cst-child-actors-4",
    "name": "child actors",
    "category": "9. Casting  (Actors / Main Cast)",
    "categoryIndex": 9,
    "description": "child actors under Casting  (Actors / Main Cast)",
    "codePrefix": "CST"
  },
  {
    "id": "cst-negative-rolls-5",
    "name": "Negative Rolls",
    "category": "9. Casting  (Actors / Main Cast)",
    "categoryIndex": 9,
    "description": "Negative Rolls under Casting  (Actors / Main Cast)",
    "codePrefix": "CST"
  },
  {
    "id": "cst-casting-director-6",
    "name": "Casting Director",
    "category": "9. Casting  (Actors / Main Cast)",
    "categoryIndex": 9,
    "description": "Casting Director under Casting  (Actors / Main Cast)",
    "codePrefix": "CST"
  },
  {
    "id": "jra-crowd-actors-1",
    "name": "Crowd actors",
    "category": "10. Junior Artists (Background Actors)",
    "categoryIndex": 10,
    "description": "Crowd actors under Junior Artists (Background Actors)",
    "codePrefix": "JRA"
  },
  {
    "id": "jra-specialized-extras-e-g-police-dancers-in-crowd-2",
    "name": "specialized extras (e.g., police, dancers in crowd)",
    "category": "10. Junior Artists (Background Actors)",
    "categoryIndex": 10,
    "description": "specialized extras (e.g., police, dancers in crowd) under Junior Artists (Background Actors)",
    "codePrefix": "JRA"
  },
  {
    "id": "jra-junior-artist-group-lead-3",
    "name": "Junior Artist Group Lead",
    "category": "10. Junior Artists (Background Actors)",
    "categoryIndex": 10,
    "description": "Junior Artist Group Lead under Junior Artists (Background Actors)",
    "codePrefix": "JRA"
  },
  {
    "id": "agt-crowd-coordinators-and-casting-support-for-extras-1",
    "name": "Crowd coordinators and casting support for extras",
    "category": "11. Junior Artist Agents",
    "categoryIndex": 11,
    "description": "Crowd coordinators and casting support for extras under Junior Artist Agents",
    "codePrefix": "AGT"
  },
  {
    "id": "agt-junior-artist-agent-supplier-2",
    "name": "Junior Artist Agent / Supplier",
    "category": "11. Junior Artist Agents",
    "categoryIndex": 11,
    "description": "Junior Artist Agent / Supplier under Junior Artist Agents",
    "codePrefix": "AGT"
  },
  {
    "id": "agt-union-extras-supplier-3",
    "name": "Union Extras Supplier",
    "category": "11. Junior Artist Agents",
    "categoryIndex": 11,
    "description": "Union Extras Supplier under Junior Artist Agents",
    "codePrefix": "AGT"
  },
  {
    "id": "stn-stunt-coordinators-1",
    "name": "Stunt coordinators",
    "category": "12. Stunt Director (Action Director)",
    "categoryIndex": 12,
    "description": "Stunt coordinators under Stunt Director (Action Director)",
    "codePrefix": "STN"
  },
  {
    "id": "stn-stunt-performers-artists-2",
    "name": "stunt performers/artists",
    "category": "12. Stunt Director (Action Director)",
    "categoryIndex": 12,
    "description": "stunt performers/artists under Stunt Director (Action Director)",
    "codePrefix": "STN"
  },
  {
    "id": "stn-safety-riggers-3",
    "name": "safety riggers",
    "category": "12. Stunt Director (Action Director)",
    "categoryIndex": 12,
    "description": "safety riggers under Stunt Director (Action Director)",
    "codePrefix": "STN"
  },
  {
    "id": "stn-fight-masters-4",
    "name": "fight masters",
    "category": "12. Stunt Director (Action Director)",
    "categoryIndex": 12,
    "description": "fight masters under Stunt Director (Action Director)",
    "codePrefix": "STN"
  },
  {
    "id": "stn-action-director-stunt-master-5",
    "name": "Action Director / Stunt Master",
    "category": "12. Stunt Director (Action Director)",
    "categoryIndex": 12,
    "description": "Action Director / Stunt Master under Stunt Director (Action Director)",
    "codePrefix": "STN"
  },
  {
    "id": "dnc-assistant-choreographers-1",
    "name": "Assistant choreographers",
    "category": "13. Dance Choreographer",
    "categoryIndex": 13,
    "description": "Assistant choreographers under Dance Choreographer",
    "codePrefix": "DNC"
  },
  {
    "id": "dnc-backup-dancers-group-dancers-2",
    "name": "backup dancers/group dancers",
    "category": "13. Dance Choreographer",
    "categoryIndex": 13,
    "description": "backup dancers/group dancers under Dance Choreographer",
    "codePrefix": "DNC"
  },
  {
    "id": "dnc-dance-choreographer-master-3",
    "name": "Dance Choreographer / Master",
    "category": "13. Dance Choreographer",
    "categoryIndex": 13,
    "description": "Dance Choreographer / Master under Dance Choreographer",
    "codePrefix": "DNC"
  },
  {
    "id": "dnc-folk-western-dance-choreographer-4",
    "name": "Folk & Western Dance Choreographer",
    "category": "13. Dance Choreographer",
    "categoryIndex": 13,
    "description": "Folk & Western Dance Choreographer under Dance Choreographer",
    "codePrefix": "DNC"
  },
  {
    "id": "cos-wardrobe-stylists-1",
    "name": "Wardrobe stylists",
    "category": "14. Costume Designer",
    "categoryIndex": 14,
    "description": "Wardrobe stylists under Costume Designer",
    "codePrefix": "COS"
  },
  {
    "id": "cos-costume-assistants-2",
    "name": "costume assistants",
    "category": "14. Costume Designer",
    "categoryIndex": 14,
    "description": "costume assistants under Costume Designer",
    "codePrefix": "COS"
  },
  {
    "id": "cos-tailors-dressers-3",
    "name": "tailors/dressers",
    "category": "14. Costume Designer",
    "categoryIndex": 14,
    "description": "tailors/dressers under Costume Designer",
    "codePrefix": "COS"
  },
  {
    "id": "cos-head-costume-designer-4",
    "name": "Head Costume Designer",
    "category": "14. Costume Designer",
    "categoryIndex": 14,
    "description": "Head Costume Designer under Costume Designer",
    "codePrefix": "COS"
  },
  {
    "id": "mkp-hair-stylists-1",
    "name": "Hair stylists",
    "category": "15. Makeup Artist",
    "categoryIndex": 15,
    "description": "Hair stylists under Makeup Artist",
    "codePrefix": "MKP"
  },
  {
    "id": "mkp-prosthetic-makeup-artists-2",
    "name": "prosthetic makeup artists",
    "category": "15. Makeup Artist",
    "categoryIndex": 15,
    "description": "prosthetic makeup artists under Makeup Artist",
    "codePrefix": "MKP"
  },
  {
    "id": "mkp-body-makeup-artists-3",
    "name": "body makeup artists",
    "category": "15. Makeup Artist",
    "categoryIndex": 15,
    "description": "body makeup artists under Makeup Artist",
    "codePrefix": "MKP"
  },
  {
    "id": "mkp-chief-makeup-artist-4",
    "name": "Chief Makeup Artist",
    "category": "15. Makeup Artist",
    "categoryIndex": 15,
    "description": "Chief Makeup Artist under Makeup Artist",
    "codePrefix": "MKP"
  },
  {
    "id": "snd-production-sound-mixer-1",
    "name": "Production sound mixer",
    "category": "16. Audiographer (Sound Designer / Sound Department)",
    "categoryIndex": 16,
    "description": "Production sound mixer under Audiographer (Sound Designer / Sound Department)",
    "codePrefix": "SND"
  },
  {
    "id": "snd-boom-operators-2",
    "name": "boom operators",
    "category": "16. Audiographer (Sound Designer / Sound Department)",
    "categoryIndex": 16,
    "description": "boom operators under Audiographer (Sound Designer / Sound Department)",
    "codePrefix": "SND"
  },
  {
    "id": "snd-foley-artists-3",
    "name": "Foley artists",
    "category": "16. Audiographer (Sound Designer / Sound Department)",
    "categoryIndex": 16,
    "description": "Foley artists under Audiographer (Sound Designer / Sound Department)",
    "codePrefix": "SND"
  },
  {
    "id": "snd-re-recording-mixers-4",
    "name": "re-recording mixers",
    "category": "16. Audiographer (Sound Designer / Sound Department)",
    "categoryIndex": 16,
    "description": "re-recording mixers under Audiographer (Sound Designer / Sound Department)",
    "codePrefix": "SND"
  },
  {
    "id": "snd-dubbing-engineers-5",
    "name": "dubbing engineers",
    "category": "16. Audiographer (Sound Designer / Sound Department)",
    "categoryIndex": 16,
    "description": "dubbing engineers under Audiographer (Sound Designer / Sound Department)",
    "codePrefix": "SND"
  },
  {
    "id": "snd-audiographer-sound-designer-6",
    "name": "Audiographer / Sound Designer",
    "category": "16. Audiographer (Sound Designer / Sound Department)",
    "categoryIndex": 16,
    "description": "Audiographer / Sound Designer under Audiographer (Sound Designer / Sound Department)",
    "codePrefix": "SND"
  },
  {
    "id": "dub-voice-actors-for-lead-and-supporting-characters-1",
    "name": "Voice actors for lead and supporting characters",
    "category": "17. Dubbing Artist",
    "categoryIndex": 17,
    "description": "Voice actors for lead and supporting characters under Dubbing Artist",
    "codePrefix": "DUB"
  },
  {
    "id": "dub-lip-sync-supervisors-2",
    "name": "lip-sync supervisors",
    "category": "17. Dubbing Artist",
    "categoryIndex": 17,
    "description": "lip-sync supervisors under Dubbing Artist",
    "codePrefix": "DUB"
  },
  {
    "id": "dub-lead-dubbing-voice-actor-3",
    "name": "Lead Dubbing Voice Actor",
    "category": "17. Dubbing Artist",
    "categoryIndex": 17,
    "description": "Lead Dubbing Voice Actor under Dubbing Artist",
    "codePrefix": "DUB"
  },
  {
    "id": "pho-unit-publicity-photographers-1",
    "name": "Unit publicity photographers",
    "category": "18. Still Photographer",
    "categoryIndex": 18,
    "description": "Unit publicity photographers under Still Photographer",
    "codePrefix": "PHO"
  },
  {
    "id": "pho-behind-the-scenes-bts-shooters-2",
    "name": "behind-the-scenes (BTS) shooters",
    "category": "18. Still Photographer",
    "categoryIndex": 18,
    "description": "behind-the-scenes (BTS) shooters under Still Photographer",
    "codePrefix": "PHO"
  },
  {
    "id": "pho-first-look-poster-stills-specialist-3",
    "name": "First Look & Poster Stills Specialist",
    "category": "18. Still Photographer",
    "categoryIndex": 18,
    "description": "First Look & Poster Stills Specialist under Still Photographer",
    "codePrefix": "PHO"
  },
  {
    "id": "pub-poster-designers-1",
    "name": "Poster designers",
    "category": "19. Publicity Designer",
    "categoryIndex": 19,
    "description": "Poster designers under Publicity Designer",
    "codePrefix": "PUB"
  },
  {
    "id": "pub-teaser-trailer-editors-2",
    "name": "teaser/trailer editors",
    "category": "19. Publicity Designer",
    "categoryIndex": 19,
    "description": "teaser/trailer editors under Publicity Designer",
    "codePrefix": "PUB"
  },
  {
    "id": "pub-digital-marketing-asset-creators-3",
    "name": "digital marketing asset creators",
    "category": "19. Publicity Designer",
    "categoryIndex": 19,
    "description": "digital marketing asset creators under Publicity Designer",
    "codePrefix": "PUB"
  },
  {
    "id": "pub-head-publicity-designer-4",
    "name": "Head Publicity Designer",
    "category": "19. Publicity Designer",
    "categoryIndex": 19,
    "description": "Head Publicity Designer under Publicity Designer",
    "codePrefix": "PUB"
  },
  {
    "id": "prd-line-producers-1",
    "name": "Line producers",
    "category": "20. Production Executive",
    "categoryIndex": 20,
    "description": "Line producers under Production Executive",
    "codePrefix": "PRD"
  },
  {
    "id": "prd-production-managers-2",
    "name": "production managers",
    "category": "20. Production Executive",
    "categoryIndex": 20,
    "description": "production managers under Production Executive",
    "codePrefix": "PRD"
  },
  {
    "id": "prd-location-scouts-managers-3",
    "name": "location scouts/managers",
    "category": "20. Production Executive",
    "categoryIndex": 20,
    "description": "location scouts/managers under Production Executive",
    "codePrefix": "PRD"
  },
  {
    "id": "prd-accountants-4",
    "name": "accountants",
    "category": "20. Production Executive",
    "categoryIndex": 20,
    "description": "accountants under Production Executive",
    "codePrefix": "PRD"
  },
  {
    "id": "prd-executive-producer-5",
    "name": "Executive Producer",
    "category": "20. Production Executive",
    "categoryIndex": 20,
    "description": "Executive Producer under Production Executive",
    "codePrefix": "PRD"
  },
  {
    "id": "out-camera-support-technicians-1",
    "name": "Camera support technicians",
    "category": "21. Outdoor Unit Technicians",
    "categoryIndex": 21,
    "description": "Camera support technicians under Outdoor Unit Technicians",
    "codePrefix": "OUT"
  },
  {
    "id": "out-generator-operators-2",
    "name": "generator operators",
    "category": "21. Outdoor Unit Technicians",
    "categoryIndex": 21,
    "description": "generator operators under Outdoor Unit Technicians",
    "codePrefix": "OUT"
  },
  {
    "id": "out-crane-jib-operators-3",
    "name": "crane/jib operators",
    "category": "21. Outdoor Unit Technicians",
    "categoryIndex": 21,
    "description": "crane/jib operators under Outdoor Unit Technicians",
    "codePrefix": "OUT"
  },
  {
    "id": "out-outdoor-unit-supervisor-4",
    "name": "Outdoor Unit Supervisor",
    "category": "21. Outdoor Unit Technicians",
    "categoryIndex": 21,
    "description": "Outdoor Unit Supervisor under Outdoor Unit Technicians",
    "codePrefix": "OUT"
  },
  {
    "id": "lgt-gaffers-1",
    "name": "Gaffers",
    "category": "22. Outdoor Lightmen",
    "categoryIndex": 22,
    "description": "Gaffers under Outdoor Lightmen",
    "codePrefix": "LGT"
  },
  {
    "id": "lgt-best-boy-electric-2",
    "name": "best boy electric",
    "category": "22. Outdoor Lightmen",
    "categoryIndex": 22,
    "description": "best boy electric under Outdoor Lightmen",
    "codePrefix": "LGT"
  },
  {
    "id": "lgt-lamp-operators-3",
    "name": "lamp operators",
    "category": "22. Outdoor Lightmen",
    "categoryIndex": 22,
    "description": "lamp operators under Outdoor Lightmen",
    "codePrefix": "LGT"
  },
  {
    "id": "lgt-grip-crew-4",
    "name": "grip crew",
    "category": "22. Outdoor Lightmen",
    "categoryIndex": 22,
    "description": "grip crew under Outdoor Lightmen",
    "codePrefix": "LGT"
  },
  {
    "id": "lgt-chief-lighting-technician-5",
    "name": "Chief Lighting Technician",
    "category": "22. Outdoor Lightmen",
    "categoryIndex": 22,
    "description": "Chief Lighting Technician under Outdoor Lightmen",
    "codePrefix": "LGT"
  },
  {
    "id": "stu-carpenters-1",
    "name": "Carpenters",
    "category": "23. Studio Workers",
    "categoryIndex": 23,
    "description": "Carpenters under Studio Workers",
    "codePrefix": "STU"
  },
  {
    "id": "stu-painters-2",
    "name": "painters",
    "category": "23. Studio Workers",
    "categoryIndex": 23,
    "description": "painters under Studio Workers",
    "codePrefix": "STU"
  },
  {
    "id": "stu-moulders-3",
    "name": "moulders",
    "category": "23. Studio Workers",
    "categoryIndex": 23,
    "description": "moulders under Studio Workers",
    "codePrefix": "STU"
  },
  {
    "id": "stu-construction-crew-4",
    "name": "construction crew",
    "category": "23. Studio Workers",
    "categoryIndex": 23,
    "description": "construction crew under Studio Workers",
    "codePrefix": "STU"
  },
  {
    "id": "stu-light-set-builders-5",
    "name": "light/set builders",
    "category": "23. Studio Workers",
    "categoryIndex": 23,
    "description": "light/set builders under Studio Workers",
    "codePrefix": "STU"
  },
  {
    "id": "stu-studio-master-builder-6",
    "name": "Studio Master Builder",
    "category": "23. Studio Workers",
    "categoryIndex": 23,
    "description": "Studio Master Builder under Studio Workers",
    "codePrefix": "STU"
  },
  {
    "id": "pas-production-runners-1",
    "name": "Production runners",
    "category": "24. Production Assistants / Support Staff",
    "categoryIndex": 24,
    "description": "Production runners under Production Assistants / Support Staff",
    "codePrefix": "PAS"
  },
  {
    "id": "pas-cinema-drivers-2",
    "name": "cinema drivers",
    "category": "24. Production Assistants / Support Staff",
    "categoryIndex": 24,
    "description": "cinema drivers under Production Assistants / Support Staff",
    "codePrefix": "PAS"
  },
  {
    "id": "pas-set-helpers-3",
    "name": "set helpers",
    "category": "24. Production Assistants / Support Staff",
    "categoryIndex": 24,
    "description": "set helpers under Production Assistants / Support Staff",
    "codePrefix": "PAS"
  },
  {
    "id": "pas-and-production-women-sanitation-housekeeping-on-set-4",
    "name": "and production women (sanitation/housekeeping on set)",
    "category": "24. Production Assistants / Support Staff",
    "categoryIndex": 24,
    "description": "and production women (sanitation/housekeeping on set) under Production Assistants / Support Staff",
    "codePrefix": "PAS"
  },
  {
    "id": "pas-on-set-production-assistant-5",
    "name": "On-Set Production Assistant",
    "category": "24. Production Assistants / Support Staff",
    "categoryIndex": 24,
    "description": "On-Set Production Assistant under Production Assistants / Support Staff",
    "codePrefix": "PAS"
  }
];

export const UNDER_SUB_CATEGORIES: Record<string, string[]> = {
  "Co Director": [
    "Feature Film Co-Director",
    "Commercials Co-Director",
    "Second Unit Co-Director",
    "Creative Associate"
  ],
  "Chief Associate Director": [
    "1st Associate Director",
    "Script & Schedule Chief AD",
    "Set Coordination Lead",
    "Technical Planning Lead"
  ],
  "Associate Directors": [
    "Dramatic Scene Associate",
    "Action Unit Associate",
    "Crowd Sequence Associate",
    "Post-Sync Associate"
  ],
  "Assistant Directors (ADs)": [
    "1st Assistant Director (1st AD)",
    "2nd Assistant Director (2nd AD)",
    "3rd Assistant Director (3rd AD)",
    "Clapper & Continuity AD"
  ],
  "Continuity Supervisor (Script Supervisor)": [
    "Script Supervisor / Continuity Director",
    "Digital Clapper & Take Logger",
    "Scene Continuity Specialist",
    "Wardrobe & Prop Continuity"
  ],
  "Main Feature Film Director": [
    "Independent Feature Director",
    "Commercial & Music Video Director",
    "Documentary & Web Series Director",
    "Pan-India Vision Director"
  ],
  "Concept developer": [
    "High-Concept Pitch Developer",
    "World-Building & Lore Specialist",
    "Mythological & Fantasy World Developer",
    "Franchise IP Architect"
  ],
  "researcher": [
    "Historical & Period Film Researcher",
    "Crime & Forensic Script Researcher",
    "Biographical Drama Researcher",
    "Regional Culture & Dialect Researcher"
  ],
  "Dialog writer": [
    "Punch & Mass Dialogues",
    "Emotional Drama Dialogues",
    "Comedy Sequence Dialogues",
    "Philosophy & Poetry Dialogues"
  ],
  "narrative outline writer": [
    "Treatment & Beat-Sheet Specialist",
    "Non-Linear Narrative Outline Writer",
    "Episodic Series Outline Writer",
    "Plot Architect"
  ],
  "Lead Story Writer": [
    "Original Story Creator",
    "Story Consultant / Story Doctor",
    "Collaborative Story Lead",
    "Novel-to-Screenplay Adapter"
  ],
  "Scene structure writer": [
    "Three-Act Structure Specialist",
    "Non-Linear & Multi-POV Specialist",
    "Pacing & Suspense Architect",
    "Screenplay Sequence Polish"
  ],
  "dramaturg": [
    "Dramatic Conflict Consultant",
    "Character Arc & Motivation Analyst",
    "Theatrical & Script Consultant",
    "Subtext & Emotional Beat Specialist"
  ],
  "Lead Screenplay Writer": [
    "Principal Screenwriter",
    "Co-Screenwriter",
    "Adaptation Screenwriter",
    "Commissioned Script Specialist"
  ],
  "Screenplay Consultant": [
    "Senior Script Doctor",
    "Commercial Punch-Up Consultant",
    "Third-Act Climax Specialist",
    "Production Draft Evaluator"
  ],
  "Language translator": [
    "Telugu-to-Tamil Translation",
    "Telugu-to-Hindi Translation",
    "English-to-Telugu Subtitles & Dub Script",
    "Multilingual Script Adapter"
  ],
  "idiom/dialect coach": [
    "Telangana Dialect Coach (Hyderabad/Warangal)",
    "Rayalaseema Dialect Coach (Cuddapah/Kurnool)",
    "Uttarandhra Coastal Dialect Coach",
    "Ancient / Classical Sanskrit-Telugu Coach"
  ],
  "Lead Dialogue Writer": [
    "Feature Film Dialogue Writer",
    "Series Dialogue Lead",
    "Historical & Royal Dialogue Writer",
    "Slang & Street Lingo Specialist"
  ],
  "Punch & Mass Dialogue Specialist": [
    "Hero Mass Punch Lines",
    "Villain Counter-Punch Dialogues",
    "Climax Face-Off Dialogues",
    "Trailer Hook-Line Specialist"
  ],
  "Camera operators": [
    "A-Camera Operator",
    "B-Camera Operator",
    "Handheld & Action Camera Specialist",
    "High-Speed Phantom Operator"
  ],
  "focus pullers (1st AC)": [
    "Senior 1st AC / Focus Puller",
    "Wireless Focus (Arri/Preston) Specialist",
    "Anamorphic & Prime Lens Puller",
    "Night & Low-Light Focus Specialist"
  ],
  "clapper loaders (2nd AC)": [
    "2nd AC / Clapper Loader",
    "Digital Imaging Technician (DIT) Liaison",
    "Camera Department Log Keeper",
    "Mag & Lens Prep Assistant"
  ],
  "drone/steadicam operators": [
    "Steadicam / Trinity Rig Operator",
    "FPV Racing Drone Pilot",
    "Heavy-Lifter Cinema Drone Pilot",
    "Gimbal / Ronin 2 Specialist"
  ],
  "Director of Photography (DOP)": [
    "Feature Film DoP",
    "Commercials & Music Video DoP",
    "Lighting Designer & Vision Director",
    "Virtual Production & LED Volume DoP"
  ],
  "Song composers": [
    "Lead Melody Composer",
    "Folk & Mass Track Composer",
    "Romantic & Soul Ballad Specialist",
    "Theme Song Creator"
  ],
  "background score (BGM) arrangers": [
    "Orchestral Score Arranger",
    "Electronic / Synth Score Designer",
    "Choral & Acoustic Arranger",
    "Action & Horror Stinger Specialist"
  ],
  "lyricists": [
    "Traditional Telugu Classical Lyricist",
    "Mass & Folk Lyricist",
    "Romantic & Contemporary Songwriter",
    "Hook-Phrase & Rhyme Architect"
  ],
  "music programmers": [
    "Synthesizer & Beat Programmer",
    "Live Acoustic Rhythm Programmer",
    "DAW & MIDI Specialist (Logic/ProTools)",
    "Sound Synthesis & Sample Crafter"
  ],
  "Music Director / Composer": [
    "Lead Music Director",
    "Film Soundtrack Producer",
    "Dolby Atmos Music Mix Supervisor",
    "Independent Recording Artist"
  ],
  "Assistant editors": [
    "1st Assistant Editor / Sync Lead",
    "Assembly Editor",
    "Project Organization & Bin Manager",
    "Offline-to-Online Conform Lead"
  ],
  "colorists": [
    "Senior DI Colorist (DaVinci Resolve)",
    "Look Development Specialist",
    "HDR / Dolby Vision Mastering Colorist",
    "Basegrade & Shot-Matching Artist"
  ],
  "visual effects (VFX) editors": [
    "VFX Plate Conform Editor",
    "Compositing Preview Editor",
    "CGI Version Tracking Editor",
    "Stereo 3D & Retime Specialist"
  ],
  "conform editors": [
    "Online Conform Editor",
    "Mastering & Delivery Specialist",
    "DCP & Broadcast QC Lead",
    "Audio-Visual Sync Conform Lead"
  ],
  "Principal Film Editor": [
    "Feature Film Editor",
    "Theatrical Trailer Editor",
    "Rhythm & Narrative Cutting Specialist",
    "Director Collaboration Lead"
  ],
  "Set designers": [
    "Architectural Set Designer",
    "CAD & 3D Pre-Vis Set Modeler",
    "Period & Mythological Set Designer",
    "Sci-Fi & Cyberpunk Environment Designer"
  ],
  "prop masters": [
    "Hero Prop Fabricator",
    "Vintage & Antique Prop Specialist",
    "Weapon & Armory Prop Master",
    "Breakaway & Stunt Prop Specialist"
  ],
  "storyboard artists": [
    "Action Sequence Storyboarder",
    "Concept Sketch Artist",
    "Animatic Visualizer",
    "Keyframe Illustrator"
  ],
  "graphic/signage artists": [
    "Fictional Brand & Logo Designer",
    "Newspaper & Document Prop Crafter",
    "Neon & Commercial Signage Designer",
    "Set Typography & Decals"
  ],
  "Production Designer / Art Director": [
    "Head Production Designer",
    "Supervising Art Director",
    "Location Set Dresser",
    "Construction & Budget Art Lead"
  ],
  "hero": [
    "Action / Mass Lead Hero",
    "Romantic / Dramatic Lead Hero",
    "Pan-India Hero Protagonist",
    "Method Acting Specialist"
  ],
  "Heroin": [
    "Leading Heroine / Female Protagonist",
    "Character-Driven Female Lead",
    "Dance & Glamour Protagonist",
    "Action Heroine"
  ],
  "character actors": [
    "Father / Mother Emotional Roles",
    "Police Officer / Detective Roles",
    "Comedy & Spoof Artist",
    "Politician / King Character Roles"
  ],
  "child actors": [
    "Child Protagonist (Ages 5-10)",
    "Junior Hero / Heroine Flashback Role",
    "Teen Character Artist (Ages 11-16)",
    "Emotional & Dialogue Prodigy"
  ],
  "Negative Rolls": [
    "Main Villain / Antagonist",
    "Corrupt Official / Crime Lord",
    "Psychological Villain / Anti-Hero",
    "Ruthless Henchman / Sub-Villain"
  ],
  "Casting Director": [
    "Lead Casting Director",
    "Associate Casting Director",
    "Audition Lead & Screen Test Director",
    "Talent Discovery Lead"
  ],
  "Crowd actors": [
    "Courtroom / Audience Crowd Actor",
    "Wedding & Party Celebration Extra",
    "Village & Street Passerby",
    "Office & Corporate Extra"
  ],
  "specialized extras (e.g., police, dancers in crowd)": [
    "Police & Commando Uniform Extra",
    "Nightclub / Festival Crowd Dancer",
    "Doctor & Hospital Staff Extra",
    "Armed Bodyguard Extra"
  ],
  "Junior Artist Group Lead": [
    "Group Captain (Male Extras)",
    "Group Captain (Female Extras)",
    "Floor Coordination Lead",
    "Costume & Call Sheet Extra Lead"
  ],
  "Crowd coordinators and casting support for extras": [
    "100+ Crowd Batch Coordinator",
    "Specialized Foreign / International Extras Agent",
    "Traditional Cultural Extras Coordinator",
    "Emergency Replacement Extras Agent"
  ],
  "Junior Artist Agent / Supplier": [
    "Registered Film Union Agent",
    "Hyderabad Film City Supplier",
    "Outdoor Shoot Extras Provider",
    "Welfare & Daily Wages Coordinator"
  ],
  "Union Extras Supplier": [
    "Telugu Cine Extras Union Licensed Supplier",
    "Catering & Transport Liaison for Extras",
    "Wardrobe Sizing Coordinator for Extras",
    "Shift & Overtime Supervisor"
  ],
  "Stunt coordinators": [
    "Safety & Logistics Coordinator",
    "Wire-Work & Harness Coordinator",
    "High-Fall Airbag Coordinator",
    "Pyrotechnics & Blast Action Coordinator"
  ],
  "stunt performers/artists": [
    "Cine Fighter / Action Performer",
    "Vehicle & Bike Crash Stunt Double",
    "Martial Arts / Hand-to-Hand Fighter",
    "Fire Burn & High-Impact Stunt Artist"
  ],
  "safety riggers": [
    "Chief Rigging Master",
    "Truss & Cable Flying Rigger",
    "Anchor & Counterweight Specialist",
    "Certified Safety Equipment Inspector"
  ],
  "fight masters": [
    "Senior Action Director (Fight Master)",
    "Associate Fight Master",
    "Weapon Combat Choreographer",
    "Car Chase & Drift Choreographer"
  ],
  "Action Director / Stunt Master": [
    "Head Action Director",
    "Mass Action Stylist",
    "Concept Pre-Viz Action Director",
    "Pan-India Action Specialist"
  ],
  "Assistant choreographers": [
    "1st Assistant Dance Director",
    "Step Rehearsal Lead",
    "Camera Angle Dance Associate",
    "Costume & Prop Dance Assistant"
  ],
  "backup dancers/group dancers": [
    "Lead Group Dancer (Male)",
    "Lead Group Dancer (Female)",
    "Western / Hip-Hop Cine Dancer",
    "Folk & Regional Cine Dancer"
  ],
  "Dance Choreographer / Master": [
    "Celebrity Dance Master",
    "Mass Beat Choreographer",
    "Classical & Semi-Classical Choreographer",
    "Montage & Lyrical Video Choreographer"
  ],
  "Folk & Western Dance Choreographer": [
    "Teenmaar / Telangana Folk Choreographer",
    "Bollywood / Tollywood Commercial Dance",
    "Contemporary / Latin Specialist",
    "Flashmob & Festival Choreographer"
  ],
  "Wardrobe stylists": [
    "Celebrity Lead Stylist",
    "Character Mood-Board Stylist",
    "Contemporary Fashion Stylist",
    "Red Carpet & Press Tour Stylist"
  ],
  "costume assistants": [
    "On-Set Wardrobe Assistant",
    "Continuity & Look-Book Assistant",
    "Costume Aging & Distress Specialist",
    "Accessories & Jewelry Coordinator"
  ],
  "tailors/dressers": [
    "Master Cine Tailor (Cutter)",
    "Period Armor & Fabric Tailor",
    "On-Set Emergency Dresser",
    "Embroidery & Handloom Specialist"
  ],
  "Head Costume Designer": [
    "Chief Costume Designer",
    "Period & Mythological Costume Specialist",
    "Sci-Fi & Fantasy Wardrobe Head",
    "Bulk Uniform & Crowd Wardrobe Head"
  ],
  "Hair stylists": [
    "Senior Hair Stylist / Hair Designer",
    "Period Wig & Hairpiece Specialist",
    "Men's Grooming & Beard Stylist",
    "Blowout & Extensions Specialist"
  ],
  "prosthetic makeup artists": [
    "Special Effects (SFX) Prosthetics Lead",
    "Silicone Creature & Wound Sculptor",
    "Aging & Character Transformation Artist",
    "Bald Cap & Facial Appliance Specialist"
  ],
  "body makeup artists": [
    "Airbrush Body Painter",
    "Tattoo & Scar Simulation Artist",
    "Tan & Sweat Effect Specialist",
    "Fitness & Muscle Shading Artist"
  ],
  "Chief Makeup Artist": [
    "Lead Celebrity Makeup Artist",
    "HD & 8K Cinema Makeup Specialist",
    "Commercial & Glamour Makeup Head",
    "Character Makeup Supervisor"
  ],
  "Production sound mixer": [
    "Location Sound Mixer",
    "Multitrack Sound Recordist",
    "Wireless Mic & Frequency Coordinator",
    "Acoustic Monitoring Specialist"
  ],
  "boom operators": [
    "Senior Boom Operator",
    "Action Sequence Boom Specialist",
    "Hidden Mic Rigging Specialist",
    "Plant Mic & Ambient Capture Specialist"
  ],
  "Foley artists": [
    "Lead Foley Performer (Footsteps/Cloth)",
    "Foley Sound Recordist / Engineer",
    "Custom Prop Foley Sound Crafter",
    "Atmosphere & Foley Editor"
  ],
  "re-recording mixers": [
    "Dolby Atmos Certified Mixer",
    "7.1 / 5.1 Theatrical Mix Master",
    "Dialogue Balance & Music Mix Lead",
    "Broadcast & Streaming Sound Mixer"
  ],
  "dubbing engineers": [
    "Dubbing Recording Engineer",
    "Vocal Tuning & ADR Recordist",
    "Dialogue Cleanup (iZotope RX) Specialist",
    "Multitrack Vocal Session Lead"
  ],
  "Audiographer / Sound Designer": [
    "Head Sound Designer",
    "Cinematic Atmosphere Creator",
    "Sound FX Library Developer",
    "Post-Sound Supervising Editor"
  ],
  "Voice actors for lead and supporting characters": [
    "Lead Hero Voiceover Actor",
    "Lead Heroine Voiceover Artist",
    "Character Role Voice Actor",
    "Animated Character Voiceover"
  ],
  "lip-sync supervisors": [
    "Telugu Lip-Sync Supervisor",
    "ADR Voice Director",
    "Phonetic & Breath Match Specialist",
    "Dubbing Continuity Officer"
  ],
  "Lead Dubbing Voice Actor": [
    "Multi-Language Dubbing Star",
    "Villain / Deep Baritone Voice Specialist",
    "Comedy & Dialect Voice Modulator",
    "Documentary & Teaser Voice Artist"
  ],
  "Unit publicity photographers": [
    "Official Unit Stills Photographer",
    "First Look & Poster Stills Specialist",
    "High-Speed Action Stills Shooter",
    "Candid On-Set Stills Photographer"
  ],
  "behind-the-scenes (BTS) shooters": [
    "BTS Video & Stills Documentarian",
    "Director & Cast Work-Flow Chronicler",
    "Social Media BTS Clip Specialist",
    "Making-of-the-Movie Photographer"
  ],
  "First Look & Poster Stills Specialist": [
    "Studio Lighting Stills Master",
    "Character Portrait Photographer",
    "Press Kit & Magazine Cover Shooter",
    "Digital Medium-Format Specialist"
  ],
  "Poster designers": [
    "Key Art / Theatrical Poster Designer",
    "Character Reveal Poster Specialist",
    "Concept Title Announcement Poster",
    "Festival & Award Poster Designer"
  ],
  "teaser/trailer editors": [
    "Theatrical Trailer Cutter",
    "15-Second Social Teaser Editor",
    "Motion Poster & Glitch Editor",
    "Audio-Visual Punch-Cut Editor"
  ],
  "digital marketing asset creators": [
    "Instagram Reel & YouTube Shorts Creator",
    "Motion Graphic Title Animator",
    "Digital Billboard & Hoarding Designer",
    "Countdown & Release Banner Specialist"
  ],
  "Head Publicity Designer": [
    "Creative Marketing Campaign Director",
    "Film Logo & Brand Identity Architect",
    "Merchandise & Promotion Visualizer",
    "Print & Theatrical Standee Lead"
  ],
  "Line producers": [
    "Feature Film Line Producer",
    "Foreign Location Line Producer",
    "Budget Optimization Specialist",
    "Daily Shooting Schedule Execution Lead"
  ],
  "production managers": [
    "Unit Production Manager (UPM)",
    "On-Set Production Manager",
    "Police & Government Permission Liaison",
    "Union & Guild Compliance Manager"
  ],
  "location scouts/managers": [
    "Chief Location Scout (Andhra & Telangana)",
    "Heritage & Forest Location Specialist",
    "Studio Floor Booking Manager",
    "Permits & Clearance Officer"
  ],
  "accountants": [
    "Film Production Head Accountant",
    "Cash Flow & Daily Voucher Auditor",
    "GST & TDS Cine Compliance Officer",
    "Cast & Crew Payroll Manager"
  ],
  "Executive Producer": [
    "Studio Executive Producer",
    "Investor & Co-Production Liaison",
    "Commercial Distribution Negotiator",
    "Post-Production Delivery Executive"
  ],
  "Camera support technicians": [
    "Panther & Chapman Dolly Grip",
    "Technocrane / Jimmy Jib Operator",
    "Car Mount & Tracking Vehicle Tech",
    "Sliding & Matrix Track Technician"
  ],
  "generator operators": [
    "Silent Mobile Cine Generator Operator",
    "High-Voltage Power Distribution Tech",
    "Field Backup Power Specialist",
    "Fuel & Generator Logistics Operator"
  ],
  "crane/jib operators": [
    "Super Techno 50 Crane Operator",
    "24ft Jimmy Jib Camera Operator",
    "Hydraulic Lift & Rig Technician",
    "Precision Remote Head Tech"
  ],
  "Outdoor Unit Supervisor": [
    "Outdoor Technical Unit In-Charge",
    "Equipment Transport & Convoy Lead",
    "Weather Contingency Officer",
    "Field Repair & Maintenance Tech"
  ],
  "Gaffers": [
    "Chief Gaffer / Lighting Director",
    "Commercial & Studio Gaffer",
    "High-Speed Lighting Specialist",
    "Solar / Ambient Light Matching Lead"
  ],
  "best boy electric": [
    "Best Boy Electric (Logistics & Power)",
    "Lighting Distribution Box Master",
    "Cabling & Load Calculation Tech",
    "Crew Shift & Safety Electrician"
  ],
  "lamp operators": [
    "Maxi-Brute & HMI 18K Lamp Operator",
    "Skypanel & LED Matrix Operator",
    "Spotlight & Follow-Spot Operator",
    "Day-for-Night Filter Specialist"
  ],
  "grip crew": [
    "Key Grip / Camera Support Lead",
    "Diffusion & Scrim Rigging Crew",
    "Flag & Butterfly Frame Rigger",
    "C-Stand & Apple Box Specialist"
  ],
  "Chief Lighting Technician": [
    "Supervising Lighting Technician",
    "Dimmer Board / DMX Console Programmer",
    "Color Temperature & Gel Specialist",
    "Generator Load Master"
  ],
  "Carpenters": [
    "Master Cine Carpenter",
    "Set Framing & Timber Specialist",
    "Door, Window & Cornice Fabricator",
    "Floor Leveling & Platform Builder"
  ],
  "painters": [
    "Scenic Texture & Aging Painter",
    "Stone, Marble & Brick Illusion Painter",
    "Matte Finish & Chroma-Green Painter",
    "Gold Leaf & Mural Cine Artist"
  ],
  "moulders": [
    "Plaster of Paris (POP) Moulder",
    "Fiberglass & Resin Sculptor",
    "Pillar & Arch Casting Specialist",
    "Foam & Lightweight Prop Sculptor"
  ],
  "construction crew": [
    "Studio Floor Construction Lead",
    "Iron & Scaffolding Welder",
    "Set Dismantling & Salvage Crew",
    "Heavy Material Handling Crew"
  ],
  "light/set builders": [
    "Overhead Light Grid Rigging Builder",
    "False Ceiling & Movable Wall Builder",
    "Water Tank & Rain Effect Platform Builder",
    "Breakaway Set Wall Specialist"
  ],
  "Studio Master Builder": [
    "Studio Operations In-Charge",
    "Floor Safety & Fire Clearance Tech",
    "Acoustic Paneling Installer",
    "Shift Construction Supervisor"
  ],
  "Production runners": [
    "Call Sheet & Talent Escort Runner",
    "Director & DoP Rapid Runner",
    "On-Set Script & Prop Courier",
    "Emergency Procurement Runner"
  ],
  "cinema drivers": [
    "Lead Artist Vanity Van Driver",
    "Technical Equipment Truck Driver",
    "Camera & Drone Unit Van Driver",
    "Crew Shuttle & Airport Driver"
  ],
  "set helpers": [
    "Floor Boy / On-Set Assistant",
    "Catering & Refreshment Coordinator",
    "Umbrella & Chair Attendant for Cast",
    "Trash & Set Cleanup Crew"
  ],
  "and production women (sanitation/housekeeping on set)": [
    "On-Set Sanitation & Hygiene Lead",
    "Female Artist Room & Vanity Attendant",
    "Wardrobe Steam & Ironing Support",
    "Eco-Clean Set Housekeeping Supervisor"
  ],
  "On-Set Production Assistant": [
    "Production Office Coordinator",
    "Crowd Intake & Token Assistant",
    "Daily Call-Sheet Dispatcher",
    "Set Protocol & Silence Marshal"
  ]
};

/**
 * Returns list of Under Sub-Categories for any craft name, with intelligent fallback.
 */
export function getUnderSubCategories(craftName: string): string[] {
  if (!craftName) return [];
  if (UNDER_SUB_CATEGORIES[craftName]) {
    return UNDER_SUB_CATEGORIES[craftName];
  }
  // Try matching by lowercase or partial name
  const matchKey = Object.keys(UNDER_SUB_CATEGORIES).find(
    (k) => k.toLowerCase() === craftName.toLowerCase() || craftName.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(craftName.toLowerCase())
  );
  if (matchKey) {
    return UNDER_SUB_CATEGORIES[matchKey];
  }
  return [
    `Lead ${craftName} Specialist`,
    `Associate ${craftName}`,
    `Assistant ${craftName}`,
    `Senior Grade / Industry Verified`,
    `Feature Films & Commercials`,
  ];
}
