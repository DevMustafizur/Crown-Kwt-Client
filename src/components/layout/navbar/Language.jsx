import React from 'react'
import { useLanguage } from '../../../context/LanguageContext'

const Language = () => {
        const { handleLanguageChange, currentLanguage } = useLanguage()
    return (
        <span onClick={handleLanguageChange} className="language">
            {currentLanguage.name === "English" ? "العربية" : "English"}
        </span>
    )
}

export default Language