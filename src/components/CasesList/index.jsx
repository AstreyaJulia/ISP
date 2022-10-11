import React, { useState } from "react";
import { Disclosure } from '@headlessui/react'
import { classNames } from "../../utils/classNames";
import { Card } from "../Card";
import { outdatedCases } from "../../@mock/SampleData";
import { Avatar } from "../Avatar";

const tabs = [
  {
    name: "Все",
    href: "#",
    icon: <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
               width="24px" fill="#000000">
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <g>
          <rect height="4" opacity=".3" width="4" x="5" y="5" />
          <rect height="4" opacity=".3" width="4" x="5" y="15" />
          <rect height="4" opacity=".3" width="4" x="15" y="15" />
          <rect height="4" opacity=".3" width="4" x="15" y="5" />
          <path d="M3,21h8v-8H3V21z M5,15h4v4H5V15z" />
          <path d="M3,11h8V3H3V11z M5,5h4v4H5V5z" />
          <path d="M13,21h8v-8h-8V21z M15,15h4v4h-4V15z" />
          <path d="M13,3v8h8V3H13z M19,9h-4V5h4V9z" />
        </g>
      </g>
    </svg>,
    current: false
  },
  {
    name: "Не оконченные",
    href: "#",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.25 12.15L11 13V7h1.5v5.25l4.5 2.67-.75 1.23z"
        opacity=".3" />
      <path
        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
    </svg>,
    current: false
  },
  {
    name: "Приостановленные",
    href: "#",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm5 9H7v-2h10v2z" opacity=".3" />
      <path
        d="M7 11h10v2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>,
    current: false
  },
  {
    name: "Без движения",
    href: "#",
    icon: <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
               width="24px" fill="#000000">
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <g>
          <path
            d="M12,4c-4.42,0-8,3.58-8,8c0,4.42,3.58,8,8,8s8-3.58,8-8C20,7.58,16.42,4,12,4z M7,13.5 c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C8.5,12.83,7.83,13.5,7,13.5z M12,13.5 c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C13.5,12.83,12.83,13.5,12,13.5z M17,13.5 c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C18.5,12.83,17.83,13.5,17,13.5z"
            opacity=".3" />
          <path
            d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8 c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z" />
          <circle cx="7" cy="12" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="17" cy="12" r="1.5" />
        </g>
      </g>
    </svg>,
    current: true
  }
];


const CasesList = () => {

  const [query, setQuery] = useState("");
  const [currentTab, setCurrentTab] = useState(0);

  const searchQueryClearHandler = () => {
    setQuery("");
  };

  const changeTabHandler = (index) => {
    setCurrentTab(index);
  };

  const caseTypesSettings = {
    A: {color: 'blue'},
    G: {color: 'green'},
    U: {color: 'red'},
    A1: {color: 'indigo'},
    M: {color: 'orange'},
  }


  return (
    <Card classname="mt-4">
      <div className="px-4 py-5 sm:p-3">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="table-search" className="sr-only">
            Поиск
          </label>
          <div className="search-input mt-1 relative rounded-md shadow-sm">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-gray-400 dark:text-gray-500">
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <input
              id="table-search"
              name="table-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="block w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md py-3 pl-10 pr-3 text-sm placeholder-gray-600 focus:outline-none focus:text-gray-900 dark:focus:text-gray-400 focus:placeholder-gray-300 dark:placeholder-gray-400 dark:focus:placeholder-gray-700 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Поиск"
              type="search"
            />
            <div className="absolute inset-y-0 right-0 flex items-center z-30">
              {query !== "" ?
                <button onClick={searchQueryClearHandler} title="Очистить строку поиска"
                        className="mr-3 p-1 rounded-full text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:text-indigo-600"
                        type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                       stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                  </svg>
                </button>
                : ""}
            </div>
          </div>

        </div>
      </div>
      <div className="px-4 py-5 sm:p-4">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab, key) => (
              <a
                key={tab.name}
                href={tab.href}
                onClick={() => changeTabHandler(key)}
                className={classNames(
                  tab.name === tabs[currentTab].name
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                  "group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
                )}
                aria-current={tab.name === tabs[currentTab].name ? "page" : undefined}
              >
                <span>{tab.name}</span>
              </a>
            ))}
          </nav>
        </div>
        <div className='flex flex-col gap-2 my-4'>
          {outdatedCases.map((item) =>
            <Disclosure key={item.case_num}>
              <Disclosure.Button className="py-3 px-2 w-full flex items-center bg-slate-50 rounded-md">
                <div className='flex grow items-center'>
                  <Avatar size='8' shape='circle' name={item.type} color={caseTypesSettings[item.type].color} classname='mr-3'/>
                  <div className='flex flex-col items-start'>
                    <p className='font-bold text-sm text-slate-800 flex flex-wrap line-clamp-1 justify-start items-center text-left'>{item.case_num}</p>
                    <p className='font-medium text-sm text-slate-700 flex flex-wrap line-clamp-1 justify-start items-center text-left'>{item.case_parts}</p>
                  </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-3 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                {item.case_codex}
                {item.case_info}
              </Disclosure.Panel>
            </Disclosure>
          )
          }
        </div>

      </div>
    </Card>
  );
};

export default CasesList;