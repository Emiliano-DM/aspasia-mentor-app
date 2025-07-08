import React from 'react'
import Home from '../pages/Home'
import Mentor from '../pages/Mentor'
import Group from '../pages/Group'


import { Routes, Route } from 'react-router-dom'

function Navegation() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mentor' element={< Mentor />} />
      <Route path='/group' element={< Group />} />
    </Routes >

  )
}

export default Navegation
