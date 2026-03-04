# SEO Configuration & Setup

This document guides you through completing your SEO setup.

## ⚙️ Step 1: Update Site Configuration

Open `src/config/siteConfig.js` and update the values:

```javascript
export const siteConfig = {
  // 1. Update domain - change from https://onit.co.ke to your actual domain
  domain: 'https://yourdomain.com',
  
  // 2. Update Google Analytics ID
  // Go to: https://analytics.google.com
  // Get your G-XXXXXXXXXX ID from Admin > Data collection > Data Streams
  googleAnalyticsId: 'G-XXXXXXXXXX',
  
  // 3. Update contact info if needed
  contact: {
    phone: '+254709567000',
    email: 'support@onit.co.ke',
    whatsapp: '+254709567000'
  },
  
  // 4. Update social media links
  social: {
    facebook: 'https://www.facebook.com/onitbank',
    twitter: 'https://www.twitter.com/onitbank',
    linkedin: 'https://www.linkedin.com/company/onit-microfinance-bank'
  }
}
```

## 🔍 Step 2: Verify Structured Data

Your site now includes JSON-LD schemas:
- **Organization schema** - on every page
- **LocalBusiness schema** - available for import
- **Product schema** - factory function for product pages

Test with: https://developers.google.com/search/docs/appearance/structured-data

## 📊 Step 3: Set Up Google Analytics

1. Go to https://analytics.google.com
2. Create a new GA4 property if you don't have one
3. Get your **Measurement ID** (looks like `G-XXXXXXXXXX`)
4. Add it to `src/config/siteConfig.js`
5. Deploy and verify data arrives in GA4 after a few hours

## 🗺️ Step 4: Generate & Submit Sitemap

```bash
npm run sitemap
```

This generates `public/sitemap.xml` with all your routes.

1. Deploy your site
2. Go to https://search.google.com/search-console
3. Add your property & verify
4. Go to Sitemaps and submit `https://yourdomain.com/sitemap.xml`

Repeat for Bing: https://www.bing.com/webmasters/

## 🖼️ Step 5: Image Optimization

### Add Alt Text
Every `<img>` in your pages should have descriptive alt text:

```jsx
<img 
  src={image} 
  alt="ONIT Microfinance Bank headquarters in Nairobi" 
/>
```

Script to check missing alt tags:
```bash
find src -name "*.jsx" -exec grep -l '<img' {} \; | xargs grep -n 'alt=' | wc -l
```

### Optimize Images
- Use WebP format where possible
- Compress JPG/PNG - use tools like TinyPNG or ImageOptim
- Resize to appropriate dimensions (max 1920px width)
- Use `loading="lazy"` for below-the-fold images

## 📱 Step 6: Mobile & Performance

1. **Run Lighthouse** (`npm run dev`, then DevTools > Lighthouse)
   - Aim for 90+ scores on all categories
   - Fix any warnings (especially images & performance)

2. **Test on mobile** - ensure layout and speeds are good

3. **Core Web Vitals**
   - Largest Contentful Paint (LCP) < 2.5s
   - First Input Delay (FID) < 100ms  
   - Cumulative Layout Shift (CLS) < 0.1

## 📝 Step 7: Content Optimization

1. **Update page metadata**
   
   Each page already has a `<Seo>` component with auto-generated meta tags. Customize them:
   
   ```jsx
   <Seo
     title="Custom Title (50-60 chars)"
     description="Compelling description (150-160 chars)"
     url="https://yourdomain.com/page"
     keywords="keyword1, keyword2, keyword3"
     image="https://yourdomain.com/og-image.png"
   />
   ```

2. **H1 check**
   - Every page should have exactly ONE `<h1>`
   - Use `<h2>`, `<h3>` for subsections

3. **Internal linking**
   - Link related pages together
   - Use descriptive anchor text (not "click here")

## 🏗️ Step 8: Pre-render for Better Crawlability (Optional)

If search engines aren't seeing your content, pre-render key pages:

```bash
npm install -D vite-plugin-ssg
```

Then in `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssg from 'vite-plugin-ssg'

export default defineConfig({
  plugins: [react(), ssg()],
  ssg: {
    routes: [
      '/', 
      '/about',
      '/services',
      '/contact',
      // … add your key pages
    ]
  }
})
```

## 🚀 Step 9: Deploy & Monitor

1. **Deploy** your site to production
2. **Test indexing**:
   - Go to Search Console
   - Use "URL Inspection" tool
   - Click "Request indexing" for your homepage
3. **Monitor performance**:
   - Search Console: tracks keywords, impressions, clicks
   - Google Analytics: user behavior, traffic sources
   - Lighthouse: performance metrics over time

## ✅ Final Checklist

- [ ] Site config updated with your domain
- [ ] Google Analytics ID added & verified
- [ ] Sitemap generated & submitted to Google/Bing
- [ ] All images have alt text
- [ ] Lighthouse scores are 90+
- [ ] Core Web Vitals are good
- [ ] Meta titles/descriptions are unique & compelling
- [ ] Canonical URLs are set correctly
- [ ] Social media links are accurate
- [ ] Site is mobile responsive
- [ ] SSL certificate is valid (HTTPS)
- [ ] robots.txt is in place
- [ ] pages are indexable (not noindex)

---

## 📚 Resources

- [Google Search Central](https://developers.google.com/search)
- [Core Web Vitals](https://developers.google.com/web/vitals)
- [Open Graph Protocol](https://ogp.me)
- [Schema.org](https://schema.org)
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
