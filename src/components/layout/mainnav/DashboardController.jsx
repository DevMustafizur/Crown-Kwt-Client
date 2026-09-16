import React from 'react'
import UserDashbaord from './UserDashbaord'
import AdminDashboard from './AdminDashboard'
import { useAuth } from '../../../context/AuthContext'

const DashboardController = () => {
    const { user } = useAuth()
    
    if (user?.role == "admin") {
        return <AdminDashboard />
    }
    return <UserDashbaord />

}

export default DashboardController