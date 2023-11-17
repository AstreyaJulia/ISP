import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Toast, { toastStyles } from './index';
import BasicButton from '../BasicButton';

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {},
};

const Template = (args) => <div>
  <Toaster position='top-right' toastOptions={{ className: 'react-hot-toast' }} />
  <BasicButton size='medium' onClick={() => onClick(args)} type='button' variant='primary' shape='rounded'>Show toast</BasicButton>
</div>;
const onClick = (args) => toast((t) => <Toast t={t} {...args} />, { className: toastStyles });
export const _Toast = Template.bind({});

_Toast.args = {
  message: 'Success',
  type: 'success',
};