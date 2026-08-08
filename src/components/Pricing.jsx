import React from 'react'
import './Pricing.css'

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: 'forever',
    features: [
      '3 document analyses per month',
      '10 legal chat messages per day',
      'English language only',
      'TXT files only'
    ],
    btn: 'Get Started Free',
    highlight: false
  },
  {
    name: 'Pro',
    price: '₹499',
    period: 'per month',
    features: [
      'Unlimited document analyses',
      'Unlimited legal chat',
      'Hindi + English language',
      'PDF + TXT support',
      'Priority support'
    ],
    btn: 'Start Pro',
    highlight: true
  },
  {
    name: 'Business',
    price: '₹1999',
    period: 'per month',
    features: [
      'Everything in Pro',
      'Team access upto 10 users',
      'API access',
      'Custom legal templates',
      'Dedicated support'
    ],
    btn: 'Contact Us',
    highlight: false
  }
]

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-badge">Simple Pricing</div>
      <h2>Choose Your Plan</h2>
      <p>Affordable legal AI for every Indian</p>
      <div className="pricing-cards">
        {plans.map((plan, i) => (
          <div key={i} className={`pricing-card ${plan.highlight ? 'highlighted' : ''}`}>
            {plan.highlight && <div className="popular-badge">Most Popular</div>}
            <h3>{plan.name}</h3>
            <div className="price">
              <span className="amount">{plan.price}</span>
              <span className="period">/{plan.period}</span>
            </div>
            <ul>
              {plan.features.map((feature, j) => (
                <li key={j}>✓ {feature}</li>
              ))}
            </ul>
            <button className={plan.highlight ? 'btn-primary' : 'btn-secondary'}>
              {plan.btn}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing