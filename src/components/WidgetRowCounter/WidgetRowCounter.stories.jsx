import React from 'react';
import PropTypes from 'prop-types';
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
  error: null,
  title: 'в производстве',
  counter: {
    single: 'Дело',
    multi: 'Дела',
    count: 'Дел',
  },
  color: 'green',
};