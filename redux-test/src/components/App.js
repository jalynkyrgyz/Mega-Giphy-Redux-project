import React from 'react'
import Categories from './Category'
// import Navbar from './Navbar/Navbar'
// import Navrouter from './Navrouter/Navrouter'
import styles from '../styles/app.module.css'

function App() {
  return (
    <div className={styles.app}>
      <header>{/* <Navbar /> */}</header>
      {/* <Navrouter /> */}
      <Categories />
    </div>
  )
}

export default App
