import React from 'react'
import Item from '../Item/Item'
import './ItemList.scss'

export default function ItemList({productos}) {
  return (
    <>
    <div className="product-list">
    { productos.map((productos) => (
        <Item key={productos.id} item={productos} /*onAdd={onAdd}*/ />
        ))
     }
    </div>
    </>
  )
}
