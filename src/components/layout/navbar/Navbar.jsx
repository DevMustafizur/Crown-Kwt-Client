import { Link, useLocation } from "react-router";
import { Home, Search, ShoppingCart } from "lucide-react";

import "./Navbar.css";
import Login from "./Login";

import { useLanguage } from "../../../context/LanguageContext";
import { useAuth } from "../../../context/AuthContext";
import UserDashboard from "./userDashboard/UserDashboard";
import DashboardControll from "./DashboardControll";

const Navbar = () => {
    const { currentLanguage, handleLanguageChange } = useLanguage()
    const location = useLocation();
    const { isLoggedIn, login, user } = useAuth()

    const loginHandel = () => {
        login({ name: "md mustafizur rahman", role: 'user' })
    }

    return (
        <header className="navbar" id="navbar">
            <div className="container">
                <div className={`navbar__wrapper ${currentLanguage.name !== "en" ? "arabic" : ""}`}>

                    {/* web brand */}
                    <Link onClick={() => { loginHandel() }} to="/" className="action-brand brand">
                        <span className="brand__name">{currentLanguage.webName}</span>
                        <span className="brand__type">{currentLanguage.webType}</span>
                    </Link>

                    {/* Search */}
                    {
                        user?.role == "admin" ? "" : <div className={`search-form ${currentLanguage == ""}`}>
                            <input type="text" className="search-input" placeholder='Search...' />
                            <Search className="action-icon action-search-icon" size={24} />
                        </div>
                    }

                    {/* Actions */}
                    <div className="actions-navbar">
                        {
                            user?.role == "admin" ? "" : <Link to="/cart" className={`action action-cart ${location.pathname == "/   cart" ? "active" : ""}`} aria-label="Shopping-cart" >
                                <ShoppingCart className='action-icon action-shopCart-icon ' size={24} />
                                <span className="cart__count cart-count">
                                    4
                                </span>
                            </Link>
                        }
                        <div className="auth-system">
                            {
                                isLoggedIn ? <DashboardControll /> : <Login />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;