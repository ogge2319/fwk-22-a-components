
import React, { createContext, useContext, useState } from "react";

const GameContext = createContext(null);
export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a MockGameProvider');
  }
  return context;
};

export function MockGameProvider({ children, size = 225 }) {
  const empty = () => Array(size).fill(null);

  const [board, setBoard] = useState(empty());
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [winner, setWinner] = useState(null);
  const [moves, setMoves] = useState([]);

  const checkWinner = (board) => {
    for (let i = 0; i < board.length; i++) {
      const row = Math.floor(i / 15);
      const col = i % 15;
      const player = board[i];

      if (!player) continue;

      // Kolla horisontellt
      if (col <= 10) {
        let count = 0;
        for (let j = 0; j < 5; j++) {
          if (board[i + j] === player) count++;
        }
        if (count === 5) return player;
      }

      // Kolla vertikalt
      if (row <= 10) {
        let count = 0;
        for (let j = 0; j < 5; j++) {
          if (board[i + j * 15] === player) count++;
        }
        if (count === 5) return player;
      }

      // Kolla diagonal (nedåt höger)
      if (row <= 10 && col <= 10) {
        let count = 0;
        for (let j = 0; j < 5; j++) {
          if (board[i + j * 16] === player) count++;
        }
        if (count === 5) return player;
      }

      // Kolla diagonal (nedåt vänster)
      if (row <= 10 && col >= 4) {
        let count = 0;
        for (let j = 0; j < 5; j++) {
          if (board[i + j * 14] === player) count++;
        }
        if (count === 5) return player;
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
