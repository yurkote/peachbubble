import React from "react";
import Content from "../Content/Content";
import styles from "./header.module.scss";
import "./header.scss";

const Header = () => {

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <svg className="logo"
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
            <div className="header__logo-text"><span>Peachbubble</span></div>
          </div>
          <div className="header__search search">
            <input type="text" className="search__input" />
          </div>
          <div className="header__buttons">
            <ul>
              <li className="header__login">
                <a href="#">Login</a>
              </li>
              <li className="header__sign">
                <a href="#">SignUp</a>
              </li>
              <li className="header__fav">
                <a href="#">img</a>
              </li>
              <li className="header__cart">
                <a href="#">img</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Content/>
    </>
  );
};

export default Header;
