import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { PDFViewer } from '@react-pdf/renderer';
import {compareDesc, intervalToDuration, parse} from "date-fns";
import ru from "date-fns/locale/ru";
import DataTableCore from '../DataTableCore';
import Badge from '../../Badge';
import CaseListCard from '../../CaseListCard';
import DataTableToolBar from '../DataTableCore/DataTableToolBar';
import NoLastEventsListFile from './NoLastEventsListFile';
import PdfModal from "../../PdfModal";

const NoLastEvents = ({ data, isLoading }) => {
  const [rows, setRows] = useState(data ?? []);
  const columns = Object.keys(data[0] ?? []);
  const [currentPage, setCurrentPage] = useState(0); // текущая страница
  const [modalPDFOpened, setModalPDFOpened] = useState(false);

  useEffect(() => {
    setRows(data);
    // eslint-disable-next-line
  }, [isLoading]);

  const getCaseLastEventColor = (date) => {
    if (date === 'null' || date === null) return 'indigo';
    if (compareDesc(new Date(), parse(date, 'dd.MM.yyyy', new Date(), { locale: ru })) === -1) return 'red';

    const { days, months } = intervalToDuration({
      start: new Date(),
      end: parse(date, 'dd.MM.yyyy', new Date(), { locale: ru }),
    });
    const daysCount = months > 0 ? (months * 30) + days : days;

    if (daysCount <= 1) return 'green';
    if (daysCount > 1 && daysCount < 7) return 'yellow';
    return 'red';
  };

  const makeItem = (item, key, query) => (
    <CaseListCard key={key} item={item} query={query}>
      <p className="font-medium text-xs text-slate-600 dark:text-slate-200 flex flex-wrap justify-start items-center text-left mb-1">
        Посл.событие:
        <Badge
            size="small"
            shape="rounded"
            className="ml-1"
            color={getCaseLastEventColor(item?.LAST_EVENT_DATE ?? null)}
            item={item.LAST_EVENT_DATE}
        />
      </p>
    </CaseListCard>
  );

  const filter = (rows, query, columns) =>
    rows?.filter((row) =>
      columns
        .slice(2, 7)
          .filter((item) => !['JUDGE_ID', 'JUDGE_NAME', 'LAST_EVENT_DATE', 'LAST_EVENT_NAME'].includes(item))
        .some((column) => row[column].toLowerCase().indexOf(query.toLowerCase()) > -1)
    );

  const handlePDFModalClosed = () => {
    setModalPDFOpened(false);
  };

  const handlePDFModalOpen = () => {
    setModalPDFOpened(true);
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
        columns={columns}
        itemsContainerClassNames={isLoading === 'true' ? 'flex w-full' : 'grid grid-cols-2 gap-3'}
        initSortColumn={columns[0]}
        placeholder="Поиск по делам, не отмеченным более 5 дней после передачи, более 1 дня кроме переданных судье: номер дела / стороны / лица"
        filterCallback={filter}
        sortCallback={null}
        makeItem={makeItem}
        table={{ isTable: 'false', startColumn: null, endColumn: null, columnNames: null, coltosort: [] }}
      >
        <DataTableToolBar className="mt-3">
          <div className="flex items-center justify-between w-full">
            <div />

            {/* PDF */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                title="Печать"
                onClick={handlePDFModalOpen}
                className="bg-transparent border-0 rounded-full hover:bg-slate-300/30 p-2 text-gray-500 dark:text-gray-400"
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
};

export default NoLastEvents;
