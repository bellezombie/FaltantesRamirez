import React from 'react'
import { Link } from 'react-router-dom'
import './Item.scss'

export default function Item({item:{id, name, image, price,stock}}) {
   
  return (
    <>
      <div className="card-product">
      <Link to={'/item/'+id}> 
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{price}</p>
            <p>Stock: {stock}</p>
            <Link to={'/item/'+item.id}><button>Ver Detalles</button></Link>
            </Link>   
        </div>
    </>
  );
}
