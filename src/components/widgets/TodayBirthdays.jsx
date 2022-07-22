import React from "react";
import {Avatar} from "../elements/Avatar";
import {getAmount, getInitials} from "../../utils";
import CardHeader from "../elements/CardHeader";

const TodayBirthdays = ({birthdays}) => {
    return (
        <div className="widget bg-white dark:bg-gray-900 overflow-hidden shadow rounded-lg mb-3 p-5">
            <CardHeader title="Дни рождения сегодня" className=""/>
            <div className="flow-root mt-5">
                <ul className="grid col-span-1 gap-5 mt-1">
                    {birthdays.map((birthday) => (
                        <li key={birthday.user.fullname}>
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <Avatar size="10" avatar={birthday.user.avatar} name={birthday.user.fullname}
                                            color={birthday.user.color} shape="circle"/>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-gray-900 dark:text-white">
                                        {getInitials(birthday.user.fullname)}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">
                                        {birthday.age} {`${getAmount(birthday.age, {
                                        single: "год",
                                        multi: "года",
                                        count: "лет"
                                    })}`}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodayBirthdays;