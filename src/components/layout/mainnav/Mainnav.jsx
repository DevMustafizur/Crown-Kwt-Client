import React from 'react'
import "./mainnav.css"
import { Search, ShoppingCart } from 'lucide-react'
import { Link, redirect, useLocation } from 'react-router'
import DashboardController from './DashboardController'
import { useAuth } from '../../../context/AuthContext'


const Mainnav = () => {
    const location = useLocation()
    const { isLoggedIn, login, user } = useAuth()

    const loginTest = () => {
        login({ name: "mustafiz", role: "admin" })
    }

    return (
        // web brand
        <section id='main-nav'>
            <div className='container'>
                <div className='man-nav_wrapper'>

                    {/* web-brand */}
                    <div onClick={loginTest} className='web-brand'>
                        {
                            user?.role == "admin" ? <div>
                                <h4>Crown Kwt</h4>
                                <h6>Dashboard</h6>
                            </div> : <div className='web_brand-title'>Crown Kwt</div>
                        }
                    </div>

                    {/* search */}
                    {
                        user?.role == "admin" ? "" : <div className='search-form'>
                            <input type="text" className="search-input" placeholder='Search...' />
                            <Search className="action-icon action-search-icon" size={14} />
                        </div>
                    }

                    <div className='navbar-actions'>
                        {/* addToCart */}
                        {
                            user?.role == "admin" ? "" : <Link to="/cart" className={`action action-cart ${location.pathname == "/   cart" ? "active" : ""}`} aria-label="Shopping-cart" >
                                <ShoppingCart className='action-icon action-shopCart-icon ' size={22} />
                                <span className="cart-count">
                                    2
                                </span>
                            </Link>
                        }
                        {/* auth */}

                        {
                            isLoggedIn ? <DashboardController /> : "Login"
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mainnav