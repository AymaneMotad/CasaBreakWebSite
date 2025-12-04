import sharp from 'sharp';
import { mkdir, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconDir = join(rootDir, 'public', 'icons');
const logoPath = join(rootDir, 'public', 'casa break and casa can.svg');

async function generateIconFromLogo(size) {
  // Read the original SVG
  const svgContent = await readFile(logoPath, 'utf-8');
  
  // Create a padded version with background for PWA icon
  const paddedSvg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#ffffff"/>
          <stop offset="100%" style="stop-color:#f8fafc"/>
        </linearGradient>
      </defs>
      <!-- White rounded background -->
      <rect width="${size}" height="${size}" rx="${size * 0.18}" fill="url(#bg)"/>
      <!-- Subtle border -->
      <rect width="${size}" height="${size}" rx="${size * 0.18}" fill="none" stroke="#e2e8f0" stroke-width="1"/>
    </svg>
  `;
  
  // First create the background
  const background = await sharp(Buffer.from(paddedSvg))
    .resize(size, size)
    .png()
    .toBuffer();
  
  // Calculate logo size with padding (logo takes ~70% of icon)
  const logoSize = Math.round(size * 0.7);
  const offset = Math.round((size - logoSize) / 2);
  
  // Resize the original logo
  const logo = await sharp(logoPath)
    .resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  
  // Composite logo on background
  return sharp(background)
    .composite([{ input: logo, top: offset, left: offset }])
    .png()
    .toFile(join(iconDir, `icon-${size}x${size}.png`));
}

async function main() {
  // Create icons directory if it doesn't exist
  if (!existsSync(iconDir)) {
    await mkdir(iconDir, { recursive: true });
  }

  console.log('Generating PWA icons from your logo...');
  
  for (const size of sizes) {
    await generateIconFromLogo(size);
    console.log(`✓ Generated icon-${size}x${size}.png`);
  }

  console.log('\n✅ All icons generated from your logo successfully!');
}

main().catch(console.error);
