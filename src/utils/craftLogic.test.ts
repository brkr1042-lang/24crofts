import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatProfileId,
  parseYouTubeVideoId,
  maskContactNumber,
  searchProfileById,
  validateProfileRegistration,
  validateMovieAdSubmission,
  authenticateMember,
  authenticateAdmin,
  validateProductionHouseRegistration,
  authenticateProductionHouse,
} from './craftLogic.ts';
import type { Profile } from '../types.ts';

test('formatProfileId creates standardized matrimonial ID codes', () => {
  assert.equal(formatProfileId('DIR', 1042), '24C-DIR-1042');
  assert.equal(formatProfileId('cin', 2055), '24C-CIN-2055');
  assert.equal(formatProfileId('prd', 1), '24C-PRD-1');
  assert.equal(formatProfileId('', 99), '24C-GEN-99');
});

test('parseYouTubeVideoId extracts video ID from various YouTube URL formats', () => {
  assert.equal(parseYouTubeVideoId('https://www.youtube.com/watch?v=dQw4w9WgXcQ'), 'dQw4w9WgXcQ');
  assert.equal(parseYouTubeVideoId('https://youtu.be/dQw4w9WgXcQ'), 'dQw4w9WgXcQ');
  assert.equal(parseYouTubeVideoId('https://www.youtube.com/embed/dQw4w9WgXcQ'), 'dQw4w9WgXcQ');
  assert.equal(parseYouTubeVideoId('https://www.youtube.com/shorts/dQw4w9WgXcQ'), 'dQw4w9WgXcQ');
  assert.equal(parseYouTubeVideoId('dQw4w9WgXcQ'), 'dQw4w9WgXcQ');
  assert.equal(parseYouTubeVideoId('https://invalid-url.com'), '');
});

test('maskContactNumber masks phone unless authorized', () => {
  const phone = '+91 98765 43210';
  assert.equal(maskContactNumber(phone, false), '+91 ••••• •••••');
  assert.equal(maskContactNumber(phone, true), '+91 98765 43210');
  assert.equal(maskContactNumber('', false), 'Not Provided');
});

test('searchProfileById finds profile by exact and short ID', () => {
  const dummyProfiles: Profile[] = [
    {
      id: '24C-DIR-1042',
      name: 'Christopher Nolan',
      gender: 'Male',
      age: 53,
      category: '1. Pre-Production & Scripting',
      craft: 'Direction',
      experienceYears: 25,
      nativePlace: 'London',
      currentCity: 'Los Angeles',
      languages: ['English'],
      unionCard: { hasCard: true, verified: true },
      bio: 'Visionary Director',
      keyProjects: [],
      photos: [],
      avatarUrl: '',
      youtubeVideos: [],
      contactNumber: '+1 555-0199',
      email: 'nolan@syncopy.com',
      availability: 'Available',
      featured: true,
      createdAt: '2026-01-01',
      isNew: false,
    },
    {
      id: '24C-CIN-2088',
      name: 'Roger Deakins',
      gender: 'Male',
      age: 74,
      category: '3. Visuals & Art',
      craft: 'Cinematography',
      experienceYears: 40,
      nativePlace: 'Torquay',
      currentCity: 'London',
      languages: ['English'],
      unionCard: { hasCard: true, verified: true },
      bio: 'Master Cinematographer',
      keyProjects: [],
      photos: [],
      avatarUrl: '',
      youtubeVideos: [],
      contactNumber: '+44 20 7946',
      email: 'deakins@camera.org',
      availability: 'Available',
      featured: true,
      createdAt: '2026-02-01',
      isNew: true,
    },
  ];

  const foundExact = searchProfileById(dummyProfiles, '24C-DIR-1042');
  assert.ok(foundExact);
  assert.equal(foundExact.name, 'Christopher Nolan');

  const foundShort = searchProfileById(dummyProfiles, '2088');
  assert.ok(foundShort);
  assert.equal(foundShort.name, 'Roger Deakins');

  const notFound = searchProfileById(dummyProfiles, '9999');
  assert.equal(notFound, null);
});

test('validateProfileRegistration checks required fields', () => {
  const invalid = validateProfileRegistration({});
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.length >= 4);

  const valid = validateProfileRegistration({
    name: 'Anurag Kashyap',
    category: '1. Pre-Production & Scripting',
    craft: 'Direction',
    email: 'anurag@bombayfables.com',
    contactNumber: '+91 98200 12345',
  });
  assert.equal(valid.valid, true);
  assert.equal(valid.errors.length, 0);
});

test('validateMovieAdSubmission checks valid trailer and submitter info', () => {
  const invalid = validateMovieAdSubmission({ title: 'New Film' });
  assert.equal(invalid.valid, false);

  const valid = validateMovieAdSubmission({
    title: 'Kalki Chronicles',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    productionBanner: 'Vyjayanthi Films',
    submitterPhone: '+91 98480 12345',
  });
  assert.equal(valid.valid, true);
});

test('authenticateMember checks Cinema ID or email and password', () => {
  const mockProfiles: Profile[] = [
    {
      id: '24C-DIR-1042',
      name: 'K. S. Raghavan',
      email: 'raghavan.direction@24crofts.com',
      password: 'secretPassword123',
    } as Profile,
  ];

  // Success with Cinema ID
  const res1 = authenticateMember(mockProfiles, '24C-DIR-1042', 'secretPassword123');
  assert.equal(res1.success, true);
  assert.equal(res1.profile?.name, 'K. S. Raghavan');

  // Success with email
  const res2 = authenticateMember(mockProfiles, 'raghavan.direction@24crofts.com', 'secretPassword123');
  assert.equal(res2.success, true);

  // Success with chosen username
  const mockProfilesWithUser: Profile[] = [
    {
      id: '24C-DIR-1042',
      name: 'K. S. Raghavan',
      email: 'raghavan.direction@24crofts.com',
      username: 'raghavan_dir',
      password: 'secretPassword123',
    } as Profile,
  ];
  const resUser = authenticateMember(mockProfilesWithUser, 'raghavan_dir', 'secretPassword123');
  assert.equal(resUser.success, true);
  assert.equal(resUser.profile?.id, '24C-DIR-1042');

  // Wrong password
  const res3 = authenticateMember(mockProfiles, '24C-DIR-1042', 'wrong');
  assert.equal(res3.success, false);

  // Non-existent ID
  const res4 = authenticateMember(mockProfiles, '24C-XYZ-9999', 'secretPassword123');
  assert.equal(res4.success, false);
});

test('authenticateAdmin checks admin credentials', () => {
  assert.equal(authenticateAdmin('admin@24crofts.com', 'admin123').success, true);
  assert.equal(authenticateAdmin('admin', 'admin123').success, true);
  assert.equal(authenticateAdmin('admin@24crofts.com', 'wrongpassword').success, false);
  assert.equal(authenticateAdmin('other@user.com', 'admin123').success, false);
});

test('validateProductionHouseRegistration validates required fields', () => {
  const invalid = validateProductionHouseRegistration({});
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.length >= 4);

  const valid = validateProductionHouseRegistration({
    name: 'Mythri Movie Makers',
    representativeName: 'Naveen Yerneni',
    email: 'production@mythrimovies.com',
    phone: '+91 98490 88990',
    username: 'mythri_official',
    password: 'password123',
    confirmPassword: 'password123',
  });
  assert.equal(valid.valid, true);
});

test('authenticateProductionHouse enforces admin approval requirement', () => {
  const sampleBanners: any[] = [
    {
      id: 'PH-1001',
      name: 'Mythri Movie Makers',
      username: 'mythri_official',
      email: 'prod@mythri.com',
      password: 'mypassword',
      status: 'approved',
    },
    {
      id: 'PH-1002',
      name: 'Vyjayanthi Movies',
      username: 'vyjayanthi_banner',
      email: 'prod@vyjayanthi.com',
      password: 'vpassword',
      status: 'pending',
    },
  ];

  // Approved banner succeeds
  const authApproved = authenticateProductionHouse(sampleBanners, 'mythri_official', 'mypassword');
  assert.equal(authApproved.success, true);
  assert.equal(authApproved.productionHouse?.name, 'Mythri Movie Makers');

  // Pending banner fails with isPending flag until admin approval
  const authPending = authenticateProductionHouse(sampleBanners, 'vyjayanthi_banner', 'vpassword');
  assert.equal(authPending.success, false);
  assert.equal(authPending.isPending, true);
  assert.ok(authPending.error?.includes('Pending Admin Approval'));

  // Wrong password fails
  const authWrong = authenticateProductionHouse(sampleBanners, 'mythri_official', 'wrong');
  assert.equal(authWrong.success, false);
});


