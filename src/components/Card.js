import React from 'react';
import './../styles/Card.css';

const Card = ({ photo, name }) => (
  <div className="card">
    <img src={photo} alt="an image of an officer of the masonic lodge" className="card-photo" />
    <div className="card-name">
      <h2>{name}</h2>
    </div>
  </div>
);

export default Card;