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

  const handleCardDoubleClick = (item, evt) => {
    evt.preventDefault();
    setSelectedCase({ item });
    setModalOpened(true);
  }

  const handleModalClosed = () => {
    setModalOpened(false);
    setSelectedCase({});
  }

  const makeItem = (item, key, query) =>
    <CaseListCard key={key} item={item} query={query} handleOnDblclick={(item, evt) => handleCardDoubleClick(item, evt)}>
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
      <DataTableCore
        classname="mt-7"
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
        <div className='mt-7'>
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
