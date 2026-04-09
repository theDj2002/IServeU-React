import { Link } from 'react-router-dom'
import './UserCard.css'

function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="user-avatar">
        {user.name.charAt(0)}
      </div>

      <div className="user-info">
        <h2>{user.name}</h2>
        <p className="username">@{user.username}</p>

        <div className="user-meta">
          <p>📧 {user.email}</p>
          <p>📞 {user.phone}</p>
          <p>🏢 {user.company.name}</p>
        </div>

        <Link to={`/user/${user.id}`} className="view-btn">
          View Profile
        </Link>
      </div>
    </div>
  )
}

export default UserCard