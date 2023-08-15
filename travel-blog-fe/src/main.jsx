import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import './styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlogsLib from './pages/Blogs'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        
        <Route path="/blogLib" element={<BlogsLib/>}/>
        
        </Routes>
    </Router>
  </React.StrictMode>,
)
