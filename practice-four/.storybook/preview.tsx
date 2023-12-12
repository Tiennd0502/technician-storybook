import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import type { Preview } from '@storybook/react';
import { ChakraProvider } from '../src/providers';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ChakraProvider>
          <Story />
        </ChakraProvider>
      </BrowserRouter>
    ),
  ],
};

export default preview;
