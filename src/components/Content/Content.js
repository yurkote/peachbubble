import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./content.scss";
import axios from "axios";
import CardLoader from "../CardLoader";

// const cards = [
//   {
//     id: 1,
//     name: "Node.js winter",
//     author: "author",
//     price: "price",
//     imgUrl: "/src/images/shirts/1.jpg",
//   },
//   {
//     id: 2,
//     name: "React.js",
//     author: "author",
//     price: "price",
//     imgUrl: "/src/images/shirts/2.jpg",
//   },
//   {
//     id: 3,
//     name: "Why code works",
//     author: "author",
//     price: "price",
//     imgUrl: "/src/images/shirts/3.jpg",
//   },
//   {
//     id: 4,
//     name: "React.js",
//     author: "author",
//     price: "price",
//     imgUrl: "/src/images/shirts/4.jpg",
//   },
//   {
//     id: 5,
//     name: "To be or not to be",
//     author: "author",
//     price: "price",
//     imgUrl: "/src/images/shirts/5.jpg",
//   },
//   {
//     id: 6,
//     name: "Git commit",
//     author: "author",
//     price: "price",
//     imgUrl: "/src/images/shirts/6.jpg",
//   },
//   {
//     id: 7,
//     name: "Javascript",
//     author: "author",
//     price: "price",
//     imgUrl: "/src/images/shirts/7.jpg",
//   },
//   {
//     id: 8,
//     name: "Nodejs",
//     author: "author",
//     price: "price",
//     imgUrl: "/src/images/shirts/8.jpg",
//   },
//   {
//     id: 9,
//     name: "Javascript",
//     author: "author",
//     price: "price",
//     imgUrl: "/src/images/shirts/9.jpg",
//   },
//   {
//     id: 10,
//     name: "vsCode",
//     author: "author",
//     price: "price",
//     imgUrl: "/src/images/shirts/10.jpg",
//   },
//   {
//     id: 11,
//     name: "Stack Overflow be with you",
//     author: "author",
//     price: "price",
//     imgUrl: "/src/images/shirts/11.jpg",
//   },
//   {
//     id: 12,
//     name: "Github cat",
//     author: "author",
//     price: "price",
//     imgUrl: "/src/images/shirts/12.jpg",
//   },
//   {
//     id: 13,
//     name: "Awesome CSS",
//     author: "author",
//     price: "price",
//     imgUrl: "/src/images/shirts/13.jpg",
//   },
//   {
//     id: 14,
//     name: "Javascript red",
//     author: "author",
//     price: "price",
//     imgUrl: "/src/images/shirts/14.jpg",
//   },
//   {
//     id: 15,
//     name: "To be or not to be women",
//     author: "author",
//     price: "price",
//     imgUrl: "/src/images/shirts/15.jpg",
//   },
//   {
//     id: 16,
//     name: "Github dirty",
//     author: "author",
//     price: "price",
//     imgUrl: "/src/images/shirts/16.jpg",
//   },
//   {
//     id: 17,
//     name: "Unexpected parenthese",
//     author: "author",
//     price: "price",
//     imgUrl: "/src/images/shirts/17.jpg",
//   },
//   {
//     id: 18,
//     name: "Front-end developer",
//     author: "author",
//     price: "price",
//     imgUrl: "/src/images/shirts/18.jpg",
//   },
//   {
//     id: 19,
//     name: "Contributions",
//     author: "author",
//     price: "price",
//     imgUrl: "/src/images/shirts/19.jpg",
//   },
// ];

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
  // const [cards, setCards] = useState([]);
  // const [card, setCards] = useState(cards);

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
          <div className="content__sort">
            <a href="#">Most Relevant ^</a>
          </div>
        </div>
        <div className="content__main">
          {isLoading
            ? [...Array(15)].map((item, i) => <CardLoader key={i} />)
            : cards
            .slice(0, numberOfItems)
                .filter((obj) =>
                  obj.name.toLowerCase().includes(inputValue.toLowerCase())
                )
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
