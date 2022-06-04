import React, {memo, useEffect, useRef} from "react";
import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ruLocale from "@fullcalendar/core/locales/ru";
import {events} from "../../../@mock/SampleData";

const CalendarModule = props => {
    const calendarRef = useRef(null);

    const {
        store,
        dispatch,
        calendarApi,
        setCalendarApi,
        handleAddEventSidebar,
        blankEvent,
        selectEvent,
    } = props;

    useEffect(() => {
        if (calendarApi === null) {
            setCalendarApi(calendarRef.current.getApi())
        }
        // eslint-disable-next-line
    }, [calendarApi])

    const calendarOptions = {
        events: store.events.length ? store.events : events,
        plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
        initialView: "dayGridMonth",
        headerToolbar: {
            start: "dayGridMonth,timeGridWeek,timeGridDay today",
            end: "prev,title,next"
        },
        editable: true,
        eventResizableFromStart: false,
        dragScroll: false,
        dayMaxEvents: true,
        navLinks: true,
        locale: ruLocale,

        eventClassNames({event: calendarEvent}) {
            const colorName = calendarEvent._def.extendedProps.calendar

            return [
                // Фоновый цвет событий
                `fc-event-${colorName}`
            ]
        },

        eventClick({event: clickedEvent}) {
            if (clickedEvent._def.ui.display !== "background") {
                dispatch(selectEvent(clickedEvent));
                handleAddEventSidebar();
            }
        },

        dateClick(info) {
            const ev = blankEvent;
            ev.start = info.date;
            ev.end = info.date;
            dispatch(selectEvent(ev));
            handleAddEventSidebar();
        },

        ref: calendarRef
    }

    return (
        <div className="calendar-module p-4">
            <FullCalendar {...calendarOptions} />
        </div>
    )
}

export default memo(CalendarModule)
