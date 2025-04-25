import React from 'react';
import Link from 'next/link';
import {AiOutlineShopping} from 'react-icons/ai';
import {Cart} from './Index';
import { useStateContext } from '../context/StateContext';


const Navbar = () => {
  const {showCart,setShowCart,totalQuantities} = useStateContext(); //importing the context to use the functions in it.
  return (
    <div className='navbar-container'>
      <p className="logo">
        <Link href="/">Lakshan Stores</Link>
      </p>
      {/* click klm tm showcart ek true wela display krnne cart ek */}
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping/> 
        {/* //above one shopin cart icon is imported from react-icons library.'
        //below one need to be set dynamically from the cart data.' */}
        <span className="cart-item-qty">{totalQuantities}</span>
      </button> 
{/* 
      //initially cart ek pen nh image ek click klm tm cart ek display wenn hduwe.. showcart value ek initially false. e hinda yata ek false wela pennane nh .works like an "AND gate*/}
      {showCart && <Cart/>} 
      
    </div>
  )
}

export default Navbar;