import React from 'react';
import CaseListCard from './index';

export default {
  title: 'Components/CaseListCard',
  component: CaseListCard,
  argTypes: {},
};

const Template = (args) => <CaseListCard {...args} />;

export const _CaseListCard = Template.bind({});

_CaseListCard.args = {
    item: {
        CASE_TYPE: 'ADM1',
        CASE_NUMBER: '13-57/2023',
        PARTS_FIO: 'ПАО Сбербанк',
        JUDGE_NAME: 'Иванов И.И.'
    },
    query: '',
    children: null,
};