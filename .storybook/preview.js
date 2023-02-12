import "../src/theme/index.css";
import "../public/fonts/index.css";
import { tailwindColorsConfig } from '../src/utils/getTailwindconfig';

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
        name: 'Slate',
        value: tailwindColorsConfig.theme.colors.white,
      },
      {
        name: 'Dark Slate',
        value: tailwindColorsConfig.theme.colors.slate['800'],
      },
    ],
  },
  viewMode: 'docs',
  previewTabs: {
    canvas: {hidden: true},
  },
};
