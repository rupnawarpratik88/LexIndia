import React, { useState } from 'react'
import supabase from '../services/supabase'
import './Auth.css'

const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    setLoading(true)
    setMessage('')
    try {
      if (isLogin) {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
        onLogin(data.user)
      } else {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) throw error
        setMessage('Check your email to confirm your account!')
      }
    } catch (err) {
      setMessage(err.message)
    }
    setLoading(false)
  }

  return (
    <div className="auth-overlay">
      <div className="auth-box">
        <h2>⚖️ <span>Lex</span>India</h2>
        <h3>{isLogin ? 'Welcome Back' : 'Create Account'}</h3>
        <p>{isLogin ? 'Sign in to continue' : 'Join LexIndia today'}</p>
        <div className="auth-form">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {message && <p className="auth-message">{message}</p>}
          <button className="auth-btn" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Please wait...' : isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
        <p className="auth-switch">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? ' Sign Up' : ' Sign In'}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Auth