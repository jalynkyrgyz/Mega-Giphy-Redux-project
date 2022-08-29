import React from 'react'
// import { Link } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Navrouter from './Navrouter/Navrouter'
import styles from '../styles/app.module.css'
// import Random from './Random/Random'

function App() {
  return (
    <div className={styles.app}>
      <header>
        <Navbar />
      </header>
      <Navrouter />
      {/* <Link to="/categories">Categories</Link> */}
      {/* <Random /> */}
    </div>
  )
}

export default App
