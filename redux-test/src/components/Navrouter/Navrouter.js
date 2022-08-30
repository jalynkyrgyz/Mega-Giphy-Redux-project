import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Categories from '../Category'
import Random from '../Random/Random'
import Trend from '../Trend/Trend'

function Navrouter() {
  return (
    <>
      <Categories />
      <Routes>
        <Route exact path="/" element={<Trend />} />
        <Route exact path="/random" element={<Random />} />
      </Routes>
    </>
  )
}

export default Navrouter
