import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = ({ onClickCart, inputValue, setInputValue, cartItems }) => {
  const onSearch = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <div className="header__logo">
            <svg
              className="logo"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
            >
              <title>Peachbubble logo</title>
              <g>
                <path
                  id="svg_2"
                  d="m27.621,27.225l-5.3279,0a0.53462,0.53462 0 0 1 -0.53331,-0.53592l0,-13.372c0,-0.29541 0.2392,-0.53462 0.53331,-0.53462l4.9397,0c3.707,0 4.4848,2.1829 4.4848,4.0129c0,1.0588 -0.28103,1.8993 -0.83918,2.5162c1.3594,0.56076 2.0914,1.8248 2.0914,3.6534c0,2.6679 -1.9999,4.2599 -5.3488,4.2599m-18.8016,0a0.53331,0.53331 0 0 1 -0.532,-0.53592l0,-13.372c0,-0.29541 0.2379,-0.53462 0.532,-0.53462l5.1697,0c3.2286,0 5.08343,1.96368 4.51024,5.04273c-0.68547,2.51965 -1.44493,2.65269 -4.1934,3.34017l0.00239,6.02254m5.5955,-27.15229c-11.037,0 -19.986,8.9486 -19.986,19.986c0,11.04 8.9486,19.989 19.987,19.989s19.986,-8.9486 19.986,-19.987s-8.946,-19.986 -19.985,-19.986"
                  fill="#ffe5b4"
                />
              </g>
            </svg>
            <div className="header__logo-text">
              <span>Peachbubble</span>
            </div>
          </div>
        </Link>
        <div className="header__search search">
          <input
            type="text"
            className="search__input"
            value={inputValue}
            onChange={onSearch}
          />
          {inputValue && (
            <button className="search__clear" onClick={() => setInputValue("")}>
              <span>clear</span>
            </button>
          )}
        </div>
        <div className="header__buttons">
          <ul>
            <li className="header__login">
              <a href="#">Login</a>
            </li>
            <li className="header__sign">
              <a >SignUp</a>
            </li>
            <li className="header__fav">
              <Link to="/favorites">
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.7 3.7L8 5.4l-.53-.53L6.3 3.7A3.25 3.25 0 0 0 .75 6c0 .85.27 1.38 1.22 2.32l5.85 5.86c.05.04.11.07.18.07.07 0 .13-.03.18-.07l5.84-5.84c.94-.94 1.23-1.5 1.23-2.34A3.25 3.25 0 0 0 9.7 3.7z"
                    stroke="#40354E"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </Link>
            </li>
            <li className="header__cart" onClick={onClickCart}>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="7" cy="20" r="2"></circle>
                  <circle cx="17" cy="20" r="2"></circle>
                  <path d="M18 17H6a1 1 0 01-1-.79L2.19 3H1a1 1 0 010-2h2a1 1 0 011 .79L6.81 15h10.37l1.6-8H5a1 1 0 01-1-1c0-.55-.55-1 0-1h16a1 1 0 01.77.37 1 1 0 01.23.83l-2 10a1 1 0 01-1 .8z"></path>
                </svg>
              </a>
              <div className={`cart__count ${cartItems.length > 0 && "count-on"}`}>
                <span>{cartItems.length}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
