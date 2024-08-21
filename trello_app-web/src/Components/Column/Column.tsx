import React from "react";
import "./Column.scss";
import Card from "@components/Card/Card";
import { Columns } from "@components/Types/Types";
import { sortOder } from "@src/utinities/sortOder";

interface Columnss {
  column: Columns;
}
const Column: React.FC<Columnss> = ({ column }) => {
  const cards = sortOder(column.cards, column.cardOder, "id");

  return (
    <div className="column">
      <div className="column-header">{column.title}</div>

      <ul className="card-list">
        {cards.map((card, idex) => (
          <Card key={idex} card={card} />
        ))}
      </ul>
      <div className="column-footer">add a card</div>
    </div>
  );
};

export default Column;
