import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import AppContext from "./components/context";
import "./app.scss";
import Favorites from "./pages/Favorites";

const cartState = JSON.parse(localStorage.getItem("cardsOncart"));
const favoriteState = JSON.parse(localStorage.getItem("favoriteCards"));

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState(cartState ?? []);
  const [searchValue, setSearchValue] = useState("");
  const [favoriteCards, setFavoriteCards] = useState(favoriteState ?? []);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const add = (cardObject, flag) => {
    if (flag) {
      setFavoriteCards((prev) => [...prev, cardObject]);
    } else {
      setCartItems((prev) => [...prev, cardObject]);
    }
  };

  const remove = (id, flag) => {
    if (flag) {
      setFavoriteCards((prev) => prev.filter((el) => el.id !== id));
    } else {
      setCartItems((prev) => prev.filter((el) => el.id !== id));
    }
  };

  const body = document.getElementsByTagName("body")[0];
  cartOpened ? body.classList.add("lock") : body.classList.remove("lock");

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/633344335c146d63caab5e46", {
      headers: {
        "X-Master-Key":
          "$2b$10$8Ilv3gooDpwrnrY/xNxp3OswUiDEVOGIzsulvt3IqNH5F46SWnzfq",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setCards(json.record);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <AppContext.Provider value={{ cartItems, setCartItems }}>
        <div className="wrapper">
          <Route path="/" exact>
            <Header
              onClickCart={() => setCartOpened(true)}
              inputValue={searchValue}
              setInputValue={setSearchValue}
              cartItems={cartItems}
            />
            <Content
              addTo={add}
              removeFrom={remove}
              cardsOnCart={cartItems}
              inputValue={searchValue}
              favoriteCards={favoriteCards}
              cards={cards}
              isLoading={isLoading}
            />
          </Route>
          <Route path="/favorites">
            <Favorites
              onClickCart={() => setCartOpened(true)}
              favoriteCards={favoriteCards}
              cardsOnCart={cartItems}
              addTo={add}
              removeFrom={remove}
              isLoading={isLoading}
            />
          </Route>
          {cartOpened && (
            <Cart
              items={cartItems}
              onClose={() => setCartOpened(false)}
              removeFrom={remove}
            />
          )}
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
