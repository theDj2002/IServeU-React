import { useState } from 'react'

function FeedbackForm({ onSubmitFeedback }) {
  const [rating, setRating] = useState(5)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.set('rating', String(rating))

    try {
      await onSubmitFeedback(formData)
      form.reset()
      setRating(5)
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="feedback-form-card">
      <div className="section-header">
        <p className="section-tag">Submit Feedback</p>
        <h2>Tell us what you think</h2>
        <p className="section-subtext">
          Your feedback helps us improve the product experience.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Feedback</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Share your experience..."
          />
        </div>

        <div className="form-group">
          <label>Rating</label>
          <div className="rating-row">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                className={`star-btn ${rating >= star ? 'active' : ''}`}
                onClick={() => setRating(star)}
              >
                ★
              </button>
            ))}
            <span className="rating-text">{rating}/5</span>
          </div>
        </div>

        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
    </div>
  )
}

export default FeedbackForm