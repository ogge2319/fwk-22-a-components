import React from "react";
import ScoreBoard from "./ScoreBoard";
import { useGame } from "../../mocks/gameProvider.mock";

export default function ScoreBoardFromContext() {
  const { scoreX, scoreO, resetGame } = useGame();

  const handleAbout = () => {
    alert("Gomoku Components Library - Ett komponentbibliotek för spel");
  };

  return (
    <ScoreBoard
      scoreX={scoreX}
      scoreO={scoreO}
      onAbout={handleAbout}
      onRestart={resetGame}
    />
  );
}

