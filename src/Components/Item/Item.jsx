import React from 'react'
import { Link } from 'react-router-dom'
import './Item.scss'

export default function Item({item:{id, name, image, price}}) {
   
  return (
    <>
    <div className='bT'>
      <div className="card-product">
      <Link className="link" to={'/item/'+id}> 
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <p>Precio: ${price}</p>
           <button>Ver Detalles</button>
      </Link>   
        </div>
        </div>
    </>
  );
}
