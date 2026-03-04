import { useEffect } from 'react'

const RevealAuto = ({ selector = '.reveal-auto', rootMargin = '0px 0px -12% 0px', threshold = 0.12 }) => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const els = Array.from(document.querySelectorAll(selector))
    if (!els.length) return

    // Ensure each element has the base "reveal" class and a sensible CSS delay
    els.forEach((el, i) => {
      if (!el.classList.contains('reveal')) el.classList.add('reveal')
      const attr = el.getAttribute('data-reveal-delay')
      const delay = attr ? `${attr}ms` : `${Math.min(i * 90 + 40, 420)}ms`
      el.style.setProperty('--reveal-delay', delay)
    })

    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    }, { rootMargin, threshold })

    els.forEach(el => obs.observe(el))

    return () => obs.disconnect()
  }, [selector, rootMargin, threshold])

  return null
}

export default RevealAuto
