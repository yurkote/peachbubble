import React from 'react';
import PropTypes from 'prop-types';
import "./minicard.scss"

const MiniCard = props => {
  return (
    <div className='mini-card'>
      <div className="mini-card__box">
        <div className="mini-card__img">
          <img src="/src/images/shirts/1.jpg" alt="item" />
        </div>
        <div className="mini-card-text">
          <h3 className="mini-card__title">Title t-shirt</h3>
          <p className='mini-card__price'>$17.99</p>
        </div>
        <div className="mini-card-button">
          <a href="#" className="mini-card-button__close">
            X
          </a>
        </div>
      </div>
    </div>
  );
};

MiniCard.propTypes = {
  
};

export default MiniCard;