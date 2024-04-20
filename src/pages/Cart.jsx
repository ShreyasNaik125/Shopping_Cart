import React, { useContext } from 'react'
import { PRODUCTS } from '../products'
import { ShopContext } from '../context/shop-context'
import CartItems from '../components/cartItems'

const Cart = () => {
  const { addToCart,cartItem } = useContext(ShopContext)

  return (
    <div className='cart'>
      <h1>Your Cart Items</h1>
      <div className="cartItems">
        {PRODUCTS.map((product)=>{
          if (cartItem[product.id] !==0){
            return <CartItems data={product} itemNo={cartItem[product.id]}/>
          }
        })}
      </div>
    </div>
  )
}

export default Cart