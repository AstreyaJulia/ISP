import React from "react";
import {Avatar} from "./Avatar";

const DashboardWelcome = ({className, userData, userStats}) => {
    return (
        <div className={["rounded-lg bg-white dark:bg-gray-900 overflow-hidden shadow", className|| ""].join(" ")}>
            <h2 className="sr-only" id="profile-overview-title">
                Обзор профиля
            </h2>
            <div className="bg-white dark:bg-gray-900 p-6">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="sm:flex sm:space-x-5">
                        <div className="flex-shrink-0">
                            <div className="mx-auto flex">
                                <Avatar name={userData.fullname} avatar={userData.avatar} color={userData.color} shape="circle" size="20" classname="mx-auto"/>
                            </div>
                        </div>
                        <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">С возвращением,</p>
                            <p className="text-xl font-bold text-gray-700 dark:text-gray-300 sm:text-2xl">{userData.fullname}</p>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{userData.profession}</p>
                        </div>
                    </div>
                    <div className="mt-5 flex justify-center sm:mt-0">
                        <a
                            href="#"
                            className="flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white dark:bg-gray-900 dark:text-gray-200 hover:bg-gray-50 flex-wrap"
                        >
                            <span className="text-center">Мой профиль</span>
                        </a>
                    </div>
                </div>
            </div>
            <div
                className={["bg-gray-50 dark:bg-gray-900 grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-700 sm:grid-cols-3 sm:divide-y-0 sm:divide-x", userStats ? "border-t border-gray-200 dark:border-gray-700" : ""].join(" ")}>
                {userStats && userStats.map((stat) => (
                    <div key={stat.label} className="px-6 py-5 text-sm font-medium text-center">
                        <span className="text-gray-900 dark:text-white mr-1">{stat.value}</span> <span
                        className="text-gray-600 dark:text-gray-400">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardWelcome;
