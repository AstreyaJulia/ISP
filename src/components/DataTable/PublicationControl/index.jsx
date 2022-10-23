import React, { useEffect, useState } from "react";
import { compareDesc, intervalToDuration, parse } from "date-fns";
import ru from "date-fns/locale/ru";
import PropTypes from "prop-types";
import DataTableCore from "../DataTableCore";
import Badge from "../../Badge";
import { getInitials } from "../../../utils/getInitials";
import { getUniqueArrayValuesByKey } from "../../../utils/getArrayValuesByKey";
import CaseListCard from "../../CaseListCard";
import DataTableToolBar from "../DataTableCore/DataTableToolBar";

const PublicationControl = ({ data, isLoading, all }) => {

  const [rows, setRows] = useState(data ?? []);
  const columns = Object.keys(data[0] ?? []);
  const [selectedJudge, setSelectedJudge] = useState("All");
  const [currentPage, setCurrentPage] = useState(0); // текущая страница
  const [judgesList, setJudgesList] = useState([]);

  useEffect(() => {
    setRows(data);
    setJudgesList(getUniqueArrayValuesByKey(data ?? [], "JUDGE_NAME").sort((a, b) => a.localeCompare(b)));
    // eslint-disable-next-line
  }, [isLoading]);


  const getCaseUntilColor = (date) => {
    if (date === "null" || date === null) return "indigo";
    if (compareDesc(new Date(), parse(date, "dd.MM.yyyy", new Date(), { locale: ru })) === -1) return "red";

    const { days, months } = intervalToDuration({
      start: new Date(),
      end: parse(date, "dd.MM.yyyy", new Date(), { locale: ru })
    });
    const daysCount = months > 0 ? months * days : days;

    if (daysCount <= 5) return "red";
    if (daysCount > 5 && daysCount < 14) return "yellow";
    return "green";
  };

  getCaseUntilColor.propTypes = {
    /** Дата */
    date: PropTypes.string.isRequired
  };

  const makeItem = (item, key, query) =>
    <CaseListCard key={key} item={item} query={query}>
      {item?.DATE_UNTILL !== null ? <p
        className="font-medium text-xs text-slate-800 dark:text-slate-200 flex flex-wrap line-clamp-1 justify-start items-center text-left mb-1">До:
        <Badge size="small" shape="rounded" className="ml-1"
               color={getCaseUntilColor(item?.DATE_UNTILL ?? null)}
               item={item?.DATE_UNTILL !== null ? `${item?.DATE_UNTILL}` : ""} />
      </p> : <Badge size="small" shape="rounded"
                    color="indigo"
                    item="Не вступило" />}
      <p
        className="font-medium text-xs text-slate-600 dark:text-slate-200 flex flex-wrap justify-start items-center text-left mb-1">Рассм.: {item?.VERDICT_DATE}</p>
      <p
        className="font-medium text-xs text-slate-600 dark:text-slate-200 flex flex-wrap justify-start items-center text-left mb-1">{item?.PUBLICATION_STATUS}</p>
    </CaseListCard>;

  const filter = (rows, query, columns) => rows?.filter((row) =>
    columns.slice(2, 6).filter((item) => item !== "JUDGE_NAME" && item !== "JUDGE_ID").some(
      (column) => row[column].toLowerCase().indexOf(query.toLowerCase()) > -1
    )
  );

  const judgeSelectChangeHandler = (evt) => {
    setSelectedJudge(evt.target.value);
    setCurrentPage(0);
    setRows(data.filter((row) =>
      columns?.slice(4, 5).filter((item) => item === "JUDGE_NAME").some(
        (column) => evt.target.value !== "All" ? row[column].toLowerCase().indexOf(evt.target.value.toLowerCase()) > -1 : row[column].toLowerCase().indexOf(evt.target.value.toLowerCase()) === -1
      )
    ));
  };

  return (
    <DataTableCore
      classname="mt-7"
      rows={rows}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      tableID="act_publication"
      isLoading={isLoading}
      columns={columns}
      itemsContainerClassNames="grid grid-cols-2 gap-3"
      initSortColumn={columns[0]}
      placeholder="Поиск по неопубликованным судебным актам: номер дела / стороны / лица"
      filterCallback={filter}
      sortCallback={null}
      makeItem={makeItem}
      table={{ isTable: "false", startColumn: null, endColumn: null, columnNames: null, coltosort: [] }}
    >

      {all === "true" ?
        <DataTableToolBar>
          <div className="flex items-center ml-3 justify-start">
            <label htmlFor="judges"
                   className="shrink-0 block text-sm font-medium text-slate-700 dark:text-slate-300 mr-2">
              Судья:
            </label>
            <select
              id="judges"
              name="judges"
              defaultValue={selectedJudge}
              onChange={judgeSelectChangeHandler}
              className="grow-0 mt-1 block pl-3 pr-10 py-2 text-base bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="All">Все</option>
              {judgesList.map((judge, key) =>
                <option key={judge + key} value={judge}>{getInitials(judge)}</option>
              )}
            </select>
          </div>
        </DataTableToolBar>
        : <></>}

    </DataTableCore>
  );
};

PublicationControl.propTypes = {
  /** Данные */
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.string.isRequired,
  all: PropTypes.string.isRequired
};


export default PublicationControl;
