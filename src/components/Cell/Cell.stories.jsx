import Cell from "./Cell";

export default {
  title: "Components/Cell",
  component: Cell,
};

export const Empty = {
  args: {
    value: "",
  },
};

export const WithX = {
  args: {
    value: "X",
  },
};

export const WithO = {
  args: {
    value: "O",
  },
};
