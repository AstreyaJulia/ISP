import React from 'react';
import BasicButton from './index';

export default {
  title: 'Components/Button',
  component: BasicButton,
  argTypes: {},
};

const Template = (args) => <BasicButton {...args} >Button</BasicButton>;

export const _Button = Template.bind({});

_Button.args = {
  size: 'medium',
  type: 'button',
  className: '',
  onClick: undefined,
  children: null,
};