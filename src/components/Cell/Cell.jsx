import React from "react";
import styles from "./Cell.module.css";

export default function Cell({ value = "", onClick }) {
  return (
    <button className={styles.cell} onClick={onClick}>
      {value && (
        <div className={`${styles.piece} ${value === "X" ? styles.playerX : styles.playerO}`} />
      )}
    </button>
  );
}
