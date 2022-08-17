import React, { useContext } from 'react'
import {BsCartCheck} from 'react-icons/bs';
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContextC'; 

export default function CartWidget() {
  const { totalCount } = useContext(CartContext);

  return (
    <div> 
    <Link to={'/cart'} > 
       <BsCartCheck size={28}/> {totalCount}
    </Link>
  </div>
  )
}
