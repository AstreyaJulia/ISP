import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { intervalToDuration, parse } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Menu } from '@headlessui/react';
import toast from "react-hot-toast";

import { getUniqueArrayValuesByKey } from '../../../utils/getArrayValuesByKey';
import Card from '../../Card';
import { Avatar } from '../../Avatar';
import { getInitials, getInitialsOnly } from '../../../utils/getInitials';
import { getAvatarColor } from '../../../utils/getAvatarColor';
import { getHighlightedText } from '../../../utils/getHighlightedText';
import DataTableCore from '../DataTableCore';
import DataTableToolBar from '../DataTableCore/DataTableToolBar';
import Badge from '../../Badge';
import { classNames } from '../../../utils/classNames';
import axios from "../../../utils/axios";
import Toast, {toastStyles} from "../../Toast";
import {setSession} from "../../../utils/jwt";

const UsersListAdmin = ({ data, isLoading, error, getFunc }) => {
  const [rows, setRows] = useState(data ?? []);
  const columns = Object.keys(data[0] ?? []);
  const [currentPage, setCurrentPage] = useState(0); // текущая страница
  const [selectedFilter, setSelectedFilter] = useState({ active: 1, sudo: 'All', profession: 'All' });
  const [userStatusList, setUserStatusList] = useState([1]);
  const [userSudoList, setUserSudoList] = useState([]);
  const [userProfessionList, setUserProfessionList] = useState([]);
  const [copied, setIsCopied] = useState('false');

  useEffect(() => {
    setRows(data);
    setUserStatusList(getUniqueArrayValuesByKey(data ?? [], 'active').sort());
    setUserSudoList(getUniqueArrayValuesByKey(data ?? [], 'sudo').sort());
    setUserProfessionList(getUniqueArrayValuesByKey(data ?? [], 'profession').sort().filter(profession => profession));
    setSelectedFilter({ ...selectedFilter, 'active': 1 });
    // eslint-disable-next-line
  }, [isLoading]);

  const handleInfoCopy = () => {
    setIsCopied('true');
    setTimeout(() => {
      setIsCopied('false');
    }, 1500);
  };

  const blockUser = async (userId) => {
    await axios
        .patch('/staff/blockuser', {'id': userId})
        .then((res) => {
          const message = res.data.data.info;
          toast((t) => <Toast t={t} message={message} type='success' />, { className: toastStyles });
          getFunc();
        })
        .catch((err) => {
          const error = err.message && err.info ? `${err.message}: ${err.info}` : err.toString();
          if (err.code.toString() === '401') {
            setSession(null);
          }
          toast((t) => <Toast t={t} message={error} type='error' />, { className: toastStyles });
        });
  }


  const makeItem = (item, key, query) => (
    <Card classname='p-4 flex justify-between items-center' key={item?.id}>
      <div className='flex gap-5 items-center'>
        <a href={`/admin/users/${item?.id}/view`} >
          <Avatar
            size='8'
            name={getInitialsOnly(item?.fullname ? item?.fullname : item?.username)}
            color={item?.fullname ? getAvatarColor(item?.fullname) : 'indigo'}
            shape='circle'
            classname={classNames('mr-1 hover:ring-2', `hover:ring-indigo-500/30`)}
          />
        </a>

        <div className='flex flex-col items-start justify-center'>
          <a href={`/admin/users/${item?.id}/view`}
            className='font-medium text-base text-gray-800 dark:text-gray-200 flex flex-wrap w-48 items-center hover:underline hover:underline-offset-2'>
            <span
              className={classNames('mr-2 w-3 h-3 rounded-full', item?.active.toString() === '0' ? 'bg-red-400 dark:bg-red-600' : 'bg-green-400 dark:bg-green-600')} />
            <span>{getHighlightedText(item?.username, query)}</span>
          </a>
          {item?.sudo.toString() === '1' ?
            <Badge item='Админ' size='small' color='red' shape='rounded' className='ml-5 mt-1' /> : ''
          }
        </div>

        <div className='flex flex-col items-start'>
          <p
            className='font-medium text-base text-gray-600 dark:text-gray-400 flex flex-wrap w-96'>
            {item?.fullname ? getHighlightedText(item?.fullname, query) : null}
          </p>
          <p
            className='text-sm text-indigo-700 dark:text-indigo-400 flex flex-wrap'>
            <span>{item?.profession}</span>
            {item?.affiliationJudge ? <span>: {getInitials(item?.affiliationJudge)}</span> : ''}
          </p>
        </div>

        <div className='flex flex-col items-start justify-center'>
          {item?.workplace !== 'Нет здания, нет кабинета, нет рабочего места' ? <p
            className='text-sm text-gray-800 dark:text-gray-200 flex items-center'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' className='w-4 h-4 text-gray-400 mr-2'>
              <path fill='currentColor'
                    d='M11 3V0H2v14H0v1h7v-5h2V8h5V3h-3zm-5 7H4V8h2v2zm0-3H4V5h2v2zm0-3H4V2h2v2zm3 3H7V5h2v2zm0-3H7V2h2v2zm4 3h-2V5h2v2zm1 4h2v5H8v-5h2V9h4v2z' />
            </svg>
            {getHighlightedText(item?.workplace, query)}
          </p> : <svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true'
                      viewBox='0 0 24 24' className='w-4 h-4 text-gray-400'>
            <g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'>
              <path d='M5 12H3l4.497-4.497m1.999-1.999L12 3l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2m0-4v-3' />
              <path d='M9 21v-6a2 2 0 0 1 2-2h2m2 2v6M3 3l18 18' />
            </g>
          </svg>}
          {item?.ip ? <p
            className='mt-1 text-sm text-gray-800 dark:text-gray-200 flex items-center'>
            <CopyToClipboard
              text={item?.ip}
              onCopy={() => handleInfoCopy()}
            >
              <button
                className='relative bg-transparent border-0 mr-2 shrink-0'
                type='button'
                title={copied === 'false' ? 'Скопировать IP' : 'Скопировано!'}
              >
                {copied === 'false' ? (
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-4 h-4 fill-gray-400'>
                    <path
                      d='M4.26,12A8.24293,8.24293,0,0,1,4,10a8.24293,8.24293,0,0,1,.26-2H7.64a16.513,16.513,0,0,0-.14,2,16.51385,16.51385,0,0,0,.14,2H9.66a14.7101,14.7101,0,0,1-.16-2,14.58144,14.58144,0,0,1,.16-2h4.68a14.59092,14.59092,0,0,1,.16,2,14.71971,14.71971,0,0,1-.16,2H16.36a16.51182,16.51182,0,0,0,.14-2,16.511,16.511,0,0,0-.14-2h3.38A8.24047,8.24047,0,0,1,20,10a8.24047,8.24047,0,0,1-.26,2h2.0589A9.99979,9.99979,0,1,0,2.20067,12ZM18.92,6H15.97a15.65077,15.65077,0,0,0-1.38-3.56A8.02951,8.02951,0,0,1,18.92,6ZM12,2.04A14.08639,14.08639,0,0,1,13.91,6H10.09A14.08623,14.08623,0,0,1,12,2.04Zm-2.59.4A15.64752,15.64752,0,0,0,8.03,6H5.08A7.98674,7.98674,0,0,1,9.41,2.44Z' />
                    <rect x='12.74854' y='17.49463' width='2' height='1' />
                    <path
                      d='M20.998,14H3.002A2.002,2.002,0,0,0,1,16.002v5.996A2.002,2.002,0,0,0,3.002,24H20.998A2.002,2.002,0,0,0,23,21.998V16.002A2.002,2.002,0,0,0,20.998,14ZM9.25146,22.00537h-1.5v-6h1.5Zm6.99708-3.51074a1.47326,1.47326,0,0,1-1.5,1.5h-2v2h-1.5v-6h3.5a1.47326,1.47326,0,0,1,1.5,1.5Z' />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5 text-green-500'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                )}
              </button>
            </CopyToClipboard>
            <span>{item?.ip}</span>
          </p> : ''}
        </div>
      </div>
      <Menu as='div' className='relative'>
        <Menu.Button>
          <div className='flex-shrink-0 px-2'>
            <div
              className='w-8 h-8 bg-white dark:bg-gray-800 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              <span className='sr-only'>Открыть меню</span>
              <svg
                className='w-5 h-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
              </svg>
            </div>
          </div>
        </Menu.Button>
        <Menu.Items
          className='absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='px-1 py-1 '>

            <Menu.Item>
              {({ active }) => (
                <a
                  href={`/admin/users/${item?.id}/edit`}
                  className={`${
                    active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                  } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                >
                  <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'
                       fill='currentColor' className='h-4 w-4 text-gray-500 dark:text-gray-600 mr-2'>
                    <path d='M0 0h24v24H0V0z' fill='none' />
                    <path
                      d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z' />
                  </svg>
                  Редактировать
                </a>
              )}
            </Menu.Item>

          </div>

          <div className='px-1 py-1'>

            <Menu.Item>
              {({ active }) => (
                <button
                  type='button'
                  onClick={() => blockUser(item?.id)}
                  className={`${
                    active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                  } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                >
                  <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'
                       fill='currentColor' className='h-4 w-4 text-gray-500 dark:text-gray-600 mr-2'>
                    <path d='M0 0h24v24H0V0z' fill='none' />
                    <path
                      d='M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z' />
                  </svg>
                  Заблокировать
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </Card>
  );

  makeItem.propTypes = {
    /** Данные */
    item: PropTypes.object.isRequired,
    key: PropTypes.number.isRequired,
    query: PropTypes.string,
  };

  const filter = (rows, query, columns) =>
    rows?.filter((row) =>
      columns.slice(1, 6).some((column) => row[column].toLowerCase().indexOf(query.toLowerCase()) > -1),
    );

  /** Фильтрует targetArray по массиву значений filters
   * @param targetArray
   * @param filters
   * @returns {*}
   */
  const selectFilterFunction = (targetArray, filters) => {
    const filterKeys = Object.keys(filters);

    return targetArray.filter((row) =>
      filterKeys.every((key) =>
        filters[key] !== 'All'
          ? row[key].toString().toLowerCase().indexOf(filters[key].toLowerCase()) > -1
          : row[key].toString().toLowerCase().indexOf(filters[key].toLowerCase()) === -1,
      ),
    );
  };

  selectFilterFunction.PropTypes = {
    targetArray: PropTypes.array.isRequired,
    filters: PropTypes.array.isRequired,
  };

  const filterSelectChangeHandler = (evt) => {
    const { value, id } = evt.target;
    const tempFilter = { ...selectedFilter, [id]: value };
    setSelectedFilter({ ...selectedFilter, [id]: value });
    setCurrentPage(0);
    setRows(selectFilterFunction(data, tempFilter));
  };

  const statusLabels = {
    0: 'Заблокирован',
    1: 'Активен',
  };

  const sudoLabels = {
    0: 'Пользователь',
    1: 'Админ',
  };

  return (
    <DataTableCore
      classname='mt-5'
      rows={rows}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      tableID='admin-users-list'
      isLoading='false'
      error={error}
      columns={columns}
      itemsContainerClassNames='flex flex-col gap-4 bg-gray-100 dark:bg-gray-800 p-4'
      pseudoTableBodyClassNames='py-5'
      initSortColumn={columns[1]}
      placeholder='Поиск сотрудников по ФИО, ДР, должности, АРМ, IP'
      filterCallback={filter}
      sortCallback={null}
      makeItem={makeItem}
      table={{ isTable: 'false', startColumn: null, endColumn: null, columnNames: null, coltosort: [] }}
    >
      <DataTableToolBar className='mt-3'>
        <div className='flex items-center justify-between w-full  flex-wrap'>
          <div className='flex items-center gap-2'>
            <div className='flex items-center ml-3 justify-start'>
              <label
                htmlFor='active'
                className='shrink-0 block text-sm font-medium text-gray-700 dark:text-gray-300 mr-2'
              >
                Статус:
              </label>
              <select
                id='active'
                name='active'
                defaultValue={selectedFilter.active}
                onChange={filterSelectChangeHandler}
                className='grow-0 mt-1 block pl-3 pr-10 py-2 text-base bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
              >
                <option value='All'>Все</option>
                {userStatusList.map((status, key) => (
                  <option key={status + key} value={status}>
                    {statusLabels[status]}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex items-center ml-3 justify-start'>
              <label
                htmlFor='sudo'
                className='shrink-0 block text-sm font-medium text-gray-700 dark:text-gray-300 mr-2'
              >
                Права:
              </label>
              <select
                id='sudo'
                name='sudo'
                defaultValue={selectedFilter.sudo}
                onChange={filterSelectChangeHandler}
                className='grow-0 mt-1 block pl-3 pr-10 py-2 text-base bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
              >
                <option value='All'>Все</option>
                {userSudoList.map((status, key) => (
                  <option key={status + key} value={status}>
                    {sudoLabels[status]}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex items-center ml-3 justify-start'>
              <label
                htmlFor='profession'
                className='shrink-0 block text-sm font-medium text-gray-700 dark:text-gray-300 mr-2'
              >
                Должность:
              </label>
              <select
                id='profession'
                name='profession'
                defaultValue={selectedFilter.profession}
                onChange={filterSelectChangeHandler}
                className='grow-0 mt-1 block pl-3 pr-10 py-2 text-base bg-white dark:bg-gray-900 border-gray-300 dark:border-slate-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
              >
                <option value='All'>Все</option>
                {userProfessionList.map((profession, key) => (
                  <option key={profession + key} value={profession}>
                    {profession}
                  </option>
                ))}
              </select>
            </div>

          </div>
          <div
          >
            <a href='/admin/users/new' className='inline-flex items-center justify-center bg-white dark:bg-gray-900 border border-gray-300 rounded-md shadow-sm leading-4 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:hover:bg-gray-700 px-6 py-3 text-base'>Добавить</a>
          </div>
        </div>
      </DataTableToolBar>
    </DataTableCore>
  );

};

export default UsersListAdmin;
