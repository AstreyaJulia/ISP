import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Card from "../../Card";
import { classNames } from "../../../utils/classNames";
import { getHighlightedText } from "../../../utils/getHighlightedText";

const DataTableCore = ({
                         header,
                         subheader,
                         currentPage,
                         setCurrentPage,
                         rows = [],
                         columns,
                         initSortColumn,
                         sortCallback,
                         filterCallback,
                         tableID,
                         placeholder,
                         itemsContainerClassNames,
                         isLoading,
                         classname,
                         makeItem,
                         makeMenu,
                         table: { isTable, startColumn, endColumn, columnNames, coltosort: [...coltosort] },
                         children
                       }) => {

  /** Стейты */
  const [sortedBy, setSortedBy] = useState({ column: initSortColumn, asc: false }); // сортировка
  const [query, setQuery] = useState(""); // поисковый запрос
  const [elementsPerPage, setElementsPerPage] = useState(10); // кол-во элементов на странице

  /** Дефолтная ф-я сортировки, если не задан sortCallback. Для сортировки строк и чисел (). Другие типы данных - коллбек.
   * @param column
   * @param asc
   * @param rows
   * @returns {*}
   */
  function sortFunction(column, asc, rows) {
    return rows ?? [].sort((a, b) => {
      /* eslint-disable-next-line */
      if (!isNaN(a[column]) || !isNaN(parseInt(a[column]))) {
        if (parseInt(a[column], 10) > parseInt(b[column], 10)) return asc ? -1 : 1;
        if (parseInt(b[column], 10) > parseInt(a[column], 10)) return asc ? 1 : -1;
      }
      if (a[column].toString().toLowerCase() > b[column].toString().toLowerCase()) return asc ? -1 : 1;
      if (b[column].toString().toLowerCase() > a[column].toString().toLowerCase()) return asc ? 1 : -1;
      return 0;
    });
  }

  /** Дефолтная ф-я фильтрации, если не задан filterCallback. Поиск по всем колонкам
   * Для поиска не по всем - менять коллбек в rows.filter
   * @param rows
   * @returns {*}
   */
  function filterFunction(rows) {
    return rows?.filter((row) =>
      columns?.some(
        (column) => row[column].toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  }

  function sort(rows) {
    const { column, asc } = sortedBy;
    return sortCallback ? sortCallback(column, asc, rows ?? []) : sortFunction(column, asc, rows ?? []);
  }

  function filter(rows) {
    return filterCallback ? filterCallback(rows ?? [], query, columns) : filterFunction(rows ?? []);
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
    <Card classname={classname || ""}>
      <div>
        { /* Заголовок */}
        {header ?
          <div className="px-5 py-4 flex flex-col gap-1 border-b-2 border-slate-200 dark:border-slate-700">
            {header ? <p className="font-medium text-xl text-slate-800 dark:text-slate-200">header</p> : ""}
            {subheader ? <p className="font-medium text-base text-slate-500 dark:text-slate-500">subheader</p> : ""}
          </div> : ""
        }

        { /* Поиск */}
        <div className={classNames(!children ? "pb-4" : "", "px-4 pt-4 flex gap-2 w-full items-center")}>
          <label htmlFor={tableID} className="sr-only">
            Поиск
          </label>
          <div className="search-input relative rounded-md shadow-sm flex-grow">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-slate-400 dark:text-slate-500">
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <input
              id={tableID}
              name={tableID}
              value={query}
              onChange={(evt) => searchQueryChangeHandler(evt)}
              className="block w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md py-2 pl-10 pr-2 text-sm placeholder-slate-600 focus:outline-none focus:text-slate-900 dark:focus:text-slate-400 focus:placeholder-slate-300 dark:placeholder-slate-400 dark:focus:placeholder-slate-700 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder={placeholder}
              type="search"
            />
            <div className="absolute inset-y-0 right-0 flex items-center z-30">
              {query !== "" ?
                <button onClick={searchQueryClearHandler} title="Очистить строку поиска"
                        className="mr-3 p-1 rounded-full text-slate-500 dark:text-slate-400 dark:hover:text-slate-300 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:text-indigo-600"
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
          <div className="flex items-center ml-4">
            <label htmlFor="rowsperpage"
                   className="shrink-0 block text-sm font-medium text-slate-700 dark:text-slate-300 mr-2">
              Строк:
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
          <div className="mx-5 flex items-center gap-4">
            <button
              title="Предыдущая страница"
              onClick={prevPage}
              disabled={currentPage === 0 || sortFilter().length === 0}
              className={classNames("bg-white dark:bg-slate-900 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3 lg:rounded-md lg:hover:bg-slate-50 dark:lg:hover:bg-slate-800", currentPage === 0 ? "text-slate-300 dark:text-slate-700" : "text-slate-600 dark:text-slate-300")}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              title="Следующая страница"
              onClick={nextPage}
              disabled={(sortFilter().length / elementsPerPage) - 1 <= currentPage || sortFilter().length === 0}
              className={classNames("bg-white dark:bg-slate-900 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3 lg:rounded-md lg:hover:bg-slate-50 dark:lg:hover:bg-slate-800", (sortFilter().length / elementsPerPage) - 1 <= currentPage ? "text-slate-300 dark:text-slate-700" : "text-slate-600 dark:text-slate-300")}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Дочерние компоненты под заголовком */}
      {children}

      {/* Таблица */}
      {isTable === "true" ?
        <table className="w-full mb-5">
          <tbody>
          <tr className="rounded-md">
            {columns.slice(startColumn, endColumn).map((column, key) => (
              <th key={key}
                  className="pr-3 py-3 text-left bg-slate-100 dark:bg-slate-800 border-b border-slate-300 dark:border-slate-600">
                <div
                  className="flex items-center gap-2"
                >
                <span
                  className={classNames("h-5 text-slate-600 dark:text-slate-300 text-sm uppercase pl-4 border-slate-300 dark:border-slate-600 flex", key === 0 ? "" : "border-l-2")}>
                  {coltosort.indexOf(column) !== -1 ?
                    <button
                      onClick={() =>
                        setSortedBy((prev) => ({
                          column,
                          asc: !prev.asc
                        }))
                      }
                      className="text-slate-500 dark:text-slate-400 border-0 mx-2 flex items-center">
                      {columnNames[column]}
                      {sortedBy.column === column &&
                        (sortedBy.asc ? (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                               className="w-5 h-5">
                            <path fill="currentColor" d="m16 28l-7-7l1.4-1.4l5.6 5.6l5.6-5.6L23 21z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 32 32"
                               className="w-5 h-5">
                            <path fill="currentColor" d="m16 4l7 7l-1.4 1.4L16 6.8l-5.6 5.6L9 11z" />
                          </svg>
                        )) || <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                   stroke="currentColor" className="w-5 h-5 text-slate-400 dark:text-slate-600">
                          <path strokeLinecap="round" strokeLinejoin="round"
                                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                        </svg>
                      }
                    </button> : <span className="text-slate-500 dark:text-slate-400">{columnNames[column]}<span
                      className="w-6" /></span>}
                </span>
                </div>
              </th>
            ))}
            {makeMenu ? <th /> : null}
          </tr>
          { /* eslint-disable-next-line */}
          {isLoading === "true" ?
            <tr>
              <td colSpan={columns.slice(startColumn, endColumn).length} className="text-center py-6">
                <div className="my-5 flex flex-col items-center justify-center w-full">
                  <svg className="w-12 h-12 animate-spin fill-indigo-600 dark:fill-indigo-300 " viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" fillRule="evenodd" clipRule="evenodd"
                          d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                    <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" />
                  </svg>
                  <p className="text-gray-600 dark:text-gray-4000 font-medium text-sm">Загрузка</p>
                </div>
              </td>
            </tr>
            : sortFilter().length > 0 ? sortFilter()
              .slice(currentPage * elementsPerPage, (currentPage + 1) * elementsPerPage)
              .map((row, key) => (
                <tr key={row + key}>
                  {columns.slice(startColumn, endColumn).map((column, key) => (
                    <Fragment key={column + key}>
                      <td
                        className="border-b border-slate-200 dark:border-slate-700 py-3 px-5 text-sm text-slate-700 dark:text-slate-200">
                        {getHighlightedText(row[column], query)}
                      </td>
                      {makeMenu ? <td>makeMenu(item, key, query)</td> : null}
                    </Fragment>
                  ))}
                </tr>
              )) : <tr>
              <td colSpan={columns.slice(startColumn, endColumn).length} className="text-center py-6">Нет строк для
                отображения
              </td>
            </tr>}
          </tbody>
        </table>

        :

        /* Псевдо-таблица */
        <div className="px-4 py-5 sm:p-4">
          <div className={itemsContainerClassNames || ""}>
            { /* eslint-disable-next-line */}
            {isLoading === "true" ? <div className="my-5 flex flex-col items-center justify-center w-full">
              <svg className="w-12 h-12 animate-spin fill-indigo-600 dark:fill-indigo-300 " viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" fillRule="evenodd" clipRule="evenodd"
                      d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" />
              </svg>
              <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">Загрузка</p>
            </div> : sortFilter().length > 0 ? sortFilter()
                .slice(currentPage * elementsPerPage, (currentPage + 1) * elementsPerPage)
                .map((item, key) => makeItem(item, key, query))
              : <p
                className="flex justify-center items-center text-slate-700 dark:text-slate-300 text-sm py-5 col-span-full">Нет
                информации для отображения</p>
            }
          </div>
        </div>
      }

      {/* Футер с пагинацией */}
      <div className="w-full flex items-center justify-between p-4 border-t-2 border-slate-200 dark:border-slate-700">
        <div className="flex items-center">
          {sortFilter().length > 0 ? <p
            className="mx-5 shrink-0 block text-sm font-bold text-slate-700 dark:text-slate-200 mr-2">
            { /* eslint-disable-next-line */}
            {sortFilter().length > 0 ? (currentPage * elementsPerPage) + 1 : 0} - {sortFilter().length > 0 ? sortFilter().length < (currentPage + 1) * elementsPerPage ? sortFilter().length : (currentPage + 1) * elementsPerPage : 0}
            <span className="font-medium mx-1">из</span> {sortFilter().length > 0 ? sortFilter().length : 0}</p> : ""}
        </div>
        <div className="mx-5 flex items-center gap-4">
          <button
            title="Предыдущая страница"
            onClick={prevPage}
            disabled={currentPage === 0 || sortFilter().length === 0}
            className={classNames("bg-white dark:bg-slate-900 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3 lg:rounded-md lg:hover:bg-slate-50 dark:lg:hover:bg-slate-800", currentPage === 0 ? "text-slate-300 dark:text-slate-700" : "text-slate-600 dark:text-slate-300")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            title="Следующая страница"
            onClick={nextPage}
            disabled={(sortFilter().length / elementsPerPage) - 1 <= currentPage || sortFilter().length === 0}
            className={classNames("bg-white dark:bg-slate-900 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3 lg:rounded-md lg:hover:bg-slate-50 dark:lg:hover:bg-slate-800", (sortFilter().length / elementsPerPage) - 1 <= currentPage ? "text-slate-300 dark:text-slate-700" : "text-slate-600 dark:text-slate-300")}>
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

DataTableCore.propTypes = {
  /** Заголовок таблицы */
  header: PropTypes.string,
  /** Подзаголовок таблицы */
  subheader:  PropTypes.string,
  /** Состояние текущей страницы */
  currentPage: PropTypes.number,
  /** Установить текущую страницу */
  setCurrentPage: PropTypes.func,
  /** Массив строк */
  rows: PropTypes.array,
  /** Массив заголовков столбцов */
  columns: PropTypes.array,
  initSortColumn: PropTypes.string,
  sortCallback: PropTypes.func,
  filterCallback: PropTypes.func,
  tableID: PropTypes.string,
  placeholder: PropTypes.string,
  itemsContainerClassNames: PropTypes.string,
  isLoading: PropTypes.string,
  classname: PropTypes.string,
  makeItem: PropTypes.func,
  makeMenu: PropTypes.func,
  table: PropTypes.object,
  children: PropTypes.object
};

export default DataTableCore;
