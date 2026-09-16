import { User } from 'lucide-react'
import React from 'react'
import { useAuth } from '../../../context/AuthContext'

const AdminDashboard = () => {
  const {user} = useAuth()
  return (
    <div className='dashboard-indecator'>
      <h5 className='admin-name'>{user.name}</h5>
      <User className="action-icon action-admin-icon" size={24} />
    </div>
  )
}

export default AdminDashboard