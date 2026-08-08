import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    setMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        ⚖️ <span>Lex</span>India
      </div>
      <div className="navbar-links desktop">
        <a onClick={() => scrollTo('home')} href="javascript:void(0)">Home</a>
        <a onClick={() => scrollTo('howitworks')} href="javascript:void(0)">How it Works</a>
        <a onClick={() => scrollTo('pricing')} href="javascript:void(0)">Pricing</a>
        <button className="navbar-btn">Get Started</button>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <a onClick={() => scrollTo('home')} href="javascript:void(0)">Home</a>
          <a onClick={() => scrollTo('howitworks')} href="javascript:void(0)">How it Works</a>
          <a onClick={() => scrollTo('pricing')} href="javascript:void(0)">Pricing</a>
          <button className="navbar-btn">Get Started</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar