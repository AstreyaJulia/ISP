import React from "react";

/** Основная часть таблицы
 * @param tableData - данные таблицы
 * @param columns - объект с колонками:
 * {label: лейбл (название) колонки, accessor: имя колонки в массиве данных тела таблицы, sortable: (bool) - нужна ли сортировка колонке}
 * @returns {JSX.Element}
 * @constructor
 */
const TableBody = ({tableData, columns}) => {
    return (
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-600">
        {tableData.map((data) => {
            return (
                <tr key={data.id}>
                    {columns.map(({accessor}) => {
                        const tData = data[accessor] ? data[accessor] : "——";
                        return <td
                            key={accessor}
                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
                        >
                            {tData}
                        </td>;
                    })}
                </tr>
            );
        })}
        </tbody>
    );
};

export default TableBody;