import React, { useState, useCartContext } from 'react'
import {Link} from 'react-router-dom';
import ItemCount from '../ItemC/ItemCount';
import './ItemDetail.scss'


export default function ItemDetail({product}) {
  
    return (
    <>
      <div className="card-product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>Stock: {product.stock}</p>
            <ItemCount product={product}/>
            <Link to={'/cart'}><button>Finalizar compra</button></Link>   
        </div>
    </>
  );
}
  


/*
*******************************************************
/* const stocks = stock
  const initial = 1
  const [add, setAdd] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCartContext()
  

  const itemQuantity = (count) => {
      setQuantity(count)
  }

  const addToCart = () => {
      addItem(detail, quantity)
      setAdd(true)
  }
 
  return (
    <>
       <div className="card-product-detail">
            <div className="img-detail">
                <img src={image} alt={name}/>
            </div>
            <div className="info-detail">
                <h1>{name}</h1>
                <p className="card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit vero debitis voluptas facere fuga deserunt obcaecati! Veniam culpa illum mollitia est ullam similique inventore accusamus aperiam. Quaerat mollitia maiores animi!</p>
                <p className="card-price">{price}</p>
                <ItemCount product={product}/*  stocks={stocks}
                    initial={initial}
                    onAdd={itemQuantity} 
                />
                <button className="btn"  onClick={addToCart} >Agregar al Carrito</button>
                {add ? <Link to= {'/cart'}><button className="btn">Comprar Ahora</button></Link> : null}
            </div>
        </div>
  </>
  


*/