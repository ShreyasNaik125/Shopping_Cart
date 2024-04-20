import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo"><h1>Book Store</h1></div>
        <div className="Links">
            <Link to={'/'}>Shop</Link>
            <Link to={'/cart'}><ShoppingCart size={27}/></Link>
        </div>
    </div>
  )
}

export default Navbar