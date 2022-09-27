import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const onAddToCart = (cardObject) => {
    setCartItems((prev) => [...prev, cardObject]);
  };
  const removeFromCart = (cardObject) => {
    setCartItems((prev) => prev.filter((el) => el.id !== cardObject.id));
  };
  const removeMiniCard = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const body = document.getElementsByTagName("body")[0];
  cartOpened ? body.classList.add("lock") : body.classList.remove("lock");

  return (
    <>
      <div className="wrapper">
        <Header onClickCart={() => setCartOpened(true)} inputValue={searchValue} setInputValue={setSearchValue} />
        <Content
          onPlusCard={onAddToCart}
          onMinusCard={removeFromCart}
          cardsOnCart={cartItems}
          inputValue={searchValue}
        />
        {cartOpened && (
          <Cart
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={removeMiniCard}
          />
        )}
      </div>
    </>
  );
}

export default App;
