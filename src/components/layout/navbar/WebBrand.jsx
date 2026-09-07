import React from 'react'
import { Link } from "react-router";
import { useLanguage } from '../../../context/LanguageContext'

const WebBrand = () => {
    const { currentLanguage } = useLanguage()

    return (
        <Link to="/" className="action-brand brand">
            <span className="brand__name">{currentLanguage.webName}</span>
            <span className="brand__type">{currentLanguage.webType}</span>
        </Link>
    )
}

export default WebBrand