import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

import Home from './pages/home.jsx'
import Market from './pages/market.jsx'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'

function App() {

  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
