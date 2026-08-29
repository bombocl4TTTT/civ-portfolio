import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateDecorations() {
  const decorDir = path.resolve('public/assets/decor');
  if (!fs.existsSync(decorDir)) fs.mkdirSync(decorDir, { recursive: true });

  // 1. Vintage Postage Stamp
  const stampSvg = `
  <svg width="240" height="300" viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="perforations" width="16" height="16" patternUnits="userSpaceOnUse">
        <circle cx="8" cy="8" r="3" fill="#F4EFE6" />
      </pattern>
    </defs>
    <rect x="10" y="10" width="220" height="280" rx="4" fill="#E8DEC8" stroke="#3D4A3E" stroke-width="2" stroke-dasharray="6 3" />
    <rect x="22" y="22" width="196" height="256" fill="#FDFBF7" stroke="#3D4A3E" stroke-width="1" />
    
    <!-- Stamp art -->
    <rect x="32" y="32" width="176" height="150" fill="#3D4A3E" />
    <circle cx="120" cy="107" r="45" fill="#E5C378" opacity="0.3" />
    <path d="M 80 140 Q 120 70 160 140" fill="none" stroke="#F4EFE6" stroke-width="3" />
    <circle cx="120" cy="90" r="15" fill="#F4EFE6" />

    <text x="120" y="55" text-anchor="middle" font-family="Georgia, serif" font-size="12" font-weight="bold" fill="#E5C378" letter-spacing="2">
      AIR MAIL • VA
    </text>
    
    <text x="120" y="210" text-anchor="middle" font-family="Georgia, serif" font-size="20" font-weight="bold" fill="#1A1615">
      ₱ 20.26
    </text>
    <text x="120" y="230" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#756D63" letter-spacing="2">
      CIVREL M. FETALINO
    </text>
    <text x="120" y="255" text-anchor="middle" font-family="monospace" font-size="8" fill="#C45B3A" letter-spacing="1">
      SPECIAL ISSUE // ARCHIVE
    </text>
  </svg>
  `;

  // 2. Circular Seal Stamp (Wax / Ink stamp)
  const sealSvg = `
  <svg width="240" height="240" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <circle cx="120" cy="120" r="110" fill="none" stroke="#C45B3A" stroke-width="3" stroke-dasharray="4 2" opacity="0.85" />
    <circle cx="120" cy="120" r="96" fill="none" stroke="#C45B3A" stroke-width="1.5" opacity="0.85" />
    <circle cx="120" cy="120" r="75" fill="none" stroke="#C45B3A" stroke-width="1" stroke-dasharray="2 2" opacity="0.6" />
    
    <path id="curveTop" d="M 40,120 A 80,80 0 0,1 200,120" fill="none" />
    <path id="curveBottom" d="M 200,120 A 80,80 0 0,1 40,120" fill="none" />

    <text font-family="'Helvetica Neue', sans-serif" font-size="11" font-weight="800" fill="#C45B3A" letter-spacing="3" opacity="0.9">
      <textPath href="#curveTop" startOffset="50%" text-anchor="middle">
        CIVREL MARLYNETTE
      </textPath>
    </text>
    <text font-family="'Helvetica Neue', sans-serif" font-size="10" font-weight="800" fill="#C45B3A" letter-spacing="3" opacity="0.9">
      <textPath href="#curveBottom" startOffset="50%" text-anchor="middle">
        ★ VERIFIED EXECUTIVE VA ★
      </textPath>
    </text>

    <text x="120" y="115" text-anchor="middle" font-family="Georgia, serif" font-size="24" font-weight="bold" fill="#C45B3A" opacity="0.9">
      2026
    </text>
    <text x="120" y="135" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="11" fill="#C45B3A" opacity="0.8">
      Official Archive
    </text>
  </svg>
  `;

  // 3. Washi Tape Strip (Terracotta)
  const tapeSvg = `
  <svg width="400" height="80" viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
    <path d="M 0 10 Q 10 5, 20 12 T 40 8 T 60 14 L 380 4 Q 390 10, 400 6 L 395 72 Q 385 78, 375 70 T 350 75 L 10 76 Q 0 70, 5 65 Z" fill="#C45B3A" fill-opacity="0.8" />
    <line x1="20" y1="40" x2="380" y2="40" stroke="#FFFFFF" stroke-opacity="0.3" stroke-dasharray="10 5" stroke-width="2" />
  </svg>
  `;

  await sharp(Buffer.from(stampSvg)).png().toFile('public/assets/decor/postage-stamp.png');
  await sharp(Buffer.from(sealSvg)).png().toFile('public/assets/decor/seal-stamp.png');
  await sharp(Buffer.from(tapeSvg)).png().toFile('public/assets/decor/washi-tape.png');

  console.log('✅ Generated decorative stamps and collage elements!');
}

generateDecorations().catch(console.error);
