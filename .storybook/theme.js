import { create } from '@storybook/theming';
import tailwindColors from 'tailwindcss/colors';
import logo from './assets/isp-logo.svg'

export default create({
  name: 'Isida UI',
  base: 'light',
  brandTitle: 'ISP Isida UI',
  brandImage: logo,

  colorPrimary: tailwindColors.indigo['500'],
  colorSecondary: tailwindColors.indigo['500'],

  // UI
  appBg: tailwindColors.gray['200'],
  appContentBg: tailwindColors.white,
  appBorderColor: tailwindColors.gray['300'],
  appBorderRadius: 8,

  // Text colors
  textColor: tailwindColors.gray['800'],
  textInverseColor: tailwindColors.black,

  // Toolbar default and active colors
  barTextColor: tailwindColors.gray['700'],
  barSelectedColor: tailwindColors.indigo['700'],
  barBg: tailwindColors.white,

  // Form colors
  inputBg: 'white',
  inputBorder: tailwindColors.gray['300'],
  inputTextColor: tailwindColors.gray['700'],
  inputBorderRadius: 2,
});
