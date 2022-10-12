import React, { useState } from "react";
import Card from "../Card/Card";
import "./content.scss";
import CardLoader from "../CardLoader";

const Content = ({
  addTo,
  removeFrom,
  cardsOnCart,
  inputValue,
  favoriteCards,
  cards,
  isLoading,
}) => {
  const [numberOfItems, setNumberOfItems] = useState(10);

  const moreItems = () => {
    setNumberOfItems((prev) => prev + 5);
  };

  return (
    <>
      <main className="content content__container">
        <div className="content__top">
          <div className="content__title title">
            {inputValue ? (
              <h1 className="title__content">
                Search: <span>{inputValue}</span> in t-shirts
              </h1>
            ) : (
              <h1 className="title__content">Programming T-Shirts</h1>
            )}
            <p className="title__results">{cards.length} Results</p>
          </div>
          {/* <div className="content__sort">
            <a href="#">Most Relevant ^</a>
          </div> */}
        </div>
        <div className="content__main">
          {isLoading
            ? [...Array(15)].map((item, i) => <CardLoader key={i} />)
            : cards

                .filter((obj) =>
                  obj.name.toLowerCase().includes(inputValue.toLowerCase())
                )
                .slice(0, numberOfItems)
                .map((obj) => (
                  <Card
                    key={obj.id}
                    addTo={addTo}
                    removeFrom={removeFrom}
                    cardsOnCart={cardsOnCart}
                    favoriteCards={favoriteCards}
                    {...obj}
                  />
                ))}
        </div>
        <div className="content__button">
          <button
            type="button"
            className="button-products button"
            disabled={numberOfItems === cards.length ? true : false}
            onClick={moreItems}
          >
            <span className="button__text">View more t-shirts</span>
          </button>
        </div>
      </main>
    </>
  );
};

export default Content;
