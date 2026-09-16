import React from 'react'
import { useAuth } from '../../../context/AuthContext'
import { User } from 'lucide-react';

const UserDashbaord = () => {
  const { user } = useAuth()
  const innerwidth = window.innerWidth;
  console.log(innerwidth)

  if (innerWidth > 992) {
    return (
      <div>
        <User className="action-icon action-user-icon" size={20} />
        {user.name}
      </div>
    )
  } else {
    return ''
  }
}

export default UserDashbaord