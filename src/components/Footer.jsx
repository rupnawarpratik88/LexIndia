import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>⚖️ <span>Lex</span>India</h3>
          <p>India's AI Legal Assistant. Making Indian law accessible to everyone.</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Product</h4>
            <a href="#">Analyze Document</a>
            <a href="#">Legal Chat</a>
            <a href="#">Draft Documents</a>
          </div>
          <div className="footer-col">
            <h4>Laws Covered</h4>
            <a href="#">IPC & CrPC</a>
            <a href="#">GST Law</a>
            <a href="#">Property Law</a>
            <a href="#">Consumer Rights</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="javascript:void(0)" onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>Contact</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 LexIndia. All rights reserved.</p>
        <p>Built with ❤️ for India</p>
      </div>
    </footer>
  )
}

export default Footer