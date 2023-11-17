import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getUniqueArrayValuesByKey } from '../../../utils/getArrayValuesByKey';
import DataTableCore from '../DataTableCore';
import DataTableToolBar from '../DataTableCore/DataTableToolBar';
import axios from '../../../utils/axios';
import Toast, { toastStyles } from '../../Toast';
import BasicButton from '../../BasicButton';
import { PATH_ADMIN } from '../../../routes/paths';
import MenuItem from "./MenuItem";
import apiErrorHelper from "../../../utils/apiErrorHelper";

const UsersListAdmin = ({ data, isLoading, error, getFunc }) => {
  const [rows, setRows] = useState(data ?? []);
  const columns = Object.keys(data[0] ?? []);
  const [currentPage, setCurrentPage] = useState(0); // текущая страница
  const [selectedFilter, setSelectedFilter] = useState({ active: 1, sudo: 'All', profession: 'All' });
  const [userStatusList, setUserStatusList] = useState([1]);
  const [userSudoList, setUserSudoList] = useState([]);
  const [userProfessionList, setUserProfessionList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setRows(data ?? []);
    setUserStatusList(getUniqueArrayValuesByKey(data ?? [], 'active').sort());
    setUserSudoList(getUniqueArrayValuesByKey(data ?? [], 'sudo').sort());
    setUserProfessionList(getUniqueArrayValuesByKey(data ?? [], 'profession').sort().filter(profession => profession));
    // eslint-disable-next-line
  }, [isLoading]);

  const blockUser = async (userId) => {
    await axios
      .patch('/staff/blockuser', { 'id': userId })
      .then((res) => {
        const message = res.data.data.info;
        toast((t) => <Toast t={t} message={message} type='success' />, { className: toastStyles });
        getFunc();
      })
      .catch((err) => apiErrorHelper(err));
  };

  const filter = (rows, query, columns) => rows?.filter((row) => columns.slice(1, 6).some((column) => row[column].toLowerCase().indexOf(query.toLowerCase()) > -1));

  /** Фильтрует targetArray по массиву значений filters
   * @param targetArray
   * @param filters
   * @returns {*}
   */
  const selectFilterFunction = (targetArray, filters) => {
    const filterKeys = Object.keys(filters);

    return targetArray.filter((row) => filterKeys.every((key) => filters[key] !== 'All' ? row[key].toString().toLowerCase().indexOf(filters[key].toString().toLowerCase()) > -1 : row[key].toString().toLowerCase().indexOf(filters[key].toString().toLowerCase()) === -1));
  };

  /* const selectFilterFunction = (targetArray, filters) => {
    const filterKeys = Object.keys(filters);

    targetArray.filter((row) => filterKeys.every((key) => {

      if (filters[key] !== 'All') {
        return row[key].toString().toLowerCase().indexOf(filters[key].toLowerCase()) > -1
      }

      if (!isNaN(filters[key]) || !isNaN(parseInt(filters[key]))) {
        return row[key].toString().toLowerCase().indexOf(filters[key].toLowerCase()) === -1
      }
        return row[key].indexOf(filters[key]) === -1
    })
    )
  }; */

  selectFilterFunction.PropTypes = {
    targetArray: PropTypes.array.isRequired, filters: PropTypes.array.isRequired,
  };

  const filterSelectChangeHandler = (evt) => {
    const { value, id } = evt.target;
    const tempFilter = { ...selectedFilter, [id]: value };
    setSelectedFilter({ ...selectedFilter, [id]: value });
    setCurrentPage(0);
    setRows(selectFilterFunction(data, tempFilter));
  };

  const statusLabels = {
    0: 'Заблокирован', 1: 'Активен',
  };

  const sudoLabels = {
    0: 'Пользователь', 1: 'Администратор',
  };

  return (<DataTableCore
    classname='mt-5'
    rows={rows}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
    tableID='admin-users-list'
    isLoading={isLoading}
    error={error}
    columns={columns}
    itemsContainerClassNames='flex flex-col gap-3 bg-gray-100 dark:bg-gray-800 p-4'
    pseudoTableBodyClassNames='py-5'
    initSortColumn={columns[1]}
    placeholder='Поиск сотрудников по ФИО, ДР, должности, АРМ, IP'
    filterCallback={filter}
    sortCallback={null}
    makeItem={(item, key, query) => <MenuItem item={item} key={key} query={query} blockUser={(id) => blockUser(id)} /> }
    table={{ isTable: 'false', startColumn: null, endColumn: null, columnNames: null, coltosort: [] }}
  >
    <DataTableToolBar className='mt-3' isLoading={isLoading} error={error}>
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
              {userStatusList.map((status, key) => (<option key={status + key} value={status}>
                {statusLabels[status]}
              </option>))}
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
              {userSudoList.map((status, key) => (<option key={status + key} value={status}>
                {sudoLabels[status]}
              </option>))}
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
              {userProfessionList.map((profession, key) => (<option key={profession + key} value={profession}>
                {profession}
              </option>))}
            </select>
          </div>

        </div>
        <div
        >
          <BasicButton onClick={() => navigate(PATH_ADMIN.users.client.new)} type='button' size='medium'
                       variant='primary'>Добавить</BasicButton>
        </div>
      </div>
    </DataTableToolBar>
  </DataTableCore>);

};

export default UsersListAdmin;

UsersListAdmin.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.string,
  error: PropTypes.object,
  getFunc: PropTypes.func,
};