import React from 'react';
import { AvatarBasic } from '../components/AvatarBasic/index';
import { users } from '../@mock/SampleData';

export default {
  title: 'Elements/Avatar',
  parameters: {
    docs: {
      description: {
        component: `
Круглый аватар с изображением. 

5 размеров: 
* 6: 1.5rem (24px), 
* 8: 2rem (32px), 
* 10: 2.5rem (40px), 
* 12: 3rem (48px), 
* 14: 3.5rem (56px).
`,
      },
    },
  },
  component: AvatarBasic,
  argTypes: {
    size: { control: 'radio' },
  },
};

const Template = (args) => <AvatarBasic {...args} />;

export const BasicAvatarSize6 = Template.bind({});
export const BasicAvatarSize8 = Template.bind({});
export const BasicAvatarSize10 = Template.bind({});
export const BasicAvatarSize12 = Template.bind({});
export const BasicAvatarSize14 = Template.bind({});

BasicAvatarSize6.args = {
  name: users[0].fullname,
  avatar: users[0].avatar,
  shape: 'circle',
  size: '6',
};

BasicAvatarSize8.args = {
  name: users[1].fullname,
  avatar: users[1].avatar,
  shape: 'circle',
  size: '8',
};

BasicAvatarSize10.args = {
  name: users[2].fullname,
  avatar: users[2].avatar,
  shape: 'circle',
  size: '10',
};

BasicAvatarSize12.args = {
  name: users[3].fullname,
  avatar: users[3].avatar,
  shape: 'circle',
  size: '12',
};

BasicAvatarSize14.args = {
  name: users[4].fullname,
  avatar: users[4].avatar,
  shape: 'circle',
  size: '14',
};
