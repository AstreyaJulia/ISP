import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import toast from "react-hot-toast";
import { Avatar } from "../../../components/Avatar";
import { getInitials } from "../../../utils/getInitials";
import Toast, { toastStyles } from "../../../components/Toast";
import { classNames } from "../../../utils/classNames";
import useAuth from "../../../hooks/useAuth";
import { PATH_AUTH } from "../../../routes/paths";

const Header = (props) => {

  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate(PATH_AUTH.login, { replace: true });

    } catch (error) {
      console.error(error);
      // toast enqueueSnackbar('Невозможно выйти!', { variant: 'error' });
    }
  };

  const dispatch = useDispatch();

  const {
    menuCollapsed, setMenuVisibility, setMenuCollapsed, skin, changeSkin
  } = props;

  /** Кнопка-переключатель узкого/широкого меню */
  const MenuToggler = () => {
    if (menuCollapsed) {
      return (<button
        className="hidden lg:flex items-center justify-center sidebar-collapse-button bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={() => setMenuCollapsed(false)}
        title="Развернуть меню"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
             className="feather feather-maximize-2">
          <polyline points="15 3 21 3 21 9"/>
          <polyline points="9 21 3 21 3 15"/>
          <line x1="21" y1="3" x2="14" y2="10"/>
          <line x1="3" y1="21" x2="10" y2="14"/>
        </svg>
      </button>);
    }
    return (<button
      className="sidebar-collapse-button bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      onClick={() => setMenuCollapsed(true)}
      title="Свернуть меню"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
           className="feather feather-minimize-2">
        <polyline points="4 14 10 14 10 20"/>
        <polyline points="20 10 14 10 14 4"/>
        <line x1="14" y1="10" x2="21" y2="3"/>
        <line x1="3" y1="21" x2="10" y2="14"/>
      </svg>
    </button>);

  };

  /** Переключалка темы
   * @returns {JSX.Element}
   * @constructor
   */
  const ThemeToggler = () => {
    if (skin === "dark") {
      return <svg onClick={() => changeSkin("light")}
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="feather feather-sun">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>;
    }
    return <svg onClick={() => changeSkin("dark")}
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>;

  };

  return (<div
    className={classNames(menuCollapsed ? "lg:left-20" : "lg:left-64", "left-0 fixed top-0 right-0 z-10 flex-shrink-0 flex h-16 shadow bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 lg:border-none")}
  >
    <button
      type="button"
      className="px-4 border-r border-gray-200 dark:border-gray-700 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
      onClick={() => setMenuVisibility(true)}
    >
      <span className="sr-only">Открыть меню</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
           className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
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
        <button
          type="button"
          className="skin-toggler bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
                                    <span className="sr-only">
                                        Переключить тему
                                    </span>
          <ThemeToggler
            className="h-6 w-6"
            aria-hidden="true"
          />
        </button>
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                   fill="currentColor" className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 dark:text-gray-500 lg:block">
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
                      handleLogout();
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
