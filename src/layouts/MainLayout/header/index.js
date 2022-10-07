import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Maximize2, Minimize2, Moon, Sun } from "react-feather";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import toast from "react-hot-toast";
import { Avatar } from "../../../components/Avatar";
import useSettings from "../../../hooks/useSettings";
import { getInitials } from "../../../utils/getInitials";
import Toast, { toastStyles } from "../../../components/Toast";
import useAuth from "../../../hooks/useAuth";
import { classNames } from "../../../utils/classNames";

const Header = (props) => {

  const { logout } = useAuth();
  const dispatch = useDispatch();

  const {
    user, menuCollapsed, setMenuVisibility, setMenuCollapsed
  } = props;

  /** Кнопка-переключатель узкого/широкого меню */
  const MenuToggler = () => {
    if (menuCollapsed) {
      return (<button
        className="hidden lg:flex items-center justify-center sidebar-collapse-button bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={() => setMenuCollapsed(false)}
        title="Развернуть меню"
      >
        <Maximize2 />
      </button>);
    }
    return (<button
      className="sidebar-collapse-button bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      onClick={() => setMenuCollapsed(true)}
      title="Свернуть меню"
    >
      <Minimize2 />
    </button>);

  };

  /** Хуки */
  const { skin, onChangeSkin } = useSettings();

  /** Переключалка темы
   * @returns {JSX.Element}
   * @constructor
   */
  const ThemeToggler = () => {
    if (skin === "dark") {
      return <button
        type="button"
        value="dark"
        onClick={() => onChangeSkin("light")}
        className="skin-toggler bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <span className="sr-only">
        Переключить тему
        </span>
        <Sun className="h-6 w-6" />
      </button>
        ;
    }
    return <button
      type="button"
      value="light"
      onClick={() => onChangeSkin("dark")}
      className="skin-toggler bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <span className="sr-only">
        Переключить тему
      </span>
      <Moon className="h-6 w-6" />
    </button>
      ;

  };

  return (
    <div
      className={classNames(menuCollapsed ? "lg:left-20" : "lg:left-64", "left-0 fixed top-0 right-0 z-10 flex-shrink-0 flex h-16 shadow bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 lg:border-none")}
    >
      <button
        type="button"
        className="px-4 border-r border-gray-200 dark:border-gray-700 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
        onClick={() => setMenuVisibility(true)}
      >
        <span className="sr-only">Открыть меню</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd" />
        </svg>

      </button>
      <div className="ml-4 hidden lg:flex items-center md:ml-6">
        <MenuToggler />
      </div>

      <div className="flex-1 px-4 flex justify-end sm:justify-between content-center sm:px-6 lg:px-8">
        {/* Поиск */}
        <div className="hidden flex-1 sm:flex px-6 py-3 xl:px-0 content-center">
          <div className="w-full">
            <label htmlFor="search" className="sr-only">
              Поиск
            </label>
            <div className="search-input mt-1 relative rounded-md shadow-sm">
              <div
                className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                     className="h-5 w-5 text-gray-400 dark:text-gray-500">
                  <path fillRule="evenodd"
                        d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                        clipRule="evenodd" />
                </svg>

              </div>
              <input
                id="search"
                name="search"
                className="block w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 dark:focus:text-gray-400 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Поиск"
                type="search"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">
                  Разделы поиска
                </label>
                <select
                  id="search-type"
                  name="search-type"
                  className="search-select focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                >
                  <option>Сотрудники</option>
                  <option>Входящая почта</option>
                  <option>Исходящая почта</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/** Правая часть заголовка */}
        <div className="ml-4 flex items-center md:ml-6">

          <ThemeToggler
            className="h-6 w-6"
            aria-hidden="true"
          />
          {/** Меню пользователя */}
          <Menu as="div" className="ml-4 relative">
            <div>
              <Menu.Button
                className="user-dropdown max-w-xs bg-white dark:bg-gray-900 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 lg:p-1 lg:rounded-md lg:hover:bg-gray-50 dark:lg:hover:bg-gray-800">
                {user.fullname ?
                  <Avatar size="10" name={user.fullname} avatar={user.avatar} shape="circle" /> :
                  <Skeleton
                    className="bg-gray-500/30 after:bg-gradient-to-r from-gray-400/10 via-gray-500/10 to-gray-400/10" />}
                <span
                  className="hidden ml-3 text-gray-700 dark:text-gray-300 text-sm font-medium lg:block">
                                                <span className="sr-only">
                                                    Открыть меню пользователя
                                                </span>
                  {user.fullname ? getInitials(user.fullname) : <Skeleton
                    className="bg-gray-500/30 after:bg-gradient-to-r from-gray-400/10 via-gray-500/10 to-gray-400/10" />}

                                            </span>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                     className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 dark:text-gray-500 lg:block">
                  <path fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                        clipRule="evenodd" />
                </svg>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className="dark:border dark:border-gray-700 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100 dark:divide-gray-800">
                <div className="px-4 py-3">
                  <p className="text-sm text-gray-700 dark:text-gray-400">Выполнен вход</p>
                  {user.username ?
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-50 truncate">{user.username}</p> :
                    <Skeleton
                      className="bg-gray-500/30 after:bg-gradient-to-r from-gray-400/10 via-gray-500/10 to-gray-400/10" />}

                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (<Link
                      to="/myprofile"
                      className={classNames(active ? "bg-gray-100 dark:bg-gray-700" : "", "block px-4 py-2 text-sm text-gray-700 dark:text-gray-400")}
                    >
                      Мой Профиль
                    </Link>)}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (<Link
                      to="/auth"
                      onClick={() => {
                        dispatch(logout);
                        toast(t => <Toast t={t} message="Вы вышли из системы."
                                          type="success" />, { className: toastStyles });
                      }}
                      className={classNames(active ? "bg-gray-100 dark:bg-gray-700" : "", "block px-4 py-2 text-sm text-gray-700 dark:text-gray-400")}
                    >
                      Выход
                    </Link>)}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>);

};

export default Header;
