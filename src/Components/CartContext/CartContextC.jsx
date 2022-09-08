import React, { createContext, useEffect, useState } from 'react'
export const CartContext = createContext();

export default function CartContextC({children}) {
    
   const [cart, setCart  ] = useState ([]);
   const [totalCount, setTotalCount] = useState (0);
   const [totalPrice, setTotalPrice] = useState (0);
  
    function addToCart(item, count){
    const auxCart = [...cart];
    let onCart = false;
    for (let i = 0; i < auxCart.length; i++){ 
        if (auxCart[i].id == item.id){
            auxCart[i].count = auxCart[i].count + count;
            onCart = true;
        }
     }
     if(!onCart){ auxCart.push({...item, count})  }
     setCart(auxCart);
    }  

    function delFCart(id){
     setCart(cart.filter(item=> item.id != id));
    }

    function delAll({}){
        setCart([ ]);
       }
    
       useEffect (()=> {
        setTotalCount(cart.reduce((acc, item)=> acc+item.count, 0));
        setTotalPrice(cart.reduce((acc, item)=> acc+ item.count * item.price, 0));
        if (JSON.parse(localStorage.getItem('cart'))) {
            setCart(JSON.parse(localStorage.getItem('cart')))
            setCount(cartLenght(JSON.parse(localStorage.getItem('cart'))))
          }
       }, [cart])
    
            return(
        <CartContext.Provider value = {{ cart, addToCart, totalCount, totalPrice, delFCart, delAll }}>
            {children}
        </CartContext.Provider>
    )
}