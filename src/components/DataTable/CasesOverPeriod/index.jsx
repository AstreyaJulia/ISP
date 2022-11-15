import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { PDFViewer } from '@react-pdf/renderer';
import DataTableCore from '../DataTableCore';
import Badge from '../../Badge';
import CaseInfoModal from '../../CaseInfoModal';
import CaseListCard from '../../CaseListCard';
import Alert from '../../Alert';
import DataTableToolBar from '../DataTableCore/DataTableToolBar';
import PdfModal from '../../PdfModal';
import CasesOverPeriodListFile from './CasesOverPeriodListFile';

const CasesOverPeriod = ({ data, isLoading, error }) => {
  const [rows, setRows] = useState(data ?? []);
  const columns = Object.keys(data[0] ?? []);
  const [currentPage, setCurrentPage] = useState(0); // текущая страница
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedCase, setSelectedCase] = useState({});
  const [modalPDFOpened, setModalPDFOpened] = useState(false);

  useEffect(() => {
    setRows(data);
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

  const makeItem = (item, key, query) => (
    <CaseListCard key={key} item={item} query={query} handleOnDblclick={(evt) => handleCardDoubleClick(evt, item)}>
      {item.INFO.toLowerCase().includes('Д.б. рассм./изг.реш. в оконч.форме до'.toLowerCase()) ? (
        <p className="font-medium text-xs text-slate-600 dark:text-slate-200 flex flex-wrap justify-start items-center text-left mb-1">
          До:{' '}
          <Badge
            size="small"
            shape="rounded"
            className="ml-1"
            color="red"
            item={item.INFO.slice(
              item.INFO.toLowerCase().lastIndexOf('Д.б. рассм./изг.реш. в оконч.форме до:'.toLowerCase()) + 39,
              item.INFO.toLowerCase().lastIndexOf('Д.б. рассм./изг.реш. в оконч.форме до:'.toLowerCase()) + 49
            )}
          />
        </p>
      ) : (
        ''
      )}
      <p className="font-medium text-xs text-slate-600 dark:text-slate-200 flex flex-wrap justify-start items-center text-left mb-1">
        Рассм.: {item.RESULT_DATE}
      </p>
    </CaseListCard>
  );
  const filter = (rows, query, columns) =>
    rows?.filter((row) =>
      columns
        .slice(3, 6)
        .filter((item) => item !== 'RESULT_DATE')
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
        classname="mt-5"
        rows={rows ?? []}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        tableID="cases-over-period"
        isLoading={isLoading}
        error={error}
        columns={columns}
        itemsContainerClassNames={isLoading === 'true' ? 'flex w-full' : 'grid grid-cols-2 gap-3'}
        initSortColumn={columns[0]}
        placeholder="Поиск по делам, рассмотренным свыше срока: номер дела / стороны / лица"
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
            <CasesOverPeriodListFile list={rows} />
          </PDFViewer>
        </PdfModal>
      </DataTableCore>
      <CaseInfoModal open={modalOpened} setOpen={setModalOpened} onModalClose={handleModalClosed}>
        <div className="mt-7">
          <p className="text-slate-600 dark:text-slate-400 text-sm font-bold mb-2">Дата рассмотрения дела:</p>
          <p className="text-slate-700 dark:text-slate-300 text-sm mb-5">{selectedCase.RESULT_DATE}</p>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-bold mb-2">Категория / статья:</p>
          <p className="text-slate-700 dark:text-slate-300 text-sm mb-5">{selectedCase.CAT}</p>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-bold mb-2">Информация:</p>
          {selectedCase.INFO?.length > 0 && selectedCase.INFO !== 'null' ? (
            selectedCase.INFO.split(';').map((item, key) => (
              <p key={key} className="text-slate-700 dark:text-slate-300 text-sm">
                {item};
              </p>
            ))
          ) : (
            <p className="text-slate-700 dark:text-slate-300 text-sm">Нет информации</p>
          )}
        </div>
      </CaseInfoModal>
    </>
  );
};

CasesOverPeriod.propTypes = {
  /** Массив элементов  */
  data: PropTypes.array.isRequired,
  /** Состояние получения данных */
  isLoading: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default CasesOverPeriod;
