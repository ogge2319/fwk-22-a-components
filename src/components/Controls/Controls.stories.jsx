import Controls from "./Controls";

export default {
  title: "Components/Controls",
  component: Controls,
};

export const Default = {
  args: {
    onReset: () => alert("Reset pressed!"),
    onUndo: () => alert("Undo pressed!"),
  },
};
