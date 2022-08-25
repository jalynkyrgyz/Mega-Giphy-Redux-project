import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div>
          <Link className={styles.logo} to="/">
            Giphy
          </Link>
        </div>
        <div className={styles.right}>
          <Link className={styles.menu} to="/trend">
            Trend
          </Link>
          <Link className={styles.menu} to="/random">
            Random
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
