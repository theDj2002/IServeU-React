import React from 'react'
import styles from './ThemeButton.module.css'

function ThemeButton({ isDark, setIsDark }) {
  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <button
      className={`${styles.base} ${isDark ? styles.dark : styles.light}`}
      onClick={toggleTheme}
    >
      {isDark ? '☀ Switch to Light Mode' : '🌙 Switch to Dark Mode'}
    </button>
  )
}

export default ThemeButton