import React from 'react'
import './HowItWorks.css'

const steps = [
  {
    number: '01',
    icon: '📄',
    title: 'Upload Document',
    desc: 'Upload any legal document — contract, notice, agreement, court order in PDF or TXT format'
  },
  {
    number: '02',
    icon: '🤖',
    title: 'AI Analyzes',
    desc: 'LexIndia AI reads your document and analyzes it against Indian law — IPC, GST, Property Law and more'
  },
  {
    number: '03',
    icon: '⚠️',
    title: 'Get Risk Report',
    desc: 'Receive a detailed report highlighting risky clauses, unfair terms and legal issues in simple language'
  },
  {
    number: '04',
    icon: '✅',
    title: 'Take Action',
    desc: 'Get clear recommended actions — what to do next, which lawyer to consult, how to protect your rights'
  }
]

const HowItWorks = () => {
  return (
    <section className="hiw-section">
      <div className="hiw-badge">Simple Process</div>
      <h2>How LexIndia Works</h2>
      <p>Get legal clarity in 4 simple steps</p>
      <div className="hiw-steps">
        {steps.map((step, i) => (
          <div className="hiw-step" key={i}>
            <div className="step-number">{step.number}</div>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks