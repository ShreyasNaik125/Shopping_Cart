import React from 'react'

const CartItems = (props) => {
    const {id,productName,price,productImage} = props.data

  return (
    <div className='CartItem'>
        <img src={productImage} alt="" />
        <div className="Description">
            <p><b>{productName}</b></p>
        </div>
        <p>No. of Items: {props.itemNo}</p>
        <p>{price * props.itemNo}₹</p>
    </div>
  )
}

export default CartItems