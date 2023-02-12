import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { compareDesc, intervalToDuration, parse } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { PDFViewer } from '@react-pdf/renderer';
import { getUniqueArrayValuesByKey } from '../../../utils/getArrayValuesByKey';
import { getInitials } from '../../../utils/getInitials';
import DataTableCore from '../DataTableCore';
import Badge from '../../Badge';
import CaseListCard from '../../CaseListCard';
import DataTableToolBar from '../DataTableCore/DataTableToolBar';
import Alert from '../../Alert';
import CaseInfoModal from '../../CaseInfoModal';
import PdfModal from '../../PdfModal';
import ProcessedListFile from './ProcessedListFile';

const Processed = ({ data, isLoading, all, error }) => {
  const [rows, setRows] = useState(data ?? []);
  const columns = Object.keys(data[0] ?? []);
  const [selectedFilter, setSelectedFilter] = useState({ JUDGE_NAME: 'All', CASE_STATUS: 'All' });
  const [currentPage, setCurrentPage] = useState(0); // текущая страница
  const [judgesList, setJudgesList] = useState([]);
  const [statusList, setStatusList] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedCase, setSelectedCase] = useState({});
  const [modalPDFOpened, setModalPDFOpened] = useState(false);

  useEffect(() => {
    setRows(data);
    setJudgesList(getUniqueArrayValuesByKey(data ?? [], 'JUDGE_NAME').sort((a, b) => a.localeCompare(b)));
    setStatusList(getUniqueArrayValuesByKey(data ?? [], 'CASE_STATUS').sort((a, b) => a.localeCompare(b)));
    // eslint-disable-next-line
  }, [isLoading]);

  const handleCardDoubleClick = (evt, item) => {
    evt.preventDefault();
    setSelectedCase(item);
    setModalOpened(true);
  };

  const handleModalClosed = () => {
    setModalOpened(false);
    setTimeout(() => {
      setSelectedCase({});
    }, 200);
  };

  const handlePDFModalClosed = () => {
    setModalPDFOpened(false);
  };

  const handlePDFModalOpen = () => {
    setModalPDFOpened(true);
  };

  const getStatusSettings = (status, item) => {
    const statusSettings = {
      motionless: { title: 'Без движения', color: 'red' },
      process: { title: 'Рассматривается', color: 'indigo' },
      stopped: { title: 'Приостановлено', color: 'orange' },
    };
    if (status) {
      return statusSettings[status][item];
    }
    return statusSettings.motionless[item];
  };

  const getCaseUntilColor = (date) => {
    if (date === 'null' || date === null) return 'indigo';
    if (compareDesc(new Date(), parse(date, 'dd.MM.yyyy', new Date(), { locale: ru })) === -1) return 'red';

    const { days, months } = intervalToDuration({
      start: new Date(),
      end: parse(date, 'dd.MM.yyyy', new Date(), { locale: ru }),
    });
    const daysCount = months > 0 ? months * 30 + days : days;

    if (daysCount <= 7) return 'red';
    if (daysCount > 7 && daysCount < 14) return 'yellow';
    return 'green';
  };

  const getCaseMotionUntilColor = (date) => {
    if (date === 'null' || date === null) return 'indigo';
    if (compareDesc(new Date(), parse(date, 'dd.MM.yyyy', new Date(), { locale: ru })) === -1) return 'red';

    const { days, months } = intervalToDuration({
      start: new Date(),
      end: parse(date, 'dd.MM.yyyy', new Date(), { locale: ru }),
    });
    const daysCount = months > 0 ? months * 30 + days : days;

    if (daysCount <= 1) return 'red';
    if (daysCount > 1 && daysCount < 7) return 'yellow';
    return 'green';
  };

  const makeItem = (item, key, query) => (
    <CaseListCard key={key} item={item} query={query} handleOnDblclick={(evt) => handleCardDoubleClick(evt, item)}>
      {item.INFO.toLowerCase().includes('Д.б. рассм./изг.реш. в оконч.форме до'.toLowerCase()) ? (
        <p className="font-medium text-xs text-gray-600 dark:text-gray-200 flex flex-wrap justify-start items-center text-left mb-1">
          Рассм. до:{' '}
          <Badge
            size="small"
            shape="rounded"
            className="ml-1"
            color={getCaseUntilColor(
              item?.INFO?.slice(
                item?.INFO?.toLowerCase().lastIndexOf('Д.б. рассм./изг.реш. в оконч.форме до:'.toLowerCase()) + 39,
                item?.INFO?.toLowerCase().lastIndexOf('Д.б. рассм./изг.реш. в оконч.форме до:'.toLowerCase()) + 49
              ) ?? null
            )}
            item={item.INFO.slice(
              item.INFO.toLowerCase().lastIndexOf('Д.б. рассм./изг.реш. в оконч.форме до:'.toLowerCase()) + 39,
              item.INFO.toLowerCase().lastIndexOf('Д.б. рассм./изг.реш. в оконч.форме до:'.toLowerCase()) + 49
            )}
          />
        </p>
      ) : (
        ''
      )}
      <Badge
        size="small"
        shape="rounded"
        className="ml-1"
        color={getStatusSettings(item?.CASE_STATUS, 'color')}
        item={getStatusSettings(item?.CASE_STATUS, 'title')}
      />
      {item?.MOTIONLES_DATE !== '' ? (
        <p className="font-medium text-xs text-gray-600 dark:text-gray-200 flex flex-wrap justify-start items-center text-left mb-1">
          Ост. б/движ.: {item?.MOTIONLES_DATE}
        </p>
      ) : (
        ''
      )}
      {item?.STOP_DATE !== '' ? (
        <p className="font-medium text-xs text-gray-600 dark:text-gray-200 flex flex-wrap justify-start items-center text-left mb-1">
          Приост.: {item?.STOP_DATE}
        </p>
      ) : (
        ''
      )}
      {item?.DATE_UNTIL !== '' ? (
        <p className="font-medium text-xs text-gray-600 dark:text-gray-200 flex flex-wrap justify-start items-center text-left mb-1">
          Контр. дата:
          <Badge
            size="small"
            shape="rounded"
            className="ml-1"
            color={getCaseMotionUntilColor(item?.DATE_UNTIL ?? null)}
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
    <>
      <Alert alertType="info" containerClassName="mt-7">
        <p className="text-sm text-blue-800 dark:text-blue-200 flex items-center">
          <span>Нажмите дважды</span>
          <span title="левой кнопкой мыши" className="mx-1">
            <svg
              className="h-5 w-5"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 10V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V9C4 5.13401 7.13401 2 11 2H12C16.4183 2 20 5.58172 20 10Z"
                stroke="currentColor"
                strokeLinecap="round"
              />
              <path d="M12 2V8.4C12 8.73137 11.7314 9 11.4 9H4" stroke="currentColor" strokeLinecap="round" />
            </svg>
          </span>
          <span>на карточке для отображения информации по делу</span>
        </p>
      </Alert>

      <DataTableCore
        classname="mt-7"
        rows={rows}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        tableID="processed_cases"
        isLoading={isLoading}
        error={error}
        columns={columns}
        itemsContainerClassNames={isLoading === 'true' ? 'flex w-full' : 'grid grid-cols-2 gap-3'}
        initSortColumn={columns[2]}
        placeholder="Поиск по нерассмотренным делам: номер дела / стороны / лица"
        filterCallback={filter}
        sortCallback={null}
        makeItem={makeItem}
        table={{ isTable: 'false', startColumn: null, endColumn: null, columnNames: null, coltosort: [] }}
      >
        <DataTableToolBar className="mt-3">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
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
                <></>
              )}
              <div className="flex items-center ml-3 justify-start">
                <label
                  htmlFor="CASE_STATUS"
                  className="shrink-0 block text-sm font-medium text-gray-700 dark:text-gray-300 mr-2"
                >
                  Статус:
                </label>
                <select
                  id="CASE_STATUS"
                  name="CASE_STATUS"
                  defaultValue={selectedFilter.CASE_STATUS}
                  onChange={filterSelectChangeHandler}
                  className="grow-0 mt-1 block pl-3 pr-10 py-2 text-base bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value="All">Все</option>
                  {statusList.map((status, key) => (
                    <option key={status + key} value={status}>
                      {getStatusSettings(status, 'title')}
                    </option>
                  ))}
                </select>
              </div>
            </div>
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
            <ProcessedListFile list={rows} />
          </PDFViewer>
        </PdfModal>
      </DataTableCore>

      <CaseInfoModal open={modalOpened} setOpen={setModalOpened} onModalClose={handleModalClosed}>
        <div className="mt-7">
          <Badge
            size="small"
            shape="rounded"
            className="mb-2"
            color={getStatusSettings(selectedCase?.CASE_STATUS ?? null, 'color')}
            item={getStatusSettings(selectedCase?.CASE_STATUS ?? null, 'title')}
          />
          <div className="flex items-center gap-2 mb-5">
            {selectedCase?.MOTIONLES_DATE !== '' ? (
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Ост. б./движ.: {selectedCase?.MOTIONLES_DATE}
              </p>
            ) : (
              ''
            )}
            {selectedCase?.STOP_DATE !== '' ? (
              <p className="text-gray-700 dark:text-gray-300 text-sm">Приост.: {selectedCase?.STOP_DATE}</p>
            ) : (
              ''
            )}
            {selectedCase?.DATE_UNTIL !== '' ? (
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                до:
                <Badge
                  size="small"
                  shape="rounded"
                  className="ml-1"
                  color={getCaseUntilColor(selectedCase?.DATE_UNTIL ?? null)}
                  item={selectedCase?.DATE_UNTIL}
                />
              </p>
            ) : (
              ''
            )}
          </div>
          {selectedCase.INFO?.toLowerCase().includes('Д.б. рассм./изг.реш. в оконч.форме до'.toLowerCase()) ? (
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-5">
              Срок рассм. до:{' '}
              <Badge
                size="small"
                shape="rounded"
                className="ml-1"
                color={getCaseUntilColor(
                  selectedCase?.INFO?.slice(
                    selectedCase?.INFO?.toLowerCase().lastIndexOf(
                      'Д.б. рассм./изг.реш. в оконч.форме до:'.toLowerCase()
                    ) + 39,
                    selectedCase?.INFO?.toLowerCase().lastIndexOf(
                      'Д.б. рассм./изг.реш. в оконч.форме до:'.toLowerCase()
                    ) + 49
                  ) ?? null
                )}
                item={selectedCase.INFO.slice(
                  selectedCase.INFO.toLowerCase().lastIndexOf('Д.б. рассм./изг.реш. в оконч.форме до:'.toLowerCase()) +
                    39,
                  selectedCase.INFO.toLowerCase().lastIndexOf('Д.б. рассм./изг.реш. в оконч.форме до:'.toLowerCase()) +
                    49
                )}
              />
            </p>
          ) : (
            ''
          )}
          <p className="text-gray-600 dark:text-gray-400 text-sm font-bold mb-2">Стороны лица/по делу:</p>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-5">{selectedCase.PARTS_FIO}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-bold mb-2">Категория / статья:</p>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-5">{selectedCase.CAT}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-bold mb-2">Информация:</p>
          {selectedCase.INFO?.length > 0 && selectedCase.INFO !== 'null' ? (
            selectedCase.INFO.split(';').map((item, key) => (
              <p key={key} className="text-gray-700 dark:text-gray-300 text-sm">
                {item};
              </p>
            ))
          ) : (
            <p className="text-gray-700 dark:text-gray-300 text-sm">Нет информации</p>
          )}
        </div>
      </CaseInfoModal>
    </>
  );
};

Processed.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.string.isRequired,
  all: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default Processed;
