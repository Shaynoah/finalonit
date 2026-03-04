import React, { useEffect, useRef, useState } from 'react'

const AnimatedCounter = ({ target, duration = 2000, prefix = '', suffix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0)
  const counterRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    let intervalId = null
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let current = 0
          const frames = Math.max(1, Math.round(duration / 16))
          const increment = target / frames // per-frame increment
          intervalId = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(intervalId)
            } else {
              if (decimals > 0) {
                setCount(Number(current.toFixed(decimals)))
              } else {
                setCount(Math.floor(current))
              }
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
      if (intervalId) clearInterval(intervalId)
    }
  }, [target, duration, decimals])

  // Format the number with decimals if needed
  const formatted = decimals > 0 ? Number(count).toFixed(decimals) : (Math.floor(count)).toLocaleString()

  return (
    <div ref={counterRef} className="stat-number text-5xl font-bold text-blue-600 mb-3">
      {prefix}{formatted}{suffix}
    </div>
  )
}

export default AnimatedCounter
