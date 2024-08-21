import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
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

  return (
    <div className="board-content">
      {columns.map((column, index) => (
        <Column key={index} column={column} />
      ))}
    </div>
  );
};

export default BoardContent;
