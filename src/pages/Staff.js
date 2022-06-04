import React from "react";
import {Helmet} from "react-helmet";
import PageHeader from "../components/PageHeader";
import {users} from "../@mock/SampleData";
import config from "../config";
import classNames from "classnames";
import {ArrowNarrowLeftIcon, ArrowNarrowRightIcon, PencilIcon,} from "@heroicons/react/solid";
import Table from "../components/table/Table";
import {Link} from "react-router-dom";

const breadcrumbs = [{name: "Администрирование", href: "#", current: false}, {
    name: "Управление пользователями",
    href: "#",
    current: true
}];

const tabs = [{name: "Зарегистрировано", href: "#", count: "51", current: false}, {
    name: "Активно",
    href: "#",
    count: "45",
    current: false
}, {name: "Заблокировано", href: "#", count: "6", current: true}]

const columns = [
    {label: "ID", accessor: "id", sortable: true},
    {label: "Логин", accessor: "username", sortable: true},
    {label: "Имя", accessor: "fullname", sortable: true},
    {label: "День рождения", accessor: "birthday", sortable: true},
    {label: "Должность", accessor: "profession", sortable: true},
    {label: "IP", accessor: "ip", sortable: true},
];

const Staff = () => {
    return (<React.Fragment>
        <Helmet>
            <title>{config.APP_NAME} - Управление пользователями</title>
        </Helmet>

        <div className="flex flex-col justify-self-stretch justify-stretch relative h-full">
            <div className="p-4">
                <PageHeader pages={breadcrumbs}/>
            </div>

            {/* Page heading */}
            <header className="bg-gray-50 dark:bg-gray-800 pt-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between">
                    <div className="flex-1 min-w-0">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Пользователи</h2>
                    </div>
                    <div className="mt-5 py-1 flex xl:mt-0 xl:ml-4">
              <span className="hidden sm:block">
                <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true"/>
                  Добавить
                </button>
              </span>
                    </div>
                </div>
            </header>

            <main className="bg-gray-50 dark:bg-gray-800 pb-6 flex-grow h-full">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col flex-grow h-full justify-between">
                    <div>
                        <div className="px-4 sm:px-0 mb-4">

                            {/* Tabs */}
                            <div className="sm:hidden">
                                <label htmlFor="tabs" className="sr-only">
                                    Select a tab
                                </label>
                                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                                <select
                                    id="tabs"
                                    name="tabs"
                                    className="mt-4 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                    defaultValue={tabs.find((tab) => tab.current).name}
                                >
                                    {tabs.map((tab) => (<option key={tab.name}>{tab.name}</option>))}
                                </select>
                            </div>
                            <div className="hidden sm:block">
                                <div className="border-b border-gray-200 dark:border-gray-600">
                                    <nav className="mt-2 -mb-px flex space-x-8" aria-label="Tabs">
                                        {tabs.map((tab) => (<Link
                                            key={tab.name}
                                            to={tab.href}
                                            className={classNames(tab.current ? "border-indigo-500 dark:border-indigo-300 text-indigo-600 dark:text-indigo-300" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-200 dark:hover:border-gray-700", "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm")}
                                        >
                                            {tab.name}
                                            {tab.count ? (<span
                                                className={classNames(tab.current ? "bg-indigo-500/30 text-indigo-600 dark:text-indigo-300" : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white", "hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block")}
                                            >
                            {tab.count}
                          </span>) : null}
                                        </Link>))}
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <Table data={users} columns={columns}/>

                    </div>
                    {/* Pagination */}
                    <nav
                        className="border-t border-gray-200 dark:border-gray-700 px-4 flex items-center justify-between sm:px-0"
                        aria-label="Pagination"
                    >
                        <div className="-mt-px w-0 flex-1 flex">
                            <Link
                                to="#"
                                className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-200 dark:hover:border-gray-700"
                            >
                                <ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-gray-400 dark:text-gray-500"
                                                     aria-hidden="true"/>
                                Previous
                            </Link>
                        </div>
                        <div className="hidden md:-mt-px md:flex">
                            <Link
                                to="#"
                                className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-200 dark:hover:border-gray-700 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                            >
                                1
                            </Link>
                            {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200" */}
                            <Link
                                to="#"
                                className="border-indigo-500 dark:border-indigo-300 text-indigo-600 dark:text-indigo-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                                aria-current="page"
                            >
                                2
                            </Link>
                            <Link
                                to="#"
                                className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-200 dark:hover:border-gray-700 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                            >
                                3
                            </Link>
                            <Link
                                to="#"
                                className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-200 dark:hover:border-gray-700 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                            >
                                4
                            </Link>
                            <Link
                                to="#"
                                className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-200 dark:hover:border-gray-700 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                            >
                                5
                            </Link>
                            <Link
                                to="#"
                                className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-200 dark:hover:border-gray-700 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                            >
                                6
                            </Link>
                        </div>
                        <div className="-mt-px w-0 flex-1 flex justify-end">
                            <Link
                                to="#"
                                className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-200 dark:hover:border-gray-700"
                            >
                                Next
                                <ArrowNarrowRightIcon className="ml-3 h-5 w-5 text-gray-400 dark:text-gray-500"
                                                      aria-hidden="true"/>
                            </Link>
                        </div>
                    </nav>
                </div>
            </main>
        </div>
    </React.Fragment>);
};

export default Staff;