import React, { useEffect, useRef } from 'react'

const Reveal = ({ children, className = '', rootMargin = '0px 0px -10% 0px', threshold = 0.12, delay = 120 }) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // set CSS variable for optional delay
            el.style.setProperty('--reveal-delay', `${delay}ms`)
            el.classList.add('in-view')
            obs.unobserve(el)
          }
        })
      },
      { rootMargin, threshold }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [delay, rootMargin, threshold])

  return (
    <div ref={ref} className={`reveal ${className}`}> 
      {children}
    </div>
  )
}

export default Reveal
