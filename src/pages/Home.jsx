import { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import './Home.css'

function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
          throw new Error('Failed to fetch users')
        }

        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="home-page">
      <div className="overlay"></div>

      <div className="home-container">
        <div className="hero-section">
          <p className="tag">Digital User Directory</p>
          <h1>Explore User Profiles Effortlessly</h1>
          <p className="subtitle">
            A clean React directory app using <span>React Router</span>, <span>useEffect</span>, and live API data.
          </p>
        </div>

        {loading && <p className="status-text">Loading users...</p>}
        {error && <p className="error-text">❌ {error}</p>}

        <div className="users-grid">
          {!loading &&
            !error &&
            users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Home