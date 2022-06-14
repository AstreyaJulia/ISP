import React, {Fragment, useState} from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import {Dialog, Transition} from "@headlessui/react";
import {XIcon} from "@heroicons/react/outline";
import logo from "../../../../assets/images/logo/gerbwoframe.svg";
import classNames from "classnames";
import config from "../../../../config";
import NavMenuItems from "./NavMenuItems";
import {Avatar} from "../../../../components/elements/Avatar";
import NavMenuSectionHeader from "./NavMenuSectionHeader";
import classnames from "classnames";

const Sidebar = (props) => {
    const {
        menuCollapsed,
        menuData,
        menuVisibility,
        setMenuVisibility,
    } = props;

    /** Стейты */
    const [groupOpen, setGroupOpen] = useState([])
    const [groupActive, setGroupActive] = useState([])
    const [currentActiveGroup, setCurrentActiveGroup] = useState([])

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
                                <div className="flex items-center space-x-3">
                                    <div className="flex-shrink-0">
                                        <Avatar size="10" avatar={logo} shape="roundedMD"
                                                classname="border-2 border-gray-200 dark:border-gray-700"
                                                name={config.COURT_NAME}/>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs text-gray-700 dark:text-gray-200 flex-wrap font-medium">
                                            {config.COURT_NAME}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 flex-wrap font-medium">
                                            {config.COURT_REGION}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <nav
                                className="mt-2 flex-shrink-0 h-full divide-y bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 overflow-y-auto"
                                aria-label="Sidebar"
                            >
                                <PerfectScrollbar
                                    className="main-menu-content"
                                    options={{wheelPropagation: false}}
                                >
                                    <div className="px-4 space-y-1">
                                        <NavMenuSectionHeader menuCollapsed={menuCollapsed}
                                                              item={{header: "Главное меню"}}/>
                                        <NavMenuItems
                                            items={menuData}
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
                <div
                    className="flex flex-col flex-grow shadow bg-white dark:bg-gray-900 pt-5 pb-4 overflow-y-auto border-r border-gray-200 dark:border-gray-600">
                    <div
                        className={classNames(
                            "flex items-center justify-center flex-shrink-0 px-4 h-10 mb-3"
                        )}
                    >
                        <div className="flex items-center space-x-3">
                            <div className={classnames("flex-shrink-0", !menuCollapsed ? "" : "justify-center")}>
                                <Avatar size="10" avatar={logo} shape="roundedMD"
                                        classname="border-2 border-gray-200 dark:border-gray-700"
                                        name={config.COURT_NAME}/>
                            </div>
                            {!menuCollapsed ? (
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs text-gray-700 dark:text-gray-200 flex-wrap font-medium">
                                        {config.COURT_NAME}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 flex-wrap font-medium">
                                        {config.COURT_REGION}
                                    </p>
                                </div>) : null}
                        </div>
                    </div>
                    <nav
                        className="mt-2 flex-1 flex flex-col overflow-y-auto"
                        aria-label="Меню"
                    >
                        <PerfectScrollbar
                            className="main-menu-content"
                            options={{wheelPropagation: false}}
                        >
                            <div
                                className={classNames(
                                    "px-4 space-y-1",
                                    menuCollapsed ? "justify-center" : ""
                                )}
                            >
                                <NavMenuSectionHeader menuCollapsed={menuCollapsed} item={{header: "Главное меню"}}/>
                                <NavMenuItems
                                    items={menuData}
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
