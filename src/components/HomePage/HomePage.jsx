import React from "react";
import Button from "../Button/Button";

export default function HomePage({ onStart }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #1f2937, #374151)",
        color: "white",
        textAlign: "center",
        gap: "1rem",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Välkommen till Gomoku</h1>
      <p style={{ fontSize: "1.25rem", color: "#d1d5db" }}>
        Fem-i-rad spelet byggt som komponenter!
      </p>
      <Button onClick={onStart}>Starta Spelet</Button>
    </div>
  );
}
