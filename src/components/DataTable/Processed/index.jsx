import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { compareDesc, intervalToDuration, parse } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { getUniqueArrayValuesByKey } from '../../../utils/getArrayValuesByKey';
import { getInitials } from '../../../utils/getInitials';
import DataTableCore from '../DataTableCore';
import Badge from '../../Badge';
import CaseListCard from '../../CaseListCard';
import DataTableToolBar from '../DataTableCore/DataTableToolBar';

const Processed = ({ data, isLoading, all }) => {
  const [rows, setRows] = useState(data ?? []);
  const columns = Object.keys(data[0] ?? []);
  const [selectedFilter, setSelectedFilter] = useState({ JUDGE_NAME: 'All', CASE_STATUS: 'All' });
  const [currentPage, setCurrentPage] = useState(0); // текущая страница
  const [judgesList, setJudgesList] = useState([]);
  const [statusList, setStatusList] = useState([]);

  useEffect(() => {
    setRows(data);
    setJudgesList(getUniqueArrayValuesByKey(data ?? [], 'JUDGE_NAME').sort((a, b) => a.localeCompare(b)));
    setStatusList(getUniqueArrayValuesByKey(data ?? [], 'CASE_STATUS').sort((a, b) => a.localeCompare(b)));
    // eslint-disable-next-line
  }, [isLoading]);

  const getStatusSettings = (status, item) => {
    const statusSettings = {
      motionless: { title: 'Без движения', color: 'red' },
      process: { title: 'Рассматривается', color: 'indigo' },
      stopped: { title: 'Приостановлено', color: 'orange' },
    };
    if (status) {
      return statusSettings[status][item];
    }
    return statusSettings[0][item];
  };

  const getCaseUntilColor = (date) => {
    if (date === 'null' || date === null) return 'indigo';
    if (compareDesc(new Date(), parse(date, 'dd.MM.yyyy', new Date(), { locale: ru })) === -1) return 'red';

    const { days, months } = intervalToDuration({
      start: new Date(),
      end: parse(date, 'dd.MM.yyyy', new Date(), { locale: ru }),
    });
    const daysCount = months > 0 ? months * days : days;

    if (daysCount <= 1) return 'red';
    if (daysCount > 1 && daysCount < 3) return 'yellow';
    return 'green';
  };

  const makeItem = (item, key, query) => (
    <CaseListCard key={key} item={item} query={query}>
      <Badge
        size="small"
        shape="rounded"
        className="ml-1"
        color={getStatusSettings(item?.CASE_STATUS, 'color')}
        item={getStatusSettings(item?.CASE_STATUS, 'title')}
      />
      {item?.MOTIONLES_DATE !== '' ? (
        <p className="font-medium text-xs text-slate-600 dark:text-slate-200 flex flex-wrap justify-start items-center text-left mb-1">
          {item?.MOTIONLES_DATE}
        </p>
      ) : (
        ''
      )}
      {item?.STOP_DATE !== '' ? (
        <p className="font-medium text-xs text-slate-600 dark:text-slate-200 flex flex-wrap justify-start items-center text-left mb-1">
          {item?.STOP_DATE}
        </p>
      ) : (
        ''
      )}
      {item?.DATE_UNTIL !== '' ? (
        <p className="font-medium text-xs text-slate-600 dark:text-slate-200 flex flex-wrap justify-start items-center text-left mb-1">
          До:
          <Badge
            size="small"
            shape="rounded"
            className="ml-1"
            color={getCaseUntilColor(item?.DATE_UNTIL ?? null)}
            item={item?.DATE_UNTIL}
          />
        </p>
      ) : (
        ''
      )}
    </CaseListCard>
  );

  const filter = (rows, query, columns) =>
    rows?.filter((row) =>
      columns
        .slice(3, 7)
        .filter((item) => item !== 'JUDGE_NAME' && item !== 'JUDGE_ID')
        .some((column) => row[column].toLowerCase().indexOf(query.toLowerCase()) > -1)
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
        filters[key] !== 'All'
          ? row[key].toLowerCase().indexOf(filters[key].toLowerCase()) > -1
          : row[key].toLowerCase().indexOf(filters[key].toLowerCase()) === -1
      )
    );
  };

  selectFilterFunction.PropTypes = {
    targetArray: PropTypes.array.isRequired,
    filters: PropTypes.array.isRequired,
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
      classname="mt-7"
      rows={rows}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      tableID="processed_cases"
      isLoading={isLoading}
      columns={columns}
      itemsContainerClassNames={isLoading === 'true' ? 'flex w-full' : "grid grid-cols-2 gap-3"}
      initSortColumn={columns[2]}
      placeholder="Поиск по нерассмотренным делам: номер дела / стороны / лица"
      filterCallback={filter}
      sortCallback={null}
      makeItem={makeItem}
      table={{ isTable: 'false', startColumn: null, endColumn: null, columnNames: null, coltosort: [] }}
    >
      <DataTableToolBar className="mt-3">
        {all === 'true' ? (
          <div className="flex items-center ml-3 justify-start">
            <label
              htmlFor="JUDGE_NAME"
              className="shrink-0 block text-sm font-medium text-slate-700 dark:text-slate-300 mr-2"
            >
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
              {judgesList.map((judge, key) => (
                <option key={judge + key} value={judge}>
                  {getInitials(judge)}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <></>
        )}
        <div className="flex items-center ml-3 justify-start">
          <label
            htmlFor="CASE_STATUS"
            className="shrink-0 block text-sm font-medium text-slate-700 dark:text-slate-300 mr-2"
          >
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
            {statusList.map((status, key) => (
              <option key={status + key} value={status}>
                {getStatusSettings(status, 'title')}
              </option>
            ))}
          </select>
        </div>
      </DataTableToolBar>
    </DataTableCore>
  );
};

Processed.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.string.isRequired,
  all: PropTypes.string.isRequired,
};

export default Processed;
