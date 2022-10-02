import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import axios from "axios";
import "./app.scss";
import Favorites from "./pages/Favorites";

let cartState;
let favoriteState;
// const cartState = JSON.parse(localStorage.getItem("cardsOncart"));
// const favoriteState = JSON.parse(localStorage.getItem("favoriteCards"));

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState(cartState ?? []);
  const [searchValue, setSearchValue] = useState("");
  const [favoriteCards, setFavoriteCards] = useState(favoriteState ?? []);
  const [cards, setCards] = useState([]);

  const add = (cardObject, flag) => {
    if (flag) {
      axios.post(
        "https://633770b95327df4c43d42ba8.mockapi.io/favorites",
        cardObject
      );
      setFavoriteCards((prev) => [...prev, cardObject]);
    } else {
      axios.post(
        "https://633770b95327df4c43d42ba8.mockapi.io/cart",
        cardObject
      );
      setCartItems((prev) => [...prev, cardObject]);
    }
  };
  const remove = (id, flag) => {
    if (flag) {
      axios(`https://633770b95327df4c43d42ba8.mockapi.io/favorites/`).then(
        (res) => {
          let delItem = res.data.filter((item) => item.id == id);
          axios.delete(
            `https://633770b95327df4c43d42ba8.mockapi.io/favorites/${delItem[0].idApi}`
          );
          setFavoriteCards((prev) => prev.filter((el) => el.id !== id));
        }
      );
    } else {
      axios(`https://633770b95327df4c43d42ba8.mockapi.io/cart/`).then((res) => {
        let delItem = res.data.filter((item) => item.id == id);
        axios.delete(
          `https://633770b95327df4c43d42ba8.mockapi.io/cart/${delItem[0].idApi}`
        );
        setCartItems((prev) => prev.filter((el) => el.id !== id));
      });
    }
  };

  const body = document.getElementsByTagName("body")[0];
  cartOpened ? body.classList.add("lock") : body.classList.remove("lock");

  useEffect(() => {
    axios("https://633770b95327df4c43d42ba8.mockapi.io/cart").then((res) => {
      setCartItems(res.data);
    });
    axios("https://633770b95327df4c43d42ba8.mockapi.io/favorites").then(
      (res) => {
        setFavoriteCards(res.data);
      }
    );
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
      });
  }, []);

  return (
    <>
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
          />
        </Route>
        <Route path="/favorites">
          <Favorites
            onClickCart={() => setCartOpened(true)}
            favoriteCards={favoriteCards}
            cardsOnCart={cartItems}
            addTo={add}
            removeFrom={remove}
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
    </>
  );
}

export default App;
