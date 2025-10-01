import React from "react";
import styles from "./Header.module.css";

export default function Header({ currentPlayer = "X", winner = null }) {
  const getPlayerName = (player) => {
    return player === "X" ? "Black" : "White";
  };

  if (winner) {
    return (
      <header className={styles.header}>
        Player {getPlayerName(winner)} Won!
      </header>
    );
  }

  return (
    <header className={styles.header}>
      Turn: Player {getPlayerName(currentPlayer)}
    </header>
  );
}
