import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-badge">Get In Touch</div>
      <h2>Contact Us</h2>
      <p>Have questions? We are here to help</p>
      <div className="contact-box">
        {sent ? (
          <div className="success-msg">
            <h3>Message Sent!</h3>
            <p>We will get back to you within 24 hours.</p>
          </div>
        ) : (
          <div className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Your message..."
                rows="5"
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button className="submit-btn" onClick={handleSubmit}>Send Message</button>
          </div>
        )}
      </div>
      <div className="disclaimer">
        <h4>Legal Disclaimer</h4>
        <p>LexIndia provides AI-powered legal information for educational purposes only. This is not legal advice. Always consult a qualified lawyer for legal matters. LexIndia is not responsible for any decisions made based on this information.</p>
      </div>
    </section>
  )
}

export default Contact