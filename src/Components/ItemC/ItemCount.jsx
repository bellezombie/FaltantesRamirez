import React, { useContext, useState } from 'react'
import { CartContext } from '../CartContext/CartContextC'; 
import { Link } from 'react-router-dom';
import './itemCount.scss'

export default function ItemCount({product}) {

   const [count, setCount ] = useState(0);
   const [removeB, setRemoveB] = useState(false);
   const { addToCart } = useContext(CartContext);

    function resT  ()  {   if (count>=2)            {  setCount(count-1); } }
    function sumA  ()  {   if (count<product.stock) {  setCount(count+1); } }
    function onAdd ()  {   addToCart(product, count);  setRemoveB(true);    }

  return (
    <div className="count">
    <div>
      <button onClick={resT} > - </button> 
      <p>{count}</p> 
      <button onClick={sumA} > + </button>
    </div>
    <div>
    {removeB? 
       (<>Producto agregado! <Link to="/" ><button>Seguir comprando</button></Link> </>
       ) : (
             <button onClick={onAdd} > Agregar al carrito </button> ) }
    </div>
   </div>
  )
}