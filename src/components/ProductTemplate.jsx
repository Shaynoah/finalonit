import React from 'react'

const ProductTemplate = ({ title, description, sections }) => {
  const sectionColors = {
    details: { bg: 'from-onit/5 to-onit/10', border: 'border-onit', icon: '📋', textColor: 'text-onit' },
    benefits: { bg: 'from-green-50 to-emerald-50', border: 'border-green-500', icon: '✨', textColor: 'text-green-700', bulletColor: 'text-green-500' },
    purpose: { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-500', icon: '🎯', textColor: 'text-blue-700' },
    pricing: { bg: 'from-purple-50 to-pink-50', border: 'border-purple-500', icon: '💰', textColor: 'text-purple-700', bulletColor: 'text-purple-500' },
    requirements: { bg: 'from-amber-50 to-orange-50', border: 'border-amber-500', icon: '📝', textColor: 'text-amber-700', bulletColor: 'text-amber-500' },
    process: { bg: 'from-cyan-50 to-sky-50', border: 'border-cyan-500', icon: '⚙️', textColor: 'text-cyan-700', bulletColor: 'text-cyan-500' },
    charges: { bg: 'from-red-50 to-rose-50', border: 'border-red-500', icon: '💳', textColor: 'text-red-700', bulletColor: 'text-red-500' },
  }

  const getStyles = (type) => sectionColors[type] || sectionColors.details

  return (
    <section className="page product reveal-auto">
      <div className="container py-12 max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-onit to-onit/60 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-lg text-gray-600 mb-8">{description}</p>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => {
            const styles = getStyles(section.type)
            return (
              <div key={index} className={`animate-fade-in-delay-${(index + 1) % 6 || 6} group`}>
                <div className={`bg-gradient-to-r ${styles.bg} border-l-4 ${styles.border} rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
                  <h2 className={`text-2xl font-bold mb-4 ${styles.textColor} flex items-center gap-2`}>
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-lg" style={{
                      background: styles.border.split('-')[1],
                      color: 'white'
                    }}>
                      {styles.icon}
                    </span>
                    {section.title}
                  </h2>
                  
                  {section.content && <p className="text-gray-700 mb-4">{section.content}</p>}
                  
                  {section.items && (
                    <ul className="space-y-2 text-gray-700">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                          <span className={`${styles.bulletColor || 'text-onit'} font-bold mt-0.5`}>
                            {section.type === 'benefits' ? '✓' : '•'}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 animate-fade-in-delay-6">
          <a href="/services" className="inline-flex items-center gap-2 text-onit font-semibold hover:gap-3 transition-all duration-300 bg-onit/10 px-4 py-2 rounded-lg hover:bg-onit/20">
            <span>←</span> Back to Services
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-fade-in-delay-1 {
          animation: fadeIn 0.6s ease-out 0.1s both;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 0.6s ease-out 0.2s both;
        }

        .animate-fade-in-delay-3 {
          animation: fadeIn 0.6s ease-out 0.3s both;
        }

        .animate-fade-in-delay-4 {
          animation: fadeIn 0.6s ease-out 0.4s both;
        }

        .animate-fade-in-delay-5 {
          animation: fadeIn 0.6s ease-out 0.5s both;
        }

        .animate-fade-in-delay-6 {
          animation: fadeIn 0.6s ease-out 0.6s both;
        }
      `}</style>
    </section>
  )
}

export default ProductTemplate
