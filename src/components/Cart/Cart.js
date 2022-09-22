import React from "react";
import PropTypes from "prop-types";
import "./cart.scss";
import MiniCard from "../MiniCard/MiniCard";

const Cart = (props) => {
  return (
    <div className="cart">
      <div className="cart__overlay"></div>
      <div className="cart__box">
        <div className="cart__header">
          <div className="cart__title">
            <h1 className="title-cart title">Shopping Cart</h1>
          </div>
          <div className="cart__close-btn">
            <a href="#">Close</a>
          </div>
        </div>
        <div className="cart__items">
          <div className="empty__cart">
            <img src="/src/images/empty_cart.svg" alt="empty cart" />
            <span>You don't have any items in your cart</span>
          </div>
          {/* <MiniCard/> */}
        </div>
        <div className="cart__footer">
          <div className="cart__fullprice">
            Full Price: 
            <span> $99999</span>
          </div>
          <button className="cart__button button">
            <span className="button-text cart__button-text">Checkout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
