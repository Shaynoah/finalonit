import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo2.jpg'

const Navbar = () => {
	const [open, setOpen] = useState(false)
	const [openProducts, setOpenProducts] = useState(false)
	const [manualOpenProducts, setManualOpenProducts] = useState(false)
	const [openMobileProducts, setOpenMobileProducts] = useState(false)
	const productsRef = useRef(null)
	const productsCloseTimeout = useRef(null)

	useEffect(() => {
		function onKey (e) {
			if (e.key === 'Escape') setOpen(false)
		}
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [])

	// close Products dropdown when clicking outside
	useEffect(() => {
		function onDocClick (e) {
			if (openProducts && productsRef.current && !productsRef.current.contains(e.target)) {
				setOpenProducts(false)
				setManualOpenProducts(false)
			}
		}
		document.addEventListener('mousedown', onDocClick)
		return () => document.removeEventListener('mousedown', onDocClick)
	}, [openProducts])

	// lock body scroll while menu is open
	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
		return () => { document.body.style.overflow = '' }
	}, [open])

	// remove dark mode class if it exists (cleanup from previous dark mode feature)
	useEffect(() => {
		document.documentElement.classList.remove('dark')
		localStorage.removeItem('onit:theme')
	}, [])

	return (
		<nav className="navbar bg-white shadow-sm sticky top-0 z-50 text-slate-800">
			<div className="container flex items-center justify-between py-3">
				<NavLink to="/" className="flex items-center gap-3 no-underline">
					<div className="brand-wrap flex items-center gap-3">
						<img src={logo} alt="Onit Microfinance Bank" className="brand-mark" />
						<div className="brand-text leading-tight">
							<div className="brand-title">Onit Microfinance Bank</div>
							<div className="brand-sub">Relationship-driven microfinance</div>
						</div>
					</div>
				</NavLink>

				{/* desktop links */}
								<ul className="hidden md:flex gap-6 items-center m-0 text-slate-800">
									<li className="nav-item"><NavLink to="/" className={({ isActive }) => (isActive ? 'text-onit font-semibold' : 'text-slate-800 hover:text-onit')}>Home</NavLink></li>
									<li className="nav-item"><NavLink to="/about" className={({ isActive }) => (isActive ? 'text-onit font-semibold' : 'text-slate-800 hover:text-onit')}>About</NavLink></li>
									<li className="nav-item nav-dropdown" ref={productsRef}
										onMouseEnter={() => {
											if (productsCloseTimeout.current) {
												clearTimeout(productsCloseTimeout.current)
												productsCloseTimeout.current = null
											}
											setOpenProducts(true)
										}}
										onMouseLeave={() => {
											if (manualOpenProducts) return
											productsCloseTimeout.current = setTimeout(() => setOpenProducts(false), 180)
										}}
									>
										<div className="flex items-center gap-2">
											<NavLink to="/services" className={({ isActive }) => (isActive ? 'text-onit font-semibold' : 'text-slate-800 hover:text-onit')} onClick={() => { setOpenProducts(false); setManualOpenProducts(false) }}>Our Products</NavLink>
											<button aria-expanded={openProducts} aria-haspopup="true" className="nav-dropdown-toggle text-slate-800 hover:text-onit" onClick={() => { setOpenProducts(s => { const next = !s; if (next) setManualOpenProducts(true); return next }); }}>
												<svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="inline-block"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
											</button>
										</div>
										<ul className={`nav-dropdown-menu ${openProducts ? 'open' : ''}`} role="menu" aria-label="Products submenu">
											<li role="none"><NavLink role="menuitem" to="/services#branch-products" className={({ isActive }) => (isActive ? 'text-onit font-semibold block px-4 py-2' : 'block px-4 py-2 text-slate-700 hover:bg-slate-50')} onClick={() => { setOpenProducts(false); setManualOpenProducts(false) }}>Branch Products</NavLink></li>
											<li role="none"><NavLink role="menuitem" to="/services/mfanisi-products" className={({ isActive }) => (isActive ? 'text-onit font-semibold block px-4 py-2' : 'block px-4 py-2 text-slate-700 hover:bg-slate-50')} onClick={() => { setOpenProducts(false); setManualOpenProducts(false) }}>MFANISI Products</NavLink></li>
										</ul>
									</li>
					<li className="nav-item"><NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-onit font-semibold' : 'text-slate-800 hover:text-onit')}>Contact</NavLink></li>
				</ul>

				{/* mobile actions */}
				<div className="md:hidden flex items-center gap-3">
					<button
						aria-label={open ? 'Close menu' : 'Open menu'}
						aria-expanded={open}
						aria-controls="mobile-menu"
						className={`relative w-10 h-10 flex items-center justify-center rounded-md text-onit focus:outline-none focus:ring-2 focus:ring-onit/30 hamburger-button ${open ? 'open' : ''}`}
						onClick={() => setOpen(o => !o)}
					>
						<span className="hamburger-lines">
							<span className="hamburger-line line-1" aria-hidden="true" />
							<span className="hamburger-line line-2" aria-hidden="true" />
							<span className="hamburger-line line-3" aria-hidden="true" />
						</span>
					</button>
				</div>
			</div>

			{/* mobile menu overlay */}
			<div id="mobile-menu" className={`md:hidden fixed inset-0 z-40 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
				{/* Overlay area: clicking it should close the menu */}
				<div className={`absolute inset-0 bg-black/30 mobile-overlay ${open ? 'open' : ''} transition-opacity`} onClick={() => setOpen(false)} />
				<div className={`relative backdrop-blur-md bg-white/95 shadow-lg min-h-screen mobile-menu-panel ${open ? 'open' : ''}`}>
					<div className="container py-8">
						<ul role="menu" className="flex flex-col gap-6 text-lg fade-stagger" style={{'--delay':'40ms'}}>
							<li><NavLink onClick={() => setOpen(false)} to="/" className={({ isActive }) => (isActive ? 'text-onit font-semibold text-lg' : 'text-slate-700 text-lg')}>Home</NavLink></li>
							<li><NavLink onClick={() => setOpen(false)} to="/about" className={({ isActive }) => (isActive ? 'text-onit font-semibold text-lg' : 'text-slate-700 text-lg')}>About</NavLink></li>
							<li
								onMouseEnter={() => setOpenMobileProducts(true)}
								onMouseLeave={() => setOpenMobileProducts(false)}
							>
								<div className="flex items-center justify-between">
									<NavLink onClick={() => { setOpen(false); setOpenMobileProducts(false); }} to="/services" className={({ isActive }) => `text-lg font-semibold flex-1 text-left ${isActive ? 'text-onit' : 'text-slate-700'}`}>Our Products</NavLink>
									<button onClick={(e) => { e.preventDefault(); setOpenMobileProducts(!openMobileProducts); }} className="p-1 text-slate-700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={`transition-transform ${openMobileProducts ? 'rotate-180' : ''}`}><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
								</div>
								{openMobileProducts && (
									<ul className="pl-4 mt-2 flex flex-col gap-2">
										<li><NavLink onClick={() => setOpen(false)} to="/services#branch-products" className={({ isActive }) => (isActive ? 'text-onit font-semibold' : 'text-slate-700')}>Branch Products</NavLink></li>
										<li><NavLink onClick={() => setOpen(false)} to="/services/mfanisi-products" className={({ isActive }) => (isActive ? 'text-onit font-semibold' : 'text-slate-700')}>MFANISI Products</NavLink></li>
									</ul>
								)}
							</li>
							<li><NavLink role="menuitem" onClick={() => setOpen(false)} to="/contact" className={({ isActive }) => (isActive ? 'text-onit font-semibold' : 'text-slate-700')}>Contact</NavLink></li>
						</ul>
						{/* CTA intentionally removed per request */}
					</div>
					{/* explicit close at top-right inside menu */}
					<button aria-label="Close menu" onClick={() => setOpen(false)} className="absolute top-4 right-4 p-2 mobile-close-btn rounded-md bg-white/20 focus:outline-none focus:ring-2 focus:ring-onit/30">
						<svg width="18" height="18" viewBox="0 0 24 24" className="mobile-close-icon"><line x1="5" y1="5" x2="19" y2="19" strokeWidth="2" stroke="currentColor" strokeLinecap="round"/><line x1="19" y1="5" x2="5" y2="19" strokeWidth="2" stroke="currentColor" strokeLinecap="round"/></svg>
					</button>
				</div>
			</div>
		</nav>
	)
}

export default Navbar

