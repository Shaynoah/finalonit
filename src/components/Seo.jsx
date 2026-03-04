import React from 'react'
import { Helmet } from 'react-helmet-async'
import siteConfig from '../config/siteConfig'

/**
 * Props:
 *  title - page title (string)
 *  description - meta description (string)
 *  image - full URL to preview image
 *  url - canonical URL
 *  keywords - comma-separated keywords
 *  author - author name
 *  additionalMeta - array of {name, content} or {property, content}
 */
const Seo = ({
  title = siteConfig.siteName,
  description = siteConfig.description,
  url,
  image,
  keywords,
  author = siteConfig.siteName,
  additionalMeta = []
}) => {
  const metaTags = [
    { name: 'description', content: description },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    { name: 'googlebot', content: 'index, follow' },
    { name: 'bingbot', content: 'index, follow' },
    { name: 'author', content: author },
    { name: 'theme-color', content: '#0066cc' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes' }
  ]

  if (keywords) {
    metaTags.push({ name: 'keywords', content: keywords })
  }

  // Open Graph / Twitter
  if (url) {
    metaTags.push({ property: 'og:url', content: url })
  }
  metaTags.push({ property: 'og:type', content: 'website' })
  metaTags.push({ property: 'og:title', content: title })
  metaTags.push({ property: 'og:description', content: description })
  metaTags.push({ property: 'og:site_name', content: 'ONIT Microfinance Bank' })
  metaTags.push({ property: 'og:locale', content: 'en_KE' })

  if (image) {
    metaTags.push({ property: 'og:image', content: image })
    metaTags.push({ property: 'og:image:width', content: '1200' })
    metaTags.push({ property: 'og:image:height', content: '630' })
    metaTags.push({ name: 'twitter:card', content: 'summary_large_image' })
    metaTags.push({ name: 'twitter:image', content: image })
  } else {
    metaTags.push({ name: 'twitter:card', content: 'summary' })
  }

  metaTags.push({ name: 'twitter:title', content: title })
  metaTags.push({ name: 'twitter:description', content: description })
  metaTags.push({ name: 'twitter:creator', content: '@onitbank' })

  metaTags.push(...additionalMeta)

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" href="/src/images/logo2.jpg" type="image/jpeg" />
      <link rel="shortcut icon" href="/src/images/logo2.jpg" type="image/jpeg" />
      <link rel="apple-touch-icon" href="/src/images/logo2.jpg" />
      {url && <link rel="canonical" href={url} />}
      {metaTags.map((m, idx) => (
        m.name ? <meta key={idx} name={m.name} content={m.content} /> : <meta key={idx} property={m.property} content={m.content} />
      ))}
    </Helmet>
  )
}

export default Seo
