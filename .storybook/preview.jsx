/** @type { import('@storybook/react-vite').Preview } */
import React from "react";
import { MockGameProvider } from "../src/mocks/gameProvider.mock";

const preview = {
  decorators: [
    (Story) => (
      <MockGameProvider>
        <Story />
      </MockGameProvider>
    )
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: "todo" },
  },
};

export default preview;
