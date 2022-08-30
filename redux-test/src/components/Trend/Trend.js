/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { PropTypes } from 'prop-types'
import { writeTrends } from '../../store/trend/actions'
import styles from './Trend.module.css'

function TrendItem({ images }) {
  return (
    <div>
      {/* <p className={styles.trend_title}>{title}</p> */}
      <img src={images.fixed_height_downsampled.url} alt="img" />
    </div>
  )
}

function Trend() {
  const dispatch = useDispatch()
  const { trends, loading, error } = useSelector((state) => state.trends)
  useEffect(() => {
    dispatch(writeTrends())
  }, [])
  console.log(loading, error, trends)

  return (
    <div className={styles.trend}>
      <div className={styles.trend_inner}>
        {trends.map((trend, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <TrendItem key={index} {...trend} />
        ))}
      </div>
    </div>
  )
}

export default Trend

// TrendItem.propTypes = {
//   title: PropTypes.string.isRequired,
// }
