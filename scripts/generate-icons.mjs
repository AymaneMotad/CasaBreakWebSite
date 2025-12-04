import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconDir = join(rootDir, 'public', 'icons');

// Create a simple icon with text "CB" for CasaBreak
async function generateIcon(size) {
  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#d4af37"/>
          <stop offset="100%" style="stop-color:#b8963c"/>
        </linearGradient>
      </defs>
      <rect width="${size}" height="${size}" rx="${size * 0.15}" fill="url(#bg)"/>
      <text 
        x="50%" 
        y="55%" 
        dominant-baseline="middle" 
        text-anchor="middle" 
        font-family="Arial, sans-serif" 
        font-weight="bold" 
        font-size="${size * 0.4}px" 
        fill="#0a0a0a"
      >CB</text>
    </svg>
  `;
  
  return sharp(Buffer.from(svg))
    .resize(size, size)
    .png()
    .toFile(join(iconDir, `icon-${size}x${size}.png`));
}

async function main() {
  // Create icons directory if it doesn't exist
  if (!existsSync(iconDir)) {
    await mkdir(iconDir, { recursive: true });
  }

  console.log('Generating PWA icons...');
  
  for (const size of sizes) {
    await generateIcon(size);
    console.log(`✓ Generated icon-${size}x${size}.png`);
  }

  console.log('\n✅ All icons generated successfully!');
}

main().catch(console.error);

