import React, { useState } from "react";
import "./App.css";
import productList from "./components/data/products";
import Cart from "./components/Cart";
import DeckOne from "./components/DeckOne";
import DeckTwo from "./components/DeckTwo";
import DeckThree from "./components/DeckThree";
import DeckFour from "./components/DeckFour";
import DeckFive from "./components/DeckFive";
import DeckSix from "./components/DeckSix";

function App() {
  const [homepage, setHomepage] = useState(true);
  const updateHomepage = () => {
    setHomepage(true);
    setCart(false);
    setDeckOne(false);
    setDeckTwo(false);
    setDeckThree(false);
    setDeckFour(false);
    setDeckFive(false);
    setDeckSix(false);
  };
  const [cart, setCart] = useState(false);
  const updateCart = () => {
    setCart(true);
    setHomepage(false);
    setDeckOne(false);
    setDeckTwo(false);
    setDeckThree(false);
    setDeckFour(false);
    setDeckFive(false);
    setDeckSix(false);
  };

  const [deckOne, setDeckOne] = useState(false);
  const updateDeckOne = () => {
    setDeckOne(true);
    setDeckTwo(false);
    setDeckThree(false);
    setDeckFour(false);
    setDeckFive(false);
    setDeckSix(false);
    setCart(false);
    setHomepage(false);
  };

  const [deckTwo, setDeckTwo] = useState(false);
  const updateDeckTwo = () => {
    setDeckOne(false);
    setDeckTwo(true);
    setDeckThree(false);
    setDeckFour(false);
    setDeckFive(false);
    setDeckSix(false);
    setCart(false);
    setHomepage(false);
  };

  const [deckThree, setDeckThree] = useState(false);
  const updateDeckThree = () => {
    setDeckOne(false);
    setDeckTwo(false);
    setDeckThree(true);
    setDeckFour(false);
    setDeckFive(false);
    setDeckSix(false);
    setCart(false);
    setHomepage(false);
  };

  const [deckFour, setDeckFour] = useState(false);
  const updateDeckFour = () => {
    setDeckOne(false);
    setDeckTwo(false);
    setDeckThree(false);
    setDeckFour(true);
    setDeckFive(false);
    setDeckSix(false);
    setCart(false);
    setHomepage(false);
  };

  const [deckFive, setDeckFive] = useState(false);
  const updateDeckFive = () => {
    setDeckOne(false);
    setDeckTwo(false);
    setDeckThree(false);
    setDeckFour(false);
    setDeckFive(true);
    setDeckSix(false);
    setCart(false);
    setHomepage(false);
  };

  const [deckSix, setDeckSix] = useState(false);
  const updateDeckSix = () => {
    setDeckOne(false);
    setDeckTwo(false);
    setDeckThree(false);
    setDeckFour(false);
    setDeckFive(false);
    setDeckSix(true);
    setCart(false);
    setHomepage(false);
  };

  const display = () => {
    if (homepage === true) {
      return (
        <div id="homepage-container">
          <img
            id="homepage-image"
            src="tommy-sandoval-two.jpg"
            alt="Skateboarding Photo"
          />
          <h2 id="description">
            High quality seven-ply maple with reinforced construction for extra
            pop and stability
          </h2>
          <h1 id="deck-header">Decks</h1>
          <div id="deck-container">
            <div id="row-1">
              <div className="deck" onClick={updateDeckOne}>
                <img
                  className="deck-image"
                  src="deck.png"
                  alt="Blank Skateboard"
                />
                <label className="deck-label">{productList[0].size}</label>
                <label className="price">${productList[0].price}</label>
              </div>
              <div className="deck" onClick={updateDeckTwo}>
                <img
                  className="deck-image"
                  src="deck.png"
                  alt="Blank Skateboard"
                />
                <label className="deck-label">{productList[1].size}</label>
                <label className="price">${productList[1].price}</label>
              </div>
              <div className="deck" onClick={updateDeckThree}>
                <img
                  className="deck-image"
                  src="deck.png"
                  alt="Blank Skateboard"
                />
                <label className="deck-label">{productList[2].size}</label>
                <label className="price">${productList[2].price}</label>
              </div>
            </div>
            <div id="row-2">
              <div className="deck" onClick={updateDeckFour}>
                <img
                  className="deck-image"
                  src="deck.png"
                  alt="Blank Skateboard"
                />
                <label className="deck-label">{productList[3].size}</label>
                <label className="price">${productList[3].price}</label>
              </div>
              <div className="deck" onClick={updateDeckFive}>
                <img
                  className="deck-image"
                  src="deck.png"
                  alt="Blank Skateboard"
                />
                <label className="deck-label">{productList[4].size}</label>
                <label className="price">${productList[4].price}</label>
              </div>
              <div className="deck" onClick={updateDeckSix}>
                <img
                  className="deck-image"
                  src="deck.png"
                  alt="Blank Skateboard"
                />
                <label className="deck-label">{productList[5].size}</label>
                <label className="price">${productList[5].price}</label>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (cart === true) {
      return <Cart />;
    } else if (deckOne === true) {
      return <DeckOne data={productList[0]} />;
    } else if (deckTwo === true) {
      return <DeckTwo data={productList[1]} />;
    } else if (deckThree === true) {
      return <DeckThree data={productList[2]} />;
    } else if (deckFour === true) {
      return <DeckFour data={productList[3]} />;
    } else if (deckFive === true) {
      return <DeckFive data={productList[4]} />;
    } else if (deckSix === true) {
      return <DeckSix data={productList[5]} />;
    }
  };
  return (
    <>
      <header>
        <h1 className="top-header" onClick={updateHomepage}>
          Freddie's Skateboards
        </h1>
        <h1 className="top-header" onClick={updateCart}>
          Cart
        </h1>
      </header>
      <body>{display()}</body>
    </>
  );
}

export default App;
