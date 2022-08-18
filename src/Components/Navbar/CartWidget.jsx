import React, { useContext } from 'react'
import {BsCartCheck} from 'react-icons/bs';
import { CartContext } from '../CartContext/CartContextC'; 
import { Link } from 'react-router-dom';
import './cartWidget.scss';

export default function CartWidget() {
  const { totalCount } = useContext(CartContext);
  
  return (
    <Link to= {'/cart'} className='cart-widget'>
       <div className="cart-icon">
       <BsCartCheck size={20}/><span>{totalCount}</span>
       </div>
    </Link>
  )
}