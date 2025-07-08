import React from 'react'
import Home from '../pages/Home'
import Pages1 from '../pages/Pages1'
import Pages2 from '../pages/Pages2'


import { Routes, Route } from 'react-router-dom'

function Navegation() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mentor' element={< Pages1 />} />
      <Route path='/group' element={< Pages2 />} />
    </Routes >

  )
}

export default Navegation
