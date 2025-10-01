import React from "react";
import Cell from "../Cell/Cell";
import styles from "./Board.module.css";

export default function Board({
  board = Array(225).fill(""),
  onCellClick = () => { },
  size = 15
}) {
  return (
    <div className={styles.board}>
      <div className={styles.grid}>
        {board.map((cell, index) => (
          <Cell
            key={index}
            value={cell ?? ""}
            onClick={() => onCellClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
