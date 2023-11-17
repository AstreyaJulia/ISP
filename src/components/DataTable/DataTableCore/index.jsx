import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../../Card';
import { classNames } from '../../../utils/classNames';
import { getHighlightedText } from '../../../utils/getHighlightedText';
import Alert from '../../Alert';
import LoadingSkeleton from '../../LoadingSkeleton';
import LoadingContentSpinner from '../../LoadingContentSpinner';

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
  pseudoTableBodyClassNames,
  isLoading,
  error,
  classname,
  makeItem,
  makeMenu,
  table: {
    isTable,
    startColumn,
    endColumn,
    columnNames,
    coltosort: [...coltosort],
  },
  children,
}) => {
  /** Стейты */
  const [sortedBy, setSortedBy] = useState({ column: initSortColumn, asc: false }); // сортировка
  const [query, setQuery] = useState(''); // поисковый запрос
  const [elementsPerPage, setElementsPerPage] = useState(12); // кол-во элементов на странице

  /** Дефолтная ф-я сортировки, если не задан sortCallback. Для сортировки строк и чисел (). Другие типы данных - коллбек.
   * @param column
   * @param asc
   * @param rows
   * @returns {*}
   */
  function sortFunction(column, asc, rows) {
    return (
      rows ??
      [].sort((a, b) => {
        /* eslint-disable-next-line */
        if (!isNaN(a[column]) || !isNaN(parseInt(a[column]))) {
          if (parseInt(a[column], 10) > parseInt(b[column], 10)) return asc ? -1 : 1;
          if (parseInt(b[column], 10) > parseInt(a[column], 10)) return asc ? 1 : -1;
        }
        if (a[column].toString().toLowerCase() > b[column].toString().toLowerCase()) return asc ? -1 : 1;
        if (b[column].toString().toLowerCase() > a[column].toString().toLowerCase()) return asc ? 1 : -1;
        return 0;
      })
    );
  }

  /** Дефолтная ф-я фильтрации, если не задан filterCallback. Поиск по всем колонкам
   * Для поиска не по всем - менять коллбек в rows.filter
   * @param rows
   * @returns {*}
   */
  function filterFunction(rows) {
    return rows?.filter((row) =>
      columns?.some((column) => row[column].toLowerCase().indexOf(query.toLowerCase()) > -1)
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
    setQuery('');
  };

  const elementsPerPageChangeHandler = (evt) => {
    setElementsPerPage(parseInt(evt.target.value, 10));
    setCurrentPage(0);
  };

  const nextPage = () => {
    if (sortFilter().length / elementsPerPage - 1 > currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Card classname={classNames(classname || '', error !== null ? 'p-5' : '')}>
      {error !== null ? <Alert alertType='error' title={error || 'Неизвестная ошибка'} containerClassName='w-full'/> :
      <>
        <div>
          {/* Заголовок */}
          {header ? (
            <div className="px-5 py-4 flex flex-col gap-1 border-b-2 border-gray-200 dark:border-gray-700">
              {header ? <p className="font-medium text-xl text-gray-800 dark:text-gray-200">header</p> : ''}
              {subheader ? <p className="font-medium text-base text-gray-500 dark:text-gray-500">subheader</p> : ''}
            </div>
          ) : (
            ''
          )}

          {/* Поиск */}
          <div className={classNames(!children ? 'pb-4' : '', 'px-4 pt-4 flex gap-2 w-full items-center')}>
            {isLoading === 'true' ? <LoadingSkeleton classnames='h-10' /> : <>
              <label htmlFor={tableID} className="sr-only">
                Поиск
              </label>
              <div className="search-input relative rounded-md shadow-sm flex-grow">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-gray-400 dark:text-gray-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id={tableID}
                  name={tableID}
                  value={query}
                  onChange={(evt) => searchQueryChangeHandler(evt)}
                  className="block w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md py-2 pl-10 pr-2 text-sm placeholder-gray-600 focus:outline-none focus:text-gray-900 dark:focus:text-gray-400 focus:placeholder-gray-300 dark:placeholder-gray-400 dark:focus:placeholder-gray-700 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder={placeholder}
                  type="search"
                />
                <div className="absolute inset-y-0 right-0 flex items-center z-30">
                  {query !== '' ? (
                    <button
                      onClick={searchQueryClearHandler}
                      title="Очистить строку поиска"
                      className="mr-3 p-1 rounded-full text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:text-indigo-600"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                        />
                      </svg>
                    </button>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <div className="flex items-center ml-4">
                <label
                  htmlFor="rowsperpage"
                  className="shrink-0 block text-sm font-medium text-gray-700 dark:text-gray-300 mr-2"
                >
                  Строк:
                </label>
                <select
                  id="rowsperpage"
                  name="rowsperpage"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  defaultValue={elementsPerPage}
                  onChange={elementsPerPageChangeHandler}
                >
                  <option value={12}>12</option>
                  <option value={24}>24</option>
                  <option value={48}>48</option>
                  <option value={96}>96</option>
                  <option value={sortFilter().length}>Все</option>
                </select>
              </div>
              <div className="mx-5 flex items-center gap-4">
                <button
                  type="button"
                  title="Предыдущая страница"
                  onClick={prevPage}
                  disabled={currentPage === 0 || sortFilter().length === 0}
                  className={classNames(
                    'bg-white dark:bg-gray-900 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3 lg:rounded-md lg:hover:bg-gray-50 dark:lg:hover:bg-gray-800',
                    currentPage === 0 ? 'text-gray-300 dark:text-gray-700' : 'text-gray-600 dark:text-gray-300'
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  type="button"
                  title="Следующая страница"
                  onClick={nextPage}
                  disabled={sortFilter().length / elementsPerPage - 1 <= currentPage || sortFilter().length === 0}
                  className={classNames(
                    'bg-white dark:bg-gray-900 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3 lg:rounded-md lg:hover:bg-gray-50 dark:lg:hover:bg-gray-800',
                    sortFilter().length / elementsPerPage - 1 <= currentPage
                      ? 'text-gray-300 dark:text-gray-700'
                      : 'text-gray-600 dark:text-gray-300'
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </> }
          </div>
        </div>

        {/* Дочерние компоненты под заголовком */}
        {children}

        {/* Таблица */}
        {isTable === 'true' ? (
          <table className="w-full my-5">
            <tbody>
            <tr className="rounded-md">
              {columns.slice(startColumn, endColumn).map((column, key) => (
                <th key={key} className="pr-3 py-3 text-left bg-gray-100 dark:bg-gray-800">
                  <div className="flex items-center gap-2">
                    <span
                      className={classNames(
                        'h-5 text-gray-600 dark:text-gray-300 text-sm uppercase pl-4 border-gray-300 dark:border-slate-600 flex',
                        key === 0 ? '' : 'border-l-2'
                      )}
                    >
                      {coltosort.indexOf(column) !== -1 ? (
                        <button
                          type="button"
                          onClick={() =>
                            setSortedBy((prev) => ({
                              column,
                              asc: !prev.asc,
                            }))
                          }
                          className="text-slate-500 dark:text-slate-400 border-0 mx-2 flex items-center"
                        >
                          {columnNames[column]}
                          {(sortedBy.column === column &&
                            (sortedBy.asc ? (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5">
                                <path fill="currentColor" d="m16 28l-7-7l1.4-1.4l5.6 5.6l5.6-5.6L23 21z" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5">
                                <path fill="currentColor" d="m16 4l7 7l-1.4 1.4L16 6.8l-5.6 5.6L9 11z" />
                              </svg>
                            ))) || (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5 text-slate-400 dark:text-slate-600"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                              />
                            </svg>
                          )}
                        </button>
                      ) : (
                        <span className="text-slate-500 dark:text-slate-400">
                          {columnNames[column]}
                          <span className="w-6" />
                        </span>
                      )}
                    </span>
                  </div>
                </th>
              ))}
              {makeMenu ? <th /> : null}
            </tr>
            {/* eslint-disable-next-line */}
            {isLoading === 'true' ? (
              <tr>
                <td colSpan={columns.slice(startColumn, endColumn).length} className="text-center py-6">
                  <LoadingContentSpinner classname="my-5 flex flex-col items-center justify-center w-full" />
                </td>
              </tr>
            ) : sortFilter().length > 0 ? (
              sortFilter()
                .slice(currentPage * elementsPerPage, (currentPage + 1) * elementsPerPage)
                .map((row, key) => (
                  <tr key={row + key}>
                    {columns.slice(startColumn, endColumn).map((column, key) => (
                      <Fragment key={column + key}>
                        <td className="border-b border-slate-200 dark:border-slate-700 py-3 px-5 text-sm text-slate-700 dark:text-slate-200">
                          {getHighlightedText(row[column], query)}
                        </td>
                        {makeMenu ? <td>makeMenu(item, key, query)</td> : null}
                      </Fragment>
                    ))}
                  </tr>
                ))
            ) : <tr>
              <td colSpan={columns.slice(startColumn, endColumn).length} className="text-center py-6">
                Нет строк для отображения
              </td>
            </tr>

            }
            </tbody>
          </table>
        ) : (
          /* Псевдо-таблица */
          <div className={pseudoTableBodyClassNames || 'px-4 py-5 sm:p-4'}>
            <div className={itemsContainerClassNames || ''}>
              {/* eslint-disable-next-line */}
              {isLoading === 'true' ? (
                <LoadingContentSpinner classname="my-5 flex flex-col items-center justify-center w-full" />
              ) : sortFilter().length > 0 ? (
                sortFilter()
                  .slice(currentPage * elementsPerPage, (currentPage + 1) * elementsPerPage)
                  .map((item, key) => makeItem(item, key, query))
              ) : <p className="flex justify-center items-center text-slate-700 dark:text-slate-300 text-sm py-5 col-span-full">
                Нет информации для отображения
              </p>
              }
            </div>
          </div>
        )}

        {/* Футер с пагинацией */}
        <div className="w-full flex items-center justify-between p-4 border-t-2 border-slate-200 dark:border-slate-700">
          {isLoading === 'true' ? <LoadingSkeleton classnames='h-10' /> : <>
            <div className="flex items-center">
              {sortFilter().length > 0 ? (
                <p className="mx-5 shrink-0 block text-sm font-bold text-slate-700 dark:text-slate-200 mr-2">
                  {/* eslint-disable-next-line */}
                  {sortFilter().length > 0 ? currentPage * elementsPerPage + 1 : 0} - {/* eslint-disable-next-line */}
                  {sortFilter().length > 0
                    ? sortFilter().length < (currentPage + 1) * elementsPerPage
                      ? sortFilter().length
                      : (currentPage + 1) * elementsPerPage
                    : 0}
                  <span className="font-medium mx-1">из</span> {sortFilter().length > 0 ? sortFilter().length : 0}
                </p>
              ) : (
                ''
              )}
            </div>
            <div className="mx-5 flex items-center gap-4">
              <button
                title="Предыдущая страница"
                type="button"
                onClick={prevPage}
                disabled={currentPage === 0 || sortFilter().length === 0}
                className={classNames(
                  'bg-white dark:bg-slate-900 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3 lg:rounded-md lg:hover:bg-slate-50 dark:lg:hover:bg-slate-800',
                  currentPage === 0 ? 'text-slate-300 dark:text-slate-700' : 'text-slate-600 dark:text-slate-300'
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                title="Следующая страница"
                type="button"
                onClick={nextPage}
                disabled={sortFilter().length / elementsPerPage - 1 <= currentPage || sortFilter().length === 0}
                className={classNames(
                  'bg-white dark:bg-slate-900 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 p-3 lg:rounded-md lg:hover:bg-slate-50 dark:lg:hover:bg-slate-800',
                  sortFilter().length / elementsPerPage - 1 <= currentPage
                    ? 'text-slate-300 dark:text-slate-700'
                    : 'text-slate-600 dark:text-slate-300'
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </> }
        </div>
      </>
      }
    </Card>
  );
};

DataTableCore.propTypes = {
  /** Заголовок таблицы */
  header: PropTypes.string,
  /** Подзаголовок таблицы */
  subheader: PropTypes.string,
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
  pseudoTableBodyClassNames: PropTypes.string,
  isLoading: PropTypes.string,
  classname: PropTypes.string,
  makeItem: PropTypes.func,
  makeMenu: PropTypes.func,
  table: PropTypes.object,
  children: PropTypes.node,
  error: PropTypes.string,
};

export default DataTableCore;