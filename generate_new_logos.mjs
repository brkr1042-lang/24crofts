import fs from 'node:fs';
import { execSync } from 'node:child_process';

// Generate Master "Royal 24 Crafts Medallion" SVG
function generateRoyalLogoSVG() {
  // Generate 24 film sprocket teeth around the perimeter (angle 0 to 360 in steps of 15 deg)
  const sprockets = [];
  const totalSprockets = 24;
  for (let i = 0; i < totalSprockets; i++) {
    const angle = (i * 360) / totalSprockets;
    const rad = (angle * Math.PI) / 180;
    const r = 230;
    const cx = 250 + r * Math.sin(rad);
    const cy = 250 - r * Math.cos(rad);
    sprockets.push(`
      <g transform="translate(${cx.toFixed(2)}, ${cy.toFixed(2)}) rotate(${angle.toFixed(1)})">
        <rect x="-4.5" y="-7" width="9" height="14" rx="2" fill="url(#goldGradLight)" stroke="#66440c" stroke-width="0.8" filter="url(#goldDrop)"/>
        <rect x="-2" y="-4.5" width="4" height="9" rx="1" fill="#0b0f19" opacity="0.85"/>
      </g>
    `);
  }

  // Generate 24 radiant background sunburst rays
  const rays = [];
  for (let i = 0; i < 24; i++) {
    const angle = i * 15;
    rays.push(`
      <line x1="250" y1="250" x2="${(250 + 130 * Math.sin((angle * Math.PI) / 180)).toFixed(2)}" y2="${(250 - 130 * Math.cos((angle * Math.PI) / 180)).toFixed(2)}" stroke="url(#goldRays)" stroke-width="1.8" opacity="0.35"/>
    `);
  }

  // Generate 8 camera aperture iris blades
  const blades = [];
  for (let i = 0; i < 8; i++) {
    const angle = i * 45;
    blades.push(`
      <path d="M 250,150 C 290,150 320,180 330,220 L 290,225 C 275,195 255,175 225,165 Z" 
            fill="url(#irisGrad)" 
            stroke="#e5be65" 
            stroke-width="1"
            opacity="0.85"
            transform="rotate(${angle} 250 250)" />
    `);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <!-- Rich Gold Gradients -->
    <linearGradient id="goldGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff6d6"/>
      <stop offset="25%" stop-color="#f5d77f"/>
      <stop offset="50%" stop-color="#d4af37"/>
      <stop offset="75%" stop-color="#aa7a1e"/>
      <stop offset="100%" stop-color="#fdf0b5"/>
    </linearGradient>

    <linearGradient id="goldGradDeep" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#e0bb53"/>
      <stop offset="30%" stop-color="#996c13"/>
      <stop offset="60%" stop-color="#5a3d07"/>
      <stop offset="85%" stop-color="#cda33b"/>
      <stop offset="100%" stop-color="#734e0b"/>
    </linearGradient>

    <radialGradient id="goldSphere" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#fff8db"/>
      <stop offset="20%" stop-color="#edd17b"/>
      <stop offset="50%" stop-color="#cfa735"/>
      <stop offset="80%" stop-color="#8a5e0f"/>
      <stop offset="100%" stop-color="#3d2703"/>
    </radialGradient>

    <radialGradient id="darkDisc" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#141a29"/>
      <stop offset="60%" stop-color="#0a0d16"/>
      <stop offset="100%" stop-color="#04060a"/>
    </radialGradient>

    <linearGradient id="irisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2a334a"/>
      <stop offset="50%" stop-color="#151b28"/>
      <stop offset="100%" stop-color="#0d111b"/>
    </linearGradient>

    <linearGradient id="goldRays" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fce392" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#996e16" stop-opacity="0"/>
    </linearGradient>

    <filter id="goldDrop" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.7"/>
    </filter>

    <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>

    <!-- Circular Text Paths -->
    <path id="topTextArc" d="M 75,250 A 175,175 0 0,1 425,250" fill="none" />
    <path id="bottomTextArc" d="M 425,250 A 175,175 0 0,1 75,250" fill="none" />
  </defs>

  <!-- Outer Deep Shadow & Base Plate -->
  <circle cx="250" cy="250" r="248" fill="#05070c"/>
  <circle cx="250" cy="250" r="245" fill="url(#goldGradDeep)" stroke="#ffd978" stroke-width="1.5" filter="url(#goldDrop)"/>
  
  <!-- Outer Rim Ring -->
  <circle cx="250" cy="250" r="238" fill="#080c14" stroke="url(#goldGradLight)" stroke-width="2"/>

  <!-- 24 Sprockets (24 Crafts of Cinema & 24 FPS) -->
  ${sprockets.join('\n')}

  <!-- Inner Beaded Border Ring -->
  <circle cx="250" cy="250" r="216" fill="none" stroke="url(#goldGradLight)" stroke-width="2.5"/>
  <circle cx="250" cy="250" r="212" fill="none" stroke="#523908" stroke-width="1"/>

  <!-- Typography Track Ring -->
  <circle cx="250" cy="250" r="210" fill="url(#darkDisc)"/>
  <circle cx="250" cy="250" r="142" fill="url(#goldGradDeep)" stroke="url(#goldGradLight)" stroke-width="3" filter="url(#goldDrop)"/>

  <!-- Top Text: 24 CROFTS -->
  <text fill="url(#goldGradLight)" font-family="'Cinzel', 'Times New Roman', serif" font-size="28" font-weight="900" letter-spacing="9" filter="url(#goldDrop)">
    <textPath href="#topTextArc" startOffset="50%" text-anchor="middle">
      &#x2726; 24 CROFTS &#x2726;
    </textPath>
  </text>

  <!-- Bottom Text: CINEMA & PRODUCTION -->
  <text fill="url(#goldGradLight)" font-family="'Plus Jakarta Sans', 'Arial', sans-serif" font-size="14.5" font-weight="800" letter-spacing="4.5" filter="url(#goldDrop)">
    <textPath href="#bottomTextArc" startOffset="50%" text-anchor="middle">
      &#x25C6; CINEMA &amp; PRODUCTION &#x25C6;
    </textPath>
  </text>

  <!-- Inner Medallion Center Shield -->
  <circle cx="250" cy="250" r="138" fill="url(#darkDisc)"/>
  
  <!-- 24 Radiant Sunburst Rays -->
  ${rays.join('\n')}

  <!-- Camera Lens Aperture Blades -->
  ${blades.join('\n')}

  <!-- Center Lens Iris Core Disc -->
  <circle cx="250" cy="250" r="88" fill="url(#darkDisc)" stroke="url(#goldGradLight)" stroke-width="2.5" filter="url(#goldDrop)"/>
  <circle cx="250" cy="250" r="82" fill="none" stroke="#78500c" stroke-width="1.2" stroke-dasharray="3,3"/>

  <!-- Cannes / Venice Laurel Wreath -->
  <!-- Left Laurel Wreath -->
  <g fill="url(#goldGradLight)" stroke="#66440c" stroke-width="0.5" filter="url(#goldDrop)">
    <!-- Left Leaves -->
    <path d="M 180,245 C 172,238 174,228 185,228 C 187,235 185,242 180,245 Z"/>
    <path d="M 175,225 C 168,218 171,208 181,210 C 182,217 179,223 175,225 Z"/>
    <path d="M 176,205 C 170,198 175,188 185,192 C 185,199 181,204 176,205 Z"/>
    <path d="M 184,186 C 180,180 188,172 196,177 C 195,184 190,188 184,186 Z"/>
    <path d="M 197,172 C 195,165 204,159 211,166 C 209,172 203,175 197,172 Z"/>
    <path d="M 214,162 C 214,154 225,152 229,160 C 226,166 219,167 214,162 Z"/>

    <!-- Right Leaves -->
    <path d="M 320,245 C 328,238 326,228 315,228 C 313,235 315,242 320,245 Z"/>
    <path d="M 325,225 C 332,218 329,208 319,210 C 318,217 321,223 325,225 Z"/>
    <path d="M 324,205 C 330,198 325,188 315,192 C 315,199 319,204 324,205 Z"/>
    <path d="M 316,186 C 320,180 312,172 304,177 C 305,184 310,188 316,186 Z"/>
    <path d="M 303,172 C 305,165 296,159 289,166 C 291,172 297,175 303,172 Z"/>
    <path d="M 286,162 C 286,154 275,152 271,160 C 274,166 281,167 286,162 Z"/>
  </g>

  <!-- Crown / Film Clapper Motif at Top Apex -->
  <g transform="translate(250, 158)" filter="url(#goldDrop)">
    <!-- Film Clapper / Crown -->
    <path d="M -16,6 L -12,-6 L -4,-2 L 0,-10 L 4,-2 L 12,-6 L 16,6 Z" fill="url(#goldGradLight)" stroke="#66440c" stroke-width="0.8"/>
    <circle cx="0" cy="-10" r="2.2" fill="#fff6d6"/>
    <circle cx="-12" cy="-6" r="1.8" fill="#fff6d6"/>
    <circle cx="12" cy="-6" r="1.8" fill="#fff6d6"/>
  </g>

  <!-- Stylized 35mm Cinema Film Strip waving across center -->
  <g filter="url(#goldDrop)">
    <path d="M 195,258 Q 250,268 305,258" stroke="url(#goldGradLight)" stroke-width="8" stroke-linecap="round" fill="none" opacity="0.4"/>
    <path d="M 195,258 Q 250,268 305,258" stroke="#0b0f19" stroke-width="5" stroke-linecap="round" fill="none"/>
    <!-- Sprocket dots -->
    <circle cx="210" cy="260" r="1.2" fill="url(#goldGradLight)"/>
    <circle cx="225" cy="262" r="1.2" fill="url(#goldGradLight)"/>
    <circle cx="240" cy="263" r="1.2" fill="url(#goldGradLight)"/>
    <circle cx="255" cy="263" r="1.2" fill="url(#goldGradLight)"/>
    <circle cx="270" cy="262" r="1.2" fill="url(#goldGradLight)"/>
    <circle cx="285" cy="260" r="1.2" fill="url(#goldGradLight)"/>
  </g>

  <!-- Grand Sculpted Numeral "24" in Core -->
  <!-- 3D Shadow layer -->
  <text x="252" y="246" text-anchor="middle" font-family="'Cinzel', 'Georgia', serif" font-size="68" font-weight="900" fill="#2d1d02" letter-spacing="-2">
    24
  </text>
  <!-- Primary Embossed Gold Numeral -->
  <text x="250" y="244" text-anchor="middle" font-family="'Cinzel', 'Georgia', serif" font-size="68" font-weight="900" fill="url(#goldGradLight)" stroke="#80560e" stroke-width="1.8" letter-spacing="-2" filter="url(#goldGlow)">
    24
  </text>

  <!-- Sub-label underneath numeral inside center core: CRAFTS -->
  <text x="250" y="286" text-anchor="middle" font-family="'Cinzel', 'Times New Roman', serif" font-size="13" font-weight="900" letter-spacing="6" fill="url(#goldGradLight)" filter="url(#goldDrop)">
    CRAFTS
  </text>
  <text x="250" y="302" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="800" letter-spacing="3" fill="#ffd875" opacity="0.9">
    OF CINEMA
  </text>

  <!-- Inner Center Specular Star Glint -->
  <g transform="translate(282, 198) scale(0.7)" filter="url(#goldGlow)">
    <polygon points="0,-12 3,-3 12,0 3,3 0,12 -3,3 -12,0 -3,-3" fill="#ffffff"/>
    <circle cx="0" cy="0" r="3" fill="#fffbe8"/>
  </g>
</svg>`;
}

// Generate files
const svgContent = generateRoyalLogoSVG();
fs.writeFileSync('public/assets/aistudio/logo_royal_24crofts.svg', svgContent);
fs.writeFileSync('public/logo.svg', svgContent);

console.log('Saved SVG logos successfully!');

try {
  // Convert SVG to high resolution PNG using ImageMagick
  execSync('convert -background none -density 300 public/assets/aistudio/logo_royal_24crofts.svg -resize 1000x1000 public/assets/aistudio/logo_royal_24crofts.png');
  execSync('convert -background none -density 300 public/assets/aistudio/logo_royal_24crofts.svg -resize 500x500 public/assets/aistudio/logo_royal_24crofts_500.png');
  execSync('cp public/assets/aistudio/logo_royal_24crofts.png public/logo.png');
  console.log('Converted to PNG successfully!');
} catch (err) {
  console.error('Error converting with convert:', err.message);
}
