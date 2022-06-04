import React, {Fragment, useEffect, useState} from "react";
import CalendarModule from "./calendar/index";
import SidebarLeft from "./calendar/Sidebar";
import AddEventSidebar from "./calendar/AddEventSidebar";
import ContentLayoutWithSidebar from "../../layouts/ContentLayouts/ContentLayoutWithSidebar";
import {useDispatch, useSelector} from "react-redux";
import {
    addEvent,
    fetchEvents,
    removeEvent,
    selectEvent,
    updateAllFilters,
    updateEvent,
    updateFilter
} from "./calendar/store";
import classnames from "classnames";
import {makeArrayKeyValue} from "../../utils";
import {calendCat} from "../../@mock/SampleData";

const breadcrumbs = [{name: "Календарь", href: "#", current: true}];

/** Для использования в Fullcalendar */
const calendarsColor = makeArrayKeyValue(calendCat, "color", "name");

const Calendar = () => {
    const dispatch = useDispatch();
    const store = useSelector(state => state.calendar);

    const [calendarApi, setCalendarApi] = useState(null);
    const [addSidebarOpen, setAddSidebarOpen] = useState(false);
    const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);

    /** Открывает сайдбар */
    const handleAddEventSidebar = () => {
        setAddSidebarOpen(!addSidebarOpen);
    };

    /** Открыает сайдбар слева (с фильтрами )
     * @param val
     */
    const toggleSidebar = val => setLeftSidebarOpen(val);

    /** Пустое событие
     * @type {{allDay: boolean, extendedProps: {calendar: string, guests: *[], description: string, location: string}, start: string, end: string, title: string, url: string}}
     */
    const blankEvent = {
        title: "",
        start: "",
        end: "",
        allDay: false,
        url: "",
        extendedProps: {
            calendar: "",
            guests: [],
            location: "",
            description: ""
        }
    }

    const refetchEvents = () => {
        if (calendarApi !== null) {
            calendarApi.refetchEvents()
        }
    }

    // получаем события при монтировании
    useEffect(() => {
        dispatch(fetchEvents(store.selectedCalendars))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    return (
        <Fragment>
            <ContentLayoutWithSidebar
                boxed={true}
                title="Календарь"
                breadcrumbs={breadcrumbs}
                header="Календарь"
                sidebarSize="small"
                fullHeight={false}
            >
                <ContentLayoutWithSidebar.Sidebar>
                    <div className="p-4">
                        <SidebarLeft
                            store={store}
                            dispatch={dispatch}
                            updateFilter={updateFilter}
                            toggleSidebar={toggleSidebar}
                            updateAllFilters={updateAllFilters}
                            handleAddEventSidebar={handleAddEventSidebar}
                        />
                    </div>
                </ContentLayoutWithSidebar.Sidebar>
                <ContentLayoutWithSidebar.Body>
                    <CalendarModule
                        store={store}
                        dispatch={dispatch}
                        blankEvent={blankEvent}
                        calendarApi={calendarApi}
                        selectEvent={selectEvent}
                        updateEvent={updateEvent}
                        toggleSidebar={toggleSidebar}
                        calendarsColor={calendarsColor}
                        setCalendarApi={setCalendarApi}
                        handleAddEventSidebar={handleAddEventSidebar}
                    />
                    <div
                        className={classnames("body-content-overlay", {
                            show: leftSidebarOpen === true
                        })}
                        onClick={() => toggleSidebar(false)}
                    />
                </ContentLayoutWithSidebar.Body>
            </ContentLayoutWithSidebar>
            <AddEventSidebar
                store={store}
                dispatch={dispatch}
                addEvent={addEvent}
                open={addSidebarOpen}
                selectEvent={selectEvent}
                updateEvent={updateEvent}
                removeEvent={removeEvent}
                calendarApi={calendarApi}
                refetchEvents={refetchEvents}
                calendarsColor={calendarsColor}
                handleAddEventSidebar={handleAddEventSidebar}
            />
        </Fragment>
    );
};

export default Calendar;