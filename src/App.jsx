import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import About from './components/About'
import Products from './components/Products'
import Maps from './components/Maps'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import MapleDetail from './components/MapleDetail'
import EbonyDetail from './components/EbonyDetail'
import './App.css'

// Komponen untuk halaman utama
function HomePage() {
  useEffect(() => {
    // Smooth scroll untuk navigasi
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault()
        
        const targetId = this.getAttribute('href')
        if (targetId === '#') return
        
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          })
        }
      })
    })

    // Sticky header
    const header = document.querySelector('header')
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)'
        } else {
          header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)'
        }
      })
    }
  }, [])

  return (
    <>
      <Hero />
      <VideoSection />
      <About />
      <Products />
      <Maps />
      <Contact />
    </>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/maple-golf-residence" element={<MapleDetail />} />
        <Route path="/ebony-residence" element={<EbonyDetail />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App