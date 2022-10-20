import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import PropTypes from "prop-types";
import DataTableCore from "../DataTableCore";
import { classNames } from "../../../utils/classNames";
import { Avatar } from "../../Avatar";
import { caseTypesSettings } from "../../../config";
import { getHighlightedText } from "../../../utils/getHighlightedText";
import { getInitials } from "../../../utils/getInitials";
import Badge from "../../Badge";

const CasesOverPeriod = ({ data, isLoading }) => {

  const [rows, setRows] = useState(data ?? []);
  const columns = Object.keys(data[0] ?? []);
  const [currentPage, setCurrentPage] = useState(0); // текущая страница

  useEffect(() => {
    setRows(data);
  }, [isLoading]);

  const makeItem = (item, key, query) => <Disclosure key={key}>
    {({ open }) => (
      <>
        <Disclosure.Button
          className={classNames("py-3 px-2 w-full flex items-center justify-between w-full rounded-md", open ? "bg-indigo-100 dark:bg-indigo-700/30" : "bg-slate-100 dark:bg-slate-800")}>
          <div className="flex grow items-center justify-between">
            <div className="flex flex-col items-start">
              <p
                className="font-medium text-sm text-slate-800 dark:text-slate-200 flex flex-wrap line-clamp-1 justify-start items-center text-left mb-1">
                <Avatar size="6" shape="circle" name={item.CASE_TYPE}
                        color={caseTypesSettings[item.CASE_TYPE].color} classname="mr-2" />
                <span>{getHighlightedText(item.CASE_NUMBER, query)}</span>

              </p>
              <span className="text-xs text-indigo-700 dark:text-indigo-300 mb-2">{getInitials(item.JUDGE_NAME)}</span>
              <p
                className="text-sm text-slate-700 dark:text-slate-300 flex flex-wrap line-clamp-1 justify-start items-center text-left">{getHighlightedText(item.PARTS_FIO, query)}</p>
            </div>
            <div className="flex flex-col items-end shrink-0 gap-1">
              {item.INFO.toLowerCase().includes("Д.б. рассм./изг.реш. в оконч.форме до".toLowerCase()) ? <p
                  className="font-medium text-xs text-slate-600 dark:text-slate-200 flex flex-wrap justify-start items-center text-left mb-1">
                  До: <Badge size="small" shape="rounded" className="ml-1"
                             color="red"
                             item={item.INFO.slice(item.INFO.toLowerCase().lastIndexOf("Д.б. рассм./изг.реш. в оконч.форме до:".toLowerCase()) + 39, item.INFO.toLowerCase().lastIndexOf("Д.б. рассм./изг.реш. в оконч.форме до:".toLowerCase()) + 49)} />
                </p>
                : ""}
              <p
                className="font-medium text-xs text-slate-600 dark:text-slate-200 flex flex-wrap justify-start items-center text-left mb-1">Рассм.: {item.RESULT_DATE}</p>

            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className={classNames(open ? "rotate-90 transform" : "", "w-5 h-5 mx-3 shrink-0")}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </Disclosure.Button>
        <Disclosure.Panel
          className="text-gray-500 dark:text-gray-600 p-4 bg-slate-100 dark:bg-slate-800 rounded-md mb-2">
          <p className="text-slate-600 dark:text-slate-400 text-sm font-bold mb-2">Дата рассмотрения дела:</p>
          <p className="text-slate-700 dark:text-slate-300 text-sm mb-5">{item.RESULT_DATE}</p>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-bold mb-2">Категория / статья:</p>
          <p className="text-slate-700 dark:text-slate-300 text-sm mb-5">{item.CAT}</p>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-bold mb-2">Информация:</p>
          {item.INFO.length > 0 && item.INFO !== "null" ? item.INFO.split(";").map((item, key) =>
              <p key={key} className="text-slate-700 dark:text-slate-300 text-sm">{item};</p>) :
            <p className="text-slate-700 dark:text-slate-300 text-sm">Нет информации</p>}
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>;

  const filter = (rows, query, columns) => rows?.filter((row) =>
    columns.slice(3, 6).filter((item) => item !== "RESULT_DATE").some(
      (column) => row[column].toLowerCase().indexOf(query.toLowerCase()) > -1
    )
  );

  return (
    <DataTableCore
      classname="mt-5"
      rows={rows ?? []}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      tableID="cases-over-period"
      isLoading={isLoading}
      columns={columns}
      itemsContainerClassNames="flex flex-col gap-2"
      initSortColumn={columns[0]}
      placeholder="Поиск по делам, рассмотренным свыше срока"
      filterCallback={filter}
      sortCallback={null}
      makeItem={makeItem}
      table={{ isTable: "false", startColumn: null, endColumn: null, columnNames: null, coltosort: [] }}
    />
  );
};

CasesOverPeriod.propTypes = {
  /** Массив элементов  */
  data: PropTypes.array.isRequired,
  /** Состояние получения данных */
  isLoading: PropTypes.string.isRequired
};

export default CasesOverPeriod;
