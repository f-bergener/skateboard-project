import React, { useState } from "react";
import "./cart.css";
import Checkout from "./Checkout";
import { removeFromCart, increment, decrement } from "./actions/index";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const subtotal = useSelector((state) => state.subtotal);
  const tax = useSelector((state) => state.tax);
  const total = useSelector((state) => state.total);
  const dispatch = useDispatch();
  const [checkout, setCheckout] = useState(false);
  const updateCheckout = () => {
    setCheckout(true);
  };

  const cartDisplay = () => {
    if (cart.length > 0) {
      return cart.map((product) => {
        return (
          <div className="cart-item">
            <h3 className="cart-item-detail">{product.name}</h3>
            <h3 className="cart-item-detail">Quantity: {product.quantity}</h3>
            <button
              className="cart-item-button"
              onClick={() => dispatch(increment(product.id))}
            >
              +
            </button>
            <button
              className="cart-item-button"
              onClick={() => dispatch(decrement(product.id))}
            >
              -
            </button>
            <button
              className="cart-item-button"
              onClick={() => dispatch(removeFromCart(product.id))}
            >
              x
            </button>
          </div>
        );
      });
    } else {
      return "";
    }
  };

  return (
    <>
      {checkout ? (
        <Checkout />
      ) : (
        <div id="cart-container">
          {cart.length > 0 ? (
            <h1 className="cart-text">Shopping Cart</h1>
          ) : (
            <h1 className="cart-text">Shopping Cart is Empty</h1>
          )}
          <div id="cart-list">{cartDisplay()}</div>
          {cart.length > 0 ? (
            <>
              <h2 className="cart-totals">Subtotal: ${subtotal.toFixed(2)}</h2>
              <h2 className="cart-totals">Tax: ${tax.toFixed(2)}</h2>
              <h2 className="cart-totals">Total: ${total.toFixed(2)}</h2>
            </>
          ) : (
            ""
          )}

          {cart.length > 0 ? (
            <button id="checkout-button" onClick={updateCheckout}>
              Checkout
            </button>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
