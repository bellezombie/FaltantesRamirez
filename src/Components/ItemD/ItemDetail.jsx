import { useState, useCartContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemC/ItemCount';
import { CartContext } from '../CartContext/CartContextC';
import './ItemDetail.scss';

export default function ItemDetail({ product }) {
  const { totalCount } = useContext(CartContext);
  return (
    <>
      <div className="card-product-detail ">
        <div className="img-detail">
          <img className="img-detail" src={product.image} alt={product.name} />
        </div>
        <div className="info-detail">
          <h3 className="">{product.name}</h3>
          <p className="card-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit vero debitis voluptas facere fuga deserunt obcaecati! Veniam culpa illum mollitia est ullam similique inventore accusamus
            aperiam. Quaerat mollitia maiores animi!
          </p>
          <p>Precio: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <ItemCount product={product} />
          <Link to={'/cart'}>
            <button disabled={totalCount == 0} className="btn">
              Finalizar compra
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
