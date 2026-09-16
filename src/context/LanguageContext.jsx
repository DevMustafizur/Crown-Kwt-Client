import { createContext, useContext, useState } from "react";
import { LanguageData } from "../languageData/LanguageData";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");
    const currentLanguage = LanguageData[language]
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

    const handleLanguageChange = (languageCode) => {
        if (languageCode == "en") {
            setLanguage("en")
            return
        }
        setLanguage("ar")
    };

    function toggleLanguageDropdown() {
        setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
    }

    return (
        <LanguageContext.Provider
            value={{
                handleLanguageChange,
                currentLanguage,

                isLanguageDropdownOpen,
                toggleLanguageDropdown,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    return useContext(LanguageContext);
};