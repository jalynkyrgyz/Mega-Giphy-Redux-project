import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { writeRandom } from '../../store/random/actions'
import styles from './Random.module.css'

function Random() {
  const dispatch = useDispatch()
  const { random, loading, error } = useSelector((state) => state.random)

  useEffect(() => {
    dispatch(writeRandom())
  }, [])
  console.log(loading, error, random)
  return (
    <div className={styles.random}>
      <img src={random?.images?.downsized_medium.url} alt="img" />
      <p>{random?.images?.title}</p>
    </div>
  )
}

export default Random
