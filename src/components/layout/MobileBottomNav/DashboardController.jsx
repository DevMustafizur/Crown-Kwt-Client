import React from 'react'
import { useAuth } from '../../../context/AuthContext'

const DashboardController = () => {
   const {user} = useAuth()

    if(user?.role == "admin"){
        return "Admin Dashboard"
    } else{
        return "User Dashboard"
    }
}

export default DashboardController