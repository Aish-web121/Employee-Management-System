import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
