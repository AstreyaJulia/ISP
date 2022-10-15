import React from "react";
import { compareDesc, intervalToDuration, parse, parseISO } from "date-fns";
import ru from "date-fns/locale/ru";

import { Disclosure } from "@headlessui/react";
import { classNames } from "../../../utils/classNames";
import { Avatar } from "../../Avatar";
import { caseTypesSettings } from "../../../config";
import DataTableCore from "../DataTableCore";
import { formatDate } from "../../../utils/formatTime";
import Badge from "../../Badge";
import { getInitials } from "../../../utils/getInitials";
import { getHighlightedText } from "../../../utils/getHighlightedText";

const PublicationControl = ({ rows }) => {

  const columns = Object.keys(rows[0]);

  const getCaseUntilColor = (date) => {
    if (date === "null") return "indigo";
    if (compareDesc(new Date(), parse(date, "dd.MM.yyyy", new Date(), { locale: ru })) === -1) return "red";

    const { days, months } = intervalToDuration({
      start: new Date(),
      end: parse(date, "dd.MM.yyyy", new Date(), { locale: ru })
    });
    const daysCount = months > 0 ? months * days : days;

    if (daysCount <= 5) return "red";
    if (daysCount > 5 && daysCount < 14) return "yellow";
    if (daysCount >= 14) return "green";
  };

  const makeItem = (item, key, query) => <Disclosure key={key}>
    {({ open }) => (
      <>
        <Disclosure.Button
          className={classNames("py-3 px-2 w-full flex items-center rounded-md", open ? "bg-indigo-100 dark:bg-indigo-700/30" : "bg-slate-100 dark:bg-slate-800")}>
          <div className="flex grow items-center">
            <Avatar size="10" shape="circle" name={item.CASE_TYPE}
                    color={caseTypesSettings[item.CASE_TYPE].color} classname="mr-3" />
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col items-start">
                <p
                  className="font-medium text-sm text-slate-800 dark:text-slate-200 flex flex-wrap line-clamp-1 justify-start items-center text-left mb-1">
                  <span>{getHighlightedText(item.CASE_NUMBER, query)}</span>
                  <span className="ml-2 text-xs text-slate-700 dark:text-slate-300">(Судья: {getInitials(item.JUDGE_NAME)})</span>
                </p>
                <p
                  className="text-sm text-slate-700 dark:text-slate-300 flex flex-wrap line-clamp-1 justify-start items-center text-left">{getHighlightedText(item.PARTS_FIO, query)}</p>
              </div>
              <div className="flex flex-col items-end mr-5">
                {item.DATE_UNTILL !== "null" ? <p
                  className="font-medium text-sm text-slate-800 dark:text-slate-200 flex flex-wrap line-clamp-1 justify-start items-center text-left mb-1">Срок
                  до:
                  <Badge size="large" shape="rounded" className="ml-2"
                         color={getCaseUntilColor(item.DATE_UNTILL) || "indigo"}
                         item={item.DATE_UNTILL !== "null" ? `${item.DATE_UNTILL}` : ""} />
                </p> : ""}
                <p
                  className="font-medium text-sm text-slate-600 dark:text-slate-200 flex flex-wrap line-clamp-1 justify-start items-center text-left mb-1">{item.PUBLICATION_STATUS}</p>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className={classNames(open ? "rotate-90 transform" : "", "w-5 h-5 mx-3 shrink-0")}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </Disclosure.Button>
        <Disclosure.Panel
          className="text-gray-500 dark:text-gray-600 p-4 bg-slate-100 dark:bg-slate-800 rounded-md mb-2">
          <div className='flex items-center flex-wrap'>
            <p className="text-slate-700 dark:text-slate-300 text-sm mr-6">
              <span className='font-bold mr-3'>Срок публикации до (включительно):</span>
              <span>{item.DATE_UNTILL !== "null" ? item.DATE_UNTILL : "Невозможно вычислить дату"}</span>
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              <span className='font-bold mr-3'>Судья:</span>
              <span>{getInitials(item.JUDGE_NAME)}</span>
            </p>
          </div>
          <div className='flex items-center flex-wrap'>
            <p className="text-slate-700 dark:text-slate-300 text-sm mr-6">
              <span className='font-bold mr-3'>Дата рассмотрения:</span>
              <span>{formatDate(parseISO(item.VERDICT_DATE))}</span>
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              <span className='font-bold mr-3'>Дата вступления в законную силу:</span>
              <span>{item.VALIDITY_DATE !== "null" ? formatDate(parseISO(item.VALIDITY_DATE)) : "Не указана"}</span>
            </p>
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>;

  const filter = (rows, query, columns) => {
    return rows.filter((row) =>
      columns.slice(2, 6).filter((item) => item !== "JUDGE_NAME" && item !== "JUDGE_ID").some(
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
      placeholder="Поиск по неопубликованным судебным актам"
      filterCallback={filter}
      sortCallback={null}
      makeItem={makeItem}
      table={{ isTable: "false", startColumn: null, endColumn: null, columnNames: null }}
    />
  );
};

export default PublicationControl;