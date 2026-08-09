import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Upload from './components/Upload'
import Chat from './components/Chat'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Auth from './components/Auth'
import supabase from './services/supabase'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [showAuth, setShowAuth] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })
  }, [])

  const handleLogin = (user) => {
    setUser(user)
    setShowAuth(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  return (
    <div className="app">
      {showAuth && <Auth onLogin={handleLogin} />}
      <Navbar
        user={user}
        onGetStarted={() => setShowAuth(true)}
        onLogout={handleLogout}
      />
      <Hero onGetStarted={() => setShowAuth(true)} />
      <HowItWorks />
      <Upload />
      <Chat />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App