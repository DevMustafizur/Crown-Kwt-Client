import { Link } from 'react-router'
import { useAuth } from '../../../context/AuthContext'
import { useLanguage } from '../../../context/LanguageContext'

const Login = () => {
    const { login } = useAuth()
    const { currentLanguage } = useLanguage()
    return (
        <button className='action login-action-btn'>
            Login
        </button>
    )
}

export default Login