import React, { useState } from "react";
import PropTypes from "prop-types";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import DataTableCore from "../DataTableCore";
import DataTableToolBar from "../DataTableCore/DataTableToolBar";
import CategoryListFile from "./CategoryListFile";
import PdfModal from "../../PdfModal";

const CategoryDataTable = ({ rows }) => {

  const columns = Object.keys(rows[0]);
  const [currentPage, setCurrentPage] = useState(0); // текущая страница
  const [modalOpened, setModalOpened] = useState(false);

  const filter = (rows, query) => {
    const findQuery = rows.filter((row) => query !== "" ? row.NAME.toLowerCase().indexOf(query.toLowerCase()) > -1 && row.PREFIX !== "" : row.NAME.toLowerCase().indexOf(query.toLowerCase()) > -1);

    function findParents(array) {
      return rows.filter((row) =>
        array.some(
          (item) => item.PARENT_VA_CODE === row.VA_CODE || item.VA_CODE === row.VA_CODE
        )
      );
    }

    findParents.propTypes = {
      /** Массив элементов  */
      array: PropTypes.array.isRequired
    };

    if (query === "") {
      return findParents(findQuery);
    }
    return findParents(findQuery);
  };

  filter.propTypes = {
    /** Массив элементов  */
    rows: PropTypes.array.isRequired,
    /** Поисковой запрос */
    query: PropTypes.string
  };

  const tableGrColumns = {
    "PREFIX": "Префикс",
    "NAME": "Название",
    "PARENT_VA_CODE": "PARENT_VA_CODE",
    "VA_CODE": "VA_CODE"
  };

  const handleModalClosed = () => {
    setModalOpened(false);
  };

  const handleModalOpen = () => {
    setModalOpened(true);
  };

  return (
    <DataTableCore
      classname="mt-7"
      rows={rows}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      tableID="cases-over-period"
      isLoading="false"
      columns={columns}
      itemsContainerClassNames=""
      initSortColumn={columns[3]}
      placeholder="Поиск по категориям гражданских и административных дел"
      filterCallback={filter}
      sortCallback={null}
      makeItem={null}
      table={{ isTable: "true", startColumn: 0, endColumn: 2, columnNames: tableGrColumns, coltosort: [] }}
    >

      <DataTableToolBar className='mt-3'>
        <div className="flex items-center justify-between w-full">
          <div />

          {/* PDF */}
          <div className="flex items-center gap-2">

            <PDFDownloadLink
              document={<CategoryListFile list={rows} />}
              fileName='Категории_гражданских_дел'
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

            <button type="button" title="Предпросмотр" onClick={handleModalOpen}
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
      <PdfModal onModalClose={handleModalClosed} open={modalOpened} setOpen={setModalOpened} >
        <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
          <CategoryListFile list={rows} />
        </PDFViewer>
      </PdfModal>

    </DataTableCore>
  );
};

CategoryDataTable.propTypes = {
  /** Массив элементов  */
  rows: PropTypes.array.isRequired
};

export default CategoryDataTable;
