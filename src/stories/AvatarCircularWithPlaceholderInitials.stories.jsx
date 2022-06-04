import React from "react";
import {AvatarCircularWithPlaceholderInitials} from "../components/elements/AvatarCircularWithPlaceholderInitials";
import {users} from "../@mock/SampleData";

export default {
    title: "Elements/Avatar",
    component: AvatarCircularWithPlaceholderInitials,
    argTypes: {
        size: {control: "radio"},
        color: {control: "select"},
    },
};

const Template = (args) => <AvatarCircularWithPlaceholderInitials {...args} item={users[3]}/>;

export const CircularWithPlaceholderInitials = Template.bind({});
