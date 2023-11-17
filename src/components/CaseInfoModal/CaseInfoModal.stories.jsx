import React from 'react';
import CaseInfoModal from './index';

export default {
  title: 'Components/CaseInfoModal',
  component: CaseInfoModal,
  argTypes: {},
};

const Template = (args) => <CaseInfoModal {...args} />;

export const _CaseInfoModal = Template.bind({});

_CaseInfoModal.args = {
    open: true,
    setOpen: (evt) => evt,
    onModalClose: (evt) => evt,
    children: <p className='text-gray-900 dark:text-gray-100'>Message</p>,
};