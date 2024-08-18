import React from "react";
import "./../styles/Card.css";

const Card = ({ photo, name, position, phoneNumber, email }) => (
  <div className="card">
    <img
      src={photo}
      alt="an image of an officer of the masonic lodge"
      className="card-photo"
    />
    <div className="card-name">
      <h2>{name}</h2>
      <p>{position}</p>
      <p>{phoneNumber}</p>
      <p>{email}</p>
    </div>
  </div>
);

export default Card;
