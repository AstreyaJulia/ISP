import React, {Fragment, useState} from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import {Dialog, Transition} from "@headlessui/react";
import {XIcon} from "@heroicons/react/outline";
import logo from "../../../../assets/images/logo/isp-logo.svg";
import classNames from "classnames";
import {Circle, Disc} from "react-feather";
import config from "../../../../config";
import NavMenuItems from "./NavMenuItems";

const Sidebar = (props) => {
    const {
        menuCollapsed,
        menuData,
        menuVisibility,
        setMenuVisibility,
        setMenuCollapsed,
    } = props;

    /** Стейты */
    const [groupOpen, setGroupOpen] = useState([])
    const [groupActive, setGroupActive] = useState([])
    const [currentActiveGroup, setCurrentActiveGroup] = useState([])

    /** Кнопка-переключатель узкого/широкого меню */
    const MenuToggler = () => {
        if (menuCollapsed) {
            return (
                <button
                    className="sidebar-collapse-button bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onClick={() => setMenuCollapsed(false)}
                >

                    <Circle/>
                </button>
            );
        } else {
            return (
                <button
                    className="sidebar-collapse-button bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onClick={() => setMenuCollapsed(true)}
                >
                    <Disc/>
                </button>
            );
        }
    };

    return (
        <>
            {/** Мобильное меню */}
            <Transition.Root show={menuVisibility} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 flex z-40 lg:hidden"
                    onClose={setMenuVisibility}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75"/>
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div
                            className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white dark:bg-gray-900 shadow border-r border-gray-200">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 right-0 mr-4 pt-4">
                                    <button
                                        type="button"
                                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        onClick={() => setMenuVisibility(false)}
                                    >
                                        <span className="sr-only">
                                            Close sidebar
                                        </span>
                                        <XIcon
                                            className="h-6 w-6 text-gray-800 dark:text-gray-100"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            </Transition.Child>
                            <div className="flex-shrink-0 flex items-center px-4">
                                <img
                                    className="h-8 w-auto"
                                    src={logo}
                                    alt={config.APP_NAME}
                                />
                            </div>
                            <nav
                                className="mt-5 flex-shrink-0 h-full divide-y bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 overflow-y-auto"
                                aria-label="Sidebar"
                            >
                                <PerfectScrollbar
                                    className="main-menu-content"
                                    options={{wheelPropagation: false}}
                                >
                                    <div className="px-2 space-y-1">
                                        <NavMenuItems
                                            items={menuData}
                                            menuData={menuData}
                                            groupOpen={groupOpen}
                                            groupActive={groupActive}
                                            setGroupOpen={setGroupOpen}
                                            setGroupActive={setGroupActive}
                                            currentActiveGroup={currentActiveGroup}
                                            setCurrentActiveGroup={setCurrentActiveGroup}
                                        />
                                    </div>
                                </PerfectScrollbar>
                            </nav>
                        </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 w-14" aria-hidden="true">
                        {/** Заглушка, не позволяющая меню схлопываться, чтобы вместить кнопку меню */}
                    </div>
                </Dialog>
            </Transition.Root>

            {/** Десктопное меню */}
            <div
                className={classNames(
                    menuCollapsed ? "lg:w-20" : "lg:w-64",
                    "sidebar-menu relative hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0"
                )}
            >
                <div className="absolute top-0 right-0 mr-4 pt-4">
                    <MenuToggler/>
                </div>

                <div
                    className="flex flex-col flex-grow shadow bg-white dark:bg-gray-900 pt-5 pb-4 overflow-y-auto border-r border-gray-200 dark:border-gray-600">
                    <div
                        className={classNames(
                            "flex items-center content-center flex-shrink-0 px-4 h-8"
                        )}
                    >
                        {!menuCollapsed ? (
                            <img className="h-8 w-auto" src={logo} alt={config.APP_NAME}/>
                        ) : null}
                    </div>
                    <nav
                        className="mt-5 flex-1 flex flex-col overflow-y-auto"
                        aria-label="Меню"
                    >
                        <PerfectScrollbar
                            className="main-menu-content"
                            options={{wheelPropagation: false}}
                        >
                            <div
                                className={classNames(
                                    "px-2 space-y-1",
                                    menuCollapsed ? "justify-center" : ""
                                )}
                            >
                                <NavMenuItems
                                    items={menuData}
                                    menuData={menuData}
                                    groupOpen={groupOpen}
                                    groupActive={groupActive}
                                    setGroupOpen={setGroupOpen}
                                    menuCollapsed={menuCollapsed}
                                    setGroupActive={setGroupActive}
                                    currentActiveGroup={currentActiveGroup}
                                    setCurrentActiveGroup={setCurrentActiveGroup}
                                /></div>
                        </PerfectScrollbar>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
