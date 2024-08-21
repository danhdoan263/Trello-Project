import React from "react";
import "./Card.scss";
import { Cards } from "@components/Types/Types";
interface cardProps {
  card: Cards;
}
const Card: React.FC<cardProps> = ({ card }) => {
  const cardP = card;

  return (
    <li className="card-item">
      <div className="title">
        {" "}
        {cardP.title} {cardP.id}{" "}
      </div>
      {cardP.cover && <img src={cardP.cover} alt="" />}
    </li>
  );
};

export default Card;
