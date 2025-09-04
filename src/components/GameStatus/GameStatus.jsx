import React from "react";

export default function GameStatus({ status = "Player X's turn" }) {
  return <div style={{ fontSize: "18px", margin: "1rem 0" }}>{status}</div>;
}
