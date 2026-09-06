import Cart from './Cart'
import Account from './Account'
import Login from './Login'
import Language from './Language'
import Menu from './Menu'

const Actions = () => {
    return (
        <div className="navbar_actions">
            {/* menu */}
            <Menu />
            
            {/* Cart */}
            <Cart />

            {/* Account */}
            <Account />


            {/* Login */}
            <Login />

            {/* Language */}
            <Language />

        </div>
    )
}

export default Actions