import React, { useState } from 'react'
import { analyzeDocument } from '../services/gemini'
import * as pdfjsLib from 'pdfjs-dist'
import Tesseract from 'tesseract.js'
import './Upload.css'

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`

const Upload = () => {
  const [file, setFile] = useState(null)
  const [text, setText] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [extracting, setExtracting] = useState(false)
  const [language, setLanguage] = useState('english')

 const extractTextFromImage = async (imageData) => {
  const { data: { text } } = await Tesseract.recognize(imageData, 'eng', {
    logger: m => console.log('Tesseract:', m)
  })
  console.log('Extracted text:', text)
  return text
}

  const extractText = async (selectedFile) => {
    setExtracting(true)
    try {
      if (selectedFile.type === 'application/pdf') {
        const arrayBuffer = await selectedFile.arrayBuffer()
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise
        let fullText = ''

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i)
          const content = await page.getTextContent()
          const pageText = content.items.map(item => item.str).join(' ')

console.log('Page text length:', pageText.trim().length)
console.log('Page text:', pageText)
          
          if (pageText.trim().length > 50) {
            fullText += pageText
          } else {
           const viewport = page.getViewport({ scale: 3.0 })
const canvas = document.createElement('canvas')
canvas.height = viewport.height
canvas.width = viewport.width
const ctx = canvas.getContext('2d')
await page.render({ canvasContext: ctx, viewport }).promise
const dataUrl = canvas.toDataURL('image/png')
const imageText = await extractTextFromImage(dataUrl)
console.log('OCR Text:', imageText)
fullText += imageText
          }
        }
        setText(fullText)
      } else if (selectedFile.type.startsWith('image/')) {
        const imageText = await extractTextFromImage(selectedFile)
        setText(imageText)
      } else {
        const reader = new FileReader()
        reader.onload = (evt) => setText(evt.target.result)
        reader.readAsText(selectedFile)
      }
    } catch (err) {
      setText('')
      alert('Error reading file. Please try again.')
    }
    setExtracting(false)
  }

  const handleFile = async (e) => {
    const selectedFile = e.target.files[0]
    setFile(selectedFile)
    await extractText(selectedFile)
  }

  const handleAnalyze = async () => {
    if (!text) return
    setLoading(true)
    try {
      const response = await analyzeDocument(text, language)
      setResult(response)
    } catch (error) {
      setResult('Error analyzing document. Please try again.')
    }
    setLoading(false)
  }

  return (
    <section className="upload-section" id="upload">
      <h2>Analyze Your Document</h2>
      <p>Upload any legal document and get instant AI analysis</p>
      <div className="upload-box">
        <div className="upload-icon">📄</div>
        <p>Select your document below</p>
        <label className="upload-btn">
          Browse File
          <input type="file" accept=".txt,.pdf,image/*" hidden onChange={handleFile} />
        </label>
        <p className="upload-hint">Supports PDF, TXT and Images</p>
        {file && <p className="file-name">✅ {file.name}</p>}
        <div className="lang-toggle">
          <button
            className={language === 'english' ? 'lang-btn active' : 'lang-btn'}
            onClick={() => setLanguage('english')}
          >
            English
          </button>
          <button
            className={language === 'hindi' ? 'lang-btn active' : 'lang-btn'}
            onClick={() => setLanguage('hindi')}
          >
            हिंदी
          </button>
        </div>
      </div>
      {extracting && (
        <p className="extracting-msg">Reading document... please wait</p>
      )}
      {file && !extracting && (
        <button className="analyze-btn" onClick={handleAnalyze} disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze with AI'}
        </button>
      )}
      {result && (
        <div className="result-box">
          <h3>LexIndia Analysis</h3>
          <div className="result-content">
            {result.split('\n').map((line, index) => {
              if (line.includes('SUMMARY')) return <h4 key={index} className="result-heading">📋 {line}</h4>
              if (line.includes('RISKY')) return <h4 key={index} className="result-heading red">⚠️ {line}</h4>
              if (line.includes('KEY POINTS')) return <h4 key={index} className="result-heading">✅ {line}</h4>
              if (line.includes('RECOMMENDED')) return <h4 key={index} className="result-heading gold">🔍 {line}</h4>
              if (line.trim() === '') return <br key={index} />
              return <p key={index} className="result-line">{line}</p>
            })}
          </div>
        </div>
      )}
    </section>
  )
}

export default Upload