import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-badge">🇮🇳 Built for Indian Law</div>
      <h1>Your AI Legal Assistant <br /> for <span>Indian Law</span></h1>
      <p>Upload any legal document — contract, notice, agreement — and get instant analysis in simple English or Hindi</p>
      <div className="hero-buttons">
        <button className="btn-primary">Analyze Document ⚖️</button>
        <button className="btn-secondary">See How it Works</button>
      </div>
      <div className="hero-stats">
        <div className="stat">
          <h3>10,000+</h3>
          <p>Documents Analyzed</p>
        </div>
        <div className="stat">
          <h3>1.5M+</h3>
          <p>Indian Lawyers</p>
        </div>
        <div className="stat">
          <h3>IPC & GST</h3>
          <p>Indian Laws Covered</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
