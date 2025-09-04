import React from "react";

export default function ScoreBoard({ scoreX = 0, scoreO = 0 }) {
  return (
    <div style={{ display: "flex", gap: "2rem", fontSize: "18px" }}>
      <div>Player X: {scoreX}</div>
      <div>Player O: {scoreO}</div>
    </div>
  );
}
