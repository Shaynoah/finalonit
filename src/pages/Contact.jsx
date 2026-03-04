import React, { useState } from 'react'
import { useToast } from '../contexts/ToastContext'

const Contact = () => {
  const [copied, setCopied] = useState(null)

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(id)
      setTimeout(() => setCopied(null), 1400)
    } catch (e) {
      // fallback: select & execCommand (old browsers)
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(id)
      setTimeout(() => setCopied(null), 1400)
    }
  }

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [ripple, setRipple] = useState(false)
  const toast = useToast()

  const onChange = (e) => setFormData(f => ({ ...f, [e.target.name]: e.target.value }))

  const validate = () => {
    const errs = {}
    if (!formData.name || formData.name.trim().length < 2) errs.name = 'Please enter your name.'
    if (!formData.email || !/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(formData.email)) errs.email = 'Please enter a valid email.'
    if (!formData.message || formData.message.trim().length < 10) errs.message = 'Please enter a short message.'
    return errs
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length) {
      toast.show('Please fix highlighted errors', { type: 'error', duration: 3000 })
      // focus first invalid field
      const keys = Object.keys(errs)
      if (keys && keys[0]) {
        const el = document.getElementById(keys[0])
        if (el) el.focus()
      }
      return
    }
    setSubmitting(true)
    try {
      // Construct message with form data
      const messageBody = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
      // Open WhatsApp with the message
      const phoneNumber = '+254709567000'
      const encodedMessage = encodeURIComponent(messageBody)
      const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`
      window.open(whatsappUrl, '_blank')
      
      await new Promise(r => setTimeout(r, 900))
      toast.show('Message sent via WhatsApp! We\'ll get back to you soon.', { type: 'success', duration: 3500 })
      setFormData({ name: '', email: '', subject: '', message: '' })
      // show ripple briefly on the button
      setRipple(true)
      setTimeout(() => setRipple(false), 900)
    } catch (err) {
      toast.show('Failed to open messaging app. Try again later.', { type: 'error', duration: 5000 })
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  // FAQ
  const faqs = [
    { q: 'How long does it take for a loan to be approved and disbursed?', a: 'Depending on the product, approval can range from a few hours for fast-cash mobile loans to a few days for larger business loans.' },
    { q: 'Who can open an account or get a loan?', a: 'Microfinance banks primarily target micro-entrepreneurs, small and medium-sized enterprises (SMEs), artisans, farmers, and individual low-income earners.' },
    { q: 'What documents are required to apply for a loan?', a: 'Common requirements include a national ID, Kenya Revenue Authority (KRA) PIN, passport photos, recent bank/mobile money statements, and in some cases, a business license or registration.' }
    
    // { q: 'How do i withdraw cash to Mpesa?', a : 'our USSD code *356* allows you to withdraw cash directly to your Mpesa account quickly and securely.' }

  ]
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section className="page contact py-12 reveal-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* LEFT: contact details + map */}
          <div className="rounded-xl bg-white/90 dark:bg-slate-900 p-8 shadow-lg contact-left animate-fadeUp">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-extrabold">Get in touch</h1>
                <p className="mt-2 text-slate-600 dark:text-slate-300">We’re here to help. Reach out for support, accounts, partnerships, or media inquiries.</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="flex items-start gap-4 contact-card card-stylish animate-fadeUp" style={{animationDelay: '20ms'}}>
                <div className="w-12 h-12 rounded-lg bg-onit text-white flex items-center justify-center contact-card-icon" aria-hidden>
                  {/* phone icon (solid) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.21.42 2.39.9 3.5a2 2 0 0 1-.45 2.11l-1.45 1.45a15.05 15.05 0 0 0 6 6l1.46-1.46a2 2 0 0 1 2.12-.45c1.12.5 2.3.79 3.51.91A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-slate-500">Phone</div>
                  <div className="mt-1 flex items-center gap-3">
                    <a className="text-lg font-semibold text-onit" href="tel:+254709567000">+254 709 567 000</a>
                    <button aria-live="polite" aria-label="Copy phone" onClick={() => copyToClipboard('+254709567000', 'phone')} className={"text-sm transition px-2 py-1 rounded-md " + (copied === 'phone' ? 'bg-onit text-white' : 'text-slate-400 hover:text-slate-600')}>{copied === 'phone' ? 'Copied' : 'Copy'}</button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 contact-card card-stylish animate-fadeUp" style={{animationDelay: '120ms'}}>
                <div className="w-12 h-12 rounded-lg bg-slate-800 text-white flex items-center justify-center contact-card-icon" aria-hidden>
                  {/* email icon (envelope) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-slate-500">Email</div>
                  <div className="mt-1 flex items-center gap-3">
                    <a className="text-lg font-semibold text-onit" href="mailto:info@maishabank.com">info@maishabank.com</a>
                    <button aria-live="polite" aria-label="Copy email" onClick={() => copyToClipboard('info@maishabank.com', 'email')} className={"text-sm transition px-2 py-1 rounded-md " + (copied === 'email' ? 'bg-onit text-white' : 'text-slate-400 hover:text-slate-600')}>{copied === 'email' ? 'Copied' : 'Copy'}</button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 contact-card card-stylish animate-fadeUp" style={{animationDelay: '220ms'}}>
                <div className="w-12 h-12 rounded-lg bg-indigo-500 text-white flex items-center justify-center contact-card-icon" aria-hidden>
                  {/* location icon (map pin) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-slate-500">Postal</div>
                  <div className="mt-1 text-lg font-semibold">P.O. Box 49316-00100, Nairobi - Kenya</div>
                </div>
              </div>

              <div className="flex items-start gap-4 contact-card card-stylish animate-fadeUp" style={{animationDelay: '320ms'}}>
                <div className="w-12 h-12 rounded-lg bg-onit-dark text-white flex items-center justify-center contact-card-icon" aria-hidden>
                  {/* office/building icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M4 21V8l8-6 8 6v13"/><path d="M9 10h.01"/><path d="M15 10h.01"/></svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-slate-500">Office</div>
                  <div className="mt-1 text-lg font-semibold">Onit Microfinance, Jahazi, 2nd Floor, James Gichuru Road - Nairobi</div>
                </div>
              </div>
            </div>

            {/* small map / decorative visual */}
            <div className="mt-6 rounded-lg overflow-hidden shadow-md map-placeholder relative card-stylish" aria-hidden>
              <iframe className="w-full h-44 md:h-52" title="Onit Microfinance location" loading="lazy" src="https://maps.google.com/maps?q=James%20Gichuru%20Road%2C%20Lavington%2C%20Nairobi&t=&z=16&ie=UTF8&iwloc=&output=embed" style={{border:0}} />
              <div className="absolute right-3 bottom-3 flex gap-2">
                <a className="btn-primary inline-flex items-center gap-2" target="_blank" rel="noopener noreferrer" href="https://maps.google.com?q=James%20Gichuru%20Road%2C%20Lavington%2C%20Nairobi">Open in Maps</a>
              </div>
            </div>

            {/* Office hours & social links */}
            <div className="mt-6 grid grid-cols-1 gap-3">
              <div className="rounded-lg p-4 bg-white/90 dark:bg-slate-800 contact-card card-stylish animate-card-enter">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-500">Office Hours</div>
                    <div className="mt-1 text-lg font-semibold">Mon-Sat: <span className="font-medium">8:30 AM - 5:00 PM</span></div>
                    <div className="text-sm text-slate-600">Sat: <span className="font-medium">8:30 AM - 1:00 PM</span></div>
                    <div className="text-sm text-slate-600">Sun: <span className="font-medium">Closed</span></div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold badge pulse">Open now</div>
                    <div className="mt-3">
                      <a href="tel:+254709567000" className="inline-flex items-center gap-2 btn-primary-sm">Call now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg p-3 bg-white/80 dark:bg-slate-800 contact-card card-stylish animate-card-enter" style={{animationDelay:'120ms'}}>
                <div className="text-sm text-slate-500">Follow us</div>
                <div className="mt-2 flex gap-3 items-center">
                  <a href="https://www.facebook.com/share/1DRudf3by9/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-md transform transition-transform duration-200 hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" style={{background:'#1877F2'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://x.com/Maisha_MFB" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-md transform transition-transform duration-200 hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" style={{background:'#000000'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/maisha-microfinance-bank-limited/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-md transform transition-transform duration-200 hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600" style={{background:'#0A66C2'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.602 0 4.269 2.37 4.269 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/maishamicrofinancebank?igsh=MXMyMjBqc3ZucmliMA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-md transform transition-transform duration-200 hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500" style={{background: 'linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: contact form */}
          <div className="rounded-xl bg-white/90 dark:bg-slate-900 p-6 md:p-8 shadow-lg contact-form card-stylish animate-fadeUp" style={{animationDelay: '80ms'}}>
            <h2 className="text-xl md:text-2xl font-bold">Send us a message</h2>
            <p className="mt-2 text-xs md:text-sm text-slate-500">We'll get back to you within the shortest time possible.</p>
            <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="field">
                <label htmlFor="name" className="field-label text-xs md:text-sm">Full name</label>
                <div className="relative input-with-icon">
                  <div className="input-icon left-0 flex items-center pl-3 text-slate-500 pointer-events-none"></div>
                  <input type="text" id="name" name="name" autoComplete="name" required value={formData.name} onChange={onChange} aria-invalid={errors.name ? 'true' : 'false'} aria-describedby={errors.name ? 'err-name': undefined} className={"form-input pl-10 " + (errors.name ? 'ring-2 ring-red-400' : '') + (formData.name ? ' has-value' : '')} />
                </div>
                {errors.name && <p id="err-name" className="text-sm text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div className="field md:col-span-2">
                <label htmlFor="email" className="field-label text-xs md:text-sm">Email</label>
                <div className="relative input-with-icon">
                  <div className="input-icon left-0 flex items-center pl-3 text-slate-500 pointer-events-none"></div>
                  <input type="email" id="email" name="email" autoComplete="email" required value={formData.email} onChange={onChange} aria-invalid={errors.email ? 'true' : 'false'} aria-describedby={errors.email ? 'err-email': undefined} className={"form-input pl-10 " + (errors.email ? 'ring-2 ring-red-400' : '') + (formData.email ? ' has-value' : '')} />
                </div>
                {errors.email && <p id="err-email" className="text-sm text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div className="field md:col-span-2">
                <label className="field-label text-xs md:text-sm">Subject</label>
                <div className="relative input-with-icon">
                  <div className="input-icon left-0 flex items-center pl-3 text-slate-500 pointer-events-none"></div>
                  <input type="text" name="subject" autoComplete="off" value={formData.subject} onChange={onChange} className={"form-input pl-10 " + (formData.subject ? 'has-value' : '')} />
                </div>
              </div>

              <div className="field md:col-span-2">
                <label className="field-label text-xs md:text-sm">Message</label>
                <div className="relative input-with-icon">
                  <div className="input-icon left-0 flex items-center pl-3 text-slate-500 pointer-events-none"></div>
                  <textarea id="message" name="message" rows="5" autoComplete="off" value={formData.message} onChange={onChange} aria-invalid={errors.message ? 'true' : 'false'} aria-describedby={errors.message ? 'err-message': undefined} className={"form-input resize-y pl-10 " + (errors.message ? 'ring-2 ring-red-400' : '') + (formData.message ? ' has-value' : '')}></textarea>
                </div>
                {errors.message && <p id="err-message" className="text-sm text-red-500 mt-1">{errors.message}</p>}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 mt-2">
                <button 
                  type="submit" 
                  disabled={submitting} 
                  className={"group relative inline-flex items-center justify-center px-5 py-2.5 rounded-full font-medium text-xs md:text-sm text-white bg-gradient-to-r from-onit via-blue-500 to-blue-600 hover:from-blue-600 hover:via-blue-500 hover:to-onit shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-onit focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100 overflow-hidden " + (ripple ? ' success-ripple' : '')}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                  {submitting ? (
                    <span className="relative flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                      </svg>
                      <span>Sending...</span>
                    </span>
                  ) : (
                    <span className="relative">Send Message</span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.preventDefault(); window.location.href = 'mailto:info@maishabank.com' }}
                  className="group relative inline-flex items-center justify-center px-5 py-2.5 rounded-full font-medium text-xs md:text-sm text-slate-600 bg-white border-2 border-slate-200 hover:border-onit hover:text-onit hover:bg-gradient-to-r hover:from-onit/5 hover:to-blue-50 transform hover:scale-105 active:scale-95 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-onit focus:ring-offset-2 shadow-sm hover:shadow-md overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-onit/0 via-onit/10 to-onit/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative">Email us instead</span>
                </button>
              </div>
            </form>

            

            {/* FAQ accordion */}
            <div className="mt-6 faq-wrap">
              <h3 className="text-lg font-bold">Frequently asked questions</h3>
              <div className="mt-3 grid gap-2">
                {faqs.map((f, idx) => (
                  <div key={idx} className="rounded-lg p-3 bg-white/80 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <button aria-expanded={openFaq === idx} aria-controls={`faq-${idx}`} onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full text-left flex items-center justify-between gap-3">
                      <div>
                        <div className="font-semibold">{f.q}</div>
                      </div>
                      <div className={"text-slate-500 transform transition " + (openFaq === idx ? 'rotate-180' : '')}>▾</div>
                    </button>
                    <div id={`faq-${idx}`} className={"mt-2 text-slate-600 overflow-hidden transition-all " + (openFaq === idx ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2')}>
                      <p className="text-sm">{f.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
