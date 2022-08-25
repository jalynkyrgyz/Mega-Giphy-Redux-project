import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Categories from '../Category'
import Random from '../Random/Random'
import Trend from '../Trend/Trend'

function Navrouter() {
  return (
    <Routes>
      <Route path="/categories" element={<Categories />} />
      <Route path="/trend" element={<Trend />} />
      <Route path="/random" element={<Random />} />
    </Routes>
  )
}

export default Navrouter
