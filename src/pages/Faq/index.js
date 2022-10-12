import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";

import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";
import { classNames } from "../../utils/classNames";

const Faq = () => {
  const breadcrumbs = [{ name: "База знаний", href: "", current: true }];

  const faqPages = [{
    title: "Категории дел",
    href: "",
    children: [
      { title: "Категории гражданских дел", href: "/g-cases-category" },
      { title: "Категории материалов", href: "/m-cases-category" }
    ]
  }
  ];

  const columns = Object.keys(faqPages[0]);

  const [sortedBy, setSortedBy] = useState({
    column: columns[0],
    asc: false
  });

  const [query, setQuery] = useState("");

  function sort(rows) {
    const { column, asc } = sortedBy;
    return rows.sort((a, b) => {
      if (a[column].toString() > b[column].toString()) return asc ? -1 : 1;
      if (b[column].toString() > a[column].toString()) return asc ? 1 : -1;
      return 0;
    });
  }

  function filter(rows) {
    return rows.filter((row) =>
      columns.some(
        (column) => row[column].toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  }

  const sortFilter = () => sort(filter(faqPages));

  const searchQueryClearHandler = () => {
    setQuery("");
  };

  return (<BasicPage title="База знаний" className="main-content max-w-6xl mx-auto px-3">
    <PageHeader pages={breadcrumbs} header="База знаний" />
    <div className='px-3 py-7 rounded-md bg-indigo-200 mt-5'>
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
              placeholder="Поиск по категориям базы знаний"
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

    </div>
    <div className="grid grid-cols-3 gap-2 my-4">
      <div>
        {sortFilter().length > 0 ? sortFilter()
            .map((item, key) =>
              <Disclosure key={key}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="py-3 px-2 w-full flex items-center bg-slate-50 rounded-md">
                      <div className="flex grow items-center">
                        <div className="flex flex-col items-start">
                          <p
                            className="font-medium text-sm text-slate-800 flex flex-wrap line-clamp-1 justify-start items-center text-left mb-1">{item.title}</p>
                        </div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={classNames(open ? 'rotate-90 transform' : '', "w-5 h-5 mx-3 shrink-0")}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500 p-3">
                      {item.children.map((faqItem) => <p>{faqItem.title}</p>)}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>)
          : <p className="text-center py-6">Нет строк для отображения</p>
        }
      </div>

    </div>

  </BasicPage>);
};

export default Faq;
