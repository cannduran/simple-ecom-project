import React, { useContext } from 'react'
import { PRODUCTS } from '../../product'
import { shopContext } from '../../Context/shop-context';
import CartItem from './CartItem'
import './Cart.css'


const Cart = () => {
    const { cartItems } = useContext(shopContext);

    return (
        <div className='cart'>
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className='cartItems'>
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}

            </div>
        </div>
    )
}

export default Cart