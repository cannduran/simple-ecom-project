import React, { useContext } from 'react'
import { shopContext } from '../../Context/shop-context';

const ProductCard = (props) => {

    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart } = useContext(shopContext);

    // Burada cart'a kaç tane eklendiğini çekiyoruz.
    const cartItemAmount = cartItems[id];

    return (
        <div className='product'>
            <img src={productImage} ></img>
            <div className='description'>
                <p><b>{productName}</b></p>
                <p>{price}</p>
            </div>
            <button className='addToCartBttn' onClick={() => addToCart(id)}>
                Add to Cart {cartItemAmount > 0 ? <>({cartItemAmount})</> : ''}
            </button>
        </div>
    );
};

export default ProductCard