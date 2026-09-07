import { useLanguage } from "../context/LanguageContext";

function generateNavLink() {
    const { currentLanguage } = useLanguage()
    const navGroups = [
        {
            id: "home",
            group: "home",
            path: "/",
            value: currentLanguage.menu.home
        },

        {
            id: "about",
            group: "menu",
            path: "/about",
            value: currentLanguage.menu.about
        },

        {
            id: "contact",
            group: "menu",
            path: "/contact",
            value: currentLanguage.menu.contact
        },

    ];

    return navGroups;
}

export default generateNavLink;