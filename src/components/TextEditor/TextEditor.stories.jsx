import React from 'react';
import TextEditor from './index';
import Card from '../Card';

export default {
  title: 'Components/TextEditor',
  component: TextEditor,
  argTypes: {},
};

const Template = (args) => <Card variant='default' classname='px-5 pb-5 pt-2'><TextEditor {...args} /></Card>;

export const _TextEditor = Template.bind({});

_TextEditor.args = {
  value: 'Some text',
  onChange: () => null,
  placeholder: 'Write something...',
  simple: true,
};