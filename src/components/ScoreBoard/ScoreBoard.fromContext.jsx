import React from "react";
import ScoreBoard from "./ScoreBoard";
import { useGame } from "../../mocks/gameProvider.mock";

export default function ScoreBoardFromContext() {
  const { scoreX, scoreO } = useGame();
  return <ScoreBoard scoreX={scoreX} scoreO={scoreO} />;
}

