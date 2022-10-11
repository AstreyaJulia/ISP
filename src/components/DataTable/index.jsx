import React, { useState } from "react";
import { Card } from "../Card";
import { classNames } from "../../utils/classNames";

const DataTable = ({ rows = [], columnNames }) => {
  const columns = Object.keys(rows[0]);
  const [sortedBy, setSortedBy] = useState({
    column: columns[0],
    asc: true
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
      columns.some(
        (column) => row[column].toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  }

  const sortFilter = () => sort(filter(rows));

  const handleKeyDown = (evt) => {
    if (evt.keyCode === 13) {
      focus();
    }
  };
  const focus = (evt) => evt.target.focus;

  const searchQueryClearHandler = () => {
    setQuery("");
  };

  const elementsPerPageChangeHandler = (evt) => {
    setElementsPerPage(parseInt(evt.target.value, 10));
    setCurrentPage(0);
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
    <Card>
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
      <table className="w-full mt-2">

        <tbody>
        <tr className="rounded-md">
          {columns.map((column, key) => (
            <th key={key} className="pr-3 py-3 text-left bg-slate-100 border-b border-slate-300">
              <div
                onKeyDown={handleKeyDown} role="link" tabIndex={column}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() =>
                  setSortedBy((prev) => ({
                    column,
                    asc: !prev.asc
                  }))
                }>
                <span
                  className={classNames("text-slate-600 text-sm capitalize pl-4 border-slate-300", key === 0 ? "" : "border-l-2")}>
                  {columnNames[column]}
                </span>
                <div className="text-slate-500">
                  {sortedBy.column === column &&
                    (sortedBy.asc ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                           stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                           stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                      </svg>
                    ))}
                </div>
              </div>
            </th>
          ))}
        </tr>

        {sortFilter().length > 0 ? sortFilter()
          .slice(currentPage * elementsPerPage, (currentPage + 1) * elementsPerPage)
          .map((row, key) => (
            <tr key={row + key}>
              {columns.map((column, key) => (
                <td key={column + key} className="border-b border-gray-200 py-2 px-3 text-sm text-slate-700">
                  {row[column]}
                </td>
              ))}
            </tr>
          )) : <tr>
          <td colSpan={columns.length} className="text-center py-6">Нет строк для отображения</td>
        </tr>}
        </tbody>

      </table>

      <div className="w-full flex items-center justify-end p-2">
        <div className="flex items-center">
          <label htmlFor="rowsperpage" className="shrink-0 block text-sm font-medium text-gray-700 mr-2">
            Строк на страницу:
          </label>
          <select
            id="rowsperpage"
            name="rowsperpage"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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
          className="mx-5 shrink-0 block text-sm font-medium text-gray-700 mr-2">
          { /* eslint-disable-next-line */}
          {sortFilter().length > 0 ? (currentPage * elementsPerPage) + 1 : 0} - {sortFilter().length > 0 ? sortFilter().length < (currentPage + 1) * elementsPerPage ? sortFilter().length : (currentPage + 1) * elementsPerPage : 0} из {sortFilter().length > 0 ? sortFilter().length : 0}</p>
        <div className="mx-5 flex items-center gap-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 0 || sortFilter().length === 0}
            className={classNames("bg-white dark:bg-gray-900 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 lg:p-1 lg:rounded-md lg:hover:bg-gray-50 dark:lg:hover:bg-gray-800", currentPage === 0 ? "text-slate-300" : "text-slate-600")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

          </button>
          <button
            onClick={nextPage}
            disabled={(sortFilter().length / elementsPerPage) - 1 <= currentPage || sortFilter().length === 0}
            className={classNames("bg-white dark:bg-gray-900 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 lg:p-1 lg:rounded-md lg:hover:bg-gray-50 dark:lg:hover:bg-gray-800", (sortFilter().length / elementsPerPage) - 1 <= currentPage ? "text-slate-300" : "text-slate-600")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

    </Card>
  );
};

export default DataTable;