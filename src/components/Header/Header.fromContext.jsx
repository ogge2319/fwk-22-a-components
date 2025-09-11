import React from "react";
import Header from "./Header";
import { useGame } from "../../mocks/gameProvider.mock";

export default function HeaderFromContext() {
    const { currentPlayer, winner } = useGame();

    return winner
        ? <Header currentPlayer={`🎉 Spelare ${winner} vann!`} />
        : <Header currentPlayer={currentPlayer} />;
}
