import React from "react";
import UserWelcome from "../components/widgets/UserWelcome";

export default {
    title: "Widgets/UserWelcome",
    component: UserWelcome,
    argTypes: {}
};

const Template = (args) => <UserWelcome userName="Пользователь" birthDayDate="1985-01-01" className="w-80" {...args}/>;

export const UserWelcomeWidget = Template.bind({});
