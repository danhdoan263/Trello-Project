import React from "react";
import "./Card.scss";
import { Cards } from "@components/Types/Types";
interface cardProps {
  card: Cards;
}
const Card: React.FC<cardProps> = ({ card }) => {
  const cardP = card;

  return (
    <div className="card-item">
      <div className="title">
        {" "}
        {cardP.title} {cardP.id}{" "}
      </div>

      {cardP.cover && (
        <img src={cardP.cover} alt="" onMouseDown={(e) => e.preventDefault()} />
      )}
    </div>
  );
};

export default Card;
