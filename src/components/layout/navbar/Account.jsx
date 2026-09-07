import React from 'react'


import { User } from 'lucide-react';
import { Link, useLocation } from 'react-router'
const Account = () => {
    const location = useLocation()
    return (
        <Link to="/profile" className={`action action_user ${location.pathname == "/profile"? "active" : ""}`} aria-label="Account" >
            <User className="action_icon action-user-icon" />
        </Link>
    )
}

export default Account