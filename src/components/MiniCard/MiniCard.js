import React from "react";
import PropTypes from "prop-types";
import "./minicard.scss";

const cards = [
  {
    id: 1,
    name: "Node.js winter",
    author: "author",
    price: "price",
    imgUrl: "/src/images/shirts/1.jpg",
  },
  {
    id: 2,
    name: "React.js",
    author: "author",
    price: "price",
    imgUrl: "/src/images/shirts/2.jpg",
  },
  {
    id: 3,
    name: "Why code works",
    author: "author",
    price: "price",
    imgUrl: "/src/images/shirts/3.jpg",
  },
  {
    id: 4,
    name: "React.js",
    author: "author",
    price: "price",
    imgUrl: "/src/images/shirts/4.jpg",
  },
  {
    id: 5,
    name: "To be or not to be",
    author: "author",
    price: "price",
    imgUrl: "/src/images/shirts/5.jpg",
  },
  {
    id: 6,
    name: "Git commit",
    author: "author",
    price: "price",
    imgUrl: "/src/images/shirts/6.jpg",
  },
  {
    id: 7,
    name: "Javascript",
    author: "author",
    price: "price",
    imgUrl: "/src/images/shirts/7.jpg",
  },
  {
    id: 8,
    name: "Nodejs",
    author: "author",
    price: "price",
    imgUrl: "/src/images/shirts/8.jpg",
  },
  {
    id: 9,
    name: "Javascript",
    author: "author",
    price: "price",
    imgUrl: "/src/images/shirts/9.jpg",
  },
  {
    id: 10,
    name: "vsCode",
    author: "author",
    price: "price",
    imgUrl: "/src/images/shirts/10.jpg",
  },
  {
    id: 11,
    name: "Stack Overflow be with you",
    author: "author",
    price: "price",
    imgUrl: "/src/images/shirts/11.jpg",
  },
  {
    id: 12,
    name: "Github cat",
    author: "author",
    price: "price",
    imgUrl: "/src/images/shirts/12.jpg",
  },
  {
    id: 13,
    name: "Awesome CSS",
    author: "author",
    price: "price",
    imgUrl: "/src/images/shirts/13.jpg",
  },
  {
    id: 14,
    name: "Javascript red",
    author: "author",
    price: "price",
    imgUrl: "/src/images/shirts/14.jpg",
  },
  {
    id: 15,
    name: "To be or not to be women",
    author: "author",
    price: "price",
    imgUrl: "/src/images/shirts/15.jpg",
  },
  {
    id: 16,
    name: "Github dirty",
    author: "author",
    price: "price",
    imgUrl: "/src/images/shirts/16.jpg",
  },
  {
    id: 17,
    name: "Unexpected parenthese",
    author: "author",
    price: "price",
    imgUrl: "/src/images/shirts/17.jpg",
  },
  {
    id: 18,
    name: "Front-end developer",
    author: "author",
    price: "price",
    imgUrl: "/src/images/shirts/18.jpg",
  },
  {
    id: 19,
    name: "Contributions",
    author: "author",
    price: "price",
    imgUrl: "/src/images/shirts/19.jpg",
  },
];

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
