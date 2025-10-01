import Board from "./Board";
import { MockGameProvider } from "../../mocks/gameProvider.mock";

export default {
  title: "Components/Board",
  component: Board,
  decorators: [
    (Story) => (
      <MockGameProvider>
        <Story />
      </MockGameProvider>
    ),
  ],
};

export const Default = {};
