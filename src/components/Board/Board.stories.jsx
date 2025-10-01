import React, { useState } from "react";
import Board from "./Board";

export default {
  title: "Components/Board",
  component: Board,
};

export const Default = {
  args: {
    board: Array(9).fill(""),
    onCellClick: (index) => console.log(`Clicked cell ${index}`),
    size: 3
  }
};

export const WithMoves = {
  args: {
    board: ["X", "O", "", "X", "", "O", "", "", "X"],
    onCellClick: (index) => console.log(`Clicked cell ${index}`),
    size: 3
  }
};

export const Interactive = {
  render: () => {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [currentPlayer, setCurrentPlayer] = useState("X");

    const handleClick = (index) => {
      if (board[index]) return;
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    };

    return (
      <Board
        board={board}
        onCellClick={handleClick}
        size={3}
      />
    );
  }
};
