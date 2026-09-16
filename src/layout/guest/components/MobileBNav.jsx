import { Link } from "react-router"
import "./mobileBNav.css"
import { Cake, Home, LucideBookUp, Settings, User } from "lucide-react"
import { useAuth } from "../../../context/AuthContext"

const MobileBNav = () => {
    const { isLoggedIn, user } = useAuth()
    return (
        <nav id="mobile-nav">
            <div className="container">
                <div className="mobile-nav-wrapper">
                    <div className="nav-item">
                        <Link to="/" className={`action action-home ${location.pathname == "/" ? "active" : ""}`}>
                            <Home className="action-icon action-home-icon" size={22} />
                            <span>Home</span>
                        </Link>
                    </div>

                    <div className="nav-item">
                        <Link to="/" className={`action action-more ${location.pathname == "/" ? "active" : ""}`}>
                            <LucideBookUp className="action-icon action-lookUp-icon" size={22} />
                            <span>Order Tracking</span>
                        </Link>
                    </div>

                    <div className="nav-item">
                        <Link to="/" className={`action action-home ${location.pathname == "/" ? "active" : ""}`}>
                            <Cake className="action-icon action-categories-icon" size={22} />
                            <span>Categories</span>
                        </Link>
                    </div>

                    <div className="nav-item">
                        <Link to={isLoggedIn ? "/user" : "/auth/login"} className={`action action-auth ${location.pathname == "/" ? "active" : ""}`}>
                            <User className="action-icon action-user-icon" size={22}/>
                            {
                                isLoggedIn ? <span>{user?.name}</span> : <span>Login</span>
                            }
                        </Link>
                    </div>

                    <div className="nav-item">
                        <Link to="/" className={`action action-home ${location.pathname == "/" ? "active" : ""}`}>
                            <Settings className="action-icon action-setting-icon" size={22} />
                            <span>Settings</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default MobileBNav