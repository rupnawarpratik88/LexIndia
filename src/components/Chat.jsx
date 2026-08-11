import React, { useState } from 'react'
import './Chat.css'

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Namaste! I am LexIndia AI. Ask me anything about Indian Law — IPC, GST, Property, Consumer Rights, Labour Law and more! ⚖️'
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return
    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await fetch(
        'https://api.groq.com/openai/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
          },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
              {
                role: 'system',
                content: 'You are LexIndia, an expert AI legal assistant for Indian Law. Answer questions about IPC, CrPC, GST, Property Law, Consumer Rights, Labour Law, Family Law and all Indian laws. Keep answers clear and simple.'
              },
              ...messages,
              userMessage
            ]
          })
        }
      )
      const data = await response.json()
      const reply = data.choices[0].message.content
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error. Please try again.' }])
    }
    setLoading(false)
  }

  return (
   <section className="chat-section" id="chat">
      <h2>Ask LexIndia AI ⚖️</h2>
      <p>Ask any question about Indian Law</p>
      <div className="chat-box">
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.role}`}>
              <span className="message-icon">{msg.role === 'assistant' ? '⚖️' : '👤'}</span>
              <p>{msg.content}</p>
            </div>
          ))}
          {loading && (
            <div className="message assistant">
              <span className="message-icon">⚖️</span>
              <p>Thinking...</p>
            </div>
          )}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Ask anything about Indian Law..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage} disabled={loading}>Send</button>
        </div>
      </div>
    </section>
  )
}

export default Chat