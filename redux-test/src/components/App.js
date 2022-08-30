import React from 'react'
// import { Link } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Navrouter from './Navrouter/Navrouter'
import styles from '../styles/app.module.css'
// import Random from './Random/Random'

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <div className={styles.main}>
        <Navrouter />
        {/* <Link to="/categories">Categories</Link> */}
        {/* <Random /> */}
      </div>
    </div>
  )
}

export default App
