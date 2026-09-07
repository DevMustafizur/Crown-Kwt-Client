import { Link } from 'react-router'
import { useAuth } from '../../../context/AuthContext'
import { useLanguage } from '../../../context/LanguageContext'

const Login = () => {
    const { login } = useAuth()
    const { currentLanguage } = useLanguage()
    return (
        <Link to="/profile" className="login-action-btn">
            <span onClick={login}>{currentLanguage.login}</span>
        </Link>
    )
}

export default Login