import React from 'react'
import { PRODUCTS } from '../products'
import Product from './product'

const Shop = () => {
  return (
    <div className='products'>{PRODUCTS.map((product) => { return <Product data={product}/> })}</div>
  )
}

export default Shop