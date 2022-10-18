import React from "react";
import { AvatarCircularWithPlaceholderInitials } from "../components/AvatarCircularWithPlaceholderInitials";
import { users } from "../@mock/SampleData";

export default {
  title: "Elements/Avatar",
  component: AvatarCircularWithPlaceholderInitials,
  argTypes: {
    size: { control: "radio" }
  }
};

const Template = (args) => <AvatarCircularWithPlaceholderInitials {...args} />;

export const CircularWithPlaceholderInitialsSize6 = Template.bind({});
export const CircularWithPlaceholderInitialsSize8 = Template.bind({});
export const CircularWithPlaceholderInitialsSize10 = Template.bind({});
export const CircularWithPlaceholderInitialsSize12 = Template.bind({});
export const CircularWithPlaceholderInitialsSize14 = Template.bind({});

CircularWithPlaceholderInitialsSize6.args = {
  name: users[0].fullname,
  shape: "circle",
  size: "6"
};

CircularWithPlaceholderInitialsSize8.args = {
  name: users[1].fullname,
  shape: "circle",
  size: "8"
};

CircularWithPlaceholderInitialsSize10.args = {
  name: users[2].fullname,
  shape: "circle",
  size: "10"
};

CircularWithPlaceholderInitialsSize12.args = {
  name: users[3].fullname,
  shape: "circle",
  size: "12"
};

CircularWithPlaceholderInitialsSize14.args = {
  name: users[4].fullname,
  shape: "circle",
  size: "14"
};