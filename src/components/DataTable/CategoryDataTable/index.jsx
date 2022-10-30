import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PDFViewer } from '@react-pdf/renderer';
import DataTableCore from '../DataTableCore';
import DataTableToolBar from '../DataTableCore/DataTableToolBar';
import CategoryListFile from './CategoryListFile';
import PdfModal from '../../PdfModal';

const CategoryDataTable = ({ rows }) => {
  const columns = Object.keys(rows[0]);
  const [currentPage, setCurrentPage] = useState(0); // текущая страница
  const [modalOpened, setModalOpened] = useState(false);

  const filter = (rows, query) => {
    const findQuery = rows.filter((row) =>
      query !== ''
        ? row.NAME.toLowerCase().indexOf(query.toLowerCase()) > -1 && row.PREFIX !== ''
        : row.NAME.toLowerCase().indexOf(query.toLowerCase()) > -1
    );

    function findParents(array) {
      return rows.filter((row) =>
        array.some((item) => item.PARENT_VA_CODE === row.VA_CODE || item.VA_CODE === row.VA_CODE)
      );
    }

    findParents.propTypes = {
      /** Массив элементов  */
      array: PropTypes.array.isRequired,
    };

    if (query === '') {
      return findParents(findQuery);
    }
    return findParents(findQuery);
  };

  filter.propTypes = {
    /** Массив элементов  */
    rows: PropTypes.array.isRequired,
    /** Поисковой запрос */
    query: PropTypes.string,
  };

  const tableGrColumns = {
    PREFIX: 'Префикс',
    NAME: 'Название',
    PARENT_VA_CODE: 'PARENT_VA_CODE',
    VA_CODE: 'VA_CODE',
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
      table={{ isTable: 'true', startColumn: 0, endColumn: 2, columnNames: tableGrColumns, coltosort: [] }}
    >
      <DataTableToolBar className="mt-3">
        <div className="flex items-center justify-between w-full">
          <div />

          {/* PDF */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              title="Печать"
              onClick={handleModalOpen}
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
      <PdfModal onModalClose={handleModalClosed} open={modalOpened} setOpen={setModalOpened}>
        <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
          <CategoryListFile list={rows} />
        </PDFViewer>
      </PdfModal>
    </DataTableCore>
  );
};

CategoryDataTable.propTypes = {
  /** Массив элементов  */
  rows: PropTypes.array.isRequired,
};

export default CategoryDataTable;
