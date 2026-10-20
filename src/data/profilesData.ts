import { Profile, MovieAdSubmission, ProductionHouse } from '../types.ts';

export const INITIAL_PROFILES: Profile[] = [
  {
    "id": "24C-DIR-1001",
    "name": "K. S. Raghavan",
    "stageName": "K. Cine",
    "gender": "Male",
    "age": 26,
    "category": "1. Director",
    "craft": "Co Director",
    "subRole": "Co Director Specialist",
    "experienceYears": 4,
    "nativePlace": "Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Director Guild)",
      "cardNumber": "DIR-REG-4001",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 4 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Co Director",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Co Director",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Co Director",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Co Director Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98480 10000",
    "email": "ksraghavan1001@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-DIR-1002",
    "name": "Gautham Chander",
    "stageName": "Gautham Cine",
    "gender": "Female",
    "age": 31,
    "category": "1. Director",
    "craft": "Chief Associate Director",
    "subRole": "Chief Associate Director Specialist",
    "experienceYears": 7,
    "nativePlace": "Visakhapatnam, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Director Guild)",
      "cardNumber": "DIR-REG-4002",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 7 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Chief Associate Director",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Chief Associate Director",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Chief Associate Director",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Chief Associate Director Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98481 11111",
    "email": "gauthamchander1002@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-DIR-1003",
    "name": "Nandini K. Varma",
    "stageName": "Nandini Cine",
    "gender": "Male",
    "age": 36,
    "category": "1. Director",
    "craft": "Associate Directors",
    "subRole": "Associate Directors Specialist",
    "experienceYears": 10,
    "nativePlace": "Vijayawada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Director Guild)",
      "cardNumber": "DIR-REG-4003",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 10 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Associate Directors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Associate Directors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Associate Directors",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Associate Directors Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98482 12222",
    "email": "nandinikvarma1003@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-DIR-1004",
    "name": "Prasad Rao Vaddi",
    "stageName": "Prasad Cine",
    "gender": "Male",
    "age": 41,
    "category": "1. Director",
    "craft": "Assistant Directors (ADs)",
    "subRole": "Assistant Directors (ADs) Specialist",
    "experienceYears": 13,
    "nativePlace": "Rajahmundry, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Director Guild)",
      "cardNumber": "DIR-REG-4004",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 13 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Assistant Directors (ADs)",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Assistant Directors (ADs)",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Assistant Directors (ADs)",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Assistant Directors (ADs) Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98483 13333",
    "email": "prasadraovaddi1004@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-DIR-1005",
    "name": "Sneha Latha Reddy",
    "stageName": "Sneha Cine",
    "gender": "Female",
    "age": 46,
    "category": "1. Director",
    "craft": "Continuity Supervisor (Script Supervisor)",
    "subRole": "Continuity Supervisor (Script Supervisor) Specialist",
    "experienceYears": 16,
    "nativePlace": "Tirupati, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Director Guild)",
      "cardNumber": "DIR-REG-4005",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 16 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Continuity Supervisor (Script Supervisor)",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Continuity Supervisor (Script Supervisor)",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Continuity Supervisor (Script Supervisor)",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Continuity Supervisor (Script Supervisor) Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98484 14444",
    "email": "snehalathareddy1005@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-DIR-1006",
    "name": "Vikramaditya Raju",
    "stageName": "Vikramaditya Cine",
    "gender": "Male",
    "age": 51,
    "category": "1. Director",
    "craft": "Main Feature Film Director",
    "subRole": "Main Feature Film Director Specialist",
    "experienceYears": 19,
    "nativePlace": "Guntur, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Director Guild)",
      "cardNumber": "DIR-REG-4006",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 19 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Main Feature Film Director",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Main Feature Film Director",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Main Feature Film Director",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Main Feature Film Director Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98485 15555",
    "email": "vikramadityaraju1006@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-STR-1007",
    "name": "Deva Katta Rao",
    "stageName": "Deva Cine",
    "gender": "Female",
    "age": 29,
    "category": "2. Story Writer",
    "craft": "Concept developer",
    "subRole": "Concept developer Specialist",
    "experienceYears": 6,
    "nativePlace": "Visakhapatnam, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Story Guild)",
      "cardNumber": "STR-REG-4007",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 6 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Concept developer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Concept developer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Concept developer",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Concept developer Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98490 10000",
    "email": "devakattarao1007@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-STR-1008",
    "name": "Ananya Manchu",
    "stageName": "Ananya Cine",
    "gender": "Male",
    "age": 34,
    "category": "2. Story Writer",
    "craft": "researcher",
    "subRole": "researcher Specialist",
    "experienceYears": 9,
    "nativePlace": "Vijayawada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Story Guild)",
      "cardNumber": "STR-REG-4008",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 9 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "researcher",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "researcher",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "researcher",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "researcher Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98491 11111",
    "email": "ananyamanchu1008@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-STR-1009",
    "name": "Manoj Kumar V.",
    "stageName": "Manoj Cine",
    "gender": "Male",
    "age": 39,
    "category": "2. Story Writer",
    "craft": "Dialog writer",
    "subRole": "Dialog writer Specialist",
    "experienceYears": 12,
    "nativePlace": "Rajahmundry, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Story Guild)",
      "cardNumber": "STR-REG-4009",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 12 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Dialog writer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Dialog writer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Dialog writer",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Dialog writer Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98492 12222",
    "email": "manojkumarv1009@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-STR-1010",
    "name": "Savitri Rayapati",
    "stageName": "Savitri Cine",
    "gender": "Female",
    "age": 44,
    "category": "2. Story Writer",
    "craft": "narrative outline writer",
    "subRole": "narrative outline writer Specialist",
    "experienceYears": 15,
    "nativePlace": "Tirupati, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Story Guild)",
      "cardNumber": "STR-REG-4010",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 15 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "narrative outline writer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "narrative outline writer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "narrative outline writer",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "narrative outline writer Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98493 13333",
    "email": "savitrirayapati1010@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-STR-1011",
    "name": "Sharath Chandra P.",
    "stageName": "Sharath Cine",
    "gender": "Male",
    "age": 49,
    "category": "2. Story Writer",
    "craft": "Lead Story Writer",
    "subRole": "Lead Story Writer Specialist",
    "experienceYears": 18,
    "nativePlace": "Guntur, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Story Guild)",
      "cardNumber": "STR-REG-4011",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 18 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Lead Story Writer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Lead Story Writer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Lead Story Writer",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Lead Story Writer Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98494 14444",
    "email": "sharathchandrap1011@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-STR-1012",
    "name": "Divya Teja Kosaraju",
    "stageName": "Divya Cine",
    "gender": "Male",
    "age": 54,
    "category": "2. Story Writer",
    "craft": "Concept developer",
    "subRole": "Concept developer Specialist",
    "experienceYears": 21,
    "nativePlace": "Warangal, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Story Guild)",
      "cardNumber": "STR-REG-4012",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 21 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Concept developer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Concept developer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Concept developer",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Concept developer Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98495 15555",
    "email": "divyatejakosaraju1012@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-SCP-1013",
    "name": "Venkatesh Babu G.",
    "stageName": "Venkatesh Cine",
    "gender": "Male",
    "age": 32,
    "category": "3. Screenplay Writer",
    "craft": "Scene structure writer",
    "subRole": "Scene structure writer Specialist",
    "experienceYears": 8,
    "nativePlace": "Vijayawada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Screenplay Guild)",
      "cardNumber": "SCP-REG-4013",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 8 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Scene structure writer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Scene structure writer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Scene structure writer",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Scene structure writer Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98500 10000",
    "email": "venkateshbabug1013@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-SCP-1014",
    "name": "Pooja Hegde Ch.",
    "stageName": "Pooja Cine",
    "gender": "Male",
    "age": 37,
    "category": "3. Screenplay Writer",
    "craft": "dramaturg",
    "subRole": "dramaturg Specialist",
    "experienceYears": 11,
    "nativePlace": "Rajahmundry, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Screenplay Guild)",
      "cardNumber": "SCP-REG-4014",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 11 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "dramaturg",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "dramaturg",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "dramaturg",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "dramaturg Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98501 11111",
    "email": "poojahegdech1014@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-SCP-1015",
    "name": "Srikanth Addala K.",
    "stageName": "Srikanth Cine",
    "gender": "Female",
    "age": 42,
    "category": "3. Screenplay Writer",
    "craft": "Lead Screenplay Writer",
    "subRole": "Lead Screenplay Writer Specialist",
    "experienceYears": 14,
    "nativePlace": "Tirupati, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Screenplay Guild)",
      "cardNumber": "SCP-REG-4015",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 14 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Lead Screenplay Writer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Lead Screenplay Writer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Lead Screenplay Writer",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Lead Screenplay Writer Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98502 12222",
    "email": "srikanthaddalak1015@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-SCP-1016",
    "name": "Rohini Molleti",
    "stageName": "Rohini Cine",
    "gender": "Male",
    "age": 47,
    "category": "3. Screenplay Writer",
    "craft": "Screenplay Consultant",
    "subRole": "Screenplay Consultant Specialist",
    "experienceYears": 17,
    "nativePlace": "Guntur, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Screenplay Guild)",
      "cardNumber": "SCP-REG-4016",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 17 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Screenplay Consultant",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Screenplay Consultant",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Screenplay Consultant",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Screenplay Consultant Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98503 13333",
    "email": "rohinimolleti1016@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-SCP-1017",
    "name": "Bhavani Shankar T.",
    "stageName": "Bhavani Cine",
    "gender": "Male",
    "age": 52,
    "category": "3. Screenplay Writer",
    "craft": "Scene structure writer",
    "subRole": "Scene structure writer Specialist",
    "experienceYears": 20,
    "nativePlace": "Warangal, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Screenplay Guild)",
      "cardNumber": "SCP-REG-4017",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 20 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Scene structure writer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Scene structure writer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Scene structure writer",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Scene structure writer Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98504 14444",
    "email": "bhavanishankart1017@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-SCP-1018",
    "name": "Kalyan Ramudu B.",
    "stageName": "Kalyan Cine",
    "gender": "Female",
    "age": 57,
    "category": "3. Screenplay Writer",
    "craft": "dramaturg",
    "subRole": "dramaturg Specialist",
    "experienceYears": 23,
    "nativePlace": "Nellore, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Screenplay Guild)",
      "cardNumber": "SCP-REG-4018",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 23 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "dramaturg",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "dramaturg",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "dramaturg",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "dramaturg Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98505 15555",
    "email": "kalyanramudub1018@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-DLG-1019",
    "name": "Chaitanya Krishna M.",
    "stageName": "Chaitanya Cine",
    "gender": "Male",
    "age": 35,
    "category": "4. Dialogue Writer",
    "craft": "Language translator",
    "subRole": "Language translator Specialist",
    "experienceYears": 10,
    "nativePlace": "Rajahmundry, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Dialogue Guild)",
      "cardNumber": "DLG-REG-4019",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 10 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Language translator",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Language translator",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Language translator",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Language translator Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98510 10000",
    "email": "chaitanyakrishnam1019@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-DLG-1020",
    "name": "Lavanya Tripathi G.",
    "stageName": "Lavanya Cine",
    "gender": "Female",
    "age": 40,
    "category": "4. Dialogue Writer",
    "craft": "idiom/dialect coach",
    "subRole": "idiom/dialect coach Specialist",
    "experienceYears": 13,
    "nativePlace": "Tirupati, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Dialogue Guild)",
      "cardNumber": "DLG-REG-4020",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 13 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "idiom/dialect coach",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "idiom/dialect coach",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "idiom/dialect coach",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "idiom/dialect coach Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98511 11111",
    "email": "lavanyatripathig1020@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-DLG-1021",
    "name": "Siddharth Varma P.",
    "stageName": "Siddharth Cine",
    "gender": "Male",
    "age": 45,
    "category": "4. Dialogue Writer",
    "craft": "Lead Dialogue Writer",
    "subRole": "Lead Dialogue Writer Specialist",
    "experienceYears": 16,
    "nativePlace": "Guntur, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Dialogue Guild)",
      "cardNumber": "DLG-REG-4021",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 16 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Lead Dialogue Writer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Lead Dialogue Writer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Lead Dialogue Writer",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Lead Dialogue Writer Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98512 12222",
    "email": "siddharthvarmap1021@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-DLG-1022",
    "name": "Haritha Naidu K.",
    "stageName": "Haritha Cine",
    "gender": "Male",
    "age": 50,
    "category": "4. Dialogue Writer",
    "craft": "Punch & Mass Dialogue Specialist",
    "subRole": "Punch & Mass Dialogue Specialist Specialist",
    "experienceYears": 19,
    "nativePlace": "Warangal, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Dialogue Guild)",
      "cardNumber": "DLG-REG-4022",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 19 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Punch & Mass Dialogue Specialist",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Punch & Mass Dialogue Specialist",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Punch & Mass Dialogue Specialist",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Punch & Mass Dialogue Specialist Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98513 13333",
    "email": "harithanaiduk1022@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-DLG-1023",
    "name": "Arun Pandian S.",
    "stageName": "Arun Cine",
    "gender": "Female",
    "age": 55,
    "category": "4. Dialogue Writer",
    "craft": "Language translator",
    "subRole": "Language translator Specialist",
    "experienceYears": 22,
    "nativePlace": "Nellore, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Dialogue Guild)",
      "cardNumber": "DLG-REG-4023",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 22 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Language translator",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Language translator",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Language translator",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Language translator Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98514 14444",
    "email": "arunpandians1023@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-DLG-1024",
    "name": "Sunitha Rao M.",
    "stageName": "Sunitha Cine",
    "gender": "Male",
    "age": 60,
    "category": "4. Dialogue Writer",
    "craft": "idiom/dialect coach",
    "subRole": "idiom/dialect coach Specialist",
    "experienceYears": 25,
    "nativePlace": "Kakinada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Dialogue Guild)",
      "cardNumber": "DLG-REG-4024",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 25 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "idiom/dialect coach",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "idiom/dialect coach",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "idiom/dialect coach",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "idiom/dialect coach Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98515 15555",
    "email": "sunitharaom1024@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-DOP-1025",
    "name": "Bhaskar Rao Jampana",
    "stageName": "Bhaskar Cine",
    "gender": "Female",
    "age": 38,
    "category": "5. Cinematographer (Director of Photography - DOP)",
    "craft": "Camera operators",
    "subRole": "Camera operators Specialist",
    "experienceYears": 12,
    "nativePlace": "Tirupati, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Cinematographer Guild)",
      "cardNumber": "DOP-REG-4025",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 12 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Camera operators",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Camera operators",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Camera operators",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Camera operators Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98520 10000",
    "email": "bhaskarraojampana1025@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-DOP-1026",
    "name": "Madhavi Latha T.",
    "stageName": "Madhavi Cine",
    "gender": "Male",
    "age": 43,
    "category": "5. Cinematographer (Director of Photography - DOP)",
    "craft": "focus pullers (1st AC)",
    "subRole": "focus pullers (1st AC) Specialist",
    "experienceYears": 15,
    "nativePlace": "Guntur, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Cinematographer Guild)",
      "cardNumber": "DOP-REG-4026",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 15 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "focus pullers (1st AC)",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "focus pullers (1st AC)",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "focus pullers (1st AC)",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "focus pullers (1st AC) Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98521 11111",
    "email": "madhavilathat1026@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-DOP-1027",
    "name": "Ramesh Babu Guntupalli",
    "stageName": "Ramesh Cine",
    "gender": "Male",
    "age": 48,
    "category": "5. Cinematographer (Director of Photography - DOP)",
    "craft": "clapper loaders (2nd AC)",
    "subRole": "clapper loaders (2nd AC) Specialist",
    "experienceYears": 18,
    "nativePlace": "Warangal, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Cinematographer Guild)",
      "cardNumber": "DOP-REG-4027",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 18 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "clapper loaders (2nd AC)",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "clapper loaders (2nd AC)",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "clapper loaders (2nd AC)",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "clapper loaders (2nd AC) Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98522 12222",
    "email": "rameshbabuguntupalli1027@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-DOP-1028",
    "name": "Keerthi Suresh Ch.",
    "stageName": "Keerthi Cine",
    "gender": "Female",
    "age": 53,
    "category": "5. Cinematographer (Director of Photography - DOP)",
    "craft": "drone/steadicam operators",
    "subRole": "drone/steadicam operators Specialist",
    "experienceYears": 21,
    "nativePlace": "Nellore, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Cinematographer Guild)",
      "cardNumber": "DOP-REG-4028",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 21 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "drone/steadicam operators",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "drone/steadicam operators",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "drone/steadicam operators",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "drone/steadicam operators Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98523 13333",
    "email": "keerthisureshch1028@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-DOP-1029",
    "name": "Naveen Polishetty K.",
    "stageName": "Naveen Cine",
    "gender": "Male",
    "age": 58,
    "category": "5. Cinematographer (Director of Photography - DOP)",
    "craft": "Director of Photography (DOP)",
    "subRole": "Director of Photography (DOP) Specialist",
    "experienceYears": 24,
    "nativePlace": "Kakinada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Cinematographer Guild)",
      "cardNumber": "DOP-REG-4029",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 24 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Director of Photography (DOP)",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Director of Photography (DOP)",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Director of Photography (DOP)",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Director of Photography (DOP) Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98524 14444",
    "email": "naveenpolishettyk1029@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-DOP-1030",
    "name": "Sai Pallavi N.",
    "stageName": "Sai Cine",
    "gender": "Male",
    "age": 28,
    "category": "5. Cinematographer (Director of Photography - DOP)",
    "craft": "Camera operators",
    "subRole": "Camera operators Specialist",
    "experienceYears": 5,
    "nativePlace": "Kurnool, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Cinematographer Guild)",
      "cardNumber": "DOP-REG-4030",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 5 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Camera operators",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Camera operators",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Camera operators",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Camera operators Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98525 15555",
    "email": "saipallavin1030@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-MUS-1031",
    "name": "Srinivas Avasarala P.",
    "stageName": "Srinivas Cine",
    "gender": "Male",
    "age": 41,
    "category": "6. Music Director (Composer)",
    "craft": "Song composers",
    "subRole": "Song composers Specialist",
    "experienceYears": 14,
    "nativePlace": "Guntur, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Music Guild)",
      "cardNumber": "MUS-REG-4031",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 14 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Song composers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Song composers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Song composers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Song composers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98530 10000",
    "email": "srinivasavasaralap1031@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-MUS-1032",
    "name": "Radhika Sarath K.",
    "stageName": "Radhika Cine",
    "gender": "Male",
    "age": 46,
    "category": "6. Music Director (Composer)",
    "craft": "background score (BGM) arrangers",
    "subRole": "background score (BGM) arrangers Specialist",
    "experienceYears": 17,
    "nativePlace": "Warangal, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Music Guild)",
      "cardNumber": "MUS-REG-4032",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 17 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "background score (BGM) arrangers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "background score (BGM) arrangers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "background score (BGM) arrangers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "background score (BGM) arrangers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98531 11111",
    "email": "radhikasarathk1032@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-MUS-1033",
    "name": "Satya Dev Kancharana",
    "stageName": "Satya Cine",
    "gender": "Female",
    "age": 51,
    "category": "6. Music Director (Composer)",
    "craft": "lyricists",
    "subRole": "lyricists Specialist",
    "experienceYears": 20,
    "nativePlace": "Nellore, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Music Guild)",
      "cardNumber": "MUS-REG-4033",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 20 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "lyricists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "lyricists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "lyricists",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "lyricists Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98532 12222",
    "email": "satyadevkancharana1033@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-MUS-1034",
    "name": "Meenakshi Dixit",
    "stageName": "Meenakshi Cine",
    "gender": "Male",
    "age": 56,
    "category": "6. Music Director (Composer)",
    "craft": "music programmers",
    "subRole": "music programmers Specialist",
    "experienceYears": 23,
    "nativePlace": "Kakinada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Music Guild)",
      "cardNumber": "MUS-REG-4034",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 23 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "music programmers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "music programmers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "music programmers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "music programmers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98533 13333",
    "email": "meenakshidixit1034@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-MUS-1035",
    "name": "Tanikella Bharani S.",
    "stageName": "Tanikella Cine",
    "gender": "Male",
    "age": 26,
    "category": "6. Music Director (Composer)",
    "craft": "Music Director / Composer",
    "subRole": "Music Director / Composer Specialist",
    "experienceYears": 4,
    "nativePlace": "Kurnool, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Music Guild)",
      "cardNumber": "MUS-REG-4035",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 4 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Music Director / Composer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Music Director / Composer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Music Director / Composer",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Music Director / Composer Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98534 14444",
    "email": "tanikellabharanis1035@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-MUS-1036",
    "name": "Swathi Reddy Ch.",
    "stageName": "Swathi Cine",
    "gender": "Female",
    "age": 31,
    "category": "6. Music Director (Composer)",
    "craft": "Song composers",
    "subRole": "Song composers Specialist",
    "experienceYears": 7,
    "nativePlace": "Chennai & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Music Guild)",
      "cardNumber": "MUS-REG-4036",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 7 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Song composers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Song composers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Song composers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Song composers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98535 15555",
    "email": "swathireddych1036@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-EDT-1037",
    "name": "Kota Srinivasa Rao B.",
    "stageName": "Kota Cine",
    "gender": "Male",
    "age": 44,
    "category": "7. Editor",
    "craft": "Assistant editors",
    "subRole": "Assistant editors Specialist",
    "experienceYears": 16,
    "nativePlace": "Warangal, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Editor Guild)",
      "cardNumber": "EDT-REG-4037",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 16 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Assistant editors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Assistant editors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Assistant editors",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Assistant editors Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98540 10000",
    "email": "kotasrinivasaraob1037@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-EDT-1038",
    "name": "Jhansi Laxmi G.",
    "stageName": "Jhansi Cine",
    "gender": "Female",
    "age": 49,
    "category": "7. Editor",
    "craft": "colorists",
    "subRole": "colorists Specialist",
    "experienceYears": 19,
    "nativePlace": "Nellore, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Editor Guild)",
      "cardNumber": "EDT-REG-4038",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 19 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "colorists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "colorists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "colorists",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "colorists Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98541 11111",
    "email": "jhansilaxmig1038@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-EDT-1039",
    "name": "Subbaraju Bandla",
    "stageName": "Subbaraju Cine",
    "gender": "Male",
    "age": 54,
    "category": "7. Editor",
    "craft": "visual effects (VFX) editors",
    "subRole": "visual effects (VFX) editors Specialist",
    "experienceYears": 22,
    "nativePlace": "Kakinada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Editor Guild)",
      "cardNumber": "EDT-REG-4039",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 22 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "visual effects (VFX) editors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "visual effects (VFX) editors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "visual effects (VFX) editors",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "visual effects (VFX) editors Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98542 12222",
    "email": "subbarajubandla1039@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-EDT-1040",
    "name": "Surekha Vani P.",
    "stageName": "Surekha Cine",
    "gender": "Male",
    "age": 59,
    "category": "7. Editor",
    "craft": "conform editors",
    "subRole": "conform editors Specialist",
    "experienceYears": 25,
    "nativePlace": "Kurnool, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Editor Guild)",
      "cardNumber": "EDT-REG-4040",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 25 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "conform editors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "conform editors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "conform editors",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "conform editors Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98543 13333",
    "email": "surekhavanip1040@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-EDT-1041",
    "name": "Brahmaji G.",
    "stageName": "Brahmaji Cine",
    "gender": "Female",
    "age": 29,
    "category": "7. Editor",
    "craft": "Principal Film Editor",
    "subRole": "Principal Film Editor Specialist",
    "experienceYears": 6,
    "nativePlace": "Chennai & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Editor Guild)",
      "cardNumber": "EDT-REG-4041",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 6 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Principal Film Editor",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Principal Film Editor",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Principal Film Editor",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Principal Film Editor Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98544 14444",
    "email": "brahmajig1041@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-EDT-1042",
    "name": "Pavala Syamala",
    "stageName": "Pavala Cine",
    "gender": "Male",
    "age": 34,
    "category": "7. Editor",
    "craft": "Assistant editors",
    "subRole": "Assistant editors Specialist",
    "experienceYears": 9,
    "nativePlace": "Bengaluru & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Editor Guild)",
      "cardNumber": "EDT-REG-4042",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 9 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Assistant editors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Assistant editors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Assistant editors",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Assistant editors Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98545 15555",
    "email": "pavalasyamala1042@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-ART-1043",
    "name": "Hema Chandra Ch.",
    "stageName": "Hema Cine",
    "gender": "Female",
    "age": 47,
    "category": "8. Art Director",
    "craft": "Set designers",
    "subRole": "Set designers Specialist",
    "experienceYears": 18,
    "nativePlace": "Nellore, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Art Guild)",
      "cardNumber": "ART-REG-4043",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 18 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Set designers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Set designers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Set designers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Set designers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98550 10000",
    "email": "hemachandrach1043@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-ART-1044",
    "name": "Kalpana Raghavendar",
    "stageName": "Kalpana Cine",
    "gender": "Male",
    "age": 52,
    "category": "8. Art Director",
    "craft": "prop masters",
    "subRole": "prop masters Specialist",
    "experienceYears": 21,
    "nativePlace": "Kakinada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Art Guild)",
      "cardNumber": "ART-REG-4044",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 21 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "prop masters",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "prop masters",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "prop masters",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "prop masters Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98551 11111",
    "email": "kalpanaraghavendar1044@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-ART-1045",
    "name": "Srikrishna Vishnubhotla",
    "stageName": "Srikrishna Cine",
    "gender": "Male",
    "age": 57,
    "category": "8. Art Director",
    "craft": "storyboard artists",
    "subRole": "storyboard artists Specialist",
    "experienceYears": 24,
    "nativePlace": "Kurnool, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Art Guild)",
      "cardNumber": "ART-REG-4045",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 24 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "storyboard artists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "storyboard artists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "storyboard artists",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "storyboard artists Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98552 12222",
    "email": "srikrishnavishnubhotla1045@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-ART-1046",
    "name": "Geetha Madhuri K.",
    "stageName": "Geetha Cine",
    "gender": "Female",
    "age": 27,
    "category": "8. Art Director",
    "craft": "graphic/signage artists",
    "subRole": "graphic/signage artists Specialist",
    "experienceYears": 5,
    "nativePlace": "Chennai & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Art Guild)",
      "cardNumber": "ART-REG-4046",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 5 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "graphic/signage artists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "graphic/signage artists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "graphic/signage artists",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "graphic/signage artists Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98553 13333",
    "email": "geethamadhurik1046@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-ART-1047",
    "name": "Revanth Kumar B.",
    "stageName": "Revanth Cine",
    "gender": "Male",
    "age": 32,
    "category": "8. Art Director",
    "craft": "Production Designer / Art Director",
    "subRole": "Production Designer / Art Director Specialist",
    "experienceYears": 8,
    "nativePlace": "Bengaluru & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Art Guild)",
      "cardNumber": "ART-REG-4047",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 8 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Production Designer / Art Director",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Production Designer / Art Director",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Production Designer / Art Director",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Production Designer / Art Director Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98554 14444",
    "email": "revanthkumarb1047@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-ART-1048",
    "name": "Lipsika Bhasyam",
    "stageName": "Lipsika Cine",
    "gender": "Male",
    "age": 37,
    "category": "8. Art Director",
    "craft": "Set designers",
    "subRole": "Set designers Specialist",
    "experienceYears": 11,
    "nativePlace": "Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Art Guild)",
      "cardNumber": "ART-REG-4048",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 11 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Set designers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Set designers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Set designers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Set designers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98555 15555",
    "email": "lipsikabhasyam1048@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-CST-1049",
    "name": "Ram Miriyala G.",
    "stageName": "Ram Cine",
    "gender": "Male",
    "age": 50,
    "category": "9. Casting  (Actors / Main Cast)",
    "craft": "hero",
    "subRole": "hero Specialist",
    "experienceYears": 20,
    "nativePlace": "Kakinada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Casting Guild)",
      "cardNumber": "CST-REG-4049",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 20 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "hero",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "hero",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "hero",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "hero Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98560 10000",
    "email": "rammiriyalag1049@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-CST-1050",
    "name": "Mangli Satyavathi",
    "stageName": "Mangli Cine",
    "gender": "Male",
    "age": 55,
    "category": "9. Casting  (Actors / Main Cast)",
    "craft": "Heroin",
    "subRole": "Heroin Specialist",
    "experienceYears": 23,
    "nativePlace": "Kurnool, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Casting Guild)",
      "cardNumber": "CST-REG-4050",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 23 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Heroin",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Heroin",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Heroin",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Heroin Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98561 11111",
    "email": "manglisatyavathi1050@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-CST-1051",
    "name": "Daler Mehndi S.",
    "stageName": "Daler Cine",
    "gender": "Female",
    "age": 60,
    "category": "9. Casting  (Actors / Main Cast)",
    "craft": "character actors",
    "subRole": "character actors Specialist",
    "experienceYears": 4,
    "nativePlace": "Chennai & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Casting Guild)",
      "cardNumber": "CST-REG-4051",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 4 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "character actors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "character actors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "character actors",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "character actors Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98562 12222",
    "email": "dalermehndis1051@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-CST-1052",
    "name": "Indravathi Chauhan",
    "stageName": "Indravathi Cine",
    "gender": "Male",
    "age": 30,
    "category": "9. Casting  (Actors / Main Cast)",
    "craft": "child actors",
    "subRole": "child actors Specialist",
    "experienceYears": 7,
    "nativePlace": "Bengaluru & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Casting Guild)",
      "cardNumber": "CST-REG-4052",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 7 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "child actors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "child actors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "child actors",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "child actors Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98563 13333",
    "email": "indravathichauhan1052@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-CST-1053",
    "name": "Anurag Kulkarni",
    "stageName": "Anurag Cine",
    "gender": "Male",
    "age": 35,
    "category": "9. Casting  (Actors / Main Cast)",
    "craft": "Negative Rolls",
    "subRole": "Negative Rolls Specialist",
    "experienceYears": 10,
    "nativePlace": "Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Casting Guild)",
      "cardNumber": "CST-REG-4053",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 10 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Negative Rolls",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Negative Rolls",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Negative Rolls",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Negative Rolls Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98564 14444",
    "email": "anuragkulkarni1053@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-CST-1054",
    "name": "Sahithi Chaganti",
    "stageName": "Sahithi Cine",
    "gender": "Female",
    "age": 40,
    "category": "9. Casting  (Actors / Main Cast)",
    "craft": "Casting Director",
    "subRole": "Casting Director Specialist",
    "experienceYears": 13,
    "nativePlace": "Visakhapatnam, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Casting Guild)",
      "cardNumber": "CST-REG-4054",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 13 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Casting Director",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Casting Director",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Casting Director",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Casting Director Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98565 15555",
    "email": "sahithichaganti1054@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-JRA-1055",
    "name": "Shankar Mahadevan R.",
    "stageName": "Shankar Cine",
    "gender": "Male",
    "age": 53,
    "category": "10. Junior Artists (Background Actors)",
    "craft": "Crowd actors",
    "subRole": "Crowd actors Specialist",
    "experienceYears": 22,
    "nativePlace": "Kurnool, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Junior Guild)",
      "cardNumber": "JRA-REG-4055",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 22 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Crowd actors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Crowd actors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Crowd actors",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Crowd actors Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98570 10000",
    "email": "shankarmahadevanr1055@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-JRA-1056",
    "name": "Chitra K. S.",
    "stageName": "Chitra Cine",
    "gender": "Female",
    "age": 58,
    "category": "10. Junior Artists (Background Actors)",
    "craft": "specialized extras (e.g., police, dancers in crowd)",
    "subRole": "specialized extras (e.g., police, dancers in crowd) Specialist",
    "experienceYears": 25,
    "nativePlace": "Chennai & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Junior Guild)",
      "cardNumber": "JRA-REG-4056",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 25 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "specialized extras (e.g., police, dancers in crowd)",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "specialized extras (e.g., police, dancers in crowd)",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "specialized extras (e.g., police, dancers in crowd)",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "specialized extras (e.g., police, dancers in crowd) Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98571 11111",
    "email": "chitraks1056@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-JRA-1057",
    "name": "Mano Nagoor Babu",
    "stageName": "Mano Cine",
    "gender": "Male",
    "age": 28,
    "category": "10. Junior Artists (Background Actors)",
    "craft": "Crowd actors",
    "subRole": "Crowd actors Specialist",
    "experienceYears": 6,
    "nativePlace": "Bengaluru & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Junior Guild)",
      "cardNumber": "JRA-REG-4057",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 6 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Crowd actors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Crowd actors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Crowd actors",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Crowd actors Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98572 12222",
    "email": "manonagoorbabu1057@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-JRA-1058",
    "name": "Sunitha Upadrasta",
    "stageName": "Sunitha Cine",
    "gender": "Male",
    "age": 33,
    "category": "10. Junior Artists (Background Actors)",
    "craft": "specialized extras (e.g., police, dancers in crowd)",
    "subRole": "specialized extras (e.g., police, dancers in crowd) Specialist",
    "experienceYears": 9,
    "nativePlace": "Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Junior Guild)",
      "cardNumber": "JRA-REG-4058",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 9 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "specialized extras (e.g., police, dancers in crowd)",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "specialized extras (e.g., police, dancers in crowd)",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "specialized extras (e.g., police, dancers in crowd)",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "specialized extras (e.g., police, dancers in crowd) Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98573 13333",
    "email": "sunithaupadrasta1058@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-JRA-1059",
    "name": "Vijay Prakash G.",
    "stageName": "Vijay Cine",
    "gender": "Female",
    "age": 38,
    "category": "10. Junior Artists (Background Actors)",
    "craft": "Junior Artist Group Lead",
    "subRole": "Junior Artist Group Lead Specialist",
    "experienceYears": 12,
    "nativePlace": "Visakhapatnam, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Junior Guild)",
      "cardNumber": "JRA-REG-4059",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 12 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Junior Artist Group Lead",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Junior Artist Group Lead",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Junior Artist Group Lead",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Junior Artist Group Lead Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98574 14444",
    "email": "vijayprakashg1059@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-JRA-1060",
    "name": "Kousalya K.",
    "stageName": "Kousalya Cine",
    "gender": "Male",
    "age": 43,
    "category": "10. Junior Artists (Background Actors)",
    "craft": "Crowd actors",
    "subRole": "Crowd actors Specialist",
    "experienceYears": 15,
    "nativePlace": "Vijayawada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Junior Guild)",
      "cardNumber": "JRA-REG-4060",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 15 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Crowd actors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Crowd actors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Crowd actors",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Crowd actors Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98575 15555",
    "email": "kousalyak1060@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-AGT-1061",
    "name": "Peter Hein S.",
    "stageName": "Peter Cine",
    "gender": "Female",
    "age": 56,
    "category": "11. Junior Artist Agents",
    "craft": "Crowd coordinators and casting support for extras",
    "subRole": "Crowd coordinators and casting support for extras Specialist",
    "experienceYears": 24,
    "nativePlace": "Chennai & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Junior Guild)",
      "cardNumber": "AGT-REG-4061",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 24 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Crowd coordinators and casting support for extras",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Crowd coordinators and casting support for extras",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Crowd coordinators and casting support for extras",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Crowd coordinators and casting support for extras Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98580 10000",
    "email": "peterheins1061@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-AGT-1062",
    "name": "Ram-Laxman Master",
    "stageName": "Ram-Laxman Cine",
    "gender": "Male",
    "age": 26,
    "category": "11. Junior Artist Agents",
    "craft": "Junior Artist Agent / Supplier",
    "subRole": "Junior Artist Agent / Supplier Specialist",
    "experienceYears": 5,
    "nativePlace": "Bengaluru & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Junior Guild)",
      "cardNumber": "AGT-REG-4062",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 5 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Junior Artist Agent / Supplier",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Junior Artist Agent / Supplier",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Junior Artist Agent / Supplier",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Junior Artist Agent / Supplier Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98581 11111",
    "email": "ramlaxmanmaster1062@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-AGT-1063",
    "name": "Vijay Master K.",
    "stageName": "Vijay Cine",
    "gender": "Male",
    "age": 31,
    "category": "11. Junior Artist Agents",
    "craft": "Union Extras Supplier",
    "subRole": "Union Extras Supplier Specialist",
    "experienceYears": 8,
    "nativePlace": "Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Junior Guild)",
      "cardNumber": "AGT-REG-4063",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 8 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Union Extras Supplier",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Union Extras Supplier",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Union Extras Supplier",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Union Extras Supplier Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98582 12222",
    "email": "vijaymasterk1063@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-AGT-1064",
    "name": "Stunt Silva",
    "stageName": "Stunt Cine",
    "gender": "Female",
    "age": 36,
    "category": "11. Junior Artist Agents",
    "craft": "Crowd coordinators and casting support for extras",
    "subRole": "Crowd coordinators and casting support for extras Specialist",
    "experienceYears": 11,
    "nativePlace": "Visakhapatnam, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Junior Guild)",
      "cardNumber": "AGT-REG-4064",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 11 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Crowd coordinators and casting support for extras",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Crowd coordinators and casting support for extras",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Crowd coordinators and casting support for extras",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Crowd coordinators and casting support for extras Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98583 13333",
    "email": "stuntsilva1064@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-AGT-1065",
    "name": "Venkat Master P.",
    "stageName": "Venkat Cine",
    "gender": "Male",
    "age": 41,
    "category": "11. Junior Artist Agents",
    "craft": "Junior Artist Agent / Supplier",
    "subRole": "Junior Artist Agent / Supplier Specialist",
    "experienceYears": 14,
    "nativePlace": "Vijayawada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Junior Guild)",
      "cardNumber": "AGT-REG-4065",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 14 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Junior Artist Agent / Supplier",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Junior Artist Agent / Supplier",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Junior Artist Agent / Supplier",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Junior Artist Agent / Supplier Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98584 14444",
    "email": "venkatmasterp1065@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-AGT-1066",
    "name": "Jashuva Master",
    "stageName": "Jashuva Cine",
    "gender": "Male",
    "age": 46,
    "category": "11. Junior Artist Agents",
    "craft": "Union Extras Supplier",
    "subRole": "Union Extras Supplier Specialist",
    "experienceYears": 17,
    "nativePlace": "Rajahmundry, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Junior Guild)",
      "cardNumber": "AGT-REG-4066",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 17 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Union Extras Supplier",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Union Extras Supplier",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Union Extras Supplier",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Union Extras Supplier Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98585 15555",
    "email": "jashuvamaster1066@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-STN-1067",
    "name": "Sekhar Master V.",
    "stageName": "Sekhar Cine",
    "gender": "Male",
    "age": 59,
    "category": "12. Stunt Director (Action Director)",
    "craft": "Stunt coordinators",
    "subRole": "Stunt coordinators Specialist",
    "experienceYears": 4,
    "nativePlace": "Bengaluru & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Stunt Guild)",
      "cardNumber": "STN-REG-4067",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 4 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Stunt coordinators",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Stunt coordinators",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Stunt coordinators",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Stunt coordinators Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98590 10000",
    "email": "sekharmasterv1067@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-STN-1068",
    "name": "Jani Master S.",
    "stageName": "Jani Cine",
    "gender": "Male",
    "age": 29,
    "category": "12. Stunt Director (Action Director)",
    "craft": "stunt performers/artists",
    "subRole": "stunt performers/artists Specialist",
    "experienceYears": 7,
    "nativePlace": "Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Stunt Guild)",
      "cardNumber": "STN-REG-4068",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 7 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "stunt performers/artists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "stunt performers/artists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "stunt performers/artists",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "stunt performers/artists Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98591 11111",
    "email": "janimasters1068@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-STN-1069",
    "name": "Raghu Master K.",
    "stageName": "Raghu Cine",
    "gender": "Female",
    "age": 34,
    "category": "12. Stunt Director (Action Director)",
    "craft": "safety riggers",
    "subRole": "safety riggers Specialist",
    "experienceYears": 10,
    "nativePlace": "Visakhapatnam, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Stunt Guild)",
      "cardNumber": "STN-REG-4069",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 10 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "safety riggers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "safety riggers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "safety riggers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "safety riggers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98592 12222",
    "email": "raghumasterk1069@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-STN-1070",
    "name": "Yashwanth Master",
    "stageName": "Yashwanth Cine",
    "gender": "Male",
    "age": 39,
    "category": "12. Stunt Director (Action Director)",
    "craft": "fight masters",
    "subRole": "fight masters Specialist",
    "experienceYears": 13,
    "nativePlace": "Vijayawada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Stunt Guild)",
      "cardNumber": "STN-REG-4070",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 13 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "fight masters",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "fight masters",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "fight masters",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "fight masters Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98593 13333",
    "email": "yashwanthmaster1070@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-STN-1071",
    "name": "Bhanu Master",
    "stageName": "Bhanu Cine",
    "gender": "Male",
    "age": 44,
    "category": "12. Stunt Director (Action Director)",
    "craft": "Action Director / Stunt Master",
    "subRole": "Action Director / Stunt Master Specialist",
    "experienceYears": 16,
    "nativePlace": "Rajahmundry, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Stunt Guild)",
      "cardNumber": "STN-REG-4071",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 16 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Action Director / Stunt Master",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Action Director / Stunt Master",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Action Director / Stunt Master",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Action Director / Stunt Master Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98594 14444",
    "email": "bhanumaster1071@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-STN-1072",
    "name": "Anee Master Ch.",
    "stageName": "Anee Cine",
    "gender": "Female",
    "age": 49,
    "category": "12. Stunt Director (Action Director)",
    "craft": "stunt performers/artists",
    "subRole": "stunt performers/artists Specialist",
    "experienceYears": 19,
    "nativePlace": "Tirupati, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Stunt Guild)",
      "cardNumber": "STN-REG-4072",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 19 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "stunt performers/artists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "stunt performers/artists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "stunt performers/artists",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "stunt performers/artists Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98595 15555",
    "email": "aneemasterch1072@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-DNC-1073",
    "name": "Rama Rajamouli",
    "stageName": "Rama Cine",
    "gender": "Male",
    "age": 27,
    "category": "13. Dance Choreographer",
    "craft": "Assistant choreographers",
    "subRole": "Assistant choreographers Specialist",
    "experienceYears": 6,
    "nativePlace": "Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Dance Guild)",
      "cardNumber": "DNC-REG-4073",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 6 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Assistant choreographers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Assistant choreographers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Assistant choreographers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Assistant choreographers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98600 10000",
    "email": "ramarajamouli1073@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-DNC-1074",
    "name": "Neeraja Kona",
    "stageName": "Neeraja Cine",
    "gender": "Female",
    "age": 32,
    "category": "13. Dance Choreographer",
    "craft": "backup dancers/group dancers",
    "subRole": "backup dancers/group dancers Specialist",
    "experienceYears": 9,
    "nativePlace": "Visakhapatnam, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Dance Guild)",
      "cardNumber": "DNC-REG-4074",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 9 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "backup dancers/group dancers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "backup dancers/group dancers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "backup dancers/group dancers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "backup dancers/group dancers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98601 11111",
    "email": "neerajakona1074@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-DNC-1075",
    "name": "Deepali Noor",
    "stageName": "Deepali Cine",
    "gender": "Male",
    "age": 37,
    "category": "13. Dance Choreographer",
    "craft": "Dance Choreographer / Master",
    "subRole": "Dance Choreographer / Master Specialist",
    "experienceYears": 12,
    "nativePlace": "Vijayawada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Dance Guild)",
      "cardNumber": "DNC-REG-4075",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 12 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Dance Choreographer / Master",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Dance Choreographer / Master",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Dance Choreographer / Master",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Dance Choreographer / Master Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98602 12222",
    "email": "deepalinoor1075@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-DNC-1076",
    "name": "Sushmita Konidela",
    "stageName": "Sushmita Cine",
    "gender": "Male",
    "age": 42,
    "category": "13. Dance Choreographer",
    "craft": "Folk & Western Dance Choreographer",
    "subRole": "Folk & Western Dance Choreographer Specialist",
    "experienceYears": 15,
    "nativePlace": "Rajahmundry, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Dance Guild)",
      "cardNumber": "DNC-REG-4076",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 15 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Folk & Western Dance Choreographer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Folk & Western Dance Choreographer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Folk & Western Dance Choreographer",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Folk & Western Dance Choreographer Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98603 13333",
    "email": "sushmitakonidela1076@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-DNC-1077",
    "name": "Ashwin Mawle",
    "stageName": "Ashwin Cine",
    "gender": "Female",
    "age": 47,
    "category": "13. Dance Choreographer",
    "craft": "Assistant choreographers",
    "subRole": "Assistant choreographers Specialist",
    "experienceYears": 18,
    "nativePlace": "Tirupati, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Dance Guild)",
      "cardNumber": "DNC-REG-4077",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 18 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Assistant choreographers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Assistant choreographers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Assistant choreographers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Assistant choreographers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98604 14444",
    "email": "ashwinmawle1077@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-DNC-1078",
    "name": "Hassan Khan B.",
    "stageName": "Hassan Cine",
    "gender": "Male",
    "age": 52,
    "category": "13. Dance Choreographer",
    "craft": "backup dancers/group dancers",
    "subRole": "backup dancers/group dancers Specialist",
    "experienceYears": 21,
    "nativePlace": "Guntur, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Dance Guild)",
      "cardNumber": "DNC-REG-4078",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 21 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "backup dancers/group dancers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "backup dancers/group dancers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "backup dancers/group dancers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "backup dancers/group dancers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98605 15555",
    "email": "hassankhanb1078@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-COS-1079",
    "name": "Pattabhi Ramarao",
    "stageName": "Pattabhi Cine",
    "gender": "Female",
    "age": 30,
    "category": "14. Costume Designer",
    "craft": "Wardrobe stylists",
    "subRole": "Wardrobe stylists Specialist",
    "experienceYears": 8,
    "nativePlace": "Visakhapatnam, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Costume Guild)",
      "cardNumber": "COS-REG-4079",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 8 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Wardrobe stylists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Wardrobe stylists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Wardrobe stylists",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Wardrobe stylists Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98610 10000",
    "email": "pattabhiramarao1079@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-COS-1080",
    "name": "Nani Somayajula",
    "stageName": "Nani Cine",
    "gender": "Male",
    "age": 35,
    "category": "14. Costume Designer",
    "craft": "costume assistants",
    "subRole": "costume assistants Specialist",
    "experienceYears": 11,
    "nativePlace": "Vijayawada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Costume Guild)",
      "cardNumber": "COS-REG-4080",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 11 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "costume assistants",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "costume assistants",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "costume assistants",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "costume assistants Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98611 11111",
    "email": "nanisomayajula1080@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-COS-1081",
    "name": "Basha Makeup Lead",
    "stageName": "Basha Cine",
    "gender": "Male",
    "age": 40,
    "category": "14. Costume Designer",
    "craft": "tailors/dressers",
    "subRole": "tailors/dressers Specialist",
    "experienceYears": 14,
    "nativePlace": "Rajahmundry, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Costume Guild)",
      "cardNumber": "COS-REG-4081",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 14 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "tailors/dressers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "tailors/dressers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "tailors/dressers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "tailors/dressers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98612 12222",
    "email": "bashamakeuplead1081@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-COS-1082",
    "name": "Raju Hair Stylist",
    "stageName": "Raju Cine",
    "gender": "Female",
    "age": 45,
    "category": "14. Costume Designer",
    "craft": "Head Costume Designer",
    "subRole": "Head Costume Designer Specialist",
    "experienceYears": 17,
    "nativePlace": "Tirupati, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Costume Guild)",
      "cardNumber": "COS-REG-4082",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 17 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Head Costume Designer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Head Costume Designer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Head Costume Designer",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Head Costume Designer Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98613 13333",
    "email": "rajuhairstylist1082@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-COS-1083",
    "name": "Murali Krishna MKP",
    "stageName": "Murali Cine",
    "gender": "Male",
    "age": 50,
    "category": "14. Costume Designer",
    "craft": "Wardrobe stylists",
    "subRole": "Wardrobe stylists Specialist",
    "experienceYears": 20,
    "nativePlace": "Guntur, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Costume Guild)",
      "cardNumber": "COS-REG-4083",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 20 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Wardrobe stylists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Wardrobe stylists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Wardrobe stylists",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Wardrobe stylists Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98614 14444",
    "email": "muralikrishnamkp1083@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-COS-1084",
    "name": "Rukmini SFX Specialist",
    "stageName": "Rukmini Cine",
    "gender": "Male",
    "age": 55,
    "category": "14. Costume Designer",
    "craft": "costume assistants",
    "subRole": "costume assistants Specialist",
    "experienceYears": 23,
    "nativePlace": "Warangal, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Costume Guild)",
      "cardNumber": "COS-REG-4084",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 23 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "costume assistants",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "costume assistants",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "costume assistants",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "costume assistants Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98615 15555",
    "email": "rukminisfxspecialist1084@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-MKP-1085",
    "name": "P. C. Sreeram ISC",
    "stageName": "P. Cine",
    "gender": "Male",
    "age": 33,
    "category": "15. Makeup Artist",
    "craft": "Hair stylists",
    "subRole": "Hair stylists Specialist",
    "experienceYears": 10,
    "nativePlace": "Vijayawada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Makeup Guild)",
      "cardNumber": "MKP-REG-4085",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 10 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Hair stylists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Hair stylists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Hair stylists",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Hair stylists Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98620 10000",
    "email": "pcsreeramisc1085@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-MKP-1086",
    "name": "Chota K. Naidu",
    "stageName": "Chota Cine",
    "gender": "Male",
    "age": 38,
    "category": "15. Makeup Artist",
    "craft": "prosthetic makeup artists",
    "subRole": "prosthetic makeup artists Specialist",
    "experienceYears": 13,
    "nativePlace": "Rajahmundry, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Makeup Guild)",
      "cardNumber": "MKP-REG-4086",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 13 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "prosthetic makeup artists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "prosthetic makeup artists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "prosthetic makeup artists",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "prosthetic makeup artists Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98621 11111",
    "email": "chotaknaidu1086@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-MKP-1087",
    "name": "R. Rathnavelu ISC",
    "stageName": "R. Cine",
    "gender": "Female",
    "age": 43,
    "category": "15. Makeup Artist",
    "craft": "body makeup artists",
    "subRole": "body makeup artists Specialist",
    "experienceYears": 16,
    "nativePlace": "Tirupati, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Makeup Guild)",
      "cardNumber": "MKP-REG-4087",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 16 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "body makeup artists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "body makeup artists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "body makeup artists",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "body makeup artists Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98622 12222",
    "email": "rrathnaveluisc1087@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-MKP-1088",
    "name": "Senthil Kumar KK",
    "stageName": "Senthil Cine",
    "gender": "Male",
    "age": 48,
    "category": "15. Makeup Artist",
    "craft": "Chief Makeup Artist",
    "subRole": "Chief Makeup Artist Specialist",
    "experienceYears": 19,
    "nativePlace": "Guntur, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Makeup Guild)",
      "cardNumber": "MKP-REG-4088",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 19 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Chief Makeup Artist",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Chief Makeup Artist",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Chief Makeup Artist",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Chief Makeup Artist Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98623 13333",
    "email": "senthilkumarkk1088@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-MKP-1089",
    "name": "Manoj Paramahamsa",
    "stageName": "Manoj Cine",
    "gender": "Male",
    "age": 53,
    "category": "15. Makeup Artist",
    "craft": "Hair stylists",
    "subRole": "Hair stylists Specialist",
    "experienceYears": 22,
    "nativePlace": "Warangal, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Makeup Guild)",
      "cardNumber": "MKP-REG-4089",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 22 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Hair stylists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Hair stylists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Hair stylists",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Hair stylists Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98624 14444",
    "email": "manojparamahamsa1089@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-MKP-1090",
    "name": "Dani Sanchez-Lopez",
    "stageName": "Dani Cine",
    "gender": "Female",
    "age": 58,
    "category": "15. Makeup Artist",
    "craft": "prosthetic makeup artists",
    "subRole": "prosthetic makeup artists Specialist",
    "experienceYears": 25,
    "nativePlace": "Nellore, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Makeup Guild)",
      "cardNumber": "MKP-REG-4090",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 25 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "prosthetic makeup artists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "prosthetic makeup artists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "prosthetic makeup artists",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "prosthetic makeup artists Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98625 15555",
    "email": "danisanchezlopez1090@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-SND-1091",
    "name": "A. Sreekar Prasad",
    "stageName": "A. Cine",
    "gender": "Male",
    "age": 36,
    "category": "16. Audiographer (Sound Designer / Sound Department)",
    "craft": "Production sound mixer",
    "subRole": "Production sound mixer Specialist",
    "experienceYears": 12,
    "nativePlace": "Rajahmundry, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Audiographer Guild)",
      "cardNumber": "SND-REG-4091",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 12 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Production sound mixer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Production sound mixer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Production sound mixer",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Production sound mixer Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98630 10000",
    "email": "asreekarprasad1091@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-SND-1092",
    "name": "Kotagiri Venkateswara Rao",
    "stageName": "Kotagiri Cine",
    "gender": "Female",
    "age": 41,
    "category": "16. Audiographer (Sound Designer / Sound Department)",
    "craft": "boom operators",
    "subRole": "boom operators Specialist",
    "experienceYears": 15,
    "nativePlace": "Tirupati, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Audiographer Guild)",
      "cardNumber": "SND-REG-4092",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 15 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "boom operators",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "boom operators",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "boom operators",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "boom operators Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98631 11111",
    "email": "kotagirivenkateswararao1092@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-SND-1093",
    "name": "Prawin Pudi",
    "stageName": "Prawin Cine",
    "gender": "Male",
    "age": 46,
    "category": "16. Audiographer (Sound Designer / Sound Department)",
    "craft": "Foley artists",
    "subRole": "Foley artists Specialist",
    "experienceYears": 18,
    "nativePlace": "Guntur, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Audiographer Guild)",
      "cardNumber": "SND-REG-4093",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 18 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Foley artists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Foley artists",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Foley artists",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Foley artists Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98632 12222",
    "email": "prawinpudi1093@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-SND-1094",
    "name": "Naveen Nooli",
    "stageName": "Naveen Cine",
    "gender": "Male",
    "age": 51,
    "category": "16. Audiographer (Sound Designer / Sound Department)",
    "craft": "re-recording mixers",
    "subRole": "re-recording mixers Specialist",
    "experienceYears": 21,
    "nativePlace": "Warangal, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Audiographer Guild)",
      "cardNumber": "SND-REG-4094",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 21 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "re-recording mixers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "re-recording mixers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "re-recording mixers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "re-recording mixers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98633 13333",
    "email": "naveennooli1094@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-SND-1095",
    "name": "Thammiraju V.",
    "stageName": "Thammiraju Cine",
    "gender": "Female",
    "age": 56,
    "category": "16. Audiographer (Sound Designer / Sound Department)",
    "craft": "dubbing engineers",
    "subRole": "dubbing engineers Specialist",
    "experienceYears": 24,
    "nativePlace": "Nellore, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Audiographer Guild)",
      "cardNumber": "SND-REG-4095",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 24 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "dubbing engineers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "dubbing engineers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "dubbing engineers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "dubbing engineers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98634 14444",
    "email": "thammirajuv1095@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-SND-1096",
    "name": "Gautham Nerusu",
    "stageName": "Gautham Cine",
    "gender": "Male",
    "age": 26,
    "category": "16. Audiographer (Sound Designer / Sound Department)",
    "craft": "Audiographer / Sound Designer",
    "subRole": "Audiographer / Sound Designer Specialist",
    "experienceYears": 5,
    "nativePlace": "Kakinada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Audiographer Guild)",
      "cardNumber": "SND-REG-4096",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 5 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Audiographer / Sound Designer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Audiographer / Sound Designer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Audiographer / Sound Designer",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Audiographer / Sound Designer Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98635 15555",
    "email": "gauthamnerusu1096@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-DUB-1097",
    "name": "Thota Tharani",
    "stageName": "Thota Cine",
    "gender": "Female",
    "age": 39,
    "category": "17. Dubbing Artist",
    "craft": "Voice actors for lead and supporting characters",
    "subRole": "Voice actors for lead and supporting characters Specialist",
    "experienceYears": 14,
    "nativePlace": "Tirupati, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Dubbing Guild)",
      "cardNumber": "DUB-REG-4097",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 14 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Voice actors for lead and supporting characters",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Voice actors for lead and supporting characters",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Voice actors for lead and supporting characters",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Voice actors for lead and supporting characters Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98640 10000",
    "email": "thotatharani1097@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-DUB-1098",
    "name": "Sabu Cyril",
    "stageName": "Sabu Cine",
    "gender": "Male",
    "age": 44,
    "category": "17. Dubbing Artist",
    "craft": "lip-sync supervisors",
    "subRole": "lip-sync supervisors Specialist",
    "experienceYears": 17,
    "nativePlace": "Guntur, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Dubbing Guild)",
      "cardNumber": "DUB-REG-4098",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 17 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "lip-sync supervisors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "lip-sync supervisors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "lip-sync supervisors",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "lip-sync supervisors Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98641 11111",
    "email": "sabucyril1098@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-DUB-1099",
    "name": "Ravinder Reddy",
    "stageName": "Ravinder Cine",
    "gender": "Male",
    "age": 49,
    "category": "17. Dubbing Artist",
    "craft": "Lead Dubbing Voice Actor",
    "subRole": "Lead Dubbing Voice Actor Specialist",
    "experienceYears": 20,
    "nativePlace": "Warangal, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Dubbing Guild)",
      "cardNumber": "DUB-REG-4099",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 20 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Lead Dubbing Voice Actor",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Lead Dubbing Voice Actor",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Lead Dubbing Voice Actor",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Lead Dubbing Voice Actor Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98642 12222",
    "email": "ravinderreddy1099@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-DUB-1100",
    "name": "A. S. Prakash",
    "stageName": "A. Cine",
    "gender": "Female",
    "age": 54,
    "category": "17. Dubbing Artist",
    "craft": "Voice actors for lead and supporting characters",
    "subRole": "Voice actors for lead and supporting characters Specialist",
    "experienceYears": 23,
    "nativePlace": "Nellore, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Dubbing Guild)",
      "cardNumber": "DUB-REG-4100",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 23 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Voice actors for lead and supporting characters",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Voice actors for lead and supporting characters",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Voice actors for lead and supporting characters",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Voice actors for lead and supporting characters Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98643 13333",
    "email": "asprakash1100@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-DUB-1101",
    "name": "Avinash Kolla",
    "stageName": "Avinash Cine",
    "gender": "Male",
    "age": 59,
    "category": "17. Dubbing Artist",
    "craft": "lip-sync supervisors",
    "subRole": "lip-sync supervisors Specialist",
    "experienceYears": 4,
    "nativePlace": "Kakinada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Dubbing Guild)",
      "cardNumber": "DUB-REG-4101",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 4 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "lip-sync supervisors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "lip-sync supervisors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "lip-sync supervisors",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "lip-sync supervisors Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98644 14444",
    "email": "avinashkolla1101@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-DUB-1102",
    "name": "Bhupesh R. Bhupathi",
    "stageName": "Bhupesh Cine",
    "gender": "Male",
    "age": 29,
    "category": "17. Dubbing Artist",
    "craft": "Lead Dubbing Voice Actor",
    "subRole": "Lead Dubbing Voice Actor Specialist",
    "experienceYears": 7,
    "nativePlace": "Kurnool, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Dubbing Guild)",
      "cardNumber": "DUB-REG-4102",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 7 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Lead Dubbing Voice Actor",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Lead Dubbing Voice Actor",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Lead Dubbing Voice Actor",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Lead Dubbing Voice Actor Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98645 15555",
    "email": "bhupeshrbhupathi1102@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-PHO-1103",
    "name": "Chalasani Ashwini Dutt",
    "stageName": "Chalasani Cine",
    "gender": "Male",
    "age": 42,
    "category": "18. Still Photographer",
    "craft": "Unit publicity photographers",
    "subRole": "Unit publicity photographers Specialist",
    "experienceYears": 16,
    "nativePlace": "Guntur, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Still Guild)",
      "cardNumber": "PHO-REG-4103",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 16 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Unit publicity photographers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Unit publicity photographers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Unit publicity photographers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Unit publicity photographers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98650 10000",
    "email": "chalasaniashwinidutt1103@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-PHO-1104",
    "name": "Allu Aravind G.",
    "stageName": "Allu Cine",
    "gender": "Male",
    "age": 47,
    "category": "18. Still Photographer",
    "craft": "behind-the-scenes (BTS) shooters",
    "subRole": "behind-the-scenes (BTS) shooters Specialist",
    "experienceYears": 19,
    "nativePlace": "Warangal, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Still Guild)",
      "cardNumber": "PHO-REG-4104",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 19 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "behind-the-scenes (BTS) shooters",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "behind-the-scenes (BTS) shooters",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "behind-the-scenes (BTS) shooters",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "behind-the-scenes (BTS) shooters Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98651 11111",
    "email": "alluaravindg1104@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-PHO-1105",
    "name": "Dil Raju V.",
    "stageName": "Dil Cine",
    "gender": "Female",
    "age": 52,
    "category": "18. Still Photographer",
    "craft": "First Look & Poster Stills Specialist",
    "subRole": "First Look & Poster Stills Specialist Specialist",
    "experienceYears": 22,
    "nativePlace": "Nellore, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Still Guild)",
      "cardNumber": "PHO-REG-4105",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 22 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "First Look & Poster Stills Specialist",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "First Look & Poster Stills Specialist",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "First Look & Poster Stills Specialist",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "First Look & Poster Stills Specialist Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98652 12222",
    "email": "dilrajuv1105@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-PHO-1106",
    "name": "D. Suresh Babu",
    "stageName": "D. Cine",
    "gender": "Male",
    "age": 57,
    "category": "18. Still Photographer",
    "craft": "Unit publicity photographers",
    "subRole": "Unit publicity photographers Specialist",
    "experienceYears": 25,
    "nativePlace": "Kakinada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Still Guild)",
      "cardNumber": "PHO-REG-4106",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 25 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Unit publicity photographers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Unit publicity photographers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Unit publicity photographers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Unit publicity photographers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98653 13333",
    "email": "dsureshbabu1106@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-PHO-1107",
    "name": "BVSN Prasad",
    "stageName": "BVSN Cine",
    "gender": "Male",
    "age": 27,
    "category": "18. Still Photographer",
    "craft": "behind-the-scenes (BTS) shooters",
    "subRole": "behind-the-scenes (BTS) shooters Specialist",
    "experienceYears": 6,
    "nativePlace": "Kurnool, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Still Guild)",
      "cardNumber": "PHO-REG-4107",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 6 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "behind-the-scenes (BTS) shooters",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "behind-the-scenes (BTS) shooters",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "behind-the-scenes (BTS) shooters",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "behind-the-scenes (BTS) shooters Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98654 14444",
    "email": "bvsnprasad1107@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-PHO-1108",
    "name": "Naveen Yerneni",
    "stageName": "Naveen Cine",
    "gender": "Female",
    "age": 32,
    "category": "18. Still Photographer",
    "craft": "First Look & Poster Stills Specialist",
    "subRole": "First Look & Poster Stills Specialist Specialist",
    "experienceYears": 9,
    "nativePlace": "Chennai & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Still Guild)",
      "cardNumber": "PHO-REG-4108",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 9 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "First Look & Poster Stills Specialist",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "First Look & Poster Stills Specialist",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "First Look & Poster Stills Specialist",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "First Look & Poster Stills Specialist Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98655 15555",
    "email": "naveenyerneni1108@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-PUB-1109",
    "name": "Appa Rao Gaffer",
    "stageName": "Appa Cine",
    "gender": "Male",
    "age": 45,
    "category": "19. Publicity Designer",
    "craft": "Poster designers",
    "subRole": "Poster designers Specialist",
    "experienceYears": 18,
    "nativePlace": "Warangal, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Publicity Guild)",
      "cardNumber": "PUB-REG-4109",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 18 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Poster designers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Poster designers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Poster designers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Poster designers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98660 10000",
    "email": "apparaogaffer1109@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-PUB-1110",
    "name": "Nageswara Rao Light",
    "stageName": "Nageswara Cine",
    "gender": "Female",
    "age": 50,
    "category": "19. Publicity Designer",
    "craft": "teaser/trailer editors",
    "subRole": "teaser/trailer editors Specialist",
    "experienceYears": 21,
    "nativePlace": "Nellore, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Publicity Guild)",
      "cardNumber": "PUB-REG-4110",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 21 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "teaser/trailer editors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "teaser/trailer editors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "teaser/trailer editors",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "teaser/trailer editors Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98661 11111",
    "email": "nageswararaolight1110@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-PUB-1111",
    "name": "Mallesh Lighting Tech",
    "stageName": "Mallesh Cine",
    "gender": "Male",
    "age": 55,
    "category": "19. Publicity Designer",
    "craft": "digital marketing asset creators",
    "subRole": "digital marketing asset creators Specialist",
    "experienceYears": 24,
    "nativePlace": "Kakinada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Publicity Guild)",
      "cardNumber": "PUB-REG-4111",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 24 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "digital marketing asset creators",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "digital marketing asset creators",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "digital marketing asset creators",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "digital marketing asset creators Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98662 12222",
    "email": "malleshlightingtech1111@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-PUB-1112",
    "name": "Subba Rao Grip Lead",
    "stageName": "Subba Cine",
    "gender": "Male",
    "age": 60,
    "category": "19. Publicity Designer",
    "craft": "Head Publicity Designer",
    "subRole": "Head Publicity Designer Specialist",
    "experienceYears": 5,
    "nativePlace": "Kurnool, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Publicity Guild)",
      "cardNumber": "PUB-REG-4112",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 5 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Head Publicity Designer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Head Publicity Designer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Head Publicity Designer",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Head Publicity Designer Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98663 13333",
    "email": "subbaraogriplead1112@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-PUB-1113",
    "name": "Chinna Lamp Operator",
    "stageName": "Chinna Cine",
    "gender": "Female",
    "age": 30,
    "category": "19. Publicity Designer",
    "craft": "Poster designers",
    "subRole": "Poster designers Specialist",
    "experienceYears": 8,
    "nativePlace": "Chennai & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Publicity Guild)",
      "cardNumber": "PUB-REG-4113",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 8 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Poster designers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Poster designers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Poster designers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Poster designers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98664 14444",
    "email": "chinnalampoperator1113@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-PUB-1114",
    "name": "Govindu Best Boy",
    "stageName": "Govindu Cine",
    "gender": "Male",
    "age": 35,
    "category": "19. Publicity Designer",
    "craft": "teaser/trailer editors",
    "subRole": "teaser/trailer editors Specialist",
    "experienceYears": 11,
    "nativePlace": "Bengaluru & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Publicity Guild)",
      "cardNumber": "PUB-REG-4114",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 11 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "teaser/trailer editors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "teaser/trailer editors",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "teaser/trailer editors",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "teaser/trailer editors Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98665 15555",
    "email": "govindubestboy1114@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-PRD-1115",
    "name": "Ramu Crane Tech",
    "stageName": "Ramu Cine",
    "gender": "Female",
    "age": 48,
    "category": "20. Production Executive",
    "craft": "Line producers",
    "subRole": "Line producers Specialist",
    "experienceYears": 20,
    "nativePlace": "Nellore, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Production Guild)",
      "cardNumber": "PRD-REG-4115",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 20 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Line producers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Line producers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Line producers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Line producers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98670 10000",
    "email": "ramucranetech1115@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-PRD-1116",
    "name": "Satyanarayana Gen-Tech",
    "stageName": "Satyanarayana Cine",
    "gender": "Male",
    "age": 53,
    "category": "20. Production Executive",
    "craft": "production managers",
    "subRole": "production managers Specialist",
    "experienceYears": 23,
    "nativePlace": "Kakinada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Production Guild)",
      "cardNumber": "PRD-REG-4116",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 23 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "production managers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "production managers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "production managers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "production managers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98671 11111",
    "email": "satyanarayanagentech1116@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-PRD-1117",
    "name": "Narasimha Jib Lead",
    "stageName": "Narasimha Cine",
    "gender": "Male",
    "age": 58,
    "category": "20. Production Executive",
    "craft": "location scouts/managers",
    "subRole": "location scouts/managers Specialist",
    "experienceYears": 4,
    "nativePlace": "Kurnool, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Production Guild)",
      "cardNumber": "PRD-REG-4117",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 4 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "location scouts/managers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "location scouts/managers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "location scouts/managers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "location scouts/managers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98672 12222",
    "email": "narasimhajiblead1117@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-PRD-1118",
    "name": "Suri Babu Dolly Tech",
    "stageName": "Suri Cine",
    "gender": "Female",
    "age": 28,
    "category": "20. Production Executive",
    "craft": "accountants",
    "subRole": "accountants Specialist",
    "experienceYears": 7,
    "nativePlace": "Chennai & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Production Guild)",
      "cardNumber": "PRD-REG-4118",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 7 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "accountants",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "accountants",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "accountants",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "accountants Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98673 13333",
    "email": "suribabudollytech1118@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-PRD-1119",
    "name": "Anji Unit In-Charge",
    "stageName": "Anji Cine",
    "gender": "Male",
    "age": 33,
    "category": "20. Production Executive",
    "craft": "Executive Producer",
    "subRole": "Executive Producer Specialist",
    "experienceYears": 10,
    "nativePlace": "Bengaluru & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Production Guild)",
      "cardNumber": "PRD-REG-4119",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 10 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Executive Producer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Executive Producer",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Executive Producer",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Executive Producer Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98674 14444",
    "email": "anjiunitincharge1119@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-PRD-1120",
    "name": "Kasi Remote Head Tech",
    "stageName": "Kasi Cine",
    "gender": "Male",
    "age": 38,
    "category": "20. Production Executive",
    "craft": "Line producers",
    "subRole": "Line producers Specialist",
    "experienceYears": 13,
    "nativePlace": "Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Production Guild)",
      "cardNumber": "PRD-REG-4120",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 13 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Line producers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Line producers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Line producers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Line producers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98675 15555",
    "email": "kasiremoteheadtech1120@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-OUT-1121",
    "name": "Babu Studio Carpenter",
    "stageName": "Babu Cine",
    "gender": "Male",
    "age": 51,
    "category": "21. Outdoor Unit Technicians",
    "craft": "Camera support technicians",
    "subRole": "Camera support technicians Specialist",
    "experienceYears": 22,
    "nativePlace": "Kakinada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Outdoor Guild)",
      "cardNumber": "OUT-REG-4121",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 22 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Camera support technicians",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Camera support technicians",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Camera support technicians",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Camera support technicians Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98680 10000",
    "email": "babustudiocarpenter1121@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-OUT-1122",
    "name": "Krishna Scenic Painter",
    "stageName": "Krishna Cine",
    "gender": "Male",
    "age": 56,
    "category": "21. Outdoor Unit Technicians",
    "craft": "generator operators",
    "subRole": "generator operators Specialist",
    "experienceYears": 25,
    "nativePlace": "Kurnool, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Outdoor Guild)",
      "cardNumber": "OUT-REG-4122",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 25 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "generator operators",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "generator operators",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "generator operators",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "generator operators Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98681 11111",
    "email": "krishnascenicpainter1122@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-OUT-1123",
    "name": "Venkata Swamy Moulder",
    "stageName": "Venkata Cine",
    "gender": "Female",
    "age": 26,
    "category": "21. Outdoor Unit Technicians",
    "craft": "crane/jib operators",
    "subRole": "crane/jib operators Specialist",
    "experienceYears": 6,
    "nativePlace": "Chennai & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Outdoor Guild)",
      "cardNumber": "OUT-REG-4123",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 6 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "crane/jib operators",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "crane/jib operators",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "crane/jib operators",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "crane/jib operators Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98682 12222",
    "email": "venkataswamymoulder1123@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-OUT-1124",
    "name": "Shankar Set Welder",
    "stageName": "Shankar Cine",
    "gender": "Male",
    "age": 31,
    "category": "21. Outdoor Unit Technicians",
    "craft": "Outdoor Unit Supervisor",
    "subRole": "Outdoor Unit Supervisor Specialist",
    "experienceYears": 9,
    "nativePlace": "Bengaluru & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Outdoor Guild)",
      "cardNumber": "OUT-REG-4124",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 9 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Outdoor Unit Supervisor",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Outdoor Unit Supervisor",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Outdoor Unit Supervisor",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Outdoor Unit Supervisor Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98683 13333",
    "email": "shankarsetwelder1124@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-OUT-1125",
    "name": "Durga Rao Construction",
    "stageName": "Durga Cine",
    "gender": "Male",
    "age": 36,
    "category": "21. Outdoor Unit Technicians",
    "craft": "Camera support technicians",
    "subRole": "Camera support technicians Specialist",
    "experienceYears": 12,
    "nativePlace": "Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Outdoor Guild)",
      "cardNumber": "OUT-REG-4125",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 12 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Camera support technicians",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Camera support technicians",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Camera support technicians",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Camera support technicians Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98684 14444",
    "email": "durgaraoconstruction1125@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-OUT-1126",
    "name": "Narayana POP Tech",
    "stageName": "Narayana Cine",
    "gender": "Female",
    "age": 41,
    "category": "21. Outdoor Unit Technicians",
    "craft": "generator operators",
    "subRole": "generator operators Specialist",
    "experienceYears": 15,
    "nativePlace": "Visakhapatnam, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Outdoor Guild)",
      "cardNumber": "OUT-REG-4126",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 15 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "generator operators",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "generator operators",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "generator operators",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "generator operators Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98685 15555",
    "email": "narayanapoptech1126@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-LGT-1127",
    "name": "Siva Cinema Driver",
    "stageName": "Siva Cine",
    "gender": "Male",
    "age": 54,
    "category": "22. Outdoor Lightmen",
    "craft": "Gaffers",
    "subRole": "Gaffers Specialist",
    "experienceYears": 24,
    "nativePlace": "Kurnool, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Outdoor Guild)",
      "cardNumber": "LGT-REG-4127",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 24 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Gaffers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Gaffers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Gaffers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Gaffers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98690 10000",
    "email": "sivacinemadriver1127@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-LGT-1128",
    "name": "Balaraju Set Helper",
    "stageName": "Balaraju Cine",
    "gender": "Female",
    "age": 59,
    "category": "22. Outdoor Lightmen",
    "craft": "best boy electric",
    "subRole": "best boy electric Specialist",
    "experienceYears": 5,
    "nativePlace": "Chennai & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Outdoor Guild)",
      "cardNumber": "LGT-REG-4128",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 5 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "best boy electric",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "best boy electric",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "best boy electric",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "best boy electric Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98691 11111",
    "email": "balarajusethelper1128@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-LGT-1129",
    "name": "Sita Devi Sanitation Lead",
    "stageName": "Sita Cine",
    "gender": "Male",
    "age": 29,
    "category": "22. Outdoor Lightmen",
    "craft": "lamp operators",
    "subRole": "lamp operators Specialist",
    "experienceYears": 8,
    "nativePlace": "Bengaluru & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Outdoor Guild)",
      "cardNumber": "LGT-REG-4129",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 8 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "lamp operators",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "lamp operators",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "lamp operators",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "lamp operators Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98692 12222",
    "email": "sitadevisanitationlead1129@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-LGT-1130",
    "name": "Lakshmi Set Housekeeper",
    "stageName": "Lakshmi Cine",
    "gender": "Male",
    "age": 34,
    "category": "22. Outdoor Lightmen",
    "craft": "grip crew",
    "subRole": "grip crew Specialist",
    "experienceYears": 11,
    "nativePlace": "Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Outdoor Guild)",
      "cardNumber": "LGT-REG-4130",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 11 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "grip crew",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "grip crew",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "grip crew",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "grip crew Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98693 13333",
    "email": "lakshmisethousekeeper1130@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-LGT-1131",
    "name": "Ravi Production Runner",
    "stageName": "Ravi Cine",
    "gender": "Female",
    "age": 39,
    "category": "22. Outdoor Lightmen",
    "craft": "Chief Lighting Technician",
    "subRole": "Chief Lighting Technician Specialist",
    "experienceYears": 14,
    "nativePlace": "Visakhapatnam, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Outdoor Guild)",
      "cardNumber": "LGT-REG-4131",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 14 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Chief Lighting Technician",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Chief Lighting Technician",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Chief Lighting Technician",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Chief Lighting Technician Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98694 14444",
    "email": "raviproductionrunner1131@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-LGT-1132",
    "name": "Mohan Protocol Marshal",
    "stageName": "Mohan Cine",
    "gender": "Male",
    "age": 44,
    "category": "22. Outdoor Lightmen",
    "craft": "Gaffers",
    "subRole": "Gaffers Specialist",
    "experienceYears": 17,
    "nativePlace": "Vijayawada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Outdoor Guild)",
      "cardNumber": "LGT-REG-4132",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 17 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Gaffers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Gaffers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Gaffers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Gaffers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98695 15555",
    "email": "mohanprotocolmarshal1132@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-STU-1133",
    "name": "K. S. Raghavan",
    "stageName": "K. Cine",
    "gender": "Female",
    "age": 57,
    "category": "23. Studio Workers",
    "craft": "Carpenters",
    "subRole": "Carpenters Specialist",
    "experienceYears": 4,
    "nativePlace": "Chennai & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Studio Guild)",
      "cardNumber": "STU-REG-4133",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 4 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Carpenters",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Carpenters",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Carpenters",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Carpenters Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98700 10000",
    "email": "ksraghavan1133@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-STU-1134",
    "name": "Gautham Chander",
    "stageName": "Gautham Cine",
    "gender": "Male",
    "age": 27,
    "category": "23. Studio Workers",
    "craft": "painters",
    "subRole": "painters Specialist",
    "experienceYears": 7,
    "nativePlace": "Bengaluru & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Studio Guild)",
      "cardNumber": "STU-REG-4134",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 7 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "painters",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "painters",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "painters",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "painters Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98701 11111",
    "email": "gauthamchander1134@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-STU-1135",
    "name": "Nandini K. Varma",
    "stageName": "Nandini Cine",
    "gender": "Male",
    "age": 32,
    "category": "23. Studio Workers",
    "craft": "moulders",
    "subRole": "moulders Specialist",
    "experienceYears": 10,
    "nativePlace": "Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Studio Guild)",
      "cardNumber": "STU-REG-4135",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 10 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "moulders",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "moulders",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "moulders",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "moulders Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98702 12222",
    "email": "nandinikvarma1135@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-STU-1136",
    "name": "Prasad Rao Vaddi",
    "stageName": "Prasad Cine",
    "gender": "Female",
    "age": 37,
    "category": "23. Studio Workers",
    "craft": "construction crew",
    "subRole": "construction crew Specialist",
    "experienceYears": 13,
    "nativePlace": "Visakhapatnam, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Studio Guild)",
      "cardNumber": "STU-REG-4136",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 13 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "construction crew",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "construction crew",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "construction crew",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "construction crew Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98703 13333",
    "email": "prasadraovaddi1136@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-STU-1137",
    "name": "Sneha Latha Reddy",
    "stageName": "Sneha Cine",
    "gender": "Male",
    "age": 42,
    "category": "23. Studio Workers",
    "craft": "light/set builders",
    "subRole": "light/set builders Specialist",
    "experienceYears": 16,
    "nativePlace": "Vijayawada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Studio Guild)",
      "cardNumber": "STU-REG-4137",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 16 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "light/set builders",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "light/set builders",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "light/set builders",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "light/set builders Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98704 14444",
    "email": "snehalathareddy1137@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-STU-1138",
    "name": "Vikramaditya Raju",
    "stageName": "Vikramaditya Cine",
    "gender": "Male",
    "age": 47,
    "category": "23. Studio Workers",
    "craft": "Studio Master Builder",
    "subRole": "Studio Master Builder Specialist",
    "experienceYears": 19,
    "nativePlace": "Rajahmundry, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Studio Guild)",
      "cardNumber": "STU-REG-4138",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 19 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Studio Master Builder",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Studio Master Builder",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Studio Master Builder",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Studio Master Builder Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98705 15555",
    "email": "vikramadityaraju1138@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-PAS-1139",
    "name": "Deva Katta Rao",
    "stageName": "Deva Cine",
    "gender": "Male",
    "age": 60,
    "category": "24. Production Assistants / Support Staff",
    "craft": "Production runners",
    "subRole": "Production runners Specialist",
    "experienceYears": 6,
    "nativePlace": "Bengaluru & Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Production Guild)",
      "cardNumber": "PAS-REG-4139",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 6 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Production runners",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Production runners",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Production runners",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Production runners Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98710 10000",
    "email": "devakattarao1139@24crofts.com",
    "availability": "Available",
    "featured": true,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-PAS-1140",
    "name": "Ananya Manchu",
    "stageName": "Ananya Cine",
    "gender": "Male",
    "age": 30,
    "category": "24. Production Assistants / Support Staff",
    "craft": "cinema drivers",
    "subRole": "cinema drivers Specialist",
    "experienceYears": 9,
    "nativePlace": "Hyderabad, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Production Guild)",
      "cardNumber": "PAS-REG-4140",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 9 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "cinema drivers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "cinema drivers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "cinema drivers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "cinema drivers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98711 11111",
    "email": "ananyamanchu1140@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": true,
    "password": "craft2026password"
  },
  {
    "id": "24C-PAS-1141",
    "name": "Manoj Kumar V.",
    "stageName": "Manoj Cine",
    "gender": "Female",
    "age": 35,
    "category": "24. Production Assistants / Support Staff",
    "craft": "set helpers",
    "subRole": "set helpers Specialist",
    "experienceYears": 12,
    "nativePlace": "Visakhapatnam, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Production Guild)",
      "cardNumber": "PAS-REG-4141",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 12 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "set helpers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "set helpers",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "set helpers",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "set helpers Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98712 12222",
    "email": "manojkumarv1141@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-PAS-1142",
    "name": "Savitri Rayapati",
    "stageName": "Savitri Cine",
    "gender": "Male",
    "age": 40,
    "category": "24. Production Assistants / Support Staff",
    "craft": "and production women (sanitation/housekeeping on set)",
    "subRole": "and production women (sanitation/housekeeping on set) Specialist",
    "experienceYears": 15,
    "nativePlace": "Vijayawada, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Production Guild)",
      "cardNumber": "PAS-REG-4142",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 15 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "and production women (sanitation/housekeeping on set)",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "and production women (sanitation/housekeeping on set)",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "and production women (sanitation/housekeeping on set)",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "and production women (sanitation/housekeeping on set) Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98713 13333",
    "email": "savitrirayapati1142@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-PAS-1143",
    "name": "Sharath Chandra P.",
    "stageName": "Sharath Cine",
    "gender": "Male",
    "age": 45,
    "category": "24. Production Assistants / Support Staff",
    "craft": "On-Set Production Assistant",
    "subRole": "On-Set Production Assistant Specialist",
    "experienceYears": 18,
    "nativePlace": "Rajahmundry, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Production Guild)",
      "cardNumber": "PAS-REG-4143",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 18 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "On-Set Production Assistant",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "On-Set Production Assistant",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "On-Set Production Assistant",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "On-Set Production Assistant Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98714 14444",
    "email": "sharathchandrap1143@24crofts.com",
    "availability": "Available",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  },
  {
    "id": "24C-PAS-1144",
    "name": "Divya Teja Kosaraju",
    "stageName": "Divya Cine",
    "gender": "Female",
    "age": 50,
    "category": "24. Production Assistants / Support Staff",
    "craft": "Production runners",
    "subRole": "Production runners Specialist",
    "experienceYears": 21,
    "nativePlace": "Tirupati, Andhra Pradesh / Telangana",
    "currentCity": "Hyderabad",
    "languages": [
      "Telugu",
      "Hindi",
      "English"
    ],
    "unionCard": {
      "hasCard": true,
      "unionName": "Telugu Cine Workers Federation (Production Guild)",
      "cardNumber": "PAS-REG-4144",
      "verified": true
    },
    "bio": "Accomplished and union-certified cinema professional with over 21 years of active service across major Telugu, Tamil, and Pan-India feature films. Known for discipline, craftsmanship, and commitment to the 24 Crafts tradition.",
    "keyProjects": [
      {
        "title": "Devara: Part 1",
        "year": 2024,
        "role": "Production runners",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Pushpa 2: The Rule",
        "year": 2024,
        "role": "Production runners",
        "language": "Telugu",
        "notable": true
      },
      {
        "title": "Kalki 2898 AD",
        "year": 2024,
        "role": "Production runners",
        "language": "Telugu / Hindi",
        "notable": true
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
    ],
    "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    "youtubeVideos": [
      {
        "title": "Production runners Showreel 2026",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "videoId": "dQw4w9WgXcQ",
        "isShowreel": true
      }
    ],
    "contactNumber": "+91 98715 15555",
    "email": "divyatejakosaraju1144@24crofts.com",
    "availability": "On Shoot",
    "featured": false,
    "createdAt": "2026-03-15",
    "isNew": false,
    "password": "craft2026password"
  }
];

export const INITIAL_MOVIE_ADS: MovieAdSubmission[] = [
  {
    id: 'AD-2026-01',
    title: 'Viraat: The Iron Emperor',
    tagline: 'When empires collide, only one will withstand the tide of blood.',
    productionBanner: 'Hombale Films South',
    director: 'K. S. Raghavan',
    starring: 'Prabhas, Deepika Padukone, Kamal Haasan',
    category: 'Historical Epic / Action',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80',
    releaseDate: 'Dussehra 2026',
    submitterName: 'Vijay Kiragandur',
    submitterPhone: '+91 98480 12345',
    submitterEmail: 'hombale.promos@cinema.com',
    status: 'approved',
    submittedAt: '2026-03-15',
    budget: '₹250 Crores',
    synopsis: 'A grand mythological action spectacle charting the rise of a forgotten 14th century Deccan ruler who united fractured kingdoms against an invading empire.',
  },
  {
    id: 'AD-2026-02',
    title: 'CyberHyd 2099',
    tagline: 'The future has no firewall for human desire.',
    productionBanner: 'Vyjayanthi Movies',
    director: 'Nag Ashwin',
    starring: 'Ram Charan, Sai Pallavi, Amitabh Bachchan',
    category: 'Sci-Fi Action Thriller',
    youtubeUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    posterUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    releaseDate: 'Sankranti 2027',
    submitterName: 'Swapna Dutt',
    submitterPhone: '+91 98490 23456',
    submitterEmail: 'vyjayanthi.films@media.in',
    status: 'approved',
    submittedAt: '2026-03-18',
    budget: '₹320 Crores',
    synopsis: 'In a dystopian cyberpunk Hyderabad submerged in neon and artificial rain, an augmented investigator hunts down rogue consciousness algorithms.',
  },
  {
    id: 'AD-2026-03',
    title: 'Madrasapattinam Melodies',
    tagline: 'A love story tuned across fifty years of forgotten vinyl.',
    productionBanner: 'Mythri Movie Makers',
    director: 'Nandini K. Varma',
    starring: 'Dulquer Salmaan, Mrunal Thakur',
    category: 'Musical Romance',
    youtubeUrl: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
    posterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    releaseDate: 'Diwali 2026',
    submitterName: 'Y. Ravi Shankar',
    submitterPhone: '+91 98480 34567',
    submitterEmail: 'mythri.production@telugucine.com',
    status: 'approved',
    submittedAt: '2026-03-20',
    budget: '₹45 Crores',
    synopsis: 'A vintage musical romance tracing two aspiring radio musicians in 1970s South India who rediscover their immortal composition half a century later.',
  },
  {
    id: 'AD-2026-04',
    title: 'Godaavari Gunde Chappudu',
    tagline: 'Blood runs deeper than the river waters.',
    productionBanner: 'Geetha Arts',
    director: 'Sukumar Bandreddi',
    starring: 'Allu Arjun, Rashmika Mandanna, Fahadh Faasil',
    category: 'Mythological Crime Drama',
    youtubeUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    posterUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    releaseDate: 'Pushkara Celebrations 2026',
    submitterName: 'Allu Aravind',
    submitterPhone: '+91 98480 98765',
    submitterEmail: 'geethaarts.desk@geetha.com',
    status: 'approved',
    submittedAt: '2026-03-22',
    budget: '₹180 Crores',
    synopsis: 'A rugged, river-bed rural feud set along the lush banks of Godavari examining heritage, pride, and ancient family oaths.',
  },
  {
    id: 'AD-2026-05',
    title: 'Thunderbolt: Special Ops',
    tagline: 'When diplomacy expires, fire is our only vocabulary.',
    productionBanner: 'AK Entertainments',
    director: 'Gautham Chander',
    starring: 'Adivi Sesh, Sobhita Dhulipala',
    category: 'High-Octane Action',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    posterUrl: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?auto=format&fit=crop&w=1200&q=80',
    releaseDate: 'Independence Day 2026',
    submitterName: 'Anil Sunkara',
    submitterPhone: '+91 98490 11223',
    submitterEmail: 'akentertainments@gmail.com',
    status: 'approved',
    submittedAt: '2026-03-25',
    budget: '₹65 Crores',
    synopsis: 'An undercover intelligence commando unit executes a high-stakes covert mission across international borders within a 36-hour deadline.',
  },
  {
    id: 'AD-2026-06',
    title: 'Midnight Whispers',
    tagline: 'Trust the reflection. Fear the shadows behind it.',
    productionBanner: 'Sithara Entertainments',
    director: 'Prasad Rao Vaddi',
    starring: 'Vijay Deverakonda, Sreeleela',
    category: 'Psychological Neo-Noir',
    youtubeUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    posterUrl: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=1200&q=80',
    releaseDate: 'Halloween 2026',
    submitterName: 'Suryadevara Naga Vamsi',
    submitterPhone: '+91 98480 33445',
    submitterEmail: 'sithara.promos@sithara.in',
    status: 'approved',
    submittedAt: '2026-03-28',
    budget: '₹50 Crores',
    synopsis: 'A celebrated radio host in Hyderabad begins receiving cryptic live midnight calls from a listener reciting exact details of unsolved crimes before they occur.',
  },
  {
    id: 'AD-2026-07',
    title: 'Venkatadri Express Returns',
    tagline: 'The whistle blows. The madness resumes.',
    productionBanner: 'Suresh Productions',
    director: 'Chandoo Mondeti',
    starring: 'Sundeep Kishan, Anupama Parameswaran',
    category: 'Family Comedy & Romance',
    youtubeUrl: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
    posterUrl: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80',
    releaseDate: 'Christmas 2026',
    submitterName: 'D. Suresh Babu',
    submitterPhone: '+91 98490 44556',
    submitterEmail: 'sureshproductions@gmail.com',
    status: 'approved',
    submittedAt: '2026-03-30',
    budget: '₹28 Crores',
    synopsis: 'A madcap destination wedding road journey on a chartered train from Hyderabad to Tirupati filled with family rivalry and comedic chaos.',
  },
  {
    id: 'AD-2026-08',
    title: 'Chrono Mirage',
    tagline: 'You cannot rewrite the past without deleting yourself.',
    productionBanner: 'UV Creations',
    director: 'Kabir Varma ISC',
    starring: 'Sharwanand, Rukmini Vasanth',
    category: 'Time Loop Sci-Fi',
    youtubeUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    posterUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    releaseDate: 'November 2026',
    submitterName: 'Vamsi & Pramod',
    submitterPhone: '+91 98480 66778',
    submitterEmail: 'uvcreations@gmail.com',
    status: 'approved',
    submittedAt: '2026-04-01',
    budget: '₹55 Crores',
    synopsis: 'A physicist discovers a time-dilation portal beneath the Charminar and attempts to prevent a historical catastrophe.',
  },
  {
    id: 'AD-2026-09',
    title: 'The Tiger of Palnadu',
    tagline: 'Born from the red soil. Bound by honour.',
    productionBanner: 'Sri Venkateswara Creations',
    director: 'K. S. Raghavan',
    starring: 'Nani, Mrunal Thakur',
    category: 'Period Folk Epic',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    posterUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
    releaseDate: 'Pongal 2027',
    submitterName: 'Dil Raju',
    submitterPhone: '+91 98490 77889',
    submitterEmail: 'dilraju@svc.in',
    status: 'approved',
    submittedAt: '2026-04-02',
    budget: '₹110 Crores',
    synopsis: 'An emotionally stirring tribute to medieval Telugu folklore, agrarian resilience, and legendary martial valor.',
  },
  {
    id: 'AD-2026-10',
    title: 'Echoes of Malabar',
    tagline: 'The ocean whispers secrets no court can silence.',
    productionBanner: 'DVV Entertainment',
    director: 'Meera Nambiar',
    starring: 'Dulquer Salmaan, Rashmika Mandanna',
    category: 'Coastal Detective Mystery',
    youtubeUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    posterUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    releaseDate: 'September 2026',
    submitterName: 'DVV Danayya',
    submitterPhone: '+91 98480 88990',
    submitterEmail: 'dvventertainment@gmail.com',
    status: 'approved',
    submittedAt: '2026-04-03',
    budget: '₹60 Crores',
    synopsis: 'An unyielding colonial maritime officer investigates mysterious smuggling syndicates along the spice coast of 1950s Malabar.',
  },
  {
    id: 'AD-2026-11',
    title: 'Kalyana Vaibhogame 2026',
    tagline: 'Two worlds. One sacred promise.',
    productionBanner: 'Annapurna Studios',
    director: 'Sudhakar Reddy',
    starring: 'Naga Chaitanya, Krithi Shetty',
    category: 'Grand Matrimonial Drama',
    youtubeUrl: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
    posterUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    releaseDate: 'Shravana Masam 2026',
    submitterName: 'Nagarjuna Akkineni',
    submitterPhone: '+91 98490 22114',
    submitterEmail: 'annapurnastudios@gmail.com',
    status: 'approved',
    submittedAt: '2026-04-04',
    budget: '₹40 Crores',
    synopsis: 'A tribute to the sacred bond of cinema matrimonial alliances, family pride, and traditional wedding rituals.',
  },
  {
    id: 'AD-2026-12',
    title: 'Solaris Dawn',
    tagline: 'Beyond our solar horizon awaits our forgotten origin.',
    productionBanner: 'Arka Media Works',
    director: 'Tapan Ghosh',
    starring: 'Rana Daggubati, Samantha Ruth Prabhu',
    category: 'Deep Space Sci-Fi Odyssey',
    youtubeUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    posterUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    releaseDate: 'Republic Day 2027',
    submitterName: 'Shobu Yarlagadda',
    submitterPhone: '+91 98490 55667',
    submitterEmail: 'arkamediaworks@gmail.com',
    status: 'approved',
    submittedAt: '2026-04-05',
    budget: '₹160 Crores',
    synopsis: 'India’s first interstellar exploration voyage venturing through dark matter anomalies to establish contact with an ancient cosmic entity.',
  },
];

export const INITIAL_PRODUCTION_HOUSES: ProductionHouse[] = [
  {
    id: 'PH-1001',
    name: 'Mythri Movie Makers',
    registrationNumber: 'CIN-U92100TG2015PTC099881',
    representativeName: 'Naveen Yerneni',
    designation: 'Managing Partner & Producer',
    email: 'production@mythrimovies.com',
    phone: '+91 98490 88990',
    city: 'Hyderabad, Telangana',
    address: 'Plot 42, Road No. 36, Jubilee Hills, Hyderabad 500033',
    pastProjects: 'Pushpa 2: The Rule, Waltair Veerayya, Rangasthalam, Sarkaru Vaari Paata',
    upcomingProjects: 'Pan-India Action Spectacle, NTR 31 Project',
    username: 'mythri_official',
    password: 'mythri2026',
    status: 'approved',
    registeredAt: '2026-03-15',
    approvedAt: '2026-03-16',
    adminNotes: 'Verified film production banner with active guild affiliations and extensive release slate.',
  },
  {
    id: 'PH-1002',
    name: 'Hombale Films',
    registrationNumber: 'CIN-U92110KA2013PTC068112',
    representativeName: 'Vijay Kiragandur',
    designation: 'Chief Producer & Founder',
    email: 'casting@hombalefilms.com',
    phone: '+91 98450 77112',
    city: 'Bengaluru & Mumbai',
    address: 'Hombale House, Sadashivanagar, Bengaluru, Karnataka 560080',
    pastProjects: 'KGF Chapter 1 & 2, Kantara, Salaar: Part 1 – Ceasefire',
    upcomingProjects: 'Kantara: Chapter 1, Salaar Part 2, Bagheera',
    username: 'hombale_studio',
    password: 'hombale2026',
    status: 'approved',
    registeredAt: '2026-03-20',
    approvedAt: '2026-03-21',
    adminNotes: 'Approved pan-India cinema house. Full directory contact access cleared.',
  },
  {
    id: 'PH-1003',
    name: 'Vyjayanthi Movies & Swapna Cinema',
    registrationNumber: 'CIN-U92100TG1974PTC001712',
    representativeName: 'Swapna Dutt',
    designation: 'Producer & Creative Head',
    email: 'talent@vyjayanthimovies.com',
    phone: '+91 98480 99441',
    city: 'Hyderabad',
    address: 'Film Nagar Road No. 8, Jubilee Hills, Hyderabad',
    pastProjects: 'Kalki 2898 AD, Mahanati, Sita Ramam, Yevade Subramanyam',
    upcomingProjects: 'Kalki 2898 AD Part 2',
    username: 'vyjayanthi_films',
    password: 'vyjayanthi2026',
    status: 'pending',
    registeredAt: '2026-04-18',
    adminNotes: 'Awaiting final administrative board verification before contact numbers are unlocked.',
  },
  {
    id: 'PH-1004',
    name: 'Dream Warrior Pictures',
    registrationNumber: 'CIN-U92120TN2010PTC077221',
    representativeName: 'S. R. Prabhu',
    designation: 'Managing Partner',
    email: 'contact@dreamwarriorpictures.com',
    phone: '+91 98410 44552',
    city: 'Chennai',
    address: 'Habibullah Road, T. Nagar, Chennai, Tamil Nadu',
    pastProjects: 'Kaithi, Theeran Adhigaaram Ondru, Farhana',
    upcomingProjects: 'Kaithi 2, High Concept Action Mystery',
    username: 'dream_warrior',
    password: 'warrior2026',
    status: 'pending',
    registeredAt: '2026-04-19',
    adminNotes: 'New applicant awaiting admin confirmation.',
  },
];

