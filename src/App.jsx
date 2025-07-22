import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="px-4 md:px-8 max-w-2xl mx-auto">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App