import React from 'react';
import LoadingButton from './index';

export default {
  title: 'Components/LoadingButton',
  component: LoadingButton,
  argTypes: {},
};

const Template = (args) => <LoadingButton {...args} />;

export const _LoadingButton = Template.bind({});

_LoadingButton.args = {
  isLoading: true,
  size: 'medium',
  label: 'Button',
  loadingLabel: 'Сохранение...',
};