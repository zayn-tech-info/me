import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/home'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="px-4 md:px-8 max-w-2xl mx-auto">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App