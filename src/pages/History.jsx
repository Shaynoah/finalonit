import React, { useEffect, useRef } from 'react'

const History = () => {
  const timeline = [
    {
      date: 'September 2016',
      title: 'Bold Beginning',
      text: 'Founded in September 2016, ONIT Microfinance Bank began operations with a bold vision—to transform access to credit through digital lending solutions. The bank focused on being fully technology-driven, providing fast and accessible financial services to individuals and small businesses.',
      icon: '🚀'
    },
    {
      date: 'Maisha Era',
      title: 'Maisha Microfinance',
      text: 'Originally operating as Maisha Microfinance, the institution gained recognition for its innovative digital loan products, building a loyal customer base and testing digital-first lending models.',
      icon: '✨'
    },
    {
      date: '2024 - Rebrand',
      title: 'Strategic Rebrand',
      text: 'The transition to ONIT Microfinance Bank marked a strategic rebrand and new identity, reinforcing a commitment to scale, customer-centric innovation, and broader financial inclusion.',
      icon: '🎯'
    },
    {
      date: 'Rapid Growth',
      title: 'Rapid Expansion',
      text: 'ONIT experienced strong growth in assets and loan book, reflecting customer trust and the robustness of its digital lending model.',
      icon: '📈'
    },
    {
      date: 'Today',
      title: 'Leading Digital Microfinance',
      text: 'Today ONIT continues to evolve as a technology-powered microfinance institution dedicated to empowering individuals and small businesses with transparent, accessible financial solutions.',
      icon: '🌟'
    }
  ]

  const refs = useRef([])

  useEffect(() => {
    refs.current = refs.current.slice(0, timeline.length)
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // read index to stagger reveals
          const idx = Number(entry.target.dataset.index || 0)
          const delay = idx * 220 // stagger by 220ms per item
          setTimeout(() => {
            const side = entry.target.dataset.side
            entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100')
            entry.target.classList.remove('opacity-0', 'translate-y-8', 'scale-95')
            if (side === 'left') entry.target.classList.remove('-translate-x-6')
            else entry.target.classList.remove('translate-x-6')

            // animate the center dot if present
            const dot = entry.target.querySelector('.timeline-dot')
            if (dot) {
              dot.classList.add('bg-indigo-600', 'border-indigo-600', 'scale-100')
              dot.classList.remove('bg-white', 'border-indigo-300', 'scale-75')
            }
          }, delay)
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.18 })

    refs.current.forEach((el) => {
      if (el) obs.observe(el)
    })

    return () => obs.disconnect()
  }, [])

  return (
    <section className="page history min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-50">
      <div className="container py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">Journey</span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            A concise timeline showcasing ONIT's transformation from a bold idea into a leading digital microfinance institution.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 md:px-0">
          {/* central line */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-indigo-300 to-indigo-500 opacity-40 transform -translate-x-1/2" />

          <div className="space-y-14 md:space-y-0 md:grid md:grid-cols-12 md:gap-12">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0
              const horizIn = isLeft ? '-translate-x-6' : 'translate-x-6'
              return (
                <div
                  key={i}
                  ref={(el) => (refs.current[i] = el)}
                  data-index={i}
                  data-side={isLeft ? 'left' : 'right'}
                  className={`timeline-item col-span-12 md:col-span-6 ${isLeft ? 'md:col-start-1' : 'md:col-start-7'} opacity-0 translate-y-8 ${horizIn} scale-95 transition-all duration-700 ease-out py-6 relative`} 
                >
                  {/* center dot for desktop timeline */}
                  <span className="hidden md:block absolute left-1/2 top-6 transform -translate-x-1/2">
                    <span className="timeline-dot w-4 h-4 rounded-full bg-white border-2 border-indigo-300 shadow-md transition-all duration-500 scale-75"></span>
                  </span>

                  <div className={`md:pr-8 ${isLeft ? 'md:text-right' : ''} px-2 md:px-0`}>
                    <div className="inline-flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600 text-white text-xl font-bold shadow-md">{item.icon}</div>
                      <div className="text-sm text-indigo-600 font-bold">{item.date}</div>
                    </div>
                    <h3 className="mt-3 text-xl md:text-2xl font-extrabold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto text-center">
          <a href="/contact" className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow hover:bg-indigo-700 transition">Get in touch</a>
        </div>
      </div>
    </section>
  )
}

export default History

