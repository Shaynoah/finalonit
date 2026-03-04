import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import RevealAuto from './components/RevealAuto'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RevealAuto />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
