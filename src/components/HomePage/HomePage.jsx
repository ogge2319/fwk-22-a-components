import React from "react";
import Button from "../Button/Button";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white">
      <h1 className="text-5xl font-bold mb-6">Välkommen till Gomoku</h1>
      <p className="mb-8 text-lg text-gray-300">Fem-i-rad som komponenter!</p>
      <Button onClick={() => alert("Spelet startar!")}>Starta Spelet</Button>
    </div>
  );
}
