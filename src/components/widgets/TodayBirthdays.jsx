import React from "react";
import {Avatar} from "../elements/Avatar";
import {getInitials} from "../../utils";
import CardHeader from "../elements/CardHeader";
import {CakeIcon} from "@heroicons/react/outline";

const TodayBirthdays = ({birthdays}) => {
    return (
        <div className="widget bg-white dark:bg-gray-900 overflow-hidden shadow rounded-lg mb-3 p-4">
            <CardHeader title="Дни рождения сегодня" className=""/>
            <div className="flow-root mt-4">
                <ul className="-my-5 divide-y divide-gray-200 dark:divide-gray-600">
                    {birthdays.map((birthday) => (
                        <li key={birthday.user.fullname} className="py-3">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <Avatar size="8" avatar={birthday.user.avatar} name={birthday.user.fullname} color={birthday.user.color}/>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{getInitials(birthday.user.fullname)}</p>
                                </div>
                                <div
                                    className="flex-shrink-0 flex flex-col items-center justify-center h-12 w-12 rounded-lg bg-pink-500/30">
                                    <CakeIcon className="w-6 h-6 text-pink-700 dark:text-pink-300"/>
                                    <p className="text-sm text-pink-700 dark:text-pink-300">{birthday.age}</p>
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