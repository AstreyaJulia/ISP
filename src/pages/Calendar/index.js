import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ruLocale from "@fullcalendar/core/locales/ru";

import BasicPage from "../pagesLayouts/BasicPage";
import Card from "../../components/Card";
import { CalendarToolbar } from "./CalendarToolbar";
import { useDispatch, useSelector } from "../../store";
import {
  closeModal,
  getEventById,
  getEvents,
  openModal,
  resetEvents,
  selectEvent
} from "../../store/slices/calendar";
import EventsModal from "./EventsModal";
import useAuth from "../../hooks/useAuth";
import { formatYyyyMmDdDate } from "../../utils/formatTime";
import { classNames } from "../../utils/classNames";

const Calendar = () => {
  const dispatch = useDispatch();

  const calendarRef = useRef(null);
  const [date, setDate] = useState(new Date());
  const [viewDates, setViewDates] = useState({ start: new Date(), end: new Date() });
  const [view, setView] = useState("dayGridMonth");
  const [isEdit, setIsEdit] = useState(false);

  /** Состояние пользователя */
  const { initialize, user } = useAuth();

  const { isOpenModal, events, event } = useSelector((state) => state.calendar);

  useEffect(() => {
    initialize();
    fetchEvents()
    return () => resetEvents() // очистка событий после выхода из страницы
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() =>{
    const interval = setInterval(() => fetchEvents(), (1000 * 60 * 5)) // милисекунды * секунды * минуты
    // очистка интервала
    return () => clearInterval(interval)
  })

  const fetchEvents = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      dispatch(getEvents(formatYyyyMmDdDate(calendarApi.currentData.dateProfile.renderRange.start), formatYyyyMmDdDate(calendarApi.currentData.dateProfile.renderRange.end)));
    }
  }

  const handleClickDatePrev = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.prev();
      setDate(calendarApi.getDate());
      dispatch(getEvents(formatYyyyMmDdDate(calendarApi.currentData.dateProfile.renderRange.start), formatYyyyMmDdDate(calendarApi.currentData.dateProfile.renderRange.end)));
    }
  };

  const handleClickDateNext = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.next();
      setDate(calendarApi.getDate());
      dispatch(getEvents(formatYyyyMmDdDate(calendarApi.currentData.dateProfile.renderRange.start), formatYyyyMmDdDate(calendarApi.currentData.dateProfile.renderRange.end)));
    }
  };

  const handleClickToday = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.today();
      setDate(calendarApi.getDate());
      dispatch(getEvents(formatYyyyMmDdDate(calendarApi.currentData.dateProfile.renderRange.start), formatYyyyMmDdDate(calendarApi.currentData.dateProfile.renderRange.end)));
    }
  };

  const handleChangeView = (newView) => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.changeView(newView);
      setView(newView);
      dispatch(getEvents(formatYyyyMmDdDate(calendarApi.currentData.dateProfile.renderRange.start), formatYyyyMmDdDate(calendarApi.currentData.dateProfile.renderRange.end)));
    }
  };

  const handleSelectEvent = (arg) => {
    if (arg.event._def.ui.display !== "background" && arg.event._def.ui.display !== "birthday") {
      setIsEdit(true);
      dispatch(selectEvent(arg.event.id));
      if (arg.event.id) {
        dispatch(getEventById(arg.event.id));
      }
    }
  };

  const handleAddEvent = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    setIsEdit(false);
  };

  const eventTitleColors = {
    indigo: "text-indigo-800 dark:text-indigo-300",
    green: "text-green-800 dark:text-green-300",
    cyan: "text-cyan-800 dark:text-cyan-300",
    yellow: "text-yellow-800 dark:text-yellow-300",
    red: "text-red-800 dark:text-red-300",
    pink: "text-pink-800 dark:text-pink-300",
    blue: "text-blue-800 dark:text-blue-300",
    orange: "text-orange-800 dark:text-orange-300",
    teal: "text-teal-800 dark:text-teal-300"
  };

  const renderEventContent = (eventInfo) => (
      <div className="fc-event-main-frame flex items-center">
        {eventInfo.event._def.ui.display === "task" ?
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960" fill="currentColor" stroke="currentColor"
              className={`w-5 h-5 ${eventTitleColors[eventInfo.event._def.extendedProps.color]}`}>
              <path
                d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Z" />
            </svg>

            {eventInfo.event.end < new Date() ?
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                   className="w-4 h-4 ml-0.5 text-red-800 dark:text-red-300">
                <path fillRule="evenodd"
                      d="M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z"
                      clipRule="evenodd" />
              </svg> : ""}
          </>
          : ""
        }

        {eventInfo.event._def.ui.display === "birthday" ?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
               className={`ml-1 w-4 h-4 ${eventTitleColors[eventInfo.event._def.extendedProps.color]}`}>
            <path
              d="M6.75.98l-.884.883a1.25 1.25 0 101.768 0L6.75.98zM13.25.98l-.884.883a1.25 1.25 0 101.768 0L13.25.98zM10 .98l.884.883a1.25 1.25 0 11-1.768 0L10 .98zM7.5 5.75a.75.75 0 00-1.5 0v.464c-1.179.305-2 1.39-2 2.622v.094c.1-.02.202-.038.306-.051A42.869 42.869 0 0110 8.5c1.93 0 3.83.129 5.694.379.104.013.206.03.306.051v-.094c0-1.232-.821-2.317-2-2.622V5.75a.75.75 0 00-1.5 0v.318a45.645 45.645 0 00-1.75-.062V5.75a.75.75 0 00-1.5 0v.256c-.586.01-1.17.03-1.75.062V5.75zM4.505 10.365A41.377 41.377 0 0110 10c1.863 0 3.697.124 5.495.365C16.967 10.562 18 11.838 18 13.28v.693a3.72 3.72 0 01-1.665-.393 5.222 5.222 0 00-4.67 0 3.722 3.722 0 01-3.33 0 5.222 5.222 0 00-4.67 0A3.72 3.72 0 012 13.972v-.693c0-1.441 1.033-2.716 2.505-2.914zM15.665 14.921a5.22 5.22 0 002.335.551V16.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5v-1.028c.8 0 1.6-.183 2.335-.551a3.722 3.722 0 013.33 0c1.47.735 3.2.735 4.67 0a3.722 3.722 0 013.33 0z" />
          </svg>
          : ""
        }

        {eventInfo.event._def.ui.display === "task-completed" ?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960" fill="currentColor" stroke="currentColor"
            className={`w-5 h-5 ${eventTitleColors[eventInfo.event._def.extendedProps.color]}`}>
            <path
              d="m419-321 289-289-43-43-246 246-119-119-43 43 162 162ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z" />
          </svg> : ""
        }

        {eventInfo.timeText !== "" ?
          <div className="fc-event-time ml-0.5">
            {eventInfo.timeText}
          </div> : ""
        }

        <div className="fc-event-title-container ml-0.5">
          <span
            className={classNames(eventInfo.event._def.ui.display === "task-completed" ? "line-through" : "", "fc-event-title fc-sticky")}>
            {eventInfo.event.title}
          </span>
        </div>
      </div>
    );

  return (
    <BasicPage title="Календарь" className="full-height-page mx-auto px-5">
      <Card classname="calendar-module overflow-visible">
        <CalendarToolbar
          date={date}
          view={view}
          onNextDate={handleClickDateNext}
          onPrevDate={handleClickDatePrev}
          onToday={handleClickToday}
          onChangeView={handleChangeView}
          onAddEvent={handleAddEvent}
          dates={viewDates}
        />
        <FullCalendar
          // events={events}
          events={events}
          plugins={[listPlugin, dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={view}
          datesSet={(arg) => {
            setViewDates({ start: arg.start, end: arg.end });
          }}
          headerToolbar={false}
          editable
          ref={calendarRef}
          rerenderDelay={10}
          initialDate={date}
          dayMaxEvents
          eventTimeFormat={{
            // like '14:30:00'
            hour: "2-digit",
            minute: "2-digit",
            meridiem: false
          }}
          navLinks
          eventDisplay="block"
          allDayMaintainDuration
          locale={ruLocale}
          eventClick={handleSelectEvent}
          eventContent={renderEventContent}
          eventClassNames={({ event: calendarEvent }) => [
            `fc-event-${calendarEvent._def.extendedProps.color}`,
            `fc-event-${calendarEvent._def.ui.display}`,
            calendarEvent._def.extendedProps.calendar === "dayoff" || calendarEvent._def.extendedProps.calendar === "short" ? `fc-event-${calendarEvent._def.extendedProps.calendar}` : ""
          ]} // Фоновый цвет событий
        />
      </Card>
      <EventsModal open={isOpenModal} setOpen={handleCloseModal} event={event ?? null} isEdit={isEdit} user={user}
                   updateEvents={() => {
                     // eslint-disable-next-line
                     const calendarEl = calendarRef.current;
                     if (calendarEl) {
                       const calendarApi = calendarEl.getApi();
                       dispatch(getEvents(formatYyyyMmDdDate(calendarApi.currentData.dateProfile.renderRange.start), formatYyyyMmDdDate(calendarApi.currentData.dateProfile.renderRange.end)));
                       handleCloseModal();
                     }
                   }} />
    </BasicPage>
  );
};

export default Calendar;
