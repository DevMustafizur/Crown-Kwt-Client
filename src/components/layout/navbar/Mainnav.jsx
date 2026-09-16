import React from 'react'
import { Link } from 'react-router'
import { useLanguage } from '../../../context/LanguageContext'
import { useAuth } from '../../../context/AuthContext'
// import "./mainnav.css"
import { Search } from 'lucide-react'

const Mainnav = () => {
    const { currentLanguage } = useLanguage()
    const { login,user } = useAuth()

    const testLogin = () => {
        login({ name: "md mustafizur rahman", role: 'user' })
    }

    return (
        <section id='main-nav'>
            <div className='container'>
                <div className='main_nav-wrapper'>

                    {/* web brand */}
                    <Link onClick={() => { testLogin() }} to="/" className="action-brand brand">
                        <span className="brand__name">{currentLanguage.webName}</span>
                        <span className="brand__type">{currentLanguage.webType}</span>
                    </Link>


                    {/* Search */}
                    {
                        user?.role == "admin" ? "" : <div className={`search-form ${currentLanguage == ""}`}>
                            <input type="text" className="search-input" placeholder='Search...' />
                            <Search className="action-icon action-search-icon" />
                        </div>
                    }

                </div>
            </div>
        </section>
    )
}

export default Mainnav