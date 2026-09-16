import React from 'react'
import { useAuth } from '../../../context/AuthContext'
import Guestnavbar from './Guestnavbar'
import Adminnavbar from './Adminnavbar'
import Usernavbar from './Usernavbar'

import './navbar.css'
import { LogIn, Menu, Search, ShoppingCart, User } from 'lucide-react'
import { Link, redirect, useNavigate } from 'react-router'
import { useLanguage } from '../../../context/LanguageContext'

const Navbar = () => {
    const { isLoggedIn, user, login } = useAuth()
    const navigate = useNavigate()

    const loginTest = async () => {
        const res = await login({ name: "mustafiz", role: "admin" })
        if (res.role == "admin") {
            navigate("/admin")
        } else {
            navigate("/auth")
        }
    }

    const admin = isLoggedIn && user.role == "admin";
    console.log(admin)
    const { currentLanguage } = useLanguage()

    return (
        <nav id='main-navigation'>
            <div className='container'>
                <div className={`main-navigation-wrapper ${currentLanguage.name == "en" ? "en" : "ar"}`}>
                    <div onClick={loginTest}>
                        {
                            admin ? <Menu className='action-icon menu-action-icon' /> : <div className='web_brand-title'>Crown Kwt </div>
                        }
                    </div>
                    {/* search-bar */}
                    {
                        !admin && (
                            <div className='search-form'>
                                <input type="text" className="search-input" placeholder='Search...' />
                                <Search className="action-icon action-search-icon" size={14} />
                            </div>
                        )
                    }


                    <div className='navbar-actions'>
                        {/* add-to-cart */}
                        {
                            !admin && (
                                <Link to="/cart" className={`action action-cart ${location.pathname == "/   cart" ? "active" : ""}`} aria-label="Shopping-cart" >
                                    <ShoppingCart className='action-icon action-shopCart-icon ' size={22} />
                                    <span className="cart-count">
                                        2
                                    </span>
                                </Link>
                            )
                        }

                        {/* login  */}

                        {
                            !admin && (
                                <Link to={'/login'} className='action action-login'>
                                    <User className='action-icon action-user-icon' />
                                </Link>
                            )
                        }

                        {
                            admin && (
                                <div className=''>
                                    admin-dashboard
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar