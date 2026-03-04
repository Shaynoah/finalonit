/**
 * Utility functions for SEO
 */
import siteConfig from '../config/siteConfig'

/**
 * Get full URL for a given path
 */
export const getFullUrl = (path = '/') => {
  return `${siteConfig.domain}${path}`
}

/**
 * Get Open Graph image URL with fallback
 */
export const getOgImage = (customImage) => {
  if (customImage) return customImage
  return `${siteConfig.domain}${siteConfig.logo}`
}

/**
 * Format social share URL
 */
export const getSocialShareUrl = (platform, url, title) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`
  }
  
  return shareUrls[platform] || ''
}

/**
 * Get breadcrumb structured data
 */
export const getBreadcrumbs = (items) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: getFullUrl(item.path)
    }))
  }
}

/**
 * Create product schema
 */
export const createProductSchema = (product) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: product.name,
    description: product.description,
    image: product.image || getOgImage(),
    brand: {
      '@type': 'Brand',
      name: siteConfig.siteName
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'KES',
      price: product.price || '0',
      availability: 'https://schema.org/InStock'
    }
  }
}

export default {
  getFullUrl,
  getOgImage,
  getSocialShareUrl,
  getBreadcrumbs,
  createProductSchema
}
