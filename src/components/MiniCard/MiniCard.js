import React from "react";
import PropTypes from "prop-types";
import "./minicard.scss";

const MiniCard = ({ name, image, price, id, onDelete }) => {
  return (
    <>
      <div className="mini-card">
        <div className="mini-card__box">
          <div className="mini-card__img">
            <img src={image} alt="item" />
          </div>
          <div className="mini-card-text">
            <h3 className="mini-card__title">{name}</h3>
            <p className="mini-card__price">${price}</p>
          </div>
          <div className="mini-card-button">
            <a
              href="#"
              className="mini-card-button__close"
              onClick={() => onDelete(id)}
            >
              X
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

MiniCard.propTypes = {};

export default MiniCard;
