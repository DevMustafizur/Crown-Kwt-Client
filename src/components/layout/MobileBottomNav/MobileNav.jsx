import { Home, LockOpenIcon, Menu, Settings, ShoppingCart, WalletMinimal } from "lucide-react";
import { Link, useLocation } from "react-router";

import "./MobileNav.css";
import { useAuth } from "../../../context/AuthContext";
import { useLanguage } from "../../../context/LanguageContext";

import Account from "./Account";
import Login from "./Login";
import { useState } from "react";
import DashboardController from "./DashboardController";



const MobileNav = () => {

  const { isLoggedIn } = useAuth();
  const { currentLanguage } = useLanguage()
  const location = useLocation()

  const [isActive, setIsActive] = useState(false)
  function activeHandler() {
    setIsActive(!isActive)
  }

  const menuLinks = [
    {
      id: 'about',
      path: '/about',
      value: currentLanguage.menu.about
    },
    {
      id: 'contact',
      path: '/contact',
      value: currentLanguage.menu.contact
    }
  ]

  const activeMenuGroup = menuLinks.find(item => item.path == location.pathname)

  return (
    <section id="mobile_nav">
      <div className="container">
        <div className="mobile_wrapper">

          <Link to="/" className={`action action-home ${location.pathname == "/" ? "active" : ""}`}>
            <Home className="action-icon action-home-icon" size={20} />
            <span>{currentLanguage.menu.home}</span>
          </Link>

          <Link to="/" className={`action action-home ${location.pathname == "/" ? "active" : ""}`}>
            <LockOpenIcon className="action-icon action-home-icon" size={20}/>
            <span>{'Lookup'}</span>
          </Link>

          <Link to="/" className={`action action-home ${location.pathname == "/" ? "active" : ""}`}>
            <Home className="action-icon action-home-icon" size={20}/>
            <span>{"Categories"}</span>
          </Link>

          {
            isLoggedIn ? <DashboardController /> : <Login />
          }


          <Link className={`action action-cart ${location.pathname == "/setting" ? "active" : ""}`}>
            <Settings className="action-icon action-setting-icon" size={20}/>
            <span>{'Settings'}</span>
          </Link>
        </div>

      </div>

    </section>
  );
};

export default MobileNav;