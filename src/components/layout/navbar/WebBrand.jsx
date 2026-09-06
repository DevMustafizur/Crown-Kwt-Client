import React from 'react'
import { Link } from "react-router";
import { useLanguage } from '../../../context/LanguageContext'

const WebBrand = () => {
    const {currentLanguage } = useLanguage()

    return (
        <div className="web_brand">
            <Link to="/" className="brand">
                <span className="brand__name">{currentLanguage.webName}</span>
                <span className="brand__type">{currentLanguage.webType}</span>
            </Link>
        </div>
    )
}

export default WebBrand