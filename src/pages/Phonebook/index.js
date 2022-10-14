import React, { useState } from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";
import { Card } from "../../components/Card";
import { classNames } from "../../utils/classNames";
import { Avatar } from "../../components/Avatar";
import { UsersList } from "../../@mock/SampleData";
import { getHighlightedText } from "../../utils/getHighlightedText";

const Phonebook = () => {

  const breadcrumbs = [{name: "Информация", href: "", current: false},
    {name: "Сотрудники", href: "", current: true}];

  const rows = UsersList;

  const columns = Object.keys(rows[0]);

  const [sortedBy] = useState({
    column: columns[1],
    asc: false
  });

  const [query, setQuery] = useState("");
  const [elementsPerPage, setElementsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

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
      columns.slice(1, 2).some(
        (column) =>row[column].toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  }

  const sortFilter = () => sort(filter(rows));

  const searchQueryChangeHandler = (evt) => {
    setQuery(evt.target.value);
    setCurrentPage(0);
  };

  const searchQueryClearHandler = () => {
    setQuery("");
  };

  const elementsPerPageChangeHandler = (evt) => {
    setElementsPerPage(parseInt(evt.target.value, 10));
    setCurrentPage(0);
  };

  const caseTypesSettings = {
    ADM: { color: "blue" },
    G1: { color: "green" },
    U1: { color: "red" },
    ADM1: { color: "indigo" },
    M: { color: "orange" }
  };

  const nextPage = () => {
    if ((sortFilter().length / elementsPerPage) - 1 > currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <BasicPage title='Сотрудники' className='main-content max-w-6xl mx-auto px-3' >
      <PageHeader pages={breadcrumbs} header='Сотрудники' />
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
                onChange={(e) => searchQueryChangeHandler(e)}
                className="block w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md py-3 pl-10 pr-3 text-sm placeholder-gray-600 focus:outline-none focus:text-gray-900 dark:focus:text-gray-400 focus:placeholder-gray-300 dark:placeholder-gray-400 dark:focus:placeholder-gray-700 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Поиск по делам, рассмотренным свыше срока"
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
          <div className="flex flex-col my-4">
            {sortFilter().length > 0 ? sortFilter()
                .slice(currentPage * elementsPerPage, (currentPage + 1) * elementsPerPage)
                .map((item, key) =>
                  <div key={item.id} className={classNames("flex grow items-center p-2", key % 2 === 0 ? '' : 'bg-slate-100 dark:bg-slate-800')}>
                    <Avatar size="10" name={item.fullname} shape="circle" classname='mr-5' />
                    <div className="flex flex-col items-start mr-7 w-72">
                      <p
                        className="font-medium text-sm text-slate-800 dark:text-slate-200 flex flex-wrap justify-start items-center text-left mb-1">{getHighlightedText(item?.fullname, query)}</p>
                      <p
                        className="text-sm text-slate-700 dark:text-slate-300 flex flex-wrap justify-start items-center text-left">{item?.profession}</p>
                    </div>
                    <div className="flex flex-col items-start">
                      <p
                        className="font-medium text-sm text-slate-800 dark:text-slate-200 flex justify-start items-center text-left mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        {item?.room}
                      </p>

                      <p
                        className="text-sm text-slate-700 dark:text-slate-300 flex justify-start items-center text-left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        {item?.phone}
                      </p>
                    </div>

                  </div>)
              : <p className="text-center py-6">Нет строк для отображения</p>
            }
          </div>
        </div>
        <div className="w-full flex items-center justify-between p-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <label htmlFor="rowsperpage" className="shrink-0 block text-sm font-medium text-gray-700 dark:text-slate-300 mr-2">
                Строк на страницу:
              </label>
              <select
                id="rowsperpage"
                name="rowsperpage"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                defaultValue={elementsPerPage}
                onChange={elementsPerPageChangeHandler}
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={sortFilter().length}>Все</option>
              </select>
            </div>
            <p
              className="mx-5 shrink-0 block text-sm font-medium text-gray-700 dark:text-slate-200 mr-2">
              { /* eslint-disable-next-line */}
              {sortFilter().length > 0 ? (currentPage * elementsPerPage) + 1 : 0} - {sortFilter().length > 0 ? sortFilter().length < (currentPage + 1) * elementsPerPage ? sortFilter().length : (currentPage + 1) * elementsPerPage : 0} из {sortFilter().length > 0 ? sortFilter().length : 0}</p>
          </div>
          <div className="mx-5 flex items-center gap-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 0 || sortFilter().length === 0}
              className={classNames("bg-white dark:bg-gray-900 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3 lg:rounded-md lg:hover:bg-gray-50 dark:lg:hover:bg-gray-800", currentPage === 0 ? "text-slate-300 dark:text-slate-700" : "text-slate-600 dark:text-slate-300")}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={nextPage}
              disabled={(sortFilter().length / elementsPerPage) - 1 <= currentPage || sortFilter().length === 0}
              className={classNames("bg-white dark:bg-gray-900 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3 lg:rounded-md lg:hover:bg-gray-50 dark:lg:hover:bg-gray-800", (sortFilter().length / elementsPerPage) - 1 <= currentPage ? "text-slate-300 dark:text-slate-700" : "text-slate-600 dark:text-slate-300")}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </Card>
    </BasicPage>
  )
};

export default Phonebook;
