import React, { useState, useEffect, useRef } from 'react'
import historyImg from '../images/Our History.jpg'
import ken from '../images/ken.jpg'
import liz from '../images/liz.jpg'

const About = () => {
  const [open, setOpen] = useState(null)
  const timelineRefs = useRef([])

  const toggle = (key) => setOpen(open === key ? null : key)

  const timeline = [
    {
      date: 'September 2016',
      title: 'Bold Beginning',
      text: 'Founded in September 2016, ONIT Microfinance Bank began operations with a bold vision—to transform access to credit through digital lending solutions. The bank focused on being fully technology-driven, providing fast and accessible financial services to individuals and small businesses.',
      icon: '🚀'
    },
    {
      date: 'Onit Era',
      title: 'Onit Microfinance',
      text: 'Originally operating as Onit Microfinance, the institution gained recognition for its innovative digital loan products, building a loyal customer base and testing digital-first lending models.',
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

  useEffect(() => {
    timelineRefs.current = timelineRefs.current.slice(0, timeline.length)
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Number(entry.target.dataset.index || 0)
          const delay = idx * 220
          setTimeout(() => {
            const side = entry.target.dataset.side
            entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100')
            entry.target.classList.remove('opacity-0', 'translate-y-8', 'scale-95')
            if (side === 'left') entry.target.classList.remove('-translate-x-6')
            else entry.target.classList.remove('translate-x-6')

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

    timelineRefs.current.forEach((el) => {
      if (el) obs.observe(el)
    })

    return () => obs.disconnect()
  }, [])

  return (
    <section className="page about reveal-auto">
      <div className="container py-6 md:py-8">
        {/* Hero Section - Compact Creative Layout */}
        <div className="relative mb-8">
          <div className="grid lg:grid-cols-5 gap-6 items-center">
            {/* Left - Title & Purpose Combined */}
            <div className="lg:col-span-2 relative">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                <span className="block bg-gradient-to-r from-slate-900 via-onit to-slate-900 bg-clip-text text-transparent">About</span>
                <span className="block bg-gradient-to-r from-onit via-blue-600 to-purple-600 bg-clip-text text-transparent">Us</span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-4">
                Empowering micro businesses with accessible financial solutions that transform communities across Africa.
              </p>
              
              {/* Purpose inline */}
              <div className="mt-4 p-5 rounded-xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                <p className="text-base font-semibold text-white/90">Our Purpose</p>
                <p className="text-white text-xl font-bold mt-1">We exist to make a positive impact in Africa.</p>
              </div>
            </div>

            {/* Right - Statements */}
            <div className="lg:col-span-3 grid sm:grid-cols-3 gap-4">
              {[
                { text: 'Financial access is a right, not a privilege.', icon: '💳', color: 'from-onit to-blue-600', bgColor: 'from-blue-50 to-blue-100/50' },
                { text: 'Empowering entrepreneurs transforms communities.', icon: '🚀', color: 'from-blue-500 to-indigo-600', bgColor: 'from-indigo-50 to-blue-100/50' },
                { text: 'Your success is our mission.', icon: '✨', color: 'from-indigo-500 to-blue-600', bgColor: 'from-cyan-50 to-blue-100/50' }
              ].map((statement, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-onit/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${statement.color}`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${statement.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative p-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${statement.color} flex items-center justify-center text-2xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      {statement.icon}
                    </div>
                    <p className="text-base text-slate-800 font-bold leading-relaxed group-hover:text-slate-900 transition-colors">
                      {statement.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values - Horizontal Layout */}
        <div className="mission-vision-values-modern mt-10">
          {/* Mission & Vision - Side by Side */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Mission */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-onit/5 rounded-full blur-3xl"></div>
              
              <div className="relative p-8">
                <h3 className="text-3xl font-black text-slate-900 mb-4">Mission</h3>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  Onit Microfinance Bank exists to Positively transform enterprises and communities through provision of quality products and services that are responsive to their financial needs.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative h-full overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-onit/5 rounded-full blur-3xl"></div>
              
              <div className="relative p-8">
                <h3 className="text-3xl font-black text-slate-900 mb-4">Vision</h3>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  Empowering Enterprises and communities for life
                </p>
              </div>
            </div>
          </div>

          {/* Core Values - Full Width Below */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8 border border-slate-200">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-onit to-indigo-600 flex items-center justify-center text-3xl shadow-lg">
                  💎
                </div>
                <div>
                  <div className="text-xs font-bold text-onit uppercase tracking-wider mb-1">Our</div>
                  <h3 className="text-3xl font-black text-slate-900">Core Values</h3>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Integrity', desc: 'We operate transparently and responsibly.', icon: '✓' },
                  { label: 'Customer-focus', desc: 'Our services are designed around real community needs.', icon: '👥' },
                  { label: 'Innovation', desc: 'We leverage technology to lower barriers and costs.', icon: '💡' },
                  { label: 'Efficiency', desc: 'We optimize processes and technology to deliver faster, lower-cost, and more reliable services for our customers.', icon: '⚡' }
                ].map((value, vIdx) => (
                  <div key={vIdx} className="group/value relative bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="mt-0">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-onit to-blue-600 flex items-center justify-center text-white text-lg font-bold mb-3 transform group-hover/value:scale-110 transition-transform shadow-md">
                        {value.icon}
                      </div>
                      <h4 className="text-lg font-black text-slate-900 mb-2">{value.label}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Our Journey Timeline - Original Design */}
        <div className="mt-12 mb-8">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-onit to-blue-600">Journey</span>
            </h2>
            <p className="text-base md:text-lg text-slate-700 max-w-2xl mx-auto">
              A concise timeline showcasing ONIT's transformation from a bold idea into a leading digital microfinance institution.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto px-4 md:px-0">
            {/* Central vertical line */}
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-indigo-300 to-indigo-500 opacity-40 transform -translate-x-1/2" />

            <div className="space-y-14 md:space-y-0 md:grid md:grid-cols-12 md:gap-12">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0
                const horizIn = isLeft ? '-translate-x-6' : 'translate-x-6'
                return (
                  <div
                    key={i}
                    ref={(el) => (timelineRefs.current[i] = el)}
                    data-index={i}
                    data-side={isLeft ? 'left' : 'right'}
                    className={`timeline-item col-span-12 md:col-span-6 ${isLeft ? 'md:col-start-1' : 'md:col-start-7'} opacity-0 translate-y-8 ${horizIn} scale-95 transition-all duration-700 ease-out py-6 relative`} 
                  >
                    {/* Center dot for desktop timeline */}
                    <span className="hidden md:block absolute left-1/2 top-6 transform -translate-x-1/2">
                      <span className="timeline-dot w-4 h-4 rounded-full bg-white border-2 border-indigo-300 shadow-md transition-all duration-500 scale-75"></span>
                    </span>

                    <div className={`md:pr-8 ${isLeft ? 'md:text-right' : ''} px-2 md:px-0`}>
                      <div className="inline-flex items-center gap-4">
                        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-onit to-blue-600 text-white text-2xl font-bold shadow-lg">{item.icon}</div>
                        <div className="text-sm font-bold text-onit">{item.date}</div>
                      </div>
                      <h3 className="mt-4 text-xl md:text-2xl font-extrabold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-base text-slate-700 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Senior Management */}
        <div className="mt-12 mb-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-onit/10 via-blue-500/10 to-indigo-500/10 border border-onit/20">
              <div className="w-1.5 h-1.5 rounded-full bg-onit animate-pulse"></div>
              <span className="text-xs font-bold text-onit uppercase tracking-wider">Our Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4">
              Senior <span className="bg-gradient-to-r from-onit to-blue-600 bg-clip-text text-transparent">Management</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Meet the senior management team driving ONIT's strategy and operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Eng. Kenneth Okwero',
                title: 'Chief Executive Officer',
                bio: 'CEO leading ONIT with a vision for digital-first financial inclusion and strategic growth across Kenya. With 2.5 years of experience in the industry.',
                image: ken
              },
              {
                name: 'Elizabeth Mungai',
                title: 'Chief Financial Officer',
                bio: 'CFO responsible for financial strategy, risk management, and sustainable growth initiatives.',
                image: liz
              }
            ].map((member, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl border border-slate-200 hover:border-onit/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-onit via-blue-500 to-indigo-500"></div>
                
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-8">
                  {/* Image Container */}
                  <div className="relative mb-6 mx-auto w-48 h-48 aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 border-4 border-white shadow-xl group-hover:shadow-2xl transition-all duration-500 flex items-center justify-center">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
                    />
                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-onit/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-onit transition-colors">
                      {member.name}
                    </h3>
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-onit/10 to-blue-500/10 border border-onit/20">
                      <p className="text-sm font-bold text-onit">
                        {member.title}
                      </p>
                    </div>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
