import React from 'react'
import './Terms.css'

const Terms = ({ onClose }) => {
  return (
    <div className="terms-overlay">
      <div className="terms-box">
        <div className="terms-header">
          <h2>Terms of Service</h2>
          <button onClick={onClose}>✕</button>
        </div>
        <div className="terms-content">
          <h3>1. Acceptance of Terms</h3>
          <p>By using LexIndia, you agree to these terms. LexIndia provides AI-powered legal information for educational purposes only.</p>

          <h3>2. Not Legal Advice</h3>
          <p>LexIndia is not a law firm and does not provide legal advice. All information provided is for general educational purposes only. Always consult a qualified lawyer for legal matters.</p>

          <h3>3. User Responsibilities</h3>
          <p>You are responsible for all content you upload. Do not upload confidential or sensitive documents without understanding the risks.</p>

          <h3>4. Privacy</h3>
          <p>We collect minimal data necessary to provide our services. We do not sell your data to third parties.</p>

          <h3>5. Limitation of Liability</h3>
          <p>LexIndia is not responsible for any decisions made based on information provided by our platform.</p>

          <h3>6. Governing Law</h3>
          <p>These terms are governed by the laws of India. Any disputes shall be resolved in courts of Mumbai, Maharashtra.</p>

          <h3>7. Contact</h3>
          <p>For any questions contact us at: rupnawarpratik88@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Terms