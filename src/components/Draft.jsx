import React, { useState } from 'react'
import './Draft.css'

const documentTypes = [
  'Rent Agreement',
  'Employment Contract',
  'Non-Disclosure Agreement (NDA)',
  'Partnership Agreement',
  'Freelance Contract',
  'Legal Notice',
  'Affidavit'
]

const Draft = () => {
  const [docType, setDocType] = useState('')
  const [details, setDetails] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleDraft = async () => {
    if (!docType || !details) return
    setLoading(true)
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + import.meta.env.VITE_GROQ_API_KEY
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [{
            role: 'user',
            content: 'You are LexIndia, an expert AI legal assistant for Indian Law. Draft a professional ' + docType + ' based on Indian Law with these details: ' + details + '. Make it legally sound, professional and complete.'
          }]
        })
      })
      const data = await response.json()
      setResult(data.choices[0].message.content)
    } catch (err) {
      setResult('Error generating document. Please try again.')
    }
    setLoading(false)
  }

  const handleDownload = () => {
    const blob = new Blob([result], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = docType + '.txt'
    a.click()
  }

  return (
    <section className="draft-section" id="draft">
      <h2>Draft Legal Documents</h2>
      <p>Generate professional legal documents instantly with AI</p>
      <div className="draft-box">
        <div className="form-group">
          <label>Document Type</label>
          <select value={docType} onChange={(e) => setDocType(e.target.value)}>
            <option value="">Select document type</option>
            {documentTypes.map((type, i) => (
              <option key={i} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Details</label>
          <textarea
            placeholder="Example: Rent agreement between Rahul Sharma (landlord) and Priya Singh (tenant) for flat in Mumbai, rent Rs 15000 per month, 11 months..."
            rows="5"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <button className="draft-btn" onClick={handleDraft} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Document'}
        </button>
      </div>
      {result && (
        <div className="draft-result">
          <div className="draft-result-header">
            <h3>Generated Document</h3>
            <button className="download-btn" onClick={handleDownload}>Download</button>
          </div>
          <pre>{result}</pre>
        </div>
      )}
    </section>
  )
}

export default Draft