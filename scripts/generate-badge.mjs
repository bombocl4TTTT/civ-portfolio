import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateBadges() {
  const headshotPath = path.resolve('public/assets/headshot.jpg');
  const headshotBuffer = fs.readFileSync(headshotPath);
  
  // Resize headshot to fit nicely in the badge photo frame
  const resizedHeadshot = await sharp(headshotBuffer)
    .resize(320, 320, { fit: 'cover', position: 'top' })
    .toBuffer();

  const headshotBase64 = `data:image/jpeg;base64,${resizedHeadshot.toString('base64')}`;

  // Front Badge SVG (Width: 600, Height: 900) - Understated Luxury Editorial Design
  const frontSvg = `
  <svg width="600" height="900" viewBox="0 0 600 900" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1A1817" />
        <stop offset="100%" stop-color="#11100F" />
      </linearGradient>
      <clipPath id="photoClip">
        <rect x="140" y="190" width="320" height="320" rx="8" />
      </clipPath>
    </defs>

    <!-- Card background -->
    <rect x="0" y="0" width="600" height="900" rx="28" fill="url(#bgGrad)" />
    
    <!-- Minimalist luxury border -->
    <rect x="24" y="24" width="552" height="852" rx="18" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />

    <!-- Top Lanyard Slot Indication -->
    <rect x="220" y="42" width="160" height="6" rx="3" fill="rgba(0,0,0,0.8)" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
    
    <!-- Brand Header -->
    <text x="300" y="105" text-anchor="middle" font-family="'Helvetica Neue', sans-serif" font-size="12" font-weight="600" fill="#E5DCD2" letter-spacing="4">
      CIVREL MARLYNETTE
    </text>
    <text x="300" y="130" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="13" fill="#8C8275">
      Executive &amp; Creative Operations
    </text>

    <!-- Subtle divider line -->
    <line x1="80" y1="155" x2="520" y2="155" stroke="rgba(255,255,255,0.1)" stroke-width="1" />

    <!-- Portrait Photo Frame -->
    <rect x="134" y="184" width="332" height="332" rx="12" fill="#0D0B0A" stroke="#C45B3A" stroke-width="2" />
    <image href="${headshotBase64}" x="140" y="190" width="320" height="320" clip-path="url(#photoClip)" preserveAspectRatio="xMidYMid slice" />

    <!-- Name & Role -->
    <text x="300" y="585" text-anchor="middle" font-family="Georgia, serif" font-size="26" font-weight="bold" fill="#FDFBF7" letter-spacing="1">
      Civrel M. Fetalino
    </text>
    
    <text x="300" y="618" text-anchor="middle" font-family="'Helvetica Neue', sans-serif" font-size="11" font-weight="600" fill="#C45B3A" letter-spacing="3">
      VIRTUAL ASSISTANT &amp; OPERATIONS
    </text>

    <!-- Clean meta row -->
    <g transform="translate(60, 655)">
      <line x1="0" y1="0" x2="480" y2="0" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
      <text x="10" y="32" font-family="'Helvetica Neue', sans-serif" font-size="10" font-weight="600" fill="#8C8275" letter-spacing="1.5">LOCATION</text>
      <text x="10" y="52" font-family="'Helvetica Neue', sans-serif" font-size="12" font-weight="600" fill="#E5DCD2">MANILA / REMOTE</text>

      <text x="260" y="32" font-family="'Helvetica Neue', sans-serif" font-size="10" font-weight="600" fill="#8C8275" letter-spacing="1.5">TIMEZONE</text>
      <text x="260" y="52" font-family="'Helvetica Neue', sans-serif" font-size="12" font-weight="600" fill="#E5DCD2">GLOBAL ASYNC (GMT+8)</text>
      <line x1="0" y1="75" x2="480" y2="75" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
    </g>

    <!-- Minimalist Barcode footer -->
    <g transform="translate(80, 755)">
      <rect x="0" y="0" width="440" height="52" rx="4" fill="#FDFBF7" />
      <!-- Barcode lines -->
      <path d="
        M 20 10 v 32 M 23 10 v 32 M 26 10 v 32 M 32 10 v 32 M 36 10 v 32 M 42 10 v 32 M 47 10 v 32 
        M 54 10 v 32 M 60 10 v 32 M 64 10 v 32 M 72 10 v 32 M 78 10 v 32 M 82 10 v 32 M 88 10 v 32
        M 96 10 v 32 M 102 10 v 32 M 107 10 v 32 M 114 10 v 32 M 120 10 v 32 M 127 10 v 32
        M 135 10 v 32 M 142 10 v 32 M 148 10 v 32 M 153 10 v 32 M 161 10 v 32 M 168 10 v 32
        M 176 10 v 32 M 182 10 v 32 M 190 10 v 32 M 196 10 v 32 M 202 10 v 32 M 208 10 v 32
        M 216 10 v 32 M 224 10 v 32 M 232 10 v 32 M 238 10 v 32 M 245 10 v 32 M 252 10 v 32
        M 261 10 v 32 M 268 10 v 32 M 273 10 v 32 M 281 10 v 32 M 288 10 v 32 M 294 10 v 32
        M 302 10 v 32 M 309 10 v 32 M 315 10 v 32 M 322 10 v 32 M 330 10 v 32 M 338 10 v 32
        M 346 10 v 32 M 353 10 v 32 M 360 10 v 32 M 366 10 v 32 M 374 10 v 32 M 382 10 v 32
        M 390 10 v 32 M 397 10 v 32 M 403 10 v 32 M 411 10 v 32 M 418 10 v 32
      " stroke="#1A1817" stroke-width="2" />
      <text x="220" y="47" text-anchor="middle" font-family="monospace" font-size="8" font-weight="bold" fill="#1A1817" letter-spacing="2">
        CIVREL-FETALINO-2026
      </text>
    </g>

    <text x="300" y="842" text-anchor="middle" font-family="'Helvetica Neue', sans-serif" font-size="9" font-weight="500" fill="#756D63" letter-spacing="2">
      EXECUTIVE &amp; CREATIVE VIRTUAL ASSISTANT
    </text>
  </svg>
  `;

  // Back Badge SVG (Width: 600, Height: 900)
  const backSvg = `
  <svg width="600" height="900" viewBox="0 0 600 900" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="600" height="900" rx="28" fill="#FDFBF7" />
    <rect x="24" y="24" width="552" height="852" rx="18" fill="none" stroke="#D8CFC4" stroke-width="1.5" />

    <!-- Magnetic stripe -->
    <rect x="0" y="65" width="600" height="75" fill="#201C1B" />

    <!-- Monogram Header -->
    <circle cx="300" cy="225" r="42" fill="#1A1817" />
    <text x="300" y="236" text-anchor="middle" font-family="Georgia, serif" font-size="24" font-weight="bold" fill="#FDFBF7">
      CMF
    </text>

    <text x="300" y="300" text-anchor="middle" font-family="Georgia, serif" font-size="20" font-weight="bold" fill="#1A1817">
      Civrel Marlynette Fetalino
    </text>
    <text x="300" y="325" text-anchor="middle" font-family="'Helvetica Neue', sans-serif" font-size="11" font-weight="600" fill="#C45B3A" letter-spacing="3">
      EXECUTIVE &amp; CREATIVE VA
    </text>

    <!-- Core Capabilities Pillars -->
    <g transform="translate(60, 365)">
      <rect x="0" y="0" width="480" height="225" rx="10" fill="#FFFFFF" stroke="#E5DCD2" stroke-width="1" />
      <text x="24" y="35" font-family="'Helvetica Neue', sans-serif" font-size="10" font-weight="700" fill="#1A1817" letter-spacing="2">
        CORE SERVICES
      </text>
      
      <text x="24" y="75" font-family="sans-serif" font-size="12" font-weight="500" fill="#3D4A3E">• Executive Calendar &amp; Inbox Management</text>
      <text x="24" y="110" font-family="sans-serif" font-size="12" font-weight="500" fill="#3D4A3E">• Notion Systems &amp; SOP Architecture</text>
      <text x="24" y="145" font-family="sans-serif" font-size="12" font-weight="500" fill="#3D4A3E">• Creative Assets &amp; Social Content Ops</text>
      <text x="24" y="180" font-family="sans-serif" font-size="12" font-weight="500" fill="#3D4A3E">• Product Launch &amp; Client Experience</text>
      <text x="24" y="210" font-family="sans-serif" font-size="12" font-weight="500" fill="#3D4A3E">• Asynchronous Project Management</text>
    </g>

    <!-- Direct Line -->
    <g transform="translate(60, 630)">
      <rect x="0" y="0" width="480" height="180" rx="10" fill="#F4EFE6" stroke="#D8CFC4" stroke-width="1" />
      <text x="24" y="40" font-family="'Helvetica Neue', sans-serif" font-size="10" font-weight="700" fill="#8C8275" letter-spacing="2">
        CONTACT &amp; INQUIRIES
      </text>
      <text x="24" y="75" font-family="Georgia, serif" font-size="16" font-weight="bold" fill="#1A1817">
        civrelmarlynette@gmail.com
      </text>
      <text x="24" y="105" font-family="'Helvetica Neue', sans-serif" font-size="11" fill="#524B43">
        Available for select founders and creative leaders.
      </text>
      <text x="24" y="145" font-family="monospace" font-size="10" font-weight="bold" fill="#C45B3A">
        MANILA, PH (GMT+8) • GLOBAL ASYNC
      </text>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(frontSvg)).png().toFile('public/assets/badge-front.png');
  await sharp(Buffer.from(backSvg)).png().toFile('public/assets/badge-back.png');

  console.log('✅ Generated clean luxury editorial badge textures!');
}

generateBadges().catch(err => {
  console.error('Error generating badges:', err);
  process.exit(1);
});
