import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { Container, Draggable } from "react-smooth-dnd";
import "./BoardContent.scss";
import Column from "@components/Column/Column";

import { initialData } from "@src/actions/initialData";
//initialData interface
import { Columns } from "@components/Types/Types";
//Cards
import { sortOder } from "@src/utinities/sortOder";

const BoardContent = () => {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState<Columns[]>([]);

  useEffect(() => {
    const boardLoadDB = initialData.boards.find(
      (board) => board.id === "board-1"
    );
    if (boardLoadDB) {
      setBoard(boardLoadDB);
      sortOder(boardLoadDB.colmuns, boardLoadDB.columnOder, "id");
      setColumns(boardLoadDB.colmuns);
    }
  }, [columns]);

  if (isEmpty(board)) {
    return (
      <div className="board-content">
        <div className="not-found">404 Not FOUND</div>
      </div>
    );
  }
  const onColumnDrop = (dropResult?: unknown) => {
    console.log("Drop Result: ", dropResult);
  };

  return (
    <div className="board-content">
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        getChildPayload={(index) => columns[index]}
        dragHandleSelector=".column-drag-handle"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: "column-drop-preview",
        }}
        render={(rootRef) => (
          <div ref={rootRef}>
            {columns.map((column, index) => (
              <Draggable
                key={index}
                render={() => (
                  <div className="column-wrapper">
                    <Column column={column} />
                  </div>
                )}
              />
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default BoardContent;
