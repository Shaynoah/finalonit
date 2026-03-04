import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

/**
 * Google Analytics Component
 * Add your GA4 measurement ID: https://analytics.google.com
 * Get ID from: Admin > Data collection and modification > Data Streams > your stream > Measurement ID
 */
const Analytics = ({ measurementId = 'G-XXXXXXXXXX' }) => {
  useEffect(() => {
    // Track page views for SPA
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', measurementId, {
      page_path: window.location.pathname
    })
  }, [measurementId])

  // Only render if a real measurement ID is provided
  if (measurementId === 'G-XXXXXXXXXX') {
    console.warn('Analytics: Please set a valid Google Analytics measurement ID')
    return null
  }

  return (
    <Helmet>
      {/* Google Analytics 4 */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </script>
    </Helmet>
  )
}

export default Analytics
