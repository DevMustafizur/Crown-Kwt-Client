import { Home, ListChevronsUpDown, } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../../../context/LanguageContext";

const Menu = () => {
    const { currentLanguage } = useLanguage();
    const menuItems = [
        {
            path: '/',
            value: currentLanguage.menu.home
        },
        {
            path: '/about',
            value: currentLanguage.menu.about
        },
        {
            path: '/contact',
            value: currentLanguage.menu.contact
        },
    ]
    return (
        <div className="menu action">

            <ListChevronsUpDown />

            <div className="menu_divider">

                <div className="menu_list">
                    {menuItems.map((item) => {
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => changeActiveHandler(item.path)}
                                className={`menu__item`}
                            >
                                <span>{item.value}</span>
                            </Link>
                        );
                    })}
                </div>

            </div>

        </div>
    );
};

export default Menu;