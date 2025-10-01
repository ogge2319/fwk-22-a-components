import React, { useState, useCallback } from "react";
import ScoreBoard from "./ScoreBoard";
import AboutModal from "../AboutModal/AboutModal";
import { useGame } from "../../mocks/gameProvider.mock";

export default function ScoreBoardFromContext() {
  const { scoreX, scoreO, resetGame } = useGame();
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleAbout = useCallback(() => {
    setIsAboutOpen(true);
  }, []);

  const handleCloseAbout = useCallback(() => {
    setIsAboutOpen(false);
  }, []);

  return (
    <>
      <ScoreBoard
        scoreX={scoreX}
        scoreO={scoreO}
        onAbout={handleAbout}
        onRestart={resetGame}
      />
      <AboutModal isOpen={isAboutOpen} onClose={handleCloseAbout} />
    </>
  );
}

