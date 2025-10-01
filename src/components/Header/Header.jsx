import React from "react";
import styles from "./Header.module.css";

export default function Header({ currentPlayer = "X", winner = null }) {
  if (winner) {
    return (
      <header className={styles.header}>
        Spelare {winner} vann!
      </header>
    );
  }

  return (
    <header className={styles.header}>
      Tur: Spelare {currentPlayer}
    </header>
  );
}
