import React from "react";
import CardWithFooter from "../components/elements/CardWithFooter";
import Placeholder from "../components/elements/Placeholder";

export default {
    title: "Elements/Card", component: CardWithFooter, argTypes: {},
};

const Template = (args) => <CardWithFooter {...args}>
    <CardWithFooter.Body>
        <Placeholder height="h-60"/>
    </CardWithFooter.Body>
    <CardWithFooter.Footer>
        <Placeholder height="h-10"/>
    </CardWithFooter.Footer>
</CardWithFooter>;

export const _CardWithFooter = Template.bind({});