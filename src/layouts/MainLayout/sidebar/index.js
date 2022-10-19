import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { Avatar } from "../../../components/Avatar";
import { classNames } from "../../../utils/classNames";
import logo from "../../../assets/images/logo/gerbwoframe.svg";
import { COURT_NAME } from "../../../config";
import MenuSectionHeader from "./MenuSectionHeader";
import MenuItems from "./MenuItems";
import useAuth from "../../../hooks/useAuth";
import UserInfo from "./UserInfo";

const Sidebar = ({ menuData, menuVisibility, setMenuVisibility }) => {

  /** Стейты */
  const [groupOpen, setGroupOpen] = useState([]);
  const [groupActive, setGroupActive] = useState([]);
  const [currentActiveGroup, setCurrentActiveGroup] = useState([]);
  const { sidebar } = useAuth();

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
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
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
              className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white dark:bg-gray-900 border-r border-gray-200">
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
                    value="1"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setMenuVisibility(false)}
                  >
                    <span className="sr-only">Закрыть сайдбар</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="h-6 w-6 text-gray-800 dark:text-gray-100">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Avatar size="10" avatar={logo} shape="roundedMD"
                            classname="border border-gray-300 dark:border-gray-600 shadow"
                            name={COURT_NAME} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-600 dark:text-gray-300 flex-wrap font-medium line-clamp-2 w-48">
                      {COURT_NAME}
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
                  options={{ wheelPropagation: false }}
                >
                  <div className="px-4">
                    <MenuSectionHeader sidebar={sidebar}
                                       item={{ header: "Главное меню" }} />
                    <MenuItems
                      items={menuData}
                      groupOpen={groupOpen}
                      groupActive={groupActive}
                      setGroupOpen={setGroupOpen}
                      sidebar={sidebar}
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
          sidebar?.toString() === "0" ? "lg:w-20" : "lg:w-64",
          "sidebar-menu relative hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0"
        )}
      >
        <div
          className="flex flex-col flex-grow bg-white dark:bg-gray-900 pt-5 pb-4 overflow-y-auto border-r border-gray-200 dark:border-gray-600">
          <div
            className={classNames(
              "flex items-center justify-center flex-shrink-0 px-4 h-10 mb-3"
            )}
          >
            <div className="flex items-center space-x-4 w-full">
              <div className={classNames("flex-shrink-0", sidebar?.toString() === "0" ? "" : "justify-center")}>
                <Avatar size="10" avatar={logo} shape="roundedMD"
                        classname="border border-gray-300 dark:border-gray-600 shadow"
                        name={COURT_NAME} />
              </div>
              {sidebar?.toString() === "1" ? (
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-600 dark:text-gray-300 flex-wrap font-medium line-clamp-2">
                    {COURT_NAME}
                  </p>
                </div>) : null}
            </div>
          </div>
          <UserInfo />
          <nav
            className="flex-1 flex flex-col overflow-y-auto"
            aria-label="Меню"
          >
            <PerfectScrollbar
              className="main-menu-content"
              options={{ wheelPropagation: false }}
            >
              <div
                className={classNames(
                  "px-3",
                  sidebar?.toString() === "0" ? "justify-center" : ""
                )}
              >
                <MenuItems
                  items={menuData}
                  groupOpen={groupOpen}
                  groupActive={groupActive}
                  setGroupOpen={setGroupOpen}
                  sidebar={sidebar}
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

Sidebar.propTypes = {
  menuData: PropTypes.array,
  menuVisibility: PropTypes.bool.isRequired,
  setMenuVisibility: PropTypes.func.isRequired
};

export default Sidebar;
