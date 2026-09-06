
import "./Navbar.css";
import WebBrand from "./webBrand";
import Search from "./Search";
import Actions from "./Actions";

import { useLanguage } from "../../../context/LanguageContext";

const Navbar = () => {
    const { currentLanguage } = useLanguage()
    return (
        <header className="navbar" id="navbar">
            <div className="container">
                <div className={`navbar__wrapper ${currentLanguage.name !== "English" && "navbar-arabic-wrapper"}`}>

                    {/* web brand */}
                    <WebBrand />

                    {/* Search */}
                    <Search />

                    {/* Actions */}
                    <Actions />

                </div>
            </div>
        </header>
    );
};

export default Navbar;