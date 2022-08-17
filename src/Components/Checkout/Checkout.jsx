import React, {useState, useEffect} from 'react'

export default function Checkout() {
  const [name,setName] = useState ('');
  const [cel,setCel] = useState ('');
  const [email,setEmail] = useState ('');

  function eCompra(){
    
  const order = {buyer: {} /*item:[...cart]*/, totalCount}
  /*{ buyer: { name, phone, email }, items: [{id, title, price}], total  }*/
 console.log(order)
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
