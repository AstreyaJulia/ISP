import React from 'react';
import Alert from './index';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {},
};

const Template = (args) => <Alert {...args} />;

export const _Alert = Template.bind({});

_Alert.args = {
  title: 'Внимание',
  alertType: 'warning',
  children: <p>Какое-то сообщение</p>,
};

export const AlertError = Template.bind({});

AlertError.args = {
  title: 'Ошибка',
  alertType: 'error',
  children: <p>Какая-то ошибка</p>,
};

export const AlertWarning = Template.bind({});

AlertWarning.args = {
  title: 'Внимание',
  alertType: 'warning',
  children: <p>Какое-то сообщение</p>,
};

export const AlertSuccess = Template.bind({});

AlertSuccess.args = {
  title: 'Успешно',
  alertType: 'success',
  children: <p>Какая-то информация</p>,
};

export const AlertInfo = Template.bind({});

AlertInfo.args = {
  title: 'Информация',
  alertType: 'info',
  children: <p>Какая-то информация</p>,
};
