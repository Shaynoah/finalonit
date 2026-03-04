import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastProvider } from './contexts/ToastContext'
import Toasts from './components/Toasts'
import ScrollToTop from './components/ScrollToTop'
import Homepage from './pages/HomepageClean'
import About from './pages/About'
import Services from './pages/Services'
import MfanisiProducts from './pages/MfanisiProducts'
import Contact from './pages/Contact'
import SeniorManagement from './pages/BoardOfDirectors'
import MB01 from './pages/MB01'
import MB101 from './pages/MB101'
import ML102 from './pages/ML102'
import ML103 from './pages/ML103'
import ML104 from './pages/ML104'
import ML105 from './pages/ML105'
import ML106 from './pages/ML106'
import ML107 from './pages/ML107'
import ML108 from './pages/ML108'
import ML109 from './pages/ML109'
import ML110 from './pages/ML110'
import ML111 from './pages/ML111'
import ML113 from './pages/ML113'
import ML114 from './pages/ML114'
import ML115 from './pages/ML115'
import ML116 from './pages/ML116'
import MA01 from './pages/MA01'
import MA02 from './pages/MA02'
import MA03 from './pages/MA03'
import MA04 from './pages/MA04'
import MA05 from './pages/MA05'
import MF01 from './pages/MF01'
import MC01 from './pages/MC01'
import MS01 from './pages/MS01'
import MC02 from './pages/MC02'
import MF02 from './pages/MF02'
import MB02 from './pages/MB02'
import MB03 from './pages/MB03'
import History from './pages/History'			

function App () {
	return (
		<ToastProvider>
		<div className="app bg-slate-50 min-h-screen">
			<Navbar />
			<ScrollToTop />
			<main className="main-content text-slate-900">
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/services/mfanisi-products" element={<MfanisiProducts />} />
					<Route path="/services/mb01" element={<MB01 />} />
					<Route path="/services/mb101" element={<MB101 />} />
					<Route path="/services/ml102" element={<ML102 />} />
					<Route path="/services/ml103" element={<ML103 />} />
					<Route path="/services/ml104" element={<ML104 />} />
					<Route path="/services/ml105" element={<ML105 />} />
					<Route path="/services/ml106" element={<ML106 />} />
					<Route path="/services/ml107" element={<ML107 />} />
					<Route path="/history" element={<History />} />
					<Route path="/services/ml108" element={<ML108 />} />
					<Route path="/services/ml109" element={<ML109 />} />
					<Route path="/services/ml110" element={<ML110 />} />

				<Route path="/services/ml111" element={<ML111 />} />
				<Route path="/services/ml113" element={<ML113 />} />
				<Route path="/services/ml114" element={<ML114 />} />
				<Route path="/services/ml115" element={<ML115 />} />
				<Route path="/services/ml116" element={<ML116 />} />
				<Route path="/services/ma01" element={<MA01 />} />
					<Route path="/services/ma02" element={<MA02 />} />
					<Route path="/services/ma03" element={<MA03 />} />
					<Route path="/services/ma04" element={<MA04 />} />
					<Route path="/services/ma05" element={<MA05 />} />
					<Route path="/services/mf01" element={<MF01 />} />
					<Route path="/services/mc01" element={<MC01 />} />
					<Route path="/services/ms01" element={<MS01 />} />
					<Route path="/services/mc02" element={<MC02 />} />
					<Route path="/services/mf02" element={<MF02 />} />
					<Route path="/services/mb02" element={<MB02 />} />
					<Route path="/services/mb03" element={<MB03 />} />

					<Route path="/contact" element={<Contact />} />
					<Route path="/senior-management" element={<SeniorManagement />} />
				</Routes>
			</main>
			<Footer />
			<Toasts />
		</div>
		</ToastProvider>
	)
}

export default App

