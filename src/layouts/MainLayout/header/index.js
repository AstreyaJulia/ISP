import React, { Fragment, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { Avatar } from '../../../components/Avatar';
import Toast, { toastStyles } from '../../../components/Toast';
import useAuth from '../../../hooks/useAuth';
import { classNames } from '../../../utils/classNames';
import { PATH_AUTH, PATH_PROFILE, PATH_SETTINGS } from '../../../routes/paths';
import SearchResults from './SearchResults';
import { getInitialsOnly } from '../../../utils/getInitials';
import { getAvatarColor } from '../../../utils/getAvatarColor';
import { useSelector } from '../../../store';
import { getSearch, resetSearch } from '../../../store/slices/search';

const Header = ({ setMenuVisibility }) => {
  const searchTypes = {
    users: { selectText: 'Сотрудники', searchText: 'Поиск сотрудников' },
    inbox: { selectText: 'Входящая почта', searchText: 'Поиск входящей корреспонденции' },
    outbox: { selectText: 'Исходящая почта', searchText: 'Поиск исходящей корреспонденции' },
  };

  const [searchType, changeSearchType] = useState('users');
  const [searchResultsShow, changeSearchResultsShow] = useState(false);
  const [searchQuery, changeSearchQuery] = useState('');
  const { searchResults, isLoading, error } = useSelector((state) => state.search);

  /** Хуки */
  const { user, logout, onChangeSkin, theme, onChangeMenuCollapsed, sidebar } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      // Send Axios request here
      if (searchQuery.length < 3) {
        dispatch(resetSearch());
      } else {
        dispatch(getSearch(searchType, searchQuery));
        if (searchResultsShow === false) changeSearchResultsShow(true);
      }
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
    // eslint-disable-next-line
  }, [searchQuery, searchType]);

  /** Кнопка-переключатель узкого/широкого меню */
  const MenuToggler = () => {
    if (sidebar?.toString() === '0') {
      return (
        <button
          type="button"
          value={1}
          className="hidden lg:flex items-center justify-center sidebar-collapse-button bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => onChangeMenuCollapsed(1)}
          title="Развернуть меню"
        >
          <svg className="rotate-180" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path d="M0 0h24v24H0z" />
              <g fill="currentColor" fillRule="nonzero">
                <path
                  d="M14.3283 11.4343 18.5126 7.25c.4142-.4142.4142-1.0858 0-1.5-.4142-.4142-1.0858-.4142-1.5 0l-5.543 5.5429c-.3904.3905-.3904 1.0237 0 1.4142l5.543 5.5429c.4142.4142 1.0858.4142 1.5 0 .4142-.4142.4142-1.0858 0-1.5l-4.1843-4.1843a.8.8 0 0 1 0-1.1314Z"
                  opacity=".48"
                />
                <path d="M8.3283 11.4343 12.5126 7.25c.4142-.4142.4142-1.0858 0-1.5-.4142-.4142-1.0858-.4142-1.5 0l-5.543 5.5429c-.3904.3905-.3904 1.0237 0 1.4142l5.543 5.5429c.4142.4142 1.0858.4142 1.5 0 .4142-.4142.4142-1.0858 0-1.5l-4.1843-4.1843a.8.8 0 0 1 0-1.1314Z" />
              </g>
            </g>
          </svg>
        </button>
      );
    }
    return (
      <button
        type="button"
        className="sidebar-collapse-button bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={0}
        onClick={() => onChangeMenuCollapsed(0)}
        title="Свернуть меню"
      >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <g fill="currentColor" fillRule="nonzero">
              <path
                d="M14.3283 11.4343 18.5126 7.25c.4142-.4142.4142-1.0858 0-1.5-.4142-.4142-1.0858-.4142-1.5 0l-5.543 5.5429c-.3904.3905-.3904 1.0237 0 1.4142l5.543 5.5429c.4142.4142 1.0858.4142 1.5 0 .4142-.4142.4142-1.0858 0-1.5l-4.1843-4.1843a.8.8 0 0 1 0-1.1314Z"
                opacity=".48"
              />
              <path d="M8.3283 11.4343 12.5126 7.25c.4142-.4142.4142-1.0858 0-1.5-.4142-.4142-1.0858-.4142-1.5 0l-5.543 5.5429c-.3904.3905-.3904 1.0237 0 1.4142l5.543 5.5429c.4142.4142 1.0858.4142 1.5 0 .4142-.4142.4142-1.0858 0-1.5l-4.1843-4.1843a.8.8 0 0 1 0-1.1314Z" />
            </g>
          </g>
        </svg>
      </button>
    );
  };

  /** Переключалка темы
   * @returns {JSX.Element}
   * @constructor
   */
  const ThemeToggler = () => {
    if (theme === 0) {
      return (
        <button
          type="button"
          value={1}
          onClick={() => onChangeSkin(1)}
          className="skin-toggler p-1 rounded-full text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <span className="sr-only">Переключить тему</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          >
            <circle cy="8" cx="8" r="3.25" />
            <path d="m2.75 13.25.5-.5m9.5 0 .5.5m-.5-10 .5-.5m-10 .5-.5-.5m-.50 5.25h-1m13.5 0h-1m-5.75 5.75v1m0-13.5v1" />
          </svg>
        </button>
      );
    }
    return (
      <button
        type="button"
        value={0}
        onClick={() => onChangeSkin(0)}
        className="skin-toggler p-1 rounded-full text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <span className="sr-only">Переключить тему</span>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        >
          <path d="m1.75 8c0 3.45 2.8 6.25 6.25 6.25 3.41-.0027 6.25-3 6.25-6-1 .5-4 1.5-6-.5s-1-5-.5-6c-3 0-6 2.84-6 6.25z" />
        </svg>
      </button>
    );
  };

  const searchResultShowHandler = (state) => changeSearchResultsShow(state);

  const searchQueryHandler = (evt) => {
    changeSearchQuery(evt.target.value);
  };

  const searchQueryClearHandler = () => {
    changeSearchQuery('');
    dispatch(resetSearch());
    searchResultShowHandler(false);
  };

  /** Переключатель разделов поиска */
  const searchChangeHandler = (evt) => {
    evt.preventDefault();
    searchResultShowHandler(false);
    changeSearchType(evt.target.value);
    // Сброс ррезультатов поиска
    dispatch(resetSearch());
  };

  const searchResultsCloseHandler = () => searchResultShowHandler(false);

  const searchOnBlur = () => (searchQuery.length === 0 || searchQuery === '' ? searchResultShowHandler(false) : null);

  return (
    <div
      className={classNames(
        sidebar?.toString() === '0' ? 'lg:left-20' : 'lg:left-64',
        'left-0 fixed top-0 right-0 z-10 flex-shrink-0 flex h-16 shadow bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 lg:border-none'
      )}
    >
      <button
        type="button"
        className="px-4 border-r border-gray-200 dark:border-gray-700 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
        onClick={() => setMenuVisibility(true)}
      >
        <span className="sr-only">Открыть меню</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="ml-4 hidden lg:flex items-center md:ml-3">
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
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-gray-400 dark:text-gray-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search"
                name="search"
                onChange={searchQueryHandler}
                onBlur={searchOnBlur}
                value={searchQuery}
                className="block w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:text-gray-900 dark:focus:text-gray-400 focus:placeholder-gray-300 dark:placeholder-gray-400 dark:focus:placeholder-gray-700 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder={searchTypes[searchType].searchText}
                type="search"
              />
              <div className="absolute inset-y-0 right-0 flex items-center z-30">
                {searchQuery !== '' ? (
                  <button
                    onClick={searchQueryClearHandler}
                    title="Очистить строку поиска"
                    className="p-1 rounded-full text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:text-indigo-600"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                      />
                    </svg>
                  </button>
                ) : (
                  ''
                )}
                <label htmlFor="search-type" className="sr-only">
                  Разделы поиска
                </label>
                <select
                  id="search-type"
                  name="search-type"
                  value={searchType}
                  onChange={searchChangeHandler}
                  className="search-select focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-600 dark:text-gray-400 sm:text-sm rounded-md"
                >
                  <option value="users">Сотрудники</option>
                  <option value="inbox">Входящая почта</option>
                  <option value="outbox">Исходящая почта</option>
                </select>
              </div>
              <SearchResults
                show={searchResultsShow}
                query={searchQuery}
                searchQueryClose={searchResultsCloseHandler}
                searchType={searchType}
                searchresults={searchResults}
                isLoading={isLoading}
                error={error}
              />
            </div>
          </div>
        </div>

        {/** Правая часть заголовка */}
        <div className="ml-4 flex items-center md:ml-6">
          <ThemeToggler className="h-6 w-6" aria-hidden="true" />
          {/** Меню пользователя */}
          <Menu as="div" className="ml-4 relative">
            <div>
              <Menu.Button
                title="Открыть меню пользователя"
                className="user-dropdown max-w-xs bg-white dark:bg-gray-900 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 lg:p-1 lg:rounded-md lg:hover:bg-gray-50 dark:lg:hover:bg-gray-800"
              >
                <Avatar
                  size="10"
                  name={user?.fullname ? getInitialsOnly(user?.fullname) : ''}
                  color={user?.fullname ? getAvatarColor(user?.fullname) : 'indigo'}
                  avatar={user?.avatar}
                  shape="circle"
                />
                <span className="hidden ml-3 text-gray-700 dark:text-gray-300 text-sm font-medium lg:block">
                  <span className="sr-only">Открыть меню пользователя</span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 dark:text-gray-500 lg:block"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                    clipRule="evenodd"
                  />
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
              <Menu.Items className="dark:border dark:border-gray-700 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100 dark:divide-gray-800">
                <div className="px-4 py-3">
                  <p className="text-sm text-gray-700 dark:text-gray-400 mb-2">Ваш логин:</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-50 truncate">{user?.username}</p>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={PATH_PROFILE}
                        className={classNames(
                          active ? 'bg-gray-100 dark:bg-gray-700' : '',
                          'block px-4 py-2 text-sm text-gray-700 dark:text-gray-400'
                        )}
                      >
                        Мой профиль
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={PATH_SETTINGS}
                        className={classNames(
                          active ? 'bg-gray-100 dark:bg-gray-700' : '',
                          'block px-4 py-2 text-sm text-gray-700 dark:text-gray-400'
                        )}
                      >
                        Настройки
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={PATH_AUTH.login}
                        onClick={() => {
                          dispatch(logout);
                          toast((t) => <Toast t={t} message="Вы вышли из системы." type="success" />, {
                            className: toastStyles,
                          });
                        }}
                        className={classNames(
                          active ? 'bg-gray-100 dark:bg-gray-700' : '',
                          'block px-4 py-2 text-sm text-gray-700 dark:text-gray-400'
                        )}
                      >
                        Выход
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  setMenuVisibility: PropTypes.func.isRequired,
};

export default Header;
