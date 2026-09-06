import { createContext, useContext, useState } from "react";
import { LanguageData } from "../languageData/LanguageData";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");
    const currentLanguage = LanguageData[language]

    const handleLanguageChange = () => {
        setLanguage((prevLanguage) =>
            prevLanguage === "en" ? "ar" : "en"
        );
    };

    return (
        <LanguageContext.Provider
            value={{
                handleLanguageChange,
                currentLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    return useContext(LanguageContext);
};