import React from 'react'
import { Link } from 'react-router'
import { ListChevronsDownUp, ShoppingCart, User } from 'lucide-react';
import { useCart } from '../../../context/AddToCartContext';
import { useLocation } from 'react-router';


const Cart = () => {
    const { cart } = useCart()

    const location = useLocation()
    return (
        <Link to="/cart" className={`action action-cart ${location.pathname == "/cart"? "active": ""}`} aria-label="Shopping-cart" >
            <ShoppingCart className='action_icon action-shopCart-icon ' />
            <span className="cart__count cart-count">
                {cart.length}
            </span>
        </Link>
    )
}

export default Cart