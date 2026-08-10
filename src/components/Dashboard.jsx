import React from 'react'
import './Dashboard.css'

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-sidebar">
        <div className="dashboard-logo">⚖️ <span>Lex</span>India</div>
        <nav className="dashboard-nav">
          <a href="#" className="active">📊 Overview</a>
          <a href="#">📄 My Documents</a>
          <a href="#">💬 Chat History</a>
          <a href="#">⚙️ Settings</a>
        </nav>
        <button className="dashboard-logout" onClick={onLogout}>Logout</button>
      </div>
      <div className="dashboard-main">
        <div className="dashboard-header">
          <h2>Welcome back!</h2>
          <p>{user?.email}</p>
        </div>
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>0</h3>
            <p>Documents Analyzed</p>
          </div>
          <div className="stat-card">
            <h3>0</h3>
            <p>Chat Messages</p>
          </div>
          <div className="stat-card">
            <h3>Free</h3>
            <p>Current Plan</p>
          </div>
        </div>
        <div className="dashboard-actions">
          <h3>Quick Actions</h3>
          <div className="action-cards">
            <div className="action-card">
              <span>📄</span>
              <h4>Analyze Document</h4>
              <p>Upload and analyze a legal document</p>
            </div>
            <div className="action-card">
              <span>💬</span>
              <h4>Ask Legal Question</h4>
              <p>Chat with LexIndia AI about Indian Law</p>
            </div>
            <div className="action-card">
              <span>📝</span>
              <h4>Draft Document</h4>
              <p>Generate a legal document with AI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard