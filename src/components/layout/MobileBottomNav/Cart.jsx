import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { Link, useLocation } from 'react-router'
import { useLanguage } from '../../../context/LanguageContext'

const Cart = () => {
    const location = useLocation()
    const { currentLanguage } = useLanguage()

    return (
        <Link to="/cart" className={`action action-cart ${location.pathname == "/cart" ? "active" : ""}`}>
            <ShoppingCart className='action-icon action-cart-icon' />
            <span>{currentLanguage.cart}</span>
        </Link>
    )
}

export default Cart