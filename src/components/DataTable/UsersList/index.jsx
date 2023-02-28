import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DataTableCore from '../DataTableCore';
import { Avatar } from '../../Avatar';
import { getHighlightedText } from '../../../utils/getHighlightedText';
import { getInitialsOnly } from '../../../utils/getInitials';
import { getAvatarColor } from '../../../utils/getAvatarColor';
import Card from '../../Card';
import DataTableToolBar from '../DataTableCore/DataTableToolBar';
import { getUniqueArrayValuesByKey } from '../../../utils/getArrayValuesByKey';
import { classNames } from '../../../utils/classNames';
import {PATH_INFO} from "../../../routes/paths";

const UsersList = ({ data, isLoading, error }) => {
  const [rows, setRows] = useState(data ?? []);
  const columns = Object.keys(data[0] ?? []);
  const [currentPage, setCurrentPage] = useState(0); // текущая страница
  const [selectedFilter, setSelectedFilter] = useState({ professionGroup: 'All' });
  const [userGroupList, setUserGroupList] = useState([]);

  useEffect(() => {
    setRows(data);
    setUserGroupList(getUniqueArrayValuesByKey(data ?? [], 'professionGroup').sort((a, b) => a.localeCompare(b)));
    // eslint-disable-next-line
  }, [isLoading]);

  const makeItem = (item, key, query) => (
    <Card classname="p-4" key={item?.id}>
      <div className="flex items-center gap-3">
        <a href={PATH_INFO.phoneBook.client.view(item?.id)} >
          <Avatar
            size="16"
            name={getInitialsOnly(item?.fullname)}
            color={getAvatarColor(item?.fullname)}
            shape="circle"
            classname={classNames('mr-4 hover:ring-2', `hover:ring-indigo-500/30`)}
          />
        </a>

        <div className="flex flex-col items-start">
          <a href={PATH_INFO.phoneBook.client.view(item?.id)} className="hover:underline hover:underline-offset-2 font-medium text-base text-gray-800 dark:text-gray-200 flex flex-wrap justify-start items-center text-left">
            {getHighlightedText(item?.fullname, query)}
          </a>
          <p className="text-sm text-indigo-700 dark:text-indigo-300 flex flex-wrap justify-start items-center text-left">
            {item?.profession}
          </p>
          <div className="flex items-center w-full gap-7 mt-3">
            <p className="flex items-center font-medium text-sm text-gray-600 dark:text-gray-400 flex justify-start items-center text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>
              <span className="ml-2">{item?.room}</span>
            </p>
            {item?.phone_worck !== '' ? (
              <p className="flex items-center font-medium text-sm text-gray-600 dark:text-gray-400 flex justify-start items-center text-left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <span className="ml-2">{item?.phone_worck}</span>
              </p>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
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
      columns.slice(1, 2).some((column) => row[column].toLowerCase().indexOf(query.toLowerCase()) > -1)
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
          ? row[key].toLowerCase().indexOf(filters[key].toLowerCase()) > -1
          : row[key].toLowerCase().indexOf(filters[key].toLowerCase()) === -1
      )
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

  return (
    <DataTableCore
      classname="mt-5"
      rows={rows}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      tableID="users-list"
      isLoading="false"
      error={error}
      columns={columns}
      itemsContainerClassNames="grid grid-cols-2 gap-4 bg-gray-100 dark:bg-gray-800 p-4"
      pseudoTableBodyClassNames="py-5"
      initSortColumn={columns[1]}
      placeholder="Поиск сотрудников по ФИО"
      filterCallback={filter}
      sortCallback={null}
      makeItem={makeItem}
      table={{ isTable: 'false', startColumn: null, endColumn: null, columnNames: null, coltosort: [] }}
    >
      <DataTableToolBar className="mt-3" isLoading={isLoading} error={error}>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="flex items-center ml-3 justify-start">
              <label
                htmlFor="professionGroup"
                className="shrink-0 block text-sm font-medium text-gray-700 dark:text-gray-300 mr-2"
              >
                Группа:
              </label>
              <select
                id="professionGroup"
                name="professionGroup"
                defaultValue={selectedFilter.professionGroup}
                onChange={filterSelectChangeHandler}
                className="grow-0 mt-1 block pl-3 pr-10 py-2 text-base bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="All">Все</option>
                {userGroupList.map((group, key) => (
                  <option key={group + key} value={group}>
                    {group}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div />
        </div>
      </DataTableToolBar>
    </DataTableCore>
  );
};

UsersList.propTypes = {
  /** Данные */
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.string,
  error: PropTypes.string,
};

export default UsersList;
