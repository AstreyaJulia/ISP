import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Layout from './Layout';
import '../src/theme/index.css';
import './storyPreview.css';

addDecorator((storyFn) => <Layout>{storyFn()}</Layout>);

export const decorators = [(Story) => <Story />];

addDecorator(
  withInfo({
    inline: true,
    styles: (base) => ({
      ...base,
      infoBody: {
        ...base.infoBody,
        color: '#0f172a',
        h1: {
          fontFamily:
            'OpenSans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          fontSize: '32px',
          fontWeight: '800',
          margin: '20px 0',
          padding: '0 0 5px 0',
        },
        h3: {
          fontFamily:
            'OpenSans, Inter var,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
          margin: '20px 0',
        },
      },
      source: {
        color: '#0f172a',
        h1: {
          fontFamily:
            'OpenSans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          fontSize: '24px',
          fontWeight: '800',
          margin: '20px 0',
          padding: '0 0 5px 0',
        },
        h3: {
          fontFamily:
            'OpenSans, Inter var,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
          margin: '20px 0',
        },
      },
    }),
    propTablesExclude: [Layout],
  })
);

export const parameters = {
  backgrounds: {
    default: 'White',
    values: [
      {
        name: 'White',
        value: '#FFFFFF',
      },
      {
        name: 'Slate',
        value: '#F1F5F9',
      },
      {
        name: 'Neutral',
        value: '#F5F5F5',
      },
      {
        name: 'Dark Neutral',
        value: '#404040',
      },
      {
        name: 'Dark Slate',
        value: '#334155',
      },
    ],
  },
};
