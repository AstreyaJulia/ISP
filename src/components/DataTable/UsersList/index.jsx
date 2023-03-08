import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DataTableCore from '../DataTableCore';
import { Avatar } from '../../Avatar';
import { getHighlightedText } from '../../../utils/getHighlightedText';
import {getInitials, getInitialsOnly} from '../../../utils/getInitials';
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
    <Card classname="py-4 px-5" key={item?.id}>
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
          <p
              className='text-sm text-gray-500 dark:text-gray-400 flex flex-wrap'>
            <span>{item?.profession}</span>
            {item?.affiliationJudgeName ?
                <span className='text-gray-900 dark:text-gray-50'>: {getInitials(item?.affiliationJudgeName)}</span> : ''}
          </p>
          <div className="flex flex-col w-full gap-2 mt-3">
            <p className="flex gap-3 items-center font-medium text-sm text-gray-600 dark:text-gray-400 flex justify-start items-center text-left">
              <svg xmlns='http://www.w3.org/2000/svg'
                   viewBox='0 0 24 24'
                   fill='currentColor'
                   className='h-5 w-5 text-gray-400'
              ><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><rect height="2" width="2" x="17" y="7"/><rect height="2" width="2" x="17" y="11"/><rect height="2" width="2" x="17" y="15"/><path d="M1,11v10h6v-5h2v5h6V11L8,6L1,11z M13,19h-2v-5H5v5H3v-7l5-3.5l5,3.5V19z"/><polygon points="10,3 10,4.97 12,6.4 12,5 21,5 21,19 17,19 17,21 23,21 23,3"/></g></g></svg>
              <span>{item?.room}</span>
            </p>
            {item?.phone_worck !== '' ? (
              <p className="flex gap-3 items-center font-medium text-sm text-gray-600 dark:text-gray-400 flex justify-start items-center text-left">
                <svg xmlns='http://www.w3.org/2000/svg'
                     viewBox='0 0 24 24'
                     fill='currentColor'
                     className='h-5 w-5 text-gray-400'
                ><path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"/></svg>
                <span>{item?.phone_worck}</span>
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
