import React, { useState } from 'react'
import { createContext } from 'react'
import { PRODUCTS } from '../products'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for(let i = 1;i<PRODUCTS.length + 1;i++){
        cart[i] =0;
    }
    return cart
}

export const ShopContextProvider = (props) => {
    const [cartItem,setCartItems] = useState(getDefaultCart())

    const addToCart = (itemid) => {
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
    }

    const removeFromCart = (itemid) => {
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }

    const contextValue = {
        cartItem,addToCart,removeFromCart
    }

    console.log(cartItem)
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
