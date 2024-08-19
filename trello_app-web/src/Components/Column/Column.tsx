import React from "react";
import "./Column.scss";
import Task from "@components/Task/task";
const Column = () => {
  return (
    <div className="column">
      <div className="column-header">Title: danh doan</div>

      <ul className="task-list">
        <Task />
      </ul>
      <div className="column-footer">add a card</div>
    </div>
  );
};

export default Column;
