const fs = require('fs');
const path = require('path');

const pagesDir = path.resolve(__dirname, '../src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // skip if it's index.html or not React component (should all be)

  // add import if missing
  if (!/import\s+Seo\s+from\s+'\.\.\/components\/Seo'/.test(content)) {
    // insert after first React import line
    content = content.replace(/(import React[\s\S]*?\n)/, `$1import Seo from '../components/Seo'\n`);
  }

  // if Seo component already added, skip
  if (content.includes('<Seo')) {
    // do nothing
  } else {
    // find first <h1> text to use as title
    const h1match = content.match(/<h1[^>]*>([^<]*)<\//);
    const title = h1match ? h1match[1].trim() : '';
    const descMatch = content.match(/<p[^>]*>([^<]*)<\//);
    const desc = descMatch ? descMatch[1].trim() : '';
    const urlPath = file === 'HomepageClean.jsx' ? '/' : `/${file.replace(/\.jsx$/, '').toLowerCase().replace(/([a-z])([A-Z])/g, '$1-$2')}`;

    // build Seo tag string
    const seoTag = `      <Seo
        title={\`${title || 'ONIT Microfinance Bank'}\`}
        description={\`${desc || 'ONIT Microfinance Bank provides innovative microfinance solutions.'}\`}
        url={\`https://yourdomain.com${urlPath}\`}
      />\n`;

    // insert seoTag just before first <section
    content = content.replace(/return \(\s*<([^>]+)/, match => {
      return `return (\n    <>\n${seoTag}    <${match.slice(8)}`;
    });
  }

  fs.writeFileSync(filePath, content);
  console.log('Updated', file);
});
