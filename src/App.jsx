import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Movie from './components/Movie'
import Navbar from './components/Navbar'
import DetailMovie from './pages/DetailMovie'
import LandingPage from './pages/LandingPage'
import 'react-responsive-modal/styles.css';
import 'react-circular-progressbar/dist/styles.css';
import 'react-tooltip/dist/react-tooltip.css'
import People from './pages/People'
import PeopleDetail from './pages/PeopleDetail'

const App = () => {
  return (
    <div className=' font-source-sans'>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<LandingPage />}/>
        <Route  path='/movies' element={<Movie />}/>
        <Route  path='/movies/detail/:id' element={<DetailMovie />}/>
        <Route  path='/person' element={<People />}/>
        <Route  path='/person/detail/:id' element={<PeopleDetail />}/>
      </Routes>
    </div>
  )
}

export default App