import React from 'react';
import '../styles/card.scss';
import { FaPlus } from "react-icons/fa";

const Card = ({ imageSrc, description, name, position }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imageSrc} alt={name} />
        <div className="card-description">
          <p>{description}</p>
          <a href="/">Read more</a>
        </div>
      </div>
      <div className="card-info">
        <h3>{name}</h3>
        <p>{position}</p>
        <div className="card-icon">
          <FaPlus />
        </div>
      </div>
    </div>
  );
};

export default Card;
