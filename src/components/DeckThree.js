import React from "react";
import "./deck.css";
import { addToCart, removeFromCart } from "./actions/index";
import { useSelector, useDispatch } from "react-redux";

const DeckThree = ({ data }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const checkArray = () => {
    let checkArray = [];
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === data.id) {
        checkArray.push(1);
      }
    }
    if (checkArray.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const buttonDisplay = () => {
    if (cart.length === 0) {
      return (
        <button
          className="cart-button"
          onClick={() => dispatch(addToCart(data.id))}
        >
          Add to Cart
        </button>
      );
    } else if (cart.length > 0 && checkArray() === false) {
      return (
        <button
          className="cart-button"
          onClick={() => dispatch(addToCart(data.id))}
        >
          Add to Cart
        </button>
      );
    } else if (cart.length > 0 && checkArray() === true) {
      return (
        <button
          className="cart-button"
          onClick={() => dispatch(removeFromCart(data.id))}
        >
          Remove from Cart
        </button>
      );
    }
  };

  return (
    <div className="product-container">
      <img
        className="product-image"
        src="skateboard_deck.jpg"
        alt="Blank Skateboard"
      />
      <div className="description-container">
        <h1 className="product-header">{data.size} Deck</h1>
        <p className="description">
          High quality deck made from the highest quality maple you can find.
          Our boards are shaped and compressed using our very own duroboard
          construction, giving you the best {data.size} deck on the market
        </p>
        <p className="price">Price: ${data.price}</p>
        <div className="deck-form">{buttonDisplay()}</div>
      </div>
    </div>
  );
};

export default DeckThree;
