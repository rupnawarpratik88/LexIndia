import React, { useState } from 'react'
import './Upload.css'

const Upload = () => {
  const [file, setFile] = useState(null)
  const [dragging, setDragging] = useState(false)

  const handleFile = (e) => {
    setFile(e.target.files[0])
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    setFile(e.dataTransfer.files[0])
  }

  return (
    <section className="upload-section">
      <h2>Analyze Your Document</h2>
      <p>Upload any legal document and get instant AI analysis</p>

      <div
        className={`upload-box ${dragging ? 'dragging' : ''}`}
        onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
      >
        <div className="upload-icon">📄</div>
        {file ? (
          <p className="file-name">✅ {file.name}</p>
        ) : (
          <>
            <p>Drag & drop your document here</p>
            <span>or</span>
          </>
        )}
        <label className="upload-btn">
          Browse File
          <input type="file" accept=".pdf,.doc,.docx" hidden onChange={handleFile} />
        </label>
        <p className="upload-hint">Supports PDF, DOC, DOCX</p>
      </div>

      {file && (
        <button className="analyze-btn">
          ⚖️ Analyze with AI
        </button>
      )}
    </section>
  )
}

export default Upload