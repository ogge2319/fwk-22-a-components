
import React from "react";
import HeaderFromContext from "../components/Header/Header.fromContext";
import Board from "../components/Board/Board";
import ScoreBoard from "../components/ScoreBoard/ScoreBoard";
import GameStatusFromContext from "../components/GameStatus/GameStatus.fromContext";
import { useGame } from "../mocks/gameProvider.mock";


export default {
  title: "Screens/TestGame",

};

function DebugButtons() {
  const { fakeWin, resetGame} = useGame();
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <button onClick={() => fakeWin("X")}>Simulate X win</button>
      <button onClick={() => fakeWin("O")}>Simulate O win</button>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}


export const Default = {
  render: () => (
    <div style={{ display: "grid", gap: 16, maxWidth: 240 }}>
      <HeaderFromContext />
      <ScoreBoard />
      <GameStatusFromContext />
      <DebugButtons />
      <Board />
    </div>
  ),
};
