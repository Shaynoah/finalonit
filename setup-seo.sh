#!/bin/bash

# SEO Complete Setup - Run this script after deploying

echo "🚀 Starting SEO setup..."

# Step 1: Update config
echo "📝 Step 1: Update src/config/siteConfig.js with:"
echo "   - Your actual domain (currently https://onit.co.ke)"
echo "   - Google Analytics GA4 ID (get from https://analytics.google.com)"
echo "   - Contact information and social media links"

# Step 2: Generate sitemap
echo "📄 Step 2: Generating sitemap..."
npm run sitemap

# Step 3: Build
echo "🔨 Step 3: Building site (sitemap will be generated)..."
npm run build

echo ""
echo "✅ Next Manual Steps:"
echo ""
echo "1. DEPLOY your site to production"
echo ""
echo "2. Set up Google Analytics:"
echo "   - Go to https://analytics.google.com"
echo "   - Create GA4 property"
echo "   - Copy Measurement ID"
echo "   - Update src/config/siteConfig.js"
echo ""
echo "3. Submit Sitemap to Google:"
echo "   - Go to https://search.google.com/search-console"
echo "   - Add your property"
echo "   - Submit https://yourdomain.com/sitemap.xml"
echo ""
echo "4. Submit to Bing:"
echo "   - Go to https://www.bing.com/webmasters"
echo "   - Add and verify your site"
echo "   - Submit sitemap"
echo ""
echo "5. Verify Settings:"
echo "   - robots.txt is at /robots.txt"
echo "   - SSL/HTTPS is enabled"
echo "   - All images have alt text"
echo ""
echo "6. Check Rankings:"
echo "   - Wait 2-4 weeks for initial indexing"
echo "   - Monitor Search Console and Google Analytics"
echo "   - Run Lighthouse tests regularly"
echo ""
echo "📖 For more info, see SEO_SETUP.md"
