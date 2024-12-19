const fs = require('fs');
const path = require('path');

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Copy favicon files
fs.copyFileSync('public/favicon.png', 'dist/favicon.png');
fs.copyFileSync('public/favicon-512.png', 'dist/favicon-512.png');
fs.copyFileSync('public/site.webmanifest', 'dist/site.webmanifest');

console.log('Assets copied successfully!'); 