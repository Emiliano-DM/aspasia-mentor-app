import React from 'react'
import Home from '../pages/Home'
import Mentor from '../pages/Mentor'
import Group from '../pages/Group'
import { Routes, Route } from 'react-router-dom'
import Results from '../pages/Results'
import About from '../pages/About'
import Contact from '../pages/Contact'

function Navegation() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mentor' element={< Mentor />} />
      <Route path='/group' element={< Group />} />
      <Route path='/result' element={< Results />} />

      <Route path='/about' element={<About />} />
      <Route path='/contact' element={< Contact />} />

    </Routes >

  )
}

export default Navegation
