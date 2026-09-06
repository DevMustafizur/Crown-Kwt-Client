import { Link } from 'react-router'
import { useAuth } from '../../../context/AuthContext'
import { useLanguage } from '../../../context/LanguageContext'

const Login = () => {
    const { isLoggedIn, login } = useAuth()
    const {currentLanguage } = useLanguage()
    return (
        <>
            {
                !isLoggedIn ? <Link
                    to="/"
                    className="login__button"
                >
                    <span onClick={login}>{currentLanguage.login}</span>
                </Link> : ''
            }
        </>
    )
}

export default Login