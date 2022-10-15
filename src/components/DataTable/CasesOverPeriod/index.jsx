import React from "react";
import { Disclosure } from "@headlessui/react";

import DataTableCore from "../DataTableCore";
import { classNames } from "../../../utils/classNames";
import { Avatar } from "../../Avatar";
import { caseTypesSettings } from "../../../config";
import { formatDate } from "../../../utils/formatTime";

const CasesOverPeriod = ({ rows }) => {

  const columns = Object.keys(rows[0]);

  const makeItem = (item, key) => <Disclosure key={key}>
    {({ open }) => (
      <>
        <Disclosure.Button
          className={classNames("py-3 px-2 w-full flex items-center rounded-md", open ? "bg-indigo-100 dark:bg-indigo-700/30" : "bg-slate-100 dark:bg-slate-800")}>
          <div className="flex grow items-center">
            <Avatar size="10" shape="circle" name={item.CASE_TYPE}
                    color={caseTypesSettings[item.CASE_TYPE].color} classname="mr-3" />
            <div className="flex flex-col items-start">
              <p
                className="font-medium text-sm text-slate-800 dark:text-slate-200 flex flex-wrap line-clamp-1 justify-start items-center text-left mb-1">{item.CASE_NUMBER}</p>
              <p
                className="text-sm text-slate-700 dark:text-slate-300 flex flex-wrap line-clamp-1 justify-start items-center text-left">{item.PARTS_FIO}</p>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className={classNames(open ? "rotate-90 transform" : "", "w-5 h-5 mx-3 shrink-0")}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </Disclosure.Button>
        <Disclosure.Panel
          className="text-gray-500 dark:text-gray-600 p-4 bg-slate-100 dark:bg-slate-800 rounded-md mb-2">
          <p className="text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">Дата рассмотрения дела:</p>
          <p className="text-slate-700 dark:text-slate-300 text-sm mb-5">{formatDate(item.RESULT_DATE)}</p>
          <p className="text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">Категория / статья:</p>
          <p className="text-slate-700 dark:text-slate-300 text-sm mb-5">{item.CAT}</p>
          <p className="text-slate-700 dark:text-slate-300 text-sm font-bold mb-2">Информация:</p>
          {item.INFO.length > 0 && item.INFO !== "null" ? item.INFO.split(";").map((item, key) => <p key={key}
                                                                                                     className="text-slate-700 text-sm">{item};</p>) :
            <p className="text-slate-700 dark:text-slate-300 text-sm">Нет информации</p>}
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>;

  const filter = (rows, query, columns) => {
    return rows.filter((row) =>
      columns.slice(3, 6).filter((item) => item !== "RESULT_DATE").some(
        (column) => row[column].toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  };

  return (
    <DataTableCore
      rows={rows}
      tableID="cases-over-period"
      isLoading="false"
      columns={columns}
      itemsContainerClassNames="flex flex-col gap-2"
      initSortColumn={columns[0]}
      placeholder="Поиск по делам, рассмотренным свыше срока"
      filterCallback={filter}
      sortCallback={null}
      makeItem={makeItem}
      table={{isTable: 'false', startColumn: null, endColumn: null, columnNames: null, coltosort: []}}
    />
  );
};

export default CasesOverPeriod;