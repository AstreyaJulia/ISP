import React from 'react';
import Quiz from './index';
import { testSteps1, testSteps1answers } from '../../../../@mock/SampleData';

export default {
  title: 'Components/Quiz',
  component: Quiz,
  argTypes: {},
};

const Template = (args) => <Quiz {...args} />;

export const _Quiz = Template.bind({});

_Quiz.args = {
  answers: testSteps1answers, steps: testSteps1,
};