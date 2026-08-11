import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-badge">Our Story</div>
      <h2>About LexIndia</h2>
      <div className="about-content">
        <div className="about-text">
          <p>LexIndia was founded with a simple mission — make Indian law accessible to every citizen, not just those who can afford expensive lawyers.</p>
          <p>India has over 1.5 million lawyers but millions of common citizens, small businesses and startups struggle to understand basic legal documents, notices and agreements.</p>
          <p>We are building India's Harvey AI — an AI-powered legal platform trained specifically on Indian Law, covering IPC, CrPC, GST, Property Law, Consumer Rights and more.</p>
        </div>
        <div className="about-stats">
          <div className="about-stat">
            <h3>1.5M+</h3>
            <p>Indian Lawyers</p>
          </div>
          <div className="about-stat">
            <h3>$3B</h3>
            <p>Harvey AI Valuation</p>
          </div>
          <div className="about-stat">
            <h3>0</h3>
            <p>Good Indian Solutions</p>
          </div>
        </div>
      </div>
      <div className="about-team">
        <h3>Founder</h3>
        <div className="founder-card">
          <div className="founder-avatar">PR</div>
          <div className="founder-info">
            <h4>Pratik Rupnawar</h4>
           <p>Founder & Developer, LexIndia</p>
            <p>Building India's AI Legal Platform</p>
            <a href="https://github.com/rupnawarpratik88" target="_blank">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About