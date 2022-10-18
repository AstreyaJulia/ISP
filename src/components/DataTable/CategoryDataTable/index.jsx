import React, { useState } from "react";
import PropTypes from "prop-types";
import DataTableCore from "../DataTableCore";

const CategoryDataTable = ({ rows }) => {

  const columns = Object.keys(rows[0]);
  const [currentPage, setCurrentPage] = useState(0); // текущая страница

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

  return (
    <DataTableCore
      classname="mt-5"
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
    />
  );
};

CategoryDataTable.propTypes = {
  /** Массив элементов  */
  rows: PropTypes.array.isRequired
};

export default CategoryDataTable;
