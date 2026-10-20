import type { Profile, MovieAdSubmission, ProductionHouse } from '../types.ts';

/**
 * Formats a standardized 24 Crofts matrimonial-style profile ID.
 * Format: 24C-<CRAFT_PREFIX>-<NUMBER>
 */
export function formatProfileId(prefix: string, sequenceNumber: number): string {
  const cleanPrefix = (prefix || 'GEN').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 3) || 'GEN';
  const cleanSeq = Math.max(1, Math.floor(sequenceNumber));
  return `24C-${cleanPrefix}-${cleanSeq}`;
}

/**
 * Extracts YouTube Video ID from any standard YouTube URL (standard, shortened, embed, shorts).
 */
export function parseYouTubeVideoId(url: string): string {
  if (!url) return '';
  const trimmed = url.trim();
  
  // Direct ID check (11 alphanumeric characters)
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }
  
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/;
  const match = trimmed.match(regex);
  return match ? match[1] : '';
}

/**
 * Masks contact numbers to protect privacy according to matrimonial / cinema directory rules.
 * Unless authorized by admin, only the prefix is visible with masked asterisks.
 */
export function maskContactNumber(phone: string, isAuthorized: boolean): string {
  if (!phone) return 'Not Provided';
  if (isAuthorized) return phone;
  
  const clean = phone.trim();
  if (clean.length <= 5) return '••••••••••';

  // If starts with country code like +91 or +1
  if (clean.startsWith('+')) {
    const parts = clean.split(' ');
    const code = parts[0] || '+91';
    return `${code} ••••• •••••`;
  }

  const prefix = clean.slice(0, 3);
  return `${prefix} ••••• •••`;
}

/**
 * Finds profile by exact or loose ID search (e.g. "24C-DIR-1042" or "1042" or "DIR-1042")
 */
export function searchProfileById(profiles: Profile[], queryId: string): Profile | null {
  if (!queryId || !queryId.trim()) return null;
  const cleanQuery = queryId.trim().toUpperCase();
  
  // Exact match
  const exact = profiles.find(p => p.id.toUpperCase() === cleanQuery);
  if (exact) return exact;
  
  // Suffix/numeric match if query is like "1042" or "DIR-1042"
  const partial = profiles.find(p => {
    const idUpper = p.id.toUpperCase();
    return idUpper.endsWith(cleanQuery) || idUpper.replace(/[^A-Z0-9]/g, '').includes(cleanQuery.replace(/[^A-Z0-9]/g, ''));
  });
  
  return partial || null;
}

/**
 * Validates a new profile submission including optional/required username and password.
 */
export function validateProfileRegistration(data: Partial<Profile> & { confirmPassword?: string }): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Full legal name is required (minimum 2 characters).');
  }
  
  if (!data.category) {
    errors.push('Craft category selection is mandatory.');
  }
  
  if (!data.craft) {
    errors.push('Specific cinema craft is mandatory.');
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email address is required to receive login credentials.');
  }
  
  if (!data.contactNumber || data.contactNumber.replace(/[^\d]/g, '').length < 8) {
    errors.push('Valid phone number is required (for admin verification).');
  }

  if (data.username !== undefined && data.username.trim().length > 0) {
    if (data.username.trim().length < 3) {
      errors.push('Username must be at least 3 characters long.');
    } else if (!/^[a-zA-Z0-9_.-]+$/.test(data.username.trim())) {
      errors.push('Username can only contain letters, numbers, underscores, dots, or dashes.');
    }
  }

  if (data.password !== undefined && data.password.trim().length > 0) {
    if (data.password.trim().length < 6) {
      errors.push('Password must be at least 6 characters long.');
    }
    if (data.confirmPassword !== undefined && data.password !== data.confirmPassword) {
      errors.push('Password and Confirm Password do not match.');
    }
  }
  
  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Validates a movie advertisement submission.
 */
export function validateMovieAdSubmission(ad: Partial<MovieAdSubmission>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!ad.title || ad.title.trim().length < 2) {
    errors.push('Movie Title is required.');
  }
  
  if (!ad.youtubeUrl || !parseYouTubeVideoId(ad.youtubeUrl)) {
    errors.push('A valid YouTube teaser or trailer link is required.');
  }
  
  if (!ad.productionBanner || ad.productionBanner.trim().length < 2) {
    errors.push('Production banner / Studio name is required.');
  }
  
  if (!ad.submitterPhone || ad.submitterPhone.replace(/[^\d]/g, '').length < 7) {
    errors.push('Contact phone is required for ad verification.');
  }
  
  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Validates a production house registration.
 */
export function validateProductionHouseRegistration(
  data: Partial<ProductionHouse> & { confirmPassword?: string }
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Production House / Studio Banner name is required.');
  }

  if (!data.representativeName || data.representativeName.trim().length < 2) {
    errors.push('Authorized representative / key producer name is required.');
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('A valid official work email is required.');
  }

  if (!data.phone || data.phone.replace(/[^\d]/g, '').length < 8) {
    errors.push('A valid official phone number is required.');
  }

  if (!data.username || data.username.trim().length < 3) {
    errors.push('Username must be at least 3 characters long.');
  } else if (!/^[a-zA-Z0-9_.-]+$/.test(data.username.trim())) {
    errors.push('Username can only contain letters, numbers, underscores, dots, or dashes.');
  }

  if (!data.password || data.password.trim().length < 6) {
    errors.push('Password must be at least 6 characters long.');
  }

  if (data.confirmPassword !== undefined && data.password !== data.confirmPassword) {
    errors.push('Password and Confirm Password do not match.');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Authenticates a member by Cinema Profile ID, chosen Username, or registered email address.
 */
export function authenticateMember(
  profiles: Profile[],
  identifier: string,
  password: string
): { success: boolean; profile?: Profile; error?: string } {
  if (!identifier || !identifier.trim()) {
    return { success: false, error: 'Please enter your Cinema ID, username, or registered email.' };
  }
  if (!password || !password.trim()) {
    return { success: false, error: 'Please enter your password.' };
  }

  const cleanId = identifier.trim().toLowerCase();
  const profile = profiles.find(
    (p) =>
      p.id.toLowerCase() === cleanId ||
      p.email.toLowerCase() === cleanId ||
      (p.username && p.username.toLowerCase() === cleanId)
  );

  if (!profile) {
    return { success: false, error: 'No member profile found with that Cinema ID, username, or email address.' };
  }

  const validPassword = profile.password || 'craft2026';
  if (password.trim() !== validPassword) {
    return { success: false, error: 'Invalid password. Please check your credentials or reset your password.' };
  }

  return { success: true, profile };
}

/**
 * Authenticates a Production House by username or email.
 * Mandatory rule: Production house must be approved by admin to access contact details.
 */
export function authenticateProductionHouse(
  productionHouses: ProductionHouse[],
  identifier: string,
  password: string
): {
  success: boolean;
  productionHouse?: ProductionHouse;
  error?: string;
  isPending?: boolean;
} {
  if (!identifier || !identifier.trim()) {
    return { success: false, error: 'Please enter your Production House username or email.' };
  }
  if (!password || !password.trim()) {
    return { success: false, error: 'Please enter your password.' };
  }

  const cleanId = identifier.trim().toLowerCase();
  const ph = productionHouses.find(
    (p) =>
      p.username.toLowerCase() === cleanId ||
      p.email.toLowerCase() === cleanId ||
      p.id.toLowerCase() === cleanId
  );

  if (!ph) {
    return { success: false, error: 'No registered production house found with that username or email.' };
  }

  if (ph.password !== password.trim()) {
    return { success: false, error: 'Incorrect password for this production house account.' };
  }

  if (ph.status === 'pending') {
    return {
      success: false,
      isPending: true,
      productionHouse: ph,
      error: `Registration Pending Admin Approval: Your production house "${ph.name}" is currently awaiting review by the platform administrator. Contact access will be enabled once approved.`,
    };
  }

  if (ph.status === 'rejected') {
    return {
      success: false,
      productionHouse: ph,
      error: `Application Rejected: The registration for "${ph.name}" was not approved by administration. ${ph.adminNotes ? `Reason: ${ph.adminNotes}` : ''}`,
    };
  }

  if (ph.status === 'suspended') {
    return {
      success: false,
      productionHouse: ph,
      error: `Account Suspended: The account for "${ph.name}" has been suspended by administration.`,
    };
  }

  return { success: true, productionHouse: ph };
}

/**
 * Authenticates the platform administrator.
 */
export function authenticateAdmin(
  identifier: string,
  password: string
): { success: boolean; error?: string } {
  if (!identifier || !identifier.trim()) {
    return { success: false, error: 'Please enter admin username or email.' };
  }
  if (!password || !password.trim()) {
    return { success: false, error: 'Please enter admin password.' };
  }

  const cleanId = identifier.trim();
  const isAdminId =
    cleanId === 'Bchakriraju1992@' ||
    cleanId.toLowerCase() === 'bchakriraju1992@' ||
    cleanId.toLowerCase() === 'bchakriraju1992@gmail.com' ||
    cleanId.toLowerCase() === 'brkr1042@gmail.com' ||
    cleanId.toLowerCase() === 'admin' ||
    cleanId.toLowerCase() === 'admin@24crofts.com';
  const isAdminPass = password === 'Bchakriraju1992@' || password === 'admin123';

  if (isAdminId && isAdminPass) {
    return { success: true };
  }

  return { success: false, error: 'Invalid administrator credentials. Access restricted to authorized personnel.' };
}


