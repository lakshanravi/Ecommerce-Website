//in here we ar going to manage entire state of the application
//quantity wl ehem mulin tynn oni state ek meken tm define krnne 0 em kyl

import cart from '@/components/Cart';
import product from '@/sanity-backend/schemaTypes/product';
import React, { createContext, useContext, useState, useEffect } from 'react';

//to appier popup notification
import { toast } from 'react-hot-toast';


//This Context will be used to share state between components without prop drilling.
const Context = createContext();
export const StateContext = ({ children }) => {
const [showCart, setShowCart] = useState(false); //to show cart
const [cartItems, setCartItems] = useState([]); //to store cart items, array ekk
const [totalPrice, setTotalPrice] = useState(0); //to store total price of cart items
const [totalQuantities, setTotalQuantities] = useState(0); //to store total quantities of cart items
const [qty, setQty] = useState(1); //to store quantity of each product

let foundProduct; //to store the product found in the cart
let index; //to store the index of the product found in the cart



const onAdd = (product, quantity) => {
  //already cart ekt added da blnna
const checkProductInCart = cartItems.find((item) => item._id === product._id); //to check whether the product is already in the cart or not

setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity); //if the product is already in the cart, update the total price
  setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity); //if the product is already in the cart, update the total quantities
if (checkProductInCart) {
  
  const updatedCartItems = cartItems.map((cartProduct) => {
    if (cartProduct._id === product._id) return { ...cartProduct, quantity: cartProduct.quantity + quantity }; //if the product is already in the cart, update the quantity of the product
  

}
)
setCartItems(updatedCartItems); //update the cart items
toast.success(`${qty} ${product.name} added to the cart.`); //show success message

//uda if ek wenne added nm crt ekt
}else{
  
  product.quantity = quantity; //set the quantity of the product to the quantity selected by the user
  setCartItems([...cartItems, { ...product }]); //add the product to the cart
  toast.success(`${qty} ${product.name} added to the cart.`); //show success message
}

}

const toggleCartItemQuantity = (id, value) => {
  foundProduct = cartItems.find((item) => item._id === id); //to find the product in the cart
  index = cartItems.findIndex((product) => product._id === id); //to find the index of the product in the cart
  if (value === 'inc') {
    foundProduct.quantity += 1; //if the product is already in the cart, increment the quantity of the product by 1
    setCartItems();
    cartItems[index] = foundProduct; //update the cart items

  }else if (value === 'dec') {
  
}




//to increase the quantity of the product when the user clicks on the plus button
const incQty = () => {
  setQty((prevQty) => prevQty + 1); //increment quantity by 1
}

const decQty = () => {
  setQty((prevQty) => {
    if (prevQty - 1 < 1) return 1; //if quantity is less than 1, set it to 1
    return prevQty - 1; //decrement quantity by 1
  }); //increment quantity by 1
}

return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        setShowCart,
        incQty,
        decQty,
        onAdd
        
      }}
    >
      {children}
    </Context.Provider>
  );

}

//to use the context in other components
export const useStateContext = () => useContext(Context);