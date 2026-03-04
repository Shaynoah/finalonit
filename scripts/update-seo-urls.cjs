const fs = require('fs');
const path = require('path');

const pagesDir = path.resolve(__dirname, '../src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

let updatedCount = 0;

files.forEach(file => {
  const fpath = path.join(pagesDir, file);
  let content = fs.readFileSync(fpath, 'utf8');
  
  // Check for template literal URLs with yourdomain.com
  if (content.includes('yourdomain.com')) {
    // Check if already has import
    if (!content.includes("import { getFullUrl } from '../utils/seoUtils'")) {
      // Find the first import line and add after Seo import
      const importMatch = content.match(/(import\s+Seo\s+from\s+['"][^'"]+['"]\n)/);
      if (importMatch) {
        content = content.replace(
          importMatch[0],
          importMatch[0] + "import { getFullUrl } from '../utils/seoUtils'\n"
        );
      }
    }
    
    // Replace template literals like `https://yourdomain.com/path` with {getFullUrl('/path')}
    content = content.replace(
      /url={\s*`https:\/\/yourdomain\.com([^`]*)`\s*}/g,
      (match, path) => `url={getFullUrl('${path || '/'}')}` 
    );
    
    // Also handle string literals wrapped in quotes
    content = content.replace(
      /url="https:\/\/yourdomain\.com([^"]*)"/g,
      (match, path) => `url={getFullUrl('${path || '/'}')}` 
    );
    
    fs.writeFileSync(fpath, content);
    updatedCount++;
    console.log('✓ Updated', file);
  }
});

console.log(`\n✓ Updated ${updatedCount} more pages to use getFullUrl()`);
