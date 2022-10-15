import React from "react";
import { Menu } from "@headlessui/react";

import DataTableCore from "../DataTableCore";
import { classNames } from "../../../utils/classNames";
import { Avatar } from "../../Avatar";
import { getHighlightedText } from "../../../utils/getHighlightedText";
import useAuth from "../../../hooks/useAuth";

const UsersList = ({ rows }) => {

  const { user } = useAuth();

  const columns = Object.keys(rows[0]);

  const makeItem = (item, key, query) =>
    <div key={item.id}
         className={classNames("flex grow items-center p-2 justify-between", key % 2 === 0 ? "" : "bg-slate-100 dark:bg-slate-800")}>
      <div className='flex grow items-center'>
        <Avatar size="10" name={item.fullname} shape="circle" classname="mr-5" />
        <div className="flex flex-col items-start mr-7 w-72">
          <p
            className="font-medium text-sm text-slate-800 dark:text-slate-200 flex flex-wrap justify-start items-center text-left mb-1">{getHighlightedText(item?.fullname, query)}</p>
          <p
            className="text-sm text-slate-700 dark:text-slate-300 flex flex-wrap justify-start items-center text-left">{item?.profession}</p>
        </div>
        <div className="flex flex-col items-start">
          <p
            className="font-medium text-sm text-slate-800 dark:text-slate-200 flex justify-start items-center text-left mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-4 h-4 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
            </svg>
            {item?.room}
          </p>
          <p
            className="text-sm text-slate-700 dark:text-slate-300 flex justify-start items-center text-left">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-4 h-4 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {item?.phone}
          </p>
        </div>
      </div>
      {user.sudo === 1
        ? <Menu as="div" className="relative">
          <Menu.Button>
            <div className="flex-shrink-0 px-2">
              <div
                className="w-8 h-8 bg-white dark:bg-gray-800 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">Открыть меню</span>
                <svg className="w-5 h-5"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                     fill="currentColor" aria-hidden="true">
                  <path
                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </div>
            </div>
          </Menu.Button>
          <Menu.Items
            className="absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <a href={`/info/proxy-list/group/${item.id}/edit`}
                     className={`${
                       active ? "bg-indigo-500 text-white" : "text-gray-900 dark:text-gray-100"
                     } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Редактировать
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-indigo-500 text-white" : "text-gray-900 dark:text-gray-100"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Удалить
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
        : null}
    </div>
  ;

  const filter = (rows, query, columns) => {
    return rows.filter((row) =>
      columns.slice(1, 2).some(
        (column) =>row[column].toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  };

  return (
    <DataTableCore
      rows={rows}
      tableID="users-list"
      isLoading="false"
      columns={columns}
      itemsContainerClassNames="flex flex-col"
      initSortColumn={columns[1]}
      placeholder="Поиск по сотрудникам"
      filterCallback={filter}
      sortCallback={null}
      makeItem={makeItem}
      table={{ isTable: "false", startColumn: null, endColumn: null, columnNames: null }}
    />
  );
};

export default UsersList;