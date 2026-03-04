const fs = require('fs');
const path = require('path');
const pagesDir = path.resolve(__dirname, '../src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const fpath = path.join(pagesDir, file);
  let content = fs.readFileSync(fpath, 'utf8');
  const fixed = content.replace(/\r?\n {4}<\r?\n {4}<section/g, '\n    <section');
  if (fixed !== content) {
    fs.writeFileSync(fpath, fixed);
    console.log('Fixed stray < in', file);
  }
});
