import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContextC';
import './Cart.scss';

export default function Cart() {
  const { cart, totalCount, totalPrice, delFCart } = useContext(CartContext);

  return (
    <>
      <div className="cartTotal">
        {cart == 0 ? (
          <span className="N">No hay nada en el carrito </span>
        ) : (
          cart.map((item) => (
            <div className="caart" key={item.id}>
              <span className="X" onClick={() => delFCart(item.id)}>
                {' '}
                X{' '}
              </span>
              <br />
              {'Item: ' + item.name + ', ' + 'cantidad: ' + item.count} <br />
            </div>
          ))
        )}{' '}
        <div className="Cart">
          <span>
            {' '}
            En el carrito tenes un total de {totalCount} productos, con un total de {totalPrice}.
          </span>
          <br />
        </div>{' '}
        <button>
          {' '}
          <Link to="/checkout">Finalizar Compra</Link>{' '}
        </button>
      </div>
    </>
  );
}
