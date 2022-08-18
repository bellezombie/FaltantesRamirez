import React, {useState, useEffect, useContext} from 'react'
import { CartContext } from '../CartContext/CartContextC';

export default function Checkout() {
  const { cart, totalPrice } = useContext (CartContext);
  const [name,setName] = useState ("");
  const [cel,setCel] = useState ("");
  const [email,setEmail] = useState ("");

  function eCompra(){
  const order = {buyer: {name, cel, email}, cart, totalPrice}
  }

  return (
    <div>
      <input type={'text'}  placeholder={"Nombre"} value={name} onChange={(e) => setName(e.target.value)} />
      <input type={'cel'}   placeholder={"Celular"} value={cel} onChange={(e) => setCel(e.target.value)} />
      <input type={'email'} placeholder={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={eCompra}>Terminar compra</button>
    </div>
  )
}
