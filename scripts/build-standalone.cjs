const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

async function buildStandalone() {
  console.log('Building standalone application bundle...');

  const tempEntry = path.join(__dirname, 'temp-standalone-entry.tsx');
  const entryCode = `
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../src/App.tsx';

function mount() {
  const container = document.getElementById('root');
  if (!container) return;
  const root = createRoot(container);
  root.render(React.createElement(App));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount);
} else {
  mount();
}
`;

  fs.writeFileSync(tempEntry, entryCode, 'utf8');

  try {
    const buildResult = await esbuild.build({
      entryPoints: [tempEntry],
      bundle: true,
      minify: true,
      write: false,
      format: 'iife',
      globalName: 'Cinema24CroftsApp',
      plugins: [
        {
          name: 'ignore-css',
          setup(build) {
            // Ignore CSS files as Tailwind CDN and embedded custom styles provide styles
            build.onResolve({ filter: /\.css$/ }, args => ({ path: args.path, namespace: 'ignore-css' }));
            build.onLoad({ filter: /.*/, namespace: 'ignore-css' }, () => ({ contents: '', loader: 'js' }));
          }
        }
      ]
    });

    const jsBundle = buildResult.outputFiles[0].text;
    console.log(`Bundle created successfully! Size: ${(jsBundle.length / 1024).toFixed(1)} KB`);

    const customCss = `
body {
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  background-color: #090d14;
  color: #f1f5f9;
}
.font-cinzel {
  font-family: 'Cinzel', serif;
}
.font-cinzel-dec {
  font-family: 'Cinzel Decorative', serif;
}
.gold-gradient-text {
  background: linear-gradient(135deg, #f7e6a7 0%, #d4af37 40%, #aa771c 70%, #f9eab6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gold-gradient-bg {
  background: linear-gradient(135deg, #e5c068 0%, #c59b27 50%, #8c6214 100%);
}
.gold-border-gradient {
  border-image: linear-gradient(to right, #795717, #d4af37, #f7e6a7, #d4af37, #795717) 1;
}
.cinematic-glow {
  box-shadow: 0 0 35px -5px rgba(212, 175, 55, 0.25);
}
.gold-card-glow {
  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.7), 0 0 15px -3px rgba(212, 175, 55, 0.15);
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #090d14;
}
::-webkit-scrollbar-thumb {
  background: #232b3e;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #d4af37;
}
`;

    // Construct the complete standalone index.html
    const htmlContent = `<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>24 Crofts - Cinema &amp; Production | 24 Crafts of Cinema Directory</title>
    <meta name="description" content="The premier cinema crafts talent matrimonial-style network for the 24 Crafts of Cinema. Verified profiles, trailer showcases, ID search, and authorized contact access." />
    <link rel="canonical" href="https://24crofts.com/" />
    <meta property="og:title" content="24 Crofts - Cinema &amp; Production | 24 Crafts of Cinema Directory" />
    <meta property="og:description" content="The premier cinema crafts talent matrimonial-style network for the 24 Crafts of Cinema. Verified profiles, trailer showcases, ID search, and authorized contact access." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://24crofts.com/" />
    <meta name="twitter:card" content="summary_large_image" />

    <!-- Google Fonts CDN -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Cinzel+Decorative:wght@700&display=swap" rel="stylesheet">

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        darkMode: 'class',
        theme: {
          extend: {
            colors: {
              brand: {
                50: '#fffbeb',
                100: '#fef3c7',
                200: '#fde68a',
                300: '#fcd34d',
                400: '#fbbf24',
                500: '#f59e0b',
                600: '#d97706',
                700: '#b45309',
                800: '#92400e',
                900: '#78350f',
                950: '#451a03',
              }
            },
            fontFamily: {
              cinzel: ['Cinzel', 'serif'],
              sans: ['Plus Jakarta Sans', 'sans-serif'],
              decorative: ['Cinzel Decorative', 'serif'],
            }
          }
        }
      };
    </script>

    <!-- Custom Cinema Styles -->
    <style>
${customCss}
    </style>
  </head>
  <body class="bg-[#090d14] text-slate-100 antialiased selection:bg-amber-500/30 selection:text-amber-200 min-h-screen">
    <!-- Application Mounting Point -->
    <div id="root">
      <!-- Loading Skeleton for Instant Visual Feedback before CDN loads -->
      <div id="initial-loader" style="min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #090d14; color: #f59e0b; font-family: 'Cinzel', serif;">
        <div style="width: 52px; height: 52px; border: 3px solid rgba(245, 158, 11, 0.2); border-top-color: #f59e0b; border-radius: 50%; animation: spin 0.8s linear infinite;"></div>
        <h1 style="margin-top: 24px; font-size: 22px; font-weight: 800; letter-spacing: 2px;">24 CROFTS</h1>
        <p style="margin-top: 6px; font-size: 13px; color: #94a3b8; font-family: sans-serif; letter-spacing: 1px;">CINEMA &amp; PRODUCTION • 24 CRAFTS DIRECTORY</p>
        <style>@keyframes spin { to { transform: rotate(360deg); } }</style>
      </div>
    </div>

    <!-- Standalone Complete Application Script -->
    <script>
${jsBundle}
    </script>
  </body>
</html>
`;

    // Save to root index.html
    const rootIndexPath = path.resolve(__dirname, '../index.html');
    fs.writeFileSync(rootIndexPath, htmlContent, 'utf8');
    console.log('Successfully wrote standalone index.html at workspace root!');

    // Also ensure dist folder exists and write dist/index.html
    const distDir = path.resolve(__dirname, '../dist');
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }
    fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent, 'utf8');
    console.log('Successfully wrote dist/index.html!');

  } finally {
    if (fs.existsSync(tempEntry)) {
      fs.unlinkSync(tempEntry);
    }
  }
}

buildStandalone().catch(err => {
  console.error('Build standalone failed:', err);
  process.exit(1);
});
