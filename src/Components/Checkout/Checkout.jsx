import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../CartContext/CartContextC';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import './Checkout.scss';

export default function Checkout() {
  const { cart, totalPrice, delAll } = useContext(CartContext);
  const [name, setName] = useState('');
  const [cel, setCel] = useState('');
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState('');
  const disabled = !(name.length && cel.length && email.length > 0);

  function eCompra() {
    const order = { buyer: { name, cel, email }, cart, totalPrice };
    const db = getFirestore();
    const orders = collection(db, 'orders');
    addDoc(orders, order).then(({ id }) => {
      setOrderId(id);
      delAll();
    });
  }

  return (
    <>
      {cart == 0 ? (
        <div className="Ftotal">
         <span className='Fin'>No hay nada en el carrito </span>
         </div>
      ) : (
        <div className="Ftotal">
          {orderId ? (
            <span className='Fin'>Gracias por tu compra! Tu número de siguimiento es: { orderId}</span>
          ) : (
            <div className="form"> 
            <h1 className="title">Datos de Contacto</h1>
              <input className="formInput" type={'text'} placeholder={'Nombre'} value={name} onChange={(e) => setName(e.target.value)} /> <br/>
              <input className="formInput" type={'cel'} placeholder={'Celular'} value={cel} onChange={(e) => setCel(e.target.value)} /> <br/>
              <input className="formInput" type={'email'} placeholder={'Email'} value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
              <button type="submit" className="finalize" disabled={disabled} onClick={eCompra}>
                Terminar compra
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
