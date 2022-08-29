import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { writeRandom } from '../../store/random/actions'

function Random() {
  const dispatch = useDispatch()
  const { random, loading, error } = useSelector((state) => state.random)

  useEffect(() => {
    dispatch(writeRandom())
  }, [])
  console.log(loading, error, random)
  return (
    <div>
      <img src={random?.images?.downsized_medium.url} alt="img" />
    </div>
  )
}

export default Random
