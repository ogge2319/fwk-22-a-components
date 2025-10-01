
import React, { createContext, useContext, useState } from "react";

const GameContext = createContext(null);
export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a MockGameProvider');
  }
  return context;
};

export function MockGameProvider({ children, size = 9 }) {
  const empty = () => Array(size).fill(null);

  const [board, setBoard] = useState(empty());
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [winner, setWinner] = useState(null);
  const [moves, setMoves] = useState([]);

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const placeMark = (i) => {
    if (board[i] || winner) return;
    const next = [...board];
    next[i] = currentPlayer;
    setBoard(next);
    setMoves((m) => [...m, i]);

    const gameWinner = checkWinner(next);
    if (gameWinner) {
      setWinner(gameWinner);
      if (gameWinner === "X") setScoreX((s) => s + 1);
      if (gameWinner === "O") setScoreO((s) => s + 1);
    } else {
      setCurrentPlayer((p) => (p === "X" ? "O" : "X"));
    }
  };

  const undo = () => {
    if (moves.length === 0 || winner) return;
    const last = moves[moves.length - 1];
    const next = [...board];
    next[last] = null;
    setBoard(next);
    setMoves((m) => m.slice(0, -1));
    setCurrentPlayer((p) => (p === "X" ? "O" : "X"));
  };

  const resetRound = () => {
    setBoard(empty());
    setWinner(null);
    setCurrentPlayer("X");
    setMoves([]);
  };

  const resetGame = () => {
    resetRound();
    setScoreX(0);
    setScoreO(0);
  };

  const addPoint = (p = currentPlayer) =>
    p === "X" ? setScoreX((s) => s + 1) : setScoreO((s) => s + 1);

  const fakeWin = (p) => {
    setWinner(p);
    if (p === "X") setScoreX((s) => s + 1);
    if (p === "O") setScoreO((s) => s + 1);
  };

  return (
    <GameContext.Provider
      value={{
        board,
        currentPlayer,
        winner,
        scoreX,
        scoreO,
        placeMark,
        undo,
        resetRound,
        resetGame,
        addPoint,
        fakeWin,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
