import React from "react";

export default function Controls({ onReset, onUndo }) {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <button onClick={onReset}>Reset</button>
      <button onClick={onUndo}>Undo</button>
    </div>
  );
}
