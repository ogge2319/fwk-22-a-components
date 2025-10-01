import React from "react";
import styles from "./ScoreBoard.module.css";

export default function ScoreBoard({
  scoreX = 0,
  scoreO = 0,
  onAbout,
  onRestart
}) {
  return (
    <div className={styles.scoreboard}>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={onAbout}>About</button>
        <button className={styles.button} onClick={onRestart}>Restart</button>
      </div>

      <div className={styles.header}>SCORE</div>
      <div className={styles.scoreContainer}>
        <div className={styles.player}>
          <div className={styles.playerName}>Player Black</div>
          <div className={`${styles.playerIcon} ${styles.playerX}`}></div>
          <div className={styles.score}>{scoreX}</div>
        </div>
        <div className={styles.player}>
          <div className={styles.playerName}>Player White</div>
          <div className={`${styles.playerIcon} ${styles.playerO}`}></div>
          <div className={styles.score}>{scoreO}</div>
        </div>
      </div>
    </div>
  );
}
