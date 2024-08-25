import React from "react";
import "./Column.scss";
import Card from "@components/Card/Card";
import { Columns } from "@components/Types/Types";
import { sortOder } from "@src/utinities/sortOder";
import { Container, Draggable } from "react-smooth-dnd";
interface Columnss {
  column: Columns;
}
const Column: React.FC<Columnss> = ({ column }) => {
  const cards = sortOder(column.cards, column.cardOder, "id");
  const onCardDrop = (dropResult?: unknown) => {
    console.log(dropResult);
  };
  return (
    <div className="column column-drag-handle">
      <div className="column-header ">{column.title}</div>

      <div className="card-list">
        <Container
          // onDragStart={(e) => console.log("drag started", e)}
          // onDragEnd={(e) => console.log("drag end", e)}
          // onDragEnter={() => {
          //   console.log("drag enter:", column.id);
          // }}
          // onDragLeave={() => {
          //   console.log("drag leave:", column.id);
          // }}
          // onDropReady={(p) => console.log("Drop ready: ", p)}
          groupName="danhdoan-dev-col"
          onDrop={onCardDrop}
          getChildPayload={(index) => cards[index]}
          dragClass="card-ghost"
          dropClass="card-ghost-drop"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: "card-drop-preview",
          }}
          render={(rootRef) => (
            <div ref={rootRef}>
              {cards.map((card, idex) => (
                <Draggable
                  key={idex}
                  render={() => (
                    <div className="column-wrapper">
                      <Card card={card} />
                    </div>
                  )}
                />
              ))}
            </div>
          )}
        />
      </div>
      <div className="column-footer">add a card</div>
    </div>
  );
};

export default Column;
