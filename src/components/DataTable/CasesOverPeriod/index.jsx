import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import DataTableCore from "../DataTableCore";
import Badge from "../../Badge";
import CaseInfoModal from "../../CaseInfoModal";
import CaseListCard from "../../CaseListCard";
import Alert from "../../Alert";
import DataTableToolBar from "../DataTableCore/DataTableToolBar";
import PdfModal from "../../PdfModal";
import CasesOverPeriodListFile from "./CasesOverPeriodListFile";

const CasesOverPeriod = ({ data, isLoading }) => {

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
    }, 1500);
  };

  const makeItem = (item, key, query) =>
    <CaseListCard key={key} item={item} query={query} handleOnDblclick={(evt) => handleCardDoubleClick(evt, item)}>
      {item.INFO.toLowerCase().includes("Д.б. рассм./изг.реш. в оконч.форме до".toLowerCase()) ? <p
          className="font-medium text-xs text-slate-600 dark:text-slate-200 flex flex-wrap justify-start items-center text-left mb-1">
          До: <Badge size="small" shape="rounded" className="ml-1"
                     color="red"
                     item={item.INFO.slice(item.INFO.toLowerCase().lastIndexOf("Д.б. рассм./изг.реш. в оконч.форме до:".toLowerCase()) + 39, item.INFO.toLowerCase().lastIndexOf("Д.б. рассм./изг.реш. в оконч.форме до:".toLowerCase()) + 49)} />
        </p>
        : ""}
      <p
        className="font-medium text-xs text-slate-600 dark:text-slate-200 flex flex-wrap justify-start items-center text-left mb-1">Рассм.: {item.RESULT_DATE}</p>
    </CaseListCard>
  ;

  const filter = (rows, query, columns) => rows?.filter((row) =>
    columns.slice(3, 6).filter((item) => item !== "RESULT_DATE").some(
      (column) => row[column].toLowerCase().indexOf(query.toLowerCase()) > -1
    )
  );

  const handlePDFModalClosed = () => {
    setModalPDFOpened(false);
  };

  const handlePDFModalOpen = () => {
    setModalPDFOpened(true);
  };

  return (
    <>
      <Alert alertType='info' containerClassName='mt-7'>
        <p className="text-sm text-blue-800 dark:text-blue-200 flex items-center">
          <span>Нажмите дважды</span>
          <span title="левой кнопкой мыши" className='mx-1'>
                <svg className="h-5 w-5" strokeWidth="1.5" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 10V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V9C4 5.13401 7.13401 2 11 2H12C16.4183 2 20 5.58172 20 10Z"
                    stroke="currentColor" strokeLinecap="round" />
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
        columns={columns}
        itemsContainerClassNames="grid grid-cols-2 gap-3"
        initSortColumn={columns[0]}
        placeholder="Поиск по делам, рассмотренным свыше срока: номер дела / стороны / лица"
        filterCallback={filter}
        sortCallback={null}
        makeItem={makeItem}
        table={{ isTable: "false", startColumn: null, endColumn: null, columnNames: null, coltosort: [] }}
      >
        <DataTableToolBar className='mt-3'>
          <div className="flex items-center justify-between w-full">
            <div />

            {/* PDF */}
            <div className="flex items-center gap-2">

              <PDFDownloadLink
                document={<CasesOverPeriodListFile list={rows} />}
                fileName='Дела_рассмотренные_свыше_срока'
                style={{ textDecoration: "none" }}
              >
                {({ loading }) => (
                  <button type="button" disabled={loading} title="Сохранить в файл"
                          className="bg-transparent border-0 rounded-full hover:bg-slate-300/30 p-2 text-gray-500 dark:text-gray-400">
                    {loading ? <svg className="animate-spin w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.2" fillRule="evenodd" clipRule="evenodd"
                            d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            fill="currentColor" />
                      <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                  stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>}
                  </button>
                )}
              </PDFDownloadLink>

              <button type="button" title="Предпросмотр" onClick={handlePDFModalOpen}
                      className="bg-transparent border-0 rounded-full hover:bg-slate-300/30 p-2 text-gray-500 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>

            </div>

          </div>
        </DataTableToolBar>
        <PdfModal onModalClose={handlePDFModalClosed} open={modalPDFOpened} setOpen={setModalPDFOpened} >
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
          {selectedCase.INFO?.length > 0 && selectedCase.INFO !== "null" ? selectedCase.INFO.split(";").map((item, key) =>
              <p key={key} className="text-slate-700 dark:text-slate-300 text-sm">{item};</p>) :
            <p className="text-slate-700 dark:text-slate-300 text-sm">Нет информации</p>}
        </div>
      </CaseInfoModal>
    </>

  );
};

CasesOverPeriod.propTypes = {
  /** Массив элементов  */
  data: PropTypes.array.isRequired,
  /** Состояние получения данных */
  isLoading: PropTypes.string.isRequired
};

export default CasesOverPeriod;
