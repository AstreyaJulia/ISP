import '@storybook/addon-docs/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import { create } from '@storybook/theming';
import { addons } from '@storybook/addons';
import logo from './tailwind.svg';

const theme = create({
  base: 'light',
  brandImage: logo,
  brandUrl: 'https://tailwindcss.com/',
  barSelectedColor: '#5034ff',
  brandTitle: 'Tailwind CSS',
  background: {
    hoverable: 'rgba(80, 52, 255, 0.1)',
  },
  hoverable: 'rgba(80, 52, 255, 0.1)',
});

addons.setConfig({
  theme,
});
