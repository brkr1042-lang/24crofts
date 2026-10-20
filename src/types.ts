export type CraftCategory = 
  | '1. Director'
  | '2. Story Writer'
  | '3. Screenplay Writer'
  | '4. Dialogue Writer'
  | '5. Cinematographer (Director of Photography - DOP)'
  | '6. Music Director (Composer)'
  | '7. Editor'
  | '8. Art Director'
  | '9. Casting (Actors / Main Cast)'
  | '10. Junior Artists (Background Actors)'
  | '11. Junior Artist Agents'
  | '12. Stunt Director (Action Director)'
  | '13. Dance Choreographer'
  | '14. Costume Designer'
  | '15. Makeup Artist'
  | '16. Audiographer (Sound Designer / Sound Department)'
  | '17. Dubbing Artist'
  | '18. Still Photographer'
  | '19. Publicity Designer'
  | '20. Production Executive'
  | '21. Outdoor Unit Technicians'
  | '22. Outdoor Lightmen'
  | '23. Studio Workers'
  | '24. Production Assistants / Support Staff'
  | string;

export interface CraftSubCategory {
  id: string;
  name: string;
  category: CraftCategory;
  categoryIndex: number;
  description: string;
  codePrefix: string;
  underSubCategories?: string[];
}

export interface FilmProject {
  title: string;
  year: number;
  role: string;
  language: string;
  bannerUrl?: string;
  notable?: boolean;
}

export interface YouTubeMedia {
  title: string;
  url: string;
  videoId: string;
  isShowreel?: boolean;
}

export interface Profile {
  id: string; // Unique matrimonial style ID, e.g. 24C-DIR-1042
  name: string;
  stageName?: string;
  gender: 'Male' | 'Female' | 'Other';
  age: number;
  category: CraftCategory;
  craft: string;
  subRole?: string;
  experienceYears: number;
  nativePlace: string;
  currentCity: string;
  languages: string[];
  unionCard: {
    hasCard: boolean;
    unionName?: string;
    cardNumber?: string;
    verified: boolean;
  };
  bio: string;
  keyProjects: FilmProject[];
  photos: string[];
  avatarUrl: string;
  youtubeVideos: YouTubeMedia[];
  contactNumber: string; // Hidden from general public
  email: string;
  availability: 'Available' | 'Shooting' | 'On Shoot' | 'In Discussion' | 'Busy';
  featured: boolean;
  createdAt: string;
  isNew: boolean;
  username?: string;
  password?: string;
}

export interface ProductionHouse {
  id: string; // e.g. PH-1001
  name: string; // Production Banner Name e.g. Mythri Movie Makers
  registrationNumber: string; // CIN / LLP / Trade registration number
  representativeName: string; // Key Official / Representative
  designation: string; // Designation e.g. Producer / Head of Casting
  email: string;
  phone: string;
  city: string;
  address?: string;
  pastProjects?: string;
  upcomingProjects?: string;
  username: string;
  password: string;
  status: 'pending' | 'approved' | 'rejected' | 'suspended';
  registeredAt: string;
  approvedAt?: string;
  adminNotes?: string;
}

export interface ContactAccessRequest {
  id: string;
  profileId: string;
  profileName: string;
  profileCraft: string;
  requesterName: string;
  requesterPhone: string;
  requesterEmail: string;
  productionHouse: string;
  purpose: string;
  status: 'pending' | 'approved' | 'rejected';
  requestDate: string;
  adminNotes?: string;
}

export interface MovieAdSubmission {
  id: string;
  title: string;
  tagline: string;
  productionBanner: string;
  director: string;
  starring: string;
  category: string;
  youtubeUrl: string;
  posterUrl: string;
  releaseDate: string;
  submitterName: string;
  submitterPhone: string;
  submitterEmail: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
  budget?: string;
  synopsis?: string;
}

export interface AdSenseConfig {
  enabled: boolean;
  client: string; // e.g., 'ca-pub-1234567890123456'
  testMode: boolean;
  showInFeed: boolean;
  showHeaderBanner: boolean;
  showSidebarBanner: boolean;
}

