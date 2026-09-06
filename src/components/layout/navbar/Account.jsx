import React from 'react'


import { User } from 'lucide-react';
import { Link } from 'react-router'
import { useAuth } from '../../../context/AuthContext';

const Account = () => {
    const { isLoggedIn, login } = useAuth()

    return (
        <>
            {/* Account */}
            <div>
                {
                    isLoggedIn ? <Link
                        to="/profile"
                        className="action action--account"
                        aria-label="Account"
                    >
                        <User className="icon" />
                    </Link> : ""
                }
            </div>
        </>

    )
}

export default Account