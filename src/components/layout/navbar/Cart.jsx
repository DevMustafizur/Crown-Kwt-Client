import React from 'react'
import { Link } from 'react-router'
import { ListChevronsDownUp, ShoppingCart, User } from 'lucide-react';
import { useCart } from '../../../context/AddToCartContext';


const Cart = () => {
    const { cart } = useCart()
    return (
        <Link
            to="/cart"
            className="action action--cart"
            aria-label="Shopping-cart"
        >
            <ShoppingCart className='icon' />
            <span className="cart__count">
                {cart.length}
            </span>
        </Link>
    )
}

export default Cart