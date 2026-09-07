import React from 'react'
import { Link } from 'react-router'
import { useAuth } from '../../../context/AuthContext'
import { useLanguage } from '../../../context/LanguageContext'

const Login = () => {
  const { login } = useAuth()
  const { currentLanguage } = useLanguage()

  return (
    <Link to={'/profile'} onClick={login} className='action action-login-btn'>{currentLanguage.login}</Link>
  )
}

export default Login