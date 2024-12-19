import { existsSync, mkdirSync, copyFileSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Ensure dist directory exists
if (!existsSync('dist')) {
  mkdirSync('dist');
}

// Copy favicon files
copyFileSync('public/favicon.png', 'dist/favicon.png');
copyFileSync('public/favicon-512.png', 'dist/favicon-512.png');
copyFileSync('public/site.webmanifest', 'dist/site.webmanifest');

console.log('Assets copied successfully!'); 