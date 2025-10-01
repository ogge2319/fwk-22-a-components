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
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Welcome to Gomoku</h1>
      <p style={{ fontSize: "1.25rem", color: "#d1d5db" }}>
        Five in a row – simple rules, endless strategy.
      </p>
      <Button onClick={onStart}>Start game</Button>
    </div>
  );
}
