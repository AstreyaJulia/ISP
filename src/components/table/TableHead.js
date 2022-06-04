import React, {useState} from "react";
import classNames from "classnames";

/** Шапка таблицы
 * @param columns - объект с колонками:
 * {label: лейбл (название) колонки, accessor: имя колонки в массиве данных тела таблицы, sortable: (bool) - нужна ли сортировка колонке}
 * @param handleSorting - обработчик сортировки
 * @returns {JSX.Element}
 * @constructor
 */
const TableHead = ({columns, handleSorting}) => {

    /** Стейт колонки, по которой текущая сортировка */
    const [sortField, setSortField] = useState("");
    /** Стейт порядка сортировки колонки */
    const [order, setOrder] = useState("asc");

    /** Обработчик смены сортировки
     * @param accessor - имя колонки таблицы
     */
    const handleSortingChange = (accessor) => {
        const sortOrder =
            accessor === sortField && order === "asc" ? "desc" : "asc";
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
    };

    return (
        <thead className="bg-gray-50 dark:bg-gray-700">
        <tr>
            {columns.map(({label, accessor, sortable}) => {
                const cl = sortable
                    ? sortField && sortField === accessor && order === "asc"
                        ? "up"
                        : sortField && sortField === accessor && order === "desc"
                            ? "down"
                            : "default"
                    : "";
                return <th
                    key={accessor}
                    scope="col"
                    className={classNames("relative px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider", cl)}
                    onClick={sortable ? () => handleSortingChange(accessor) : null}
                >
                    {label}
                </th>;
            })}
        </tr>
        </thead>
    );
};

export default TableHead;