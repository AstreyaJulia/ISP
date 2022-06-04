import {useState, Fragment} from "react";
import {users} from "../@mock/SampleData";
import {Helmet} from "react-helmet";
import config from "../config";
import {Link} from "react-router-dom";
import {PencilIcon} from "@heroicons/react/outline";

import red from "../assets/images/backgrounds/profile/red-bg.jpg";
import orange from "../assets/images/backgrounds/profile/orange-bg.jpg";
import yellow from "../assets/images/backgrounds/profile/yellow-bg.jpg";
import green from "../assets/images/backgrounds/profile/green-bg.jpg";
import blue from "../assets/images/backgrounds/profile/blue-bg.jpg";
import cyan from "../assets/images/backgrounds/profile/cyan-bg.jpg";
import indigo from "../assets/images/backgrounds/profile/indigo-bg.jpg";
import pink from "../assets/images/backgrounds/profile/pink-bg.jpg";
import CardHeader from "../components/elements/CardHeader";

const MyInfo = () => {

    const backgrounds = {
        red: red,
        orange: orange,
        yellow: yellow,
        green: green,
        blue: blue,
        cyan: cyan,
        indigo: indigo,
        pink: pink
    }

    /** Стейт пользовательских данных */
    const [userData] = useState(users[0]);

    return (
        <Fragment>
            <Helmet>
                <title>{config.APP_NAME} - Мой Профиль</title>
            </Helmet>
            <article className=" h-full">
                {/* Profile header */}
                <div className="border-b border-gray-200 pb-4">
                    <div>
                        <img className="h-32 w-full object-cover lg:h-48" src={backgrounds[userData.color]}
                             alt="Background"/>
                    </div>
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                            <div className="flex">
                                {userData.avatar
                                    ? <img
                                        className="h-24 w-24 rounded-full ring-4 ring-white dark:ring-gray-900 sm:h-32 sm:w-32"
                                        src={userData.avatar}
                                        alt=""
                                    />
                                    :
                                    <svg
                                        className="h-24 w-24 bg-white text-gray-300 dark:text-gray-500 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                                    </svg>}

                            </div>
                            <div
                                className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                                    <h1 className="text-2xl font-bold text-gray-900 truncate">{userData.name}</h1>
                                </div>
                                <div
                                    className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                                    <Link
                                        to="/myprofile/edit"
                                        className="inline-flex justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true"/>
                                        <span>Редактировать</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 truncate">{userData.name}</h1>
                        </div>
                    </div>
                </div>
                <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 mb-6">
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Должность
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {userData.profession}
                            </dd>
                        </div>
                    </dl>
                    <CardHeader title="Персональная Информация" className="mb-4"/>

                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 mb-6">

                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                День рождения
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {userData.birthday}
                            </dd>
                        </div>

                    </dl>

                    <CardHeader title="Контактная информация" className="mb-4"/>

                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 mb-6">

                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Мобильный телефон
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {userData.mobile_phone}
                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Адрес электронной почты
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {userData.email}
                            </dd>
                        </div>

                        <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">
                                Домашний адрес (город, улица, дом, квартира)
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {userData.address}
                            </dd>
                        </div>

                    </dl>
                </div>
            </article>
        </Fragment>
    );
};

export default MyInfo;