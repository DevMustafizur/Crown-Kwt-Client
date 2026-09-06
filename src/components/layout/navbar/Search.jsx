import React from 'react'
import { useLanguage } from '../../../context/LanguageContext'

const Search = () => {
    const { handleLanguageChange, currentLanguage } = useLanguage()

    return (
        <div className="search">
            <form className="search__form">
                <input
                    type="text"
                    className="search__input"
                    placeholder={currentLanguage.searchPlaceholder}
                />

                <button type="submit" className="search__button">
                    {
                        currentLanguage.search
                    }
                </button>
            </form>
        </div>
    )
}

export default Search