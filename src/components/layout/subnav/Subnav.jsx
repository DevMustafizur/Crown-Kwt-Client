import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router'
import "./Subnav.css"
import { useLanguage } from '../../../context/LanguageContext'

const Subnav = () => {
    const { currentLanguage, handleLanguageChange, isLanguageDropdownOpen, toggleLanguageDropdown, } = useLanguage()

    const langaugeList = [
        {
            ln: "English",
            code: "en"
        },
        {
            ln: "Arabic",
            code: "ar"
        }
    ]
    return (
        <section id="sub-nav">
            <div className='container'>
                <div className={`langauge-wrapper ${currentLanguage.name !== "en" ? "arbic" : ""}`}>
                    <div className={`language-selector`} onClick={toggleLanguageDropdown}>
                        <p>{currentLanguage.fullname}</p>
                        <Link className={`action action-language`}><ChevronDown size={16} className='action-icon action-down-icon' /></Link>

                        <div className={`language-dropdown ${isLanguageDropdownOpen ? "active" : ""}`}>
                            {
                                langaugeList.map((lan, index) => {
                                    return (
                                        <p onClick={() => { handleLanguageChange(lan.code) }} key={index}>{lan.ln}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subnav