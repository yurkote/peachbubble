import React, { useEffect, useState } from "react";
import "./card.scss";

const Card = ({
  id,
  name,
  author,
  price,
  imgUrl,
  addTo,
  removeFrom,
  cardsOnCart,
  favoriteCards,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const obj = { id, name, author, imgUrl, price };

  const onClickPlus = () => {
    if (!isAdded) {
      addTo(obj, false);
    } else {
      removeFrom(id, false);
    }
  };

  const onClickFavorite = () => {
    if (!favorite) {
      addTo(obj, true);
      setFavorite(!favorite);
    } else {
      removeFrom(id, true);
      setFavorite(!favorite);
    }
  };

  useEffect(() => {
    setIsAdded(false);
    cardsOnCart.filter((elem) => (elem.id == id ? setIsAdded(true) : null));
    favoriteCards.filter((elem) => (elem.id == id ? setFavorite(true) : null));
    // localStorage.setItem("cardsOncart", JSON.stringify(cardsOnCart));
    // localStorage.setItem("favoriteCards", JSON.stringify(favoriteCards));
  }, [cardsOnCart, favoriteCards]);
  return (
    <>
      <div className="card">
        <div
          className={`${favorite ? "card__fav card__fav-on" : "card__fav"}`}
          onClick={onClickFavorite}
        >
          <a href="#">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.7 3.7L8 5.4l-.53-.53L6.3 3.7A3.25 3.25 0 0 0 .75 6c0 .85.27 1.38 1.22 2.32l5.85 5.86c.05.04.11.07.18.07.07 0 .13-.03.18-.07l5.84-5.84c.94-.94 1.23-1.5 1.23-2.34A3.25 3.25 0 0 0 9.7 3.7z"
                stroke="#000"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </a>
        </div>
        <div className={`card__tocart ${isAdded ? "in-cart" : ""}`}>
          <button onClick={onClickPlus}></button>
        </div>
        <div className="card__img" onClick={onClickPlus}>
          <img src={imgUrl} alt="img" />
        </div>
        <div className="card__text">
          <h2 className="card__title">{name}</h2>
          <p className="card__author">By {author}</p>
          <p className="card__price">
            <span className="price-card">${price}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
