import React from 'react';
import Badge from './index';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {},
};

const Template = (args) => <Badge {...args} />;

export const _Badge = Template.bind({});

_Badge.args = {
  item: 'Badge',
  size: 'small',
  color: 'orange',
  shape: 'rounded',
};

