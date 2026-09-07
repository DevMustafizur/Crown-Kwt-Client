import { Home, ListChevronsUpDown, } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useLanguage } from "../../../context/LanguageContext";
import { verifyMenuItems } from "../../../assets/data/Data";
import generateNavLink from "../../../utilites/navigation";
import { useState } from "react";

const Menu = () => {
    const location = useLocation();
    const { currentLanguage } = useLanguage();

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
        <div className={`action action-menu ${activeMenuGroup? "active": ""}`}>
            <ListChevronsUpDown className={`action-more-icon`} />
            <div className="menu_divider">
                <div className="menu_list">
                    {
                        menuLinks.map((item) => {
                            return (
                                <Link key={item.path} to={item.path} className={`action-menu-item ${location.pathname == item.path? "active": ""}`}>
                                    <span>{item.value}</span>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Menu;