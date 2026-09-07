import React from 'react'
import { useLanguage } from '../../../context/LanguageContext'

const Search = () => {
    const { currentLanguage } = useLanguage()

    return (
        <div className='search-form'>
            <input type="text" className="search-input" placeholder={currentLanguage.searchPlaceholder} />
            <button type="submit" className="action-search-btn search__button">{currentLanguage.search}
            </button>
        </div>
    )
}

export default Search