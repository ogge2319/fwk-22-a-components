import React from "react";

export default function Cell({ value = "", onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "40px",
        height: "40px",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        cursor: "pointer",
      }}
    >
      {value}
    </button>
  );
}
