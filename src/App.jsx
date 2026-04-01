import React, { useState } from 'react'
import Card from './components/Card'
import ThemeButton from './components/ThemeButton'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={isDark ? 'app darkApp' : 'app lightApp'}>
      <div className="overlay"></div>

      <div className="content">
        <div className="intro">
          <p className="tag">React CSS Modules Assignment</p>
          <h1>Modern UI Components</h1>
          <p className="subtitle">
            A professional card component and a dynamic theme switcher built
            using React + CSS Modules.
          </p>
        </div>

        <Card isDark={isDark} />
        <ThemeButton isDark={isDark} setIsDark={setIsDark} />
      </div>
    </div>
  )
}

export default App