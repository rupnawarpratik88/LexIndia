import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        ⚖️ <span>Lex</span>India
      </div>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">How it Works</a>
        <a href="#">Pricing</a>
        <button className="navbar-btn">Get Started</button>
      </div>
    </nav>
  )
}

export default Navbar