import React from "react";
import CardSubHeader from "../components/elements/CardSubHeader";

export default {
    title: "Elements/Card",
    component: CardSubHeader,
    argTypes: {},
};

const Template = (args) => <CardSubHeader {...args} title="Подзаголовок"/>;

export const _SubHeader = Template.bind({});

CardSubHeader.args = {
    title: "Подзаголовок",
    className: ""
};