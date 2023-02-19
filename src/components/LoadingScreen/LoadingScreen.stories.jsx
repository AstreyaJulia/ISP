import React from 'react';
import LoadingScreen from './index';

export default {
  title: 'Components/LoadingScreen',
  component: LoadingScreen,
  argTypes: {},
};

const Template = (args) => <LoadingScreen {...args} />;

export const _LoadingScreen = Template.bind({});

_LoadingScreen.args = {};