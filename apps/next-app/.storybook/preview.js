import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import theme from '../src/components/ui/theme';

const themeDecorator = (styleFn) => (
  <ThemeProvider theme={theme}>{styleFn()}</ThemeProvider>
);

addDecorator(themeDecorator);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
