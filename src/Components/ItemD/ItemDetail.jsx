import React, { useState, useCartContext } from 'react'
import {Link} from 'react-router-dom';
import ItemCount from '../ItemC/ItemCount';
import './ItemDetail.scss'


export default function ItemDetail({product}) {
  
    return (
    <>
      <div className="card-product-detail ">
        <div className="img-detail">
         <img className="img-detail" src={product.image} alt={product.name} />
        </div>     
        <div className="info-detail">
            <h3 className=''>{product.name}</h3>
            <p className="card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit vero debitis voluptas facere fuga deserunt obcaecati! Veniam culpa illum mollitia est ullam similique inventore accusamus aperiam. Quaerat mollitia maiores animi!</p>
            <p>{product.price}</p>
            <p>Stock: {product.stock}</p>
            </div>
            <ItemCount product={product}/>
            <Link to={'/cart'}><button className="btn">Finalizar compra</button></Link>   
        </div>
    </>
  );
}