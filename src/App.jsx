import { useState, useOptimistic } from 'react'
import './App.css'
import FeedbackForm from './components/FeedBackForm'
import FeedbackList from './components/FeedbackList'
import { submitFeedback } from './actions/feedback'

function App() {
  const [feedbacks, setFeedbacks] = useState([
  ])

  const [optimisticFeedbacks, addOptimisticFeedback] = useOptimistic(
    feedbacks,
    (currentState, newFeedback) => [newFeedback, ...currentState]
  )

  async function handleSubmitFeedback(formData) {
    const name = formData.get('name') || ''
    const message = formData.get('message') || ''
    const rating = Number(formData.get('rating'))

    const optimisticItem = {
      id: Date.now(),
      name,
      message,
      rating,
      createdAt: 'Submitting...',
    }

    addOptimisticFeedback(optimisticItem)

    const savedFeedback = await submitFeedback(formData)

    setFeedbacks((prev) => [savedFeedback, ...prev])
  }

  return (
    <div className="app-shell">
      <div className="background-glow glow-1"></div>
      <div className="background-glow glow-2"></div>

      <header className="hero-section">
        <p className="hero-badge">Mini Project • React + Optimistic UI</p>
        <h1>Smart Feedback App</h1>
        <p className="hero-text">
          A modern feedback system with ratings, optimistic updates, and a
          polished UI built for real-world frontend practice.
        </p>
      </header>

      <main className="main-grid">
        <FeedbackForm onSubmitFeedback={handleSubmitFeedback} />
        <FeedbackList feedbacks={optimisticFeedbacks} />
      </main>
    </div>
  )
}

export default App