import React from "react";
import CardHeader from "../components/elements/CardHeader";

export default {
    title: "Elements/Card", component: CardHeader, argTypes: {},
};

const Template = (args) => <CardHeader {...args} title="Заголовок"/>;

export const _Header = Template.bind({});

CardHeader.args = {
    title: "Заголовок", className: ""
};