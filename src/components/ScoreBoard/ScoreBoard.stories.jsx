import ScoreBoard from "./ScoreBoard";

export default {
  title: "Components/ScoreBoard",
  component: ScoreBoard,
};

export const Default = {
  args: {
    scoreX: 0,
    scoreO: 0,
  },
};

export const PlayerXLeads = {
  args: {
    scoreX: 5,
    scoreO: 2,
  },
};

export const PlayerOLeads = {
  args: {
    scoreX: 1,
    scoreO: 4,
  },
};
