import Cart from './Cart'
import Account from './Account'
import Login from './Login'
import Language from './Language'
import Menu from './Menu'
import { useAuth } from '../../../context/AuthContext'
import HomeNave from './HomeNave'



const Actions = () => {
    const { isLoggedIn } = useAuth()
    return (
        <div className="actions-navbar">
            <HomeNave />
            <Menu />
            <Cart />
            <div className='action-auth'>
                {
                    isLoggedIn ? <Account /> : <Login />
                }
            </div>
            <Language />
        </div>
    )
}

export default Actions