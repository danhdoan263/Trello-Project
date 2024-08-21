export interface Cards {
  id: string;
  boardId: string;
  columnId: string;
  title: string;
  cover: string | undefined;
}
export interface Columns {
  id: string;
  boardId: string;
  title: string;
  cardOder: string[];
  cards: Cards[];
}
