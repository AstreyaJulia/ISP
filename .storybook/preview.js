import "../src/theme/index.css";
import "../public/fonts/index.css";
import tailwindColors from 'tailwindcss/colors';
import { DEFAULT_THEME, withTailwindTheme } from './withTailwindTheme.decorator';

export const decorators = [withTailwindTheme];

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'White',
    values: [
      {
        name: 'Card Light Theme',
        value: tailwindColors.white,
      },
      {
        name: 'Gray Card Light Theme',
        value: tailwindColors.gray['100'],
      },
      {
        name: 'Card Dark Theme',
        value: tailwindColors.gray['900'],
      },
      {
        name: 'Gray Card Dark Theme',
        value: tailwindColors.gray['800'],
      },
    ],
  },

};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    toolbar: {
      icon: 'paintbrush',
      // Array of plain string values or MenuItem shape
      items: [
        { value: 'light', title: 'Light', left: '🌞' },
        { value: 'dark', title: 'Dark', left: '🌛' },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};