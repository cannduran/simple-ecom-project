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

    // Burada daha önce Java'da gördüğüm bir loop yöntemi gördüm. 
    const getTotalCartAmount = () => {
        let totalAmount = 0;

        //Key'leri tek tek geziyor.
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }
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
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    }

    let contextValue = {
        cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount
    }

    console.log(cartItems);
    return (
        <shopContext.Provider value={contextValue}>{props.children}</shopContext.Provider>
    )
};
