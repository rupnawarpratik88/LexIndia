import React, { useState } from 'react'
import './Footer.css'
import Terms from './Terms'

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {showTerms && <Terms onClose={() => setShowTerms(false)} />}
      {showPrivacy && <Terms onClose={() => setShowPrivacy(false)} />}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>⚖️ <span>Lex</span>India</h3>
            <p>India's AI Legal Assistant. Making Indian law accessible to everyone.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Product</h4>
              <a href="javascript:void(0)" onClick={() => scrollTo('upload')}>Analyze Document</a>
              <a href="javascript:void(0)" onClick={() => scrollTo('chat')}>Legal Chat</a>
              <a href="javascript:void(0)" onClick={() => scrollTo('draft')}>Draft Documents</a>
            </div>
            <div className="footer-col">
              <h4>Laws Covered</h4>
              <a href="javascript:void(0)">IPC & CrPC</a>
              <a href="javascript:void(0)">GST Law</a>
              <a href="javascript:void(0)">Property Law</a>
              <a href="javascript:void(0)">Consumer Rights</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="javascript:void(0)" onClick={() => scrollTo('about')}>About</a>
              <a href="javascript:void(0)" onClick={() => scrollTo('contact')}>Contact</a>
              <a href="javascript:void(0)" onClick={() => setShowTerms(true)}>Terms of Service</a>
              <a href="javascript:void(0)" onClick={() => setShowPrivacy(true)}>Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 LexIndia. All rights reserved.</p>
          <p>Built with ❤️ for India</p>
        </div>
      </footer>
    </>
  )
}

export default Footer