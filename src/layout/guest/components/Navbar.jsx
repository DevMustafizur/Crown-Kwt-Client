import { Link } from "react-router"
import "./navbar.css"
import { Search, ShoppingCart, User } from "lucide-react"
import { useAuth } from "../../../context/AuthContext"

const Navbar = () => {
    const { login, isLoggedIn, user } = useAuth()
    const testLogin = () => {
        login({ name: "mustafizur" })
    }
    return (
        <nav id="navbar">
            <div className="container">
                <div className="nav-wrapper">

                    {/* nav-main */}
                    <div className="nav-main">
                        <Link to={'/'} className="action logo-action">
                            <div className="web-brand">
                                <div onClick={() => { testLogin() }} className='web_brand-title'>Crown Kwt</div>
                            </div>
                        </Link>
                        <div className='search-form'>
                            <input type="text" className="search-input" placeholder='Search...' />
                            <Search className="action-icon action-search-icon" size={14} />
                        </div>
                    </div>

                    {/* nav-actions */}
                    <div className="nav-actions">
                        {
                            window.innerWidth > 992 ? <div className="auth">
                                {
                                    isLoggedIn ? (
                                        <Link to={'/'} className='action action-auth'>
                                            <span>{user.name}</span>
                                            <User className='action-icon action-user-icon' size={22} />
                                        </Link>
                                    ) : (
                                        <Link to={'/auth/login'} className='action action-login'>
                                            <User className='action-icon action-user-icon' size={22} />
                                        </Link>
                                    )
                                }
                            </div> : ""
                        }
                        <div className="addToCart">
                            <Link to="/cart" className={`action action-cart ${location.pathname == "/   cart" ? "active" : ""}`} aria-label="Shopping-cart" >
                                <ShoppingCart className='action-icon action-shopCart-icon ' size={22} />
                                <span className="cart-count">
                                    2
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar