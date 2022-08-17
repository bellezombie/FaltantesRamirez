import React, { useContext } from 'react'
import {BsCartCheck} from 'react-icons/bs';
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContextC'; 

export default function CartWidget() {
  const { cart, totalCount } = useContext(CartContext);

  return (
    <div> 
    <Link to={'/cart'} > 
       <BsCartCheck size={28}/> {cart}
    </Link>
  </div>
  )
}
