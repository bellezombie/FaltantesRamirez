import React, { createContext, useEffect, useState } from 'react'
export const CartContext = createContext();

export default function CartContextC({children}) {
    
   const [cart, setCart  ] = useState ([]);
   const [totalCount, setTotalCount] = useState (0);
   const [totalPrice, setTotalPrice] = useState (0);
  
    function addToCart(item, totalCount){
    const auxCart = [...cart];
    let onCart = false;
    for (let i = 0; i < auxCart.length; i++){ 
        if (auxCart[i].id == item.id){
            auxCart[i].totalCount = auxCart[i].totalCount + totalCount;
            onCart = true;
        }
     }
     if(!onCart){ auxCart.push({...item, totalCount})  }
    }  
    
   useEffect (()=> {
    setTotalCount(cart.reduce((acc, item)=> acc+item.count, 0));
    setTotalPrice(cart.reduce((acc, item)=> acc+item.count, 0));
   }, [cart])

    return(
        <CartContext.Provider value = {{ cart, addToCart, totalCount, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}