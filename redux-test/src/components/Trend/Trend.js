import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { writeTrends } from '../../store/trend/actions'

function Trend() {
  const dispatch = useDispatch()
  const { trends, loading, error } = useSelector((state) => state.trends)
  useEffect(() => {
    dispatch(writeTrends())
  }, [])
  console.log(loading, error, trends)

  return <div>Trend</div>
}

export default Trend
