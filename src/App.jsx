import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Maps from './components/Maps'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import './App.css'

function App() {
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
    <div>
      <Header />
      <Hero />
      <About />
      <Products />
      <Maps />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App