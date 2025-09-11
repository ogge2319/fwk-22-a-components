import React from "react";
import GameStatus from "./GameStatus";
import { useGame } from "../../mocks/gameProvider.mock";

export default function GameStatusFromContext() {
  const { currentPlayer, winner } = useGame();
  return winner
    ? <GameStatus status={`Player ${winner} wins!`} />
    : <GameStatus status={`Player ${currentPlayer}'s turn`} />;
}

