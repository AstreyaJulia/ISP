import React from "react";
import {AvatarBasic} from "../components/elements/AvatarBasic";
import {users} from "../@mock/SampleData";

export default {
    title: "Elements/Avatar",
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
            }
        }
    },
    component: AvatarBasic,
    argTypes: {
        size: {control: "radio"},
    },
};

const Template = (args) => <AvatarBasic {...args}/>;

export const BasicAvatarSize6 = Template.bind({});
export const BasicAvatarSize8 = Template.bind({});
export const BasicAvatarSize10 = Template.bind({});
export const BasicAvatarSize12 = Template.bind({});
export const BasicAvatarSize14 = Template.bind({});

BasicAvatarSize6.args = {
    item: users[0],
    size: "6"
};

BasicAvatarSize8.args = {
    item: users[1],
    size: "8"
};

BasicAvatarSize10.args = {
    item: users[2],
    size: "10"
};

BasicAvatarSize12.args = {
    item: users[3],
    size: "12"
};

BasicAvatarSize14.args = {
    item: users[4],
    size: "14"
};