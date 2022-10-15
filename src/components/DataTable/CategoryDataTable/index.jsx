import React from "react";
import DataTableCore from "../DataTableCore";

const CategoryDataTable = ({ rows }) => {

  const columns = Object.keys(rows[0]);

  const sort = (column, asc, rows) => {
    return rows.sort((a, b) => {
      if (parseInt(a[column], 10) > parseInt(b[column], 10)) return asc ? -1 : 1;
      if (parseInt(b[column], 10) > parseInt(a[column], 10)) return asc ? 1 : -1;
      return 0;
    });
  }

  const filter = (rows, query, columns) => {
    const findQuery = rows.filter((row) => query !== '' ? row.NAME.toLowerCase().indexOf(query.toLowerCase()) > -1 && row.PREFIX !== '' : row.NAME.toLowerCase().indexOf(query.toLowerCase()) > -1)

    function findParents(array) {
      return rows.filter((row) =>
        array.some(
          (item) => item.PARENT_VA_CODE === row.VA_CODE || item.VA_CODE === row.VA_CODE
        )
      )
    }

    if (query === '') {
      return findParents(findQuery)
    }
    return findParents(findQuery)
  };

  const tableGrColumns = {"PREFIX": 'Префикс', "NAME": 'Название', "PARENT_VA_CODE": 'PARENT_VA_CODE', "VA_CODE": 'VA_CODE'}

  return (
  <DataTableCore
    rows={rows}
    tableID="cases-over-period"
    isLoading="false"
    columns={columns}
    itemsContainerClassNames=""
    initSortColumn={columns[3]}
    placeholder="Поиск по категориям гражданских и административных дел"
    filterCallback={filter}
    sortCallback={null}
    makeItem={null}
    table={{isTable: 'true', startColumn: 0, endColumn: 2, columnNames: tableGrColumns, coltosort: []}}
  />
)
};

export default CategoryDataTable;
