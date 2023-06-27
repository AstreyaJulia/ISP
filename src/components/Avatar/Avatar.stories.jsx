import React from 'react';
import { Avatar } from './index';
import { users } from '../../@mock/SampleData';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {},
};

const Template = (args) => <Avatar {...args} />;

export const _Avatar = Template.bind({});

_Avatar.args = {
  name: 'Иванов Иван Иванович',
  avatar: users[0].avatar,
  color: 'red',
  shape: 'circle',
  size: '12',
};

export const AvatarNoImage = Template.bind({});

AvatarNoImage.args = {
  name: 'ИИ',
  color: 'red',
  shape: 'circle',
  size: '12',
};

export const AvatarWithIcon = Template.bind({});

AvatarWithIcon.args = {
  color: 'yellow',
  shape: 'circle',
  size: '12',
  icon: <svg
    className='h-6 w-6 fill-yellow-500'
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    height='24px'
    viewBox='0 0 24 24'
    width='24px'
    fill='currentColor'
  >
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M12 5.99L4.47 19h15.06L12 5.99zM13 18h-2v-2h2v2zm-2-4v-4h2v4h-2z' opacity='.3' />
    <path d='M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z' />
  </svg>,
};