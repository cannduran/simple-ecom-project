import React, { useContext } from 'react'
import { PRODUCTS } from '../../product'
import { shopContext } from '../../Context/shop-context';
import CartItem from './CartItem'
import './Cart.css'


const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(shopContext);

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
            <div className='checkout'>
                <p>Subtotal: ${getTotalCartAmount()}</p>
                <button>Continue Shopping</button>
                <button> Checkout </button>

            </div>
        </div>
    )
};

export default Cart