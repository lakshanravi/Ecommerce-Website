import React from 'react';
import Link from 'next/link';
import {AiOutlineShopping} from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className="logo">
        <Link href="/">Lakshan Stores</Link>
      </p>
      <button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping/> 
        {/* //above one shopin cart icon is imported from react-icons library.'
        //below one need to be set dynamically from the cart data.' */}
        <span className="cart-item-qty">1</span>
      </button>  
    </div>
  )
}

export default Navbar;