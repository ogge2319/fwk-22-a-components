import React from "react";
import { useGame } from "../../mocks/gameProvider.mock";
import Cell from "../Cell/Cell";
import styles from "./Board.module.css";

export default function Board() {
  const { board, placeMark } = useGame();

  return (
    <div className={styles.board}>
      <div className={styles.grid}>
        {board.map((cell, index) => (
          <Cell
            key={index}
            value={cell ?? ""}
            onClick={() => placeMark(index)}
          />
        ))}
      </div>
    </div>
  );
}
