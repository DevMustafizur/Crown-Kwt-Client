import React from 'react'
import { useAuth } from '../../../context/AuthContext'
import AdminDashboard from './adminDashboard/AdminDashboard'
import UserDashboard from './userDashboard/UserDashboard'

const DashboardControll = () => {
    const { user } = useAuth()
    if (user?.role == "admin") {
        return <AdminDashboard />
    } else {
        return <UserDashboard />
    }
}

export default DashboardControll