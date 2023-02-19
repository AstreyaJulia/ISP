import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { PDFViewer } from '@react-pdf/renderer';
import DataTableCore from '../DataTableCore';
import Badge from '../../Badge';
import CaseListCard from '../../CaseListCard';
import DataTableToolBar from '../DataTableCore/DataTableToolBar';
import NoLastEventsListFile from './NoLastEventsListFile';
import PdfModal from '../../PdfModal';
import { getInitials } from '../../../utils/getInitials';
import { getUniqueArrayValuesByKey } from '../../../utils/getArrayValuesByKey';

const NoLastEvents = ({ data, isLoading, error, all }) => {
  const [rows, setRows] = useState(data ?? []);
  const columns = Object.keys(data[0] ?? []);
  const [selectedFilter, setSelectedFilter] = useState({ JUDGE_NAME: 'All' });
  const [judgesList, setJudgesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // текущая страница
  const [modalPDFOpened, setModalPDFOpened] = useState(false);

  useEffect(() => {
    setRows(data);
    setJudgesList(getUniqueArrayValuesByKey(data ?? [], 'JUDGE_NAME').sort((a, b) => a.localeCompare(b)));
    // eslint-disable-next-line
  }, [isLoading]);

  const makeItem = (item, key, query) => (
    <CaseListCard key={key} item={item} query={query}>
      <p className="font-medium text-xs text-gray-600 dark:text-gray-200 flex flex-wrap justify-start items-center text-left mb-1">
        Посл.событие:
        <Badge size="small" shape="rounded" className="ml-1" color="indigo" item={item.LAST_EVENT_DATE} />
      </p>
    </CaseListCard>
  );

  const filter = (rows, query, columns) =>
    rows?.filter((row) =>
      columns
        .slice(1, 8)
        .filter(
          (item) =>
            item !== 'CASE_ID' &&
            item !== 'JUDGE_ID' &&
            item !== 'JUDGE_NAME' &&
            item !== 'LAST_EVENT_DATE' &&
            item !== 'LAST_EVENT_NAME'
        )
        .some((column) => row[column].toLowerCase().indexOf(query.toLowerCase()) > -1)
    );

  const handlePDFModalClosed = () => {
    setModalPDFOpened(false);
  };

  const handlePDFModalOpen = () => {
    setModalPDFOpened(true);
  };

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
    <>
      <DataTableCore
        classname="mt-5"
        rows={rows ?? []}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        tableID="no-last-events"
        isLoading={isLoading}
        error={error}
        columns={columns}
        itemsContainerClassNames={isLoading === 'true' ? 'flex w-full' : 'grid grid-cols-2 gap-3'}
        initSortColumn={columns[0]}
        placeholder="Поиск по делам, не отмеченным более 5 дней после передачи, более 1 дня кроме переданных судье: номер дела / стороны / лица"
        filterCallback={filter}
        sortCallback={null}
        makeItem={makeItem}
        table={{ isTable: 'false', startColumn: null, endColumn: null, columnNames: null, coltosort: [] }}
      >
        <DataTableToolBar className="mt-3" isLoading={isLoading} error={error}>
          <div className="flex items-center justify-between w-full">
            {all === 'true' ? (
              <div className="flex items-center ml-3 justify-start">
                <label
                  htmlFor="JUDGE_NAME"
                  className="shrink-0 block text-sm font-medium text-gray-700 dark:text-gray-300 mr-2"
                >
                  Судья:
                </label>
                <select
                  id="JUDGE_NAME"
                  name="JUDGE_NAME"
                  defaultValue={selectedFilter.JUDGE_NAME}
                  onChange={filterSelectChangeHandler}
                  className="grow-0 mt-1 block pl-3 pr-10 py-2 text-base bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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
              <div />
            )}

            {/* PDF */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                title="Печать"
                onClick={handlePDFModalOpen}
                className="bg-transparent border-0 rounded-full hover:bg-gray-300/30 p-2 text-gray-500 dark:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </DataTableToolBar>
        <PdfModal onModalClose={handlePDFModalClosed} open={modalPDFOpened} setOpen={setModalPDFOpened}>
          <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
            <NoLastEventsListFile list={rows} />
          </PDFViewer>
        </PdfModal>
      </DataTableCore>
    </>
  );
};

NoLastEvents.propTypes = {
  /** Массив элементов  */
  data: PropTypes.array.isRequired,
  /** Состояние получения данных */
  isLoading: PropTypes.string.isRequired,
  error: PropTypes.string,
  all: PropTypes.string,
};

export default NoLastEvents;
