import React, {useState, useEffect, useContext} from 'react';
import { CartContext } from '../CartContext/CartContextC';
import { addDoc, collection, getFirestore } from "firebase/firestore";

export default function Checkout() {
  const { cart, totalPrice, delAll } = useContext (CartContext);
  const [name,setName] = useState ("");
  const [cel,setCel] = useState ("");
  const [email,setEmail] = useState ("");
  const [orderId, setOrderId] = useState ("");
  const disabled = ! ( name.length && cel.length && email.length > 0 )

  function eCompra(){
  const order = {buyer: {name, cel, email}, cart, totalPrice};
  const db = getFirestore();
  const orders = collection(db, "orders");
  addDoc(orders, order).then(({id})=>{  
  setOrderId(id);
  delAll();
  }); }
  
  // if (cart.length == 0) { return <> <link to={/}>Carrito vacio</link> </> }

  return (
    <>
     {orderId? ("Gracias por tu compra! Tu número de siguimiento es: "+ orderId 
     ) : (
    <div>
      <input type={'text'}  placeholder={"Nombre"} value={name} onChange={(e) => setName(e.target.value)} />
      <input type={'cel'}   placeholder={"Celular"} value={cel} onChange={(e) => setCel(e.target.value)} />
      <input type={'email'} placeholder={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
      <button disabled={disabled} onClick={eCompra}>Terminar compra</button>
    </div>
     )}
    </>
  )
}