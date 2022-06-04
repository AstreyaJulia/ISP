import React, {Fragment} from "react";
import Checkbox from "../../../components/elements/Checkbox";
import {PlusIcon} from "@heroicons/react/solid";
import Dot from "../../../components/elements/Dot";
import BasicButton from "../../../components/elements/BasicButton";
const filters = [
    {label: "События", color: "indigo", className: ""},
    {label: "Отпуск", color: "green", className: ""},
    {label: "Дежурство", color: "cyan", className: ""},
    {label: "Важно", color: "yellow", className: ""},
    {label: "Праздники", color: "red", className: ""},
    {label: "Категория 1", color: "pink", className: ""},
    {label: "Категория 2", color: "blue", className: ""},
    {label: "Категория 3", color: "orange", className: ""},
    {label: "Категория 4", color: "teal", className: ""}
];

/** Сайдбар слева календаря
 * @param props - handleAddEventSidebar, toggleSidebar, updateFilter, updateAllFilters, store, dispatch
 * @returns {JSX.Element}
 * @constructor
 */
const SidebarLeft = props => {
    const {handleAddEventSidebar, toggleSidebar, updateFilter, updateAllFilters, store, dispatch} = props;

    /** Хандл клика по событию */
    const handleAddEventClick = () => {
        toggleSidebar(false);
        handleAddEventSidebar();
    };

    return (
        <Fragment>
            <div className="sidebar-wrapper">
                <BasicButton label="Cобытие" onClick={handleAddEventClick} className="w-full mb-6">
                    <PlusIcon className="w-4 h-4 mr-2"/>
                </BasicButton>
                <p className="section-label mb-4">
                    <span className="font-bold uppercase text-gray-600 dark:text-gray-500 text-sm">Фильтр</span>
                </p>
                <Checkbox
                    size="4"
                    id="view-all"
                    color="gray"
                    onChange={e => dispatch(updateAllFilters(e.target.checked))}
                    checked={store.selectedCalendars.length === filters.length}
                    label="Все"
                    className="select-all mb-3">
                    <Dot className="mr-2" color="gray" size="4" />
                </Checkbox>
                <div className="calendar-events-filter">
                    {filters.length &&
                        filters.map(filter => {
                            return (
                                <Checkbox
                                    key={`${filter.color}-key`}
                                    size="4"
                                    id={`${filter.color}-event`}
                                    color="gray"
                                    onChange={() => {
                                        dispatch(updateFilter(filter.color))
                                    }}
                                    checked={store.selectedCalendars.includes(filter.color)}
                                    label={filter.label}
                                    className={
                                        [filter.className, "mb-3"].join(" ")}>
                                    <Dot className="mr-2" color={filter.color} size="4" />
                                </Checkbox>
                            )
                        })}
                </div>
            </div>
            <div className="mt-auto">
            </div>
        </Fragment>
    )
};

export default SidebarLeft
