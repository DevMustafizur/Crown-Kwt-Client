import { Home } from 'lucide-react'
import { Link, useLocation } from 'react-router'
import { useLanguage } from '../../../context/LanguageContext'

const HomeNav = () => {
    const location = useLocation()
    const {currentLanguage} = useLanguage()
    return (
        <Link to="/" className={`action action-home ${location.pathname == "/"? "active" : ""}`}>
            <Home className="action-icon action-home-icon" />
            <span>{currentLanguage.menu.home}</span>
        </Link>
    )
}

export default HomeNav