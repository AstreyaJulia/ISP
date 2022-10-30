import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DataTableCore from '../DataTableCore';
import { Avatar } from '../../Avatar';
import { getHighlightedText } from '../../../utils/getHighlightedText';
import { getInitialsOnly } from '../../../utils/getInitials';
import { getAvatarColor } from '../../../utils/getAvatarColor';
import Card from '../../Card';

const UsersList = ({ data, isLoading }) => {
  const [rows, setRows] = useState(data ?? []);
  const columns = Object.keys(data[0] ?? []);
  const [currentPage, setCurrentPage] = useState(0); // текущая страница

  useEffect(() => {
    setRows(data);
    // eslint-disable-next-line
  }, [isLoading]);

  const makeItem = (item, key, query) => (
    <Card classname="p-4" key={item?.id}>
      <div className="flex items-center gap-3">
        <Avatar
          size="16"
          name={getInitialsOnly(item?.fullname)}
          color={getAvatarColor(item?.fullname)}
          shape="circle"
          classname="mr-4"
        />
        <div className="flex flex-col items-start">
          <p className="font-medium text-base text-slate-800 dark:text-slate-200 flex flex-wrap justify-start items-center text-left">
            {getHighlightedText(item?.fullname, query)}
          </p>
          <p className="text-sm text-indigo-700 dark:text-indigo-300 flex flex-wrap justify-start items-center text-left">
            {item?.profession}
          </p>
          <div className="flex items-center w-full gap-7 mt-3">
            <p className="flex items-center font-medium text-sm text-slate-600 dark:text-slate-400 flex justify-start items-center text-left">
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
              <p className="flex items-center font-medium text-sm text-slate-600 dark:text-slate-400 flex justify-start items-center text-left">
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

  return (
    <DataTableCore
      classname="mt-5"
      rows={rows}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      tableID="users-list"
      isLoading="false"
      columns={columns}
      itemsContainerClassNames="grid grid-cols-2 gap-4 bg-slate-100 dark:bg-slate-800 p-4"
      pseudoTableBodyClassNames="py-5"
      initSortColumn={columns[1]}
      placeholder="Поиск сотрудников по ФИО"
      filterCallback={filter}
      sortCallback={null}
      makeItem={makeItem}
      table={{ isTable: 'false', startColumn: null, endColumn: null, columnNames: null, coltosort: [] }}
    />
  );
};

UsersList.propTypes = {
  /** Данные */
  data: PropTypes.array.isRequired,
};

export default UsersList;
