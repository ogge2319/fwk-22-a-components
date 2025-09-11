
import React, { createContext, useContext, useState } from "react";

const GameContext = createContext(null);
export const useGame = () => useContext(GameContext);

export function MockGameProvider({ children, size = 9 }) {
  const empty = () => Array(size).fill(null);

  const [board, setBoard] = useState(empty());
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [winner, setWinner] = useState(null);
  const [moves, setMoves] = useState([]); 

  const placeMark = (i) => {
    if (board[i] || winner) return;
    const next = [...board];
    next[i] = currentPlayer;
    setBoard(next);
    setMoves((m) => [...m, i]); 
    setCurrentPlayer((p) => (p === "X" ? "O" : "X"));
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
