import { useContext } from 'react'
import React from 'react'
import { ShopContext } from '../context/shop-context'

const Product = (props) => {
    const {id,productName,price,productImage} = props.data
    const { addToCart,cartItem } = useContext(ShopContext)

    const cartItemAmount = cartItem[id]
  return (
    <div className='product' id={id}>
        <img src={productImage} alt="" />
        <p>{productName}</p>
        <p>{price} ₹</p>
        <button onClick={()=>addToCart(id)}>
          Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
    </div>
  )
}

export default Product