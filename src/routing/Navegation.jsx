import React from 'react'
import Home from '../pages/Home'
import Mentor from '../pages/Mentor'
import Group from '../pages/Group'
import { Routes, Route } from 'react-router-dom'
import Results from '../pages/Results'

function Navegation() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mentor' element={< Mentor />} />
      <Route path='/group' element={< Group />} />
      <Route path='/result' element={< Results />} />
    </Routes >

  )
}

export default Navegation
