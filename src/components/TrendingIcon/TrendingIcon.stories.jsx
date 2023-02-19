import React from 'react';
import TrendingIcon from './index';

export default {
  title: 'Components/TrendingIcon',
  component: TrendingIcon,
  argTypes: {},
};

const Template = (args) => <TrendingIcon {...args} />;

export const _TrendingIcon = Template.bind({});

_TrendingIcon.args = {
  value1: 1,
  value2: 3,
  size: '10'
};