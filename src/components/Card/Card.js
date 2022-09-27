import React, { useEffect, useState } from "react";
import "./card.scss";

const Card = ({
  id,
  name,
  author,
  price,
  imgUrl,
  onPlus,
  onRemove,
  onFavorite,
  cardsOnCart
}) => {
  // const [isAdded, setIsAdded] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const obj = { id, name, imgUrl, price };

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    if (!isAdded) {
      onPlus(obj);
    } else {
      onRemove(obj);
    }
  };

  useEffect(() => {
    setIsAdded(false);
    cardsOnCart.filter((elem) => (elem.id == id ? setIsAdded(true) : null));
  }, [cardsOnCart]);
  return (
    <>
      <div className="card">
        <div className="card__fav" onClick={onFavorite}>
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
