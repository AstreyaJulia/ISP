import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getUniqueArrayValuesByKey } from "../../../utils/getArrayValuesByKey";
import { getInitials } from "../../../utils/getInitials";
import DataTableCore from "../DataTableCore";
import { Avatar } from "../../Avatar";
import { caseTypesSettings } from "../../../config";
import { getHighlightedText } from "../../../utils/getHighlightedText";
import Badge from "../../Badge";

const Processed = ({ data, isLoading, all }) => {

  const [rows, setRows] = useState(data ?? []);
  const columns = Object.keys(data[0] ?? []);
  const [selectedFilter, setSelectedFilter] = useState({ JUDGE_NAME: "All", CASE_STATUS: "All" });
  const [currentPage, setCurrentPage] = useState(0); // текущая страница
  const [judgesList, setJudgesList] = useState([]);
  const [statusList, setStatusList] = useState([]);

  useEffect(() => {
    setRows(data);
    setJudgesList(getUniqueArrayValuesByKey(data ?? [], "JUDGE_NAME").sort((a, b) => a.localeCompare(b)));
    setStatusList(getUniqueArrayValuesByKey(data ?? [], "CASE_STATUS").sort((a, b) => a.localeCompare(b)));
    // eslint-disable-next-line
  }, [isLoading]);

  const statusSettings = {
    "motionless": { title: "Без движения", color: "red" },
    "process": { title: "Рассматривается", color: "indigo" },
    "stopped": { title: "Приостановлено", color: "orange" }
  };

  const makeItem = (item, key, query) =>
    <div
      key={key}
      className="p-3 w-full flex items-center rounded-md bg-slate-100 dark:bg-slate-800">
      <div className="flex grow items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col items-start">
            <p
              className="font-medium text-sm text-slate-800 dark:text-slate-200 flex flex-wrap line-clamp-1 justify-start items-center text-left mb-1">
              <Avatar size="6" shape="circle" name={item?.CASE_TYPE}
                      color={caseTypesSettings[item?.CASE_TYPE].color} classname="mr-2" />
              <span>{getHighlightedText(item?.CASE_NUMBER, query)}</span>
            </p>
            <span className="text-xs text-indigo-700 dark:text-indigo-300 mb-2">{getInitials(item?.JUDGE_NAME)}</span>
            <p
              className="text-sm text-slate-700 dark:text-slate-300 flex flex-wrap line-clamp-1 justify-start items-center text-left">
              {getHighlightedText(item?.PARTS_FIO, query)}
            </p>
          </div>
          <div className="flex flex-col items-end shrink-0 gap-1 h-full grow-0">
            <Badge size="small" shape="rounded" className="ml-1"
                   color={statusSettings[item?.CASE_STATUS  ?? "motionless"].color}
                   item={statusSettings[item?.CASE_STATUS  ?? "motionless"].title} />
            {item?.MOTIONLES_DATE !== "" ? <p
              className="font-medium text-xs text-slate-600 dark:text-slate-200 flex flex-wrap justify-start items-center text-left mb-1">До: {item?.MOTIONLES_DATE}</p> : ""}
            {item?.STOP_DATE !== "" ? <p
              className="font-medium text-xs text-slate-600 dark:text-slate-200 flex flex-wrap justify-start items-center text-left mb-1">{item?.STOP_DATE}</p> : ""}
          </div>
        </div>
      </div>
    </div>;

  const filter = (rows, query, columns) => rows?.filter((row) =>
    columns.slice(3, 7).filter((item) => item !== "JUDGE_NAME" && item !== "JUDGE_ID").some(
      (column) => row[column].toLowerCase().indexOf(query.toLowerCase()) > -1
    )
  );

  /** Фильтрует targetArray по массиву значений filters
   * @param targetArray
   * @param filters
   * @returns {*}
   */
  const selectFilterFunction = (targetArray, filters) => {
    const filterKeys = Object.keys(filters);

    return targetArray.filter((row) =>
      filterKeys.every((key) =>
        filters[key] !== "All" ? row[key].toLowerCase().indexOf(filters[key].toLowerCase()) > -1 : row[key].toLowerCase().indexOf(filters[key].toLowerCase()) === -1
      )
    );
  };

  selectFilterFunction.PropTypes = {
    targetArray: PropTypes.array.isRequired,
    filters: PropTypes.array.isRequired
  };

  const filterSelectChangeHandler = (evt) => {
    const { value, id } = evt.target;
    const tempFilter = { ...selectedFilter, [id]: value };
    setSelectedFilter({ ...selectedFilter, [id]: value });
    setCurrentPage(0);
    setRows(selectFilterFunction(data, tempFilter));
  };

  return (
    <DataTableCore
      classname="mt-5"
      rows={rows}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      tableID="processed_cases"
      isLoading={isLoading}
      columns={columns}
      itemsContainerClassNames="grid grid-cols-2 gap-3"
      initSortColumn={columns[2]}
      placeholder="Поиск по нерассмотренным делам: номер дела / стороны / лица"
      filterCallback={filter}
      sortCallback={null}
      makeItem={makeItem}
      table={{ isTable: "false", startColumn: null, endColumn: null, columnNames: null, coltosort: [] }}
    >
      <div className="p-3 bg-slate-100 rounded-md mt-3 mx-4 flex items-center gap-2">
        {all === "true" ? <div className="flex items-center ml-3 justify-start">
          <label htmlFor="JUDGE_NAME"
                 className="shrink-0 block text-sm font-medium text-slate-700 dark:text-slate-300 mr-2">
            Судья:
          </label>
          <select
            id="JUDGE_NAME"
            name="JUDGE_NAME"
            defaultValue={selectedFilter.JUDGE_NAME}
            onChange={filterSelectChangeHandler}
            className="grow-0 mt-1 block pl-3 pr-10 py-2 text-base bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="All">Все</option>
            {judgesList.map((judge, key) =>
              <option key={judge + key} value={judge}>{getInitials(judge)}</option>
            )}
          </select>
        </div> : <></>}
        <div className="flex items-center ml-3 justify-start">
          <label htmlFor="CASE_STATUS"
                 className="shrink-0 block text-sm font-medium text-slate-700 dark:text-slate-300 mr-2">
            Статус:
          </label>
          <select
            id="CASE_STATUS"
            name="CASE_STATUS"
            defaultValue={selectedFilter.CASE_STATUS}
            onChange={filterSelectChangeHandler}
            className="grow-0 mt-1 block pl-3 pr-10 py-2 text-base bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="All">Все</option>
            {statusList.map((status, key) =>
              <option key={status + key} value={status}>{statusSettings[status ?? "motionless"].title}</option>
            )}
          </select>
        </div>
      </div>
    </DataTableCore>
  );
};

Processed.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.string.isRequired,
  all: PropTypes.string.isRequired
};

export default Processed;