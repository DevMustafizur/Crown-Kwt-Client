import { User } from 'lucide-react';
import { Link, useLocation } from 'react-router'
import { useLanguage } from '../../../context/LanguageContext';

const Account = () => {
    const location = useLocation()
    const {currentLanguage} = useLanguage()
    return (
        <Link to="/profile" className={`action action-account ${location.pathname == "/profile" ? "active": ""}`} aria-label="Account">
            <User className="action-icon action-user-icon" size={20} />
            <span>{currentLanguage.account}</span>
        </Link>
    )
}

export default Account