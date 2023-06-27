import React from 'react';
import WidgetRowCounter from './index';

export default {
  title: 'Components/WidgetRowCounter',
  component: WidgetRowCounter,
  argTypes: {},
};

const Template = (args) => <WidgetRowCounter {...args} />;

export const _WidgetRowCounter = Template.bind({});

_WidgetRowCounter.args = {
  rows: [1, 2, 3, 4, 5, 6, 7],
  isLoading: 'false',
  title: 'в производстве',
  counter: {
    single: 'Дело',
    multi: 'Дела',
    count: 'Дел',
  },
  color: 'green',
};