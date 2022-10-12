import React, { useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./cart.scss";
import MiniCard from "../MiniCard/MiniCard";
import axios from "axios";
import AppContext from "../context";

const Cart = ({ onClose, items = [], removeFrom }) => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const button = useRef(null);
  let totalValue = items.reduce((prev, cur) => prev + +cur.price, 0).toFixed(2);

  const makeOrder = async (e) => {
    button.current.classList.add("loading");
    try {
      const { data } = await axios.post(
        "https://633770b95327df4c43d42ba8.mockapi.io/orders",
        {
          orders: cartItems,
          totalPrice: totalValue,
        }
      );
      // console.log("order id: " + data.orderId);
      await setCartItems([]);
      button.current.classList.remove("loading");
      localStorage.setItem("cardsOncart", JSON.stringify([]));
    } catch (error) {
      alert("something was wrong with request to MockApi");
    }
  };

  return (
    <div className="cart">
      <div className="cart__overlay" onClick={onClose}></div>
      <div className="cart__box">
        <div className="cart__header">
          <div className="cart__title">
            <h1 className="title-cart title">Shopping Cart</h1>
          </div>
          <div className="cart__close-btn">
            <a href="#" onClick={onClose}>
              Close
            </a>
          </div>
        </div>
        <div className="cart__items">
          {items.length > 0 ? (
            items.map((obj) => (
              <MiniCard
                name={obj.name}
                image={obj.imgUrl}
                price={obj.price}
                key={obj.id}
                id={obj.id}
                onDelete={removeFrom}
              />
            ))
          ) : (
            <div className="empty__cart">
              <img src="/src/images/empty_cart.svg" alt="empty cart" />
              <span>You don't have any items in your cart</span>
            </div>
          )}
        </div>
        <div className="cart__footer">
          <div className="cart__fullprice">
            Full Price:
            <span> ${totalValue}</span>
          </div>
          <button
            ref={button}
            className="cart__button button"
            disabled={cartItems.length <= 0 ? true : false}
            onClick={(e) => makeOrder(e)}
          >
            <span className="button-text cart__button-text">Checkout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
