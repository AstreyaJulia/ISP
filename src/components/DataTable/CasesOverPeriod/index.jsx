import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DataTableCore from "../DataTableCore";
import Badge from "../../Badge";
import CaseInfoModal from "../../CaseInfoModal";
import CaseListCard from "../../CaseListCard";

const CasesOverPeriod = ({ data, isLoading }) => {

  const [rows, setRows] = useState(data ?? []);
  const columns = Object.keys(data[0] ?? []);
  const [currentPage, setCurrentPage] = useState(0); // текущая страница
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedCase, setSelectedCase] = useState({});

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

  return (
    <>
      <div className="rounded-md bg-blue-200 dark:bg-blue-600/30 p-4 mt-7">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                 className="h-5 w-5 text-blue-600">
              <path fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3 flex-1 md:flex md:justify-between">
            <p className="text-sm text-blue-800 flex items-center">
              <span>Нажмите дважды</span>
              <span title="левой кнопкой мыши" className='mx-1'>
                <svg className="h-5 w-5 text-blue-500" strokeWidth="1.5" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                  <path
                  d="M20 10V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V9C4 5.13401 7.13401 2 11 2H12C16.4183 2 20 5.58172 20 10Z"
                  stroke="currentColor" strokeLinecap="round" />
                <path d="M12 2V8.4C12 8.73137 11.7314 9 11.4 9H4" stroke="currentColor" strokeLinecap="round" />
                </svg>
              </span>
              <span>на карточке для отображения информации по делу</span>
            </p>
          </div>
        </div>
      </div>
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
      />
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
