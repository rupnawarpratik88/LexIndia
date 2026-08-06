import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Upload from './components/Upload'
import Chat from './components/Chat'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Upload />
      <Chat />
    </div>
  )
}

export default App
