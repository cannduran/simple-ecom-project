import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../product';


export const shopContext = createContext();

const getDefaultCart = () => {
    let cart = {};

    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};


export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        // setCartItems içine bir fonksiyon verdik.
        // Otomatik olarak prev ismiyle önceki state'i alıyor.
        // Sonra bu state'in [itemId] değerini alıp 1 ekliyor.
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        // setCartItems içine bir fonksiyon verdik.
        // Otomatik olarak prev ismiyle önceki state'i alıyor.
        // Sonra bu state'in  [itemId] değerini alıp 1 çıkarıyor.
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    let contextValue = { cartItems, addToCart, removeFromCart }

    console.log(cartItems);
    return (
        <shopContext.Provider value={contextValue}>{props.children}</shopContext.Provider>
    )
};
