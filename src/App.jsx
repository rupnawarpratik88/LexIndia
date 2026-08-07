import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Upload from './components/Upload'
import Chat from './components/Chat'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Upload />
      <Chat />
      <Footer />
    </div>
  )
}

export default App