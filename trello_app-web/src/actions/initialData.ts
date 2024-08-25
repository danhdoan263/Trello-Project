export const initialData = {
  boards: [
    {
      id: "board-1",
      columnOder: ["column-3", "column-2", "column-1"],
      colmuns: [
        {
          id: "column-1",
          boardId: "board-1",
          title: "To do column",
          cardOder: [
            "card-1",
            "card-2",
            "card-3",
            "card-4",
            "card-5",
            "card-6",
          ],
          cards: [
            {
              id: "card-1",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card",
              // img
              cover:
                "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/339630631_1178206916065039_7828914619457128346_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ploXOpjGptEQ7kNvgEcmTsp&_nc_ht=scontent.fsgn8-4.fna&oh=00_AYAg08T3yLIfEivwV9KTZPOt9CzYIuf31Wz0CuqATv2y5Q&oe=66CE15D6",
            },
            {
              id: "card-2",
              boardId: "board-2",
              columnId: "column-2",
              title: "Title of card",
              // img
              cover: undefined,
            },
            {
              id: "card-3",
              boardId: "board-3",
              columnId: "column-3",
              title: "Title of card",
              // img
              cover: undefined,
            },
            {
              id: "card-4",
              boardId: "board-4",
              columnId: "column-4",
              title: "Title of card",
              // img
              cover: undefined,
            },
            {
              id: "card-5",
              boardId: "board-5",
              columnId: "column-5",
              title: "Title of card",
              // img
              cover: undefined,
            },

            {
              id: "card-6",
              boardId: "board-6",
              columnId: "column-6",
              title: "Title of card",
              // img
              cover: undefined,
            },
          ],
        },
        {
          id: "column-2",
          boardId: "board-1",
          title: "In Progress column",
          cardOder: ["card-4", "card-5", "card-6"],
          cards: [
            {
              id: "card-4",
              boardId: "board-4",
              columnId: "column-4",
              title: "Title of card",
              // img
              cover: undefined,
            },
            {
              id: "card-5",
              boardId: "board-5",
              columnId: "column-5",
              title: "Title of card",
              // img
              cover: undefined,
            },
            {
              id: "card-6",
              boardId: "board-6",
              columnId: "column-6",
              title: "Title of card",
              // img
              cover: undefined,
            },
          ],
        },
        {
          id: "column-3",
          boardId: "board-1",
          title: "Done column",
          cardOder: ["card-7", "card-8", "card-9"],
          cards: [
            {
              id: "card-7",
              boardId: "board-7",
              columnId: "column-7",
              title: "Title of card",
              // img
              cover: undefined,
            },
            {
              id: "card-8",
              boardId: "board-8",
              columnId: "column-8",
              title: "Title of card",
              // img
              cover: undefined,
            },
            {
              id: "card-9",
              boardId: "board-9",
              columnId: "column-9",
              title: "Title of card",
              // img
              cover: undefined,
            },
          ],
        },
      ],
    },
  ],
};
