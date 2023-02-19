import React from 'react';
import Card from './index';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {},
};

const Template = (args) => <Card {...args} />;

export const _Card = Template.bind({});

_Card.args = {
  children: <p className='text-gray-900 dark:text-gray-100'>Message</p>,
  classname: 'p-5',
  variant: 'default',
};