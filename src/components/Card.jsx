import React from 'react'
import styles from './Card.module.css'

function Card({ isDark }) {
  return (
    <div className={`${styles.container} ${isDark ? styles.darkCard : styles.lightCard}`}>
      <div className={styles.icon}>✨</div>
      <h2 className={styles.title}>Card Component</h2>
      <p className={styles.text}>
        This card is styled using <span>CSS Modules</span>, giving it scoped,
        conflict-free, and maintainable styling.
      </p>

      <div className={styles.badges}>
        <span>React</span>
        <span>CSS Modules</span>
        <span>Reusable UI</span>
      </div>
    </div>
  )
}

export default Card