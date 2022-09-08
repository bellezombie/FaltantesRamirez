import React, { useContext, useState } from 'react'
import { CartContext } from '../CartContext/CartContextC'; 
import { Link } from 'react-router-dom';
import './itemCount.scss'

export default function ItemCount({product}) {

   const [count, setCount ] = useState(1);
   const [removeB, setRemoveB] = useState(false);
   const { addToCart } = useContext(CartContext);

    function resT  ()  {   if (count>=2)            {  setCount(count-1); } }
    function sumA  ()  {   if (count<product.stock) {  setCount(count+1); } }
    function onAdd ()  {   addToCart(product, count);  setRemoveB(true);    }

  return (
    <div className="count">
    <div className="grid">
      <button className="B" onClick={resT} > - </button> 
      <p>{count}</p> 
      <button className="B" onClick={sumA} > + </button>
    </div>
    <div className="grid2">
    {removeB? 
       (<>Producto agregado!<br/> <Link to="/" ><button className="B">Seguir comprando</button></Link> </>
       ) : (
             <button className="B" onClick={onAdd} > Agregar al carrito </button> ) }
    </div>
   </div>
  )
}