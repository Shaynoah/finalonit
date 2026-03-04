const fs = require('fs')
const path = require('path')

// Routes to include in sitemap
const ROUTES = [
  '/',
  '/about',
  '/services',
  '/services/mfanisi-products',
  '/services/mb01',
  '/services/mb101',
  '/services/ml102',
  '/services/ml103',
  '/services/ml104',
  '/services/ml105',
  '/services/ml106',
  '/services/ml107',
  '/services/ml108',
  '/services/ml109',
  '/services/ml110',
  '/services/ml111',
  '/services/ml113',
  '/services/ml114',
  '/services/ml115',
  '/services/ml116',
  '/services/ma01',
  '/services/ma02',
  '/services/ma03',
  '/services/ma04',
  '/services/ma05',
  '/services/mf01',
  '/services/mc01',
  '/services/ms01',
  '/services/mc02',
  '/services/mf02',
  '/services/mb02',
  '/services/mb03',
  '/history',
  '/contact',
  '/senior-management'
]

const SITE_URL = 'https://yourdomain.com' // replace with actual domain

function buildSitemap () {
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  ]

  ROUTES.forEach((page) => {
    xml.push('  <url>')
    xml.push(`    <loc>${SITE_URL}${page}</loc>`)
    xml.push('    <changefreq>weekly</changefreq>')
    xml.push('    <priority>0.8</priority>')
    xml.push('  </url>')
  })

  xml.push('</urlset>')

  fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), xml.join('\n'))
  console.log('sitemap.xml generated with', ROUTES.length, 'entries')
}

buildSitemap()
