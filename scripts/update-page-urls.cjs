const fs = require('fs');
const path = require('path');

const pagesDir = path.resolve(__dirname, '../src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

let updatedCount = 0;

files.forEach(file => {
  const fpath = path.join(pagesDir, file);
  let content = fs.readFileSync(fpath, 'utf8');
  
  // Check if it already imports getFullUrl
  if (content.includes("import { getFullUrl } from '../utils/seoUtils'")) {
    return; // Already updated
  }
  
  // Check if there's a yourdomain.com reference
  if (content.includes('yourdomain.com')) {
    // Find the first import line
    const importMatch = content.match(/(import\s+.*\s+from\s+['"][^'"]+['"]\n)/);
    if (importMatch) {
      // Add import after first line
      content = content.replace(
        importMatch[0],
        importMatch[0] + "import { getFullUrl } from '../utils/seoUtils'\n"
      );
    }
    
    // Replace all yourdomain.com URLs with getFullUrl calls
    // Format: `https://yourdomain.com/path` -> getFullUrl('/path')
    content = content.replace(
      /`https:\/\/yourdomain\.com([^`]*)`/g,
      (match, path) => `getFullUrl('${path || '/'}')`
    );
    
    fs.writeFileSync(fpath, content);
    updatedCount++;
    console.log('✓ Updated', file);
  }
});

console.log(`\n✓ Updated ${updatedCount} pages to use getFullUrl()`);
if (updatedCount > 0) {
  console.log('Next: Update src/config/siteConfig.js with your real domain');
}
