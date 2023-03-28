import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Movie from './components/Movie'
import Navbar from './components/Navbar'
import DetailMovie from './pages/DetailMovie'
import LandingPage from './pages/LandingPage'

const App = () => {
  return (
    <div className=' font-source-sans'>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<LandingPage />}/>
        <Route  path='/movies' element={<Movie />}/>
        <Route  path='/movies/detail/:id' element={<DetailMovie />}/>
      </Routes>
    </div>
  )
}

export default App