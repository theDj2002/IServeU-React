function FeedbackList({ feedbacks }) {
  return (
    <div className="feedback-list-card">
      <div className="section-header">
        <p className="section-tag">Community Feedback</p>
        <h2>What users are saying</h2>
        <p className="section-subtext">
          Real feedback submitted by users in the app.
        </p>
      </div>

      <div className="feedback-list">
        {feedbacks.length === 0 ? (
          <div className="empty-state">
            <h3>No feedback yet</h3>
            <p>Be the first one to share your experience.</p>
          </div>
        ) : (
          feedbacks.map((item) => (
            <div key={item.id} className="feedback-item">
              <div className="feedback-top">
                <div>
                  <h3>{item.name}</h3>
                  <p className="feedback-date">{item.createdAt}</p>
                </div>

                <div className="stars">
                  {'★'.repeat(item.rating)}
                  {'☆'.repeat(5 - item.rating)}
                </div>
              </div>

              <p className="feedback-message">{item.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default FeedbackList