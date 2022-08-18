import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContextC'; 


export default function Cart() {
  const {cart, totalCount, totalPrice, delFCart} = useContext(CartContext);

  return (
    <>
    {cart.map((item) => (
    <div key={item.id}>
      {item.name + " " + item.count}{" "}
      <span onClick={() => delFCart(item.id)}> X </span>
    </div>
    ))} 
    <div>
      En el carrito tenes un total de {totalCount} productos, con un total de {totalPrice}.
    </div>
    <Link to="/checkout">Finalizar Compra</Link>
    </>
  )
}