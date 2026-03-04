import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import microImg from '../images/micro2.jpg'
import exploreImg from '../images/A3.jpg'
import heroImg from '../images/hero.jpg'
import hero3Img from '../images/hero3.jpg'
import dialImg from '../images/dail2.jpg'
import Reveal from '../components/Reveal'
import AnimatedCounter from '../components/AnimatedCounter'

const HomepageClean = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const heroImages = [heroImg, hero3Img]

  // Add animation for dropping letters
  const renderAnimatedText = (text) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        style={{
          display: 'inline-block',
          animation: `dropLetter 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.08}s both`,
          transformOrigin: 'bottom center'
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  // Auto-slide carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(interval)
  }, [heroImages.length])
  return (
    <div className="page home hero-cream">
      <style>{`
        @keyframes dropLetter {
          0% {
            opacity: 0;
            transform: translateY(-50px) scale(0.8);
          }
          50% {
            opacity: 1;
            transform: translateY(5px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

      {/* Modern Premium Hero */}
      <section className="hero-strong relative overflow-hidden reveal-auto min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex items-center">
        {/* Sliding Background Images */}
        <div className="absolute inset-0 w-full h-full">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={img}
                alt={`Hero background ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Bluish overlay for text readability - darker on the left, lighter on the right */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-blue-800/15 to-transparent"></div>
              {/* Smooth gradient blur effect - fades gradually from left to right without hard edge */}
              <div 
                className="absolute inset-0 backdrop-blur-md" 
                style={{
                  maskImage: 'linear-gradient(to right, black 0%, black 40%, rgba(0,0,0,0.6) 60%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, black 0%, black 40%, rgba(0,0,0,0.6) 60%, transparent 100%)'
                }}
              ></div>
            </div>
          ))}
          </div>
        
        {/* Animated background elements - subtle */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse opacity-50"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse opacity-50" style={{animationDelay: '1s'}}></div>
        

        {/* Mobile fixed promo bar (visible on xs) */}
        <div className="sm:hidden absolute bottom-4 left-4 right-4 z-40">
          <div className="mx-auto max-w-lg">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl p-2.5 sm:p-3 flex items-center justify-between gap-2 sm:gap-3 shadow-lg">
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center text-lg sm:text-xl flex-shrink-0">📱</div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm font-bold truncate">Dial <span className="font-mono bg-white/10 px-1 rounded">*356*</span> — Mobile Banking</div>
                  <div className="text-[10px] sm:text-[11px] text-white/90 mt-0.5 truncate">Transfers • Balance • Airtime</div>
                </div>
              </div>
              <a href="tel:*356*" className="ml-2 sm:ml-3 inline-flex items-center px-2.5 sm:px-3 py-1.5 sm:py-2 bg-white text-indigo-700 rounded-md font-semibold shadow-sm text-xs sm:text-sm flex-shrink-0">Dial</a>
            </div>
          </div>
        </div>

        <div className="container relative z-10 pt-4 sm:pt-12 md:pt-12 pb-12 sm:pb-24 md:pb-32 px-4 sm:px-6">
          <div className="max-w-4xl">
            {/* Content - Left Aligned */}
            <div className="hero-content text-left">
              <div className="inline-block mb-3 sm:mb-4 md:mb-6">
                <div className="flex flex-col">
                  <span className={`text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-1000 ${currentSlide === 0 ? 'text-black' : 'text-white'}`}>💰 Financial Freedom Starts Here</span>
                  <span className={`text-xs sm:text-sm font-bold uppercase tracking-wider mt-0.5 sm:mt-1 transition-colors duration-1000 ${currentSlide === 0 ? 'text-black' : 'text-white'}`}>Onit Bank</span>
                </div>
              </div>
              
              <h1 className={`hero-strong-title text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black mb-3 sm:mb-4 md:mb-6 leading-tight transition-colors duration-1000 ${currentSlide === 0 ? 'text-black' : 'text-white'}`} style={{color: currentSlide === 0 ? '#000000' : '#ffffff'}}>
                {renderAnimatedText('Save Smart,')}
                <br />
                <span className={`hero-strong-accent transition-colors duration-1000 ${currentSlide === 0 ? 'text-black' : 'text-white'}`} style={{color: currentSlide === 0 ? '#000000' : '#ffffff'}}>
                  Grow Faster
                </span>
              </h1>
              
              <div className="mb-3 sm:mb-6 md:mb-8 w-full max-w-2xl">
                <p className={`text-xs sm:text-sm md:text-lg font-semibold leading-relaxed text-left transition-colors duration-1000 ${currentSlide === 0 ? 'text-black' : 'text-white'}`}>
                  We offer fair and digital banking services.<br className="hidden sm:inline" /> 
                  <span className={`block sm:inline text-xs sm:text-sm md:text-lg font-black mt-1 sm:mt-0 sm:ml-2 transition-colors duration-1000 ${currentSlide === 0 ? 'text-black' : 'text-white'}`}>Join the banking revolution</span> 
                  <span className={`block sm:inline text-base sm:text-xl md:text-3xl font-black mt-1 sm:mt-0 sm:ml-2 transition-colors duration-1000 ${currentSlide === 0 ? 'text-black' : 'text-white'}`}>#GETONIT</span>
                </p>
              </div>
              
              <p className={`hero-strong-sub text-sm sm:text-base md:text-xl mb-3 sm:mb-6 md:mb-8 max-w-xl transition-colors duration-1000 ${currentSlide === 0 ? 'text-black' : 'text-white'}`} style={{color: currentSlide === 0 ? '#000000' : '#ffffff'}}>
                Banking is now easier than ever.
              </p>
              
              <div className="flex justify-start mb-3 sm:mb-6 md:mb-8">
                <Link to="/contact" className="inline-flex items-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform duration-200">
                  Contact Us
                </Link>
              </div>
              
              <div className={`flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-8 text-xs sm:text-sm pt-2 sm:pt-2 md:pt-4 justify-start transition-colors duration-1000 ${currentSlide === 0 ? 'text-black' : 'text-white'}`}>
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg md:text-2xl">⚡</span>
                  <span className={`text-xs sm:text-sm transition-colors duration-1000 ${currentSlide === 0 ? 'text-black' : 'text-white'}`}><strong>Instant</strong> account setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg md:text-2xl">🔒</span>
                  <span className={`text-xs sm:text-sm transition-colors duration-1000 ${currentSlide === 0 ? 'text-black' : 'text-white'}`}><strong>Bank-grade</strong> security</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg md:text-2xl">📱</span>
                  <span className={`text-xs sm:text-sm transition-colors duration-1000 ${currentSlide === 0 ? 'text-black' : 'text-white'}`}><strong>24/7</strong> support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Spotlight — handpicked for you */}
      <Reveal>
        <section className="featured-products-hero py-8 sm:py-12 reveal-auto relative overflow-hidden">
          <div className="container mx-auto max-w-6xl relative z-10 px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 mb-4">
              <div className="w-full md:w-auto">
                <div className="inline-block mb-2 sm:mb-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100">
                  <span className="text-xs sm:text-sm font-semibold text-indigo-700">Our Products</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-1 text-gray-900 leading-tight">Your financial and banking needs deserve solutions that match</h2>
                <p className="text-gray-600 max-w-2xl text-sm sm:text-base mt-2">Find out how we can help you turn dreams into your reality.</p>
              </div>

              <div className="hidden sm:flex items-center gap-4">
                <Link to="/services#account-products" className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow hover:scale-105 transition-all duration-300">
                  <span className="text-sm">Explore All Products</span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-4 items-stretch mb-4">
              {/* MA01: Hero Mini - left */}
              <Link to="/services/ma01" className="hero-mini-card animate-fade-in-delay-1 group relative block p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-gray-100 bg-white hover:shadow-2xl transform transition-all duration-400 hover:-translate-y-3 overflow-hidden" style={{animationDelay: '0.08s'}}>
                <div className="absolute -right-12 -top-12 w-52 h-52 rounded-full bg-indigo-100 opacity-30 blur-2xl" aria-hidden />
                <div className="relative z-10 flex items-start gap-3 sm:gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white text-2xl sm:text-3xl font-extrabold shadow flex-shrink-0">💼</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-900 leading-tight">Onit Salary Account</h3>
                    <p className="text-gray-600 mt-1 text-sm sm:text-base">Fast salary account — instant setup, fee-free maintenance, mobile access.</p>
                    <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="inline-block px-2 sm:px-3 py-1 text-xs bg-indigo-50 text-indigo-700 rounded-full">Savings • MA01</span>
                      <span className="text-xs sm:text-sm text-gray-500">Start in minutes</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* MA04: Hero Mini - right */}
              <Link to="/services/ma04" className="hero-mini-card animate-fade-in-delay-2 group relative block p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-gray-100 bg-white hover:shadow-2xl transform transition-all duration-400 hover:-translate-y-3 overflow-hidden" style={{animationDelay: '0.18s'}}>
                <div className="absolute -left-12 -bottom-12 w-52 h-52 rounded-full bg-pink-100 opacity-30 blur-2xl" aria-hidden />
                <div className="relative z-10 flex items-start gap-3 sm:gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-pink-600 to-purple-500 flex items-center justify-center text-white text-2xl sm:text-3xl font-extrabold shadow flex-shrink-0">🚀</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-900 leading-tight">Onit Student Account</h3>
                    <p className="text-gray-600 mt-1 text-sm sm:text-base">Student account for college students — low min balance and easy mobile access.</p>
                    <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="inline-block px-2 sm:px-3 py-1 text-xs bg-pink-50 text-pink-700 rounded-full">Business • MA04</span>
                      <span className="text-xs sm:text-sm text-gray-500">Build working capital</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Mobile Banking Promo Card */}
            <div className="mt-4 sm:mt-6 mb-6 sm:mb-0 max-w-5xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-3xl transform transition-all duration-500 hover:scale-[1.02]">
                {/* Dark blue background with blur effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Content Grid - Text Left, Image Right */}
                <div className="relative z-10 grid md:grid-cols-2 gap-3 sm:gap-4 p-4 sm:p-5 md:p-6">
                  {/* Left Side - Text Content */}
                  <div className="flex flex-col justify-center text-white order-2 md:order-1">
                    {/* Headline */}
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 leading-tight">
                      Manage your ONIT account from anywhere
                    </h3>
                    
                    {/* USSD Code */}
                    <div className="mb-2 sm:mb-3">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-black text-orange-400">Dial *356*</span>
                    </div>
                    
                    {/* Features List */}
                    <ul className="space-y-1 sm:space-y-1.5 mb-2 sm:mb-3">
                      <li className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-white/90 text-xs sm:text-sm">Money transfer</span>
                      </li>
                      <li className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-white/90 text-xs sm:text-sm">Utility payments</span>
                      </li>
                      <li className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-white/90 text-xs sm:text-sm">Balance enquiry</span>
                      </li>
                      <li className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-white/90 text-xs sm:text-sm">Airtime top up</span>
                      </li>
                      <li className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-white/90 text-xs sm:text-sm">24/7 banking access</span>
                      </li>
                    </ul>
                    
                    {/* CTA Button */}
                    <a 
                      href="tel:*356*" 
                      className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center w-fit text-xs sm:text-sm"
                    >
                      Dial Now &gt;&gt;
                    </a>
                  </div>
                  
                  {/* Right Side - Phone Image */}
                  <div className="flex items-center justify-center order-1 md:order-2">
                    <div className="relative w-full max-w-[200px] sm:max-w-xs">
                      <img 
                        src={dialImg} 
                        alt="Mobile Banking" 
                        className="w-full h-auto object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:hidden text-center mt-6 mb-6">
              <Link to="/services#branch-products" className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow hover:scale-105 transition-all duration-300">
                <span>Explore All Products</span>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Explore Onit Microfinance Bank Services */}
      <Reveal>
        <section className="services-explore py-8 sm:py-12 reveal-auto relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={exploreImg} 
              alt="Background" 
              className="w-full h-full object-cover blur-md"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-indigo-900/80 to-blue-800/85"></div>
            {/* Additional blur overlay for better text visibility */}
            <div className="absolute inset-0 backdrop-blur-md"></div>
          </div>

          <div className="container mx-auto max-w-6xl relative z-10 px-4 sm:px-6">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="explore-title text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg leading-tight">Explore Onit Microfinance Bank</h2>
              <p className="explore-subtitle text-white/95 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto drop-shadow-md mt-2">We offer tailor-made banking solutions to our clients drawn from various segments of the economy.</p>
            </div>

            {/* 4 Service Options - Small Squares */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            {/* Safe & Secure */}
              <div className="service-explore-item text-center text-white bg-white/15 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg aspect-square flex flex-col items-center justify-center">
                <div className="explore-icon mb-2 sm:mb-3 flex justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/25 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg">
                    <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 11V8C8 6.343 9.343 5 11 5H13C14.657 5 16 6.343 16 8V11" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
                <h3 className="font-bold text-xs sm:text-sm md:text-base mb-1 sm:mb-2">Safe & Secure</h3>
                <p className="text-[10px] sm:text-xs text-white/90 leading-tight line-clamp-3">Our security practices with multi-level authentication system.</p>
            </div>

            {/* Loans */}
              <div className="service-explore-item text-center text-white bg-white/15 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg aspect-square flex flex-col items-center justify-center">
                <div className="explore-icon mb-2 sm:mb-3 flex justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/25 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg">
                    <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 6v12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 9h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
                <h3 className="font-bold text-xs sm:text-sm md:text-base mb-1 sm:mb-2">Loans</h3>
                <p className="text-[10px] sm:text-xs text-white/90 leading-tight line-clamp-3">Affordable interest rates for customer satisfaction and business continuity.</p>
            </div>

            {/* Transfer Money */}
              <div className="service-explore-item text-center text-white bg-white/15 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg aspect-square flex flex-col items-center justify-center">
                <div className="explore-icon mb-2 sm:mb-3 flex justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/25 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg">
                    <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none"><path d="M3 12l7-7v4h11v6H10v4l-7-7z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
                <h3 className="font-bold text-xs sm:text-sm md:text-base mb-1 sm:mb-2">Transfer Money</h3>
                <p className="text-[10px] sm:text-xs text-white/90 leading-tight line-clamp-3">Send money to friends, families and business associates from home.</p>
            </div>

            {/* 24/7 Personal Support */}
              <div className="service-explore-item text-center text-white bg-white/15 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg aspect-square flex flex-col items-center justify-center">
                <div className="explore-icon mb-2 sm:mb-3 flex justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/25 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg">
                    <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            </div>
                <h3 className="font-bold text-xs sm:text-sm md:text-base mb-1 sm:mb-2">24/7 Support</h3>
                <p className="text-[10px] sm:text-xs text-white/90 leading-tight line-clamp-3">Customer support in the branch, on your phone or online.</p>
            </div>
          </div>
        </div>
        </section>
      </Reveal>

      {/* Need Help Section */}
      <Reveal>
        <section className="need-help py-8 sm:py-12 bg-white reveal-auto">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
            {/* Question Icon Circle */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <div className="need-help-icon-wrapper">
                <div className="need-help-icon">
                  <svg width="48" height="48" className="sm:w-14 sm:h-14" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#0B69FF" strokeWidth="1.5"/>
                    <text x="12" y="16" textAnchor="middle" fontSize="18" className="sm:text-xl" fontWeight="bold" fill="#0B69FF" fontFamily="Montserrat">?</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="need-help-title text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-2">Need Help ?</h2>
              <p className="need-help-subtitle text-gray-600 text-base sm:text-lg mb-4">We are here, we will support you in case of any inquiry.</p>
              <a href="/contact" className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        </section>
      </Reveal>

      {/* Stats & Trust Section */}
      <section className="stats-section py-8 sm:py-12 bg-gradient-to-r from-blue-50 to-indigo-50 reveal-auto">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="stats-title text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-2 leading-tight">Why Choose Onit Microfinance  Bank ?</h2>
            <p className="stats-subtitle text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-2">Our commitment to excellence and customer satisfaction has made us a trusted partner for thousands of customers.Numbers that speak about our quality of service.
              Our focus is firmly on the future and empowering our communities with relevant financial products. </p>
          </div>

          <div className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Stat 1 */}
            <div className="stat-card text-center">
              <AnimatedCounter target={5000} duration={2500} suffix="+" />
              <h3 className="stat-label font-semibold text-gray-800 mb-2">Active Customers</h3>
              <p className="stat-description text-gray-600 text-sm">Satisfied customers trust us with their financial needs</p>
            </div>

            {/* Stat 2 */}
            <div className="stat-card text-center">
              <AnimatedCounter target={99} duration={2500} suffix="%" />
              <h3 className="stat-label font-semibold text-gray-800 mb-2">Uptime</h3>
              <p className="stat-description text-gray-600 text-sm">Reliable and secure platform available 24/7 for all transactions</p>
            </div>

            {/* Stat 3 */}
            <div className="stat-card text-center">
              <AnimatedCounter target={100000} duration={2500} suffix="+" />
              <h3 className="stat-label font-semibold text-gray-800 mb-2">Transactions</h3>
              <p className="stat-description text-gray-600 text-sm">Successful transactions processed securely</p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="testimonials py-8 sm:py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 reveal-auto">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg mt-2">Real stories from small businesses and entrepreneurs who grew with Onit.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="testimonial-card group p-6 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-blue-100 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="flex items-start gap-1 mb-3">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed font-medium text-base italic">"Onit helped my shop stay afloat — the quick micro-loan was a lifesaver. Friendly support and simple app."</p>
              <div className="flex items-center gap-3 border-t pt-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">A</div>
                <div>
                  <div className="font-bold text-gray-900">Aisha</div>
                  <div className="text-xs text-gray-500">Market Vendor</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card group p-6 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-purple-100 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-start gap-1 mb-3">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed font-medium text-base italic">"I automated savings for my staff and we finally had the cushion to expand. Their tools are practical."</p>
              <div className="flex items-center gap-3 border-t pt-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold">E</div>
                <div>
                  <div className="font-bold text-gray-900">Emmanuel</div>
                  <div className="text-xs text-gray-500">Café Owner</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card group p-6 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-indigo-100 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="flex items-start gap-1 mb-3">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed font-medium text-base italic">"Fast transfers and transparent fees — makes day-to-day business easier. Highly recommended."</p>
              <div className="flex items-center gap-3 border-t pt-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white font-bold">G</div>
                <div>
                  <div className="font-bold text-gray-900">Grace</div>
                  <div className="text-xs text-gray-500">Tailor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  )
}

export default HomepageClean
