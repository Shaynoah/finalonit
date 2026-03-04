import React from 'react'
import { Helmet } from 'react-helmet-async'
import siteConfig from '../config/siteConfig'

/**
 * JSONSchema component for adding structured data
 * Props:
 *  schema - object to stringify as JSON-LD
 */
const JsonLD = ({ schema }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

// Organization schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.siteName,
  url: siteConfig.domain,
  logo: `${siteConfig.domain}${siteConfig.logo}`,
  description: siteConfig.description,
  sameAs: Object.values(siteConfig.social).filter(url => url && typeof url === 'string'),
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressCountry: siteConfig.address.countryCode,
    addressLocality: siteConfig.address.city
  }
}

// Local Business schema
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.siteName,
  image: `${siteConfig.domain}${siteConfig.logo}`,
  description: siteConfig.description,
  url: siteConfig.domain,
  telephone: siteConfig.contact.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.countryCode
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00'
  }
}

// Product schema factory (for individual product pages)
export const productSchema = (title, description, image, price) => ({
  '@context': 'https://schema.org',
  '@type': 'FinancialProduct',
  name: title,
  description: description,
  image: image,
  brand: {
    '@type': 'Brand',
    name: 'ONIT Microfinance Bank'
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'KES',
    price: price || '0',
    availability: 'https://schema.org/InStock'
  }
})

// Breadcrumb schema factory
export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: item.name,
    item: item.url
  }))
})

export default JsonLD
