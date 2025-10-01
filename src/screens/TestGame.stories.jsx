
import React from "react";
import HeaderFromContext from "../components/Header/Header.fromContext";
import Board from "../components/Board/Board";
import ScoreBoardFromContext from "../components/ScoreBoard/ScoreBoard.fromContext";
import { MockGameProvider, useGame } from "../mocks/gameProvider.mock";

function BoardWithMockProvider() {
  const { board, placeMark } = useGame();
  return (
    <Board
      board={board}
      onCellClick={placeMark}
      size={3}
    />
  );
}

export default {
  title: "Screens/TestGame",
  decorators: [
    (Story) => (
      <MockGameProvider>
        <Story />
      </MockGameProvider>
    ),
  ],
};

export const Default = {
  render: () => (
    <div style={{ display: "grid", gap: 16, maxWidth: 240 }}>
      <HeaderFromContext />
      <ScoreBoardFromContext />
      <BoardWithMockProvider />
    </div>
  ),
};
