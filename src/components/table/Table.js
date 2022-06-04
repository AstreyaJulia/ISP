import {useState} from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import "./table.scss"; /** Стили с значками сортировки, нужен иконочный шрифт MDI */

/** Таблица с сортировкой по столбцам
 * @param data - данные
 * @param columns - столбцы
 * @returns {JSX.Element}
 * @constructor
 */
const Table = ({data, columns}) => {
    /** Стейт */
    const [tableData, setTableData] = useState(data);

    /** Обработчик сортировки
     * @param sortField - поле сортировки
     * @param sortOrder - порядок сортировки
     */
    const handleSorting = (sortField, sortOrder) => {
        if (sortField) {
            const sorted = [...tableData].sort((a, b) => {
                if (a[sortField] === null) return 1;
                if (b[sortField] === null) return -1;
                if (a[sortField] === null && b[sortField] === null) return 0;
                return (
                    a[sortField].toString().localeCompare(b[sortField].toString(), "ru", {
                        numeric: true,
                    }) * (sortOrder === "asc" ? 1 : -1)
                );
            });
            setTableData(sorted);
        }
    };

    return (
        <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-600 sm:rounded-lg">
            <table className="datatable-sorting min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <TableHead {...{columns, handleSorting}}/>
                <TableBody {...{columns, tableData}}/>
            </table>
        </div>
    );
};

export default Table;