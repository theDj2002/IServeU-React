import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './UserProfile.css'

function UserProfile() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

        if (!response.ok) {
          throw new Error('Failed to fetch user profile')
        }

        const data = await response.json()
        setUser(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [id])

  if (loading) {
    return <div className="profile-status">Loading profile...</div>
  }

  if (error) {
    return <div className="profile-status error">❌ {error}</div>
  }

  if (!user) {
    return <div className="profile-status error">User not found</div>
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <Link to="/" className="back-btn">← Back to Directory</Link>

        <div className="profile-card">
          <div className="profile-top">
            <div className="profile-avatar">
              {user.name.charAt(0)}
            </div>

            <div>
              <h1>{user.name}</h1>
              <p className="profile-username">@{user.username}</p>
              <p className="profile-email">{user.email}</p>
            </div>
          </div>

          <div className="profile-grid">
            <div className="profile-box">
              <h3>Contact Information</h3>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Website:</strong> {user.website}</p>
            </div>

            <div className="profile-box">
              <h3>Company</h3>
              <p><strong>Name:</strong> {user.company.name}</p>
              <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
              <p><strong>Business:</strong> {user.company.bs}</p>
            </div>

            <div className="profile-box">
              <h3>Address</h3>
              <p><strong>Street:</strong> {user.address.street}</p>
              <p><strong>Suite:</strong> {user.address.suite}</p>
              <p><strong>City:</strong> {user.address.city}</p>
              <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
            </div>

            <div className="profile-box">
              <h3>Geo Location</h3>
              <p><strong>Latitude:</strong> {user.address.geo.lat}</p>
              <p><strong>Longitude:</strong> {user.address.geo.lng}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile