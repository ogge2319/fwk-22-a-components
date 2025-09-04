import GameStatus from "./GameStatus";

export default {
  title: "Components/GameStatus",
  component: GameStatus,
};

export const PlayerX = {
  args: {
    status: "Player X's turn",
  },
};

export const PlayerO = {
  args: {
    status: "Player O's turn",
  },
};

export const Winner = {
  args: {
    status: "Player X wins!",
  },
};
