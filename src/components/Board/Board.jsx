import React from "react";
import { useGame } from "../../mocks/gameProvider.mock"; 
import Cell from "../Cell/Cell";

export default function Board() {
  const { board, placeMark } = useGame();

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 40px)", gap: 4 }}>
      {board.map((cell, index) => (
        <Cell
          key={index}
          value={cell ?? ""}
          onClick={() => placeMark(index)}
        />
      ))}
    </div>
  );
}
