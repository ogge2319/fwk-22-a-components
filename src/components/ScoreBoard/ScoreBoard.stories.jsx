import ScoreBoard from "./ScoreBoard";

export default {
  title: "Components/ScoreBoard",
  component: ScoreBoard,
};

export const Default = {
  args: {
    scoreX: 0,
    scoreO: 0,
    onAbout: () => console.log('About clicked!'),
    onRestart: () => console.log('Restart clicked!'),
  },
};

export const PlayerXLeads = {
  args: {
    scoreX: 5,
    scoreO: 2,
    onAbout: () => console.log('About clicked!'),
    onRestart: () => console.log('Restart clicked!'),
  },
};

export const PlayerOLeads = {
  args: {
    scoreX: 1,
    scoreO: 4,
    onAbout: () => alert('About clicked!'),
    onRestart: () => alert('Restart clicked!'),
  },
};
