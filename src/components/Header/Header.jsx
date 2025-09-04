import React from "react";

export default function Header({ currentPlayer = "X" }) {
  return (
    <header
      style={{
        padding: "1rem",
        background: "#111827",
        color: "white",
        fontSize: "1.5rem",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      Tur: Spelare {currentPlayer}
    </header>
  );
}
