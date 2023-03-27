import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Movie from './components/Movie'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'

const App = () => {
  return (
    <div className=' font-source-sans'>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<LandingPage />}/>
        <Route  path='/movies' element={<Movie />}/>
      </Routes>
    </div>
  )
}

export default App