import { Menu } from 'lucide-react'
import { Link, useLocation } from 'react-router'
import { useLanguage } from '../../../context/LanguageContext'

const MenuBar = () => {
    const { currentLanguage } = useLanguage()
    const location = useLocation()
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
        <div className="mobile-menu">
            <div className={`action action-menu ${activeMenuGroup ? "active" : ""}`}>
                <Menu className='action-icon action-menu-icon' />
                <span>{currentLanguage.menu.menu}</span>
            </div>
            <div className="mobile-menu-devider">
                <div className='mobile-menu-links'>
                    {
                        menuLinks.map((item) => {
                            return (
                                <Link key={item.path} to={item.path} className={`action action-menu-item ${location.pathname == item.path ? "active" : ""
                                    }`}>
                                    <span>{item.value}</span>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MenuBar