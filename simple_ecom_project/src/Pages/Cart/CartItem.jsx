import React, { useContext } from 'react'
import './Cart.css'
import { shopContext } from '../../Context/shop-context';

const CartItem = (props) => {

    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(shopContext);
    const { id, productImage, price, productName } = props.data;
    return (
        <div className='cartItem'>
            <img src={productImage} />
            <div className='description'>
                <p>{productName}</p>
                <p>${price}</p>
                <div className='countHandler'>
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={
                        (e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>


            </div>
        </div>
    )
}

export default CartItem