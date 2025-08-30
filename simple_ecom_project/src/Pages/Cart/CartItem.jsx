import React from 'react'
import './Cart.css'

const CartItem = (props) => {
    const { id, productImage, price, productName } = props.data;
    return (
        <div className='cartItem'>
            <img src={productImage} />
            <div className='description'>
                <p>{productName}</p>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default CartItem