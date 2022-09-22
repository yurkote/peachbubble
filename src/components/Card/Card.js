import React from "react";
import "./card.scss";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="card__fav">
          <a href="#">♥</a>
        </div>
        <div className="card__tocart">
          <a href="#">+</a>
        </div>
        <div className="card__img">
          <img src="/src/images/shirts/1.jpg" alt="img" />
        </div>
        <div className="card__text">
          <h2 className="card__title">Title of t-shirt</h2>
          <p className="card__author">made by ElkeD</p>
          <p className="card__price">
            From<span className="price-card">$17.99</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
