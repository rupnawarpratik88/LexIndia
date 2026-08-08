import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        ⚖️ <span>Lex</span>India
      </div>
      <div className="navbar-links desktop">
        <a href="#">Home</a>
        <a href="#">How it Works</a>
        <a href="#">Pricing</a>
        <button className="navbar-btn">Get Started</button>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#" onClick={() => setMenuOpen(false)}>How it Works</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Pricing</a>
          <button className="navbar-btn">Get Started</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar