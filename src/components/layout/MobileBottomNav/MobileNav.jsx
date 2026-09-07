import { Home } from "lucide-react";
import { Link } from "react-router";
import "./MobileNav.css";

import Cart from "./Cart";
import { useAuth } from "../../../context/AuthContext";
import MenuBar from "./MenuBar";
import Account from "./Account";
import Login from "./Login";
import HomeNav from "./HomeNav";


const MobileNav = () => {

  const { isLoggedIn } = useAuth();

  return (
    <section id="mobile_nav">
      <div className="container">
        <div className="mobile_wrapper">
          <HomeNav />
          <MenuBar />
          {
            isLoggedIn ? <Account /> : <Login />
          }
          <Cart />
        </div>

      </div>

    </section>
  );
};

export default MobileNav;