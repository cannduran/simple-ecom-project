import React, { useContext } from 'react'
import { shopContext } from '../../Context/shop-context';

const ProductCard = (props) => {

    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart } = useContext(shopContext);


    return (
        <div className='product'>
            <img src={productImage} ></img>
            <div className='description'>
                <p><b>{productName}</b></p>
                <p>{price}</p>
            </div>
            <button className='addToCartBttn' onClick={() => addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default ProductCard