import React from 'react'
import { Link } from 'react-router'
import { useAuth } from '../../../context/AuthContext'
import { useLanguage } from '../../../context/LanguageContext'
import { LogIn } from 'lucide-react'

const Login = () => {
  const { login } = useAuth()
  const { currentLanguage } = useLanguage()

  return (
    <Link to={'/profile'} onClick={login} className='action action-login-btn'>
      <LogIn className='action-icon' size={20}/>
      <span>{currentLanguage.login}</span>
    </Link>
  )
}

export default Login