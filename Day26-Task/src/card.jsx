import React from "react";
import pic2 from "./assets/download (1).jpeg";
import pic3 from "./assets/download (2).jpeg";
import pic1 from "./assets/download.jpeg";
import "./card.css";

const Card = ({ imageUrl, title }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

const CardList = () => {
  const cards = [
    {
      imageUrl: pic1,
      title: "Python Objects 101",
    },
    {
      imageUrl: pic2,
      title: "Machine learning Must-",
    },
    {
      imageUrl: pic3,
      title: "Unlocking the power of NLP",
    },
  ];

  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Card key={index} imageUrl={card.imageUrl} title={card.title} />
      ))}
    </div>
  );
};

export default CardList;
